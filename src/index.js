import { createMultiplicationTable } from './generateTable.js';

let args = process.argv.slice(2);
let rowsInput = args[0];
let colsInput = args[1];
let rows = Number(rowsInput);
let cols = Number(colsInput);

if (!isNaN(rows) && !isNaN(cols)){
    let table = createMultiplicationTable(rows, cols);
    console.log(table);
}else{
    console.log("Error invalid input!");
}   
