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

$(document).ready(function(){
    $(".wind18Button").click(function() {
        $(".wind18").show();
        $(".wind19").hide();
        $(".wind20").hide();
    });          
});
$(document).ready(function(){
    $(".wind19Button").click(function() {
        $(".wind18").hide();
        $(".wind19").show();
        $(".wind19").css({
            'visibility': 'visible'
        });
        $(".wind20").hide();
    });          
});
$(document).ready(function(){
    $(".wind20Button").click(function() {
        $(".wind18").hide();
        $(".wind19").hide();
        $(".wind20").show();
        $(".wind20").css({
            'visibility': 'visible'
        });
    });          
});

$(document).ready(function(){
    $(".china_seoul_title").mouseenter(function() {
        $('[data-toggle="popover"]').popover('show')
    })
});
$(document).ready(function(){
    $(".china_seoul_title").mouseleave(function() {
        $('[data-toggle="popover"]').popover('hide')
    })
});