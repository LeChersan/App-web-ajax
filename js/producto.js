let params = new URLSearchParams(window.location.search)

if (!params.has("id") || params.get("id") == "") {
    alert("no se ha seleccionado ningun producto")
    window.location ="index.html"
}

let idProduct = params.get("id")

$.get("data/products.json", function(){
    console.log("espere por favor")
})
.done(function(data){
    let productos = data
        $.each(productos, function(index, value){
            if (idProduct == value.id){
                $("#nameProduct").html(value.nombre)
                $("#descProduct").html(value.desc)
                $("#precioProduct").html(`$${value.precio}.00`)
                $("#imgProduct").html(`<img id="imgPrincipal" src="${value.img}" alt="" width="100%"></img>`)
                $.each(value.sabores, function(index2, value2){
                    let itemSabor = `<li class="list-group-item">${value2}</li>`
                    $("#saboresProduct").append(itemSabor)   
                })
                $.each(value.sizes, function(index3, value3){
                    let itemSizes = `<li class="list-group-item">${value3}</li>`
                    $("#sizesProduct").append(itemSizes)  
                })
                $.each(value.imgs, function(index4, value4){
                    let itemImg = `<a href="#" onclick="sliderImgs('${value4}')"><img src="${value4}" alt=""></a>`
                    $("#imgsProduct").append(itemImg)
                })
            }   
        })  
})
.fail(function(){
    console.log("error en el servidor")
})
.always(function(){
    console.log("finished")
})

// Funcion para imagenes detalle de producto
const sliderImgs = (url) => {
    // alert("Hola")
    $("#imgPrincipal").attr("src", url)
}
