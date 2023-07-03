// const squre = () => {
//         const newSqure = [2, 4, 3, 9];
//         for (let i = 0; i < newSqure.length; i++) {
//             const squre = newSqure[i] * newSqure[i];
//             console.log(squre);

//         }

//     }
//     // console.log(squre())
// squre();


const squre = () => {

    ret = [];
    const newSqure = [2, 4, 3, 9];
    for (var i = 0; i < newSqure.length; i++) {
        root = Math.pow(newSqure[i], 2);
        ret.push(root);
    }

    return ret;
}
console.log(squre());
console.log('');

;
// console.log(squre = [2, 3, 4].map(x => x ** 2));