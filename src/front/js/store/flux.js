const getState = ({ getStore, getActions, setStore }) => {

	return {

		store: {
			baseUrl: "https://www.swapi.tech/api",
			apiUrl: `${process.env.BACKEND_URL}`,
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			message: null,
			token: null,
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

			login: async (email, password) => {
				const store = getStore()
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password,
					})
				};

				try {
					const response = await fetch(`${store.apiUrl}/api/token`, options);
					if (response.status !== 200) {
						let showError = await response.json();
						alert(showError.msg);
						return false;
					};

					const data = await response.json();
					console.log("This came from the backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				}

				catch (error) {
					console.log("There was an error trying to login in", error);
				}
			},

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
					}
					catch (error) {
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
		}
	};
};

export default getState;
