import React, { Component } from "react";

export const Footer = () => (
	<footer class="text-center text-lg-start bg-white text-muted">
		<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
			<div class="me-5 d-none d-lg-block">
				<span>Get connected with us on social networks:</span>
			</div>
			<div>
				<a href="" class="me-4 link-secondary">
					<i class="fa-brands fa-twitter"></i>
				</a>
				<a href="" class="me-4 link-secondary">
					<i class="fa-brands fa-instagram"></i>
				</a>
				<a href="" class="me-4 link-secondary">
					<i class="fa-brands fa-linkedin"></i>
				</a>
				<a href="" class="me-4 link-secondary">
					<i class="fa-brands fa-github"></i>
				</a>
			</div>
		</section>

		<section class="">
			<div class="container text-center text-md-start mt-5">
				<div class="row mt-3">
					<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
						<h6 class="text-uppercase fw-bold mb-4">
							Latam Tech Jobs
						</h6>
						<p>
							Latam tech job is...
						</p>
					</div>
					<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
						<h6 class="text-uppercase fw-bold mb-4">
							Products
						</h6>
						<p>
							<a href="#!" class="text-reset">Job scouting</a>
						</p>
						<p>
							<a href="#!" class="text-reset">Job search</a>
						</p>
						<p>
							<a href="#!" class="text-reset"></a>
						</p>
						<p>
							<a href="#!" class="text-reset">Laravel</a>
						</p>
					</div>

					<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
						<h6 class="text-uppercase fw-bold mb-4">
							Useful links
						</h6>
						<p>
							<a href="#!" class="text-reset">Pricing</a>
						</p>
						<p>
							<a href="#!" class="text-reset">Settings</a>
						</p>
						<p>
							<a href="#!" class="text-reset">Orders</a>
						</p>
						<p>
							<a href="#!" class="text-reset">Help</a>
						</p>
					</div>

					<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
						<h6 class="text-uppercase fw-bold mb-4">Contact</h6>
						<p> Latam</p>
						<p>
							<i class="fa-solid fa-envelope"></i>
							info@example.com
						</p>
						<p><i class="fa-solid fa-phone"></i> +1111</p>
					</div>
				</div>
			</div>
		</section>

		<div class="text-center p-4">
			© 2023 Copyright:
			<a class="text-reset fw-bold" href="https://google.com/"> latamtechjobs.com</a>
		</div>
	</footer>
);
