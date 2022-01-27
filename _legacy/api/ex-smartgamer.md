- https://github.com/neagle/smartgamer

```js

var sgf = require('smartgame');
var smartgamer = require('smartgamer');
var fs = require('fs');

// Grab an SGF file from somewhere
var example = fs.readFileSync('sgf/example.sgf', { encoding: 'utf8' });

var gamer = smartgamer(sgf.parse(example));

// Go to a specific move
gamer.goTo(4);

// Navigate between moves
gamer.next();
gamer.previous();

// Chain navigation together
gamer.next().next();
gamer.last().previous();
gamer.goTo(4).next(1);

// Get / set comments
gamer.comment();
gamer.comment('Losing move!');

// Get the current node
gamer.node();

// Get the modified smartgame
var newSGF = smartgame.generate(gamer.getSmartgame());
fs.writeFileSync('new-example.sgf', newSGF, { encoding: 'utf8' });

```