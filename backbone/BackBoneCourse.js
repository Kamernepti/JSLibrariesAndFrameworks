// UnderscoreJS
// Since Backbone deals with models and collections (as well as views), it makes sense that Backbone would utilize the Underscore library for its iterating, manipulating, and querying purposes. If you haven’t downloaded UnderscoreJS, you can do so at  http://underscorejs.org. Make sure to include it in any HTML files the same as we would jQuery, Angular, etc. Their documentation is also easy to navigate and understand.

// Underscore gives us excellent features for handling collections, arrays, and objects.
// You may remember being introduced to the implementation of Underscore’s methods where we built our own JS Library in the MEAN Stack. Let’s dive into a few of these methods and understand what Underscore can do for us…We’ll work with both an object and an array:

var ironman = {
 name: "Tony Stark",
 alias: "Iron Man"
};
var avengers_array = [
 {name: "Tony Stark", alias: "Iron Man", ability: "flight"},
 {name: "Bruce Banner", alias: "The Incredible Hulk", ability: "superhuman strength"},
 {name: "Steve Rogers", alias: "Captain America", ability: "superhuman strength"},
 {name: "Clint Barton", alias: "Hawkeye", ability: "superior hand-eye coordination"},
 {name: "Thor Odinson", alias: "Thor", ability: "teleportation"},
 {name: "Natasha Romanova", alias: "Black Widow", ability: "espionage"}
];

// Some Collection-based functions are…
.each(), .map(), .pluck(), .where(), .findWhere(), .filter(), .sortBy()
// When we mention collection-based…
// It can handle either objects or arrays. You can read the documentation to get more in-depth. Try console logging the following examples and get a feel for how they work. Remember to include Underscore in your HTML documents!

// .each()
_.each(ironman, function(value, key){ alert(key+': '+value); });

// – A simple function that can iterate over objects or arrays and even do some manipulation

// .map()
var avengersAssemble = _.map(avengers_array, function(avenger){ return avenger; });

// – Pushes each avenger object into a new array after funneling it through an optional transformation function

// .pluck()
var avengerNames = _.pluck(avengers_array, 'name');

// – Often used with .map(). Returns or “plucks” only the values for the key specified as the second argument and places them in an array

// .where()
var superhumanStrengthAvengersArray = _.where(avengers_array, {ability: "superhuman strength"});

// – Returns an ARRAY of all values that contain a match to the key-value properties object

// .findWhere()
var superhumanStrengthAvenger = _.findWhere(avengers_array, {ability: "superhuman strength"});

// – Returns the FIRST value when it finds a match to the key-value properties object; if none are found then undefined is returned

// .filter()
var superhumanStrengthAvengers = _.filter(avengers_array, function(avenger){ return avenger.ability == "superhuman strength"; });

// – Returns an array of values that satisfy a predicate 

// .sortBy()
var sortedAvengerNames = _.sortBy(avengers_array, 'name');

// – Returns an ascending  sorted array based on the values tied to the key we specify


// ********************
// Next, we’ll get further into object-specific and array-specific methods
// Avengers examples
var ironman = {
 name: "Tony Stark",
 alias: "Iron Man"
};
var avengers_array = [
 {name: "Tony Stark", alias: "Iron Man", ability: "flight"},
 {name: "Bruce Banner", alias: "The Incredible Hulk", ability: "superhuman strength"},
 {name: "Steve Rogers", alias: "Captain America", ability: "superhuman strength"},
 {name: "Clint Barton", alias: "Hawkeye", ability: "superior hand-eye coordination"},
 {name: "Thor Odinson", alias: "Thor", ability: "teleportation"},
 {name: "Natasha Romanova", alias: "Black Widow", ability: "espionage"}
];
// Being introduced to a couple of these functions will be highly useful for future work with Backbone to understand what Underscore is doing for Backbone behind the scenes!

Arrays
// .last() or .first()... does exactly what you think
var firstAvenger = _.first(avengers_array); // returns the first value in an array
var lastTwoAvengers = _.last(avengers_array, 2); // The optional second parameter allows for additional values to be returned, but when specified, comes back as an array
// Hopefully the .last() and .first() functions already ring a bell to you. For those who took the MEAN stack, it’s very similar to the Mongoose queries we write. For the Ruby stack, it looks an awful lot like ActiveRecord no? Let’s carry on.

// .range()
var newArray = _.range(0,10); // returns an array with the values from argument1 (inclusive) to argument2 (exclusive)
Objects
// .defaults()
var almostAvenger = {
 name: "John Q. Public",
 alias: "John Q"
};
_.defaults(almostAvenger, {
 name: "Need a Real Name",
 alias: "Need a Superhero Name",
 abilities: "Need Superhero Abilities"
});

