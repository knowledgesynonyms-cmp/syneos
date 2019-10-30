if (typeof ES == 'undefined') {
  ES = {}; //== default namespace
}

(function(){

  class Login {

    constructor(props){
      this.container = props.container;      
    }

    render(){
      $(this.container).html($('#tpl-login').html());

      this.attachEvent();
    }

    validate(frm){

      if(frm.username.value==''){

        alert('Please fill username!');
        frm.username.focus();
        return false;

      } else if(frm.password.value==''){

        alert('Please fill password!');
        frm.password.focus();
        return false;
      }

      return true;
    }

    attachEvent(){
      var oSelf = this;
      var frm = $(this.container).find('form.loginfrm');

      $(frm).bind('submit',function(event){
        
        if(oSelf.validate(this)){
          oSelf.checkLogin(this);
        }
        
        event.preventDefault();
        event.stopPropagation();

        return false;
      });
    }

    checkLogin(frm){
      var oSelf = this;
      var data = $(frm).serialize();
      data += '&action=doLogin';

      $.post('controllers/login.php',data,function(res){

        ES.step='intro'; //== introduction to stimulation        
        ES.next();

      });
    }

    destroy(){
      delete this;
    }

  }

  ES.Login = Login; //== Push this class to namespace ES

}());