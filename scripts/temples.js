document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector("footer");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var lastModified = new Date(document.lastModified);
    var lastModifiedDate = lastModified.toDateString();

    footer.innerHTML += "<p>Copyright &copy; " + currentYear + ". Last modified: " + lastModifiedDate + "</p>";
});

document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById("hamburger");
    var navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });
});
