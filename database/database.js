
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin-data:admindata123@ds347298.mlab.com:47298/heroku_l19dfs28', 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log(kitty.name +': meow'));