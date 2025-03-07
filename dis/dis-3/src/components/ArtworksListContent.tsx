import { useState, useEffect } from "react";
import { Artwork } from "../interfaces/Types.ts"
import {ArtworkPreview} from "./ArtworkPreview.tsx";

export default function ArtworksListContent() {
    const [numArtworks, setNumArtworks] = useState(8);
    const [artworks, setArtworks]=useState<Artwork[]>([]);

    useEffect(()=>{
        async function fetchData() {
            const res=await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`);
            const {data}=await res.json();
            setArtworks(data);
        }
        fetchData().then(()=>console.log("Okay")).catch((e)=>console.log("this went wrong: "+ e));
    }, [numArtworks]);

    return (
        <div>
            <input 
                type="number"
                placeholder="Number of artworks"
                value={numArtworks}
                onChange={(e) => setNumArtworks(Number(e.target.value))} 
            />
            {
                artworks.map((artwork) => 
                    <ArtworkPreview artwork={artwork} />
                )
            }
                
        </div>

    )
}
