function DOM(){
    let body = document.body

    let cont_principal = mkObj(body,"cont_principal","cont_principal")

    let header_principal = mkObj(cont_principal,"header_principal","header_principal")
        //cont_img_logo_header
        let logo_header = mkObjImg(header_principal,"img_logo_header","img_logo_header","./vista/img/logo.png")


    let cuerpo_principal = mkObj(cont_principal,"cuerpo_principal","cuerpo_principal")

        let pestaña_inicio = mkObj(cuerpo_principal,"pestaña","pestaña_inicio")

            let bar_top = mkObj(pestaña_inicio,"bar_top")

            let introduccion_inicio = mkObj(pestaña_inicio,"introduccion_inicio","introduccion_inicio_intro")
                introduccion_inicio.innerHTML="<p>Contamos con una gran experiencia en servicios de facturación electrónica, comprometidos en brindar soluciones eficientes y confiables para tus necesidades fiscales. Nuestra amplia experiencia en el campo de la facturación nos ha posicionado como un socio confiable para empresas de diversos sectores y tamaños. En •<span style='font-size:xx-large;color:white;'><span style='color:var(--colorc);'>Luna</span> Kar</span>•, entendemos la importancia de contar con un proceso de facturación ágil, seguro y en cumplimiento con las normativas vigentes. Es por eso que ofrecemos un conjunto completo de servicios diseñados para simplificar y optimizar tu gestión tributaria. Nuestro equipo está dedicado a proporcionarte un servicio personalizado, adaptado a las particularidades de tu empresa o servicios que realizas. Desde la emisión de facturas electrónicas y la generación de CFDI, hasta la gestión de complementos de pago y la asesoría fiscal, estamos aquí para cubrir todas tus necesidades relacionadas con la facturación.</p>"
            
            let informacion_cartas_porte = mkObj(pestaña_inicio,"informacion_cartas_porte","informacion_cartas_porte")
                let img_sat = mkObjImg(informacion_cartas_porte,"img_sat","img_sat","./vista/img/logo_sat.png")
                //"<p>Información relacionada con facturación: <br>-- Cédula de Identificación Fiscal<br>-- Detalles de envío<br>-- Jeje</p>"
                let inf_carta_porte = mkObj(informacion_cartas_porte,"introduccion_inicio","introduccion_inicio_info")
                    let inf_carta_porte_titulo = mkText(inf_carta_porte,"p_inf_cart","p_inf_cart_titulo","INFORMACIÓN CFDI CON COMPLEMETO CARTA PORTE")
                    let inf_carta_porte_identificacion_fiscal = mkText(inf_carta_porte,"p_inf_cart","","-- Identificación Fiscal")
                    let inf_carta_porte_mercancia = mkText(inf_carta_porte,"p_inf_cart","","-- Información mercancía")
                    let inf_carta_porte_vehiculo_operador = mkText(inf_carta_porte,"p_inf_cart","","-- Información Vehículo / Operador")

            let informacion_contacto = mkObj(pestaña_inicio,"fila_cuerpo")
                
                let a_img_contacto = mkTargetBlank(informacion_contacto,"a_img_contacto","a_img_contacto","https://wa.me/5551736226")
                    let img_contacto = mkObjImg(a_img_contacto,"img_contacto","img_contacto","./vista/img/whats.png")
                


            

}
window.addEventListener("load",function(){
    DOM()
})