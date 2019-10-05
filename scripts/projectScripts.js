//Doc ready
$(function(){
//We're going to be doing a dungeon generator for tabletop games. Something simple to essentially have the layout.
    const changeFloors = () => {
        $('button.floorGrass').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorGrass');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsGrass').show();
        });
        $('button.floorStone').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorStone');
            $('#obstacleOptions div').hide();
        });
        $('button.floorWood').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWood');
            $('#obstacleOptions div').hide();
        });
        $('button.floorWater').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWater');
            $('#obstacleOptions div').hide();
        });
        $('button.floorLava').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorLava');
            $('#obstacleOptions div').hide();
        });

    }
    changeFloors();

// if #floor has class a specific class, have conditional show/hide on options. 
// ie. if #floor has a class of .floorWater, show options for water obstacles, like Sharks, debris, boats, pirate enemies etc.
//have them display=none by default, but when that class is selected, have em display=block
});
//Sorry for the soaking wet code here//