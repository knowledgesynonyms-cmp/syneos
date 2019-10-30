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

      ES.totalRooms = rooms.length; //== Set total rooms available

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
      this.initBar();
    }

    initBar(){
      console.log($(this.container).html());
      $(this.container).find('span.room-visited').eq(0).html(ES.roomVisited.length);
      $(this.container).find('span.room-total').eq(0).html(ES.totalRooms);

      this.timeTicker = new ES.TimeTicker({
        container: $(this.container).find('span.timeticker'), 
        onTimeout: function(){
          alert("Timed out");
        }
      });      
      //== time ticker to start here for the room via another class object which handles time factor
    }   

    destroy(){
      delete this;
    }

  }


  class TimeTicker {

    constructor(){
      this.container = props.container;      
      this.onTimeout = props.onTimeout; 
      this.init();
    }

    init(){
      var oSelf = this;
      this.ticker = window.setTimeout(function(){
        oSelf.onTick();
      },1000);
    }

    onTick(){
      
    }
  }

  ES.RoomList = RoomList; //== Push this class to namespace ES
  ES.Room = Room; //== Push this class to namespace ES
  ES.TimeTicker = TimeTicker; //== push this class to namespace ES

}());
