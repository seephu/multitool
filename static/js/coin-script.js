$("#myModal").modal();

function generateCoinPath() {
    let generatedCoinPath = document.getElementById('generatedCoinPath');
    let pop1Input = document.getElementById('pop1Input').value.toUpperCase();
    let pop2Input = document.getElementById('pop2Input').value.toUpperCase();
    let pop1 = popCodeList[pop1Input];
    let pop2 = popCodeList[pop2Input];

    if (pop1 < pop2) {
        generatedCoinPath.value = "OPTICAL-" + pop1 + "-" + pop2;
    }
    else {
        generatedCoinPath.value = "OPTICAL-" + pop2 + "-" + pop1;
    }
}

function resetCoin(){
    document.getElementById("pop1Message").style.visibility = "hidden";
    document.getElementById("pop2Message").style.visibility = "hidden";
}

function validatePopCode(pop, numPop) {
    let coinMessage = document.getElementById(numPop + "Message");
    let coinMessageContent;

    let popCode = document.getElementById(pop).value.toUpperCase();

    if (popCodeList[popCode]) {
        coinMessageContent = popCodeList[popCode];
        coinMessage.innerHTML = coinMessageContent;
        coinMessage.style.visibility = "visible";
        coinMessage.style.color = "black";
        return popCodeList[popCode];
    } else {
        coinMessageContent = "Invalid POP Code";
        coinMessage.innerHTML = coinMessageContent;
        coinMessage.style.visibility = "visible";
        coinMessage.style.color = "red";
    }
}

function generateDwdmTable(){
    let table = document.getElementById('coinTableBody');
    let tr, pop, dwdm;

    for (let key in popCodeList) {
        popText = document.createTextNode(key);
        dwdmText = document.createTextNode(popCodeList[key]);
        tr = document.createElement("tr");
        pop = document.createElement("td");
        dwdm = document.createElement("td");

        pop.appendChild(popText);
        dwdm.appendChild(dwdmText);
        tr.appendChild(pop);
        tr.appendChild(dwdm);

        table.appendChild(tr);
    }
}

/*-----------------------Event Listeners-----------------------*/

// POP Input Boxes
document.getElementById('pop1Input').addEventListener('blur', function(){ validatePopCode('pop1Input', 'pop1' ) });
document.getElementById('pop2Input').addEventListener('blur', function () { validatePopCode('pop2Input', 'pop2') });
document.getElementById('pop1Input').addEventListener('change', generateCoinPath);
document.getElementById('pop2Input').addEventListener('change', generateCoinPath);

// Reset Button
document.getElementById('resetCoinPath').addEventListener('click', resetCoin);

// Question Mark/POP table button
document.getElementById('openTable').addEventListener('click', generateDwdmTable);
