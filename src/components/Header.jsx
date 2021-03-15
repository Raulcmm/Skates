import React from "react";
import Nav from "./Nav";

import LOGO_TW from "../assets/logo_tw.png";
import LOGO_IG from "../assets/logo_ig.png";

const Header = () => {
	return (
		<section className="header">
			<Nav />
			<div className="header__content">
				<div className="navbar__list">
					<li>
						<img src={LOGO_IG} alt="" className="ig" />
					</li>
					<li>
						<img src={LOGO_TW} alt="" className="tw" />
					</li>
				</div>
				<h1>Something here...</h1>
			</div>
		</section>
	);
};

export default Header;
