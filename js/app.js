/**
 * Objects
 * 
 * In JS, EVERYTHING is an object
 * 
 * Javascript is an object oriented programming language 
 * 
 * With objects we can not only store data, but we can classify it
 * 
 * Syntax:  
 * 
 *      let objName = {
 *          property: value,
 *          key: value
 *      }
 * 
 * Objects are not iterable
 */


// console.log(console)  //gives a list of propteries of the console object.  Console in an object

//build a me object

let me = {
    myName: {
        first: 'William',
        last: 'Bridges',
        nicknames: ['Will', 'Willy'],
    },
    age: 31,
    occupation: 'Control Panel Technician',
    'pets': ['Zoe', 'Presley'],
    favs: {
        food: 'red beans and rice',
        videoGames: {
            fighting: 'Marvel vs Capcom 2',
            adventure: 'Metal Gear Solid 3',
            rpg: 'Mass Effect 1',
            masterpieces: 'Metal Gear Solid 2: Sons of Liberty',
        },
        musician: 'Elliott Smith',
    },
    hobbies: ['Coding', 'Playing guitar' , 'reading historical linguistics stuff', 'history', 'programming breadboards', 'cooking', 'music in all instances and experiences'],
    isAwesome: false,
    tattoos: null,
    greeting: function() {
        var message = `My name is ${this.myName.first} ${this.myName.last}, but you can call me ${this.myName.nicknames[0]} and I am ${this.age} years old today!`
        //this keyword is a 'pronoun' that references the object we are calling
        console.log(message);
        return message;
        
    },
    'movies I like': ['Mullholland Drive', 'Stalker', 'Empire Strikes Back', 'Blade Runner', 'Blue Velvet']
}

console.log(me);

//Access Data from an Object

// Dot notation => obj.key

console.log(me.age);

console.log(me.pets);

//Bracket Notation => obj[key]

console.log(me['movies I like']);

const movies = 'movies I like';

console.log(me[movies]); //can't access with dot notation

console.log(me.movies); //undefined 

console.log(me.hobbies);

//access music

console.log(me.hobbies[1]);

// console.log(me.greeting());

me.greeting();  //method: a function attached to an object

const greeting =()=> {
    console.log('I am a function, not a method')
}

greeting();

/**
 *      Updating objects
 * 
 *      obj.key = new value
 */

me.favs.food = 'cochon de lait';
console.log(me);

me.shoeSize = 9.5;

/**
 * Object.freeze() & Object.seal()
 * 
 * Object.seal() seals an object. Prevents extensions and makes existing properties non-configurable
 * 
 * Obj.freeze() freezes an object. Prevents extensions and makes existing properties non-configurable AND non-writable 
 */

Object.seal(me);

me.hand = 'right'  //can't do this

console.log(me.hand);

me.age = 30;
console.log(me);  //this updates the value

Object.freeze(me.favs);

me.favs.food = 'pizza';  //this doesn't change this because me.favs is food

console.log(me.favs.food);

/**
 * Build an object of a favorite movie, tv, video game character. Include a method that returns a message pertaining to the character
 */

let movie = {
    title: 'Mullholland Drive',
    director: 'David Lynch',
    actors: ['Naomi Watts', 'Laura Harring'],
    year: '2001',
    genre: 'surrealist',
    plot: 'a naive young woman, who moves to Hollywood to pursue her dreams of being an actress.  But in Hollywood, nothing is as it appears',
    greet: function() {
        var message = `My favorite movie is ${this.title}, directed by ${this.director}.  It was made in ${this.year}, starrring ${this.actors[0]} and ${this.actors[1]}  It is a ${this.genre} mystery movie about ${this.plot}.`
        return message;
    }
};

console.log(movie.greet());

/**
 * Classes => Classes are objects whose properties can be passed on to other containers.
 * 
 * Syntax: 
 * 
 *      class ClassName {
 *          constructor () {
 *              key= value
 *              key= value
 *          }
 *          method(){
 *              //do stuff
 *      }
 *          method(){
 *              //do stuff
*       }
 *      }
 */

//Build Animal class

class Animal {
    constructor() {
        //  contains properties that are accessable on the load (?)
        this.hair = false,
        this.name,
        this.canFly,
        this.size,
        this.diet,
        this.legs,
        this.eyes,
        this.sound
    }

    makeSound() {
        console.log(`The ${this.name} sounds like this: ${this.sound}.`)
    }
}


//create an instance of the Animal object and pass it into a container 
const horse = new Animal();
const dog = new Animal();
const orangutan = new Animal();
horse.sound = "niegh";
dog.sound = 'woof';
orangutan.sound = 'HOOOOOO';

horse.name = "horse";
dog.name = 'dog';
orangutan.name = 'orangutan';

console.log(orangutan);
orangutan.makeSound();
dog.makeSound();

/**Create a Movie class. In the constructor add title, genre, duration, rating, cast, and any other properties you would like to add. Then write, two methods that display data from the Movie. Create three instances of the Movie Class */

class Movie {
    constructor(){
        this.title,
        this.genre,
        this.rating,
        this.cast,
        this.director,
        this.duration,
        this.year
    }

        movieInfo() {
            console.log(`The movie is ${this.title}, directed by ${this.director}.  It is a ${this.genre} film that's rated ${this.rating}.  The cast includes: ${this.cast[0]} and ${this.cast[1]}.`);
        }
        castAndYear() {
            console.log(`This movie is ${this.duration} minutes long and was released in ${this.year}  It's great, you should see it!`);
        }
}


const mullhollandDrive = new Movie;
const bladeRunner = new Movie;
const empireStrikesBack = new Movie;

mullhollandDrive.title = 'Mulholland Drive';
bladeRunner.title = 'Blade Runner';
empireStrikesBack.title = 'Empire Strikes Back';

mullhollandDrive.director = 'David Lynch';
bladeRunner.director = 'Ridley Scott';
empireStrikesBack.director = 'Irvin Kershner';

mullhollandDrive.genre = 'surrealist';
bladeRunner.genre = 'cyberpunk';
empireStrikesBack.genre = 'sci-fi';

mullhollandDrive.rating = 'R';
bladeRunner.rating = 'R';
empireStrikesBack.rating = 'PG';

mullhollandDrive.cast = ['Naomi Watts', 'Laura Harring'];
bladeRunner.cast = ['Harrison Ford', 'Sean Young'];
empireStrikesBack.cast = ['Harrison Ford', 'Carrie Fisher'];

mullhollandDrive.duration = 147;
bladeRunner.duration = 110;
empireStrikesBack.duration = 124;

mullhollandDrive.year = 2001;
bladeRunner.year = 1982;
empireStrikesBack.year = 1980;

console.log(mullhollandDrive);

mullhollandDrive.movieInfo(), mullhollandDrive.castAndYear();
empireStrikesBack.movieInfo(), empireStrikesBack.castAndYear();
bladeRunner.movieInfo(), bladeRunner.castAndYear();












