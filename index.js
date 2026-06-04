const body = document.querySelector("body");

const attachListener = () => {
    document.querySelector("#my-button").addEventListener('click', () => {
        fetchData("https://jsonplaceholder.typicode.com/todos/18").then(TODOData => {
            document.querySelector("#title").innerText = TODOData.title;
            document.querySelector("#completed").innerText = TODOData.completed;
        });
    }
)};

attachListener();

const randomJokeURL = "https://official-joke-api.appspot.com/random_joke";

const fetchData = async (URL) =>{
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Invalid response from server");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

let punchline;

fetchData(randomJokeURL).then(jokeData => {
    document.querySelector("#setup").innerText = jokeData.setup;
    punchline = jokeData.punchline;
});

const paragraph = document.querySelector("p");

document.querySelector("#step-one").innerText = "Toast some bagel";
document.querySelector("#step-two").innerText = "Spread jam on the bagel";
document.querySelector("#step-three").innerText = "Layer smoked salmon on top of the jam";

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

    steps.map(step => {
        const latestStep = document.createElement("li");
        latestStep.innerText = step.instruction;
        document.querySelector("#recipe-list").appendChild(latestStep);
    });
};

addRecipe(title, steps);

const attachJokeListener = () => {
    document.querySelector("#my-joke-button").addEventListener('click', () => {
        console.log('clicked!');
        document.querySelector("#punchline").innerText = punchline;
    });
};

attachJokeListener();


const tenJokesURL = "https://official-joke-api.appspot.com/jokes/ten"

fetchJokeData(tenJokesURL).then(jokesData => {
    jokesData.forEach((joke) => {
        // setup div
        const jokeSetupDiv = document.createElement("div");
        const jokePunchlineDiv = document.createElement("div");
        // add to div
        jokeSetupDiv.textContent = joke.setup;
        jokePunchlineDiv.textContent = joke.punchline;
        // add to page
        body.appendChild(jokeSetupDiv);
        body.appendChild(jokePunchlineDiv);
        // create break line
        body.appendChild(document.createElement("p"));
    });
});