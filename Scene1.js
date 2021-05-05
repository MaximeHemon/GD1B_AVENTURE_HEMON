var player;
var cursors;
var changementzone;


class Scene1 extends Phaser.Scene{
    constructor(){
        super("scene1");
    }
    init(data){
    }
    preload(){   
        this.load.image('background','Assets/scene_1.png');
        this.load.image('personnage', 'Assets/Personnage.png');
        this.load.image('maptrigger','Assets/maptrigger.png');
    }
    create(){
        this.add.image(0,0,'background').setOrigin(0);
        
        changementzone = this.physics.add.group();
        player = this.physics.add.sprite(900,200,'personnage');
        // this.cameras.main.startFollow(player, true); pour scene2?
        
                this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('personnage', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1
        });
   
        this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('personnage', { start: 2, end: 3 }),
        frameRate: 5,
        repeat: -1
       
        });
        
        this.anims.create({
        key: 'turn',
        frames: [ { key: 'personnage', frame: 4 } ],
        frameRate: 20
        });
        
        this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('personnage', { start: 5, end: 6 }),
        frameRate: 5,
        repeat: -1
       
        });
        
        this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('personnage', { start: 7, end: 8 }),
        frameRate: 5,
        repeat: -1
        });
        
        changementzone.create(40,500,'maptrigger');
        
        this.physics.add.collider(player,changementzone,loadmap,null,this);
        
        function loadmap(player,changementzone){
        this.scene.start("scene2"); 
        }
        
        
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