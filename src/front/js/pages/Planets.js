import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import tatooine from "../../img/tatooine.png";

export const Planet = () => {

    const [planet, setPlanet] = useState()
    const { store, actions } = useContext(Context);
    const { uid } = useParams()

    useEffect(() => {
        setPlanet(store.planets.find((planet) => {
            return planet.uid == uid
        }))
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    <img
                        src={uid == 1 ? tatooine : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                        className="img-description col-6 pt-3"
                        style={{ width: "26rem", height: "auto" }}
                        alt={planet && planet.properties.name}
                    />
                    <div className="description col-6 text-center">
                        <h1 className="display-4 fw-bold">{planet && planet.properties.name}</h1>
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
                        <p>{planet && planet.properties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Population</p>
                        <p>{planet && planet.properties.population}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Terrain</p>
                        <p>{planet && planet.properties.terrain}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Diameter</p>
                        <p>{planet && planet.properties.diameter} km</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Orbital Period</p>
                        <p>{planet && planet.properties.orbital_period} days</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Climate</p>
                        <p>{planet && planet.properties.climate}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
