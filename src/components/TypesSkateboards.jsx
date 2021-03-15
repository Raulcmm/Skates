import React from "react";

import skate_01 from "../assets/skates/skate_01.png";
import skate_02 from "../assets/skates/skate_02.png";
import skate_03 from "../assets/skates/skate_03.png";
import CardSkate from "./CardSkate";

const TypesSkateboards = () => {
	const skateboards = [
		{
			id: 1,
			image: skate_01,
			title: "cruiser",
			description:
				"Si bien la mayoría de las tablas de nuestra línea son capaces de navegar, una tabla designada como crucero suele ser un poco más corta que una tabla corta estándar con una punta más corta, una forma más direccional y ruedas suaves. La mayoría de estas tablas se construyen a partir de moldes regulares de tablas cortas y son capaces de patinar en una variedad de terrenos, incluidos parques, pero también pueden cruzar un paseo marítimo.",
			number: "01",
		},
		{
			id: 2,
			image: skate_02,
			title: "Carving",
			description:
				"Si le gustan las tablas que mantienen bien su línea en los giros y no se deslizan mucho, esté atento a esta designación. Eso no significa que no se deslizarán en absoluto, sino que, por lo general, están configurados con ruedas con bordes que se agarran mejor mientras mantienen la velocidad. Todos nuestros modelos completos con ejes Gullwing Sidewinder II se consideran tablas de Carving, pero este estilo de conducción tampoco es exclusivo de ellos.",
			number: "02",
		},
		{
			id: 3,
			image: skate_03,
			title: "Downhill",
			description:
				"To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
			number: "03",
		},
	];

	return (
		<main className="types-skateboards">
			<div className="types-skateboards__content">
				{skateboards.map((skateboard) => (
					<CardSkate {...skateboard} key={skateboard.id} />
				))}
			</div>
		</main>
	);
};

export default TypesSkateboards;
