import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__content ">
				<div className="footer__content-left">
					<h3> LOGOTIPO</h3>
					<p>{new Date().getFullYear()} &copy; </p>
				</div>
				<div className="footer__content-right">
					<ul className="list-footer">
						<li>Servicio al cliente</li>
						<li>Contacto</li>
						<li>Preguntas frecuentes</li>
						<li>Distribuidores</li>
						<li>Política de privacidad</li>
						<li>Devoluciones</li>
					</ul>
					<ul className="list-footer">
						<li>Acerca de </li>
						<li>La bola 9</li>
						<li>Complementos certificados</li>
						<li>Garantía</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
