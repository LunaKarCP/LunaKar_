function DOM(){
    let body = document.body

    let cont_principal = mkObj(body,"cont_principal","cont_principal")

    let header_principal = mkObj(cont_principal,"header_principal","header_principal")
        //cont_img_logo_header
        let logo_header = mkObjImg(header_principal,"img_logo_header","img_logo_header","./vista/img/logo.png")


    let cuerpo_principal = mkObj(cont_principal,"cuerpo_principal","cuerpo_principal")

        let pestaña_inicio = mkObj(cuerpo_principal,"pestaña","pestaña_inicio")
            let introduccion_inicio = mkObj(pestaña_inicio,"introduccion_inicio","introduccion_inicio")
                introduccion_inicio.innerHTML="<p>Contamos con una gran experiencia en servicios de facturación electrónica, comprometidos en brindar soluciones eficientes y confiables para tus necesidades fiscales. Nuestra amplia experiencia en el campo de la facturación nos ha posicionado como un socio confiable para empresas de diversos sectores y tamaños. En •<span style='font-size:xx-large;color:white;'><span style='color:var(--colorc);'>Luna</span> Kar</span>•, entendemos la importancia de contar con un proceso de facturación ágil, seguro y en cumplimiento con las normativas vigentes. Es por eso que ofrecemos un conjunto completo de servicios diseñados para simplificar y optimizar tu gestión tributaria. Nuestro equipo está dedicado a proporcionarte un servicio personalizado, adaptado a las particularidades de tu empresa o servicios que realizas. Desde la emisión de facturas electrónicas y la generación de CFDI, hasta la gestión de complementos de pago y la asesoría fiscal, estamos aquí para cubrir todas tus necesidades relacionadas con la facturación.</p>"
            
            let informacion_cartas_porte = mkObj(pestaña_inicio,"informacion_cartas_porte","informacion_cartas_porte")
                introduccion_inicio.innerHTML="LEOANRDO"

}
window.addEventListener("load",function(){
    DOM()
})