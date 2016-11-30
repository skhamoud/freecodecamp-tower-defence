// Tilemap example https://phaser.io/examples/v2/loader/load-tilemap-json

$(document).ready(function() {

    var game = new Phaser.Game(800, 640, Phaser.AUTO, 'game-container', { 
      preload: preload, 
      create: create, 
      update: update 
    }, false);
    var gameOver = false;
    var timer;
    var scoreText;
    var gameOverText;
    var score = 0;

    function preload () {
        game.load.tilemap('picnic', '/assets/map/map.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', '/assets/map/map.png')
        // game.load.image('player', './images/playerShip1_green.png');
        // game.load.image('baddie', './images/ufoBlue.png');

    }
    
    var map;
    var layer;

    function create () {
        game.stage.backgroundColor = '#006400';

        map = game.add.tilemap('picnic');
        map.addTilesetImage('map', 'tiles');
        layer = map.createLayer('Tile Layer 1');
        layer.resizeWorld();
    }
    function update () {

    }
});
