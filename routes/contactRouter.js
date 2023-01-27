const express = require('express')
const router = express.Router()


router.get('/', function(req,res){
    res.send('Contact')
})

router.get('/:id', function(req,res){
    res.send('Contact by id')
})

router.post('/', function(req,res){
    res.send('Contact by id')
})

router.put('/', function(req,res){
    res.send('Contact put')
})

router.delete('/', function(req,res){
    res.send('Contact post')
})


module.exports = router




