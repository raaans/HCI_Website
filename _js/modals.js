//function to show a video or piece of code when the appropriate button is clicked
$(document).ready(function () {
    $(".videoButt").click(function () { //when a button of the class 'videoButt' is clicked...
        $(this).next(".videoModal").addClass("modalVisible");
    });

    $(".codeButt").click(function () {
        $(this).next(".videoModal").addClass("modalVisible");
    });

    $(".modalClose").click(function () {
        $(this).parent().parent().removeClass("modalVisible");
    });

    $(".modal").click(function () {
        var target = $(event.target);

        if (target.is(".modal")) {
            $(this).removeClass("modalVisible");
        }
    });
});
