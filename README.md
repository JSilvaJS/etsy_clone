# Synopsis
The goal is to recreate the layout of [this etsy page](https://www.etsy.com/search?q=whiskey) while also using [this API data](https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop).

# Sample Code
``` javascript
import etsyData from './items';
import $ from 'jquery';

var etsyProducts = etsyData.results;

var etsyProdHtml = etsyProducts.map(function(product) {
	var images = product.Images[0].url_170x135;
	var title =  product.title;
	// var seller = etsyProducts.
	var price = product.price;
	var shopName = product.Shop.shop_name;

	return `
	  <div class="boxes_wrapper">
      <div class="image_box">
        <img src="${images}" alt="${title}">
      </div>
      <div class="price">$${price}</div>
      <div class="shopName">${shopName}</div>
      <div class="title">${title}</div>
      <div class="hamburger"></div>
      <div class="heart"></div> 
    </div>
  `;
});


$('.js_content').append(etsyProdHtml);
```
# Deployed Code
[Check It Out](http://tiy-2016q1-eh_cosmo-etsy_clone.surge.sh/)
