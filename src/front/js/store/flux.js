const getState = ({ getStore, getActions, setStore }) => {

	return {

		store: {
			baseUrl: "https://www.swapi.tech/api",
			characters: [],
			// JSON.parse(localStorage.getItem("characters")) ||
			planets: [],
			vehicles: [],
			favorites: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			getCharacters: () => {
				const store = getStore()

				for (let index = 1; index <= 10; index++) {
					const baseUrlChar = `${store.baseUrl}/people/${index}`
					console.log(baseUrlChar);
					fetch(baseUrlChar)
						.then((response) => {
							if (response.ok) {
								return response.json()
							}
							throw new Error("Character fetch failed")
						})
						.then((body) => {
							setStore({ characters: [...store.characters, body.result] })
							// // for some reason couldn't save to localstorage
							// let elementsToSave = [...body.results]
							// // console.log(elementsToSave);
							// localStorage.setItem("characters", JSON.stringify(body.results))
						})
						.catch((error) => { console.log(error); })
				}

			},

			getPlanets: async () => {
				const store = getStore()

				for (let index = 1; index <= 10; index++) {
					try {
						let response = await fetch(`${store.baseUrl}/planets/${index}`)
						if (response.ok) {
							let body = await response.json()
							setStore({ planets: [...store.planets, body.result] })
						} else if (response.status === 500) {
							console.log(response.status);
						}
					} catch (error) {
						console.log(error);
					}
				}
			},

			getVehicles: async () => {
				const store = getStore()

				for (let index = 0; index < 10; index++) {
					const vehicleId = [4, 7, 6, 8, 14, 18, 16, 19, 20, 24]
					const vehicleIdUrl = `https://www.swapi.tech/api/vehicles/${vehicleId[index]}`
					try {
						let response = await fetch(vehicleIdUrl)
						if (response.ok) {
							let body = await response.json()
							setStore({ vehicles: [...store.vehicles, body.result] })
						} else if (response.status === 500) {
							console.log(response.status);
						}
					} catch (error) {
						console.log(error);
					}
				}
			},

			addFavorite: (name, url) => {
				const store = getStore()

				const favs = [...store.favorites, { name: name, url: url }]
				setStore({ favorites: favs })
			},

			delFavorite: (position) => {
				const store = getStore()

				const favs = store.favorites.filter((favorite, index) => index !== position)
				setStore({ favorites: favs })
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
