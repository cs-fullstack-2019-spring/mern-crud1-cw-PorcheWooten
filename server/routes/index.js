var express = require('express');
var router = express.Router();
var Products = require('../models/ProductSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*LIST ALL*/
router.get('/listAll', function (req, res) {
  console.log('List products');
  Products.find({}, (err, results) => {
    err ? res.send(err) : res.send(results)
  });
});


/*CREATE*/
router.post('/create', function (req, res){
  Products.create(req.body, (err, results)=>{
    err ? res.send(err) : res.send(results);
  })
});

/*UPDATE*/
router.put('/:id', function (req,res) {
   Products.updateOne({_id: req.params.id}, req.body, (err, results)=>{
     err ? res.send(err) : res.send(results);
   })
});

/*DELETE*/
router.delete('/:id', function(req,res){
  Products.deleteOne({productID: req.params.id}, (err, results)=>{
    err ? res.send(err) : res.send("Deleted!");
  })
});



module.exports = router;
