$(document).ready(function(){
    const back_end_domain = 'http://35.225.243.133';
    const page_url = window.location.href;
    const id_position = page_url.split('?id=')[1];
    $.ajax({
        url: `${back_end_domain}/api/products/${id_position}/`,
        method: 'GET',
        success: function(product){
            // console.log(result);
            // for(var product of result){
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
            // }
            
        },
        error: function(error){
            alert('error')
        }
    })
});

