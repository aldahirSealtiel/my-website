import { Texto } from "./Texto.js";
import { textos } from "./resources.js";

export class controladorTexto{

     clicsAgregarTexto;
     
     constructor()
     {
        
        this.clicsAgregarTexto = 0;
     }

    mostrarpantalla(familia){

        //agregar logica para incrementar el numero de textos a agregar para la botella.
        let pantallaCentral=document.querySelector(".pcentral");
        let pantallaSuperior=document.querySelector(".psuperior");
        let titulopantallas=document.querySelector(".titulopantallas");
        titulopantallas.innerHTML='<h1 class="fadeout">AGREGA UN TEXTO<h1>'

       pantallaCentral.remove();
            
        pantallaSuperior.insertAdjacentHTML('afterend',`<div id="textpcentral" class="pcentral">
        <div id="cajalistaTexto">
                <div id="listaTexto" class="listaTexto">
                             <h4>ITEMS TEXTO</h4> 
                </div>
                <div id="listaTexto2" class="listaTexto" style="display: block">
                             <h4 >ITEMS TEXTO IZQUIERDA</h4> 
                </div>
                <div id="listaTexto3" class="listaTexto" style="display: block">
                             <h4>ITEMS TEXTO DERECHA</h4> 
                </div>
        </div>
        <div id="agregartexto">
          <textarea id="textarea1" 
                              class="input shadow" 
                              name="name" 
                              rows="15" 
                              cols="100" 
                              placeholder="Your text here "></textarea>
        </div>
        <div id="sidebar">
            <div id="sidebarcontent"class="flex-shrink-0 p-3 bg-white" >
                <div id="tipo de Letra">
                  <button type="button" 
                  id="boldBtn"
                  class=" shadow-sm btn btn-outline-secondary" 
                  data-toggle="tooltip"
                  data-placement="top" 
                  title="Bold Text">
                    Bold</button>
                  <button type="button" 
                        id="italicBtn"
                        class="shadow-sm btn btn-outline-success" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Italic Text">
                    Italic</button>
                </div>
                <div id="AlingText">
                  <button type="button"
                  class=" shadow-sm btn btn-outline-primary" 
                  data-toggle="tooltip" 
                  data-placement="top"
                  id="leftAlignBtn"
                  title="Left Align">
  <i class="fas fa-align-left"></i></button>
          <button type="button"
                  class="btn shadow-sm btn-outline-primary" 
                  data-toggle="tooltip" 
                  data-placement="top"
                  id="centerAlignBtn" 
                  title="Center Align">
  <i class="fas fa-align-center"></i></button>
          <button type="button"  
                  class="btn shadow-sm btn-outline-primary" 
                  data-toggle="tooltip" 
                  data-placement="top"
                  id="rightAlignBtn" 
                  title="Right Align">
  <i class="fas fa-align-right"></i></button>
                </div>
                <div id="upperLowerCapital">
                  <button type="button" 
                  class="btn shadow-sm btn-outline-primary" 
                  data-toggle="tooltip" 
                  data-placement="top"
                  id="uppercaseBtn" 
                  title="Uppercase Text">
  Upper Case</button>
          <button type="button"  
                  class="btn shadow-sm btn-outline-primary" 
                  data-toggle="tooltip" 
                  data-placement="top" 
                  id="lowercaseBtn"
                  title="Lowercase Text">
  Lower Case</button>
          <button type="button"  
                  class="btn shadow-sm btn-outline-primary" 
                  data-toggle="tooltip" 
                  data-placement="top"
                  id="capitalizeBtn" 
                  title="Capitalize Text">
  Capitalize</button>

                </div>


                <div id="tipodeletra">
                        <select id="listaFuentes">
                                <option value="Cinzel">Cinzel</option>
                                <option value="Allura">Allura</option>
                                <option value="Bebas">Bebas</option>
                                <option value="MonotypeCorsiva">MonotypeCorsiva</option>
	                </select>
                </div>


                <div id="Agregartextoextra">
                <button type="button" id="agregarTextoExtraBtn" 
                        class="btn shadow-sm btn-outline-primary" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Agregar texto">
                        Agregar Texto</button>
                <button type="button" id="eliminarTextoBtn" 
                        class="btn shadow-sm btn-outline-primary" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Agregar texto">
                        Eliminar Texto</button>

                <button type="button" id="agregarTextoExtraBtnIzq" 
                        class="btn shadow-sm btn-outline-primary" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Agregar texto izquierdo"
                        style="display: block">
                        Agregar Texto Izquierdo</button>
                <button type="button" id="eliminarTextoExtraBtnIzq" 
                        class="btn shadow-sm btn-outline-primary" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Eliminar texto izquierdo"
                        style="display: block">
                        Eliminar texto izquierdo</button>

                <button type="button" id="agregarTextoExtraBtnDer" 
                        class="btn shadow-sm btn-outline-primary" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Agregar texto derecho"
                        style="display: block">
                        Agregar Texto Derecho</button>
                <button type="button" id="eliminarTextoExtraBtnDer" 
                        class="btn shadow-sm btn-outline-primary" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Eliminar texto derecho"
                        style="display: block">
                        Eliminar texto derecho</button>


                </div>
                

            </div>
        </div>
      </div>
   `);

     if(familia != null && familia != "premium")
     {
        let listaTexto2 = document.getElementById("listaTexto2");
        listaTexto2.style.display = "none";
        let listaTexto3 = document.getElementById("listaTexto3");
        listaTexto3.style.display = "none";
        let agregarTextoExtraBtnIzq =  document.getElementById("agregarTextoExtraBtnIzq");
        let eliminarTextoExtraBtnIzq = document.getElementById("eliminarTextoExtraBtnIzq");
        let agregarTextoExtraBtnDer = document.getElementById("agregarTextoExtraBtnDer");
        let eliminarTextoExtraBtnDer = document.getElementById("eliminarTextoExtraBtnDer");
        agregarTextoExtraBtnIzq.style.display = "none";
        eliminarTextoExtraBtnIzq.style.display = "none";
        agregarTextoExtraBtnDer.style.display = "none";
        eliminarTextoExtraBtnDer.style.display = "none";


     }
   
     //console.log("entro");
     //console.log(this.clicsAgregarTexto);
     //se manda a revisar el estado del arreglo de los textos, si tienen contenido entonces
     //se mandan a crear los items contenedores de los textos
     this.revisarEstado();

     let agregarOtroTextoBtn = document.getElementById("agregarTextoExtraBtn");
     agregarOtroTextoBtn.addEventListener('click', () => this.procesaTexto());

     let eliminartextoBtn = document.getElementById("eliminarTextoBtn");
     eliminartextoBtn.addEventListener('click', () => this.borrarTexto());
     
     let boldBtn = document.getElementById("boldBtn");
     //console.log(boldBtn);
     boldBtn.addEventListener( 'click', () => this.agregarPesoFuente() );
     
     let italicBtn  = document.getElementById("italicBtn");
     //console.log(italicBtn);
     italicBtn.addEventListener( 'click', () => this.agregarEstiloFuente() );
     
     let leftAlignBtn = document.getElementById("leftAlignBtn");
     //console.log(leftAlignBtn);
     leftAlignBtn.addEventListener( 'click', () => this.agregarAlineacionTexto("leftAlignBtn") );
     
     let centerAlignBtn = document.getElementById("centerAlignBtn");
     //console.log(centerAlignBtn);
     centerAlignBtn.addEventListener( 'click', () => this.agregarAlineacionTexto("centerAlignBtn") );
     
     let rightAlignBtn = document.getElementById("rightAlignBtn");
     //console.log(rightAlignBtn);
     rightAlignBtn.addEventListener( 'click', () => this.agregarAlineacionTexto("rightAlignBtn") );


     let uppercaseBtn = document.getElementById("uppercaseBtn");
     //console.log(uppercaseBtn);
     uppercaseBtn.addEventListener( 'click', () => this.agregarTransformacionTexto("uppercaseBtn") );

     
     let lowercaseBtn = document.getElementById("lowercaseBtn");
     //console.log(lowercaseBtn);
     lowercaseBtn.addEventListener( 'click', () => this.agregarTransformacionTexto("lowercaseBtn") );
     
     let capitalizeBtn = document.getElementById("capitalizeBtn");
     //console.log(capitalizeBtn);
     capitalizeBtn.addEventListener( 'click', () => this.agregarTransformacionTexto("capitalizeBtn") );

        
     let listaFuentes = document.getElementById("listaFuentes");
     //console.log(listaFuentes);
     listaFuentes.addEventListener( 'change', () => this.obtenerItemSeleccionado() );
     
     let agregarTextoExtraBtnIzq  = document.getElementById("agregarTextoExtraBtnIzq");
     agregarTextoExtraBtnIzq.addEventListener('click', () => this.agregarTextoIzquierdo());

     let agregarTextoExtraBtnDer = document.getElementById("agregarTextoExtraBtnDer");
     agregarTextoExtraBtnDer.addEventListener('click', () => this.agregarTextoDerecho());

     let eliminarTextoExtraBtnIzq = document.getElementById("eliminarTextoExtraBtnIzq");
     eliminarTextoExtraBtnIzq.addEventListener("click", () => this.eliminarTextoExtraIzq());

     let eliminarTextoExtraBtnDer = document.getElementById("eliminarTextoExtraBtnDer");
     eliminarTextoExtraBtnDer.addEventListener("click", () => this.eliminarTextoExtraDer());
    }

