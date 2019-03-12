# FoEI (Forge of Empires Inspector)

> Browser extension that helps you playing Forge of Empires, saving your time and (thereby) giving you an advantage over other players.

## Safe

I believe FoEI is safe enough to be (virtually) undetectable by the game servers.
Mostly, because FoEI does not send _anything_ to the game servers, it only listens to the incoming traffic.
Thus making it (nearly) impossible to detect!

Only two possibilities I see how it can detected are:

* Game code gets changed to detect the 'listening code' that FoEI inserts into the native Javascript (it is not messing with the game code itself!).
  This would be possible but pretty hard, and probably not so robust to implement into the game while supporting different browsers and platforms.
* Game tracks player behaviour and notices changes (behaviour becomes more efficient that before).
  This could be mitigated by the player by not changing behaviour too fast but more gradually over time.

Nonetheless, I take no responsibility for lost accounts or any other loss that might or might not be caused by this extension: **USE AT OWN RISK**

## Beta

FoEI has been tested by a select few players for a couple of months running on different servers, showing it works and it is great aid.
Now it is time to present it to the public and polish it some more:

* Try on more servers / languages
* I made some quick & dirty UI...
* Lacking much experience I also made a quick & dirty Javascript implementation
* Fix MacOS support, for some reason intercepting the incoming traffic does not seem to work..??
* more...

## Installation

As long as FoEI is in Beta, I won't put it in the Chrome webstore, you either need to download the extension file or build it yourself.

## Contributing

As stated the UI and implementation itself can use some polishing. MacOS support should be figured out and fixed. Also there are lots of other features that can be added to the extension using the readily available game information.

So feel free to send bug reports, pull requests and questions. But be aware to use an *anonymous* account or at least one that cannot be traced to your game account if you are afraid of getting banned.

I do this because of my personal interest/hobby, so my goal is not to make a profit out of this, but if you _really, **really**_ enjoy FoEI, feel free to send me a small token op appreciation (which I will convert to game diamonds :wink: ):

[![Donate with PayPal](https://www.paypalobjects.com/en_US/NL/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2EYSNR29PEPDC&source=url)

(Note that I cannot accept game diamonds directly, as I wish to be anonymous and not get banned.)

On this notice, please don't bother players with a same/similar (account)name to ask questions or support, it is not me :stuck_out_tongue:.
