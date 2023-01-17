
//Attributs du/des persos 
class Perso extends Sprites {
    constructor({
        colisionBlock = [], imageSrc, frameRate, animations}){
        super ({imageSrc, frameRate, animations})

        // Sa position de base avant application de la gravité et le reste
        this.position = {
            x: 110,
            y:375
        }
        // Mouvements de base avant application gravité et autre
        this.rapidite = {
            x:0,
            y:0,
        }
        
        this.cotes = {
            // Coté bas du personnage
            bas : this.position.y + this.height
        }
        this.gravity = 1

        this.collisionBlocks = collisionBlocks
        //console.log(this.collisionBlocks)
    }
    // montrer le perso
   
    // Faire bouger le personnage, le bloquer s'il atteint le bord du canva + gravité
    update() {
        /*c.fillStyle = 'rgba(0, 0, 255, 0.2)';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);*/

        this.position.x += this.rapidite.x

        this.hitBox = {
            position: {
        x: this.position.x + 8,
        y: this.position.y + 8
        },
        width : 27,
        height : 40,
    }
        // check collisions horizontales
        this.checkCollisionsHorizontales()
        //loop check gravité à appeler ici
        //Edit : Pas besoin, gravité était appelé après donc bug de saut reglé
        //Gravité 
        this.appliquerGravite()

        this.hitBox = {
            position: {
        x: this.position.x + 8,
        y: this.position.y + 8
        },
        width : 27,
        height : 40,
    }
        /*------------------------------


        Montre la hitbox du personnage
    c.fillStyle = 'rgba(255, 0, 255, 0.0)';
    c.fillRect(
        this.hitBox.position.x,
         this.hitBox.position.y,
          this.hitBox.width,
           this.hitBox.height)


           ----------------------------*/



        //collisions verticales
        this.checkCollisionsVerticales()

    }
    //Appeler la bonne animation en fonction du mouvement
    //+ Aller chercher les attributs des animations

    changerAnimation(name) {
        if (this.image === this.animations[name].image) return
        this.frame = 0
        //console.log('je suis ici')
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.accelFrame = this.animations[name].accelFrame
    }

    
    //---------------------------COLLISIONSAAAAAAJBHJDGHBUJZNF !!!!!!-------------------------------------//



    checkCollisionsVerticales(){
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
        
                //Si une collision existe
            if (this.hitBox.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.hitBox.position.x + this.hitBox.width >= collisionBlock.position.x && 
                this.hitBox.position.y + this.hitBox.height >= collisionBlock.position.y &&
                this.hitBox.position.y <= collisionBlock.position.y + collisionBlock.height){
    
                //Collision en y à gauche
            if (this.rapidite.y < 0) {
                this.rapidite.y = 0
                this.position.y = collisionBlock.position.y + collisionBlock.height - (this.hitBox.position.y - this.position.y) + 0.01
                break
            }
            //Collisions en y à droite
            if (this.rapidite.y > 0) {
                this.rapidite.y = 0
                this.position.y = collisionBlock.position.y - (this.hitBox.position.y - this.position.y + this.hitBox.height) - 0.01
                break
            }
        }
    }
    }

    checkCollisionsHorizontales(){
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

                    // Si une collision existe
                 if (this.hitBox.position.x <= collisionBlock.position.x + collisionBlock.width && 
                    this.hitBox.position.x + this.hitBox.width >= collisionBlock.position.x && 
                    this.hitBox.position.y + this.hitBox.height >= collisionBlock.position.y &&
                    this.hitBox.position.y <= collisionBlock.position.y + collisionBlock.height){

                    //Collision en x à gauche
                if (this.rapidite.x < -0) {
                    this.position.x = collisionBlock.position.x + collisionBlock.width - (this.hitBox.position.x - this.position.x) + 0.01
                    break
                }
                    //Collisions en x à droite
                if (this.rapidite.x > 0) {
                    this.position.x = collisionBlock.position.x - (this.hitBox.position.x - this.position.x + this.hitBox.width) - 0.01
                    break
                }
            }
        }
    }

    appliquerGravite(){
        this.rapidite.y += this.gravity
        this.position.y += this.rapidite.y
    }

    }