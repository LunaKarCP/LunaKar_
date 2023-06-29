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