    eliminarTextoExtraIzq()
    {
        textos[3] = new Texto();
        let listaTexto2 = document.getElementById("listaTexto2");
        this.agregarElementoALista(listaTexto2);
    }

    eliminarTextoExtraDer()
    {
        textos[4] = new Texto();
        let listaTexto3 = document.getElementById("listaTexto3");
        this.agregarElementoALista(listaTexto3);
    }

    agregarTextoIzquierdo()
    {

        let areaTexto = document.getElementById("textarea1");
        let listaTexto2 = document.getElementById("listaTexto2");
        areaTexto.style.fontSize="50px";
        let textoProcesado = this.borrarSpaciosIniciales(areaTexto.value);
        
        if(textoProcesado.length > 15)
        {
                alert("texto muy largo");
        }
        else if(textoProcesado.length == 0)
        {
                alert("Se debe agregar algun texto");
        }
        else
        {
                let spaces = 0;
                let izq = 0 ;
                let der = 0;
                if(textoProcesado.length <= 15)
                {
                        spaces = 15 - textoProcesado.length;
                        if(spaces % 2 !== 0)
                        {
                                izq = Math.floor(spaces / 2) + 1;
                                der = Math.floor(spaces / 2);
                        }
                        else
                        {
                                izq = spaces / 2;
                                der = izq;
                        }

                }
                console.log(izq + " " + der);
                textos[3].textoValue = ' '.repeat(izq) + textoProcesado + ' '.repeat(der);
                if(areaTexto.style.fontFamily !=="")
                {
                        textos[3].tipoLetra = areaTexto.style.fontFamily;
                }
                textos[3].alineacion = areaTexto.style.textAlign;
                textos[3].pesoFuente = areaTexto.style.fontWeight;
                textos[3].estiloFuente = areaTexto.style.fontStyle;
                textos[3].transformacionTexto = areaTexto.style.textTransform;
                this.agregarElementoALista(listaTexto2);
                document.getElementById("textarea1").value = " ";
                
        }

        
        areaTexto.style.fontWeight = "normal";
        areaTexto.style.textAlign = "left";
        areaTexto.style.fontStyle = "normal";
        areaTexto.style.textTransform = "";
        areaTexto.textContent = "";
        areaTexto.style.fontFamily = "";
        let items = document.getElementById("listaFuentes").options;
        console.log(items[0].value + "  VALOR ");
        document.getElementById("listaFuentes").value = items[0].value;


    }
    agregarTextoDerecho()
    {
        let areaTexto = document.getElementById("textarea1");
        let listaTexto3 = document.getElementById("listaTexto3");
        areaTexto.style.fontSize="50px";
        let textoProcesado = this.borrarSpaciosIniciales(areaTexto.value);
        
        if(textoProcesado.length > 15)
        {
                alert("texto muy largo");
        }
        else if(textoProcesado.length == 0)
        {
                alert("Se debe agregar algun texto");
        }
        else
        {
                let spaces = 0;
                let izq = 0 ;
                let der = 0;
                if(textoProcesado.length <= 15)
                {
                        spaces = 15 - textoProcesado.length;
                        if(spaces % 2 !== 0)
                        {
                                izq = Math.floor(spaces / 2) + 1;
                                der = Math.floor(spaces / 2);
                        }
                        else
                        {
                                izq = spaces / 2;
                                der = izq;
                        }

                }
                console.log(izq + " " + der);
                textos[4].textoValue = ' '.repeat(izq) + textoProcesado + ' '.repeat(der);
                console.log("///"+textos[4].textoValue + "///");
                if(areaTexto.style.fontFamily !== "")
                {
                        textos[4].tipoLetra = areaTexto.style.fontFamily;
                }
                
                textos[4].alineacion = areaTexto.style.textAlign;
                textos[4].pesoFuente = areaTexto.style.fontWeight;
                textos[4].estiloFuente = areaTexto.style.fontStyle;
                textos[4].transformacionTexto = areaTexto.style.textTransform;
                this.agregarElementoALista(listaTexto3);
                document.getElementById("textarea1").value = " ";
                
        }

        
        areaTexto.style.fontWeight = "normal";
        areaTexto.style.textAlign = "left";
        areaTexto.style.fontStyle = "normal";
        areaTexto.style.textTransform = "";
        areaTexto.textContent = "";
        areaTexto.style.fontFamily = "";
        let items = document.getElementById("listaFuentes").options;
        console.log(items[0].value + "  VALOR ");
        document.getElementById("listaFuentes").value = items[0].value;
    }
    agregarElementoALista( contenedorPrincipal)
    {
        console.log("contenido de los objetos textos 3 y 4");
        //console.log(textos[3]);
        //console.log(textos[4]);
        let newUl;
        if(contenedorPrincipal.id == "listaTexto2")
        {
                newUl = document.getElementById("itemsTextoIzq");
                //  console.log(newUl);
                if(newUl != null)
                {
                        newUl.remove();
                }
                newUl = document.createElement("ul");
                newUl.id = "itemsTextoIzq"; 
                if(textos[3].textoValue =="" ) return;
        }
        else if(contenedorPrincipal.id == "listaTexto3")
        {
                newUl = document.getElementById("itemsTextoDer");
                //  console.log(newUl);
                if(newUl != null)
                {
                        newUl.remove();
                }
                newUl = document.createElement("ul");
                newUl.id = "itemsTextoDer";
                if(textos[4].textoValue == "") return;
        }

        
        let newLi = document.createElement("li");
        let newText = document.createElement("a");
        let i = 0;
        if(contenedorPrincipal.id == "listaTexto2" )
        {
                i = 3;
        }
        else if(contenedorPrincipal.id == "listaTexto3")
        {
                i = 4;
        }
        newText.style.fontWeight = textos[i].pesoFuente;
        newText.style.textAlign = textos[i].alineacion;
        newText.style.fontStyle = textos[i].estiloFuente;
        newText.style.textTransform = textos[i].transformacionTexto;
        newText.textContent = textos[i].textoValue;
        newText.style.fontFamily = textos[i].tipoLetra;
        newText.style.fontSize = "50px";
        console.log(newText);
        newLi.appendChild(newText);
        console.log(newLi);
        newUl.appendChild(newLi);

        contenedorPrincipal.insertAdjacentElement("beforeend",  newUl);
    }

