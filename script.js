var el = document.querySelectorAll('a')[0];
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

function testFakkuRequest() {
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.fakku.net/doujinshi/cl-orz-32-english", false);
    req.send();
    response = JSON.parse(req.responseText);
    req.abort();
    return response;
}

window.addEventListener("resize", function() {console.log("RESIZED");});
//dynamically generate the preview

// el.addEventListener('mouseover', function() {
//     document.querySelectorAll('.fpreview')[0].style.display = "block";
// });
// el.addEventListener('mouseout', function() {
//     document.querySelectorAll('.fpreview')[0].style.display = "none";
// });
    

var cover = document.querySelectorAll(".cover > img")[0];
var title = document.querySelectorAll(".content > .title")[0];
var series = document.querySelectorAll(".content > .series")[0];
var artist = document.querySelectorAll(".content > .artist")[0];
var desc = document.querySelectorAll(".content > .description")[0];
var tags = document.querySelectorAll(".content > .tags")[0];

request = testFakkuRequest();

cover.src = "https:" + request.content.content_images.cover;
title.innerHTML = request.content.content_name;
for (var i = 0; i < request.content.content_series.length; i++) {
    series.innerHTML += request.content.content_series[i].attribute;
}

for (var i = 0; i < request.content.content_artists.length; i++) {
    artist.innerHTML += request.content.content_artists[i].attribute + " ";
}

desc.innerHTML = request.content.content_description;


