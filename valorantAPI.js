'importing express and valorant api'
import { createRequire } from 'module';
import HenrikDevValorantAPI from 'unofficial-valorant-api';
const require = createRequire(import.meta.url)
const express = require('express');
const testAPI = new HenrikDevValorantAPI();
const app = express();


app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
//Post request for valorant
app.post('/api_val', (request, response) => {
    console.log("Request reccieved");
    console.log(request.body)

    /*
    response.json({
        status: "successful",
        username: request.body.username,
        tag: request.body.tag
    })
    */
    getAccount(request.body.username, request.body.tag, false)

    async function getAccount(account, tag, force) {
        let data;
        //What is here is an attempt at error handling, will try to find a better method.
        try {
            data = await testAPI.getAccount({

                name: account,
                tag: tag,
                force: false,
            })
            response.json({
                status: "Successful!",
                username: data.data.name,
                tag: data.data.tag,
                region: data.data.region,
                ratelimits: data.ratelimits,
            })
            console.log("Sucessful!")
            console.log(data.ratelimits)
        } catch (error) {

            let code
            let msg;
            try {
                code = data.error[0].code;
                msg = data.error[0].details;
            } catch (next_error) {
                console.log("No error code from server: ", next_error + "\n" + "Original error message:", error);
                
                response.json({
                    status: "Unsuccessful",
                    error: msg,
                    code: code       
                })
            }

            response.json({         
                status: "Unsuccessful!",
                error: msg,
                code: code       
            })

            console.log("Error from try/catch: ", error + "\n" + "Error code from API: ", code + "\n" + "Error details: ", msg);

            /*
            if(data.data != "null"){
            console.error("error: ", error.message)
            }       
            else{
            console.error("Console Error", error + "\n" + "Code from api", data.error[0].code)
            }
            */
        }
    }

});

/*
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

*/