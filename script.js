


let quadrillage
let joueur
let fin
let magrille
let ctx
function Avance(){
	let algo = document.getElementById("mouvement").value;
	
	algo = algo.split(",");
	
}
function init() {
	//taille des cases
	quadrillage = 30;
	//on initialise le joueur
	joueur = { x: 0, y: 0 };
	//on initialise la case de sortie
	fin = { x: 1, y: 1 };
	magrille = document.getElementById("grille")

}

function grille(taille) {
	//on dessine la grille
	magrille.setAttribute("height", quadrillage * taille)
	magrille.setAttribute("width", quadrillage * taille)
	if (magrille.getContext) {
		ctx = magrille.getContext('2d');
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
	//on cache l'intro
	document.getElementById("intro").style.visibility = "hidden";
	//On place le joueur sur une position aléatoide de la grille
	let randX = Math.floor(Math.random() * taille);
	let randY = Math.floor(Math.random() * taille);
	joueur.x = randX;
	joueur.y = randY;
	let randX2;
	let randY2;
	do {

		//on s'assure que la fin n'est pas SUR le joeur au début.
		randX2 = Math.floor(Math.random() * taille);
		randY2 = Math.floor(Math.random() * taille);
		console.log(randX2);
		console.log(randY2)
	} while (randX == randX2 || randY == randY2)
	fin.x = randX2;
	fin.y = randY2;
	placeElements();
}

function placeElements() {
	let monx = (joueur.x * quadrillage) - (quadrillage / 2);
	let mony = (joueur.y * quadrillage) - (quadrillage / 2);
	let radius1 = quadrillage * 0.45;
	var pionJoueur = {
		x: monx,
		y: mony,
		radius: radius1,
		color: 'black',
		speedX: 2,
		speedY: 1
	}

	let monx2 = (fin.x * quadrillage) - (quadrillage / 2);
	let mony2 = (fin.y * quadrillage) - (quadrillage / 2);
	let radius2 = quadrillage * 0.3;
	var pionFin = {
		x: monx2,
		y: mony2,
		radius: radius2,
		color: 'green',
		speedX: 2,
		speedY: 1
	}
	drawFilledCircle(pionJoueur);
	drawFilledCircle(pionFin);
}

function drawFilledCircle(c) {
	// GOOD practice: save the context, use 2D trasnformations
	ctx.save();
	ctx.fillStyle = c.color;
	// (0, 0) is the top left corner of the monster.
	ctx.beginPath();
	ctx.arc(c.x, c.y, c.radius, 0, 2 * Math.PI);
	ctx.fill();
	// GOOD practice: restore the context
	ctx.restore();
}
