import {botellassingrabado, textos } from "./resources.js";

export class controladorPrevisualizacion{

    pantallaamostrar;
    etiuquetamostrar;
    dirbotella;
    indiceBotella;
    data;

    constructor(){

    }

    mostrarpantalla(){
        let pantallaCentral=document.querySelector(".pcentral");
        let pantallaSuperior=document.querySelector(".psuperior");

       pantallaCentral.remove();

       let titulopantallas=document.querySelector(".titulopantallas");
       if(titulopantallas==null){
        let logotitulo=document.querySelector("#logopsuperior");
        logotitulo.insertAdjacentHTML('afterend',` <div class="titulopantallas">
            
        </div>`);
       }else{
        titulopantallas.innerHTML='<h1>VISUALIZACION DE LA ETIQUETA DE LA BOTELLA<h1>'
       }
       
            
        
             
        pantallaSuperior.insertAdjacentHTML('afterend',`<div class="pcentral" id="pcentralprevis">
        <div id="botella">
        </div>
        <div id="etiqueta">
        </div>
      </div>
    
   `);
      this.mostrarimagen();
      this.agregaretiqueta();
     
    }
    agregartextosExtra(){
      this.agregartextoizquierdo();
      this.agregartextoderecho();

    }

    agregartextoizquierdo(){

      /*newText.id="texto"+(i);
                        newText.style.fontWeight = textos[i].pesoFuente;
                        newText.style.textAlign = textos[i].alineacion;
                        newText.style.fontStyle = textos[i].estiloFuente;
                        newText.style.textTransform = textos[i].transformacionTexto;
                        newText.textContent = textos[i].textoValue;
                        newText.style.fontFamily = textos[i].tipoLetra;
                        newText.style.fontSize = "50px";*/
      
      let textoizquierda=textos[3];
      var fonta0=textoizquierda.estiloFuente+` `+200+` `+(this.transformpx2number("50px")*1.3)+`px `+textoizquierda.tipoLetra;
      var canvasizquierdo=document.createElement("canvas");
      canvasizquierdo.style.width="800px";
      canvasizquierdo.style.height="800px";
      canvasizquierdo.width="800";
      canvasizquierdo.height="800";
      var ctx = canvasizquierdo.getContext("2d");
      var angle = Math.PI * .37;
      var radius = 350;
      var centerX = canvasizquierdo.width / 2;
      var centerY = canvasizquierdo.height / 2;
      ctx.beginPath();
      ctx.font = fonta0;
      ctx.textAlign = 'center';
      ctx.fillStyle = "#d1d1d1";
      this.drawTextAlongArc(ctx, textoizquierda.textoValue, centerX, centerY, radius, angle);
      let cajaimagen=document.querySelector("#botella");
      let divtextoizquierda=document.createElement("div");
      divtextoizquierda.id="texto2";
      divtextoizquierda.insertAdjacentElement(`beforeend`,canvasizquierdo)
      cajaimagen.insertAdjacentElement(`beforeend`,divtextoizquierda);
      divtextoizquierda.setAttribute("style",`
      position : absolute;
        top : 178px;
        left: 170px;
`);


    }

    transformpx2number(px){
      let number;
    
      let newStr=px.substring(0,px.length-2);
      number=parseInt(newStr);
      return number;
    
    }

    agregartextoderecho(){
      let textoderecha=textos[4];

      var canvasderecho=document.createElement("canvas");
      canvasderecho.style.width="800px";
      canvasderecho.style.height="800px";
      canvasderecho.width="800";
      canvasderecho.height="800";
      var fonta0=textoderecha.estiloFuente+` `+200+` `+(this.transformpx2number("50px")*1.3)+`px `+textoderecha.tipoLetra;
      var ctx = canvasderecho.getContext("2d");
      var angle = Math.PI * .37;
      var radius = 350;
      var centerX = canvasderecho.width / 2;
      var centerY = canvasderecho.height / 2;
      ctx.beginPath();
      ctx.font = fonta0;
      ctx.textAlign = 'center';
      ctx.fillStyle = "#d1d1d1";
      this.drawTextAlongArc2(ctx, textoderecha.textoValue, centerX, centerY, radius, angle);
      let cajaimagen=document.querySelector("#botella");
      let divtextoizquierda=document.createElement("div");
      divtextoizquierda.id="texto3";
      divtextoizquierda.insertAdjacentElement(`beforeend`,canvasderecho)
      cajaimagen.insertAdjacentElement(`beforeend`,divtextoizquierda);
      divtextoizquierda.setAttribute("style",`
      position : absolute;
        top : 178px;
        left: -170px;
`);

      
    }



