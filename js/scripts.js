var queenAttack = function(queen, target) {
    if ((queen[0] === target[0]) || (queen[1] === target[1]) ||
       (Math.abs(queen[0] - target[0])) === (Math.abs(queen[1] - target[1]))) {
        return true;
    } else {
        return false;
    }
};

$(document).ready(function() {
    $("form#chess").submit(function(event) {
        var queen = parseInt($("input#queen0", "input#queen1").val());
        var target = parseInt($("input#target0", "input#queen1").val());
        var result = queenAttack(queen, target);

    $(".not").empty();

    $(".queen").text(queen);
    if (!result) {
        $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();


    });
});
