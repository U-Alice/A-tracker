//chrome extension
let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBTN = document.getElementById("tab-Btn")
let deleteEL =   document.getElementById("delete")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
myLeads = leadsFromLocalStorage
  render(myLeads)
}


tabBTN.addEventListener("click", function(){
    //Url of the tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    });
})




function render(leads) {
    let listItems = ""
    for (let i = 0; i <leads.length; i++){
    
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>
    `
    ulEl.innerHTML = listItems
    }
    }

    inputBtn.addEventListener("click",function(){
        myLeads.push( inputEl.value)
        inputEl.value = " "
        localStorage.setItem("myLeads",JSON.stringify(myLeads) )
        render(myLeads)
        })

deleteEL.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []  
    ulEl.innerHTML = " "
})



