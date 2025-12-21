//function clickevent(){
    //document.write("hello all this is your first java script event");
//}
/*document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pid").onclick = function () {
        alert("clicked the paragraph");
    };
});*/
/*$(document).ready(function () {
    $('#pid').click(function () {
        $(this).hide();
    });
});

$(document).ready(function(){
    $("#but").dblclick(function(){
        alert("you double clicked this button!!");
    })
})*/

$(document).ready(function(){
    $(".hide").click(function(){
        $(".pfast").hide("fast");
        $(".pslow").hide("slow");
        $(".ptoggle").hide(2000);

    })
})
$(document).ready(function(){
    $(".show").click(function(){
        $(".pfast").show("fast");
        $(".pslow").show("slow");
        $(".ptoggle").show(2000);

    })
})
$(document).ready(function(){
    $(".toggle").click(function(){
        $(".pfast").toggle("fast");
        $(".pslow").toggle("slow");
        $(".ptoggle").toggle(2000);

    })
})