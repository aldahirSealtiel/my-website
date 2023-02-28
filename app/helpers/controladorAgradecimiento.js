export class controladorAgradecimiento{




    constructor(){

    }

    mostrarpantalla(){
        let pantallaCompleta=document.querySelector("#root");
        this.cleanroot();
       
            
        
             
        pantallaCompleta.insertAdjacentHTML('afterbegin',`<section id="primeraPantalla">
        <div class="psuperior">
          <div id="logopsuperior">
              <img src="/app/assets/logo-white.png" alt="Logotipo Don Ramon Personalizado">
          </div>
              <div class="titulopantallas">
                  <h1></h1>
              </div>
        </div>  
        <div class="pcentral-agradecimiento">
          <div id="main-container-agradecimiento">
              <h1 id="agradecer" class="h1">AGRADECEMOS TU PREFERENCIA</h1>
              <h1 id="espera" class="h1">ESPERAMOS VERTE PRONTO</h1>
          </div>
        </div>
        <div class="pinferior-agradecimiento">
          <div id="continuarflujo">
             
          </div>
        </div>
  </section>
   `);
    }

    cleanroot(){
        document.getElementById("root").innerHTML=``;
    }
    

}