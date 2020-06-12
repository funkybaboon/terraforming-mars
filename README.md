# terraforming-mars

Terraforming Mars Boardgame

The board game is great, this repository highly recommends purchasing [it](https://www.amazon.com/Stronghold-Games-6005SG-Terraforming-Board/dp/B01GSYA4K2) for personal use. If you want to play with people online, you can use this tool.

## Demo

You can try online [here](https://terraforming-mars.herokuapp.com/). Please post any issues found. If you plan on playing long running games it is recommended to host the game locally. This demo site is currently not stable and gets restarted during each push to `master`. As this repository is gaining in popularity we attempt to make this demo page stable but it can't be guaranteed that your game will not be lost. Running the game locally will always be straight forward and it is highly recommended to host the game locally and provide the server ip to other players.

## Running

You can run the game server locally if you have `npm` and `node`. To start the game server run the `start` script.

```
npm install
npm run start
```

This will start the game server listening on the default port of 8080. If you then point a web browser to http://localhost:8080 you will be on the create game screen.

Pointing your web browser to http://localhost:8080/games-overview?serverId=_SERVER-ID_ will provide a list of all games available on the server. The secret _SERVER-ID_ is available from the console after starting the server and required to access game administration pages like the games overview.

Additional information on how to setup the game server locally can be found [here](https://docs.google.com/document/d/1r4GlqA6DkrSAtR6MMYmX_nmh6o4igVTqDUUETiJYGt8/edit?usp=sharing) (short version) and [here](https://docs.google.com/document/d/1y-QnffzkQtpasBkDAFQwBoqhLmUpVTzRPybtvmbktDQ/edit?usp=sharing) (detailed version).

Additional information on how to setup the game with docker can be found [here](https://drive.google.com/file/d/14hOxxLrCjhWJimvCyuLc-2JRrXevFiR1/view?usp=sharing).

