// Get a reference to "myhref".
var myhref = document.getElementByClassName("menu-link");
// Get a reference to "myfield".
var myfield = document.getElementById("click");
// Attach an event listener to "myhref", which gets notifier when "myhref" is clicked.
myhref.addEventListener("click", function() {
    // "myhref" is click. So, uncheck "myfield"
    myfield.checked = false;
});
