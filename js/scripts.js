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

$.get("data/products.json", function(){
    console.log("espere por favor")
})
.done(function(data){
    console.log(data)
    let productos = data
    console.log(productos[0].nombre)
    console.log( productos[1].sabores[3])
    console.log(productos[0].sizes[2])
})
.fail(function(){
    console.log("error en el servidor")
})
.always(function(){
    console.log("finished")
})

