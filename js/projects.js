$(document).ready(function() {
    $(".project-expand-trigger .btn").click(function() {
        var $button = $(this);
        var $buttonIcon = $button.find(".fa");
        var $buttonActionText = $button.find("span");
        var $projectInfo = $button.parent().parent();
        var $projectName = $projectInfo.find(".project-name");
        var $project = $projectInfo.parent().parent().parent().parent();
        var $expandContent = $projectInfo.find(".project-expand-content");

        var projectName = $projectName.text().trim();
        var opening;

        if ($button.hasClass("popup")) {
            // we need to open a modal
            // first fill in the details though
            $("#projectDetailsModal .modal-body").html($expandContent.clone().css("max-height", "100%"));
            $("#projectDetailsModal").modal();
            opening = true;
        } else {
            // normal expandy thing
            if ($project.hasClass("selected")) {
                // hide everything

                $button.removeClass("active");
                $buttonActionText.text("more");
                $buttonIcon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
                $project.removeClass("selected");
                $expandContent.css("max-height", "0");

                opening = false;
            } else {
                // show everything

                $(".project.selected .project-expand-trigger .btn").click();

                $button.addClass("active");
                $buttonActionText.text("less");
                $buttonIcon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
                $project.addClass("selected");
                $expandContent.css("max-height", "500px");

                opening = true;
            }
        }

        if (gtag) {
            if (opening) {
                gtag("event", "view_item", {
                    "event_category": "Projects",
                    "event_label": projectName
                });
            }
        }
    });
});