export function createMultiplicationTable(rows, columns){
    let tableString = '';
    
    for (let rowNumber of Array(rows).keys()){
        for (let colNumber of Array(columns).keys()){
            tableString = tableString + ` ${(rowNumber+1) * (colNumber+1)} `;
        }
        tableString += '\n';
    }
    
    return tableString;
}
