
const back_end_domain = 'http://35.225.243.133'
var user_data = JSON.parse(localStorage.getItem('user_data'));

$(document).ready(function(){

    if(user_data && user_data.hasOwnProperty('token')){
        var token = user_data['token'];
        $('body').show();
    }
    else{
        window.location = 'login.html';
    }

    $('form').submit(function (e){
        e.preventDefault();

        var form = new FormData(this);
        if($('[name="main_image"]')[0].files.length !== 0){
            form.append('main_image', $('[name="main_image"]')[0].files[0], $('[name="main_image"]').val());
        }
        

        $.ajax({
            url: `${back_end_domain}/api/products/`,
            method: 'POST',
            data: form,
            headers: {
                'Authorization': `Token ${token}`
            },
            enctype: 'multipart/form-data',
            cache:false,
            processData: false,
            contentType: false,
            success: function(result, textStatus, xhr){
                console.log(result);
                if (xhr.status === 201){
                    window.location = 'products.html'
                }else{
                    alert('Sehvlik var!');
                }
            },
            error: function(errorResult){
                var errors = errorResult.responseJSON;
                if (errors.hasOwnProperty('non_field_errors')){
                    $('#non_field_errors').text(errors['non_field_errors']);
                }
                for(var error in errors){
                    $(`input[name=${error}]`).siblings('small').text(errors[error]);
                }
                if (errorResult.statusText ==='error'){
                    window.location = 'login.html';
                }
                console.log(errorResult);
                console.log(errors);
            },
        })
    });

});

