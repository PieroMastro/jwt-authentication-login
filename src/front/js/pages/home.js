import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.token ? (
				<div className="container">
					<h2 className="text-danger text-start my-4 display-4">Characters</h2>
					<div className=" carousel mb-5">
						<div className="itemcard gap-5">
							{
								store.characters.map((character, index) => {
									return <ItemCard
										item={character}
										key={character._id}
										endpoint="characters"
										index={index} />
								})
							}
						</div>
					</div>
					<h2 className="text-danger text-start my-4 display-4">Planets</h2>
					<div className=" carousel mb-5">
						<div className="itemcard gap-5">
							{
								store.planets.map((planet) => {
									return <ItemCard
										item={planet}
										key={planet._id}
										endpoint="planets" />
								})
							}
						</div>
					</div>
					<h2 className="text-danger text-start my-4 display-4">Vehicles</h2>
					<div className=" carousel mb-5">
						<div className="itemcard gap-5">
							{
								store.vehicles.map((vehicle) => {
									return <ItemCard
										item={vehicle}
										key={vehicle._id}
										endpoint="vehicles" />
								})
							}
						</div>
					</div>
				</div>
			) : (
				<div className="card text-bg-dark">
					<img
						src="https://i.imgur.com/rN3KVr7.jpeg"
						className="card-img"
						alt="..."
					/>
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<div className="d-flex">
							<Link to="/signup">
								<button className="btn btn-dark btn-lg">Please Signup</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
