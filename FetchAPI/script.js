const url = "https://cat-fact.herokuapp.com/facts";


const getFacts = async()=>{
    console.log("getting data -----");
    let response = await fetch(url);
    console.log(response);

    let data = await response.json();
    console.log(data[0].text);

}
getFacts();