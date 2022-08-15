const express = require('express'); 
const Router = express.Router();
const {showData, postData, showDbData, postDelete, postEdit, getEditData} = require('../controller/homeController')

Router.get('/', showData);
Router.post('/postData', postData);
Router.get('/showDbData', showDbData);

Router.delete('/postDelete/:id', postDelete)


Router.get('/edit/:id', getEditData)
Router.put('/postEdit/:id', postEdit)




module.exports = Router