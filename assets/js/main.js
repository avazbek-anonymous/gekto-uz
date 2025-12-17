/*
	Javascript File for AKAD Template
	Author : Akhouad-me
	Web    : www.akhouad.me
*/

(function($){
	$(window).load(function(){
		// INITIALIZE ANIMSITION
		if($(".animsition").length){
			$(".animsition").animsition({
				inClass               :   'fade-in-up-sm',
				outClass              :   'fade-out-up-sm',
				inDuration            :    1100,
				outDuration           :    800,
				linkElement           :   '.animsition-link',
				loading               :    true,
				loadingParentElement  :   'body', 
				unSupportCss          : [ 'animation-duration',
										  '-webkit-animation-duration',
										  '-o-animation-duration'
										],
				overlay               :   false,
				overlayClass          :   'animsition-overlay-slie',
				overlayParentElement  :   'body'
			});
		}

		// INPUTS EVENTS
		$(".input_1 input, .textarea_1 textarea").focus(function(){
			$(this).next("span").addClass("active");
		});
		$(".input_1 input, .textarea_1 textarea").blur(function(){
			if($(this).val() === ""){
				$(this).next("span").removeClass("active");
			}
		});

		// TABS
		$(".bottom-line").css({
			width : $(".tab nav a").first().width() + 20 + "px" // 20 = element's padding * 2
		});
		var _current_index = 0;
		$(".tab nav a").click(function(e){
			e.preventDefault();
			// tab navigation styles
			var _this = $(this);
			var _index = _this.index();
			if(_current_index !== _index){
				$(".tab nav a").each(function(){
					if($(this).hasClass("current")) $(this).removeClass("current");
				});
				_this.addClass("current");
				$(".bottom-line").css({
					left : _this.offset().left - _this.parent().offset().left + "px",
					width : _this.width() + 20 + "px" // 20 = element's padding * 2
				});

				// show tab content
				$(".tab_single.shown").fadeOut(200);
				setTimeout(function(){
					$(".tab_single").eq(_index).fadeIn(200);
					$(".tab_single").eq(_index).addClass("shown");
				},200);

				_current_index = _index;
			}
		});

		// NAVBAR
		var _link = $("nav.desktop-nav ul.first-level").children("li");
		var shown = false;
		// show navbar 
		$(".menu-icon").click(function(){
			var _this = $(this);
			$("nav.mobile-nav").slideToggle(200);
			if(!shown){
				_this.children("div").css("width","30px");
				shown = true;
			}else{
				_this.children("div").first().css("width","30px");
				_this.children("div").eq(1).css("width","15px");
				_this.children("div").eq(2).css("width","20px");
				shown = false;
			}
		});
		
		// dropdown - desktop
		_link.hover(function(e){
			e.preventDefault();
			var _this = $(this);
			if(_this.children("ul.second-level").html() !== undefined){
				if(e.type === "mouseenter"){
					_this.children("ul.second-level").slideDown(200);
				}else{
					_this.children("ul.second-level").slideUp(200);
				}
			}
		});

		// dropdown - mobile
		$("nav.mobile-nav").html($("nav.desktop-nav").html()); // set navbar

		var mobile_link = $("nav.mobile-nav ul.first-level").children("li");
		mobile_link.children("a").click(function(e){
			var _this = $(this);
			var submenu_exists = (_this.next("ul.second-level").html() === undefined) ? false : true;
			if(submenu_exists){
				e.preventDefault();
				$(".down").slideUp(200);
				if(_this.next("ul.second-level").hasClass("down")){
					_this.next("ul.second-level").removeClass("down");
				}else{
					$(".down").removeClass("down");
					_this.next("ul.second-level").slideDown(200);
					_this.next("ul.second-level").addClass("down");
				}
			}
		});

	});
})(jQuery);

// HISTORY SCROLL
(function () {
  let io = null;

  window.initHistoryScroll = function () {
    if (io) { io.disconnect(); io = null; }

    const root = document.querySelector(".history-scroll");
    if (!root) return;

    const rail = root.querySelector(".history-rail");
    const yearBtns = Array.from(root.querySelectorAll(".history-year"));
    const panels = Array.from(root.querySelectorAll(".history-panel"));
    const steps  = Array.from(root.querySelectorAll(".history-step"));

    const isMobile = window.matchMedia("(max-width: 991px)").matches;

    if (isMobile) {
      panels.forEach(p => p.classList.add("is-active"));
      return;
    }

    if (!rail || !yearBtns.length || !panels.length || !steps.length) return;

    const stepByYear = new Map(steps.map(s => [s.dataset.year, s]));

    function setActive(year) {
      yearBtns.forEach(b => b.classList.toggle("active", b.dataset.year === year));
      panels.forEach(p => p.classList.toggle("is-active", p.dataset.year === year));

      const idx = steps.findIndex(s => s.dataset.year === year);
      const prog = (idx <= 0) ? 0 : (idx / (steps.length - 1));
      rail.style.setProperty("--progress", (prog * 100).toFixed(2) + "%");
    }

    yearBtns.forEach(btn => {
      btn.onclick = () => {
        const s = stepByYear.get(btn.dataset.year);
        if (s) s.scrollIntoView({ behavior: "smooth", block: "center" });
      };
    });

    io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (!visible.length) return;

      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActive(visible[0].target.dataset.year);
    }, {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.25, 0.5, 0.75]
    });

    steps.forEach(s => io.observe(s));
    setActive(steps[0].dataset.year);
  };
})();
window.initHistoryScroll?.();

