var vat = $("#vat");
var tprice = $("#total-price");

$(document).ready(function(){
    
    //sizes
    var pprice = $("#pizza-price");
    $('#small').change(function(){
        pprice.val("5.00");
        calc();
    });

    $('#medium').change(function(){
        pprice.val("11.00");
        calc();
    });

    $('#large').change(function(){
        pprice.val("16.00");
        calc();
    });

    //topping
    var eprice = $("#extra-price");
    var eVal = Number(eprice[0].value);
    var pVal = Number(pprice[0].value);
    $('#cheese').change(function(){
        if ($("#cheese").is(":checked")) { 
            eprice.val(parseFloat(Number(eprice[0].value)+1).toFixed(2));
        } else { 
            eprice.val(parseFloat(Number(eprice[0].value)-1).toFixed(2));
        }
        calc();
    });

    $('#pineapple').change(function(){
        if ($("#pineapple").is(":checked")) { 
            eprice.val(parseFloat(Number(eprice[0].value)+2).toFixed(2));
        } else { 
            eprice.val(parseFloat(Number(eprice[0].value)-2).toFixed(2));
        }
        calc();
    });

    $('#kale').change(function(){
        if ($("#kale").is(":checked")) { 
            eprice.val(parseFloat(Number(eprice[0].value)+3).toFixed(2));
        } else { 
            eprice.val(parseFloat(Number(eprice[0].value)-3).toFixed(2));
        }
        calc();
    });
    function calc(){
        var total = Number(pprice[0].value)+Number(eprice[0].value);
        vat[0].value = total*10/100;
        tprice[0].value = parseFloat(Number(vat[0].value)+total).toFixed(2);
    }
});