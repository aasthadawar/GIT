function findUnique(arr){
   // var arr = [1,2,3,4,2,3,4];
    var unique = [...new Set(arr)];
    return unique;
}

export {findUnique};