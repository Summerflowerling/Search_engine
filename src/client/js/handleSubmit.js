//import { search } from "../../server/server"

export async function handleSubmit (search){
    console.log(search)
    //const url = `/getInput` doesn't work with dev server
    //NOTE: in order to work with dev derver, the fetching url needs to be port specific like below
    //const url = `http://localhost:8086/getInput/${search}`
    const url = `./getInput/${search}`
    const response = await fetch(url)
    const json = await response.json()
    console.log("This is client side return data",json.query.pages)
    console.log("This is client side return json data",json)
    const displayData = Object.values(json.query.pages) //convert return obj into an array
    
    try{
        console.log(searchTerm.value)
        Client.updateUi(displayData)
    }
    catch(err){
        console.log("There is an error.", err)
        console.log("This is client side return json data",json)
    }
    
}







  



