$(document).ready(function(){
    const back_end_domain = 'http://35.225.243.133'

    $.ajax({
        url: `${back_end_domain}/api/products/`,
        method: 'GET',
        success: function(result){
            // console.log(result);
            for(var product of result){
                $('#products').append(`<div class="col-lg-3">
                <a href="product.html?id=${product.id}">
                    <div class="card ">
                        <img class="card-img-top" src="${product.main_image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description} ${product.price}</p>
                        </div>
                    </div>
                </a>
            </div>`);
            }
            
        },
        error: function(error){
            alert('error')
        }
    })
});

