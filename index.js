// définir type canva
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// taille canva égale à la taille de l'image de la map
canvas.width = 64 * 16; // soit 1024pxs
canvas.height = 64 * 9; // soit 576px

const scanCollisions = collisionsLvl1.scan2D() //Va scaner les collisions du tableau de collision collisions.js
const collisionBlocks = scanCollisions.creerobjet2d()

//fond du canva hauteur largeur
c.fillStyle = 'white'; //inutile vu que caché
c.fillRect(0, 0, canvas.width, canvas.height);


// image background qui est un sprite + position + src
const backgroundNiveau1 = new Sprites({
    position: {x:0, y:0},
    imageSrc: '../tiled/map1.png'
})

//positionnement perso 
const perso = new Perso({
    collisionBlocks,
    imageSrc: 'Assets/Bandits/Sprites/Light Bandit/Idle/LightBandit_Idle_right.png',
    frameRate: 4,
    //parametre de fps de chaque animations en fonction du nombre de frame qu'elle a
    animations:{
        idleRight: {
            frameRate: 4,
            accelFrame: 12,
            loop: true,
            imageSrc: 'Assets/Bandits/Sprites/Light Bandit/Idle/LightBandit_Idle_right.png',
        },
        idleLeft: {
            frameRate: 4,
            accelFrame: 12,
            loop: true,
            imageSrc: 'Assets/Bandits/Sprites/Light Bandit/Idle/LightBandit_Idle_left.png',
        },
        runRight: {
            frameRate: 8,
            accelFrame: 8,
            loop: true,
            imageSrc: 'Assets/Bandits/Sprites/Light Bandit/Run/LightBandit_Run_right.png',
        },
        runLeft: {
            frameRate: 8,
            accelFrame: 12,
            loop: true,
            imageSrc: 'Assets/Bandits/Sprites/Light Bandit/Run/LightBandit_Run_left.png',
        },
    }
})

// Attribut de base des 3 touches sur false
const touches = {
    z: {presse : false,},
    q: {presse : false,},
    d: {presse : false,}}

// Tous les mouvements qui dépendent du framerate
function animation() {
    //background
    //Compteur de frame qui vont faire les animations
    window.requestAnimationFrame(animation)

    backgroundNiveau1.draw() //Montre le background lvl1
    collisionBlocks.forEach(e => { 
        
    e.draw()
    })

    //Mouvements du perso conditions
    perso.rapidite.x = 0
    if (touches.d.presse) {
        //console.log('Je suis dans la boucle')
        perso.changerAnimation('runRight') //Cours vers la droite
        perso.rapidite.x = 5
        perso.derniereDirection = 'droit' //Permet de savoir la dernière positions du personnage à la condition
    } else if (touches.q.presse) {
        perso.changerAnimation('runLeft') //cours vers la gauche
        perso.rapidite.x = -5
        perso.derniereDirection = 'gauche'
    } else if (perso.derniereDirection === 'droit') { // si dernière course était à droit alors regarde à droite
        perso.changerAnimation('idleRight')
    } else if (perso.derniereDirection === 'gauche'){ // si dernière course était à gauche alors regarde à gauche
        perso.changerAnimation('idleLeft')
    }
    //Image perso
    perso.draw()
    perso.update()
}


animation();
