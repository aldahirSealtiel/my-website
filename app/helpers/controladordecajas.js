import { marcos, fondos, textos, botellas, medidas,marcoColores, fondoColores} from "./resources.js";

export class controladordeCajas{

    dirbotella;
    dirMarco;
    dirfondo;
    medidacaja;
    cajaMarco;
    cajaFondo;
    familia;
    impresiondepnatalla;
    impresiondepnatalla2;
    data; 
    color;
    textcolor;

    constructor(){
      this.color=0;
    }

    mostrarpantalla(){
        let pantallaCentral=document.querySelector(".pcentral");
        let pantallaSuperior=document.querySelector(".psuperior");

       pantallaCentral.remove();
       let titulopantallas=document.querySelector(".titulopantallas");
       titulopantallas.innerHTML='<h1>UBICA LOS ELEMENTOS DENTRO DEL MARCO<h1>'
       
       
        
             
        pantallaSuperior.insertAdjacentHTML('afterend',`<div class="pcentral">
        <div id="cajaMarcoPrincipal">
          <div id="cajaMarco">
          
          </div>
        </div>
       <div id="cajaColores">
          <div class=controladorCajas2>
            <div>
                <button id="btnRojo" style="background: red;" class="cajaGrid2">
                </button>
            </div>    
            <div>
                <button id="btnAzul" style="background: blue;" class="cajaGrid2">
                </button>
            </div>
                <button id="btnNegro" style="background: black;" class="cajaGrid2">
                </button>
            <div>
                <button id="btnPURPURA" style="background: purple;" class="cajaGrid2">
                </button>
            </div>
            <div>
                <button id="btnVerde" style="background: green;" class="cajaGrid2">
                </button>
            </div>
            <div>
                <button id="btnNaranja" style="background: orange;" class="cajaGrid2">
                </button>
            </div>
            <div>
                <button id="btnDORADO" style="background: #efb810;" class="cajaGrid2">
                </button>
            </div>
            <div>
                <button id="btnPLATA" style="background: #e3e4e5;" class="cajaGrid2">
                </button>
            </div>
            <div>
                <button id="btnBRONCE" style="background: #CD7F32;" class="cajaGrid2">
                </button>
            </div>
          </div>   
       </div> 
       
      
       <canvas id="canvas" style="display: none;"></canvas>
       <canvas id="canvas2" style="display: none;"></canvas>

      </div>
     
   `);
   this.cajaMarco=document.querySelector("#cajaMarco");
   this.cajaMarco.style.display= "none";

   let cajaColores=document.querySelector("#cajaColores");
   //style="display: none;"
   if(this.familia!=null){
    if(this.familia=="platinum"){
      this.agregaeventosparaBotones();
    }else{
      cajaColores.style="display: none;";
    }
   }
   this.agregarmarco();
   this.agregarfondo();
   this.agregartextos();
   this.mostrarimagenes();
   this.agregarevenlistener();
   this.agregarevenlistener2touch();
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }


    mostrarimagenes(){
      let marco= document.querySelector('#img1');
      let fondo= document.querySelector('#img2');


      if(marco!=null){
        this.cajaMarco.style.display= "block";
        console.log(marco);
        console.log(fondo);
      }
      this.agregarevenlistener();
      this.agregarevenlistener2touch();
     
    }

    async checkIfAllImagesCompleted() {
     
      const SLEEP_CHECK = 50;
      // Tiempo de espera entre revisiones en ms
      // Obtiene todas las imágenes sin completar

      let marcolisto=false;
      let fondolisto=false;
      if(img1.height!=0){
        marcolisto=true;
      }
      if(img2.height!=0){
        fondolisto=true;
      }
      if (marcolisto && fondolisto) {
        console.log(img1);
        console.log(img2);
        this.mostrarimagenes();
      } else {
         // Vuelve a iterar si existe alguna sin completar
        
         if(!fondolisto){
            this.recargarfondo();
         }
         await this.sleep(SLEEP_CHECK);
         return this.checkIfAllImagesCompleted();
      } 
      return true;
    }

    recargarfondo(){
      this.cajaFondo.innerHTML=``;
      let newImg = document.createElement("img");
            newImg.id="img2";
            newImg.src =this.dirfondo;
            var scalex=newImg.naturalWidth/this.centimetrosAPixeles(this.medidacaja.ancho);
            var sacaley=newImg.naturalHeight/this.centimetrosAPixeles(this.medidacaja.largo);
            newImg.width=newImg.naturalWidth/scalex;
            newImg.height=newImg.naturalWidth/sacaley;
            newImg.alt = "/imagen" + (this.dirfondo);
            this.cajaFondo.appendChild(newImg);

    }
  
