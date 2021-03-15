import React from "react";

const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__content">
				<p className="nav__logo">LOGOTIPO</p>
				<ul className="navbar__list">
					<li className="nav__navbar-item">Tablas</li>
					<li className="nav__navbar-item">Llantas</li>
					<li className="nav__navbar-item">Componentes</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
