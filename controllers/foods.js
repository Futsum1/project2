const Food = require('../models/food');
const Order = require('../models/order');
const {render} = require('ejs');

module.exports = {
  index,
  new: newFood,
  show
  };


  function index(req, res){
    Food.find({}, function(err, foods){
    res.render('foods/index', {foods});
    });
  }

    
  function show(req, res){
    Food.findById(req.params.id, function(err, food){
      Order.find({food: food._id}, function(err, orders){
         res.render('foods/show',{title: 'Food Detail', food, orders});
    })
  });
}


  function newFood(req, res) {
    console.log("it's hittting the newOrder")
   res.render('foods/new');

}