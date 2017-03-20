let game = new Phaser.Game('100%', '100%', Phaser.AUTO, '', { preload: preload, create: create, update: update })

function preload () {
  // Pre-loading of game assets and some pre-baked logic goes here.
  // This step is actually mostly optional
  // It saves the game time before running the create() function
  game.load.image('volcano', 'assets/cards/card.png')
  game.load.image('blank', 'assets/cards/blank.png')
  game.load.image('speedcloth', 'assets/board/speedcloth.png')
  game.load.image('active', 'assets/board/active.png')
}

function create () {
  // This is where the initial state of the game is created
  game.add.sprite(0, 0, 'speedcloth')
  game.add.sprite(800, 500, 'active')
  let volcanoCard = game.add.sprite(0, 0, 'volcano')

  volcanoCard.inputEnabled = 'True'
  volcanoCard.input.enableDrag(true)
}

function update () {
  // This is the primary game loop - where pretty much all the game logic will be running
  // I think this function is called 60 times a second
}
