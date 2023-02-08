function solve(arr) {
    let res = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 === arr[i + 1] % 2) {
            res++;
        }
    }
    return res;
}
//  get test case
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().split(' ').map(Number);
    console.log(solve(arr));
}
