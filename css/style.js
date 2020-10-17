function fnMove(){
    var offset = $(".article").offset();
    $('html, body').animate({scrollTop : offset.top}, 500);
}