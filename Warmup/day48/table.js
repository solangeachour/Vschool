var tab1 = [1, 2, 5];
 var tab2 = [1, 2, 8, 9, 10];

var unique = function (tab1,tab2) {
        var tab = [];
        
        for (var i = 0; i < tab1.length; i++) {
            for (var j = 0; j < tab2.length; j++) {
      if (tab1[i] !== tab2[j]) {
    for (vark = 0; k < tab.length; k++) {
     tab.push(tab1[i].join tab2[j]);

                        }
                    }
                }
        }
}
console.log(unique(tab1,tab2));