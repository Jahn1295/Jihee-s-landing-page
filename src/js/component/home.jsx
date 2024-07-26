import React from "react";
import { Card } from "./card"
import { Nav } from "./nav"
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Nav
				homePage="Home"
				myAccount="My Account"
				settings="Settings"
			/>
			<div>
				<div className="jumbotron">
					<h1>A Warm Welcome!</h1>
					<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
					<button type="button" class="btn btn-primary">Call to Action!</button>
				</div>
			</div>
			<div className="container">
				<Card
					imageUrl="..."
					imageAltText=""
					cardTitle="Card Title"
					cardBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
					callToActionText="Find Out More"
					callToActionUrl="..."
				/>
				<Card
					imageUrl="..."
					imageAltText=""
					cardTitle="Card Title"
					cardBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
					callToActionText="Find Out More"
					callToActionUrl="..."
				/>
				<Card
					imageUrl="..."
					imageAltText=""
					cardTitle="Card Title"
					cardBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
					callToActionText="Find Out More"
					callToActionUrl="..."
				/>
				<Card
					imageUrl="..."
					imageAltText=""
					cardTitle="Card Title"
					cardBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
					callToActionText="Find Out More"
					callToActionUrl="..."
				/>
			</div>
			<div className="footer">
				<h3>Copyright© Jihee's Website 2024</h3>
			</div>
		</div>


	)
};

export default Home;
