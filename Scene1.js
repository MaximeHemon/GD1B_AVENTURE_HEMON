var player;
var cursors;
var changementzone;
var mob;
var hp = 3;
var hp1;
var hp2;
var hp3;
var gameOver = false;
var invincible= false;
var compteurInvincible= 150;
var compteurFrames= 150;



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
        this.load.image('coeur','Assets/Vie1.png');
        this.load.image('mob','Assets/Ennemis.png');
    }
    create(){
        this.add.image(0,0,'background').setOrigin(0);
        
        hp1 = this.add.sprite(50,50, 'coeur').setScrollFactor(0).setAlpha(1);
        hp2 = this.add.sprite(150,50, 'coeur').setScrollFactor(0).setAlpha(1);
        hp3 = this.add.sprite(250,50, 'coeur').setScrollFactor(0).setAlpha(1);
        
        
        
        changementzone = this.physics.add.group();
        player = this.physics.add.sprite(900,200,'personnage');
        
        player.setCollideWorldBounds(true);
        
        mob = this.physics.add.image(500,500,'mob');
        mob.setCollideWorldBounds(true);
        mob.body.setAllowGravity(false);
        
        this.tweens.add({
            
            targets: mob,
            props: {
                x: {value: 700, duration: 700},
            },
            yoyo: true,
                repeat: -1
        });
        
        this.physics.add.overlap(player,mob,Hit,null,this);
        
        
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
        
        cursors = this.input.keyboard.createCursorKeys(); 
        
        function loadmap(player,changementzone){
        this.scene.start("scene2"); 
        }
        
        function Hit(player,ennemie){
            if (invincible == false){
                invincible = true;
                hp-=1;
                
                if (hp == 2){
                    hp3.setAlpha(0);
                }
                if (hp == 1){
                    hp2.setAlpha(0);
                }
                if (hp == 0){
                    hp1.setAlpha(0);
                    gameOver = true;
                }
            }
       
        
            }
        
    }
        update(){
        
        if (gameOver)
            {
            player.setTint(0xff0000);
            return;
        }
        
        if(invincible == true){
            
            compteurInvincible-- ;
            compteurFrames --;
            if (compteurFrames ==125){
            player.setAlpha(0);
            }
            if (compteurFrames ==100){
            player.setAlpha(1);
            }
            if (compteurFrames ==75){
            player.setAlpha(0);
            }
            if (compteurFrames ==50){
            player.setAlpha(1);
            }
            if (compteurFrames ==25){
            player.setAlpha(0);
            }
         
                
            if (compteurFrames <= 0){
            player.setAlpha(1);    
            compteurFrames = 150;            
            }   
    
           
            if(compteurInvincible == 0){
                compteurInvincible = 150;
                invincible = false ;
            } 
        }
        
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