// The .defaults() function is a great one. What it does is supplies defaults to an object if they haven’t already been created. It’s kind of like a fail-safe for your apps. Our almostAvenger object will look like this:

{
 name: "John Q. Public", 
 alias: "John Q", 
 abilities: "Need Superhero Abilities"
}

//*******************/
// Why Learn These Underscore Functions?
// Let’s revisit what Backbone provides:
// A set of tools for structuring our front-end
// These tools include Models, Collections, and Views
// We’ll see these Underscore functions sprinkled throughout Backbone.
// Some functions only apply to models and some apply to collections and when you digest the Backbone documentation, you’ll see lots of references to Underscore. It makes sense then to use Underscore’s set of tools to maximize Backbone’s classes. When it comes to views, the template() function in Underscore will be used heavily and we will dive into that when we get to the Views portion of Backbone.

// Now let's practice Underscore for ourselves then we'll get to some Backbone

// Backbone is a front-end library that can be used as a framework to give us the tools to provide structure and control
// We may have written lots and lots of jQuery/AJAX code to handle a single CRUD operation in a single page application. Below is a generic example where, upon a click of an li with class ‘user’, we create an AJAX post request and rely upon finishing the URL with some added information from the DOM $(this).attr('data-user-id'). Piling on, I’m sure we’ve encountered some examples of embedding a data-this-id or data-that-id into DOM elements, only having to retrieve them again later from the DOM when we’re ready to do some AJAX’ing. This can lead to a mess of jQuery, let alone the amount of jQuery work it takes to update things to reflect our changes to the user

$('div.users').on('click', 'li.user', function(){
    $.post(
     '/users/'+$(this).attr('data-user-id'),
     function(user){
      //...do something in the view with this "user" that came back
      $('#user-'+user.id).html(user.username); 
     },
     'json');
    return false;
   });
   

// Backbone to the Rescue!
// As opposed to writing gobs and gobs of jQuery with the potential of mishandling information like in the example above, Backbone provides a much cleaner and dynamic solution to get data from our front-end UI to our back-end and back again. But wait, you might be saying, "I’m pretty sure I’ve had to update my HTML after I’ve performed any CRUD operations, just like in the code snippet above, so what is Backbone going to do for me with regards to that?" That’s a great question. Backbone gives us the ability to create a relationship between a model and a view so we always have a listener keeping an ear out for changes and our views can react based on these changes. To provide an overview of what Backbone provides us, we can break it down into three areas: Models, Collections, and Views.

// Models, Collections, Views (M-C-V)
// Backbone has three very important classes: Models, Collections, and Views. Remember OOP? I hope you do because we’ll be extending the three of these classes, inheriting their properties and methods and adding new ones if we need.

// Models
// Backbone models help us detach any business logic from our UI. To do so, a model can be designed to represent attributes and provide useful functions to manipulate these attributes.

// Collections
// Backbone collections provide us with an overarching, for lack of a better word, “collection” of related models. For example, a collection of users. What’s nice about a collection is that it can act as a single listener for ALL of its models. We will see the utility of this later. It also can handle all the syncing of changes to any of the models it is responsible for.

// Views
// Models and Views tend to work in concert. If a view takes some user input to change a model’s data, the view will handle this data and make the change to its corresponding model and the model can then sync with our database.

// It all sounds great, right? It's also a lot to conceptualize all at once. Let's start with models and work our way up to collections and then views

// Setting Up Backbone
// Download the latest development or production version of Backbone from http://backbonejs.org/

// Since Backbone depends upon Underscore and jQuery, always include them before including Backbone like so:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Backbone Setup</title>
//     <script src="jquery-1.11.3.min.js"></script>
//     <script src="underscore.js"></script>
//     <script src="backbone.js"></script>
// </head>
// <body>
// </body>
// </html>

{/* Backbone is Optimized for RESTful APIs
As we will see later in several examples, there is a premium placed on linking up a Backbone app to a RESTful API. */}

//******************MODELS */

// Backbone Models
// As mentioned in the previous tab, Backbone models help us represent our data on the front-end. The Model class provides the functionality to handle any changes to our data, but it is up to us as the developer to decide how we want to extend the Model class and add our own functionality. For example, let’s set up our own Book model with some added features sprinkled in…

var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    },
    initialize: function(){
        console.log("I'm alive!");
    }
});


// What we’ve done is extend the Model class and provided an initialize function and also a defaults object, so if we were to create a new Book, we’d say…

// var myBook = new BookModel();
// Open up a browser console and notice that it printed "I'm alive!". How did that happen?

