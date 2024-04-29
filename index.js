//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var userAccess = false;

app.use(bodyParser.urlencoded({extended : true}))


function checkPass(req, res, next){
    if (req.body["password"] === "ILoveProgramming"){
        userAccess = true;
    }
    next();
}

app.use(checkPass)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/check", (req, res) =>{
    if (userAccess){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.sendFile(__dirname + "/public/index.html")
    }
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`)
});