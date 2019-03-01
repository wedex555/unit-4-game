$(document).ready(function() {
    // initial game data 
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    
    // display data on page
    $('#total').text(userTotal);
    $('#wins').text(wins);
    $('#losses').text(losses);

    // create a randome num
    var targerNumber = randomNumGenerator(19, 120);
    // display random num on page
    $('#target-num').text(targerNumber);

    // initiate an empty array to hold value for the 4 gems
    var gemValues = [];
    // generate value for the 4 gems
    while (gemValues.length < 4){
        var randomNum = randomNumGenerator(1, 12);
        if(gemValues.indexOf(randomNum) === -1) {
            gemValues.push(randomNum)
        }
    }

    $('#alert-message').text(' ');
    // event lister for button click

    $('button').on('click', function(){
        $('#alert-message').text(' ');
        // user hasnt lost game yet
        var selectedBtn = $(this).data('index');
        userTotal += gemValues[parseInt(selectedBtn)];

        if(userTotal>targerNumber) {
            losses++;
            $('#losses').text(losses);

            resetGame()

            $('#alert-message').text('you lose! play again.');
        }
        else if(userTotal === targerNumber) {
            wins++;
            $('#wins').text(wins);

            resetGame()

            $('#alert-message').text('you win! play again.');
        }

        $('#total').text(userTotal);
    })

    function resetGame(){
        // create a randome num
        targerNumber = randomNumGenerator(19, 120)
        // display random num on page
        $('#target-num').text(targerNumber);

        userTotal = 0;
        $('#total').text(userTotal);

        gemValues = [];
        // generate value for the 4 gems
        while (gemValues.length < 4){
            var randomNum = randomNumGenerator(1, 12)
            if(gemValues.indexOf(randomNum) === -1) {
                gemValues.push(randomNum)
            }
        }
    }

    function randomNumGenerator(min, max){
        return Math.floor(Math.random()*(max-min+1)+ min);
    }


    
});

