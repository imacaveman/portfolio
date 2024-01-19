// *************** VARIABLES *************** //

const $headerTitle = $(".title-intro");
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

// *************** TRY BOTH *************** //

$($contactName).attr('required',true);
$($contactSurname).attr('required',true);
$($contactEmail).attr('required',true);

// $($contactName).prop('required',true);
// $($contactSurname).prop('required',true);
// $($contactEmail).prop('required',true);

// **************************************** //

$(document).ready(function() {
    $(".contact-submit").click(function() {
        var emailInput = $contactEmail.val();
        if (isValidEmail(emailInput)) {
            console.log("Valid email address!");
        } else {
            $(".error1").text("Please enter a valid email address");
            $contactEmail.addClass("warning-input");
            console.log("Invalid email address.");
        }
        var nameInput = $contactName.val();
        if (nameInput) {
            console.log("Valid name!");
        } else {
            $(".error2").text("Please enter your first and last name");
            $contactName.addClass("warning-input");
            console.log("Invalid name.");
        }
        var surnameInput = $contactSurname.val();
        if (surnameInput) {
            console.log("Valid surname!");
        } else {
            $(".error2").text("Please enter your first and last name");
            $contactSurname.addClass("warning-input");
            console.log("Invalid surname.");
        }
    });
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// This will remove any red borders around previously incorrect fields

$contactEmail.on("click", function(event){
    $(this).removeClass("warning-input");
});
$contactName.on("click", function(event){
    $(this).removeClass("warning-input");
});
$contactSurname.on("click", function(event){
    $(this).removeClass("warning-input");
});
