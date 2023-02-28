export class controladorCorreo{




    constructor(){

    }

    mostrarpantalla(){
        let pantallaCentral=document.querySelector(".pcentral");
        let pantallaSuperior=document.querySelector(".psuperior");

       pantallaCentral.remove();
       
       let titulopantallas=document.querySelector(".titulopantallas");
      titulopantallas.remove();
        
             
        pantallaSuperior.insertAdjacentHTML('afterend',`<div class="pcentral">
        <div class="main-container">
            <div class="left-part">
              <i class="fas fa-envelope"></i>
              <i class="fas fa-at"></i>
              <i class="fas fa-mail-bulk"></i>
            </div>
            <form action="/">
              <h1>Contact Us</h1>
              <div class="info">
                <input class="fname" type="text" name="name" placeholder="Full name">
                <input type="text" name="name" placeholder="Email">
                <input type="text" name="name" placeholder="Phone number">
              </div>
              <p>Message</p>
              <div>
                <textarea rows="2"></textarea>
              </div>
            </form>
          </div>
      </div>
   `);
    }

}