//import { search } from "../../server/server"

const searchTerm = document.getElementById("searchTerm")

export async function handleSubmit (search){
    console.log(search)
    //const url = `/getInput` doesn't work with dev server
    //NOTE: in order to work with dev derver, the fetching url needs to be port specific like below
    const url = `http://localhost:8086/getInput/${search}`
    const response = await fetch(url)
    const json = await response.json()
    console.log("This is client side return data",json.query.pages)
    const displayData = Object.values(json.query.pages) //convert return obj into an array
    
    try{
        console.log(searchTerm.value)
        Client.updateUi(displayData)
    }
    catch(err){
        console.log("There is an error.", err)
    }
    
     

}



/*TODO: Figure out how to combine eventListener with webpack*/

searchTerm.addEventListener("keypress", function(e){
    if (e === 13) {
        handleSubmit(searchTerm.value)
        console.log(searchTerm.value)
         
       }

})



  



