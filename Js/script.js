jQuery(document).ready(function () {
    const productos = [{'url':'./Assets/Mask Group_5.png', 'nombre':'Wilson Championship Extra Duty Tennis Balls 3 pk'},{ 'url':'./Assets/Mask Group_6.png','nombre':'Wilson Starter 3 Balls'},{ 'url':'./Assets/Mask Group_7.png','nombre':'Wilson Tour Slam Lite Tennis Racquet'},{ 'url':'./Assets/Group 18_2.png','nombre':'Nike Swoosh Wristbands'}];

    jQuery.each(productos, function(i,v){
        let carta='';
        if (i< 3){
            carta = `
            <div class="cardx">
                <div class="imgCarta">
                <img src="`+v.url+`"></div>
                <div class="nombreProd"><h2 class="name">`+v.nombre+`</h2>
                </div>
                <div class="precio"><p class="description">$22.09</p></div>
            </div>`
            ;
        }
        else{
            carta = `
            <div class="cardx hidden">
                <div class="imgCarta">
                <img src="`+v.url+`"></div>
                <div class="nombreProd"></div>
                <div class="precio"></div>
            </div>`
            ;
        }

    jQuery('.carousel').append(carta);
    });
    
});