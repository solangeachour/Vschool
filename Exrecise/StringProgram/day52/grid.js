function Call (isShip,isHit){
    this.isShip = isShip;
    this.isHit = isHit;
}
the.getHit = function(){
    this.isHit= true ;
}
the.getSymbol = function(){
    if(! this.isHit= true){
        return"-";
    }
    else if(! this.isShip){
        return "x";
    }
    else {
        return "0";
    }
}
module.exports = Call;