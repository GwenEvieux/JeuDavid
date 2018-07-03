let quadrillage = 30;
let joueur = { x: 1, y: 1 };
let fin = { x: 1, y: 1 };
let magrille
let ctx
let pionFin
let pionJoueur
let taille = 10;
let mouvement = new Array();
let randX
let randY

function bouge(direction, pas) {
	direction = (direction.toString().toLowerCase())
	console.log(direction);
	//on change les coordonnées du pion
	direction == "h" ? joueur.y-- : direction == "b" ? joueur.y++ : direction == "g" ? joueur.x-- : direction == "d" ? joueur.x++ : false;
	//On s'assure que le joeur ne puisse pas sortir de la grille
	joueur.y < 0 ? joueur.y = 0 : false;
	joueur.y >= taille ? joueur.y = taille - 1 : false;
	joueur.x < 0 ? joueur.x = 0 : false;
	joueur.x >= taille ? joueur.x = taille - 1 : false;
	grille();
	pas--;
	if (pas > 0) {	
		requestAnimationFrame(function (d) {
			bouge(direction, pas);
		});
	}
}
function sequence() {
	let seq = document.getElementById("commandes").value;
	//on commence par décomposer caque mouvement, on obtiens un pas et une direction
	seq = seq.split(",");
	console.log(seq);
	//c'est cette partie qu'il faudrait animer
	for (i in seq) {
		var r = /\d+/;
		var k = /[a-zA-Z]/;
		let direct = seq[i].match(k);
		let pas = parseInt(seq[i].match(r));
		requestAnimationFrame(function (d) {
			bouge(direct, pas);
		});
	}
}

function init() {
	magrille = document.getElementById("grille")
	grille();
	//On place la sortie aléatoirement sur la grille
	randX = Math.floor(Math.random() * taille);
	randY = Math.floor(Math.random() * taille);
	dessineFin(randX, randY);
	dessineJoueur();
}

function grille(newtaille) {
	//Si on choisi une autre taille de grille, on réinitialise
	if (newtaille > 0) {
		taille = newtaille;
		randX = Math.floor(Math.random() * taille);
		randY = Math.floor(Math.random() * taille);
		joueur = { x: 1, y: 1 };
	}
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
	//On dessine les deux pions
	dessineFin(randX, randY);
	dessineJoueur();
}

function dessineJoueur() {
	pionJoueur = {
		x: joueur.x * quadrillage + quadrillage / 2,
		y: joueur.y * quadrillage + quadrillage / 2,
		radius: quadrillage * 0.35,
		color: 'Black',
	}
	drawFilledCircle(pionJoueur)
}


function dessineFin(mrandX, mrandY) {
	pionFin = {
		x: mrandX * quadrillage + quadrillage / 2,
		y: mrandY * quadrillage + quadrillage / 2,
		radius: quadrillage * 0.35,
		color: 'red',
	}
	drawFilledCircle(pionFin)
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
