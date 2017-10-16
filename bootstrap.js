'use strict';
let counter = 1;
function addNewElement(event, htmlType)
{
    if(htmlType === "mod")
    {
        let modFragment = document.createDocumentFragment();
        let myDiv = document.createElement('div');
        myDiv.id = "mod" + counter;
        myDiv.innerHTML = '<br/><select class="ModsClass"><option>---</option><option value="0">Option 1</option><option value="1">Option 2</option></select>' +
                          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                          '<input type="text" class = "addedInput" placeholder="min"/><input type="text" class = "addedInput" placeholder="max"/>' +
                          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                          '<button type = "button" name="deleteMod" onclick = "deleteMod2(event)">X</button><br/>';
        modFragment.appendChild(myDiv);
        event.target.parentNode.insertBefore(modFragment, event.target);
    }
    else if(htmlType === "group")
    {
        let groupFragment = document.createDocumentFragment();
        let myDiv = document.createElement('div');
        myDiv.id = "group" + counter;
        myDiv.innerHTML = '<span><br/><select class="ModsClass"><option>---</option><option value="0">Option 1</option><option value="1">Option 2</option></select>' +
                          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                          '<input type="text" class = "addedInput" placeholder="min"/><input type="text" class = "addedInput" placeholder="max"/>' +
                          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                          '<button type = "button" name="deleteMod" onclick = "deleteMod2(event)">X</button><br/></span>' +
                          '<button name = "AddMod" type = "button" onclick="addNewElement(event, "mod")">Add Mod</button><br/><br/>' +
                          '<select id="ModsConditions" class="Conditions">' +
                          '<ul><option value="0">And</option><option value="1">Not</option><option value="2">Count</option><option value="3">Sum</option><option value="4">If</option></ul></select>' +
                          '<span name = "existAndMatch">All specified mods must exist and match their values.</span>' +
                          '<button id = "deleteModGroup" name="DeleteModGroup" onclick = "deleteGroup(event)">Delete Group</button><br/><hr>'
        groupFragment.appendChild(myDiv);
        event.target.parentNode.insertBefore(groupFragment, event.target);
    }
    else { console.log("function parameter does not match mod or group keywords"); }
    counter++;
}
function deleteMod2(event)
{
    console.log(event.target);
    console.log(event.target.parentNode);
    x = event.target.parentNode;
    x.innerHTML = "";
    x.remove();
}

function deleteGroup(event)
{
    alert("TESTING");
    console.log(event.parentNode.id);
    var x = document.getElementById(event.parentNode.id);
    console.log(x.parentNode.id);
}
function reloadPage() { window.location.reload(); }

function narrowBaseOptions(type, base)
{
    let type2 = type.options[type.selectedIndex].text;
    let base2 = base.getElementsByTagName("optgroup");
    let max = base2.length;
        for(let i = 0; i < max; i++)
        {
            if (type2 === 'any')             { console.log("Test"); }
            else if(type2 != base2[i].label) { base2[i].style.display = "none"; }
            else if(type2 == base2[i].label) { base2[i].style.display = "block"; }
        }
}