// Essentially what we’ve done is create a BookModel class which inherits from the Model class, and at the same time, we’ve tacked on an object with the defaults and initialize properties. Think of initialize as this: anytime we create a new BookModel, the initialize function gets invoked as soon as an instance of the model is created.

// Now let’s see what defaults can do for us. When we add console.log(myBook); we will see something like this…

Im alive!
child
 _changing: false
 _pending: false
 >_previousAttributes: object
 attributes: object
    author: null
    title: null
    >__proto__: object
 changed: object
    >__proto__: object
 cid: "c1"
 id: null
 >__proto__: Backbone.Model

// Take note that the “I’m alive!” string was logged from the initialize function as soon as we created the myBook instance.

// Notice the ‘attributes’ object has been set to have a title and author. This is where the defaults object came into play! 

// Also, notice the ‘changed’ object. We never set up an attributes object, nor a changed object, but it was given to our BookModel class through inheritance from the Model class. This will prove how the Model class helps us capture changes in our model’s data. Let’s update myBook to have a title.

myBook.set("title", "Where The Wild Things Are");

// Model Methods

// The set() method comes from the Model class. It does exactly what we’d expect: takes in 2 parameters, the first being the key or attribute we want to change about the model and the second being the value we want it to be.

// The get() method does what we would expect as well: If a model contains an attribute, pass the attribute into the method. For our book example, we can get it using get("title");

// Get & Set Meme

// Let’s check out myBook at this point using console.log(myBook);

// Im alive!
child
 _changing: false
 _pending: false
 >_previousAttributes: object
 attributes: object
    author: null
    title: "Where The Wild Things Are"
    >__proto__: object
 changed: object
    title: "Where The Wild Things Are"
    >__proto__: object
 cid: "c1"
 id: null
 >__proto__: Backbone.Model
// Excellent! The change to the title attribute was captured in the ‘changed’ object and also updated in the ‘attributes’ object. This will be a key concept moving forward. Now let’s get some practice building our own Models.

//***********SECURITY AND VALIDATION */
// Securing and Validating Our Data
// How do we go about securing our models?
// This is an interesting subject that we often don’t think about, but it’s important that we realize while our front-end data may not always touch our database, our front-end code is still being trusted by our back-end API. In other words, we should be concerned with malicious attacks coming in the form of Cross-Site Scripting or XSS.

// With our previous example of a BookModel, let’s say we weren’t checking whether or not someone was injecting scripts into our title and author fields. If we were to save our model and have this script go unchecked to our back-end, we could be in for a world of hurt. Thankfully, Backbone gives us a simple tool to cleanse all the information that a user or fake user might provide us.

var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    }
});
var malware = new BookModel({title: "<script>alert('gotcha!')</script>"});
// Above, this malware BookModel instance is trying to put a script into the title attribute of a book. We can use .escape() on our models to escape individual attributes. It works similar to a .get() but instead returns an escape string. So if we were to escape the title of malware, we’d do something like this.

var escapedString = malware.escape('title');
// If we were to console log this escapeString, we’d see that we’ve rendered the script useless.

// What about validations?
// Yet again, Backbone gives us cool ways to check things for us. Granted, we have to determine the validations, but nonetheless, Backbone is giving us just what we need. Let’s say we want to verify that a BookModel has a title and author and they’re not null. Well, first we need to figure out when we want to validate. At the very least, Backbone will run a validation for us anytime we try to save a model to a database (don’t worry, we’ll expand on this later in the CRUD chapter). Let’s see what that means. Below, we have a book with the title “Charlotte’s Web”.

var myBook = new BookModel({title: "Charlotte's Web"});
// Since it’s lacking an author, the author attribute will be null. We want to alert the user that they need an author before they try saving. So we can build out our BookModel to have a validate method that will be called every time a BookModel instance is trying to be saved.

var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    },
    validate: function(attrs, options){
        if (!attrs.author){
            return "Book must have an author";
        }
    }
});
var myBook = new BookModel({title: "Charlotte's Web"});
myBook.save();

// Notice that the validate method is passed a couple parameters. The first being the model’s attributes object. The second is an options object that isn’t always necessary. For now, let’s focus on the attributes object. If the validate method is passed the model’s attributes, then we can make our own validations. Seen above, if the author attribute is missing or is null, we return an error message. But where does the error message go?

// If we set up a listener on our myBook model and tell it to listen for an “invalid” event, we’ll be able to capture two things: first, the model that was found invalid and second, its error message from our validate method.

myBook.on('invalid', function(model, error){
alert(model.get('title')+" found to be invalid. Reason: "+error);
});
// The example above is very generic, but it shows us the behavior of model validation. Here’s the snippet of code all together. Copy and paste it into a JS file and run it.

