//Doc ready
$(function(){
//We're going to be doing a dungeon generator for tabletop games. Something simple to essentially have the layout.

    const changeFloors = () => {
        $('button.btnGrass').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorGrass');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsGrass').show();
        });
        $('button.btnStone').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorStone');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsStone').show();
        });
        $('button.btnWood').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWood');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsWood').show();
        });
        $('button.btnWater').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWater');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsWater').show();
        });
        $('button.btnLava').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorLava');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsLava').show();
        });

    };
    changeFloors();
    //add the obstacles//
    const addObstacles = () => {
        $('button.bushBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('bushObstacle');
        });
        $('button.treeBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('treeObstacle');
        });
        $('button.pitBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('pitObstacle');
        });
        $('button.rocksBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('rocksObstacle');
        });
        $('button.barrelBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('barrelObstacle');
        });
        $('button.chestBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('chestObstacle');
        });
        $('button.shipBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('shipObstacle');
        });
        $('button.icebergBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('icebergObstacle');
        });
        $('button.fireBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('fireObstacle');
        });
        $('button.spikeBtn').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('spikeObstacle');
        });


    }
    addObstacles();

    const addCharacters = () => {
        $('button.warriorBtn').click(function(){
            $('#characters').toggleClass('warrior');
        });
        $('button.monsterBtn').click(function(){
            $('#monsters').toggleClass('monster');
        });
    }
    addCharacters();

    //-----------------------------Creating a d20 dice roller. because I'd like to tie this in eventually with the map and characters//
    const dice = {
        sides: 20,
        roll: function () {
        const randomNumber = Math.floor(Math.random() * this.sides) +1; //math.floor uses the lowest possible number, the +1 makes sure it doesn't go as low as 0//
        return randomNumber;
        }
    }
    
    
    
      //Prints dice roll to the page
    
    function printNumber(number) {
        const placeholder = document.getElementById('diceNumber');  //the variable placeholder is just representing the potential number
        placeholder.innerHTML = number; 
    }
    
    const button = document.getElementById('diceButton'); //
    
    button.onclick = function() {
        const result = dice.roll();
        printNumber(result);
    };
// if #floor has class a specific class, have conditional show/hide on options. 
// ie. if #floor has a class of .floorWater, show options for water obstacles, like Sharks, debris, boats, pirate enemies etc.
//have them display=none by default, but when that class is selected, have em display=block
});
//Sorry for the soaking wet code here//
//Also definitely plan on expanding this, as I'm kinda having a lot of fun working on this//