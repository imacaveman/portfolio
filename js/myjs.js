const $headerTitle = $("#title");
const $headerBio = $("#bio");
const $hamburger = $(".hamburger");
const $sidebar = $(".sidebar");

$headerBio.hide().delay(1500).fadeIn(2000);

$headerTitle.hide().slideDown(1000);
setTimeout(function() {
    $headerTitle.addClass("title-glow");
}, 1500);
setTimeout(function() {
    $headerTitle.addClass("title-glow-off");
}, 3000);

$(".burger-container").on("click", function(event){
    $hamburger.toggleClass("is-active");
    $sidebar.
});

$("#contact-name").attr('required',true);
$("#contact-surname").attr('required',true);
$("#contact-email").attr('required',true);