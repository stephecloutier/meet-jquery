/* hepl-mmi/meet-jquery
 *
 * /scripts/scripts.js - Main scripts (with jquery)
 *
 * coded by leny@flatLand!
 * started at 23/02/2016
 */

( function() {

    "use strict";

    var fTabLinkIsClicked,
        fFormIsSubmitted,
        $tabLinks,
        $tabPanes;

    fFormIsSubmitted = function( oEvent ) {
        var $self = $( this ),
            sGivenEmail,
            sGivenName,
            sGivenComment,
            bAllIsOk = true,
            rCheckEmail = /^[a-z0-9-_\.]+@[a-z0-9-_\.]+\.[a-z]{2,3}$/i;

        $( ".control-group" ).removeClass( "error" );

        // 1. email should be an email
        sGivenEmail = $self.find( "input[name=\"email\"]" ).val().trim();
        if ( rCheckEmail.test( sGivenEmail ) === false ) {
            $self.find( "input[name=\"email\"]" ).parents( ".control-group" ).addClass( "error" );
            bAllIsOk = false;
        }

        // 2. name isn't empty
        sGivenName = $self.find( "input[name=\"name\"]" ).val().trim();
        if ( sGivenName === "" ) {
            $self.find( "input[name=\"name\"]" ).parents( ".control-group" ).addClass( "error" );
            bAllIsOk = false;
        }

        // 3. comment isn't empty and <= 140 chars
        sGivenComment = $self.find( "textarea[name=\"comment\"]" ).val().trim();
        if ( sGivenComment === "" || sGivenComment.length > 140 ) {
            $self.find( "textarea[name=\"comment\"]" ).parents( ".control-group" ).addClass( "error" );
            bAllIsOk = false;
        }

        return bAllIsOk;
    };

    fTabLinkIsClicked = function( oEvent ) {
        var $self = $( this );

        oEvent.preventDefault();

        // 0. do nothing if current link is already active
        if ( $self.parent().hasClass( "active" ) ) {
            return;
        }

        // 1. remove active class on pane
        // 2. get target pane
        // 3. add active class on target pane
        $tabPanes // all tab panes
            .filter( ".active" ) // only the .active class
                .removeClass( "active" )
                .end()
            .filter( "#" + $self.data( "tab-target" ) ) // only one with target id
                .addClass( "active" );

        // 4. remove active class from link
        // 5. add active class on current link
        $tabLinks
            .parent()
                .filter( ".active" )
                    .removeClass( "active" )
                    .end()
                .has( $self )
                    .addClass( "active" );
    };

    $( function() {

        // external
        $( "a[rel=\"external\"]" ).attr( "target", "_new" );

        // tabs
        $tabPanes = $( ".tab-pane" );
        ( $tabLinks = $( ".nav-tabs li a" ) ).on( "click", fTabLinkIsClicked );

        $( ".page-header h1 small" ).on( "click", function() {
            $( this ).html( "Un blog en <strong>mousse</strong>" );
        } );

        $( "#trombino" )
            .find( "figure" )
                .hide()
                .first()
                    .fadeIn( 2500 )
                    .end()
                .end()
            .find( "h3" )
                .on( "click", function() {
                    $( "#trombino figure:first" )
                        .css( "position", "relative" )
                        .animate( {
                            "left": -250
                        }, 2500 );
                } );

        $( "form" ).on( "submit", fFormIsSubmitted );

    } );

} )();
