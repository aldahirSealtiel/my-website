import { marcos, fondos, textos, botellas } from "./resources.js";



export class controladorPantallas
{

    slide;
    slides;
    imgs;
    total;
    lmtinferior;
    lmtSuperior;
    clicsContinuar;
    selecciones = {
        //urlBotella
        indiceBotella: -1,
        //urlFondo
        indiceFondo: -1,
        //urlMarco
        indiceMarco: -1,
        familia: ""
    }

    constructor()
    {
        console.log("entramos al constructor");
        this.slide = 1 ;
        this.clicsContinuar = 0;
        this.selecciones.indiceBotella = -1;
        this.selecciones.indiceFondo = -1;
        this.selecciones.indiceMarco = -1;
        this.total = 0;
    }
    
    showSlide(n)
    {
        
        n--; // decrement 1
        for (var i = 0; i < this.slides.length; i++) {
            (i == n) ? this.slides[n].style.display = "flex" : this.slides[i].style.display = "flex";
            (i == n) ? this.slides[n].className="box fadeout":this.slides[i].className="box fadeout";
        }
    }

    adelantar(  )   
    {
       
        this.slide++;
        if (this. slide > this.total) { this.slide = 1; }
        this.showSlide(this.slide);
       
    }

    atrazar(  )
    {
        
        this.slide--;

        if (this.slide < 1) { this.slide = this.total; }
        this.showSlide(this.slide);
    }


    seleccionarTitulo()
    {

        let titulopantallas=document.querySelector(".titulopantallas");
        let logotitulopantallas=document.querySelector("#logopsuperior");
        logotitulopantallas.innerHTML=``;
        logotitulopantallas.innerHTML=`<img class="fadeout" src="/app/assets/logo-white.png" alt="Logotipo Don Ramon Personalizado">`;
        if(this.clicsContinuar == 1) titulopantallas.innerHTML='<h1 class="fadeout">SELECCIONA UNA BOTELLA<h1>';
        if(this.clicsContinuar == 2) titulopantallas.innerHTML='<h1 class="fadeout">SELECCIONA UN MARCO<h1>';
        if(this.clicsContinuar == 3) titulopantallas.innerHTML='<h1 class="fadeout">SELECCIONA UN FONDO<h1>';
    }
    
    seleccionaArreglo( )
    {
        //console.log("clics dados en el boton continuar " + clicsContinuar);
        if(this.clicsContinuar == 1) return botellas;
        if(this.clicsContinuar == 2) return marcos;
        if(this.clicsContinuar == 3) return fondos;
    }

    crearListaImagenes( )
    {
        //si clic continuar esta en pantalla botellas validar familia para mostrar solo el rango de botellas de la familia que se tiene
        let data = this.seleccionaArreglo(); 
        //let sizeT = data.length;
        let listaImagenes = document.querySelector(".slides");
        if(listaImagenes != null )
        {
            listaImagenes.remove();
        }

        let sliders = document.querySelector(".slider");

        if(sliders==null)
        {
            this.crearParteCentral();
        }
        let limiteInferior = 0;
        let limiteSuperior = data.length;

        if(this.clicsContinuar == 1 && this.selecciones.familia == "basica")
        {
            limiteSuperior = 6;
        }
        if(this.clicsContinuar == 1 && this.selecciones.familia == "platinum")
        {
            limiteInferior = 6;
            limiteSuperior = 12;
        }
        if(this.clicsContinuar == 1 && this.selecciones.familia == "mezcal")
        {
            limiteInferior = 12;
            limiteSuperior = 14;
        }
        if(this.clicsContinuar == 1 && this.selecciones.familia == "premium")
        {
            limiteInferior = 14;
            limiteSuperior = 21;
        }
        this.lmtinferior=limiteInferior;
        this.lmtSuperior=limiteSuperior;
        
        this.crearSeccionDeImagenes(data, limiteInferior, limiteSuperior);
    }

