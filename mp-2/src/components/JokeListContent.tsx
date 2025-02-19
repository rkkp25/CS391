import { useState, useEffect } from "react";
import { JokePreview } from "./JokePreview.tsx";
import { Joke } from "../interfaces/Types.ts";

export default function JokeListContent() {
    const [numJokes, setNumJokes] = useState(5);
    const [jokes, setJokes] = useState<Joke[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://official-joke-api.appspot.com/jokes/random/${numJokes}`);
            const data = await res.json();
            //console.log("data", typeof(data))
            setJokes(data);
            //console.log("jokes1", jokes)
        }
      fetchData().then(()=>console.log("Okay")).catch(e => console.error("this went wrong" + e));
    }, [numJokes]);
    //console.log(jokes)

    return (
        <div>
            <input 
                type="number" 
                placeholder="Number of jokes" 
                value={numJokes}
                onChange={(e) => setNumJokes(Number(e.target.value))} />
            {jokes?
                jokes.map((joke) => 
                    <JokePreview joke={joke} />
                ): <></>
            }
        </div>
    )
}
