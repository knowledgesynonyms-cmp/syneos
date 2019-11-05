<div class="container-fluid h-100">
  <div class="roomListBox">
    
    <h2 class="text-center heading m-5">Select a room</h2>
    <div class="row rooms-list mb-5"></div>  

    <div id="roomHolder"><img id="roomImage" src="/images/bg-room-1.png" usemap="#roommap" /></div>
    <map name="roommap" id="roommap">
      <area shape="rect" coords="670,180,710,310" href="sun.htm" title="book binder 1" />
      <area shape="rect" coords="723,180,765,310" href="sun.htm" title="book binder 2" />
      <area shape="rect" coords="775,180,817,310" href="sun.htm" title="book binder 3" />
      <area shape="rect" coords="824,180,866,310" href="sun.htm" title="book binder 4" />
      <area shape="rect" coords="911,416,939,473" src="/images/pills.png" title="Pills" class="openmodal" />
    </map>

    <div id="roomToolbar" style="display:none;" class="row">
      <div id="switch-allrooms" class="switch col text-center"><span class="fa fa-home"><div class="text">All Rooms</div></span></div>
      <div id="switch-roomview" class="switch active col text-center"><span class="fa fa-map-marker"><div class="text">Room View</div></span></div>
      <div id="switch-workarea" class="switch col text-center"><span class="fa fa-edit"><div class="text">Work Area</div></span></div>
    </div>

    <div id="roomPan" class="text-center" style="display:none;">
      <span id="panleft" class="btn fa fa-arrow-left"></span>
      <span id="panright"  class="btn fa fa-arrow-right"></span>
      <div class="text">Pan Across the Room</div>
    </div>

    <div id="roomZoom" class="text-center" style="display:none;">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="btnzoom">
        <label class="custom-control-label" for="btnzoom"></label>
      </div>      
      <div class="text">Toggle Zoom</div>
    </div>

  </div>
</div>

<!-- The Modal -->
<div class="modal fade" id="modal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title"></h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">        
      </div>

    </div>
  </div>
</div>