jQuery(document).ready(function () {
    const productos = [{'url':'./Assets/Mask Group_5.png'},{ 'url':'./Assets/Mask Group_6.png'},{ 'url':'./Assets/Mask Group_7.png'},{ 'url':'./Assets/Group 18_2.png'}];

    jQuery.each(productos, function(i,v){
        let carta='';
        if (i< 3){
            carta = `
            <div class="card">
                <div class="imgCarta">
                <img src="`+v.url+`"></div>
                <div class="name"></div>
                <div class="precio"></div>
            </div>`
            ;
        }
        else{
            carta = `
            <div class="card hidden">
                <div class="imgCarta">
                <img src="`+v.url+`"></div>
                <div class="name"></div>
                <div class="precio"></div>
            </div>`
            ;
        }

   // jQuery('.carousel').append(carta);
    });
    
});