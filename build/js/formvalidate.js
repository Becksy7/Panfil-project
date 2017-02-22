$(document).ready(function(){

    $("#checkoutform").validate({
        onfocusout: true,
        onkeyup: true,
        onclick: true,
        onsubmit: true,

        rules:{

            name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            userPhone: {
                required: true,
                minlength: 4,
                maxlength: 16,
                pattern: '(/+)?[0-9]+$',
            },

            city:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
            mail:{
                required: true,
                email: true,
            },
        },

        messages:{
            userPhone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },

            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },

            city:{
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            },
            mail:{
                required: "Это поле обязательно для заполнения",
                email: "Некорректный e-mail адрес",
            },

        }

    });

});