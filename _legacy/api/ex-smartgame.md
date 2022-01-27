- https://www.wikiwand.com/en/Smart_Game_Format

```js
var sgf = require('smartgame');
var fs = require('fs');

// Grab an SGF file from somewhere
var example = fs.readFileSync('sgf/example.sgf', { encoding: 'utf8' });

var collection = sgf.parse(example);

// ... use the collection object however you want!

// ... when collection has been modified and you want to save it as an .sgf file
var collectionSGF = sgf.generate(collection);
fs.writeFileSync('new-example.sgf', collectionSGF, { encoding: 'utf8' });

```


```js
{
	gameTrees: [
		{
			parent: <a reference to the parent object>,
			nodes: [
				{ GM: '1', FF: '4', CA: 'UTF-8', SZ: '19' },
				{ B: 'pd' },
				{ W: 'dp' },
				{ B: 'pp' }
			],
			sequences: [
				{
					parent: <a reference to the parent object>,
					nodes: [
						{ W: 'dd' }
					]
				},
				{
					parent: <a reference to the parent object>,
					nodes: [
						{ W: 'dc' },
						{ B: 'ce' },
						{ W: 'ed' }
					],
					sequences: [
						{
							parent: <a reference to the parent object>,
							nodes: [
								{ B: 'ch' },
								{ W: 'jc' }
							]
						},
						{
							parent: <a reference to the parent object>,
							nodes: [
								{ B: 'ci' }
							]
						}
					]
				}
			]
		}
	]
}

```