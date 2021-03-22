var myState = {
    name: "Washington",
    capital: "Olympia",
    population: 7062000,
    nickname: "The Evergreen State"
};
var businesses = [
    {
    name: "Coding Dojo",
    city:  "Bellevue"
    },
    {
    name: "Facebook",
    city: "Mountain View"
    },
    {
    name: "Microsoft",
    city: "Redmond"
    },
    {
    name: "Expedia",
    city: "Bellevue"
    }
];


//1. Strip the myState object into two arrays, one filled with its keys, the other with its values.

var keys = _.keys(myState);
var values = _.values(myState);
console.log(keys);

//2. Using these two new arrays, put them back together as an object to resemble the original myState object.

var newObj = _.object(keys, values);
console.log (newObj);

//3. Alert each of the key - value pairs of the myState object.
_.each(myState, function(value, key){
    alert(key + ':' + value);
});

//4. Return just the names of the businesses from the businesses array.

var businessNames = _.pluck(businesses, 'name');
console.log(businessNames);

//5. Return the object containing “Microsoft”.
var micro = _.findWhere (businesses, {name:"Microsoft"});
console.log (micro);

//6. Return all the businesses that are located in Bellevue in a new array.
var bellvueBusinesses = _.filter(businesses, function(business){
    return business.city =="Bellvue";
});

//7. Sort the businesses based on the city in ascending order and return the array.

var sortedBusinessees = _.sortBy(businesses, 'city');
console.log(sortedBusinesses);

//8. Have all the business names be “Coding Dojo” without altering the original array. [hint: use _.map()]

var allDojoBusinesses = _.map(businesses, function(business){
    business.name = "Coding Dojo";
    return business;
});
console.log(allDojoBusinesses);