/*
 *   Check GL Environment
 */
// if (Detector.webgl) {
//   // Initiate function or other initializations here
//   // animate();
//   console.log('Nice! Your browser supports WebGL :)');
// } else {
//   const warning = Detector.getWebGLErrorMessage();
//   // document.getElementById('container').appendChild(warning);
// }

//
// initFilter();
//
//
// function initFilter() {//   let filter = document.getElementById('proj_filter'),
//   projects = document.getElementById('proj_list').children;
//   let curType = '';
//   let curTab = filter.firstElementChild;
//
//   filter.addEventListener('click', event => {
//     if (!event.target.classList.contains('tab') || event.target.classList.contains('active')) {
//       return;
//     }
//
//     if (curTab) {
//       curTab.classList.remove('active');
//     }
//
//     curTab = event.target;
//     curType = curTab.dataset.name;
//     curTab.classList.add('active');
//
//     // update project list
//     for(let i = 0; i < projects.length; i++){
//       let proj = projects[i];
//       if(curType == 'all' || proj.dataset.type == curType){
//         proj.classList.remove('fadeOut');
//         proj.style.display = 'block';
//       }else{
//         proj.classList.add('fadeOut');
//         setTimeout(()=> { proj.style.display = 'none';}, 800);
//
//       }
//     }
//
//   });
// }

/*
 *   Loading effect
 */
let loading = {
  start: function() {
    document.body.insertAdjacentHTML('beforeend',
      `<div id="js_loading" class="loading">
      <div class="dot-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      </div>
      </div>`);
  },
  complete: function() {
    let loader = document.getElementById('js_loading');
    loader.remove(loader);
  },
};

/*
 *   Init
 */
loading.start();
function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}
   
function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}
   
function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}
window.onload = function() {
  loading.complete();
  // init typewriter
  let typewriter = document.getElementById('js_typewriter');
  let data = JSON.parse(typewriter.getAttribute('data-rotate'));
  let duration = typewriter.getAttribute('data-duration');
  if (data) {
    new TypeWriter(typewriter, data, duration);
  }

  // init smooth scroll
  initSmoothScroll();
  document.getElementById('logo').addEventListener("mouseover", function( event ) {
  	console.log(document.getElementById('logo').getElementsByClassName('hoverChange'));
  	var objs = document.getElementById('logo').getElementsByClassName('hoverChange');
  	for (var i=0; i<objs.length; i++) {
  		objs[i].style.backgroundImage = 'linear-gradient(-90deg, #FC5259 9%, #9013FE 29%, #FD0688 48%, #F9C052)';
  		objs[i].style['-webkit-background-clip'] = 'text';
  		objs[i].style.color = 'transparent';
  	}
  	document.getElementById('logoImg').setAttribute('src', 'svg/mylogo-active.svg');
  }); 
  document.getElementById('logo').addEventListener("mouseout", function( event ) {
  	console.log(document.getElementById('logo').getElementsByClassName('hoverChange'));
  	var objs = document.getElementById('logo').getElementsByClassName('hoverChange');
  	for (var i=0; i<objs.length; i++) {
  		objs[i].style.backgroundImage = 'none';
  		objs[i].style.color = '#FBCC2C';
  	}
  	document.getElementById('logoImg').setAttribute('src', 'svg/mylogo.svg');
  });
  
  document.getElementById('footerLogo').addEventListener("mouseover", function( event ) {
  	console.log(document.getElementById('logo').getElementsByClassName('hoverChange'));
  	var objs = document.getElementById('footerSlogan');
  		objs.style.backgroundImage = 'linear-gradient(-90deg, #FC5259 9%, #9013FE 29%, #FD0688 48%, #F9C052)';
  		objs.style['-webkit-background-clip'] = 'text';
  		objs.style.color = 'transparent';
  	document.getElementById('footerLogoImg').setAttribute('src', 'svg/mylogo-active.svg');
  }); 
  document.getElementById('footerLogo').addEventListener("mouseout", function( event ) {
  	console.log(document.getElementById('logo').getElementsByClassName('hoverChange'));
  	var objs = document.getElementById('footerSlogan');
  		objs.style.backgroundImage = 'none';
  		objs.style.color = '#FBCC2C';
  	document.getElementById('footerLogoImg').setAttribute('src', 'svg/mylogo.svg');
  });
  
  var contents = document.getElementsByClassName('skills-content');
//for (var i=0; i<contents.length; i++) {
//	contents[i].addEventListener("mouseover", function( event ) {
//		console.log('over',contents[i]);
//	});
//}
function removeActive(){
	contents[2].getElementsByClassName('icon-small')[0].setAttribute('class', 'icon-small');
  		contents[2].getElementsByClassName('description')[0].setAttribute('class', 'description');
  		contents[2].getElementsByClassName('skills-title')[0].setAttribute('class', 'skills-title');
  		contents[2].getElementsByClassName('icon-bg-small')[0].setAttribute('class', 'icon-bg-small');
  		contents[2].getElementsByClassName('icon-bg-small')[0].setAttribute('src', 'img/skills-unactive.png');
}
function mouseaction(type, obj) {
	if (type === 'mouseover') {
		window.addClass(obj.getElementsByClassName('icon-small')[0], 'icon-small-active');
  		window.addClass(obj.getElementsByClassName('description')[0], 'description-active');
  		window.addClass(obj.getElementsByClassName('skills-title')[0], 'skills-title-active');
  		window.addClass(obj.getElementsByClassName('icon-bg-small')[0], 'icon-bg-small-active');
  		obj.getElementsByClassName('icon-bg-small')[0].setAttribute('src', 'img/skills-active.png');
	} else {
		window.removeClass(obj.getElementsByClassName('icon-small')[0], 'icon-small-active');
  		window.removeClass(obj.getElementsByClassName('description')[0], 'description-active');
  		window.removeClass(obj.getElementsByClassName('skills-title')[0], 'skills-title-active');
  		window.removeClass(obj.getElementsByClassName('icon-bg-small')[0], 'icon-bg-small-active');
  		obj.getElementsByClassName('icon-bg-small')[0].setAttribute('src', 'img/skills-unactive.png');
	}
}
  contents[0].addEventListener("mouseover", function( event ) {
  		removeActive();
  		mouseaction("mouseover", contents[0]);
  	});
  	contents[0].addEventListener("mouseout", function( event ) {
  		mouseaction("mouseout", contents[0]);
  	});
  	
  contents[1].addEventListener("mouseover", function( event ) {
  		removeActive();
  		mouseaction("mouseover", contents[1]);
  	});
  	contents[1].addEventListener("mouseout", function( event ) {
  		mouseaction("mouseout", contents[1]);
  	});
  	
  	contents[2].addEventListener("mouseover", function( event ) {
  		mouseaction("mouseover", contents[2]);
  	});
  	contents[2].addEventListener("mouseout", function( event ) {
  		mouseaction("mouseout", contents[2]);
  	});
  	
  	contents[3].addEventListener("mouseover", function( event ) {
  		removeActive()
  		mouseaction("mouseover", contents[3]);
  	});
  	contents[3].addEventListener("mouseout", function( event ) {
  		mouseaction("mouseout", contents[3]);
  	});
  	document.getElementById('skills').addEventListener("mouseout", function( event ) {
  		mouseaction("mouseover", contents[2]);
  	});
  //init hover handler
  // let projList = document.getElementById('js_projList');
  // projList.addEventListener('touchstart', hoverOnTouch, false);
};


