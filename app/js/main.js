$(function () {


  // let hamburger = document.getElementById(hamburger);
  // let body = document.getElementById(body);

  // hamburger.onclick = function() {
  //   body.addClass('open-menu');
  // }

  // $('.header__hamburger').on('click', function() {
  //   $('.header__inner').toggleClass('open');
  // })

  (function () {
    $('.menu-wrapper').on('click', function () {
      $('.hamburger-menu').toggleClass('animate');
    })
  })();


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

$(window).scroll(function () {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  if (height > 100) {
    $('.header').addClass('header--fixed');
  } else {
    /*Если меньше 100px удаляем класс для header*/
    $('.header').removeClass('header--fixed');
  }
});

  VANTA.NET({
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
  })


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

  // one = document.getElementById('instructionNumberOne');
  // two = document.getElementById('instructionNumberTwo');
  // three = document.getElementById('instructionNumberThree');
  // four = document.getElementById('instructionNumberFour');


  // var one = document.getElementById('instructionNumberOne');
  // var two = document.getElementById('instructionNumberTwo');
  // var three = document.getElementById('instructionNumberThree');
  // var four = document.getElementById('instructionNumberFour');

  
  
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




  // document.addEventListener("mousemove", parallax);
  // const elem = document.querySelector("#parallax");
  // // Magic happens here
  // function parallax(e) {
  //   let _w = window.innerWidth / 2;
  //   let _h = window.innerHeight / 2;
  //   let _mouseX = e.pageX;
  //   let _mouseY = e.pageY;
  //   let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY + _h) * 0.01}%`;
  //   let x = `${_depth1}`;
  //   console.log(x);
  //   elem.style.backgroundPosition = x;
  // }



  // document.addEventListener("mousemove", parallax);
  // function parallax(e) {
  //   this.querySelectorAll('.layer').forEach(layer => {
  //     const speed = layer.getAttribute('data-speed')

  //     const x = (window.innerWidth - e.pageX*speed/100)
  //     const y = (window.innerWidth - e.pageY*speed/100)

  //     layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  //   })
  // }


  // ThisIsWebP().then(function () {
  //   // var getWebp = document.getElementById("parallax");
  //   // getWebp.addClass('webp');
  //   console.log('Nowebp')//Нет поддержки webp

  // }, function () {
  //   console.log('Nowebp')//Нет поддержки webp
  // });





});