
// Déplacement du perso quand touche appuyée
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        //Lettre z
        case 'z':
            //Si perso est à 0 sur l'axe Y alors saut de +18.5
            if (perso.rapidite.y === 0) perso.rapidite.y = -18.5
            break
            // Renvois à la fonction dans index.js qui permet le mouvement ligne 52 et 39
            case 'q':
                touches.q.presse = true
            break

            case'd':
                touches.d.presse = true
    }
})
// Faire arreter le perso quand touche n'est pas appuyée
window.addEventListener('keyup', (event) => {
    switch (event.key) {
            case 'q':
                touches.q.presse = false
            break

            case'd':
            touches.d.presse = false
    }
})
// touche 'e' passer porte(Pas faite)
/*window.addEventListener('keyup', (event) => {
    switch (event.key) {
            case 'q':
                touches.q.presse = false
            break

            case'd':
            touches.d.presse = false
    }
})*/