'use strict';
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu__button");
    let links = menu.find(".burger-menu__link");
    let overlay = menu.find(".burger-menu__overlay");

    button.on("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on("click", () => toggleMenu());
    overlay.on("click", () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass("burger-menu_active");

        if (menu.hasClass("burger-menu_active")) {
            $("body").css("overflow", "hidden");
            document.getElementsByClassName('burger-menu__overlay')[0].style.width = "100vw";
            document.getElementsByClassName('burger-menu__overlay')[0].style.height = "100vw";
          } else {
            $("body").css("overflow", "visible");
            document.getElementsByClassName('burger-menu__overlay')[0].style.width = "0vw";
            document.getElementsByClassName('burger-menu__overlay')[0].style.height = "0vw";
          }
        
    }
}

burgerMenu(".burger-menu");

/* Блок TAB */

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();
