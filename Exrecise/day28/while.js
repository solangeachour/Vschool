function happyNumber(happyNb){
    var count=0;
    var newhappyNb=(""+happyNb).split("");
    var total=0;
    while(happyNb>1)
        {
            count++;
            newhappyNb=[];
            newhappyNb=(""+happyNb).split("");    
            for(var i=0;i<newhappyNb.length;i++){
                total += (newhappyNb[i]*newhappyNb[i]);
            }  
           
          happyNb=total;
          total=0;
          console.log("The number is now: "+happyNb);
            if(count>50)
                {
                    break;
                console.log("still not happy number is now: "+happyNb); 
                }
        }
    if(happyNb<=1)
    console.log("The happy number is now: "+happyNb);
}

happyNumber(19);