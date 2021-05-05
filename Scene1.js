var player;
var cursors;

class Scene1 extends Phaser.Scene{
    constructor(){
        super("Scene1");
    }
    init(data){
    }
    preload(){   

    create(){

        bloquant.setCollisionByExclusion(-1, true);
        zone.setCollisionByExclusion(-1, true);

        player = this.physics.add.sprite(XXX, XXX, 'player');

        this.physics.add.collider(player, bloquant);
        this.physics.add.overlap(player, zone, changementZone, null, this);

        cursors = this.input.keyboard.createCursorKeys();
        
        function changementZone(player, zone){
        //    if (player.y >= XXX && player.x >= XXX && player.x <= XXX){
                this.scene.start("Scene2");
                console.log("changement");
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