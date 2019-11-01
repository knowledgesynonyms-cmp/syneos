if (typeof ES == 'undefined') {
  ES = {}; //== default namespace
}

(function(){

  class RoomList {

    constructor(props){
      this.container = props.container;      
    }

    load(){
      var oSelf = this;
      $.get('controllers/room.php?action=fetchRoomList',function(res){
        oSelf.render(res.data);
      },'json');
    }

    render(rooms){
      var oSelf = this;

      this.roomObjs = rooms.map((room) => new ES.Room({
        container: this.container, 
        data: room      
      }));

      this.roomObjs.forEach((roomObj) => {
        roomObj.renderListView();
      });

      $(this.container).find('.clickableRooms').bind('click', (ele) => {                
        var roomObj = this.getRoomObjById($(ele.target).attr('roomid'));
        roomObj.onClick();
      });
    }

    getRoomObjById(id){
      return this.roomObjs.filter((room) => room.data.id==id)[0];
    }

    destroy(){
      delete this;
    }

  }


  class Room {

    constructor(props){
      this.container = props.container;      
      this.data = props.data;      
    }

    renderListView(){

      var oSelf = this;

      $(this.container).append(`
        <div class="col-sm-3 p-3">
          <div class="box h-100 text-center clickableRooms" roomid="${this.data.id}">
            ${this.data.name}
          </div>
        </div>
      `);
    }

    onClick(){
      ES.step='roomView'; //== set to room view now
      ES.roomVisited.push(this);
      ES.next(); //== got the template      
    }

    initBar(){
                       
      //== time ticker to start here for the room via another class object which handles time factor
    }   

    destroy(){
      delete this;
    }

  }


  class TimeBar {

    constructor(props){
      this.container = props.container;      
      this.timer = 0;      //== in seconds
      this.init();
    }

    start(){
      $(this.container).show();
      this.play();
    }

    init(){      
      var oSelf = this;
      
      this.start();

      $(this.container).find('.playpause').bind('click',function(){
        oSelf.playPause();
      });
    }

    playPause(){      
      this.isTicking() ? this.pause(): this.play();
    }

    pause(){
      $(this.container).hide();      
      ES.pauseTimerObj.start();      
      window.clearInterval(this.ticker);
      this.ticker = false;
      this.refresh();
    }

    play(){
      var icon = 'fa-play-o';

      var oSelf = this;

      this.ticker = window.setInterval(function(){
        oSelf.tick();
      },1000);
      this.refresh();
    }

    isTicking(){
      return this.ticker;
    }

    tick(){
      this.timer+=1;
      this.refresh();
    }

    refresh(){
      $(this.container).find('.ticker').html(this.getTime());      

      if(this.isTicking()){
        $(this.container).find('.playpause').removeClass('fa-play-circle-o');
        $(this.container).find('.playpause').addClass('fa-pause-circle-o');
      }else{        
        $(this.container).find('.playpause').removeClass('fa-pause-circle-o');
        $(this.container).find('.playpause').addClass('fa-play-circle-o');
      }
    }

    getTime(){
      var dt = new Date();
      var tz = dt.getTimezoneOffset()*60;
      dt.setHours(0);
      dt.setMinutes(0);
      dt.setSeconds(this.timer-tz);
      dt = dt.toISOString();
      dt = dt.substring(dt.indexOf('T')+1,dt.lastIndexOf('.'));
      //dt = dt.split(':');
      return dt;
    }

    onTick(){
      
    }
  }


  class PauseTimer {

    constructor(props){
      this.container = props.container;      
      this.timer = 0;      //== in seconds
      this.ticker = false;
      this.init();
    }

    start(){
      $('#pauseTimer').fadeIn();
      this.play();
    }

    init(){      
      var oSelf = this;
      $(this.container).find('.playtimer').bind('click',function(){
        oSelf.pause();
        ES.timebarObj.start();
      });
    }

    pause(){
      $(this.container).hide();            
      window.clearInterval(this.ticker);
      this.ticker = false;      
    }

    play(){
      var icon = 'fa-play-o';

      var oSelf = this;

      this.ticker = window.setInterval(function(){
        oSelf.tick();
      },1000);
      this.refresh();
    }

    isTicking(){
      return this.ticker;
    }

    tick(){
      this.timer+=1;
      this.refresh();
    }

    refresh(){
      $(this.container).find('.ticker').html(this.getTime());
    }

    getTime(){
      var dt = new Date();
      var tz = dt.getTimezoneOffset()*60;
      dt.setHours(0);
      dt.setMinutes(0);
      dt.setSeconds(this.timer-tz);
      dt = dt.toISOString();
      dt = dt.substring(dt.indexOf('T')+4,dt.lastIndexOf('.'));
      //dt = dt.split(':');
      return dt;
    }

    onTick(){
      
    }
  }

  ES.RoomList = RoomList; //== Push this class to namespace ES
  ES.Room = Room; //== Push this class to namespace ES
  ES.TimeBar = TimeBar; //== push this class to namespace ES
  ES.PauseTimer = PauseTimer; //== push this class to namespace ES

}());
