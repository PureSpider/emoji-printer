# emoji-printer
"Print" your emojis from twitch chat on your screen.

Use this URL as a browser source in your OBS. Your channel name *must be* set as a parameter:
```
https://purespider.github.io/emoji-printer/?channel=purespider
```

Additionally you can set these parameters:
| Parameter  | Default value | Required | Description
| --- | --- | --- | ---
| channel | - | ✅ | Twitch channel name in which to listen for emojis
| numEmotes | `1` | ❎ | How many emojis per message will be printed
| stepSize | `100` | ❎ | How far the printer moves with each step
| delay | `250` | ❎ | How long the printer waits between steps

With all parameters set, your browser source URL will look like this:
```
https://purespider.github.io/emoji-printer/?channel=purespider&numEmotes=10&stepSize=25&delay=50
```
