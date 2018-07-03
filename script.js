let quadrillage =30;
let joueur= { x: 1, y: 1 };
let fin= { x: 1, y: 1 };
let magrille
let ctx
let pionFin
let pionJoueur
let taille = 10;
let mouvement = new Array();

function Avance() {
	ctx.clearRect(0, 0, 500, 500);
	console.log(taille)
	grille(taille);
	placeElements();
	drawFilledCircle(pionJoueur);
	drawFilledCircle(pionFin);
}

function bouge(direction){
	direction=="haut"?joueur.y--:direction=="bas"?joueur.y++:direction=="gauche"?joueur.x--:direction=="droite"?joueur.x++:false;
	
	grille()
}

function init() {
	magrille = document.getElementById("grille")
	grille();
	dessineJoueur();
}

function grille(newtaille) {
	if(newtaille>0){
		taille = newtaille;
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
	dessineJoueur();
}

function dessineJoueur(){
	pionJoueur={
		x: joueur.x*quadrillage,
		y: joueur.y*quadrillage,
		radius: quadrillage*0.35,
		color: 'Black',
	}
	drawFilledCircle(pionJoueur)
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
