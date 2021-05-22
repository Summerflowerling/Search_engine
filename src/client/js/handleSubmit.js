

export async function handleSubmit (search){
    console.log(search)

    //const url = `/getInput`
    const url = `/getInput/${search}`
    //console.log(url)
    //const data = await fetch (url)
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    try{
        Client.updateUi(json)
    }
    catch(err){
        console.log("There is an error.", err)
    }
    
     

}





/*const api_url = `weather/${lat},${lon}`;
      const response = await fetch(api_url);
      const json = await response.json();
      */