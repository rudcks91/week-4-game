$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    var randomnumber = Math.floor(Math.random()*(100)+19);
    var crystal1 = Math.floor(Math.random()*(11)+1);
    var crystal2 = Math.floor(Math.random()*(11)+1);
    var crystal3 = Math.floor(Math.random()*(11)+1);
    var crystal4 = Math.floor(Math.random()*(11)+1);
    var total = 0;

    $("#randombox").html("<h1>" + randomnumber + "</h1>");

    $("#crystal1").click(crystalvalue1);

    $("#crystal2").click(crystalvalue2);

    $("#crystal3").click(crystalvalue3);

    $("#crystal4").click(crystalvalue4);

    function reset() {
        var crystal1 = Math.floor(Math.random()*(11)+1);
        var crystal2 = Math.floor(Math.random()*(11)+1);
        var crystal3 = Math.floor(Math.random()*(11)+1);
        var crystal4 = Math.floor(Math.random()*(11)+1);
        total = 0;
        randomnumber = Math.floor(Math.random()*(100)+19);
    }

    function crystalvalue1() {
        total = total + crystal1;
        console.log("total1  "+total);
        console.log("crystal1  "+crystal1);
            $("#scorebox").text(total);
    }

    function crystalvalue2() {
        total = total + crystal2;
        console.log("total1  "+total);
        console.log("crystal2  "+crystal2);
            $("#scorebox").text(total);
    }

    function crystalvalue3() {
        total = total + crystal3;
        console.log("total1  "+total);
        console.log("crystal3  "+crystal3);
            $("#scorebox").text(total);
    }

    function crystalvalue4() {
        total = total + crystal4;
        console.log("total1  "+total);
        console.log("crystal4  "+crystal4);
            $("#scorebox").text(total);
    }



if (total === randomnumber) {
    wins ++;
    $("#wins").text(wins);
    reset();
    alert("win");
    console.log(wins);
}
else if (total > randomnumber) {
    losses ++;
    $("#losses").text(losses);
    reset();
    alert("loss");
    console.log(losses);
}


});