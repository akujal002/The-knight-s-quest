Array.prototype.scan2D = function() {
    const lignes = [];
    for (let i = 0; i < this.length; i+=32) {
        lignes.push(this.slice(i, i + 32))
}
return lignes
}