var BookModel = Backbone.Model.extend({
    defaults: {
        title: null,
        author: null
    },
    validate: function(attrs, options){
        if (!attrs.author){
        return "Book must have an author";
    }
}
});
var myBook = new BookModel({title: "Charlotte's Web"});
myBook.on('invalid', function(model, error){
alert(model.get('title')+" found to be invalid. Reason: "+error);
});
myBook.save();






//***********COLLECTIONS */
// Backbone Collections
// As mentioned previously, Collections allow us to keep tabs on multiple models at one time. This is highly useful for keeping track of a list of related data like in the previous assignment where we had a list of stacks.

// To show a familiar example, let’s navigate to: http://pokeapi.co/api/v2/pokemon

{
    "count": 811,
    "next": "http://pokeapi.co/api/v2/pokemon/?limit=20&offset=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "http://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "http://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "http://pokeapi.co/api/v2/pokemon/3/"
        },
        ...
    ]
}
   
 
// Notice the JSON that we receive contains an array of Pokemon objects in the “results” key. Collections feed off of arrays typically, so let’s use this API to create a Pokemon Collection and try to model some Pokemon in doing so.

// Similar to a model, we are going to need to extend the Collection class. We’ll introduce a few concepts along the way.

var PokemonCollection = Backbone.Collection.extend({
    model: PokemonModel,
    url: "http://pokeapi.co/api/v2/pokemon"
});

// What we've done while extending the Backbone Collection class is set up a model and url property. The url property is directly tied to where a collection lives. In this case, this PokemonCollection lives at the http://pokeapi.co/api/v2/pokemon url. When incorporating your own RESTful API, a url may look like this: url: '/users'

// The model property dictates which model class the collection will represent or contain. In this case we’ve stated it as PokemonModel. We’ve yet to build PokemonModel, but based on the incoming JSON from our GET request earlier, we know each of the pokemon has a name and url.

var PokemonModel = Backbone.Model.extend({
    defaults: {
        name: null,
        url: null
    }
});

// Now we have our PokemonModel set up in a similar fashion to how we set up our Stack model in the previous tab. Note that we set up the defaults to contain a name and url.  This url is different from the url our collections are concerned with.

// At this point, we’ve got our Pokemon modeled and a collection to contain the models, but how do we actually get them? Before we press on, we’ll add a few more tools to our PokemonCollection.

// Common Collection Properties and Methods
// In order to get model information, we provide a RESTful URL to our collection to point to an API were our models live. In this case, the first 20 Pokemon live at " http://pokeapi.co/api/v2/pokemon", but we need a way to enact calling this URL. The fetch() method sends a GET request to the URL we provided in the collection.

// Let’s create an instance of a PokemonCollection and fetch some Pokemon objects.

var pokemonList = new PokemonCollection();
pokemonList.fetch();

// If we log the pokemonList to our console we will notice that our pokemonList contains a models array.

child
> _byID: Object
  length: 0
> models: Array[0]
> __proto__: Backbone.Collection
 
// Every Backbone Collection holds onto models via its models array. However, we should have 20 models here to model the first 20 Pokemon. Remember: Collections need arrays.

// We need to build out our PokemonCollection a bit more because we need it to be tied to the array of Pokemon found in the results array of the returned JSON object from the PokeAPI.

// Backbone Collections have the parse method natively, but we can rewrite it. parse gives us the ability to declare a callback function that will help to 1) select an array of data from a JSON object in case it is embedded 2) perform other operations on the data as soon as we receive it. Note: Parsing is only done immediately after a fetch call has been made and models have been returned to the collection.

var PokemonCollection = Backbone.Collection.extend({
    model: PokemonModel,
    url: "http://pokeapi.co/api/v2/pokemon",
    parse: function(pokemon){
        return pokemon.results;
    }
});

// Now any instances of our PokemonCollection will know that their corresponding array of pokemon models can be found in the results array that’s returned by the API.

// Now if we run pokemonList.fetch() again, depending on the time the console log runs and when the API returns its result, we may see differing information.  This is because the fetch is happening asynchronously, so it would be wise for us to account for this.

// .fetch() can be chained to .then() to make sure when the fetch is completed, we carry on and execute additional logic.  Let's be certain and write our console log only when the fetch is successful like below:

pokemonList.fetch()
    .then(function(){
        console.log(pokemonList);
    });

// We should see in our console 20 models in the models array. Awesome! We’ve connected the Models to the Collections and we've covered two-thirds of Backbone’s M-C-V. We might find the visual representation down below helpful.

// As always, let's practice what we we've learned before going any further.