    crearImagen(newimg){
      this.pantallaamostrar=newimg;
    }

    crearImagenII(newimg2){
      this.etiuquetamostrar=newimg2;
    }

    mostrarimagen(){
      let cajaimagen=document.querySelector("#botella");
      this.pantallaamostrar.style.display="block";
      let divfondo=document.createElement("div");
      divfondo.id="fondos";
      
      
      
      
      cajaimagen.setAttribute("style",`
      position : relative;
      `);
      divfondo.insertAdjacentElement(`beforeend`,this.pantallaamostrar)
      cajaimagen.insertAdjacentElement(`beforeend`,divfondo);
    }


    agregaretiqueta(){
      let divetiqueta=document.querySelector("#etiqueta");
      this.etiuquetamostrar.style.display="block";
      this.etiuquetamostrar.style.width="476px";
      this.etiuquetamostrar.style.height="665px";
      this.etiuquetamostrar.style.opacity="0.8";
      divetiqueta.insertAdjacentElement(`beforeend`,this.etiuquetamostrar)
    }

    agregarFondo(data){
      this.data=data;
      //Cambiar cuando se tengan las botellas sin grabado
      if(data.familia=="basica"){
        this.dirbotella=botellassingrabado[1];
        this.indiceBotella=1;
      }else if(data.familia=="platinum"){
        this.dirbotella=botellassingrabado[0];
        this.indiceBotella=0;
      }else if(data.familia=="mezcal"){
        this.dirbotella=botellassingrabado[3];
        this.indiceBotella=3;
      }
      else if(data.familia=="premium"){
        this.dirbotella=botellassingrabado[2];
        this.indiceBotella=2;
      }
      //Descomentar estas dos lineas cuando se tengan las botellas sin grabado
      //this.dirbotella=botellassingrabado[data.indiceBotella-1];
      //this.indiceBotella=data.indiceBotella-1;
      let divfondo=document.querySelector("#fondos");
      let cajaimagen=document.querySelector("#botella");
      
      let newImg = document.createElement("img");
            newImg.id="img1";
            newImg.src =this.dirbotella;
            newImg.alt = "/imagen" + (this.dirbotella);
            newImg.width="426";
            newImg.height="705";

      cajaimagen.insertAdjacentElement("afterbegin",newImg);
      if(this.indiceBotella==0){
        this.pantallaamostrar.style.width="238px";
        this.pantallaamostrar.style.height="302px";
        this.pantallaamostrar.style.opacity="0.8";
        divfondo.setAttribute("style",`
            position : absolute;
              top : 288px;
              left: 96px;
      `);
      }else if(this.indiceBotella==2){
        newImg.width="800";
        newImg.height="800";
        this.pantallaamostrar.style.width="187px";
        this.pantallaamostrar.style.height="179px";
        this.pantallaamostrar.style.opacity="0.8";
        divfondo.setAttribute("style",`
            position : absolute;
              top : 442.5px;
              left: 303.5px;
      `);
      }else{
        this.pantallaamostrar.style.width="134px";
        this.pantallaamostrar.style.height="156px";
        this.pantallaamostrar.style.opacity="0.8";
        divfondo.setAttribute("style",`
                  position : absolute;
                  top : 314px;
                  left: 132px;
      `);
      }


      if(this.data.familia=="premium"){
        this.agregartextosExtra();
      }
      
    }


    drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
      var len = str.length,
        s;
      context.save();
      context.translate(centerX, centerY);
      context.rotate(-1.5 * angle / 1);
      context.rotate(-4* (angle / len) / 1);
      for (var n = 0; n < len; n++) {
        context.rotate(angle / len);
        context.save();
        context.translate(0, -1 * radius);
        s = str[n];
        context.fillText(s, 0, 0);
        context.restore();
      }
      context.restore();
    }

    drawTextAlongArc2(context, str, centerX, centerY, radius, angle) {
      var len = str.length,
        s;
      context.save();
      context.translate(centerX, centerY);
      context.rotate(-1.1 * angle / -2);
      context.rotate(-4* (angle / len) / -2);
      for (var n = 0; n < len; n++) {
        context.rotate(angle / len);
        context.save();
        context.translate(0, -1 * radius);
        s = str[n];
        context.fillText(s, 0, 0);
        context.restore();
      }
      context.restore();
    }

}