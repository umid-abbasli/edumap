$(document).ready(function () {
  // head
  $(".header-2-search").click(function () {
    $(".header-search-section").slideToggle(200);
    $(".header-2-search > img").toggleClass("d-none");
    $(".header-2-search > i").toggleClass("d-none");
  });
  $(".hamburger-header-1").click(function () {
    $(".hamburger-header-1 span:nth-child(1)").toggleClass(
      "hamburger-header-1-animated-1"
    );
    $(".hamburger-header-1 span:nth-child(2)").toggleClass(
      "hamburger-header-1-animated-first"
    );
    $(".hamburger-menu").slideToggle();
  });
  $(".hamburger-header-2").click(function () {
    $(".hamburger-header-2 span:nth-child(1)").toggleClass(
      "hamburger-header-1-animated-1"
    );
    $(".hamburger-header-2 span:nth-child(2)").toggleClass(
      "hamburger-header-1-animated"
    );
    $(".hamburger-menu-2").slideToggle();
  });
  $(".hambuger-accordion").click(function () {
    $(".hamburger-accordion-content").slideToggle("faster");
  });
  // head end

  //   select country
  // $("#checkcountry").click(function () {
  //   $(".select-contry-content").toggle();
  // });
  // $(".select-contry-content").click(function () {
  //   $(".select-contry-content").hide();
  // });

  // select country end
});
// let checkcountry = document.getElementById("checkcountry");
// window.addEventListener("mouseup", function (event) {
//   var pol = document.getElementById("select-contry-content");
//   if (event.target != pol && event.target.parentNode != pol) {
//     pol.style.display = "none";
//   }
// });
// let selectcontrycontent = document.getElementById("select-contry-content");
// const selectcountries ="azerbaijan +994 ,turkey +123 ,russian +007 ,ozbekistan +237 ,iran +785";

// const selectcountriesarr = selectcountries.split(",");

// let countryphone = "";
// for (let i = 0; i < selectcountriesarr.length; i++) {
//   countryphone += `<div onclick="addcountry('+${
//     selectcountriesarr[i].split("+")[1]
//   }')">
//   ${selectcountriesarr[i].split("+")[0]}<span>
//   +${
//     selectcountriesarr[i].split("+")[1]
//   }</span></div>`;
// }
// selectcontrycontent.innerHTML = countryphone;

// function addcountry(arq) {
//   checkcountry.innerHTML = arq;
// }
// select country




