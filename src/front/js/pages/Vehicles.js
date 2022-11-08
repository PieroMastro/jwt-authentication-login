import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/starwarslogo.png";

export const Vehicle = () => {

    const [vehicle, setVehicle] = useState()
    const { store, actions } = useContext(Context);
    const { uid } = useParams()

    useEffect(() => {
        setVehicle(store.vehicles.find((vehicle) => {
            return vehicle.uid == uid
        }))
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                        className="img-description col-6 pt-3"
                        style={{ width: "26rem", height: "auto" }}
                        alt={vehicle && vehicle.properties.name}
                    />
                    <div className="description col-6 text-center">
                        <h1 className="display-4 fw-bold">{vehicle && vehicle.properties.name}</h1>
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
                        <p>{vehicle && vehicle.properties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Model</p>
                        <p>{vehicle && vehicle.properties.model}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Cost</p>
                        <p>{vehicle && vehicle.properties.cost_in_credits} cr</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Passengers</p>
                        <p>{vehicle && vehicle.properties.passengers}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Length</p>
                        <p>{vehicle && vehicle.properties.length} mts</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Vehicle Class</p>
                        <p>{vehicle && vehicle.properties.vehicle_class}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