    revisarEstado()
    {
        this.clicsAgregarTexto = 0;
        for(let i = 0; i < 3; i++)
        {
                console.log(textos[i].textoValue);
                if(textos[i].textoValue != "")
                {
                        this.clicsAgregarTexto +=1;
                }
        }
        
        this.mostrarListaDeTextos();
        if(textos[3].textoValue !=="")
        {
                let listaTexto2 = document.getElementById("listaTexto2");
                this.agregarElementoALista(listaTexto2);
        }
        if(textos[4].textoValue !=="")
        {
                let listaTexto3 = document.getElementById("listaTexto3");
                this.agregarElementoALista(listaTexto3);
        }
    }
    obtenerItemSeleccionado()
    {

        let fontFamilySeleccionada = document.getElementById("listaFuentes").value; 
        //console.log(fontFamilySeleccionada);
        //console.log(this.clicsAgregarTexto);
        if(this.clicsAgregarTexto >= 0 && this.clicsAgregarTexto <3)
        {
                textos[this.clicsAgregarTexto].tipoLetra = fontFamilySeleccionada;
                document.getElementById("textarea1").style.fontFamily  = fontFamilySeleccionada;
               
        }

    }

    agregarTransformacionTexto(tipoTransformacion)
    {
        //console.log(this.clicsAgregarTexto);
        if(tipoTransformacion == "uppercaseBtn")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].transformacionTexto = "uppercase";
                }
                document.getElementById("textarea1").style.textTransform  = "uppercase";   
        }
        else if( tipoTransformacion == "lowercaseBtn")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].transformacionTexto = "lowercase";
                }
                document.getElementById("textarea1").style.textTransform  = "lowercase";
        }
        else if( tipoTransformacion == "capitalizeBtn")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].transformacionTexto = "capitalize";
                }
                document.getElementById("textarea1").style.textTransform  = "capitalize";
        }
        else
        {
                alert("Error de funcionamiento parametro alineacion texto");
        }
        
    }

    agregarAlineacionTexto( alineacion )
    {
        //console.log(this.clicsAgregarTexto);
        if(alineacion == "leftAlignBtn")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].alineacion = "left";
                }
                document.getElementById("textarea1").style.textAlign  = "left";   
        }
        else if( alineacion == "centerAlignBtn")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].alineacion = "center";
                }
                document.getElementById("textarea1").style.textAlign  = "center";
        }
        else if( alineacion == "rightAlignBtn")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].alineacion = "right";
                }
                document.getElementById("textarea1").style.textAlign  = "right";
        }
        else
        {
                alert("Error de funcionamiento parametro alineacion texto");
        }

    }


    agregarEstiloFuente()
    {
        //console.log(this.clicsAgregarTexto);
        const estiloFuente = document.getElementById("textarea1").style.fontStyle;
        if(estiloFuente== "normal" || estiloFuente == "")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].estiloFuente = "italic";
                }
                document.getElementById("textarea1").style.fontStyle  = "italic";
                document.getElementById("italicBtn").style.backgroundColor = "green";
                document.getElementById("italicBtn").style.color = "white";
        }
        else
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].estiloFuente = "normal";
                }
                document.getElementById("textarea1").style.fontStyle  = "normal";
                document.getElementById("italicBtn").style.backgroundColor = "white";
                document.getElementById("italicBtn").style.color = "green";
        }

    }

    agregarPesoFuente()
    {
      //  console.log(this.clicsAgregarTexto);
        console.log("se va a agregar el peso a la fuente");
        const pesoFuente = document.getElementById("textarea1").style.fontWeight;
        if( pesoFuente== "normal" || pesoFuente == "")
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].pesoFuente = "bold";
                }
                document.getElementById("textarea1").style.fontWeight = "bold";
                document.getElementById("boldBtn").style.backgroundColor = "black";
                document.getElementById("boldBtn").style.color = "white";

        }
        else
        {
                if(this.clicsAgregarTexto >=0 && this.clicsAgregarTexto <3 )
                {
                        textos[this.clicsAgregarTexto].pesoFuente = "normal";
                }
                document.getElementById("textarea1").style.fontWeight = "normal";
                document.getElementById("boldBtn").style.backgroundColor = "white";
                document.getElementById("boldBtn").style.color = "black";

        }

    }

    borrarTexto()
    {
      //  console.log("se borrara el texto un item del la lista de textos");
      //  console.log(this.clicsAgregarTexto);
        if(this.clicsAgregarTexto -1 < 0)
        {
                alert("no existen elementos que borrar en la lista");

        }
        else
        {
                this.clicsAgregarTexto -= 1;
                textos[this.clicsAgregarTexto] = new Texto();
                this.mostrarListaDeTextos();

        }

    }

    borrarSpaciosIniciales( texto )
    {
        let resultado = "";
        let banPrimeraLetra = false;
        for(let i = 0; i < texto.length; i++)
        {
               if(texto.charAt(i) != ' ' && !banPrimeraLetra)
               {
                        banPrimeraLetra = true;
               } 
               if(banPrimeraLetra == false)
               {
                continue;
               }
               else
               {
                resultado += texto.charAt(i);
               }
               //console.log(resultado);
        }
        //console.log(resultado);
        return resultado;
    }

    mostrarListaDeTextos()
    {
        let cajaItemsTexto = document.getElementById("listaTexto");      
        let newUl = document.getElementById("itemsTexto");
      //  console.log(newUl);
        if(newUl != null)
        {
                newUl.remove();
        }
        newUl = document.createElement("ul");
        newUl.id = "itemsTexto";

      //  console.log(newUl);
      //  console.log("se inicia a crear la lista");
       // console.log(textos);
        for(let i = 0; i < 3; i++)
        {
                //console.log(textos[i].textoValue);
                if(textos[i].textoValue != "")
                {
                        let newLi = document.createElement("li");
                        let newText = document.createElement("a");
                        newText.style.fontWeight = textos[i].pesoFuente;
                        newText.style.textAlign = textos[i].alineacion;
                        newText.style.fontStyle = textos[i].estiloFuente;
                        newText.style.textTransform = textos[i].transformacionTexto;
                        newText.textContent = textos[i].textoValue;
                        newText.style.fontFamily = textos[i].tipoLetra;
                        newText.style.fontSize = "50px";
                        console.log(newText);
                        newLi.appendChild(newText);
       //                 console.log(newLi);
                        newUl.appendChild(newLi);
                }

        }
        cajaItemsTexto.insertAdjacentElement("beforeend",  newUl);
    }

    procesaTexto()
    {
        
        //console.log("numero de clics" + this.clicsAgregarTexto );
        //console.log("se procesara el texto");
        
        let areaTexto = document.getElementById("textarea1");
        areaTexto.style.fontSize="50px";
        
        let textoProcesado = this.borrarSpaciosIniciales(areaTexto.value);
        
        //console.log("texto resultante :" +  textoProcesado);

        //let texto = areaTexto.value;
        //console.log(textoProcesado.length);
        if(this.clicsAgregarTexto >=3 )
        {
                alert("Ha llegado al limite de textos a agregar");
        }
        else
        {
                if(textoProcesado.length > 11)
                {
                        alert("texto muy largo");
                }
                else if(textoProcesado.length == 0)
                {
                        alert("Se debe agregar algun texto");
                }
                else
                {
                        //agregar el texto a Items texto, al arreglo, colocar en el objeto Texto del arreglo el valor del value
                        //console.log(textoProcesado)
                        textos[this.clicsAgregarTexto].textoValue = textoProcesado;
                        //console.log(textos[this.clicsAgregarTexto]);
                        
                        //se agrega el valor a la lista de items a mostrar
                        this.mostrarListaDeTextos();
        
                        this.clicsAgregarTexto +=1;
                        //console.log("numero de clics" + this.clicsAgregarTexto );
                        document.getElementById("textarea1").value = " ";
                        
                }
        }
        
        areaTexto.style.fontWeight = "normal";
        areaTexto.style.textAlign = "left";
        areaTexto.style.fontStyle = "normal";
        areaTexto.style.textTransform = "";
        areaTexto.textContent = "";
        areaTexto.style.fontFamily = "";
        let items = document.getElementById("listaFuentes").options;
        //console.log(items[0].value + "  VALOR ");
        document.getElementById("listaFuentes").value = items[0].value;
        let boldBtn = document.getElementById("boldBtn");
        let italicBtn = document.getElementById("italicBtn");
        if(boldBtn && boldBtn.style.backgroundColor === "black")
        {
                boldBtn.style.backgroundColor = "white";
                boldBtn.style.color = "black";
        }
        if(italicBtn && italicBtn.style.backgroundColor ==="green")
        {
                italicBtn.style.backgroundColor = "white";
                italicBtn.style.color = "green";
        }
        
        
    }

}