    obtenerimagenes(data){
      this.color=0;
        this.data=data;
        this.dirbotella=botellas[data.indiceBotella-1];
        this.dirMarco=marcos[data.indiceMarco-1];
        this.dirfondo=fondos[data.indiceFondo-1];
        this.medidacaja=medidas[data.indiceBotella-1];
        this.familia=data.familia;
    }
    obtenerimagenesPlatinum(){
      this.dirMarco=marcoColores[this.color][this.data.indiceMarco-1];
      this.dirfondo=fondoColores[this.color][this.data.indiceFondo-1];
    }


    agregaeventosparaBotones(){


      var btnRojo = document.getElementById("btnRojo");
      var btnAzul = document.getElementById("btnAzul");
      var btnNegro = document.getElementById("btnNegro");
      var btnPURPURA = document.getElementById("btnPURPURA");
      var btnVerde = document.getElementById("btnVerde");
      var btnNaranja = document.getElementById("btnNaranja");
      var btnDORADO = document.getElementById("btnDORADO");
      var btnPLATA = document.getElementById("btnPLATA");
      var btnBRONCE = document.getElementById("btnBRONCE");


    btnRojo.addEventListener('click', ()=>{
     
        btnRojo.style.border="8px solid white"
        btnAzul.style.border="none";
        btnNegro.style.border="none";
        btnPURPURA.style.border="none";
        btnVerde.style.border="none"
        btnNaranja.style.border="none";
        btnDORADO.style.border="none";
        btnPLATA.style.border="none";
        btnBRONCE.style.border="none";
        this.cambiaDeColor(1);


    } );
    btnAzul.addEventListener('click', ()=>{
       
      btnRojo.style.border="none"
      btnAzul.style.border="8px solid white";
      btnNegro.style.border="none";
      btnPURPURA.style.border="none";
      btnVerde.style.border="none"
      btnNaranja.style.border="none";
      btnDORADO.style.border="none";
      btnPLATA.style.border="none";
      btnBRONCE.style.border="none";

    } );
    btnNegro.addEventListener('click', ()=>{
        
      btnRojo.style.border="none"
      btnAzul.style.border="none";
      btnNegro.style.border="8px solid white";
      btnPURPURA.style.border="none";
      btnVerde.style.border="none"
      btnNaranja.style.border="none";
      btnDORADO.style.border="none";
      btnPLATA.style.border="none";
      btnBRONCE.style.border="none";

    } );
    btnPURPURA.addEventListener('click', ()=>{
       
      btnRojo.style.border="none"
      btnAzul.style.border="none";
      btnNegro.style.border="none";
      btnPURPURA.style.border="8px solid white";
      btnVerde.style.border="none"
      btnNaranja.style.border="none";
      btnDORADO.style.border="none";
      btnPLATA.style.border="none";
      btnBRONCE.style.border="none";

    } );
    btnVerde.addEventListener('click', ()=>{
     
      btnRojo.style.border="none"
        btnAzul.style.border="none";
        btnNegro.style.border="none";
        btnPURPURA.style.border="none";
        btnVerde.style.border="8px solid white"
        btnNaranja.style.border="none";
        btnDORADO.style.border="none";
        btnPLATA.style.border="none";
        btnBRONCE.style.border="none";

    } );
    btnNaranja.addEventListener('click', ()=>{
     
      btnRojo.style.border="none"
        btnAzul.style.border="none";
        btnNegro.style.border="none";
        btnPURPURA.style.border="none";
        btnVerde.style.border="none"
        btnNaranja.style.border="8px solid white";
        btnDORADO.style.border="none";
        btnPLATA.style.border="none";
        btnBRONCE.style.border="none";

    } );
    btnDORADO.addEventListener('click', ()=>{
      
      btnRojo.style.border="none"
        btnAzul.style.border="none";
        btnNegro.style.border="none";
        btnPURPURA.style.border="none";
        btnVerde.style.border="none"
        btnNaranja.style.border="none";
        btnDORADO.style.border="8px solid white";
        btnPLATA.style.border="none";
        btnBRONCE.style.border="none";
        this.cambiaDeColor(2);

    } );
    btnPLATA.addEventListener('click', ()=>{
     
      btnRojo.style.border="none"
        btnAzul.style.border="none";
        btnNegro.style.border="none";
        btnPURPURA.style.border="none";
        btnVerde.style.border="none"
        btnNaranja.style.border="none";
        btnDORADO.style.border="none";
        btnPLATA.style.border="8px solid white";
        btnBRONCE.style.border="none";

    } );
    btnBRONCE.addEventListener('click', ()=>{
     
      btnRojo.style.border="none"
      btnAzul.style.border="none";
      btnNegro.style.border="none";
      btnPURPURA.style.border="none";
      btnVerde.style.border="none"
      btnNaranja.style.border="none";
      btnDORADO.style.border="none";
      btnPLATA.style.border="none";
      btnBRONCE.style.border="8px solid white";
      
    } );
    }

