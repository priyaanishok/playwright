//Array of intersection 
function intersection(arr1, arr2) {
    var intersectionArr = [];
    var _loop_1 = function (i) {
        for (var j = 0; j < arr2.length; j++) {
            if ((arr1[i] === arr2[j]) && (intersectionArr.find(function (element) { return element === arr1[i]; }) === undefined)) {
                intersectionArr.push(arr1[i]);
            }
        }
    };
    for (var i = 0; i < arr1.length; i++) {
        _loop_1(i);
    }
    return intersectionArr;
}
console.log("The intersection is : " + intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("The intersection is : " + intersection([7, 8, 9], [10, 11, 12]));
