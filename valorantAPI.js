'importing express and valorant api'
import { createRequire } from 'module';
import HenrikDevValorantAPI from 'unofficial-valorant-api';
const require = createRequire(import.meta.url)
const express = require('express');
const testAPI = new HenrikDevValorantAPI();
const app = express();


app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));


app.post('/api',(request,response) => {    
    console.log("Request reccieved");
    console.log(request.body)

    /*
    response.json({
        status: "successful",
        username: request.body.username,
        tag: request.body.tag
    })
    */

    async function getAccount(account, tag, force ){
   
        let data
        data = await testAPI.getAccount({
    
            name: account,
            tag: tag,
            force: false,
        
        })

        

        response.json({
            status: "successful",
            username: data.data.name,
            tag: data.data.tag,
            region: data.data.region
        });

        console.log(data);
    }

    async function getmatches(){
    let data
    let conversion

    data = await testAPI.getMatches({
        name: "Bear",
        tag: "1507",
        region: "na"
    });

    for(let x in data.data){

        console.log(data.data[x].metadata);

    }

    console.log(data.ratelimits);

}

    getAccount(request.body.username, request.body.tag, false);

});







async function getmatches(){
    let data
    let conversion

    data = await testAPI.getMatches({
        name: "Hope",
        tag: "fuls",
        region: "na"
    });

    for(let x in data.data){

        console.log(data.data[x].metadata);

    }

    console.log(data.ratelimits);

}

async function getMMR(){

    let data

    data = await testAPI.getMMRHistory({
        name:"Hope",
        tag:"fuls",
        region:"na"
    });

    for(let x in data.data){
        console.log(data.data[x])
    }
}

