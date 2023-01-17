class CollisionBlock {
    constructor({position}) {
        // Taille des carrés de collision
        this.position = position
        this.width = 32
        this.height = 32
    }

    draw() {
        c.fillStyle = 'rgba(0, 255, 255, 0.0' // Montre les collision les hitbox map si on change '0.0' pas 0.5'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}