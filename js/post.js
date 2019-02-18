function closePopper($details) {
	$details.data("popper").destroy();
	$details.hide();
	$details.data("popper", null);
}

$(document).ready(function() {
	$("body").click(function(e) {
		if (e.target) {
			var $target = $(e.target);
			var $note = $target.closest(".popup-note");
			var $details = $target.closest(".popup-note-details");
			var safeNumber;

			if ($note.length > 0) {
				safeNumber = $note.attr("data-number");
			} else if ($details.length > 0) {
				safeNumber = $details.attr("data-number");
			}

			$(".popup-note-details").each(function() {
				var $this = $(this);
				var thisNumber = $this.attr("data-number");
				if (thisNumber != safeNumber) {
					if ($this.data("popper")) {
						closePopper($this);
					}
				}
			});
		}
	});
	$(".popup-note").click(function() {
		var $this = $(this);
		var number = $this.attr("data-number");

		var $details = $(".popup-note-details[data-number=" + number + "]");
		var details = $details[0];

		if ($details.data("popper")) {
			closePopper($details);
			return;
		}

		$details.show();

		var popper = new Popper(this, details, {
			placement: "top-start"
		});

		$details.data("popper", popper);
	});
});