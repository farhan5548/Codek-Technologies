// Count Rows and write 1st loop
// Count Maximum Columns and write 2nd loop
let n = 6;
for (let i=1; i<=n; i++){ // Row
    let row = " ";
    for (let j=1; j<=n; j++){ //Column
        row+="#";
    }
    console.log(row);
}



for (let i=1; i<=n; i++){ // Row
    let row = " ";
    for (let j=1; j<=i; j++){ //Column
        row+="#";
    }
    console.log(row);
}


for (let i=1; i<=n; i++){ // Row
    let row = " ";
    for (let j=1; j<i; j++){ //Column
        row+=j;
    }
    console.log(row);
}


for (let i=1; i<=n; i++){ // Row
    let row = " ";
    for (let j=n; j>i; j--){ //Column
        row+=j-1;
    }
    console.log(row);
}


for (let i=1; i<=n; i++){ // Row
    let row = " ";
    for (let j=n; j>1; j--){ //Column
        row+=j-1;
    }
    console.log(row);
}