let game = new Phaser.Game('100%', '100%', Phaser.AUTO, '', { preload: preload, create: create, update: update })
let cardTypes = ['Monster', 'Status', 'Action']
let monsterDeck = []
let actionDeck = []
let monsterHand = []
let actionHand = []

function preload () {
  game.load.image('gutter', 'assets/gutter.png')
  game.load.image('volcano', 'assets/cards/card.png')
  game.load.image('veslither', 'assets/cards/m_veslither.png')
  game.load.image('blank', 'assets/cards/blank.png')
  game.load.image('speedcloth', 'assets/board/speedcloth.png')
  game.load.image('active', 'assets/board/active.png')
}

function create () {
  game.add.sprite(0, 0, 'speedcloth')
  game.add.sprite(800, 500, 'active')
  let bottom = game.add.sprite(0, game.world.height - 128, 'gutter')
  bottom.scale.setTo(5, 5)
  createDeck()
  createHand()

  do { game.add.sprite(0, 0, monsterHand.pop().key) }
  while (monsterHand.length > 0)

  do { game.add.sprite(100, 0, actionHand.pop().key) }
  while (actionHand.length > 0)

  for (let i of game.world.children) {
    if (i.key === 'speedcloth' || i.key === 'active') {
    } else {
      game.scale.scaleSprite(i, 100, 100) // This also scales the gutter which isn't what we want lol
      i.inputEnabled = true
      i.input.enableDrag(true)
    }
  }
}

function update () {
  for (let i of game.world.children) {
    if (i.key === 'speedcloth' || i.key === 'active') {
    } else if (i.input.isDragged === true) {
      game.world.bringToTop(i)
    }
  }
}

function createDeck () {
  do { monsterDeck.push(new Card(cardTypes[0])) }
  while (monsterDeck.length < 12)

  do { actionDeck.push(new Card(cardTypes[2])) }
  while (actionDeck.length < 30)
}

function createHand () {
  do { monsterHand.push(monsterDeck.pop()) }
  while (monsterHand.length < 5)

  do { actionHand.push(actionDeck.pop()) }
  while (actionHand.length < 12)
}

class Card {
  constructor (type) {
    let sprite
    if (type === 'Monster') {
      sprite = game.cache.getImage('volcano')
    } else {
      sprite = game.cache.getImage('blank')
    }
    this.key = sprite.name
    this.cardType = type
    this.inPlay = false
  }
}
