# WAD-Order-Pizza

### all codes below

## [look at it live](https://captkraken.github.io/WAD-test/)

## 1/ ដោយសន្មត់គ្រប់ file ថិតនៅជាមួយគ្នា។ បង្កើត default.html មួយដែលភ្ជាប់ទៅកាន់ default.css, jquery-3.5.1.js, និង default.js

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Default</title>
    <link rel="stylesheet" href="default.css">
</head>
<body>
    <script src="jquery-3.5.1.js"></script>
    <script src="default.js"></script>
</body>
</html>
```

## 2/ ក្នុង body នៃ default.html ខាងលើ ចូរបង្កើត form ដែលបញ្ជាក់តាមរូប។

![](https://lists.office.com/Images/2017eaab-53af-49e9-8125-5d60a193d9ad/b71eb69d-6421-4f57-8a86-67009e032ce5/TD4M6T3KR62S0B8G1T28ME7RHY/09c4ca43-6ef8-4c3d-bd04-23f0e015c8cd)

```html
<form>
        <h1>Order Pizza</h1>

        <!-- size -->
        <p>Choose a Size</p>
        <input type="radio" name="pizza-sizes" value="small" id="small" />
        <label for="small">Small ($5.00)</label>

        <input type="radio" name="pizza-sizes" value="medium" id="medium" />
        <label for="medium">Medium ($11.00)</label>

        <input type="radio" name="pizza-sizes" value="large" id="large" checked="checked" />
        <label for="large">Large ($16.00)</label>
        
        <!-- topping -->
        <p>Extra Topping</p>
        <input id="cheese" type="checkbox" name="extra-topping" value="top-cheese" />
        <label for="top-cheese">Extra Cheese ( + $1.00)</label>

        <input id="pineapple" type="checkbox" name="extra-topping" value="top-pineapple" />
        <label for="top-pineapple">Pinnaple ( + $2.00)</label>

        <input id="kale" type="checkbox" name="extra-topping" value="top-kale" />
        <label for="top-kale">Kale ( + $3.00)</label>

        <!-- prices -->
        <p>Extra Topping</p>
        <label for="pizza">Pizza Price</label>
        <input id="pizza-price" type="text" name="pizza-price" size="2" value="10.10">

        <label for="extra-price">Extra Price</label>
        <input id="extra-price" type="text" name="extra-price" size="2">

        <label for="vat">VAT(10%)</label>
        <input id="vat" type="text" name="vat" size="2">

        <label for="total-price">Total Price</label>
        <input id="total-price" type="text" name="total-price" size="2">
    </form>
```
## 3/ ចូរសរសេរ CSS តាមការកំណត់ខាងក្រោម h1 និង div មាន margin ទាំងបួនខាងស្មើ ០ p មាន margin ទាំងបួនខាង4px និងទំហំអក្សរ 24px label មានទំហំអក្សរ 18px text box ទាំងអស់ មាន ទទឹង 40px និង អត្ថបទនៅចំកណ្តាល ព្រមទាំងពត់កែងស៊ុំ 4px form មានទទឹង 580px ព្រមទាំង margin លើក្រោម 16px និង ឆ្វេងស្តាំ auto

```css
h1, div {
    margin: 0;
}

p {
    margin: 4px;
    font-size: 24px;
}

label {
    font-size: 18px;
}

input[type=text] {
    width: 40px;
    text-align: center;
    border-radius: 4px;
}

form {
    width: 580px;
    margin: 16px auto;
}
```
## 4/ ប្រើ JavaScript ឬ Query ថែមព្រឹត្តិការណ៍ change ឲ្យ radio button ដើម្បីបង្ហាញតម្លៃ pizza ក្នុង ប្រអប់អត្ថបទ Pizza Price ទៅតាមការជ្រើសរើស។

```javascript
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
```
## 5/ ប្រើ JavaScript ឬ Query ថែមព្រឹត្តិការណ៍ change ឲ្យ check box ដើម្បីបង្ហាញតម្លៃបន្ថែម, ពន្ធ VAT, និង តម្លៃសរុប ក្នុង ប្រអប់អត្ថបទ Extra Price, VAT(10%), Total Price ទៅតាមការជ្រើសរើសមួយឬច្រើន។
```javascript
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
```