    crearParteCentral()
    {
        let pantallaSuperior=document.querySelector(".psuperior");
        let pantallaCentral=document.querySelector(".pcentral");
        pantallaCentral.remove();
        pantallaSuperior.insertAdjacentHTML('afterend',`
        <div id="carouselExampleFade" class="pcentral">
                <div id="marco" class=>
                    <div class="slider">
                        
                    </div>
                </div>
         </div>
         `);
        const next = document.getElementById("botonrigth");
        const prev = document.getElementById("botonleft");
        //next.addEventListener('click', () => this.adelantar() );
        //prev.addEventListener("click", () => this.atrazar() );
    }

    crearSeccionDeImagenes(data , limiteInferior, limiteSuperior)
    {

        console.log(limiteInferior + " " + limiteSuperior);
        let slider = document.querySelector(".slider");
        let newUl = document.createElement("ul");
        newUl.className = "slides";
        console.log("se inicia a crear la lista");
    
        for(let i = limiteInferior ; i < limiteSuperior; i++)
        {
            let newLi = document.createElement("li");
            //console.log("newLi: ")
            //console.log(newLi);
            let newImg = document.createElement("img");
            newImg.src =data[i];
            newImg.alt = "/imagen" + (i + 1);
            
            newLi.appendChild(newImg); 
            let newSpan = document.createElement("span");
            newSpan.style="display: none";
            newSpan.innerHTML = "imagen" + (i + 1);
            let newp = document.createElement("p");
            if(data==botellas){
                newp.innerHTML=this.nombrarBotella(i + 1);
                newImg.id="botella"+ (i + 1);
                newImg.addEventListener('click', ()=>{
                    this.agregarMarco(i+1);
                    this.slide=i+1;
                } );
            }

            if(data==marcos){
                newp.innerHTML=this.nombrarBotella(i + 1);
                newImg.id="marco"+ (i + 1);
                newImg.addEventListener('click', ()=>{
                    this.agregarMarco(i+1);
                    this.slide=i+1;
                } );
            }


            if(data==fondos){
                newp.innerHTML=this.nombrarBotella(i + 1);
                newImg.id="fondo"+ (i + 1);
                newImg.addEventListener('click', ()=>{
                    this.agregarMarco(i+1);
                    this.slide=i+1;
                } );
            }
           
            newLi.appendChild(newp);     
            newLi.appendChild(newSpan);        
            newUl.appendChild(newLi);
            //console.log(newUl);
        }
        
        slider.insertAdjacentElement("beforeend",  newUl);
        //console.log(slider);
        console.log("se finaliza cargarNuevaPagina");
        this.slides = document.querySelectorAll(".slider ul li");
        this.imgs = document.querySelectorAll(".slider ul li img");
        this.total = this.slides.length;
        if(data==botellas){
            //this.agregarlistenerBotellas();
        }
        
    }
    agregarMarco(n)
    {
        let limteInf=this.lmtinferior;
        n--; // decrement 1
        for (var i = 0; i < this.imgs.length; i++) {
            
            (limteInf == n) ? this.imgs[i].style.border="8px solid #BC8542" : this.imgs[i].style.border="none";
            limteInf++;
        }   
    }
    

    

    nombrarBotella(elemento){
        let nombre="";
        switch(elemento){
            case 1:
                nombre="TEQUILA PLATA PLATINIUM 700ML";
                break;
                case 2:
                    nombre="TEQUILA PUNTA DIAMANTE REPOSADO 750ML";
                break;
                case 3:
                    nombre="Tequila Reposado 750ml";
                break;
                case 4:
                    nombre="Tequila Reposado 1L";
                break;
                case 5:
                    nombre="Tequila Reposado 1.750L";
                break;
                case 6:
                    nombre="Tequila Reposado 3L";
                break;
                
        }
        return nombre;
        
    }

        
    

}
