$(function () {

  const header = document.querySelector('.header');
  let heightHeader = document.querySelector('.header').offsetHeight + 'px';
  const pseudoHeader = document.createElement('div');
  pseudoHeader.classList.add('header__empty');
  document.body.insertBefore(pseudoHeader, header);

  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    header.classList.add('header--fixed');
    // heightHeader +='px';

    if (scrolled == 0) {
      pseudoHeader.style.height = '0'
      header.classList.remove('header--fixed');
      console.log('height-header:', heightHeader);

    } else if (scrolled > 0) {
      pseudoHeader.style.setProperty("height", heightHeader);
    }
  });

  // const menuItems = document.querySelector('.navigation__list');

  // menuItems.addEventListener('click', function (e) {
  //   const items = document.querySelectorAll('.navigation__link')
  //   const target = e.target
  //   Array.from(items).forEach(item => {
  //     item.classList.remove('active')
  //   })
  //   target.classList.add('active')
  // })


  // Получаю   NodeList в переменную
  let listOfItems = document.querySelectorAll('.navigation__link');
  console.log(listOfItems);

  // присваиваю  в качестве значения переменной анонимную функцию (Function Expression), которая в качестве аргумента принимает только  массив arr
  let removeClassActive = function (arrayOfElements) {
    //  перебираю  NodeList циклом 
    arrayOfElements.forEach(function (currentElem, elemIndex, arrayOfElements) {
      // убираю у каждого элемента класс active
      currentElem.classList.remove('active');
    })
  };

  // присваиваю  в качестве значения переменной анонимную функцию  которая  принимает  в качестве аргумента Текущий  элемент  
  let addClassActive = function (currentElem) {
    // добавляю  у текущего элемента класс active
    currentElem.classList.add('active');
  };

  //  прохожусь снова по ноде циклом и вешаю обработчик события клика на Текущий  элемент
  listOfItems.forEach(function (currentElem, elemIndex, arrayOfElements) {
    currentElem.addEventListener('click', function () {
      //  вызываю ф-ю  для удаления класса  со всех перебираемых элементов массива
      removeClassActive(arrayOfElements);
      //  вызываю ф-ю  для добавления класса   обьекту на котором сработал обработчик 
      addClassActive(currentElem);
    })
  });


  // ДОБАВЛЕНИЕ КЛАССА ПО КЛИКУ
  let drop = document.querySelector('.drop');


  let addActiveClass = function (myElem) {
    myElem.addEventListener('click', function () {
      myElem.classList.toggle('active');
    })
  };

  addActiveClass(drop);

  $(function () {
    $('.advantages__show-hide').click(function () {

      $('.advantages__list').toggleClass('open');
      if ($('.advantages__list').hasClass('open')) {
        $('.advantages__show-hide').html(`<span class="advantages__show-text">Свернуть </span><span class="advantages__show-icon"><svg class="advantages__show-svg"><use xlink:href="images/sprite.svg#icon-top"></use></svg></span>`);
      } else {
        $('.advantages__show-hide').html(`<span class="advantages__show-text">Ещё</span><span class="advantages__show-icon"><svg class="advantages__show-svg"><use xlink:href="images/sprite.svg#icon-down"></use></svg></span>`);
      }
    });
  });
  // let showMoreBtn = document.querySelector('.advantages__show-hide');
  // let listOfAdvantages = document.querySelectorAll('.advantages__item');
  // let mobileListOfAdvantages = '';


  // function showAdvantages() {
  //   showMoreBtn.classList.toggle('active');

  //   console.log(listOfAdvantages);

  //   for(let i = 0; i < 2; i++)
  //     mobileListOfAdvantages += listOfAdvantages[i]
  //   console.log(mobileListOfAdvantages)
  // }

  // showMoreBtn.addEventListener('click', showAdvantages);

  // ГАМБУРГЕР МЕНЮ СТАРТ
  (function () {
    $('.hamburger-wrapper').on('click', function () {
      $('.hamburger-menu').toggleClass('animate');
    })
  })();
  // ГАМБУРГЕР МЕНЮ КОНЕЦ

  // ПОЯВЛЕНИЕ МЕНЮ НАВИГАЦИИ
  let hamburger = document.querySelector('.hamburger-wrapper');
  let headerMenu = document.querySelector('.header__menu');

  hamburger.addEventListener('click', function () {
    headerMenu.classList.toggle('header__menu--opened')
  });
  // ПОЯВЛЕНИЕ МЕНЮ НАВИГАЦИИ



  // ПЛАВНЫЙ СКРОЛЛ НАЧАЛО
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  // ПЛАВНЫЙ СКРОЛЛ КОНЕЦ


  // addActiveClass(hamburger);

  // drop.addEventListener('click', function () {
  //   drop.classList.toggle('active');
  // })



  const b = document.querySelector(".registration__new-user");

  b.addEventListener("mouseover", function () {
    let i = 1;
    setInterval(function () {
      if (i > 0) {
        i = i - 0.009;
        b.style.setProperty("--a", i);
        b.style.setProperty("--b", i);
      }
    }, 1);
  });

  b.addEventListener("mouseout", function () {
    let i = 0;
    setInterval(function () {
      if (i < 1) {
        i = i + 0.009;
        b.style.setProperty("--a", i);
        b.style.setProperty("--b", i);
      }
    }, 1);
  });

  const c = document.querySelector(".registration__old-user ");

  c.addEventListener("mouseover", function () {
    let i = 1;
    setInterval(function () {
      if (i > 0) {
        i = i - 0.009;
        c.style.setProperty("--c", i);
        c.style.setProperty("--d", i);
      }
    }, 1);
  });

  c.addEventListener("mouseout", function () {
    let i = 0;
    setInterval(function () {
      if (i < 1) {
        i = i + 0.009;
        c.style.setProperty("--c", i);
        c.style.setProperty("--d", i);
      }
    }, 1);
  });


  let e = document.querySelector(".top .button__link");

  e.addEventListener("mouseover", function () {
    let i = 1;
    setInterval(function () {
      if (i > 0) {
        i = i - 0.009;
        e.style.setProperty("--e", i);
        e.style.setProperty("--f", i);
      }
    }, 1);
  });

  e.addEventListener("mouseout", function () {
    let i = 0;
    setInterval(function () {
      if (i < 1) {
        i = i + 0.009;
        e.style.setProperty("--e", i);
        e.style.setProperty("--f", i);
      }
    }, 1);
  });


  let g = document.querySelector(".banner-section .button__link");

  g.addEventListener("mouseover", function () {
    let i = 1;
    setInterval(function () {
      if (i > 0) {
        i = i - 0.009;
        g.style.setProperty("--g", i);
        g.style.setProperty("--h", i);
      }
    }, 1);
  });

  g.addEventListener("mouseout", function () {
    let i = 0;
    setInterval(function () {
      if (i < 1) {
        i = i + 0.009;
        g.style.setProperty("--g", i);
        g.style.setProperty("--h", i);
      }
    }, 1);
  });


  //  LOCALISATION  LOCALISATION  LOCALISATION
  const swhithLang = document.querySelectorAll('.langCheck__item:not(.selected) input');

  fetch('localisation/localisation.json')
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response)
    })
    .then(response => response.json())
    .then(data => {
      const localis = data,
        localArr = ['ru', 'tr', 'pt'],
        langDisplay = document.querySelector('.langCheck__item.selected'),
        langDisplayFlag = langDisplay.querySelector('.icon'),
        langDisplayContext = langDisplay.querySelector('.langContext'),
        languageHref = window.location.hash;

      if (languageHref.length != 0) {
        console.log('111');

        language = languageHref.substr(1);
        langDisplay.className = `langCheck__item langCheck__item-${language} selected`;
        langDisplayFlag.className = `icon icon-${language}`;
        langDisplayContext.innerHTML = language;
        document.querySelectorAll('.langCheck__item:not(.selected)').forEach(item => {
          if (item.classList.contains(`langCheck__item-${language}`)) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }

        })
      } else if (language.length != 0 && localArr.includes(language)) {
        console.log('222');

        langDisplay.className = `langCheck__item langCheck__item-${language} selected`;
        langDisplayFlag.className = `icon icon-${language}`;
        langDisplayContext.innerHTML = language;
        document.querySelectorAll('.langCheck__item:not(.selected)').forEach(item => {
          if (item.classList.contains(`langCheck__item-${language}`)) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }

        })
      }

      for (let key in localis) {
        let string = document.querySelectorAll('.lng-' + key),
          stringLocalis = localis[key][language];

        if (string && stringLocalis) {
          for (let elem of string) {
            elem.innerHTML = localis[key][language];
          }

        }
      }
    })
    .catch(error => console.log('error', error))


  //  LOCALISATION  LOCALISATION  LOCALISATION


  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  swhithLang.forEach(item => {
    item.addEventListener('change', () => {
      let val = item.name;
      window.location.href = window.location.pathname + '#' + val;
      location.reload();
      language = val;
    })
  })

  //  SWHITCH LOCALISATION  SWHITCH 

  //  класс для хедера при скроле

  // $(window).scroll(function () {
  //   var height = $(window).scrollTop();
  //   /*Если сделали скролл на 100px задаём новый класс для header*/
  //   if (height > 100) {
  //     $('.header').addClass('header--fixed');
  //   } else {
  //     /*Если меньше 100px удаляем класс для header*/
  //     $('.header').removeClass('header--fixed');
  //   }
  // });


  const effect = VANTA.NET({
        el: "#testemonials",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf7f7f7,
        backgroundColor: 0xf0f18,
        points: 18.00,
        maxDistance: 14.00
      });

  window.addEventListener('resize', () => {

    if (window.innerWidth < 576) {
      effect.destroy();
    } else if (window.innerWidth > 576 ) {
      
      effect.init();
    }
     

  }, false);


  // slick start
  $(window).on('load resize', function () {
    if (($(window).width() < 576) && $('.testemonials__list:not(.slick-initialized)')) {
      $(".testemonials__list").not('.slick-initialized').slick({
        // centerMode: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        rows: 3,
        arrows: false
      });
    } else if ($('.testemonials__list').hasClass('slick-initialized')) {

      $('.testemonials__list').slick('unslick');
      // $('.testemonials__list').
      console.log('stop');
    }

  });

  // $(document).ready(function () {
  //   $('.testemonials__list').slick({

  //   });
  // });



  //  Определяем поддержку  браузером webp  для загрузки нужных форматов изображений

  // function testWebP(callback) {
  //   var webP = new Image();
  //   webP.onload = webP.onerror = function () {
  //     callback(webP.height == 2);
  //   };
  //   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  // }

  // testWebP(function (support) {

  //   if (support == true) {
  //     document.querySelector('body').classList.add('webp');
  //   } else {
  //     document.querySelector('body').classList.add('no-webp');
  //   }
  // });



  // $(window).scroll(function () {
  //   ($(window).scrollTop() > 10);

  //   setTimeout(function () {

  //     one.classList.add("active");

  //   }, 50);

  //   setTimeout(function () {

  //     two.classList.add("active");

  //   }, 250);

  //   setTimeout(function () {

  //     three.classList.add("active");

  //   }, 450);
  //   setTimeout(function () {

  //     four.classList.add("active");

  //   }, 650);

  // });


  // ThisIsWebP().then(function () {
  //   // var getWebp = document.getElementById("parallax");
  //   // getWebp.addClass('webp');
  //   console.log('Nowebp')//Нет поддержки webp

  // }, function () {
  //   console.log('Nowebp')//Нет поддержки webp
  // });





});