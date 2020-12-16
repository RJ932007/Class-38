class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameStateRef=data.val();
        });
    }
    updateState(state){
        database.ref('gameState').update({
        gameState:state
        });
    }

    async start(){
        if (gameState===0){

            player= new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }

            form= new Form();
            form.display();


        }

        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);

        cars=[car1,car2,car3,car4];

    }
    
    play(){
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers!==undefined){

            var index=0;
            var x=175;
            var y;

            for(var plr in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x;
                cars[index-1].y=y;

                if(index===player.index){
                    fill("yellow");
                    ellipse(x,y,60,80);

                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }

            }
        }

        if(keyIsDown(UP_ARROW)){
            player.distance=player.distance+10;
            player.update();
        }

        drawSprites();
    }

    end(){

        game.updateState(2);
    }
}