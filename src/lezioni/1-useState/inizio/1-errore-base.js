import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
const ErroreBase = () => {
	let title = "Hello Wolrd";

	const changeTitle = () => {
		title = "nuovo titolo";
		console.log(title);
	};

	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button
				type="button"
				className="btn btn-info my-3"
				onClick={changeTitle}
			>
				Change Me
			</button>
		</React.Fragment>
	);
};

export default ErroreBase;
