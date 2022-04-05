let mytable = document.querySelector("#table");

let employees =[
    { name : 'browserversion',value:'7.0'},
    { name : 'screenwidth',value:'960'},
    { name : 'screenheight',value:'720'}

]

let headers =['browser name','internet explorer'];

{
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');


    headers.forEach(headertext =>{
        let header = document.createElement('th');
        let textNode = document.createTextNode(headertext);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    employees.forEach(emp =>{
        let row = document.createElement('tr');

         Object.values(emp).forEach(text =>{
            let cell = document.createElement('td');
            let textNode= document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
             
         });
         table.appendChild(row);
    });
    mytable.appendChild(table);
};