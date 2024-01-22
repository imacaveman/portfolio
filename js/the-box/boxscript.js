const $container = $('.box-example-container');
const $mainBox = $('.main-box'); 

// For some reason the first time the container is clicked, the box is instantly appearing at the designated spot, then behaves as normal upon further clicking
$mainBox.hide();

$container.on("click", function(event){
    $mainBox.show();
    // calculate position 
    const $movedPosition = {
        left: event.offsetX - $mainBox.width() / 2,
        top: event.offsetY - $mainBox.height() / 2
    };
    $movedPosition.left = Math.max(0, Math.min($movedPosition.left, $container.width() - $mainBox.width()));
    $movedPosition.top = Math.max(0, Math.min($movedPosition.top, $container.height() - $mainBox.height()));
    $mainBox.css($movedPosition);
});