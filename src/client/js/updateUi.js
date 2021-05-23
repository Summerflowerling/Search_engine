const resultIntro = document.getElementById("result-intro")
    

export function updateUi (sentBackData){
    if(resultIntro.hasChildNodes()){
        resultIntro.removeChild(newDiv);
    } 
    
    console.log("UpdateUi")
    console.log("sentBackData length",sentBackData.length)
    let count = 0
    while(count < sentBackData.length){
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "result-list")
        newDiv.innerHTML = `
        <h3>${sentBackData[count].title}</h3>
        <p>${sentBackData[count].snippet}</p>
        `
        resultIntro.appendChild(newDiv)
        count++

    }
  

}
