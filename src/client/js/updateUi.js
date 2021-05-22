const resultIntro = document.getElementById("result-intro")
    

export function updateUi (sentBackData){

    resultIntro.innerHTML = `${sentBackData.query}`
    
   

}
