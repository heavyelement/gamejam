let game = new Phaser.Game('100%', '100%', Phaser.AUTO, '', { preload: preload, create: create, update: update })

function preload () {
  game.load.image('volcano', 'assets/cards/card.png')
  game.load.image('blank', 'assets/cards/blank.png')
  game.load.image('speedcloth', 'assets/board/speedcloth.png')
  game.load.image('active', 'assets/board/active.png')
}

function create () {
  game.add.sprite(0, 0, 'speedcloth')
  game.add.sprite(800, 500, 'active')
  let volcanoCard = game.add.sprite(0, 0, 'volcano')

  volcanoCard.inputEnabled = 'True'
  volcanoCard.input.enableDrag(true)
}

function update () {
}
