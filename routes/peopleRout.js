const express = require('express')
const router = express.Router()

const Person = require('./../models/person')






router.post('/', async(req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();

        console.log("data is saved");
        return res.status(200).json(response)
        
    } catch (error) {
        // res.status(500).json({ 
        //     error: "internal server error", 
        //     details: error.message 
        // });
        console.log("❌ DATABASE ERROR:", err.message); // This prints the error in VS Code terminal
        return res.status(500).json({ error: err.message });
        }
})


// // POST route to add a person
// router.post('/', async (req, res) => {
//     console.log("--- 1. Postman successfully reached the route! ---");
//     console.log("--- 2. Data received from Postman: ---", req.body);

//     try {
//         const data = req.body; 
//         const newPerson = new Person(data); 
        
//         console.log("--- 3. Attempting to save to MongoDB... ---");
//         const savedPerson = await newPerson.save(); 
        
//         console.log("--- 4. Successfully saved to database! Sending response back... ---");
//         res.status(200).json(savedPerson); 

//     } catch (err) {
//         console.error("--- X. ERROR CAUGHT! ---", err);
//         res.status(500).json({ error: 'Internal Server Error', details: err.message });
//     }
// });









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
    const id = req.params.id

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