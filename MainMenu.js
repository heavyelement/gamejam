
BasicGame.MainMenu = function (game) {

	this.bg;
	this.spriteTopLeft;
	this.spriteTopRight;
	this.spriteBottomLeft;
	this.spriteBottomRight;

};

BasicGame.MainMenu.prototype = {

	create: function () {

	    this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'speedcloth');

	    //this.spriteTopLeft = this.add.sprite(0, 0, 'blank');

		// Create volcanoCard and make it draggable
		var volcanoCard = this.add.sprite(0, 0, 'volcano');
		var active = this.add.sprite(800,500, 'active');

		volcanoCard.inputEnabled = 'True';

		// Input setups
		volcanoCard.input.enableDrag(true);

		

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	resize: function (width, height) {

		//	If the game container is resized this function will be called automatically.
		//	You can use it to align sprites that should be fixed in place and other responsive display things.

	    this.bg.width = width;
	    this.bg.height = height;

	    this.spriteMiddle.x = this.game.world.centerX;
	    this.spriteMiddle.y = this.game.world.centerY;

	    this.spriteTopRight.x = this.game.width;
	    this.spriteBottomLeft.y = this.game.height;

	    this.spriteBottomRight.x = this.game.width;
	    this.spriteBottomRight.y = this.game.height;

	}

};