    cambiaDeColor(color){
      
      this.color=color;
      this.borraelementosBase();
      //this.loader();
      this.obtenerimagenesPlatinum();
      this.agregaelementos();
      this.checkIfAllImagesCompleted();
      
      
    }
    //loader(){
      //this.cajaMarco.innerHTML=`<img class="loading" src=/app/assets/loader.svg></img>`
    //}
    borraelementosBase(){
      this.cajaMarco.innerHTML='';
    }
    agregaelementos(){
        this.borraelementosBase();
        this.cajaMarco.style.display= "none";
        this.agregarmarco();
        this.agregarfondo();
        this.agregartextos();
        
    }

    agregarmarco(){
     
      let heights=this.centimetrosAPixeles(this.medidacaja.largo)*2;
      let widhts=this.centimetrosAPixeles(this.medidacaja.ancho)*2
      this.cajaMarco.style.position='relative';
        this.cajaMarco.style.height=''+heights+'px';
        this.cajaMarco.style.width=''+widhts+'px';
      //this.cajaMarco.setAttribute("style",`position : relative;`);
      if(this.familia=="premium"){
        this.dirMarco="/app/assets/marcovacio.png";
        let newImg = document.createElement("img");
        newImg.id="img1";
        newImg.src =this.dirMarco;
        newImg.width=widhts;
        newImg.height=heights;
        newImg.style.border="8px solid black";
        newImg.alt = "/imagen" + (this.dirMarco);
        this.cajaMarco.appendChild(newImg);
        let canvas=document.querySelector("#canvas");
        canvas.style.width=''+newImg.width+'px';
        canvas.style.height=''+newImg.height+'px';
      }else{
        
        //this.cajaMarco.style.height=""+heights;
        let newImg = document.createElement("img");
              newImg.id="img1";
              newImg.src =this.dirMarco;
              newImg.width=widhts;
              newImg.height=heights;
              newImg.alt = "/imagen" + (this.dirMarco);
              this.cajaMarco.appendChild(newImg);
              let canvas=document.querySelector("#canvas");
              canvas.style.width=''+newImg.width+'px';
              canvas.style.height=''+newImg.height+'px';
      }
      
      
      
    }

    agregarfondo(){
      let divcajaFondo=document.createElement("div");
      divcajaFondo.id="cajaFondo";
      divcajaFondo.setAttribute("style",`
      position : absolute;
      top : 50px;
      left: 50px;
      `);
      
      let newImg = document.createElement("img");
            newImg.id="img2";
            newImg.src =this.dirfondo;
            var scalex=newImg.naturalWidth/this.centimetrosAPixeles(this.medidacaja.ancho);
            var sacaley=newImg.naturalHeight/this.centimetrosAPixeles(this.medidacaja.largo);
            newImg.width=newImg.naturalWidth/scalex;
            newImg.height=newImg.naturalWidth/sacaley;
            newImg.alt = "/imagen" + (this.dirfondo);
            divcajaFondo.appendChild(newImg);
            this.cajaMarco.appendChild(divcajaFondo);
            this.cajaFondo=document.querySelector("#cajaFondo");
    }

