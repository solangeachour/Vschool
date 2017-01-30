var readlineSync = require("readline-sync");

function getRandom(min,max){

    return Math.floor(Math.random()*(max -min+1))+min;

}

var playerName = readlineSync.question("Enter your Name ") ;
console.log("Hi Welcome To the game   " + playerName)

var Player = { name : playerName ,

               Hp : 100 ,

               Inventeory : [],

               Attack :getRandom(100,70)

               } ; 

var possiblEenemy=["Prowler","Dragon","Ancient Dungeon"];

var Inventory=["Sword","Knife","Axe","Light"];



var RandomEnemey =function(enemyName)

{

   enemyName=enemyName;

    this.EnemyName="";

    this.health=100;

    this.attack=0;

    this.generate=function(){

    var index = getRandom(0,possiblEenemy.length-1);

        this.EnemyName=enemyName[index];

        if(enemyName[index] =="Prowler")

        {

            this.attack=getRandom(50,60);

            

        }else if (enemyName[index]=="Dragon")

        {

            this.attack=getRandom(50,79);

        }else if (enemyName[index]=="Ancient Dungeon")

        {

            this.attack=getRandom(20,49);

        }

};

};

var randomAward=function(Inventory)

{

Inventory = Inventory;
    this.YourAward="";

    this.generateAward=function()

    {

        var index = getRandom(0,Inventory.length-1);

        this.YourAward=Inventory[index];    

    };

};


while(possiblEenemy.length >= 3) {

    var userinput = readlineSync.question("Enter You option ");

    if(userinput =="print")

    {

        console.log(Player);

    }else if(userinput == "w") {

        var chance = getRandom(0,100);

        if(chance > 50) {

            var enemy= new RandomEnemey(possiblEenemy);

            enemy.generate();

            console.log("You have met an enemy " + enemy.EnemyName);

            while(Player.Hp > 0 && enemy.health > 0) {


                var userinput = readlineSync.question("A to attack or r to Run  ");

                if(userinput == "r") {

                    chance = getRandom(0,100);

                    if(chance > 50) {

                        console.log("You have escaped");

                        break;

                    } else {

                        console.log("you didnt escape");
                        Player.hp -= damage;
                        console.log ( "your bleeding " + Player.hp)

                    }

                } else if(userinput == "a") {

                    chance = getRandom(0,100);

                    if(chance > 50) {

                        var damage = Player.Attack;

                        console.log("You hit the enemy for " + damage);

                        enemy.health -= damage; 
                        console.log ("Enemy Health " + enemy.health ); 
                        console.log(playerName + " You are hurt " + Player.Hp)

                        if(enemy.health <= 0) {

                            var tempAward= new randomAward(Inventory);

                            tempAward.generateAward();

                            console.log("You killed the enemy here is your Award "+tempAward.YourAward);

                            Player.Inventeory.push(tempAward.YourAward);
                            

                            break;

                        }

                    } else {

                        console.log("You missed");

                    }
      

                } else {

                    console.log(" please choose between view for player info and w for walk");

                }

                console.log("Its now the enemies turn");

                chance = getRandom(0,100);

                if(chance > 50) {

                    var damage = enemy.attack;

                    console.log("enimey hit you for " + damage);

                    Player.Hp -= damage;

                } else {

                    console.log("Enemy missed");

                }
    

            }



            } if(Player.Hp <= 0) {

                console.log("You have lost  " + playerName);

                break;
 
        }

    }else {

        console.log("thats not an option")

    }

}

if(Player.Hp <= 0) {

    console.log("You lost");

    console.log(Player.Inventeory);

} else {

  console.log("You won here is all the gear you got");

    console.log(Player.Inventeory);

}
``
