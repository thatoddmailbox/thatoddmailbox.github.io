$(document).ready(function() {
    $(".project-expand-trigger .btn").click(function() {
        var $button = $(this);
        var $buttonIcon = $button.find(".fa");
        var $buttonActionText = $button.find("span");
        var $projectInfo = $button.parent().parent();
        var $project = $projectInfo.parent().parent().parent().parent();

        if ($project.hasClass("selected")) {
            // hide everything

            $button.removeClass("active");
            $buttonActionText.text("more");
            $buttonIcon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $project.removeClass("selected");
            $projectInfo.find(".project-expand-content").css("max-height", "0");
        } else {
            // show everything

            $(".project.selected .project-expand-trigger .btn").click();

            $button.addClass("active");
            $buttonActionText.text("less");
            $buttonIcon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $project.addClass("selected");
            $projectInfo.find(".project-expand-content").css("max-height", "500px");
        }
    });
});