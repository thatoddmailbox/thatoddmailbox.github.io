function dS(d) {
    var l = 21,
        bM = "",
        tM = "";
    for (var i = 0; i < l; i++) {
        var b = (d[i * 4 + 2] >>> 0).toString(2);
        bM += b[b.length - 1];
        if (bM.length == 16) {
            l = parseInt(bM, 2) + 16;
            bM = ""
        } else if (bM.length == 8 && l != 21) {
            tM += String.fromCharCode(parseInt(bM, 2));
            bM = ""
        }
    }
    return tM;
}

function cDis(f) {
    var o = document.querySelector("canvas").getContext("2d");
    var i = new Image;
    i.onload = function() {
		o.drawImage(i, 0, 0);
		$("canvas").show();
		var codeText = dS(o.getImageData(0, 0, 298, 100).data);
        document.getElementById("code").innerText = js_beautify(codeText);
    };
    i.src = f
}

$(document).ready(function() {
	$("canvas").hide();
	$(".update-image").click(function() {
		cDis("img/" + $(this).attr("data-image"));
	});
});