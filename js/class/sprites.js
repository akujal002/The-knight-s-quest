// Tous les sprites (animations / images)

class Sprites {
    constructor({ position, imageSrc, frameRate = 1, animations }){
        this.position = position
        this.image = new Image();
        this.image.onload = () => {
            this.charge = true
            this.width = this.image.width / this.frameRate
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.charge = false
        //Framerate des animations
        this.frameRate = frameRate,
        this.frame = 0
        // est de base à 0
        this.coupureFrame = 0
        //change la vitesse des animations personnages
        this.accelFrame = 15
        this.animations = animations


        // Sera peut-être problématique !!!!!!!!!!!!!!!!!!!!!!!
        if (this.animations) {
            for (let key in this.animations) {
            const image = new Image()
            image.src = this.animations[key].imageSrc
            this.animations[key].image = image
        }
        console.log(this.animations)
        
        }
    }
    // Affichage img
    draw() {
        if (!this.charge) return
        const cropbox = { //Réduit ou augmente la taille de la hitbox du personnage
            position: { // position de la hitbox du personnage
            x: this.width * this.frame,
            y:0,
        },
        width : this.width,
        height : this.height,
    }
        //Position + montrer image sprite
        c.drawImage(this.image,
             cropbox.position.x,
              cropbox.position.y,
               cropbox.width,
               cropbox.height,
                this.position.x,
                this.position.y,
                this.width,
                this.height
                )
                this.updateFrame()
    }
    //Update la frame montrée
    updateFrame(){
        this.coupureFrame++
        if (this.coupureFrame % this.accelFrame === 0){
        if (this.frame < this.frameRate - 1) this.frame++
            else this.frame = 0
        }
    }
    }