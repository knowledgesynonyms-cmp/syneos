if (typeof ES == 'undefined') {
  ES = {}; //== default namespace
}

ES.step='login'; //== step added, this is a global variable which will decide the current step
ES.roomId = null; // set and used for "roomView"
ES.totalRooms = 0; // == should be intiated from ES.RoomList.load
ES.roomVisited=[]; //== none as of now
ES.timebarObj = null;
ES.pauseTimerObj = new ES.PauseTimer({container: $('#pauseTimer')});

//== global function available to ES namespace
ES.next = () => ({
    
  'login': function(){
    let loginObj = new ES.Login({container: $('#app')});
    loginObj.render();
  },

  'intro': function(){  
    $('#app').html($('#tpl-intro').html());
    $('#app').find('.box').removeClass('d-none').hide().fadeIn();
    $('#app').find('.btn-cont').bind('click',() => {
      ES.step='roomList'; //== list of rooms to be chosen
      ES.next();
    });
  },

  'roomList': function (){    
    //== attach the simulation timebar
    $('#root').append($('#tpl-timebar').html());
    $('#tpl-timebar').remove();
    ES.timebarObj = new ES.TimeBar({
      container: $('#root > .timebar')
    });
    $('#app').html($('#tpl-room').html());    
    let roomListObj = new ES.RoomList({container: $('#app div.roomListBox > .row')});
    roomListObj.load();
  },

  'roomView': function (){
    $('#app .roomListBox').html($('#tpl-room').html());
  } 


})[ES.step]();



(function(){

  ES.next();

}());