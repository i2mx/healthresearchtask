function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function spawner(entry){
  entry.target.classList.add("spawn")
  await sleep(1000);
  entry.target.classList.remove("spawn")

}

const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    spawner(entry);
  });
};

$(".card").hover(function(){
  $(this).addClass("cardAnimation")
});

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 

const elements = document.querySelectorAll('.card');
elements.forEach(el => {
  observer.observe(el, options);
});


// $(document).scroll(function(evt){
//   var v2 = Math.abs($('.card').position().top - $(window).height()/2);
//   var v1 = $(this).scrollTop();
//       if( v1 > v2 ){
//     console.log('in');
//       $('.card').addClass('animated flip')
//     }
//   });