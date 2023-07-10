function DOM(){
    let body = document.body

    let cont_principal = mkObj(body,"cont_principal","cont_principal")

        //
        let cont_anuncio = mkObj(cont_principal,"cont_anuncio","cont_anuncio")

            let pestaña_anuncio = mkObj(cont_anuncio,"pestaña_anuncio","pestaña_anuncio")

                let p_titulo_pestaña_anuncio = mkText(pestaña_anuncio,"p_titulo_pestaña_anuncio","","!Bienvenido a LunaKar!")

                let fila_pestaña_anuncio = mkObj(pestaña_anuncio,"fila_cuerpo","fila_cuerpo_pestaña_anuncio_img_desc")

                    let img_operador_toon = mkObjImg(fila_pestaña_anuncio,"img_operador_toon","img_operador_toon","./vista/img/operador_toon.png")
                    let p_descripcion_pestaña_anuncio = mkText(fila_pestaña_anuncio,"p_descripcion_pestaña_anuncio","p_descripcion_pestaña_anuncio","Hola, estamos aquí para resolver tus dudas, puedes ponerte en contacto a traves de nuestras redes y otros medios para que podamos apoyarte.")
                
                let p_aviso_presiona_tecla = mkText(pestaña_anuncio,"","","Presiona cualquier tecla para continuar")
        
        document.addEventListener("click",function() {
            if (cont_anuncio) {                
                cont_anuncio.remove()
            }
        })
        document.addEventListener("keydown",function() {
            if (cont_anuncio) {                
                cont_anuncio.remove()
            }
        })

    let header_principal = mkObj(cont_principal,"header_principal","header_principal")
        //cont_img_logo_header
        let logo_header = mkObjImg(header_principal,"img_logo_header","img_logo_header","./vista/img/logo_lunakar_text_white.png")


    let cuerpo_principal = mkObj(cont_principal,"cuerpo_principal","cuerpo_principal")

        let pestaña_inicio = mkObj(cuerpo_principal,"pestaña","pestaña_inicio")

            let fila_info_carta_porte = mkObj(pestaña_inicio,"fila_cuerpo","fila_info_carta_porte")

                let p_info_carta_porte_titulo = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","","¿QUÉ ES EL CFDI CON COMPLEMENTO CARTA PORTE?")
                let p_info_carta_porte_descripcion = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion","","El Complemento Fiscal Digital por Internet (CFDI), es un documento oficial que sirve para respaldar las operaciones comerciales y fiscales. Es un comporbante obligatorio para transacciones de compra/venta en servicios de transporte. El CFDI es emitido y respaldado por el SAT como evidencia electrónica para las trasacciones comerciales y fiscales.")

                let img_documentos_toon = mkObjImg(fila_info_carta_porte,"img_documentos_toon","img_documentos_toon","./vista/img/doc_toon.png")

                let p_info_carta_porte_titulo_beneficios = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","","BENEFICIOS")
                    let p_info_carta_porte_descripcion_beneficios_cumplimiento_fiscal = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Cumplimiento Fiscal: Permite cumplir con obligaciones fiscales para evitar sanciones.")
                    let p_info_carta_porte_descripcion_beneficios_gestion_informacion = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Gestión de Información: Integración datos más precisos.")
                    let p_info_carta_porte_descripcion_beneficios_transparecia_seguridad = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Transparencia y Seguridad: Registro electrónico detallado que evita prácticas fraudelentas e irregularidades en la cadena de suministro.")

                let img_publicidad_lunakar_confianza = mkObjImg(fila_info_carta_porte,"img_publicidad_lunakar_confianza","img_publicidad_lunakar_confianza","./vista/img/publicidad_confianza.png")

                let p_info_carta_porte_titulo_preguntas_frecuentes = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","","PREGUNTAS FRECUENTES")

                    let p_info_carta_porte_descripcion_pregunta_obligados = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","• QUIÉNES ESTÁN OBLIGADOS A EMITIR?")
                    let p_info_carta_porte_descripcion_respuesta_obligados = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Está obligada a emitir CFDI con Complemento Carta Porte, toda persona física o moral que realice operaciones de transporte de cargar a nivel nacional.")

                    let p_info_carta_porte_descripcion_pregunta_cuando_emitir = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","• ¿CUÁNDO DEBO EMITIR UN CFDI CON COMPLEMENTO CARTA PORTE")
                    let p_info_carta_porte_descripcion_respuesta_cuando_emitir = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- El CFDI debe ser emitido cuado se realice una operacion de transporte de carga según las dispociciones fiscales vigentes.")

                    let p_info_carta_porte_descripcion_pregunta_como_validar = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","• ¿CÓMO VALIDAR LA INFORACIÓN DE CFDI c/ CCP?")
                    let p_info_carta_porte_descripcion_respuesta_como_validar = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","-- Puedes validar la autentiicdad de un CFDI con Complemento Carta Porte utiizando los servicios de consulta en linea que ofrece la plataforma del SAT.")

                    let p_info_carta_porte_descripcion_pregunta_fuentes = mkText(fila_info_carta_porte,"p_info_carta_porte_titulo","p_titulo_otros_recursos","OTROS RECURSOS")
                        let a_info_dof_cartas_porte = mkTargetBlank(fila_info_carta_porte,"a_info_fuentes","","https://dof.gob.mx/nota_detalle_popup.php?codigo=5419975","• DOF - Diario Oficial de la Federación.")
                        let a_info_informacion_integrada = mkTargetBlank(fila_info_carta_porte,"a_info_fuentes","","http://omawww.sat.gob.mx/cartaporte/paginas/default.htm","• Qué información se integra en el complemento Carta Porte.")
                        let a_info_modificaciones_comp_fiscales = mkTargetBlank(fila_info_carta_porte,"a_info_fuentes","","http://ri.uaemex.mx/handle/20.500.11799/21840","• Modificaciones que han tenido los comprobantes fiscales en México durante los últimos 5 años y sus diferencias.")
                    // let p_info_carta_porte_descripcion_respuesta_fuentes = mkText(fila_info_carta_porte,"p_info_carta_porte_descripcion_beneficios","","Puedes validar la autentiicdad de un CFDI con Complemento Carta Porte utiizando los servicios de consulta en linea que ofrece la plataforma del SAT")


            let introduccion_inicio = mkObj(pestaña_inicio,"introduccion_inicio","introduccion_inicio_intro")
                introduccion_inicio.innerHTML="<p>Contamos con una gran experiencia en servicios de facturación electrónica, comprometidos en brindar soluciones eficientes y confiables para tus necesidades fiscales. Nuestra amplia experiencia en el campo de la facturación nos ha posicionado como un socio confiable para empresas de diversos sectores y tamaños. En •<span style='font-size:xx-large;color:white;'><span style='color:var(--colorc);'>Luna</span> Kar</span>•, entendemos la importancia de contar con un proceso de facturación ágil, seguro y en cumplimiento con las normativas vigentes. Es por eso que ofrecemos un conjunto completo de servicios diseñados para simplificar y optimizar tu gestión tributaria. Nuestro equipo está dedicado a proporcionarte un servicio personalizado, adaptado a las particularidades de tu empresa o servicios que realizas. Desde la emisión de facturas electrónicas y la generación de CFDI, hasta la gestión de complementos de pago y la asesoría fiscal, estamos aquí para cubrir todas tus necesidades relacionadas con la facturación.</p>"
            
            let informacion_cartas_porte = mkObj(pestaña_inicio,"informacion_cartas_porte","informacion_cartas_porte")
                let img_sat = mkObjImg(informacion_cartas_porte,"img_sat","img_sat","./vista/img/logo_sat.png")

                let inf_carta_porte = mkObj(informacion_cartas_porte,"introduccion_inicio","introduccion_inicio_info")
                    let inf_carta_porte_titulo = mkText(inf_carta_porte,"p_inf_cart","p_inf_cart_titulo","INFORMACIÓN REQUERIDA PARA EMITIR CFDI CON COMPLEMETO CARTA PORTE")
                    let inf_carta_porte_identificacion_fiscal = mkText(inf_carta_porte,"p_inf_cart","","-- Identificación Fiscal")
                    let inf_carta_porte_mercancia = mkText(inf_carta_porte,"p_inf_cart","","-- Información mercancía")
                    let inf_carta_porte_vehiculo_operador = mkText(inf_carta_porte,"p_inf_cart","","-- Información Vehículo / Operador")

            let informacion_contacto = mkObj(pestaña_inicio,"fila_cuerpo")
                
                let a_img_contacto = mkTargetBlank(informacion_contacto,"a_img_contacto","a_img_contacto","https://wa.me/5551736226")
                    let img_contacto = mkObjImg(a_img_contacto,"img_contacto","img_contacto","./vista/img/whats.png")

                let info_contacto = mkObj(informacion_contacto,"introduccion_inicio")
                    let p_inf_contacto = mkText(info_contacto,"","","Número: (+52) 55 5173 6226")
                


            

}
window.addEventListener("load",function(){
    DOM()
})