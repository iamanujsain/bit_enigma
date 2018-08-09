// need to load variation from data.JSON file

let msgC = [ "a", "b", "c" ];
let encC = [ "x", "y", "z" ];

// take input from id=input textarea
var input_box = document.getElementById("input");




// create encryption using msgC and encC







// show output from id=output textarea
input_box.onkeyup = () => {
    document.getElementById("output").innerHTML = input_box.value;
}






// visuals of encryption table as of each variation of JSON file
let table = document.getElementById("encryption-data-table");

function conversion_settings(fromMessaageChar, toEncryptionChar) {
    for (chars in fromMessaageChar) {
        let tr = document.createElement("tr");

        function append_input(stringElement) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(stringElement));
            td.style.textAlign = "center";
            tr.appendChild(td);
        }
        append_input(fromMessaageChar[ chars ]);

        function append_output(stringElement) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(stringElement));
            td.style.textAlign = "center";
            tr.appendChild(td);
        }
        append_output(toEncryptionChar[ chars ]);

        table.appendChild(tr);
    }
}
conversion_settings(msgC, encC);
// console.log(table);