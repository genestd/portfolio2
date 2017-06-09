/* Refs to elements on my page */
var home = document.getElementById('home')
console.log(home)
var flipper = document.getElementById('flipper')
var port = document.getElementById('portfolio')
var cont = document.getElementById('contact')
var app = document.getElementById('app')
var design = document.getElementById('design')
var universal = document.getElementById('universal')
var resp = document.getElementById('resp')
var stockwatch = document.getElementById('stockwatch')
var bookshelf = document.getElementById('bookshelf')
var roguelike = document.getElementById('rogue')
var dataviz = document.getElementById('dataviz')
var gol = document.getElementById('gol')
var nflviz = document.getElementById('nflviz')
var weather = document.getElementById('weather')
var simon = document.getElementById('simon')
var api = document.getElementById('api')
var projects = document.getElementById('projects')
var overlays = document.getElementsByClassName('overlay')

/* globals */
var lastScrollY = 0, ticking=false, modal=false

/* set css classes to enable the icon/pic flip */
flipper.addEventListener('click', flip)
function flip(event){
  this.classList.toggle('flip')
}

/* events for the portfolio projects
 * On Hover: Hide the overlay caption and set it to a background element
 *           change the background of the cell to an animated gif
 * On Mouseout: reverse the hover changes
 * On Click: display the modal with project details
 */
 stockwatch.addEventListener('mouseover', function(){
   if(!modal){
     var cap = document.getElementById(this.id + '-caption')
     cap.style.opacity=0;
     cap.style.zIndex=-1;
     this.setAttribute('style', 'background: url(icons/stockwatch.gif) no-repeat;background-size: 100%; cursor: pointer;')
   }
 })
 stockwatch.addEventListener('mouseout', function(){
   var cap = document.getElementById(this.id + '-caption')
   cap.style.opacity=1;
   cap.style.zIndex=1;
   this.setAttribute('style', 'background: url(icons/stockwatch_static.png) no-repeat;background-size: 100%')
 })
 bookshelf.addEventListener('mouseover', function(){
   if(!modal){
     var cap = document.getElementById(this.id + '-caption')
     cap.style.opacity=0;
     cap.style.zIndex=-1;
     this.setAttribute('style', 'background: url(icons/bookshelf.gif) no-repeat;background-size: 100%; cursor: pointer;')
   }
 })
 bookshelf.addEventListener('mouseout', function(){
   var cap = document.getElementById(this.id + '-caption')
   cap.style.opacity=1;
   cap.style.zIndex=1;
   this.setAttribute('style', 'background: url(icons/bookshelf_static.png) no-repeat;background-size: 100%')
 })
 roguelike.addEventListener('mouseover', function(){
  if(!modal){
    var cap = document.getElementById(this.id + '-caption')
    cap.style.opacity=0;
    cap.style.zIndex=-1;
    this.setAttribute('style', 'background: url(icons/roguelike.gif) no-repeat;background-size: 100%; cursor: pointer;')
  }
})
roguelike.addEventListener('mouseout', function(){
  var cap = document.getElementById(this.id + '-caption')
  cap.style.opacity=1;
  cap.style.zIndex=1;
  this.setAttribute('style', 'background: url(icons/roguelike_static.png) no-repeat;background-size: 100%')
})
dataviz.addEventListener('mouseover', function(){
  if(!modal){
    var cap = document.getElementById(this.id + '-caption')
    cap.style.opacity=0;
    cap.style.zIndex=-1;
    this.setAttribute('style', 'background: url(icons/dataviz.gif) no-repeat;background-size: 100%')
  }
})
dataviz.addEventListener('mouseout', function(){
  var cap = document.getElementById(this.id + '-caption')
  cap.style.opacity=1;
  cap.style.zIndex=1;
  this.setAttribute('style', 'background: url(icons/dataviz_static.png) no-repeat;background-size: 100%')
})
gol.addEventListener('mouseover', function(){
  if(!modal){
    var cap = document.getElementById(this.id + '-caption')
    cap.style.opacity=0;
    cap.style.zIndex=-1;
    this.setAttribute('style', 'background: url(icons/gol.gif) no-repeat;background-size: 100%')
  }
})
gol.addEventListener('mouseout', function(){
  var cap = document.getElementById(this.id + '-caption')
  cap.style.opacity=1;
  cap.style.zIndex=1;
  this.setAttribute('style', 'background: url(icons/gol.png) no-repeat;background-size: 100%')
})
nflviz.addEventListener('mouseover', function(){
  if(!modal){
    var cap = document.getElementById(this.id + '-caption')
    cap.style.opacity=0;
    cap.style.zIndex=-1;
    this.setAttribute('style', 'background: url(icons/nflviz.gif) no-repeat;background-size: 100%')
  }
})
nflviz.addEventListener('mouseout', function(){
  var cap = document.getElementById(this.id + '-caption')
  cap.style.opacity=1;
  cap.style.zIndex=1;
  this.setAttribute('style', 'background: url(icons/nflviz_static.png) no-repeat;background-size: 100%')
})
weather.addEventListener('mouseover', function(){
  if(!modal){
    var cap = document.getElementById(this.id + '-caption')
    cap.style.opacity=0;
    cap.style.zIndex=-1;
  }
})
weather.addEventListener('mouseout', function(){
  var cap = document.getElementById(this.id + '-caption')
  cap.style.opacity=1;
  cap.style.zIndex=1;
})
simon.addEventListener('mouseover', function(){
  if(!modal){
    var cap = document.getElementById(this.id + '-caption')
    cap.style.opacity=0;
    cap.style.zIndex=-1;
  }
})
simon.addEventListener('mouseout', function(){
  var cap = document.getElementById(this.id + '-caption')
  cap.style.opacity=1;
  cap.style.zIndex=1;
})
api.addEventListener('mouseover', function(){
  if(!modal){
    var cap = document.getElementById(this.id + '-caption')
    cap.style.opacity=0;
    cap.style.zIndex=-1;
  }
})
api.addEventListener('mouseout', function(){
  var cap = document.getElementById(this.id + '-caption')
  cap.style.opacity=1;
  cap.style.zIndex=1;
})

