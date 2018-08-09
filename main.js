// need to load variation from data.JSON file

let msgC = [ "a", "b", "c" ];
let encC = [ "x", "y", "z" ];

// take input from id=input textarea and show output from id=output textarea
let input = document.getElementById("input");
let output = "";
input.onkeyup = () => {
    let input_end = input.value.charAt(input.value.length - 1);
    // console.log(input_end)
    let output_end = encrypt(input_end);
    // console.log(output.concat(output_end.toString()));
    output = output.concat(output_end);
    document.getElementById("output").value = output;
}



// create encryption using msgC and encC
function encrypt(c) {
    let i, output;
    msgC.forEach((e) => {
        if (e == c) {
            i = msgC.indexOf(e);
            output = encC[ i ];
            // need to handle the excepttions like
            // buttons except given ones or spacebar or backspace or others
        }
    });
    return output;
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