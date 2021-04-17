class Game {
    constructor(){


    }
    getState(){
    var gamestateref=databasehome.ref("gamestate")
    gamestateref.on("value",function(data)
                            {
                                gamestate=data.val();
                            }


    );
    }
    update(state){
    databasehome.ref('/').update({gamestate:state});
    }
    async start(){
    if(gamestate===0){
        player=new Player();
        var playercountref = await databasehome.ref("playercount").once("value")
        if(playercountref.exists()){
    playercount=playercountref.val();
        player.getCount();
        }
        form= new Form();
        form.display();
    }
    player1=createSprite(400,200);
    player1.addImage(jedi);
    player2=createSprite(800,200);
    player2.addImage(sith);
    // car3=createSprite(500,200);
    // car3.addImage(car3Img);
    // car4=createSprite(700,200);
    // car4.addImage(car4Img)
    // cars=[car1,car2,car3,car4];
    }
    end(){
    console.log("Game Ended");
    console.log(player.rank);

    }
    play(){
        form.hide();
        // textSize(35);
        // text("Game Has Started",100,100);
       Player.getPlayerInfo();
        // player.getCarsAtEnd();
        if(allPlayers!==undefined){
            var index=0;
            var x=180;
            var y;
            // background("#c68767")
            // image(carTrack,0,-displayHeight*4,displayWidth,displayHeight*5);
            //var displayPosition=150;
            for(var plr in allPlayers ){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                // cars[index-1].x=x;
                // cars[index-1].y=y;
                if (index===player.index){
                    fill("blue");
                    ellipse(x,y,60);
                    cars[index-1].shapeColor="blue";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
                
             //     if(plr==="player"+player.index){
                //     fill("blue");
                //     }
                //     else{
             //     fill("black");
             //     }
                //     displayPosition=displayPosition+25;
                //     textSize(15);
             //     text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
                

             // }
            }
        }
        
    //     if(keyIsDown(UP_ARROW)&& player.index!==null){
    //         player.distance+=20
    //         player.update();
    //     }
    //     if(player.distance>4000){
    //         gamestate=2;
    //         player.rank=player.rank+1;
    //         Player.updateCarsAtEnd(player.rank);
    //    }
        
      drawSprites();  
    }


}