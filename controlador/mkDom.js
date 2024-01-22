function div(c,i,inner) { // * agregar clase e id
    c?true:c=""
    i?true:i=""
    inner?true:inner=""

    let div = document.createElement("div")
    c=""?true:div.setAttribute("class",c)
    i=""?true:div.setAttribute("id",i)
    inner=""?true:div.innerHTML=inner

    return div
}
function img(c,i,src) {
    c?true:c=""
    i?true:i=""
    src?true:src=""
    let img = document.createElement("img")
    c=""?true:img.setAttribute("class",c)
    i==""?true:img.setAttribute("id",i)
    src=""?true:img.setAttribute("src",src)

    return img
}

function input(c,i,p) {
    c?true:c=""
    i?true:i=""
    p?true:p=""
    let input = document.createElement("input")
    c=""?true:input.setAttribute("class",c)
    i=""?true:input.setAttribute("id",i)
    p=""?true:input.setAttribute("placeholder",p)
    return input
    
}

function button(c,i,inner) {
    c?true:c=""
    i?true:i=""
    inner?true:inner=""
    let button = document.createElement("button")
    c=""?true:button.setAttribute("class",c)
    i=""?true:button.setAttribute("id",i)
    inner=""?true:button.innerHTML=inner

    return button
}
/////////
function flex(f){
    console.log(f)
    f.style.display="flex"
    return f
}
function mkObj(n,obj_class,obj_id,inner) { // nodo objHTML, clase del objeto (str), clse del id (str), inner

    n?true:n=""
    obj_class?true:obj_class=""
    obj_id?true:obj_id=""
    inner?true:inner=""

    let obj_temp=div(obj_class,obj_id,inner)
    n.appendChild(obj_temp)
    return obj_temp
}

function mkObjImg(n,img_class,img_id,src_) {
    n?true:n=""
    img_class?true:img_class=""
    img_id?true:img_id=""
    src_?true:src_=""
    
    img_class?cont_img_class="cont_"+img_class:cont_img_class=""
    img_id?cont_img_id="cont_"+img_id:cont_img_id=""


    let obj_temp=div(cont_img_class,cont_img_id)
    n.appendChild(obj_temp)

    img_class?img_class=img_class:img_class=""
    img_id?img_id=img_id:img_id=""
    
    let img_temp = img(img_class,img_id,src_)
    obj_temp.appendChild(img_temp)
    
    return obj_temp
}

function mkObjInput(nodo,c,i,t,p){
    nodo?true:nodo=""
    c?true:c=""
    i?true:i=""
    t?true:t=""
    p?true:p=""


    c?cont_clase="cont_input_"+c:cont_clase=""
    i?cont_id="cont_input_"+i:cont_id=""

    
    c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase=""
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id=""

    c?titulo_clase="tittle_"+c:titulo_clase=""
    i?titulo_id="tittle_"+i:titulo_id=""

    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class=""
    i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id=""

    c?cont_input_clase="cont_in_"+c:cont_input_clase=""
    i?cont_input_id="cont_in_"+i:cont_input_id=""
    
    c?input_clase="in_"+c:input_clase=""
    i?input_id="in_"+i:input_id=""

    input_placeholder=p
    
    

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)

        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)

            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)
            
                let titulo_temp = div(titulo_clase,titulo_id,t)
                cont_titulo.appendChild(titulo_temp)

            let nodo_cont_input = div(nodo_cont_input_class,nodo_cont_input_id)
            cont_temp.appendChild(nodo_cont_input)

                let cont_input = div(cont_input_clase,cont_input_id)
                nodo_cont_input.appendChild(cont_input)

                    let input_temp = input(input_clase,input_id,p)
                    cont_input.appendChild(input_temp)

    return obj_temp
}

