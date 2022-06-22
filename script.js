function afficheImage(saison) {
    switch (saison) {
        case 'printemps':
            document.images[0].src = "pics/ceinture-bleue.png"
            break
        case 'ete':
            document.images[0].src = "pics/ceinture-double-boucle - Copie.png"
            break
        case 'hiver':
            document.images[0].src = "pics/ceinture-noire.png"
            break
        case 'automne':
            document.images[0].src = "pics/plusieurs-ceintures.png"
            break
        default:
            document.images[0].src = "pics/ceinture-marron.png"

    }
}