import tmi from 'tmi.js';
import emojiRegex from 'emoji-regex';

const appDiv = document.getElementById('app')!;
const regex = emojiRegex();

const params = new URLSearchParams(window.location.search);

if (!params.has('channel')) {
    appDiv.innerText = 'channel not set';

    throw new Error('Channel not set!');
}

const channel = params.get('channel')!;
const numEmotes = parseInt(params.get('numEmotes') ?? '1');
const stepSize = parseInt(params.get('stepSize') ?? '100');
const delay = parseInt(params.get('delay') ?? '250');

const client = new tmi.Client({
    channels: [channel],
});

client.connect();

client.on('message', (_channel, _tags, message, _self) => {
    // console.log(`${tags['display-name']}: ${message}`);
    const emojis = message.match(regex);
    if (emojis != null) {
        // maybe later? https://www.freecodecamp.org/news/how-to-use-twitter-emoji-on-your-website/
        // maybe also BTTV, FFZ, 7TV?

        let counter = 0;
        for (const emoji of emojis) {
            const newDiv = document.createElement('div');
            newDiv.innerText = emoji;
            appDiv.appendChild(newDiv);

            if (++counter >= numEmotes) {
                break;
            }
        }
    }
});

// document.addEventListener("scroll", (event) => {
//   console.log(window.scrollY + window.innerHeight, document.body.scrollHeight);
// });

setInterval(() => {
    const currentScrolled = window.scrollY + window.innerHeight;
    if (currentScrolled < document.body.scrollHeight) {
        window.scrollBy({
            top: stepSize,
            behavior: 'smooth',
        });
    }
}, delay);