    agregartextos(){
     let posision=80;

      

      for(let i = 0; i < 3; i++)
        {
                console.log(textos[i].textoValue);
                if(textos[i].textoValue != "")
                {
                        let newDiv = document.createElement("div");
                        let newText = document.createElement("a");
                        newDiv.id="cajaTexto"+(i);
                        newDiv.style.position="absolute";
                        newDiv.style.top=posision + 'px';
                        newDiv.style.left=posision + 'px';
                        posision=posision+20;
                        newText.id="texto"+(i);
                        newText.style.fontWeight = textos[i].pesoFuente;
                        newText.style.textAlign = textos[i].alineacion;
                        newText.style.fontStyle = textos[i].estiloFuente;
                        newText.style.textTransform = textos[i].transformacionTexto;
                        newText.textContent = textos[i].textoValue;
                        newText.style.fontFamily = textos[i].tipoLetra;
                        newText.style.fontSize = "50px";
                        switch(this.color){
                          case 0:
                            this.textcolor="#d1d1d1";
                            newText.style.color="#d1d1d1";
                          break;
                          case 1:
                            this.textcolor="red";
                            newText.style.color="red";
                          break;
                          case 2:
                            this.textcolor="#efb810";
                            newText.style.color="#efb810";
                          break;

                        }
                        
                        newText.style.cursor="pointer";
                        console.log(newText);
                        newDiv.appendChild(newText);
                        console.log(newDiv);
                        this.cajaMarco.appendChild(newDiv);
                }

        }
    
    }

    agregarevenlistener(){
      var mousePosition;
      var offset1 = [0,0];
      var offset2 = [0,0];
      var offset3 = [0,0];
      var offset4 = [0,0];

      var div;
      var div2;
      var div3;
      var div4;

      var isDown1 = false;
      var isDown2 = false;
      var isDown3 = false;
      var isDown4 = false;


      var fondo=document.querySelector("#cajaFondo");

      var marcoancho=this.centimetrosAPixeles(this.medidacaja.ancho)*2;
      var marcoalto=this.centimetrosAPixeles(this.medidacaja.largo)*2;
      var fondoancho=fondo.firstChild.clientWidth;
      var fondoalto=fondo.firstChild.clientHeight;
      





      //SE AGREGAN LOS VALORES PARA MAPERALOS DENTRO DEL MARCO FONDO.
      div=document.getElementById("cajaFondo");
      div2=document.getElementById("cajaTexto0");
      div3=document.getElementById("cajaTexto1");
      div4=document.getElementById("cajaTexto2");

      

      //SE VERIFICA QUE EXISTAN LAS CAJAS Y SE AGREGA EL EVENTO
      if(div!=null){
        div.addEventListener('mousedown', function(e) {
          isDown1 = true;
          offset1 = [
              div.offsetLeft - e.clientX,
              div.offsetTop - e.clientY
          ];
      }, true);
      }

      if(div2!=null){
        var anchocajaTexto0=div2.firstChild.offsetWidth;
        var altocajaTexto0=div2.firstChild.offsetHeight;
        div2.addEventListener('mousedown', function(e) {
          isDown2 = true;
          offset2 = [
              div2.offsetLeft - e.clientX,
              div2.offsetTop - e.clientY
          ];
      }, true);
      }

      if(div3!=null){
        var anchocajaTexto1=div3.firstChild.offsetWidth;
        var altocajaTexto1=div3.firstChild.offsetHeight;
        div3.addEventListener('mousedown', function(e) {
          isDown3 = true;
          offset3 = [
              div3.offsetLeft - e.clientX,
              div3.offsetTop - e.clientY
          ];
      }, true);
      }

      if(div4!=null){
        var anchocajaTexto2=div4.firstChild.offsetWidth;
        var altocajaTexto2=div4.firstChild.offsetHeight;
        div4.addEventListener('mousedown', function(e) {
          isDown4 = true;
          offset4 = [
              div4.offsetLeft - e.clientX,
              div4.offsetTop - e.clientY
          ];
      }, true);
      }

     
    
    
    
    document.addEventListener('mouseup', function() {
        isDown1 = false;
        isDown2 = false;
        isDown3 = false;
        isDown4 = false;
    }, true);
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown1) {
            mousePosition = {
        
                x : event.clientX,
                y : event.clientY
        
            };
            if((mousePosition.x + offset1[0])<0){
              div.style.left = 0;
            }else{
              if((mousePosition.x + offset1[0]+fondoancho)>marcoancho){
                div.style.left = marcoancho;
              }else{
                div.style.left = (mousePosition.x + offset1[0]) + 'px';
              }
            }
            if((mousePosition.y + offset1[1])<0){
                div.style.top  = 0 ;
            }else{
              if((mousePosition.y + offset1[1]+fondoalto)>marcoalto){
                  div.style.top  = marcoalto ;
              }else{
                  div.style.top  = (mousePosition.y + offset1[1]) + 'px';
              }
            }
            
            
            
            
        }
        if (isDown2) {
           mousePosition = {
            
             x : event.clientX,
             y : event.clientY
            
         };
         if((mousePosition.x + offset2[0])<0){
           div2.style.left = 0;
         }else{
           if((mousePosition.x + offset2[0]+anchocajaTexto0)>marcoancho){
            div2.style.left = marcoancho;
           }else{
            div2.style.left = (mousePosition.x + offset2[0]) + 'px';
           }
         }
         if((mousePosition.y + offset2[1])<0){
          div2.style.top  = 0 ;
         }else{
           if((mousePosition.y + offset2[1]+altocajaTexto0)>marcoalto){
            div2.style.top  = marcoalto ;
           }else{
            div2.style.top  = (mousePosition.y + offset2[1]) + 'px';
           }
         }
          
        }

