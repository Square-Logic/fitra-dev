$(document).ready(function() {
  $(document).on('change', '#variant-id', function() {
    let variant_id = this.value;
    let variant_image = $('.single-product-image[data-variant="'+variant_id+'"]');

    variant_image.show().siblings(':visible').hide();
  })
});

// function ready(fn) {
//   if (document.readyState != 'loading'){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
// ready(() => {
//   let variant_id = this.value;
//   let variant_image = .single-product-image[data-variant = variant_id]


//   document.querySelectorAll(variant_image).forEach(element => {
//     element.style.display = 'block';
//     element.siblings(':visible').style.display = 'none';
//   })
// });


// document.ready(function() {
//   document.on('change', '#variant-id', function() {
//     let variant_id = this.value;
//     let variant_image = $('.single-product-image[data-variant="'+variant_id+'"]');

//     variant_image.style.display = 'block'.siblings(':visible').style.display = "none";
//   })
// });