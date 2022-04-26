/// <reference path="../jquery-3.5.1.js" />
/// <reference path="../jquery-3.5.1.min.js" />

/// <reference path="../jquery.validate.min.js" />
/// <reference path="../jquery.validate.js" />


//$(document).ready(function () {
//    GET('${API_URL}states/datatable', function (res) {
//        if ($.isArray(res.data)) {
//            $.each(res.data, function (k, state) {
//                $('#form //select[name="state"]').append('<option>${state.name}</option>');
//            });
//        }
//    });
//})

jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

jQuery.validator.addMethod("is_curp", function (value, element) {
    return value != "" ? /^[A-Z]{4}([0-9]{2})(0?[1-9]|10|11|12)(0?[1-9]|[0-2][0-9]|30|31)(H|M)(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TL|TS|VZ|YN|ZS)[BCDFGHJKLMNPQRSTVWXYZ]{3}[0-9]{2}$/.test(value.replace(/\s+/g, '')) : true;
}, "CURP no válido.");



var $registrationForm = $("#form");
var archivo1, archivo2, archivo3;



if ($registrationForm.length) {
    $registrationForm.validate({
        rules: {
            state: {
                required: true
            },
            solicitud: { required: true, lettersonly: true },// esta regla no funciona
            tipocredito: { required: true },
            cuenta: { required: true },
            nombre: { required: true, lettersonly: true },
            apaterno: { required: true, lettersonly: true },
            amaterno: { required: true, lettersonly: true },
            curp: { required: true, minlength: 18, maxlength: 18, is_curp: true },
            clabe: { required: true, minlength: 18, maxlength: 18, number: true },
            numsegurosocial: { required: true, number: true, minlength: 11, maxlength: 11 },
            capitalsolicitado: { required: true, number: true },
            plazo: { required: true },
            tasa: { required: true },
            cat: { required: true },
            valorpago: { required: true, number: true },
            montototalpagar: { required: true, number: true },
            grupo: { required: true },
        },
        messages: {
            state: { required: 'Sucursal es requerido para continuar' },
            solicitud: { required: 'solicitud es requerido', lettersonly: "Solo ingrese letras" },
            cuenta: { required: 'cuenta para continuar' },
            nombre: { required: 'El Nombre  requerido para continuar', lettersonly: "Solo ingrese letras" },
            apaterno: { required: 'El Apellido paterno requerido para continuar', lettersonly: "Solo ingrese letras" },
            amaterno: { required: 'El Apellido materno para continuar', lettersonly: "Solo ingrese letras" },
            curp: { required: 'CURP es  requerido para continuar', minlength: 'Por favor ingrese 18 caracteres', maxlength: 'Por favor ingrese 18 caracteres', is_curp: "curp no valido" },
            clabe: { required: 'La  CLABE es requerido para continuar', minlength: 'Por favor ingrese 18 dígitos', maxlength: 'Por favor ingrese 10 dígitos', number: "Solo números" },
            numsegurosocial: { required: 'El numero de seguro social es requerido para continuar', number: "Solo números", minlength: 'Por favor ingrese 11 dígitos', maxlength: 'Por favor ingrese 11 dígitos', },
            capitalsolicitado: { required: 'El capital solicitado requerido para continuar', number: "Solo números" },
            plazo: { required: 'El plazo requerido para continuar' },
            tasa: { required: 'Debe seleccionar la tasa requerido para continuar' },
            cat: { required: 'Debe seleccionar el cat requerido para continuar' },
            valorpago: { required: 'El valor pago es requerido para continuar', number: "Solo números" },
            montototalpagar: { required: 'El monto total a pagar es requerido para continuar', number: "Solo números" },
            grupo: { required: 'Debe seleccionar el grupo requerido para continuar' },
        },

        submitHandler: function (form, e) {
            e.preventDefault();


            // e.preventDefault();
            archivo1 = $('[name="archivo1"]')[0].files[0],
                archivo2 = $('[name="archivo2"]')[0].files[0],
                archivo3 = $('[name="archivo3"]')[0].files[0];

            if (!archivo1 || !archivo2) {
                MAIN.showMessage("error", "Por favor adjunte los documentos");
                return;
            }


        },
        errorPlacement: function (error, element) {
            if (element.is(":input")) {
                error.appendTo(element.parents('.clabe'));
            }
            else if (element.is(":select")) {
                error.appendTo(element.parents('.plazo'));
            }
            else {
                error.insertAfter(element);
            }

        }
    });
}
//if ($form.length==0) {
//    $form.validate({
//        rules: {
//            state: {
//                required: true
//            },
//            solicitud: { required: true, lettersonly: true },// esta regla no funciona
//            tipocredito: { required: true },
//            cuenta: { required: true },
//            nombre: { required: true, lettersonly: true },
//            apaterno: { required: true, lettersonly: true },
//            amaterno: { required: true, lettersonly: true },
//            curp: { required: true, minlength: 18, maxlength: 18, is_curp: true },
//            clabe: { required: true, minlength: 18, maxlength: 18, number: true },
//            numsegurosocial: { required: true, number: true, minlength: 11, maxlength: 11 },
//            capitalsolicitado: { required: true, number: true },
//            plazo: { required: true },
//            tasa: { required: true },
//            cat: { required: true },
//            valorpago: { required: true, number: true },
//            montototalpagar: { required: true, number: true },
//            grupo: { required: true },
//        },
//        messages: {
//            state: { required: 'Sucursal es requerido para continuar' },
//            solicitud: { required: 'solicitud es requerido', lettersonly: "Solo ingrese letras" },
//            cuenta: { required: 'cuenta para continuar' },
//            nombre: { required: 'El Nombre  requerido para continuar', lettersonly: "Solo ingrese letras" },
//            apaterno: { required: 'El Apellido paterno requerido para continuar', lettersonly: "Solo ingrese letras" },
//            amaterno: { required: 'El Apellido materno para continuar', lettersonly: "Solo ingrese letras" },
//            curp: { required: 'CURP es  requerido para continuar', minlength: 'Por favor ingrese 18 caracteres', maxlength: 'Por favor ingrese 18 caracteres', is_curp: "curp no valido" },
//            clabe: { required: 'La  CLABE es requerido para continuar', minlength: 'Por favor ingrese 18 dígitos', maxlength: 'Por favor ingrese 10 dígitos', number: "Solo números" },
//            numsegurosocial: { required: 'El numero de seguro social es requerido para continuar', number: "Solo números", minlength: 'Por favor ingrese 11 dígitos', maxlength: 'Por favor ingrese 11 dígitos', },
//            capitalsolicitado: { required: 'El capital solicitado requerido para continuar', number: "Solo números" },
//            plazo: { required: 'El plazo requerido para continuar' },
//            tasa: { required: 'Debe seleccionar la tasa requerido para continuar' },
//            cat: { required: 'Debe seleccionar el cat requerido para continuar' },
//            valorpago: { required: 'El valor pago es requerido para continuar', number: "Solo números" },
//            montototalpagar: { required: 'El monto total a pagar es requerido para continuar', number: "Solo números" },
//            grupo: { required: 'Debe seleccionar el grupo requerido para continuar' },
//        }
//        ,
//        errorPlacement: function (error, element) {


//        }
//    })
//}
