export function add(a, b, cb){
    return cb(a+b);
}

// export function add(a, b){
//     return a+b;
// }

// export function add(a, b){
//     return new Promise((resolve, reject) => {
//         resolve(a+b)
//     });
// }


// export function add(a ,b, cb){
//     setTimeout(() => {
//         cb(a + b);
//     }, 1000)
// }


// module.exports = function add(a, b){
    // return a+b;
// }