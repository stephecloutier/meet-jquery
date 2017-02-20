

const fHandleTab = function (oEvent) {
    let $this = $(this)

    oEvent.preventDefault();
    if ($this.parent().hasClass("active")) {
        return;
    }
    $("ul.nav.nav-tabs .active").removeClass("active");
    $this.parent().addClass("active");
    $(".tab-pane.active").removeClass("active");
    $(`#${$this.data("tab-target")}`).addClass("active");
};

const fHandleTrombino = function() {
    $trombinoFigures.filter(":visible").fadeOut(function(){
        let $next = $(this).next();
        if($next.length === 0){
            $next = $trombinoFigures.first();
        }
        $next.fadeIn();
    });
}

$(function() {
    // 1. a with rel-external
    $('a[rel*="external"]').attr("target", "_new");

    // 2. tabs
    $("ul.nav.nav-tabs a").on("click", fHandleTab);

    // 3. trombinoscope
    $trombinoFigures = $("#trombino figure");
    $trombinoFigures.hide().first().show();
    setInterval(fHandleTrombino, 1500);
});
