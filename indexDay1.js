alert("Can you see this?")

const paragraph = document.querySelector("p");

const recipeTitleEl = document.createElement("title");
recipeTitleEl.innerText = ("Salmon bagel with jam");

const newParagraph = document.createElement("p");

const recipeListEl = document.createElement("ol");

const stepOneEl = document.createElement("li");
stepOneEl.innerText = "Toast some bagel";
recipeListEl.appendChild(stepOneEl);

const stepTwoEl = document.createElement("li");
stepTwoEl.innerText = "Spread jam on the bagel";
recipeListEl.appendChild(stepTwoEl);

const stepThreeEl = document.createElement("li");
stepThreeEl.innerText = "Layer smoked salmon on top of the jam";
recipeListEl.appendChild(stepThreeEl);

const body = document.querySelector("body"); 
body.appendChild(newParagraph);
newParagraph.appendChild(recipeTitleEl);
newParagraph.appendChild(recipeListEl);
// to hook onto body and appear on page

let title = "Tea"

let steps = [
    {instruction: "Boil kettle"},
    {instruction: "Add a teabag into mug"},
    {instruction: "Pour hot water into mug"},
    {instruction: "Add preferred amount of milk and sugar"},
    {instruction: "Stir well"}
];

const addRecipe = (title, steps) => {
    const paragraph = document.querySelector("p");
    const latestParagrah = document.createElement("p");
    const latestHeading = document.createElement("h1");
    latestHeading.innerText = title;
    latestParagrah.appendChild(latestHeading);
    
    const latestRecipeListEl = document.createElement("ol");

    steps.map(step => {
        const latestStep = document.createElement("li");
        latestStep.innerText = step.instruction;
        latestRecipeListEl.appendChild(latestStep);
    });

    latestParagrah.appendChild(latestRecipeListEl);
    const body = document.querySelector("body");
    body.appendChild(latestParagrah);
};

addRecipe(title, steps);

const URL = "https://official-joke-api.appspot.com/random_joke";

async function fetchJoke() {
    const response = await fetch(URL);
    const joke = await(response.json());
    console.log(joke);
}; // don't forget ;

console.log(fetchJoke());