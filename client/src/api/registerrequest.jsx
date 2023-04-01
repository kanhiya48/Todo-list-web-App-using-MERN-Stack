import {API_URL} from "./config"

export default (uniqueId)=>{

return fetch(`${API_URL}/register`,{
    method:'POST',
    headers:{
        // Authorization:`bearer ${token}`,
        "content-type":'application/json'
    },
    body: JSON.stringify({
        text: uniqueId

    })
}).then((response)=>{

 return response.json();


}
    ).then((data)=> 
    {
        console.log(data);
        return data;
       
    })
    .catch(error => {
        console.error(error); // log any errors that occurred
      }
    )
}