class Player{
constructor(){
    this.index=null;
   // this.distance=0;
    this.name=null;
   // this.rank=null;
}
getCount(){
var playerCoundref = databasehome.ref("playercount")
playerCoundref.on("value",function(data)
                          {
                              playercount = data.val();

                          }
);
}
updateCount(count){
databasehome.ref('/').update({playercount:count});
}
update(){
var playerindex="players/player"+this.index;
databasehome.ref(playerindex).set({name:this.name});
}
static getPlayerInfo(){
var playerInfoRef=databasehome.ref("players");
playerInfoRef.on("value",(data)=>
                 {
                    allPlayers=data.val()
                 })
}
// getCarsAtEnd(){
//     databasehome.ref('carsatend').on('value',(data)=>
//     {
//         this.rank=data.val();
//     }
    
//     )
// }
// static updateCarsAtEnd(rank){
//     databasehome.ref('/').update({carsatend:rank});
// }
 }