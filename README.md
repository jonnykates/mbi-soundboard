# mbi-soundboard

This is a simple Angular application for triggering .mp3 files on a click event.

There is one controller; `js/controllers/SoundController.js`, which contains the JSON model for the ng-repeat tile in the HTML. Each tile should have 3 data keys:

- id: This is the name of the .mp3 file that is located in `sounds`. These must match!
- title: The text that displays on tile:hover
- coverImage: a 220px x 220px background image for the tile

e.g.:

```javascript
{
  id: 'taylor-1',
  title: 'Shake it off',
  coverImage: 'img/taylor-1.png'
}
```
