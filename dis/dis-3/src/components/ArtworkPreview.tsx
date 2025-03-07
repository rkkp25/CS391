import { styled } from "styled-components";
import { Link } from "react-router";

import { Artwork } from "../interfaces/Types.ts";

const ArtworkPreviewDiv=styled.div`
    width: 80vw;
    margin: auto;
    height: 20vh;
    background-color: #7cebbb;
`;

export function ArtworkPreview({artwork}:{artwork:Artwork}) {
    return (
        <Link to={`/artwork/${artwork.id}`}>
            <ArtworkPreviewDiv>
                <h3>{artwork.title}</h3>
                <p>{artwork.place_of_origin}</p>
                <p>{artwork.medium_display}</p>
            </ArtworkPreviewDiv>
        </Link>
    )

}
