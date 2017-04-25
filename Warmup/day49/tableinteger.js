var arrnge = function(){
//    var arr =[50, 2,, 1 ,9];
    var l = arr.length;
    var letter = "";
    for ( var i =0;i<arr.length;i++){
        letter ="" + arr[i];
        var str = "";
        var arraylist = new arraylist();
     for ( var j = 0; j<l; j++){
          str = "" + arraylist[j];
         
         if (letter.charAt(0) == str.charAt(0)) {
                    arraylist.add(str);
                    Collections.sort(arraylist);
                    map.put("" + ch.charAt(0), arraylist);
    }
}
    }
    
    
    
    list_map.add(map);
        String str = "";
        for (String key : map.keySet()) {
            str = map.get(key) + str;

        }
        str = str.replaceAll("\\D+", "");
        console.log(str);
    }
}
 console.log([50, 2,, 1 ,9]);