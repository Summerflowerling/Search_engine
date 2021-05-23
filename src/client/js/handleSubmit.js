

export async function handleSubmit (search){
    console.log(search)

    //const url = `/getInput`
    const url = `http://localhost:8086/getInput/${search}`
    //console.log(url)
    //const data = await fetch (url)
    const response = await fetch(url)
    const json = await response.json()
    console.log("This is client side return data",json.query.search[0])
    const displayData = json.query.search
    try{
        Client.updateUi(displayData)
    }
    catch(err){
        console.log("There is an error.", err)
    }
    
     

}





/*const api_url = `weather/${lat},${lon}`;
      const response = await fetch(api_url);
      const json = await response.json();
      */