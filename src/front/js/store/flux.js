
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			isMyTokenExpired: true,
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			logout: ()=>{
				localStorage.removeItem('jwt-token')
			},

			login: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/login",{
						method: "POST",
						  headers: { "Content-Type": "application/json" },
						  body: JSON.stringify({ email: email, password: password }) 
					})
					if(!resp.ok) throw Error("There was a problem in the login request")
	
					if(resp.status === 401){
						 throw("Invalid credentials")
						 
					}
					const data = await resp.json()
					localStorage.setItem("jwt-token", data.authorization);
	
					return resp
				} catch (error) {
					
				}
			},

			signup: async(new_user)=>{
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
						method: "POST",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify(new_user)
					})
					if(!resp.ok) throw Error('There was a problem with your registration')
					const data = await resp.json()
					return data
				} catch (error) {
					console.error(error)
				}
				
			},

			validate_token: async(token)=>{
				const resp = await fetch(process.env.BACKEND_URL + 'api/validate_token', {
					method: "GET",
					headers: {"Content-Type":"application/json", "Authorization": "Bearer " + token}
				})
				const data = await resp.json()
				return data.isValid
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
