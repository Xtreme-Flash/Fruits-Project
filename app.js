const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB',{useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min:1, max:10,
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "mango",
    rating: 9,
    review: "king of fruits"
});

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "john",
    age: 79
});

//person.save();

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        console.log(fruits);
    }
});