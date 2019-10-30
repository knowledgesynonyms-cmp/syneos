if (typeof ES == 'undefined') {
  ES = {}; //== default namespace
}

ES.step='login'; //== step added, this is a global variable which will decide the current step
ES.roomId = null; // set and used for "roomView"
ES.totalRooms = 0; // == should be intiated from ES.RoomList.load
ES.roomVisited=[]; //== none as of now

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
    $('#app').html(`<div class="roomListBox container-fluid h-100 p-5 row"></div>`);
    let roomListObj = new ES.RoomList({container: $('#app .roomListBox')});
    roomListObj.load();
  },

  'roomView': function (){
    $('#app .roomListBox').html($('#tpl-room').html());
  } 


})[ES.step]();



(function(){

  ES.next();

}());