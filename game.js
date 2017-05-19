
var game = new Phaser.Game('100%', '100%', Phaser.AUTO, '', { preload: preload, create: create, update: update });
let gameCanvas, body;

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
}

function create() {
}

function update() {
}