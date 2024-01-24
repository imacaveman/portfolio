const $container = $('.box-example-container');
const $mainBox = $('.main-box');
const $walkSpeed = 10; // this SHOULD change the speed the box moves??


// For some reason the first time the container is clicked, the box is instantly appearing at the designated spot, then behaves as normal upon further clicking
$mainBox.hide();

$container.on("click", function(event){
    $mainBox.show().stop();

    // calculate position clicked 
    const $movedPosition = {
        left: event.offsetX - $mainBox.width() / 2,
        top: event.offsetY - $mainBox.height() / 2
    };
    // this will calculate distance to travel based on X and Y coords. 
    const $walkDistanceX = $movedPosition.left - $mainBox.position().left;
    const $walkDistanceY = $movedPosition.top - $mainBox.position().top;

    const distance = Math.sqrt($walkDistanceX ** 2 + $walkDistanceY ** 2);
    const $steps = distance / $walkSpeed;

    let $stepX = $walkDistanceX / $steps;
    let $stepY = $walkDistanceY / $steps;
    // $movedPosition.left = Math.max(0, Math.min($movedPosition.left, $container.width() - $mainBox.width()));
    // $movedPosition.top = Math.max(0, Math.min($movedPosition.top, $container.height() - $mainBox.height()));
    
    //$mainBox.css($movedPosition);

    // currentLeft & currentTop as suggested by chatGPT while debugging
    let currentLeft = $mainBox.position().left;
    let currentTop = $mainBox.position().top;

    for (let i = 1; i <= $steps; i++) {
        setTimeout(() => {
            currentLeft += $stepX;
            currentTop += $stepY;
            $mainBox.css({
                left: currentLeft,
                top: currentTop
            });
        }, i * 1000 / $walkSpeed);
    }
});

// *************** RIGHT-CLICK MENU *************** //

$(function() {
    const $rightClickMenu = $(".right-click-menu");

    $container.on("contextmenu", function(){
        event.preventDefault();
        $rightClickMenu.css({
            display: "block",
            left: event.pageX - $container.offset().left,
            top: event.pageY - $container.offset().top
        });
    });

    $mainBox.on("contextmenu", function(event) {
        event.preventDefault();
        $rightClickMenu.css({
            display: "block",
            left: event.pageX - $container.offset().left,
            top: event.pageY - $container.offset().top
        });
    });

    $(document).on("click", function(event) {
        $rightClickMenu.hide();
    });

    $(".menu-button1").on("click", function() {
        console.log("Button 1 pressed");
        $rightClickMenu.hide();
    });

    $(".menu-button2").on("click", function() {
        console.log("Button 2 pressed");
        $rightClickMenu.hide();
    });
});