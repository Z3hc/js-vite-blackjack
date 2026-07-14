import _ from 'underscore';

/**
 * Esta fucion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejem: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemp: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new error( 'tiposDeCarta es obligatorio' );
    
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new error( 'tiposEspeciales es obligatorio' );
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );
    return deck;
}
