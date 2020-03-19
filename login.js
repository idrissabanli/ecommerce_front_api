
const back_end_domain = 'http://35.225.243.133'

$(document).ready(function(){

    $('form').submit(function (e){
        e.preventDefault();

        // var form = new FormData(this);
        var form = $(this).serializeArray();

        $.ajax({
            url: `${back_end_domain}/accounts/api/login/`,
            method: 'POST',
            data: form,
            // enctype: 'multipart/form-data',
            // cache:false,
            // processData: false,
            // contentType: false,
            success: function(result, textStatus, xhr){
                console.log(result);
                console.log(JSON.stringify(result));

                localStorage.setItem('user_data', JSON.stringify(result));
                
                if (xhr.status === 200){

                    alert('Daxil oldunuz!')
                    window.location = 'add_product.html';
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
                console.log(errorResult);
                console.log(errors);
            },
        })
    });

});

