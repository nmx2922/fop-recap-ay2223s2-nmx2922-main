/**
 * You are part of a team that builds a route finding tool.
 *
 * In Singapore, passing through ERP gantries will incur some cost.
 *
 * In this problem, different ERP gantries will incur different cost.
 *
 * You will be given an array of routes.
 *
 * Each route is an array of ERP gantries the route will go through.
 *
 * Find the route that will incur the LEAST ERP cost.
 *
 * Each route can contain repeated ERP
 * Each route will have at least 1 ERP gantry
 *
 * @param {string[][]} routes: The list of routes, where each route is an array of ERP gantries.
 * @param {Object} erpCost: The price of going through each ERP
 * @return {int} the index of the cheapest route
 *
 * @example
 * routes:
 * [
 *   [a, b, c],
 *   [d, e],
 * ]
 *
 * erpCost: { a: 1, b: 2, c: 3, d: 4, e: 999 }
 *
 * result: 0
 *
 * Explanation: index 0 is path [a, b, c]
 *
 * The cost of going through path 0 is 1 + 2 + 3 = 6
 * The cost of going through path 1 is 4 + 999 = 1003
 *
 * The cheapest path is hence path 0.
 *
 */
 module.exports.cheapestRoute = function cheapestRoute(routes, erpCost) {

    var list=[];
    for(var i=0;routes.length>i;i++){
    var price=0;
        for(var p=0;routes[i].length>p;p++){
    var name=routes[i][p].toString;
    var b=erpCost[name];
    
    
    price=price+b;
        }
        list.push(price);
    }


    function getHighest(arr){
        if(arr!=null||undefined){
    var highest=0;
        for(var x=0;arr.length>x;x++){
        
    if(highest<=arr[x]){
        highest=x;
    } 
        }
    
        return highest;
    }
    return 1;
    }

    var r=getHighest(list);
    return r;
 
    
    };
    