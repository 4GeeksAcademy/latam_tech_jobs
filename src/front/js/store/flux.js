
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			isMyTokenExpired: true,
			jobs: [],
			single_job: {},
			user: null,
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
				try {
					localStorage.removeItem('jwt-token')
					setStore({
						user: null
					})
				} catch (error) {
					console.log(error)
				}
			},

			login: async (email, password) => {
				const store = getStore()
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
					setStore({
						user: data.user
					})
					console.log(store.user)
					return data
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

			get_jobs: async(params)=>{
				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + '/api/jobs' + params, {
						method: "GET",
					})
					const data = await resp.json()
					setStore({
						jobs: data
					})
					console.log(store.jobs)
					return data

				} catch (error) {
					console.error(error)
				}

			},
			google_sigin: async(token) => {
				const store = getStore()
				try {
					const response = await fetch("/api/google_login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ token: token }),
					});
					if(response.ok){
						const data = await response.json()
						localStorage.setItem("jwt-token", data.authorization);
						setStore({
							user: data.user
						})
						console.log(store.user)
						return data
					}
				} catch (error) {
					console.log(error)
				}
			},

			get_single_job: async(id)=>{
				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + '/api/jobs?id=' + id,{
						method: "GET",
					})
					const data = await resp.json()
					console.log(data)
					setStore({
						single_job: data
					})
					console.log(store.single_job)
				} catch (error) {
					console.error(error)
				}
			},

			submitJob: async (job)=>{
				const token = localStorage.getItem('jwt-token') 
			   try {
				   const resp = await fetch(process.env.BACKEND_URL + '/api/submitjob',{
					   method: "POST",
					   headers: {
						   "Content-Type": "application/json",
						   "Authorization": "Bearer " + token
					   },
					   body: JSON.stringify(job)
				   }) 
				   const data = resp.json()
				   return data
			   } catch (error) {
					console.error("Error in submitJob:", error);
					throw error;
			   }
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
