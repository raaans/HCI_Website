//function to collapse or show the content of a section
$(document).ready(function () {
    $(".sectionDivider").click(function () { //when a button of the class 'videoButt' is clicked...
        $(".sectionContent").removeClass("contentVisible");
        $(".sectionDivider").removeClass("upsideDown");
        $(this).next(".sectionContent").toggleClass("contentVisible");
        $(this).toggleClass("upsideDown");
    });
});
