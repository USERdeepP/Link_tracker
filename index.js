let myLead = []
const io = document.getElementById("tx")
const save = document.getElementById("save")
const savetab = document.getElementById("savetab")
const clear = document.getElementById("clc")
let ul = document.getElementById("list")
let i = 0 
const leadsfromstorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsfromstorage){
    myLead = leadsfromstorage
    rneder()
}

save.addEventListener("click",function(){
    myLead.push(io.value)
    localStorage.setItem("myLeads", JSON.stringify(myLead))
    listitem = ""
    rneder()
    ul.innerHTML = listitem
    location.reload()
})

savetab.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLead))
    })
    rneder()
    location.reload()
})

clear.addEventListener("click",function (){
    localStorage.clear()
    location.reload()
})

function rneder()
{
    listitem = ""
    for (let i = 0 ; i < myLead.length ; i++)
    {
        listitem += `
            <li class="my">
                <a target="_blank" href="${myLead[i]}">
                    ${myLead[i]} 
                </a>
                <hr>
            </li>
        `
    }
    ul.innerHTML = listitem
}