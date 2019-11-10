// Zadanie 0a

city = {
    capital: "Washington DC",
    population: "7000000",
    president: "Donald Trump",
    primeMinisters: ["Mike Pens", "Lol"]
}

console.log(city.capital + "\n" + city.population + "\n" + city.president + "\n" + city.primeMinisters);

// Zadanie 0b

timeMachine = {
    shape: "circle",
    model: "fine",
    run: function(date, place) {
        return "Time travel to: " + date + "\nDestination: " + place
    }
}

console.log(timeMachine.shape + "\n" + timeMachine.model + "\n" + timeMachine.run("1970", "Palo Alto, CA"))


// Zadanie 1

book = {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    numberOfPages: 350
}

console.log(`Title: ${book.title}\nAuthor: ${book.author}\nNumber of pages: ${book.numberOfPages}`)

// Zadanie 2

person = {
    name: "Morgan",
    age: 60,
    sayHello: function(){
        return "hello"
    }
}

console.log(`Name: ${person.name}\nAge: ${person.age}\n${person.sayHello()}`)

// Zadanie 3

recipe = {
    title: "Pancakes",
    servings: 4,
    ingredients: []
}

recipe.ingredients = [
    "Sugar",
    "Butter",
    "Flour"
]

console.log(`Title: ${recipe.title}\nServings: ${recipe.servings}\nIngredients: ${recipe.ingredients}`)


// Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(`Spoon exists?: ${spoon.isExist}`);