import { useState, useEffect } from "react";
import { JokeRevealButton } from "./JokeRevealButton";

const tenJokesURL = "https://official-joke-api.appspot.com/jokes/ten"

function Joke(props) {
    const [show, setShow] = useState(false);
    console.log("show", show);
    console.log("punchline:", props.punchline);
    return (
        <div>
        <p>{props.setup}</p>
        {show && <p>{props.punchline}</p>}
        <JokeRevealButton setShow={setShow} />
        </div>
    );
}

export default function JokeList() {
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(tenJokesURL)
            .then((res) => {
                console.log("res:", res);
                return res.json();
            })
            .then((data) => {
                console.log("data:", data);
                setJokes(data);
            })
    }, []);
    return (
        <div>
        {jokes.map((joke) => (
            <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
        ))}
        </div> 
);
}