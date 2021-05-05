var player;
var cursors;

class Scene1 extends Phaser.Scene{
    constructor(){
        super("Scene1");
    }
    init(data){
    }
    preload(){   
        this.load.image('background','Assets/scene_1.png');
        this.load.image('Personnage', 'Assets/Personnage.png');
    }
    create(){
        this.add.image(0,0,'background').setOrigin(0);
        
        player = this.physics.add.sprite(400,400,'Personnage');
        // this.cameras.main.startFollow(player, true); pour scene2?
        
                this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('Personnage', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1
        });
   
        this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('Personnage', { start: 2, end: 3 }),
        frameRate: 5,
        repeat: -1
       
        });
        
        this.anims.create({
        key: 'turn',
        frames: [ { key: 'Personnage', frame: 4 } ],
        frameRate: 20
        });
        
        this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('Personnage', { start: 5, end: 6 }),
        frameRate: 5,
        repeat: -1
       
        });
        
        this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('Personnage', { start: 7, end: 8 }),
        frameRate: 5,
        repeat: -1
        });
        
            }
        
    
    update(){
        
        cursors = this.input.keyboard.createCursorKeys();
        
        if (cursors.right.isDown){
            player.setVelocityX(300);
        }
        else if (cursors.left.isDown){
            player.setVelocityX(-300);
        }
        else if (cursors.up.isDown){
            player.setVelocityY(-300);
        }
        else if (cursors.down.isDown){
            player.setVelocityY(300);
        }
        else{
            player.setVelocity(0);
        }
    }
}