function mkObjInputPassword(nodo,c,i,t,p){
    nodo?true:nodo=""
    c?true:c=""
    i?true:i=""
    t?true:t=""
    p?true:p=""


    c?cont_clase="cont_input_"+c:cont_clase=""
    i?cont_id="cont_input_"+i:cont_id=""

    
    c?cont_titulo_clase="cont_tittle_"+c:cont_titulo_clase=""
    i?cont_titulo_id="cont_tittle_"+i:cont_titulo_id=""

    c?titulo_clase="tittle_"+c:titulo_clase=""
    i?titulo_id="tittle_"+i:titulo_id=""

    c?nodo_cont_input_class="nodo_cont_input_"+c:nodo_cont_input_class=""
    i?nodo_cont_input_id="nodo_cont_input_"+i:nodo_cont_input_id=""

    c?cont_input_clase="cont_in_"+c:cont_input_clase=""
    i?cont_input_id="cont_in_"+i:cont_input_id=""
    
    c?input_clase="in_"+c:input_clase=""
    i?input_id="in_"+i:input_id=""

    c?img_ver_pass_clase="ver_pass_"+c:img_ver_pass_clase=""
    i?img_ver_pass_id="ver_pass_"+i:img_ver_pass_id=""

    input_placeholder=p
    
    c?ver_pass_clase="ver_pass_"+c:ver_pass_clase=""
    i?ver_pass_id="ver_pass_"+i:ver_pass_id=""

    let obj_temp = div(c,i)
    nodo.appendChild(obj_temp)

        let cont_temp = div(cont_clase,cont_id)
        obj_temp.appendChild(cont_temp)

            let cont_titulo = div(cont_titulo_clase,cont_titulo_id)
            cont_temp.appendChild(cont_titulo)
            
                let titulo_temp = div(titulo_clase,titulo_id,t)
                cont_titulo.appendChild(titulo_temp)

                //
            let obj_cont_input = div(nodo_cont_input_class,nodo_cont_input_id)
            cont_temp.appendChild(obj_cont_input)
                //

            let cont_input = div(cont_input_clase,cont_input_id)
            obj_cont_input.appendChild(cont_input)

                let input_temp = input(input_clase,input_id,p)
                input_temp.setAttribute("type","password")
                cont_input.appendChild(input_temp)

            let ver_pass = div(ver_pass_clase,ver_pass_id)
            obj_cont_input.appendChild(ver_pass)

                let img_ver_pass = mkObjImg(ver_pass,img_ver_pass_clase,img_ver_pass_id,"./vista/img/ver_pass.png")

                toggleVerContraseña(img_ver_pass)

                ver_pass.addEventListener("mouseup",function() {
                    if (input_temp.type==="password"){
                        input_temp.type = "text"
                    } else{
                        input_temp.type = "password"
                    }
                })

    return obj_temp
}

function mkObjButton(nodo,c,i,inner) {
    nodo?true:nodo=""
    c?true:c=""
    i?true:i=""
    inner?true:inner=""
    
    let btn_temp = button(c,i,inner)

    c=""?true:cont_btn_class="cont_"+c
    i=""?true:cont_btn_id="cont_"+i

    let obj_temp = div(cont_btn_class,cont_btn_id)



    /// ->
    nodo.appendChild(obj_temp)
        obj_temp.appendChild(btn_temp)

    return obj_temp
}



