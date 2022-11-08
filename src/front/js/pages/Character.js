import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/starwarslogo.png";

export const Character = () => {

    const [character, setCharacter] = useState()
    const { store, actions } = useContext(Context);
    const { uid } = useParams()

    useEffect(() => {
        setCharacter(store.characters.find((character) => {
            return character.uid == uid
        }))
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                        className="img-description col-6 pt-3"
                        style={{ width: "26rem", height: "auto" }}
                        alt={character && character.properties.name}
                    />
                    <div className="description col-6 text-center">
                        <h1 className="display-4 fw-bold">{character && character.properties.name}</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin semper diam et augue faucibus, eu elementum leo
                            euismod. Aenean id ipsum velit. Integer quis hendrerit
                            purus. Aliquam sagittis diam et lorem posuere, sit amet
                            ultricies velit efficitur. Nunc molestie elit risus, ut
                            commodo ligula facilisis et. Suspendisse viverra lobortis
                            ipsum.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center text-danger border-top border-danger mt-3 pt-2 text-center">
                    <div className="col-2">
                        <p className="fw-bolder">Name</p>
                        <p>{character && character.properties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Birth Year</p>
                        <p>{character && character.properties.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Gender</p>
                        <p>{character && character.properties.gender}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Height</p>
                        <p>{character && character.properties.height} cm</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Skin Color</p>
                        <p>{character && character.properties.skin_color}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Eye Color</p>
                        <p>{character && character.properties.eye_color}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

