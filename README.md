# Did I Lock?
Small page to remember if I (or you) did lock the door when leaving home.

Built with simple JS script and localStorage. Not much of a project but I really needed something like this and I wanted to do it myself so..

## Usage
The interface is really straightforward: the big red button in the middle tells that the door is unlocked, pressing it will turn it green and change the text and icon to locked state; it will also display when you did lock because you can press it again to unlock and lock again in case you need to go out again on the same day.

That being said, when loading the app it checks the last lock date: if you locked yesterday, the door will appear as unlocked, so you save a click unlocking it on the next day.

## That's it
Just somewhere I can remind myself if I locked the door *(I always do)* when I start doubting I did it when outside. *(I always do)*

### Did I say it's mobile first?
Yeah, it's mobile first, so desktop view will probably be awful. *(I'll try to make it less awful on future patches)*