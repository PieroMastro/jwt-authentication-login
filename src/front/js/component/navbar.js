import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwarslogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					<img style={{ width: "100px" }} src={starWarsLogo}></img>
				</Link>
				<div className="ml-auto d-flex align-content-center justify-content-between">
					{store.token && (
						<div className="dropdown">
							<button
								className="btn btn-dark dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Favorites ({store.favorites.length})
							</button>
							<ul className="dropdown-menu justify-content-between">
								{!store.favorites.length == 0 ? (
									store.favorites.map((favorite, index) => {
										return <li
											className="d-flex flex-nowrap p-1"
											key={index}>
											<span className="dropdown-item">
												<Link
													className="favs-menu"
													style={{ textDecoration: 'none' }}
													to={favorite.url}>
													{favorite.name}
												</Link>
											</span>
											<span>
												<i className="dropdown-btn fa-solid fa-trash pt-2 pe-2"
													onClick={() => {
														actions.delFavorite(index)
													}}>
												</i>
											</span>
										</li>
									}))
									: (<li className="text-center">You have no favorites</li>)
								}
							</ul>
						</div>
					)}
					<div className="ps-2">
						{!store.token ? (
							<div>
								<Link to="/login">
									<button className="btn btn-dark">
										Log In
									</button>
								</Link>
								{/* <Link to="/signup">
									<button className="btn btn-secondary">
										Sign up
									</button>
								</Link> */}
							</div>
						) : (
							<Link to="/login">
								<button
									className="btn btn-danger"
									onClick={() => {
										actions.logout()
									}}>
									Logout
								</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
