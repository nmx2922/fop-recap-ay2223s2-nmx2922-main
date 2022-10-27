var list=[];
var routes= [
   [a, b, c],
   [d, e],
 ]

 erpCost={ a: 1, b: 2, c: 3, d: 4, e: 999};

 for(var i=0;routes.length>i;i++){
    var price=0;
        for(var p=0;routes[i].length>p;p++){
    //var name=routes[i][p];
    var b=erpCost[routes[i][p]];
    
    
    price=price+b;
        }
        list.push(price);
    }

    console.log(list);