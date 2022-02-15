//smooth scroll

document.addEventListener('click', (e)=> {
  e.preventDefault();

  const href = e.target.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior:'smooth',
    block: 'start'
  });
})

// slick slider

$(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    arrows: false,
    dots: false
  });
})


