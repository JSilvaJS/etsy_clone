// Javascript Entry Point

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
    </div>
  `;
});


$('.js_content').append(etsyProdHtml);




