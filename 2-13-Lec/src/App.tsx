import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const[data, setData] =useState([])
    useEffect(() => {
        async function fetchData() {
            const rawdata = await fetch("https://rickandmortyapi.com/api/character");
            const {results} = await rawdata.json()
            setData(results)
        }
        fetchData(),then(()=> console.log("yayyy")).catch((e)=>console.log("This happened:" + a));

    },[])


    return (
        <>
            {
                data.map((character)=>
                    <BluePrint data={character}}
            }
        </>
    )
}

export default App
