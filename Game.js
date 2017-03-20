let game = new Phaser.Game('100%', '100%', Phaser.AUTO, '', { preload: preload, create: create, update: update })
let cardTypes = ['Monster', 'Status', 'Action']
let hand = []

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
  game.add.sprite(0, 0, 'speedcloth')
  game.add.sprite(800, 500, 'active')
  let volcanoCard = game.add.sprite(0, 0, 'volcano')
  volcanoCard.inputEnabled = 'True'
  volcanoCard.input.enableDrag(true)

  // TODO this 'random' algorithm strongly favors index 0 for some reason - you end up with like 4 or 5 monsters
  do { hand.push(new Card(cardTypes[Math.floor(Math.random() * hand.length)])) }
  while (hand.length < 5)
}

function update () {
}

class Card {
  constructor (type) {
    this.type = type
  }
}
