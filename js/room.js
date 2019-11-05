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
      $(this.container).hide();
      $(this.container).parent().find('.heading').remove();      
      this.roomDesign();
    }

    roomDesign(){
      this.initRoomView();
      this.initToolbar();
      this.initPan();
      //this.initZoom();      
    }

    initRoomView(){
      var oSelf = this;
      $(this.container).parent().find('#roomHolder').show();

      $(window).resize(function(){
        oSelf.setRoomSize();
      });

      this.setRoomSize();

      $('#roommap').find('.openmodal').click(function(event){
        oSelf.openModal(this);
        event.stopPropagation();
      });
    }

    openModal(area){
      $('#modal').modal();
      $('#modal .modal-body').html('<img class="img-fluid" title="'+$(area).attr('title')+'" src="' + $(area).attr('src') + '" />');
      var shelfObj = {
        type: 'image',
        title: $(area).attr('title'),
        src: $(area).attr('src')
      };
      if(!ES.alreadyOnShelf(shelfObj)){
        $('#modal .modal-footer').html('<button class="btn btn-danger add2shelf"> + </button>');
        $('#modal .modal-footer .add2shelf').bind('click', function(){        
          ES.shelf.push(shelfObj);
          $(this).parent().append('<div class="alert alert-success">Added to shelf</div>');
          $(this).fadeOut();
        });
      }else{
        $('#modal .modal-footer').html('<div class="alert alert-info">Already added to Shelf</div>');
      }
    }

    //== set the room size 
    setRoomSize(){
      $('#roomHolder').height(document.body.offsetHeight-60);
    }

    initToolbar(){      
      $('#roomToolbar').show();
      $('#roomToolbar > .switch').eq(0).bind('click',ES.seeAllRooms);
    }

    initPan(){
      $('#roomPan').show();

      $('#roomPan > #panleft').bind('click',function(){
        var m = parseInt($('#roomImage').css('marginLeft')) + 50;
        if(m > 0){
          m = 0;
        }
        $('#roomImage').css('marginLeft', m);
      });

      $('#roomPan > #panright').bind('click',function(){
        var m = parseInt($('#roomImage').css('marginLeft')) - 50;
        var w1 = $('#roomImage').width();
        var w2 = $('#roomHolder').width();
        if(m*-1 > w1-w2){
          m= (w1-w2)*-1;
        }
        $('#roomImage').css('marginLeft', m);
      });
    }

    initZoom(){
      $('#roomZoom').show();
      $('#btnzoom').bind('change',function(){        
        /*if(this.checked){
          $('#roomImage').css('height',$('#roomImage').width());      
        }else{
          $('#roomImage').css('height','100%');
        }*/
      });
    }

    destroy(){
      delete this;
    }

  }

  

  ES.RoomList = RoomList; //== Push this class to namespace ES
  ES.Room = Room; //== Push this class to namespace ES 

}());
