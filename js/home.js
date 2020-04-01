$(document).ready(function() {
	$(".hero").click(function() {
		if ($(this)[0].tagName != "a") {
			var link = $(this).find("a");
			window.location.assign(link.attr("href"));
		}
	});
});