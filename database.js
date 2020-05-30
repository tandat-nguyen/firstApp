const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root12345@ds041228.mlab.com:41228/heroku_64fw1q3v', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));