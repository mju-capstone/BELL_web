$(document).ready(function(){
    $(".year18Button").click(function() {
        $(".year18").show();
        $(".year19").hide();
        $(".year20").hide();
    });          
});
$(document).ready(function(){
    $(".year19Button").click(function() {
        $(".year18").hide();
        $(".year19").show();
        $(".year19").css({
            'visibility': 'visible'
        });
        $(".year20").hide();
    });          
});
$(document).ready(function(){
    $(".year20Button").click(function() {
        $(".year18").hide();
        $(".year19").hide();
        $(".year20").show();
        $(".year20").css({
            'visibility': 'visible'
        });
    });          
});
