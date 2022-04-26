$(document).ready(function () {

    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    jQuery.validator.addMethod("is_curp", function (value, element) {
        return value != "" ? /^[A-Z]{4}([0-9]{2})(0?[1-9]|10|11|12)(0?[1-9]|[0-2][0-9]|30|31)(H|M)(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TL|TS|VZ|YN|ZS)[BCDFGHJKLMNPQRSTVWXYZ]{3}[0-9]{2}$/.test(value.replace(/\s+/g, '')) : true;
    }, "CURP no válido.");


    $('#registerFormId').validate({
        errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation - check animations page
        errorElement: 'div',
        errorPlacement: function (error, e) {
            e.parents('.form-group > div').append(error);
        },
        highlight: function (e) {

            $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
            $(e).closest('.help-block').remove();
        },
        success: function (e) {
            e.closest('.form-group').removeClass('has-success has-error');
            e.closest('.help-block').remove();
        },
        rules: {
            'Email': {
                required: true,
                email: true
            },

            'Password': {
                required: true,
                minlength: 6
            },

            'ConfirmPassword': {
                required: true,
                equalTo: '#Password'
            },
            'solicitud': { required: true, lettersonly: true },// esta regla no funciona
            'strTipoCredito': { required: true },
            'cuenta': { required: true },
            'nombre': { required: true, lettersonly: true },
            'apaterno': { required: true, lettersonly: true },
            'amaterno': { required: true, lettersonly: true },
            'curp': { required: true, minlength: 18, maxlength: 18, is_curp: true },
            'clabe': { required: true, minlength: 18, maxlength: 18, number: true },
            'numsegurosocial': { required: true, number: true, minlength: 11, maxlength: 11 },
            'capitalsolicitado': { required: true, number: true },
            'strPlazo': { required: true },
            'strTasa': { required: true },
            'strCat': { required: true },
            'valorpago': { required: true, number: true },
            'montototalpagar': { required: true, number: true },
            'strGrupo': { required: true },
            'PostedFile': { required: true },
            'PostedFile2': { required: true }
        },
        messages: {
            'Email': 'Please enter valid email address',

            'Password': {
                required: 'Please provide a password',
                minlength: 'Your password must be at least 6 characters long'
            },

            'ConfirmPassword': {
                required: 'Please provide a password',
                minlength: 'Your password must be at least 6 characters long',
                equalTo: 'Please enter the same password as above'
            }, 'PostedFile': { required: 'Por favor adjunte los documentos' },
            'PostedFile2': { required: 'Por favor adjunte los documentos' },
            'state': { required: 'Sucursal es requerido para continuar' },
            'solicitud': { required: 'solicitud es requerido', lettersonly: "Solo ingrese letras" },
            'cuenta': { required: 'cuenta para continuar' },
            'nombre': { required: 'El Nombre  requerido para continuar', lettersonly: "Solo ingrese letras" },
            'apaterno': { required: 'El Apellido paterno requerido para continuar', lettersonly: "Solo ingrese letras" },
            'amaterno': { required: 'El Apellido materno para continuar', lettersonly: "Solo ingrese letras" },
            'curp': { required: 'CURP es  requerido para continuar', minlength: 'Por favor ingrese 18 caracteres', maxlength: 'Por favor ingrese 18 caracteres', is_curp: "curp no valido" },
            'clabe': { required: 'La  CLABE es requerido para continuar', minlength: 'Por favor ingrese 18 dígitos', maxlength: 'Por favor ingrese 10 dígitos', number: "Solo números" },
            'numsegurosocial': { required: 'El numero de seguro social es requerido para continuar', number: "Solo números", minlength: 'Por favor ingrese 11 dígitos', maxlength: 'Por favor ingrese 11 dígitos', },
            'capitalsolicitado': { required: 'El capital solicitado requerido para continuar', number: "Solo números" },
            'plazo': { required: 'El plazo requerido para continuar' },
            'tasa': { required: 'Debe seleccionar la tasa requerido para continuar' },
            'tipocredito': { required: 'Debe seleccionar el credito requerido para continuar' },
            'cat': { required: 'Debe seleccionar el cat requerido para continuar' },
            'valorpago': { required: 'El valor pago es requerido para continuar', number: "Solo números" },
            'montototalpagar': { required: 'El monto total a pagar es requerido para continuar', number: "Solo números" },
            'grupo': { required: 'Debe seleccionar el grupo requerido para continuar' }

        },


        submitHandler: function (form, e) {
            e.preventDefault();


            // e.preventDefault();
            var archivo1 = $("#archivo1").get(0).files[0],
                archivo2 = $('"[name="archivo2"]').get(0).files[0],
                archivo3 = $("#archivo3").get(0).files[0];

            if (!archivo1 || !archivo2) {
                MAIN.showMessage("error", "Por favor adjunte los documentos");
                return;
            }

        }

    });
});