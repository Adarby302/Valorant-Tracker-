

function clicker(){
    
   let searchName = document.getElementById('searchBar').value;
   let searchTag = document.getElementById('searchTag').value;

   let searchPlayer = JSON.stringify({"username":searchName, "tag":searchTag});
   let url = new URL('http://localhost:3000/api_val');

   sendRequest(url,searchPlayer);
}

async function sendRequest(url, content){

   const data = await fetch(url, {
         method: 'POST',
         headers: {
         "Content-Type": "application/json"
          },
         body: content
   });

   const json = await data.json();

   console.log(json.region);

   result(json);
}

function result (data){

   let parse = JSON.stringify(data);

   document.getElementById('result_Tag').value = "1234" + parse;

}




