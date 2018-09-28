'use strict'

var express = require ('express');

var app = express('a');

var api = express.Router();
//models

var users = [
    {
        name : 'Efrén',
        surname: 'Trejo ontesdeoca',
        age: 23
    },{
        name : 'Santi',
        surname: 'Nomelo Se',
        age: 22
    }

]

//controller

const showPruebita = (req, res) => {
    const position = req.params.position;
    res.status(200).send(users[position]);
}

const showHelloWorld = (req, res) => {
    res.status(200).send({
        message: 'Hello World!'
    });
}

const getStudents = (req,res) => {

}

//routes
api.get('/hello-world', showHelloWorld);
api.get('/pruebita/:position', showPruebita);

//base route
app.use('/api',api);

const port = 40000;

//base route
app.listen(port, () =>{
    console.log('listening on http://localhost:' + port);
});
