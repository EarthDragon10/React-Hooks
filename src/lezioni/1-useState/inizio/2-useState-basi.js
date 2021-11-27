import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
	const { log } = console;
	log(useState("a"));

	return (
		<>
			<h2> Basi useState</h2>
		</>
	);
};

export default UsoBase;
