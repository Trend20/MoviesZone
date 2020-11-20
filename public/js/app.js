const toggleBar = document.getElementById('toggle');
const searchForm = document.getElementById('form');
toggleBar.addEventListener('click', showNav);

const nav = document.getElementById('nav');

function showNav() {
    if (nav.style.visibility === "hidden") {
        nav.style.visibility = "visible";
        searchForm.style.marginTop = '200px'
    } else {
        nav.style.visibility = "hidden";
        searchForm.style.marginTop = '150px'
    }

}