$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength6:6,
                maxlength:12
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"First name should be atleast 4 characters long",
                maxlength:"First name should not have more than 10 characters"
            },
            sname:{
                required:"Enter surname",
                minlength:"First name should be atleast 4 characters long",
                maxlength:"First name should not have more than 10 characters"
            },
            email:{
                required:"Enter email",
                email:"invalid email"
            },
            password:{
                required:"enter password",
                minlength:"password should be atleast 6 character long",
                maxlength:"password should not have more than 12 characters"
            },
            day:{
                required:"Select birth day"
            },
            month:{
                required:"Select birth month"
            },
            year:{
                required:"Select birth year"
            },
            gender:{
                required:"Select gender"
            }
        }
    })
})