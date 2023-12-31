clicks = 0;
bottom = document.getElementById("bottom");
bottom.innerHTML = "clicks: " + clicks;


function clickcount() {
    clicks++;
    bottom.innerHTML = "clicks: " + clicks;
}

