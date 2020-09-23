// $.ajax({
//     type:"GET",
//     dataType: "JSON",
//     url: "data/products.json",
//     beforeSend: function(){
//         console.log("espere por favor...")

//     },
//     success: function(data){
//         let productos = data
//         // console.log(productos)
//         console.log(productos[0].nombre)
//         console.log(productos[1].precio)

//     },
//     error: function(){
//         console.log("error en el servidor")

//     }
// })
const getProducts = (categoria) => {
    $("#contentProducts").html('')
    $.get("data/products.json", function(){
        console.log("espere por favor")
    })
    .done(function(data){
        let productos = data
            $.each(productos, function(index, value){
                let producto = `<a href="producto.html?id=${value.id}" style="text-decoration:none;color:black;">`+
                                    `<div class="media align-items-lg-center flex-column flex-lg-row p-3">`+
                                    
                                        `<div class="media-body order-2 order-lg-1">`+
                                        `<h5 class="">${value.nombre}</h5>`+
                                        `<p>${value.desc}</p>`+
                                        `<div class="d-flex align-items-center justify-content-between mt-1">`+
                                        `<h6 class="font-weight-bold my-2">$${value.precio}</h6>`+
                                        `</div>`+
                                        `</div>`+
                                        `<img src="${value.img}" alt="${value.nombre}" width="200" class="ml-lg-5 order-1 order-lg-2">`+
                                    `</div>`+
                                `</a>`; 
                if(categoria == value.categoria){
                    console.log(value.nombre)
                    
                    $('#contentProducts').append(producto)
                }
                if(categoria == 0){
                    $('#contentProducts').append(producto)
                }
            })
        
    })
    .fail(function(){
        console.log("error en el servidor")
    })
    .always(function(){
        console.log("finished")
    })

}

getProducts(0)