function validarStr(x,inner) {
    let ex = /^[a-zA-Z0-9/s']+$/
    let nodo = x.parentNode
    let c = x.getAttribute("class")
    let i = x.getAttribute("id")
    if (document.getElementById("aviso_formulario_"+i)) {
        document.getElementById("aviso_formulario_"+i).remove()
    }
    if (x.value=="") {
        document.getElementById("aviso_formulario_"+i).remove()
    }
    if (!ex.test(x.value)) {
        let aviso_formulario = div("aviso_formulario_"+c,"aviso_formulario_"+i,inner)
        nodo.appendChild(aviso_formulario)
        x.style.border="none"
        x.style.borderBottom="solid 1px red"
    } else {
        x.style.border="solid 1px #10101043"
    }
}

function mostrarPestaña(x,c) { // objeto a mostrar, contenedor en el que se encuentra la pestaña
    let pestañas_array = c.querySelectorAll(".pestaña")
    for (let i = 0; i < pestañas_array.length; i++) {
        pestañas_array[i].style.display="none"
    }
    x.style.display="flex"
}

function checkAndDeleteId(x) {
    if (document.getElementById(x)) {
        document.getElementById(x).remove()
    }
}

function confirmarPass(x,y){
    let nodo_x = x.parentNode
    let nodo_y = y.parentNode


    if (x.value==y.value) {
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")
    
        x.style.border="solid 1px #10101088"
        y.style.border="solid 1px #10101088"
    } else {
        checkAndDeleteId("aviso_formulario_contraseña")
        checkAndDeleteId("aviso_formulario_confirmar_contraseña")

        let aviso_x = div("aviso_formulario","aviso_formulario_contraseña","Las contraseñas no coinciden")
        nodo_x.appendChild(aviso_x)
        let aviso_y = div("aviso_formulario","aviso_formulario_confirmar_contraseña","Las contraseñas no coinciden")
        nodo_y.appendChild(aviso_y)

        x.style.border="none"
        x.style.borderBottom="solid 1px red"
        y.style.border="none"
        y.style.borderBottom="solid 1px red"
    }
}

function toggleVerContraseña(x) {
    let obj_temp = document.getElementById(x.getAttribute("id"))

    obj_temp.addEventListener("mouseup",function () {
        let style_temp = window.getComputedStyle(obj_temp).backgroundColor
        console.log(style_temp)
        if (style_temp==="rgb(255, 255, 255)") {
            obj_temp.style.background="rgb(197, 210, 251)"
        } else {
            obj_temp.style.background="white"
        }
    })

}

//////

function mkText(n,c,i,inner) {
    n = n || ""
    c = c || ""
    i = i || ""
    inner = inner || ""

    c==""?c_c="":c_c="cont_"+c
    i==""?c_i="":c_i="cont_"+i

    let obj_temp = div(c_c,c_i)
    n.appendChild(obj_temp)

    let p_temp = document.createElement("p")
    p_temp.setAttribute("class",c)
    p_temp.setAttribute("id",i)
    p_temp.innerHTML=inner
    obj_temp.appendChild(p_temp)

    return obj_temp

}

function mkTargetBlank(n,c,i,url,inner) {

    n = n || ""
    c = c || ""
    i = i || ""
    url = url || ""
    inner = inner || ""

    // c==""?c_c="":c_c="cont_"+c
    // i==""?c_i="":c_i="cont_"+c

    let obj_temp = document.createElement("a")
    obj_temp.setAttribute("target","_blank")
    obj_temp.setAttribute("class",c)
    obj_temp.setAttribute("id",i)
    obj_temp.setAttribute("href",url)
    obj_temp.innerHTML=inner

    n.appendChild(obj_temp)

    return obj_temp
}
function eliminarObj(x) {
    if (x) {
        x.remove()
    }
    return x
}

function mkPestañaText(n,c,i,t,...inner) {
    n=n||""
    c=c||""
    i=i||""
    t=t||""
    inner=inner||""
    
    //pestaña
    c==""?p_c="":p_c="pestaña_"+c
    i==""?p_i="":p_i="pestaña_"+i
    
    //header
    c==""?h_c="":h_c="header_"+c
    i==""?h_i="":h_i="header_"+i
    
        //titulo
        c==""?t_c="":t_c="tittle_"+c
        i==""?t_i="":t_i="tittle_"+i
    
        //boton
        c==""?btn_c="":btn_c="btn_cerrar_"+c
        i==""?btn_i="":btn_i="btn_cerrar_"+i
    
    //cuerpo
    c==""?crp_c="":crp_c="cuerpo_"+c
    i==""?crp_i="":crp_i="cuerpo_"+i
    
        //texto fila
        c==""?tf_c="":tf_c="cuerpo_"+c
        i==""?tf_i="":tf_i="cuerpo_"+i
    
    
    
            
    
    let obj_p = div(p_c,p_i)
    n.appendChild(obj_p)
    
    let obj_h = mkObj(obj_p,h_c,h_i)
        let obj_t = mkText(obj_h,t_c,t_i,t)
        let obj_btn_close = mkObj(obj_h,btn_c,btn_i,"~")
            obj_btn_close.style.userSelect="none"
            obj_btn_close.style.alignItems="center"
            obj_btn_close.style.justifyContent="center"
            obj_btn_close.style.cursor="pointer"
            obj_btn_close.addEventListener("mouseup",function() {
                obj_p.remove()
                return obj_p
            })
    
    
    let obj_crp = mkObj(obj_p,crp_c,crp_i)
    
        for (let j = 0; j < inner.length; j++) {
            let obj_p_crp = mkText(obj_crp,tf_c+inner[j],tf_i+inner[j],inner[j])
        }
    
    return obj_p
    }

    function mkTextList(n,c,i,...inner) {
        n = n || "";c = c || "";i = i || "";inner = inner || "";c==""?c_c="":c_c="cont_"+c;i==""?c_i="":c_i="cont_"+i;
        
        let obj_temp = div(c_c,c_i)
        n.appendChild(obj_temp)
    
        let p_temp = document.createElement("p")
        p_temp.setAttribute("class",c)
        p_temp.setAttribute("id",i)
        for (let j = 0; j < inner.length; j++) {
            let element = inner[j];
            // ! console.log(element)
            let sub_text = mkText(obj_temp,"sub_text_"+c,"sub_text_"+i+"_"+j,element)
            // ! console.log(sub_text)
                
        }
        return obj_temp
    }
    