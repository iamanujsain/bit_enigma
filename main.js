// need to load variation from data.JSON file

let msgC = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', ',', '.', '?', '/', "'", '"', ';', ':', '<', '>', '|', '{', '}', '[', ']'];
let encC = [ 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', ' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', ',', '.', '?', '/', "'", '"', ';', ':', '<', '>', '|', '{', '}', '[', ']'];

// take input from id=input textarea and show output from id=output textarea
let input = document.getElementById("input");
let o = document.getElementById('output');

// input.onkeydown = (e) => {
//     if (e.keyCode == 32) {
//         o.value = o.value.concat(" ");
//     }
// }

input.onkeyup = (e) => {
    
    if (e.keyCode == 8) {
        let _cur = input.value;
        let _result = "";
        for (let i = 0; i < _cur.length; i++) {
            let _d = encrypt(_cur.charAt(i));
            _result = _result.concat((_d == undefined) ? '':_d);
        }
        document.getElementById("output").value = _result;
    }
    
    // if (e.keyCode >= 65 && e.keyCode <= 90) {
    //     let _cur = input.value;
    //     let _result = "";
    //     for (let i = 0; i < _cur.length; i++) {
    //         let _d = encrypt(_cur.charAt(i));
    //         _result = _result.concat((_d == undefined) ? '':_d);
    //     }
    //     document.getElementById('output').value = _result;
    // }

    let _cur = input.value;
    let _result = "";
    for (let i = 0; i < _cur.length; i++) {
        let _d = encrypt(_cur.charAt(i));
        _result = _result.concat((_d == undefined) ? '':_d);
    }
    document.getElementById('output').value = _result;
}



// create encryption using msgC and encC
function encrypt(c) {
    let i, output;
    msgC.forEach((e) => {
        if (e == c) {
            i = msgC.indexOf(e);
            // if (encC[i]!=undefined) {
            //     output = encC[i].toString();
            // } 
            output = encC[i].toString();
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