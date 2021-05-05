
class Scene2 extends Phaser.Scene{
    constructor(){
        super("scene2");
    }
    init(data){
    }
    preload(){   
        this.load.image('background2','Assets/scene_2.png');
    }
    create(){
        this.add.image(0,0,'background2').setOrigin(0);
        
        changementzone = this.physics.add.group();
        player = this.physics.add.sprite(400,400,'personnage');
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
        
        changementzone.create(432,559,'maptrigger');
        
        this.physics.add.collider(player,changementzone,loadmap,null,this);
        
        function loadmap(player,changementzone){
        this.scene.start("scene3"); 
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