// *************** VARIABLES *************** //

const $headerTitle = $("#title");
const $headerBio = $("#bio");
const $hamburger = $(".hamburger");
const $hamburgerContainer = $(".burger-container");
const $contactName = $("#contact-name");
const $contactSurname = $("#contact-surname");
const $contactEmail = $("#contact-email");
const $sidebar = $(".sidebar");

// ************ END OF VARIABLES ************ //

$headerBio.hide().delay(1500).fadeIn(2000);

$headerTitle.hide().slideDown(1000);
setTimeout(function() {
    $headerTitle.addClass("title-glow");
}, 1500);
setTimeout(function() {
    $headerTitle.addClass("title-glow-off");
}, 3000);

$hamburgerContainer.on("click", function(event){
    $hamburger.toggleClass("is-active");
    $(this).toggleClass("burger-clicked");
    $sidebar.toggleClass("show");
});

$(".sidebar-nav a").on("click", function(event){
    $hamburger.toggleClass("is-active");
    $hamburgerContainer.toggleClass("burger-clicked");
    $sidebar.toggleClass("show");
});

$($contactName).attr('required',true);
$($contactSurname).attr('required',true);
$($contactEmail).attr('required',true);

$(document).ready(function() {
    $(".contact-submit").click(function() {
        var emailInput = $("#contact-email").val();
        if (isValidEmail(emailInput)) {
            console.log("Valid email address!");
        } else {
            $("#contact-email").addClass("warning-input");
            $("#contact-email").val("Invalid email address");
            console.log("Invalid email address.");
        }
    });
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

$("#contact-email").on("click", function(event){
    $(this).removeClass("warning-input");
});
