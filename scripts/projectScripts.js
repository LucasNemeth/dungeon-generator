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
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsStone').show();
        });
        $('button.floorWood').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWood');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsWood').show();
        });
        $('button.floorWater').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWater');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsWater').show();
        });
        $('button.floorLava').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorLava');
            $('.obstacleOptions div').hide();
            $('.obstacleOptionsLava').show();
        });

    };
    changeFloors();
    //add the obstacles//
    const addObstacles = () => {
        $('button.bushObstacle').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('bushObstacle');
        });
        $('button.treeObstacle').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('treeObstacle');
        });
        $('button.pitObstacle').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('pitObstacle');
        });
        $('button.rocksObstacle').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('rocksObstacle');
        });
        $('button.barrelObstacle').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('barrelObstacle');
        });
        $('button.chestObstacle').click(function(){
            $('#obstacles').removeClass();
            $('#obstacles').addClass('chestObstacle');
        });
    }
    addObstacles();
// if #floor has class a specific class, have conditional show/hide on options. 
// ie. if #floor has a class of .floorWater, show options for water obstacles, like Sharks, debris, boats, pirate enemies etc.
//have them display=none by default, but when that class is selected, have em display=block
});
//Sorry for the soaking wet code here//
//Also definitely plan on expanding this, as I'm kinda having a lot of fun working on this//