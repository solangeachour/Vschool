var quadrant = function (a, b, c){
    var delta;
    delta= (b*b) - (4*a*c);
    var x;
    var x1;
    if ( delta == 0){
         console.log("This equation has one solution", - b / (2 * a));
    }
    else if ( delta > 0) {
        x = -(b + Math.sqrt(delta))/ 2 * a;
        x1 = -(b - Math.sqrt(delta))/ 2 * a;
          console.log("This equation has two solutions", [x, x1]);
    }
    else {
          console.log("No solution");
    }
};
quadrant ( 2, 5, 1);

//quadrant ( 256, 30, 5);
