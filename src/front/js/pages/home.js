import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Filter } from "../component/filter";
import { Jobcard } from "../component/jobcard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<br />
		<div className="container">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<div className="input-group">
						<input
							type="text"
							className="form-control round"
							name="x"
							id="search"
							placeholder="Search jobs by title or keywords"
						/>
						<div className="input-group-append ml-2">
							<button className="btn btn-warning round" type="button">
								Search Jobs
							</button>
						</div>
					</div>
				</div>
			</div>

			<br />
			<br />
			<div style={{ display: "flex" }}>
				<Filter />
				<Jobcard />
			</div>
		</div>
		</>
	);
};

