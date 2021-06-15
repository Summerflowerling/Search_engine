const resultIntro = document.getElementById("result-intro")
    
export function updateUi (sentBackData){
    if(resultIntro.hasChildNodes()){
       resultIntro.innerHTML =``
    } 
    
    let count = 0
    while(count < sentBackData.length){
        let url = sentBackData[count].fullurl
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "result-list")
        newDiv.innerHTML = `
        <a href=${url} target="_blank">
        <h3 class="list-item-title">${sentBackData[count].title}</h3>
        <p>${sentBackData[count].snippet}...</p>
        </a>
        `
        resultIntro.appendChild(newDiv)
        count++
    
    }

}
