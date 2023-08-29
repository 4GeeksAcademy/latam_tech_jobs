import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Filter } from "../component/filter";
import { Jobcard } from "../component/jobcard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="container">
		<div className="row">
			<div className="col-xs-8 col-xs-offset-2">
				<div className="input-group">										
					<input type="text" className="form-control round" name="x" id="search" placeholder="Search jobs by title or keywords"></input>
					<span className="input-group-btn">
						<button className="btn btn-default bg-warning form-control p-2" placeholder="Search Jobs" type="button">
							<p className="text-black" style={{marginTop: 5}}>Search Jobs</p>
						</button>
					</span>
				</div>
			</div>
		</div>
		<br/>
		<br/>
		<div style={{ display: "flex" }}>
			<Filter />
			<Jobcard />
		</div>
	</div>
	);
};