        if (isDown3) {
          mousePosition = {
           
            x : event.clientX,
            y : event.clientY
           
        };
        if((mousePosition.x + offset3[0])<0){
          div3.style.left = 0;
        }else{
          if((mousePosition.x + offset3[0]+anchocajaTexto1)>marcoancho){
            div3.style.left = marcoancho;
          }else{
            div3.style.left = (mousePosition.x + offset3[0]) + 'px';
          }
        }
        if((mousePosition.y + offset3[1])<0){
          div3.style.top  = 0 ;
        }else{
          if((mousePosition.y + offset3[1]+altocajaTexto1)>marcoalto){
            div3.style.top  = marcoalto ;
          }else{
            div3.style.top  = (mousePosition.y + offset3[1]) + 'px';
          }
        }
         
       }


       if (isDown4) {
        mousePosition = {
         
          x : event.clientX,
          y : event.clientY
         
      };
      if((mousePosition.x + offset4[0])<0){
        div4.style.left = 0;
      }else{
        if((mousePosition.x + offset4[0]+anchocajaTexto2)>marcoancho){
          div4.style.left = marcoancho;
        }else{
          div4.style.left = (mousePosition.x + offset4[0]) + 'px';
        }
      }
      if((mousePosition.y + offset4[1])<0){
        div4.style.top  = 0 ;
      }else{
        if((mousePosition.y + offset4[1]+altocajaTexto2)>marcoalto){
          div4.style.top  = marcoalto ;
        }else{
          div4.style.top  = (mousePosition.y + offset4[1]) + 'px';
        }
      }
       
     }
        
        
    }, true);

  

    }

    agregarevenlistener2touch(){
      var offset1 = [0,0];
      var offset2 = [0,0];
      var offset3 = [0,0];
      var offset4 = [0,0];

      var div;
      var div2;
      var div3;
      var div4;

      var isDown1 = false;
      var isDown2 = false;
      var isDown3 = false;
      var isDown4 = false;


      var fondo=document.querySelector("#cajaFondo");

      var marcoancho=this.centimetrosAPixeles(this.medidacaja.ancho)*2;
      var marcoalto=this.centimetrosAPixeles(this.medidacaja.largo)*2;
      var fondoancho=fondo.firstChild.clientWidth;
      var fondoalto=fondo.firstChild.clientHeight;
      





      //SE AGREGAN LOS VALORES PARA MAPERALOS DENTRO DEL MARCO FONDO.
      div=document.getElementById("cajaFondo");
      div2=document.getElementById("cajaTexto0");
      div3=document.getElementById("cajaTexto1");
      div4=document.getElementById("cajaTexto2");

      

      //SE VERIFICA QUE EXISTAN LAS CAJAS Y SE AGREGA EL EVENTO
      if(div!=null){
        div.addEventListener('touchstart', function(e) {
          isDown1 = true;
          const touch = e.changedTouches[0];
          offset1 = [
              div.offsetLeft - touch.clientX,
              div.offsetTop - touch.clientY
          ];
      }, true);
      }

      if(div2!=null){
        var anchocajaTexto0=div2.firstChild.offsetWidth;
        var altocajaTexto0=div2.firstChild.offsetHeight;
        div2.addEventListener('touchstart', function(e) {
          isDown2 = true;
          const touch = e.changedTouches[0];
          offset2 = [
              div2.offsetLeft - touch.clientX,
              div2.offsetTop - touch.clientY
          ];
      }, true);
      }

      if(div3!=null){
        var anchocajaTexto1=div3.firstChild.offsetWidth;
        var altocajaTexto1=div3.firstChild.offsetHeight;
        div3.addEventListener('touchstart', function(e) {
          isDown3 = true;
          const touch = e.changedTouches[0];
          offset3 = [
              div3.offsetLeft - touch.clientX,
              div3.offsetTop - touch.clientY
          ];
      }, true);
      }

      if(div4!=null){
        var anchocajaTexto2=div4.firstChild.offsetWidth;
        var altocajaTexto2=div4.firstChild.offsetHeight;
        div4.addEventListener('touchstart', function(e) {
          isDown4 = true;
          const touch = e.changedTouches[0];
          offset4 = [
              div4.offsetLeft - touch.clientX,
              div4.offsetTop - touch.clientY
          ];
      }, true);
      }

     
    
    
    
    document.addEventListener('touchend', function() {
        isDown1 = false;
        isDown2 = false;
        isDown3 = false;
        isDown4 = false;
    }, true);
    
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
        if (isDown1) {
          const touch = event.changedTouches[0];
            if((touch.clientX + offset1[0])<0){
              div.style.left = 0;
            }else{
              if((touch.clientX + offset1[0]+fondoancho)>marcoancho){
                div.style.left = marcoancho;
              }else{
                div.style.left = (touch.clientX + offset1[0]) + 'px';
              }
            }
            if((touch.clientY + offset1[1])<0){
                div.style.top  = 0 ;
            }else{
              if((touch.clientY + offset1[1]+fondoalto)>marcoalto){
                  div.style.top  = marcoalto ;
              }else{
                  div.style.top  = (touch.clientY + offset1[1]) + 'px';
              }
            }
            
            
            
            
        }
        if (isDown2) {
          const touch = event.changedTouches[0];
         if((touch.clientX + offset2[0])<0){
           div2.style.left = 0;
         }else{
           if((touch.clientX + offset2[0]+anchocajaTexto0)>marcoancho){
            div2.style.left = marcoancho;
           }else{
            div2.style.left = (touch.clientX + offset2[0]) + 'px';
           }
         }
         if((touch.clientY + offset2[1])<0){
          div2.style.top  = 0 ;
         }else{
           if((touch.clientY + offset2[1]+altocajaTexto0)>marcoalto){
            div2.style.top  = marcoalto ;
           }else{
            div2.style.top  = (touch.clientY + offset2[1]) + 'px';
           }
         }
          
        }

        if (isDown3) {
          const touch = event.changedTouches[0];
        if((touch.clientX + offset3[0])<0){
          div3.style.left = 0;
        }else{
          if((touch.clientX + offset3[0]+anchocajaTexto1)>marcoancho){
            div3.style.left = marcoancho;
          }else{
            div3.style.left = (touch.clientX + offset3[0]) + 'px';
          }
        }
        if((touch.clientY + offset3[1])<0){
          div3.style.top  = 0 ;
        }else{
          if((touch.clientY + offset3[1]+altocajaTexto1)>marcoalto){
            div3.style.top  = marcoalto ;
          }else{
            div3.style.top  = (touch.clientY + offset3[1]) + 'px';
          }
        }
         
       }


       if (isDown4) {
        const touch = event.changedTouches[0];
      if((touch.clientX + offset4[0])<0){
        div4.style.left = 0;
      }else{
        if((touch.clientX + offset4[0]+anchocajaTexto2)>marcoancho){
          div4.style.left = marcoancho;
        }else{
          div4.style.left = (touch.clientX + offset4[0]) + 'px';
        }
      }
      if((touch.clientY + offset4[1])<0){
        div4.style.top  = 0 ;
      }else{
        if((touch.clientY + offset4[1]+altocajaTexto2)>marcoalto){
          div4.style.top  = marcoalto ;
        }else{
          div4.style.top  = (touch.clientY + offset4[1]) + 'px';
        }
      }
       
     }
        
        
    }, true);

  

    }

    centimetrosAPixeles = (centimetros) => {
      //1px = 0.026458 cm;
      const centimetrosPorPulgada = centimetros / 0.026458;
      return centimetrosPorPulgada;
    }

    crearimagen(){
      var cajaMarcos=document.querySelector("#cajaMarco");
      var img1 = document.getElementById('img1');
      var img2 = document.getElementById('img2');
      var a0= document.getElementById('texto0');
      var a1= document.getElementById('texto1');
      var a2= document.getElementById('texto2');

      
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var top=this.cajaFondo.offsetTop;
      var left=this.cajaFondo.offsetLeft;
      
      canvas.width=img1.naturalWidth;
      canvas.height=img1.naturalHeight;
      var scalex=canvas.width/img1.clientWidth;
      var sacaley=canvas.height/img1.clientHeight;
        context.globalAlpha = 1.0;
        context.drawImage(img1, 0, 0);
        context.globalAlpha = 1.0; //Remove if pngs have alpha
        context.drawImage(img2, left*scalex, top*sacaley,img2.clientWidth*scalex,img2.clientHeight*sacaley);

        if(a0!=null){
          var CAJAa0= document.getElementById('cajaTexto0');
          var a0top=CAJAa0.offsetTop;
          var a0left=CAJAa0.offsetLeft;

        
          /**
           * newText.style.fontWeight = textos[i].pesoFuente;
                        newText.style.textAlign = textos[i].alineacion;
                        newText.style.fontStyle = textos[i].estiloFuente;
                        newText.style.textTransform = textos[i].transformacionTexto;
                        newText.textContent = textos[i].textoValue;
                        newText.style.fontFamily = textos[i].tipoLetra;
                        newText.style.fontSize = "30px";
                        newText.style.color="#dcdcdc"; */

                        //Son 6px mas del fontSize para el dibujo\
          var weight=a0.style.fontWeight;
          var fonta0=a0.style.fontStyle+` `+900+` `+(this.transformpx2number(a0.style.fontSize)*1.3)+`px `+a0.style.fontFamily;
          context.fillStyle=this.textcolor;
          let nuevoTexto;
          if(a0.style.textTransform!=""){
            nuevoTexto =this.checkTextTransform(a0.style.textTransform,a0.textContent);
          }else{
            nuevoTexto=a0.textContent;
          }
          context.textRendering = "geometricPrecision";
          context.font = fonta0;
          context.letterSpacing = "8px";
          context.globalAlpha = 1.0;
          context.fillText(nuevoTexto,a0left*scalex, (a0top*sacaley)+a0.offsetHeight);
        }
        if(a1!=null){
          var CAJAa0= document.getElementById('cajaTexto1');
          var a0top=CAJAa0.offsetTop;
          var a0left=CAJAa0.offsetLeft;

          var fonta0=``+a1.style.fontWeight+` `+900+` `+(this.transformpx2number(a1.style.fontSize)*1.3)+`px `+a1.style.fontFamily;
          context.fillStyle=this.textcolor;
          let nuevoTexto;
          if(a1.style.textTransform!=""){
            nuevoTexto =this.checkTextTransform(a1.style.textTransform,a1.textContent);
          }else{
            nuevoTexto=a1.textContent;
          }
          context.textRendering = "geometricPrecision";
          context.font = fonta0;
          context.letterSpacing = "8px";
          context.globalAlpha = 1.0;
          context.fillText(nuevoTexto,a0left*scalex, (a0top*sacaley)+a1.offsetHeight);
        }
        if(a2!=null){
          var CAJAa0= document.getElementById('cajaTexto2');
          var a0top=CAJAa0.offsetTop;
          var a0left=CAJAa0.offsetLeft;

          var fonta0=``+a2.style.fontWeight+` `+900+` `+(this.transformpx2number(a2.style.fontSize)*1.3)+`px `+a2.style.fontFamily;
          context.fillStyle=this.textcolor;
          let nuevoTexto;
          if(a2.style.textTransform!=""){
            nuevoTexto =this.checkTextTransform(a2.style.textTransform,a2.textContent);
          }else{
            nuevoTexto=a2.textContent;
          }
          context.textRendering = "geometricPrecision";
          context.font = fonta0;
          context.letterSpacing = "8px";
          context.globalAlpha = 1.0;
          context.fillText(nuevoTexto,a0left*scalex, (a0top*sacaley)+a2.offsetHeight);
        }



        this.impresiondepnatalla=canvas;

    }



    crearimagen2(){
      var cajaMarcos=document.querySelector("#cajaMarco");
      var img1 = document.getElementById('img1');
      var img2 = document.getElementById('img2');
      var a0= document.getElementById('texto0');
      var a1= document.getElementById('texto1');
      var a2= document.getElementById('texto2');

      
      var canvas = document.getElementById('canvas2');
      var context = canvas.getContext('2d');
      var top=this.cajaFondo.offsetTop;
      var left=this.cajaFondo.offsetLeft;
      
      canvas.width=img1.naturalWidth;
      canvas.height=img1.naturalHeight;
      var scalex=canvas.width/img1.clientWidth;
      var sacaley=canvas.height/img1.clientHeight;
        context.globalAlpha = 1.0;
        context.drawImage(img1, 0, 0);
        context.globalAlpha = 1.0; //Remove if pngs have alpha
        context.drawImage(img2, left*scalex, top*sacaley,img2.clientWidth*scalex,img2.clientHeight*sacaley);

        if(a0!=null){
          var CAJAa0= document.getElementById('cajaTexto0');
          var a0top=CAJAa0.offsetTop;
          var a0left=CAJAa0.offsetLeft;

        
          /**
           * newText.style.fontWeight = textos[i].pesoFuente;
                        newText.style.textAlign = textos[i].alineacion;
                        newText.style.fontStyle = textos[i].estiloFuente;
                        newText.style.textTransform = textos[i].transformacionTexto;
                        newText.textContent = textos[i].textoValue;
                        newText.style.fontFamily = textos[i].tipoLetra;
                        newText.style.fontSize = "30px";
                        newText.style.color="#dcdcdc"; */

                        //Son 6px mas del fontSize para el dibujo\
          var weight=a0.style.fontWeight;
          var fonta0=a0.style.fontStyle+` `+900+` `+(this.transformpx2number(a0.style.fontSize)*1.3)+`px `+a0.style.fontFamily;
          context.fillStyle=this.textcolor;
          let nuevoTexto;
          if(a0.style.textTransform!=""){
            nuevoTexto =this.checkTextTransform(a0.style.textTransform,a0.textContent);
          }else{
            nuevoTexto=a0.textContent;
          }
          context.textRendering = "geometricPrecision";
          context.font = fonta0;
          context.letterSpacing = "8px";
          context.globalAlpha = 1.0;
          context.fillText(nuevoTexto,a0left*scalex, (a0top*sacaley)+a0.offsetHeight);
        }
        if(a1!=null){
          var CAJAa0= document.getElementById('cajaTexto1');
          var a0top=CAJAa0.offsetTop;
          var a0left=CAJAa0.offsetLeft;

          var fonta0=``+a1.style.fontWeight+` `+900+` `+(this.transformpx2number(a1.style.fontSize)*1.3)+`px `+a1.style.fontFamily;
          context.fillStyle=this.textcolor;
          let nuevoTexto;
          if(a1.style.textTransform!=""){
            nuevoTexto =this.checkTextTransform(a1.style.textTransform,a1.textContent);
          }else{
            nuevoTexto=a1.textContent;
          }
          context.textRendering = "geometricPrecision";
          context.font = fonta0;
          context.letterSpacing = "8px";
          context.globalAlpha = 1.0;
          context.fillText(nuevoTexto,a0left*scalex, (a0top*sacaley)+a1.offsetHeight);
        }
        if(a2!=null){
          var CAJAa0= document.getElementById('cajaTexto2');
          var a0top=CAJAa0.offsetTop;
          var a0left=CAJAa0.offsetLeft;

          var fonta0=``+a2.style.fontWeight+` `+900+` `+(this.transformpx2number(a2.style.fontSize)*1.3)+`px `+a2.style.fontFamily;
          context.fillStyle=this.textcolor;
          let nuevoTexto;
          if(a2.style.textTransform!=""){
            nuevoTexto =this.checkTextTransform(a2.style.textTransform,a2.textContent);
          }else{
            nuevoTexto=a2.textContent;
          }
          context.textRendering = "geometricPrecision";
          context.font = fonta0;
          context.letterSpacing = "8px";
          context.globalAlpha = 1.0;
          context.fillText(nuevoTexto,a0left*scalex, (a0top*sacaley)+a2.offsetHeight);
        }


        this.impresiondepnatalla2=canvas;

    }

    transformpx2number(px){
      let number;

      let newStr=px.substring(0,px.length-2);
      number=parseInt(newStr);
      return number;

    }

    checkTextTransform(textTransform,texto){
      let textotransformado;
      switch(textTransform){
        case "uppercase":
          textotransformado=texto.toUpperCase();
          break;
        case "lowercase":
        textotransformado=texto.toLowerCase();
        break;
        case "capitalize":
          textotransformado=texto;
        break;
      }
      return textotransformado;
    }



    

}