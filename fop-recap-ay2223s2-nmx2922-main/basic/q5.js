// Q5: Find the users with wrong password
/**
 *
 * @param {string [][]} attempts | example: [["user1", "pw1"], ["john", "password"]]
 * @param {object} credentials | example: { "user1": "pw2", "john": "johnny" }
 *
 * You can safely assume that users in `attempts` exists within `credentials`
 *
 * @return array of strings of usernames that provided wrong password | example: ["user1", "john"]
 *
 * @example
 * wrongPassword([["Tom", "b"], ["Dick", "d"], ["Harry", "f"]], {"Tom": "b", "Dick": "c", "Harry":"e"})
 * Should return ["Dick", "Harry"]
 *
 * Reason: only "Tom" provided the correct password, "Dick" and "Harry" gave the wrong password
 *
 * @topics for-loop, if-else, array, object
 */
module.exports.wrongPassword = function (attempts, credentials) {
//get user name 
var list=[];
var obj=Object.entries(credentials);
for(var x=0;attempts.length>x;x++){

    for(var y=0;obj.length>y;y++){

        if(attempts[x][0]==obj[y][0]){
            if(attempts[x][1]!=obj[y][1]){
list.push(attempts[x][0]);
            }
        }
    }
}


return list;
};
