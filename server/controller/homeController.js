const model = require('../modules/emploerModule')



let showData = async(req,res) =>{
    try{
        res.send("backend is woring")
    }catch(err){
        res.sen({error: err.message})
    }
}


let postData = async(req,res) =>{
    try{
        let data = req.body;
        let dbData = await model.create(data)
        res.send(dbData)
    }catch(err){
        res.send({error: err.message})
    }
}


let showDbData = async(req,res) =>{
    try{
        
        let dbData = await model.find()
        res.send(dbData)
    }catch(err){
        res.send({error: err.message})
    }
}

let postDelete = async(req,res) =>{
    try{
        let id = req.params.id        
        let dbData = await model.findByIdAndRemove({_id: id})
        res.send(dbData)
    }catch(err){
        res.send({error: err.message})
    }
}



let getEditData  = async(req,res) =>{
    try{
        let id = req.params.id        
        let dbData = await model.findOne({_id: id})
        res.send(dbData)
    }catch(err){
        res.send({error: err.message})
    }
}


let postEdit  = async(req,res) =>{
    try{
        let id = req.params.id   
        let updateData = req.body     
        let dbData = await model.findOneAndUpdate({_id: id},{$set: updateData},{new: true});
        res.send(dbData)
    }catch(err){
        res.send({error: err.message})
    }
}





module.exports = {showData, postData, showDbData, postDelete, getEditData, postEdit}