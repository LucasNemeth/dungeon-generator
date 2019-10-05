//Doc ready
$(function(){
//We're going to be doing a dungeon generator for tabletop games. Something simple to essentially have the layout.
    const changeFloors = () => {
        $('button.floorGrass').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorGrass');
        });
        $('button.floorRocks').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorRocks');
        });
        $('button.floorWood').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWood');
        });
        $('button.floorWater').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorWater');
        });
        $('button.floorLava').click(function(){
            $('#floor').removeClass();
            $('#floor').addClass('floorLava');
        });
    }
    changeFloors();


});