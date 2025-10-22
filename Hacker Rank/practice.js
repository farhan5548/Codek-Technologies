// let ar = [1, 2, 3, 4, 10, 11];
// function simpleArraySum(ar) {
//     let sum = 0;
//     for (const x of ar) {
//         sum += x;
//     }
//     return sum;


// }
// console.log(simpleArraySum(ar));

// let arr = [-4, 3, -9, 0, 4, 1];
//     let pos = [];
//     let neg = [];
//     let no = [];
//     let num = 0;
//     for (let i=0; i<arr.length; i++){
//         num = arr[i];
//         if (num>0){
//             pos.push(num);       
//         }
        
//         if (num<0) {
//             neg.push(num);
//         }

//         if (num===0){
//             no.push(num);
//         }
//     }

//         let pos_ratio = pos.length / arr.length;
//         console.log(pos_ratio.toPrecision(6));
        
//         let neg_ratio = neg.length / arr.length;
//         console.log(neg_ratio.toPrecision(6));

//         let z_ratio = no.length / arr.length;
//         console.log(z_ratio.toPrecision(6));



// let n = 6;
// for (let i=1; i<=n; i++){ // Row
//     let row = "";

//     for (let j=1; j<=n-i; j++){ //Space
//         row+=" ";
//     }
//         for (let k=1; k<=i; k++){ //Column
//             row+="#";
//         }
//     console.log(row);
// }


// let arr = [1, 2, 3, 4, 5];
// let min = arr.sort((a,b)=>a-b);
//     let min_val = 0;
//     for (let i=0; i<min.length-1; i++){
//         min_val += min[i];
//     }
//     let max = min.sort((a,b)=>b-a);
//     let max_val = 0;
//     for (let i=0; i<max.length-1; i++){
//         max_val += max[i];
//     }
// console.log(min_val ,max_val);


// let grades = [73,67,38,33];
// let result = [];
// let num = 0;
// let num_add = 0;

//     for (let i=0; i<grades.length; i++){
//         num = grades[i];
//         num_add = num + 2;

//         if (num_add % 5 != 0 || num_add < 38){
//             result.push(num);
//         }
        
//         else if (num_add % 5 == 0){
//             result.push(num_add);
//         }
//     };
// console.log(result);

// for (let i = 0; i < grades.length; i++) {
//     let grade = grades[i];
//     if (grade < 38) {
//         result.push(grade);
//     } else {
//         let num = Math.ceil(grade / 5) * 5;
//         if (num - grade < 3) {
//             result.push(num); 
//         } else {
//             result.push(grade); 
//         }
//     }
// }
// console.log(result);


// let s=7; 
// let t=11;
// let a=5;
// let b=15;
// let apples = [-2, 2, 1];
// let oranges = [5, -6];

// let app = 0;
// let org = 0;
// let apple_count = 0;
// let orange_count = 0;
// for (let i=0; i<apples.length;i++){
//     app = a + apples[i];
//     if(app >= s && app <= t){
//         apple_count++;
//     }
// }

// for (let i=0; i<oranges.length;i++){
//     org = b + oranges[i];
//     if(org >= s && org <= t){
//         orange_count++;
//     }
// }

// console.log(apple_count);
// console.log(orange_count);


// let s = "11:01:00PM";
// let last = s.slice(-2);
// let start = parseInt(s.slice(0,2));
// let ms = s.slice(2,8);
// if (last === "AM") {
//     if (start === 12) {
//         start = 0; 
//     }
// } else {
//     if (start !== 12) {
//         start += 12;
//     }
// }
// let time = start.toString().padStart(2,"0");
// console.log(time + ms);

// let s = "saveChangesInTheEditor";
// let count = 1;
// for (const w of s) {
//     if(w === w.toUpperCase() ){
//         count++;
//     }
// }
// console.log(count);

// function breakingRecords(scores) {
//     Write your code here
//     let peak_score = scores[0];
//     let least_score = scores[0];
//     let peak = 0;
//     let least = 0;
//     for(let i=1; i<scores.length; i++){
//         if(scores[i] > peak_score){
//             peak_score = scores[i];        
//             peak++;
//         }
//         else if ( scores[i] < least_score){
//             least_score = scores[i];
//             least++;
//         }
//     }
//     console.log(peak,least);
// }


// let unsorted = [ '31415926535897932384626433832795', '1', '3', '10', '3', '5' ];
//     let sort = unsorted.sort((a,b)=>{
//         if(a.length !== b.length){
//         return a.length - b.length;
//         }
//         return a.localeCompare(b);
//     });
// console.log(sort);

// let arr = [1, 4, 5, 7, 9, 12];
// let V = 4;
// let result = 0;
//     for (let e in arr) {
//         if (V === arr[e]){
//             result = e;
//         }
//     }
// console.log(result);


// let a = [2, 4];
// let b = [16, 32, 96];
// let lcm_a = Math.max(...a);
// let lcm_b = Math.min(...b);
// let count = 0;
//     for(let i=lcm_a; i<=lcm_b; i++){
//         if((a.every(e => i % e === 0 )) && b.every(e => e % i === 0 )){
//             count++;
//         };
//     };
// console.log(count);

