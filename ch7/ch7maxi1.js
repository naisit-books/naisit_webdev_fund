const $ = (selector) => document.querySelector(selector);

function alertBatman (e) {
    e.preventDefault();
    
    try {
        batCode = getFormElementValue("input", "[name=batCode]");
        gordonCode = getFormElementValue("input", "[type=hidden][name=gordonCode]");

        if (batCode != 'bbbb' && gordonCode != 'gggg') {
            throw new Error ("Bat code or Gordon's code was wrong. Try again");
        }

        villains = getFormElementValue("select", "[name=villains]");
        hood = getFormElementValue("input", "[name=location]");
        crime = getFormElementValue("input", "[name=crime]");
        crime_time = getFormElementValue("input", "[name=time]");
        description = getFormElementValue("textarea", "textarea[name=description]");
        severity = getFormElementValue("input", "input[name=severity]:checked");

        alert("MESSAGE SENT.\r\rOh no Batman!\r"+villains+" attacked "+hood+" by "+crime+" at "+crime_time+". This is a "+severity+"!!!\r\r"+description);
        
    }catch(err){
        console.log(err);
        alert(err);
    }
}

function getFormElementValue(elemType, selector) {
    if (!$(selector)) {
        throw new Error(selector + " failed to return any elements");   
    }

    if (elemType == 'input' || elemType == 'textarea') {
        value = $(selector).value;    
    } else if (elemType == 'select') {
        value = getSelectValues($(selector));
    }

    if (value === null){
        throw new Error (selector + " found an element, but its value is null. Check your validation");
    }
    return value;
}

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i=0, iLen=options.length; i<iLen; i++) {
        opt = options[i];
        if (opt.selected) {
        result.push(opt.value || opt.text);
        }
    }
    return result;
}