

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

   console.log(json);

   result(json);
}

function result (data){

   let parse_status = JSON.stringify(data.status)

   document.getElementById('res_name').value = data.username;
   document.getElementById('res_reg').value = data.region;
   let prompt = document.getElementById('res_stat');
    if(parse_status =="\"Successful!\""){
      
      document.getElementById('res_stat').value = data.status;
      prompt.style.color = 'green';
    }
    else{
      document.getElementById('res_stat').value = data.status;
      prompt.style.color = 'Red'
    }
}