projects.addEventListener('click', projectClick)
function projectClick(event){
  if(modal){
    for( var i=0;i<overlays.length;i++){
      overlays[i].classList.remove('open')
    }
    modal=false
  } else {
    var el = document.getElementById( event.target.id + '-overlay')
    if( el ){
      el.classList.add('open')
      modal=true
    }
  }
}
/* End of project events */
/* global scroll event stores the scroll position */
window.addEventListener('scroll', onScroll)
function onScroll(){
  lastScrollY = window.scrollY

  /* This is for animated circles
  if (lastScrollY+window.innerHeight > getOffset(design).top && lastScrollY+window.innerHeight < getOffset(contact).top){
    requestTick()
  }
  */
}

function requestTick(){
  if (!ticking){
   window.requestAnimationFrame(update)
  }
  ticking=false
}

function getOffset(elem) {
  el = elem.getBoundingClientRect();
  console.log('getoffset', el, elem)
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}


/*
function update(){
  var currentScrollY = lastScrollY
  var destScrollY = getOffset(contact).top - window.innerHeight
  var percent = (currentScrollY/destScrollY)
  var designLeft = (window.innerWidth - (design.clientWidth))/2-design.clientWidth/2.8
  var designTop = (window.innerHeight - design.clientHeight)/2-(design.clientHeight/2)
  var univRight = ((window.innerWidth - (universal.clientWidth))/2)-universal.clientWidth/2.8
  var univTop = (window.innerHeight - universal.clientHeight)/2-universal.clientHeight/2
  var respLeft = ((window.innerWidth - resp.clientWidth)/2)
  var respBottom = (window.innerHeight - resp.clientHeight)/2.2

  design.style.top = Math.round( designTop * percent ) + 'px'
  design.style.left = Math.round( designLeft  * percent ) + 'px'
  universal.style.top = Math.round( univTop  * percent ) + 'px'
  universal.style.right = Math.round( univRight  * percent ) + 'px'
  resp.style.bottom = Math.round( respBottom  * percent ) + 'px'
  design.style.opacity = .33;
  universal.style.opacity = .33;
  resp.style.opacity = .33;
}
requestAnimationFrame(update)
*/



function scrollTo(to, duration) {
    console.log('scrolling to ', to)
    element = document.getElementById('body')
    to = getOffset(document.getElementById(to)).top
    var start = element.scrollTop,
        change = to - start,
        increment = 20;

    var animateScroll = function(elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}
