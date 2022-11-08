import React, { useContext } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import tatooine from "../../img/tatooine.png";

export const ItemCard = ({ item, endpoint }) => {

    const { store, actions } = useContext(Context)

    return (
        <React.Fragment>
            <div className="card mb-4" style={{ minWidth: "18rem" }}>
                {/* The src use endpoint prop to set the correct URL for people, planets or vehicles */}
                <img
                    src={
                        endpoint == 'planets' && item.uid == 1
                            ? tatooine
                            : `https://starwars-visualguide.com/assets/img/${endpoint}/${item.uid}.jpg`}
                    className="card-img-top"
                    alt={item.properties.name} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h3 className="card-title mb-3 fw-bolder">{item.properties.name}</h3>
                    {/* This will get Characters properties */}
                    {item.properties.gender &&
                        <p className="card-text">
                            <strong>Gender: </strong>
                            {item.properties.gender}
                        </p>}
                    {item.properties.hair_color &&
                        <p className="card-text">
                            <strong>Hair Color: </strong>
                            {item.properties.hair_color}
                        </p>}
                    {item.properties.eye_color &&
                        <p className="card-text">
                            <strong>Eye Color: </strong>
                            {item.properties.eye_color}
                        </p>}
                    {/* This will get Planets properties  */}
                    {item.properties.population &&
                        <p className="card-text">
                            <strong>Population: </strong>
                            {item.properties.population}
                        </p>}
                    {item.properties.terrain &&
                        <p className="card-text">
                            <strong>Terrain: </strong>
                            {item.properties.terrain}
                        </p>}
                    {item.properties.diameter &&
                        <p className="card-text">
                            <strong>Diameter: </strong>
                            {item.properties.diameter} km
                        </p>}
                    {/* This will get Vehicles properties */}
                    {item.properties.model &&
                        <p className="card-text">
                            <strong>Model: </strong>
                            {item.properties.model}
                        </p>}
                    {item.properties.vehicle_class &&
                        <p className="card-text">
                            <strong>Class: </strong>
                            {item.properties.vehicle_class}
                        </p>}
                    {item.properties.length &&
                        <p className="card-text">
                            <strong>Length: </strong>
                            {item.properties.length} mts
                        </p>}
                    <div className="buttons-card d-flex justify-content-between">
                        <Link
                            to={`/${endpoint}/${item.uid}`}
                            className="btn btn-outline-primary">
                            Learn more!
                        </Link>
                        <button
                            onClick={(e) => {
                                if (store.favorites.find((favorite) => {
                                    return favorite.name == item.properties.name
                                })) {
                                    let position = store.favorites.indexOf(store.favorites.find((favorite) => {
                                        return favorite.name == item.properties.name
                                    }))
                                    actions.delFavorite(position)
                                } else {
                                    let url = `/${endpoint}/${item.uid}`
                                    actions.addFavorite(item.properties.name, url)
                                }
                            }}
                            className="btn btn-outline-warning">
                            {store.favorites.find((favorite, index) => {
                                return favorite.name == item.properties.name
                            }) ? <i className="fa-solid fa-heart text-warning"></i>
                                : <i className="fa-regular fa-heart text-warning"></i>}
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

ItemCard.propTypes = {
    item: PropTypes.object,
    endpoint: PropTypes.string
}