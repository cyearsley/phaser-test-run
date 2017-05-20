
let game = new Phaser.Game('100%', '100%', Phaser.AUTO, '', { preload: preload, create: create, update: update });
let gameCanvas, body;

let level = require('./levels/levels/start.js').level;
//parse level
let parsedLevel = '';
parsedLevel = level.join('\n');

function preload() {
    gameCanvas = document.getElementsByTagName('canvas');
    body = document.body;

    // Maintain canvas ize
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    window.addEventListener('resize', function () {  
        game.scale.refresh();

    });
    game.scale.refresh();

    //Images
    game.load.image('tiles', 'assets/grass.png');
}

function create() {

    //  Add data to the cache
    console.log("PARSED LEVEL: ", parsedLevel);
    game.cache.addTilemap('startLevel', null, parsedLevel, Phaser.Tilemap.CSV);

    //  Create our map (the 16x16 is the tile size)
    let map = game.add.tilemap('startLevel', 10, 10);

    //  'tiles' = cache image key, 10x10 = tile size
    map.addTilesetImage('tiles', 'tiles', 10, 10);

    //  0 is important
    layer = map.createLayer(0);

    //  Scroll it
    layer.resizeWorld();

    game.physics.startSystem(Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
}