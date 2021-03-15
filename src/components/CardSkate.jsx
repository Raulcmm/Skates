import React from "react";

const CardSkate = ({ image, title, description, number }) => {
	return (
		<article className="card">
			<div className="card__left">
				<h3>
					<span>{number}</span>
					{title}
				</h3>
				<p>{description}</p>

				<a href="#!">Leer más &#129046;</a>
			</div>
			<div className="card__right">
				<img src={image} alt="" />
			</div>
		</article>
	);
};

export default CardSkate;