/*
 *   Type Writer Effect
 */
let TypeWriter = function(el, dataset, duration) {
  this.dataset = dataset;
  this.el = el;
  this.idx = 0;
  this.duration = parseInt(duration, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TypeWriter.prototype.tick = function() {
  // let i = this.curIdx % this.dataset.length;

  let fullTxt = this.dataset[this.idx];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  let that = this;
  let delta = 200 - Math.random() * 100;

  // accelerate deleting speed
  if (this.isDeleting) {
    delta /= 2;
  }

  // finished the whole text, start deleting
  if (!this.isDeleting && this.txt == fullTxt) {
    delta = this.duration; // pause for showing the word
    this.isDeleting = true;
  }
  // finished deleting, switch to next word
  else if (this.isDeleting && this.txt == '') {
    this.isDeleting = false;
    if (this.idx == 2) {
      this.idx = 0;
    } else {
      this.idx++;
    }
    delta = 300;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

/*
 *   Smooth Scrolling
 */
function initSmoothScroll() {
  let targetOffset, curPos,
    animateTime = 900,
    body = document.body,
    btns = document.getElementsByClassName('scroll-btn');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', event => {
    	console.log(event.target.hash.substr(1));
      targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
      curPos = getPageScroll();

      body.classList.add('in-transition');
      body.style.WebkitTransform = "translate(0, -" + (targetOffset - curPos) + "px)";
      body.style.MozTransform = "translate(0, -" + (targetOffset - curPos) + "px)";
      body.style.transform = "translate(0, -" + (targetOffset - curPos) + "px)";

      window.setTimeout(function() {
        body.classList.remove('in-transition');
        body.style.cssText = "";
        window.scrollTo(0, targetOffset);
      }, animateTime);

      event.preventDefault();
    }, false);
  }
}

function getPageScroll() {
  let scrollY;

  if (window.pageYOffset) {
    scrollY = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    scrollY = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollY = document.body.scrollTop;
  }

  return scrollY;
}

/*
 *   Handle Hover on Touch Devices
 */
function hoverOnTouch(event) {
  event.preventDefault();
  let target = event.touches[0].target || event.target || event.srcElement;

  if (target.tagName == 'A') {
    let link = target.getAttribute('href');
    window.location = link;
  } else {
    while (target && !target.classList.contains('overlay')) {
      target = target.parentNode;
    }
    target.classList.toggle('hover');
  }
}
