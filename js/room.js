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
      this.showRoom();
      //ES.next(); //== got the template      == not needed
    }

    showRoom(){
      $(this.container).html();
    }

    destroy(){
      delete this;
    }

  }

  

  ES.RoomList = RoomList; //== Push this class to namespace ES
  ES.Room = Room; //== Push this class to namespace ES 

}());
