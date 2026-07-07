const express = require('express')
const router = express.Router()

const Person = require('./../models/person')






router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();

        console.log("data is saved");
        res.status(200).json(response)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "internal server error"})
    }
})



router.get('/', async(req, res) => {
    try {
        const data = await Person.find();
        console.log(data)
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error)
    }
})


router.get('/:workType', async(req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'student' || workType == 'teacher' || workType == 'principle'){
           
            const data = await Person.find({work : workType});
            res.status(200).json(data)
            
        }
        else{
            res.status(404).json({error : "Invelid work type"});
        }
        
    } catch (error) {
       console.log(error)
       res.status(500).json({
        error: error.message
    });
    }
})



router.put('/:id', async(req, res) => {
    try {
        const id = req.params.id
    const toUpdate = req.body

    const response = await Person.findByIdAndUpdate(id, toUpdate, {
        new : true,
        runValidators : true
    })

    if(!response){
        res.status(404).json({error : 'Invalid user Id'})
    }
    
    res.status(200).json(response)
    console.log("data updated")
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }

})



router.delete('/:id', async(req, res) => {
    try {
    id = req.params.id

    const response = await Person.findByIdAndDelete(id)

    if(!response){
      return res.status(404).json({error : 'Invalid user Id'})  
    }

    res.status(200).json(response)
    console.log("data updated")

        
    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
        
    }
})





module.exports = router