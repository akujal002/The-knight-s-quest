const collisionsLvl1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000,
    0, 0, 0, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 4000, 4000, 4000, 4000,
    0, 0, 4000, 0, 0, 4000, 0, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 4000, 4000, 4000, 4000, 4000, 4000, 4000,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 4000, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 4000, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 4000, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 4000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 4000, 4000, 4000, 4000, 0, 0, 0, 0, 0, 0, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//Tableau qui va lire chaque ligne du tableau de collision
Array.prototype.creerobjet2d = function() {
    const objets = []
    this.forEach((lignes, y) =>{
        lignes.forEach((symbol, x) =>{
        if (symbol=== 4000) { // S'il y a présence de '4000' dans la ligne
            objets.push(
                new CollisionBlock({
                  // Taille des collisions blocks qui sont de 32px chacun et en lien avec la taille de l'image
                position: {
                    x:x * 32, // n de case dans chaque ligne du tableau
                    y:y * 32,
                }
            }))
        }
        })
        })
        return objets
}