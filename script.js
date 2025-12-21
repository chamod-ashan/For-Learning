//function clickevent(){
    //document.write("hello all this is your first java script event");
//}
/*document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pid").onclick = function () {
        alert("clicked the paragraph");
    };
});*/
$(document).ready(function () {
    $('#pid').click(function () {
        $(this).hide();
    });
});

$(document).ready(function(){
    $("#but").dblclick(function(){
        alert("you double clicked this button!!");
    })
})