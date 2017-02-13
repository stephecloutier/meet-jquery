/* stephe/meet-jquery
 *
 * /src/js/script.js - Main script (DOM version)
 *
 * coded by stephecloutier@gmail.com
 * started at 13/02/2017
 */

let iCurrentFigure = 0,
    iFigureAmount,
    aFigures;

const fChangeFigure = function () {
    aFigures[ iCurrentFigure ].classList.add( "hide" );
    if ( ++iCurrentFigure === iFigureAmount ){
        iCurrentFigure = 0;
    }
    aFigures[ iCurrentFigure ].classList.remove( "hide" );
};


const fHandleTab = function ( oEvent ) {
    oEvent.preventDefault();
    let $elt = oEvent.currentTarget;

    // check if current link is active
    if ( $elt.parentNode.classList.contains( "active" ) ){
        return;
    }

    // remove active class from old active
    document.querySelector( "ul.nav.nav-tabs .active" ).classList.remove( "active" );

    // add active class to current link
    $elt.parentNode.classList.add( "active" );

    // remove active class from old tab content
    document.querySelector( ".tab-pane.active" ).classList.remove( "active" );

    // add active class to current tab content
    document.getElementById( $elt.getAttribute( "data-tab-target" ) ).classList.add( "active" );
};

window.addEventListener( "load", function(){

    // 1. a with rel=external opens in new window
    Array.from( document.querySelectorAll( 'a[rel*="external"]' ) ).forEach( function( $elt ) {
        $elt.setAttribute( "target", "_new" );
    } );

    // 2. handle tabs
    Array.from( document.querySelectorAll( "ul.nav.nav-tabs a" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fHandleTab, "false" );
    } );

    // 3. trombinoscope
    ( aFigures = Array.from( document.querySelectorAll( "#trombino figure" ) ) ).forEach( function( $elt, iIndex ) {
        ( iIndex > 0 ) && $elt.classList.add( "hide" );
    } );
    iFigureAmount = aFigures.length;
    setInterval( fChangeFigure, 1000 );

} );
