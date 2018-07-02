let quadrillage = 30;
let joueur = { x: 0, y: 0 };
let fin = { x: 0, y: 0 };





function grille(taille) {

	let magrille = document.getElementById("grille")

	magrille.setAttribute("height", quadrillage * taille)
	magrille.setAttribute("width", quadrillage * taille)
	if (magrille.getContext) {
		var ctx = magrille.getContext('2d');
		for (var i = 0; i <= taille; i++) {
			var start = i * quadrillage;
			ctx.beginPath();
			ctx.moveTo(start, 0);
			ctx.lineTo(start, quadrillage * taille);
			ctx.stroke();

		}
		for (var i = 0; i <= taille; i++) {
			var start = i * quadrillage;
			ctx.beginPath();
			ctx.moveTo(0, start);
			ctx.lineTo(quadrillage * taille, start);
			ctx.stroke();

		}
	}
	document.getElementById("intro").style.visibility = "hidden";
	let randX = Math.floor(Math.random() * taille);
	let randY = Math.floor(Math.random() * taille);
	joueur.x = randX;
	joueur.y = randY;
	placeElements(taille);
}

function placeElements(taille) {
	let magrille = document.getElementById("grille");
	var ctx = magrille.getContext('2d');
	ctx.beginPath();
	let monx = (joueur.x * quadrillage) - (quadrillage / 2);
	let mony = (joueur.y * quadrillage) - (quadrillage / 2);
	let radius = quadrillage * 0.45;
	ctx.arc(monx, mony, radius, 0, 2 * Math.PI);
	ctx.fill()
	ctx.stroke();
}

