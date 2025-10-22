// let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
// let val1 = 0;
// let val2 = 0;
// for (let i=0; i<arr.length; i++){
//     for (let j=0; j<arr.length; j++){
//         if(i===j){
//             val1 += arr[i][j];
//         }
//     }
// }
// for (let i=arr.length-1; i>=0; i--){
//     for (let j=arr.length-1; j>=0; j--){
//         if(i+j===arr.length-1){
//             val2 += arr[i][j];
//         }
//     }
// }
// let abs_val = Math.abs(val1-val2);
// console.log(abs_val);

// let a = [5,6,7];
// let b = [3,6,10];
// let a_count = 0;
// let b_count = 0;
// let result = [];
//     for(let i=0; i<a.length; i++){
//             if(a[i] > b[i]){
//                 a_count +=1;
//             }
//             else if(a[i] < b[i]){
//                 b_count +=1;
//             }
//             else{
//                 continue;
//             }
//         }
//     result = [a_count,b_count];
//     console.log(result);



// let candles = [3,2,1,3];
// let count = 0;
// let max = Math.max(...candles);
// for (let c of candles) {
//     if(c==max){
//         count++;
//     }
// }
// console.log(count);


// let a = [4,6,5,3,3,1];
// let num = Math.min(...a);
// let val = 0;
// let arr1 = [];
// for(let i=0; i<a.length; i++){
//     val = a[i] - num;
//     console.log(val);
//     if(val === 0){
//         arr1.push(val);
//     }
// }
// console.log(arr1);
