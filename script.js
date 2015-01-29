function spaceCheck() {
    var bodyRect = document.body.getBoundingClientRect();
    var el = document.querySelectorAll('a')[0];
    var elementRect = el.getBoundingClientRect();
    var offset = {
      top: elementRect.top - bodyRect.top,
      left: elementRect.left - bodyRect.left,
      right: elementRect.right - bodyRect.right
    };
    var posAtCurrentScrollHeight = offset.top - document.getElementsByTagName('body')[0].scrollTop;    
    
    // check top
    
        // if not enough space, check bottom
}
window.addEventListener("resize", function() {console.log("RESIZED");});
//dynamically generate the preview

el.addEventListener('mouseover', function() {
    document.querySelectorAll('.fpreview')[0].style.display = "block";
});
el.addEventListener('mouseout', function() {
    document.querySelectorAll('.fpreview')[0].style.display = "none";
});
    