var player;
var cursors;

class Scene1 extends Phaser.Scene{
    constructor(){
        super("Scene2");
    }
    init(data){
    }
    preload(){   
        this.load.image('background','assets/scene_2'.png');
        this.load.image('Personnage', 'assets/Personnage.png');
    }
    create(){
        

            }
        }
    }
    
    update(){
        if (cursors.right.isDown){
            player.setVelocityX(200);
        }
        else if (cursors.left.isDown){
            player.setVelocityX(-200);
        }
        else if (cursors.up.isDown){
            player.setVelocityY(-200);
        }
        else if (cursors.down.isDown){
            player.setVelocityY(200);
        }
        else{
            player.setVelocity(0);
        }
    }
}