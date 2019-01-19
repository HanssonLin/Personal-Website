$(document).ready(function() {

    $(window).mousemove(function() {
        if ($("#icon_github").is(":hover")) {
            $("#text_github").css("opacity", "1");
            $("#text_linkedin").css("opacity", "0");
            $("#text_email").css("opacity", "0");
            $("#text_resume").css("opacity", "0");
            $(".grayBox").css("opacity", "1");
        } else if ($("#icon_linkedin").is(":hover")){
            $("#text_github").css("opacity", "0");
            $("#text_linkedin").css("opacity", "1");
            $("#text_email").css("opacity", "0");
            $("#text_resume").css("opacity", "0");
            $(".grayBox").css("opacity", "1");
        } else if ($("#icon_email").is(":hover")){
            $("#text_github").css("opacity", "0");
            $("#text_linkedin").css("opacity", "0");
            $("#text_email").css("opacity", "1");
            $("#text_resume").css("opacity", "0");
            $(".grayBox").css("opacity", "1");
        } else if ($("#icon_resume").is(":hover")){
            $("#text_github").css("opacity", "0");
            $("#text_linkedin").css("opacity", "0");
            $("#text_email").css("opacity", "0");
            $("#text_resume").css("opacity", "1");
            $(".grayBox").css("opacity", "1");
        } else {
            $("#text_github").css("opacity", "0");
            $("#text_linkedin").css("opacity", "0");
            $("#text_email").css("opacity", "0");
            $("#text_resume").css("opacity", "0");
            $(".grayBox").css("opacity", "0");
        }

    });

});