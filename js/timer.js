if (typeof ES == 'undefined') {
  ES = {}; //== default namespace
}

(function(){

  class TimeBase {

    constructor(){      
      this.timer = 0;      //== in seconds
      this.ticker = false;
    }

    isTicking(){
      return this.ticker;
    }

    tick(){
      this.timer+=1;
      this.refresh();
    }

    refresh(){
      //== handle in extended classes
    }

    pause(){
      $(this.container).hide();            
      window.clearInterval(this.ticker);
      this.ticker = false;      
    }

    play(){
      var oSelf = this;

      this.ticker = window.setInterval(function(){
        oSelf.tick();
      },1000);
      this.refresh();
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

  }


  class TimeBar extends TimeBase {

    constructor(props){
      super();
      this.container = props.container;            
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

      $(this.container).find('.helpbtn').bind('click',function(){
        $('#window-help').fadeIn();
        oSelf.hide();
      });
      
      $('#window-help').find('.hidehelp').bind('click',function(){
        $('#window-help').fadeOut();
        oSelf.show();
      });

      $(this.container).find('.btn-complete').bind('click',function(){
        $('#window-complete').fadeIn();        
        oSelf.hide();
      });

      $('#window-complete').find('.btn-goback').bind('click',function(){
        $('#window-complete').fadeOut();
        oSelf.show();
      });


    }

    hide(){
      $(this.container).hide();
    }

    show(){
      $(this.container).show();
    }

    playPause(){      
      this.isTicking() ? this.pause(): this.play();
    }

    pause(){
      super.pause();
      ES.pauseTimerObj.start();      
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
  }


  class PauseTimer extends TimeBase {

    constructor(props){
      super();
      this.container = props.container;            
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

    refresh(){
      $(this.container).find('.ticker').html(this.getTime());
    }

    getTime(){
      var dt = super.getTime();
      return dt.substring(3);
    }

  }


  ES.TimeBar = TimeBar; //== push this class to namespace ES
  ES.PauseTimer = PauseTimer; //== push this class to namespace ES

}());