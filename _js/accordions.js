//function to collapse or show the content of a section
$(document).ready(function () {
    $(".sectionDivider").click(function () { //when a button of the class 'videoButt' is clicked...
        $(".sectionContent").not(this).removeClass("contentVisible");
        $(".sectionDivider").not(this).removeClass("upsideDown");
        $(this).next(".sectionContent").toggleClass("contentVisible");
        $(this).toggleClass("upsideDown");
    });
});
