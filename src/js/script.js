/* stephe/meet-jquery
 *
 * /src/js/script.js - Main script (DOM version)
 *
 * coded by stephecloutier@gmail.com
 * started at 13/02/2017
 */


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
    });

} );
