/* ==================================================================
		
		Author       	: Nadir Ali
		Template Name	: Alpha Dot - Multi Purpose HTML5 Template
		Version      	: 1.0
		
		* ================================================================= */



/* ==================================================================
 LOADER OVERLAY
 ================================================================== */
jQuery(function ($) {
	'use strict';

	jQuery(document).ready(function ($) {

		$(window).on("load resize", function () {
			$('#loader-overlay').fadeOut('slow', function () {
				$(this).remove();
			});

		});



		/* ==================================================================
		 COUNTER
		 ================================================================== */



		$('.count').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});



		/* ==================================================================
COUNTDOWN
================================================================== */


		if ($('.countdown').length > 0) {
			$(".countdown").countdown({
				date: "31 dec 2020 12:00:00",
				format: "on"
			});
		}




		/* ==================================================================
PROGRESS BAR
================================================================== */

		$(window).scroll(function () {
			progress_bars();
		});

		function progress_bars() {
			$(".progress .progress-bar:in-viewport").each(function () {
				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					$(this).width($(this).attr("data-width") + "%");
				}

			});
		}

		$('.progress-ring').waypoint(function () {
			var totalProgress, progress, circles;
			circles = document.querySelectorAll('.progress-svg');
			for (var i = 0; i < circles.length; i++) {
				totalProgress = circles[i].querySelector('circle').getAttribute('stroke-dasharray');
				progress = circles[i].parentElement.getAttribute('data-circle-percent');
				circles[i].querySelector('.bar').style['stroke-dashoffset'] = totalProgress * progress / 100;
			}
		}, { offset: '100%', triggerOnce: true });


		/* ==================================================================
		 Flex & Owl Sliders
		 ================================================================== */
		/* ~~~ Widget Slider ~~~ */
		$('.slider-bg-static').flexslider({
			mode: 'fade',
			auto: true,
			controlNav: true,
			keyboard: true
		});


		/* ==================================================================
		 Go to Top
		 ================================================================== */



		if ($('#back-to-top').length) {
			var scrollTrigger = 100,
				backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('#back-to-top').addClass('show');
					} else {
						$('#back-to-top').removeClass('show');
					}
				};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('#back-to-top').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}



		/* ==================================================================
		 Parallax Stellar
		 ================================================================== */




		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		jQuery(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: true,
			verticalScrolling: !isMobile.any(),
			scrollProperty: 'scroll',
			responsive: true
		});



		/* ==================================================================
Animate Text
================================================================== */

		if ($('.rotate').length > 0) {
			$(".rotate").textrotator({
				animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
				separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
				speed: 3000 // How many milliseconds until the next word show.
			});
		}
		const textElements = $(".scroll-fade")
		function checkVisibility(){
				textElements.each(function() {
				const rect = $(this).get(0).getBoundingClientRect();

				if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
					$(this).addClass("fade-in")
				}
			});
		}
		$(window).scroll(checkVisibility)
		checkVisibility()



	});

	/* ==================================================================
 GOOGLE MAPS 
 ================================================================== */
	if ($('#myMap').length > 0) {
		//set your google maps parameters
		var $latitude = 40.716304, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
			$longitude = -73.995763,
			$map_zoom = 16 /* ZOOM SETTING */

		//google map custom marker icon 
		var $marker_url = 'assets/images/pin.png';

		//we define here the style of the map
		var style = [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		},
		{
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#1ec0ff"
			}]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#bdbdbd"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#ffffff"
			}]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dadada"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#c9c9c9"
			}]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}
		];

		//set google map options
		var map_options = {
			center: new google.maps.LatLng($latitude, $longitude),
			zoom: $map_zoom,
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			streetViewControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		}
		//inizialize the map
		var map = new google.maps.Map(document.getElementById('myMap'), map_options);
		//add a custom marker to the map                
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng($latitude, $longitude),
			map: map,
			visible: true,
			icon: $marker_url
		});

		var contentString = '<div id="mapcontent">' + '<p>Alpha Dot</p></div>';
		var infowindow = new google.maps.InfoWindow({
			maxWidth: 320,
			content: contentString
		});

		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});

	}

	if ($('#myMapTwo').length > 0) {
		//set your google maps parameters
		var $latitude = 40.716304, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
			$longitude = -73.995763,
			$map_zoom = 16 /* ZOOM SETTING */

		//google map custom marker icon 
		var $marker_url = 'assets/images/pin.png';

		//we define here the style of the map
		var style = [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		},
		{
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#1ec0ff"
			}]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#bdbdbd"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#ffffff"
			}]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dadada"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#c9c9c9"
			}]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}
		];

		//set google map options
		var map_options = {
			center: new google.maps.LatLng($latitude, $longitude),
			zoom: $map_zoom,
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			streetViewControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		}
		//inizialize the map
		var map = new google.maps.Map(document.getElementById('myMapTwo'), map_options);
		//add a custom marker to the map                
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng($latitude, $longitude),
			map: map,
			visible: true,
			icon: $marker_url
		});


		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});

	}

	const observer = new IntersectionObserver(f, {
    threshold: [0, 1]
  });

  function f(entries) {
    $.each(entries, function (index, entry) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.005) {
        $(entry.target).addClass("inbound");
      } else {
        $(entry.target).removeClass("inbound");
      }
    });
  }

$(document).ready(function() {
	const itemEls = $(".gallery-slide");
    	itemEls.each(function (index, itemEl) {
      	observer.observe(itemEl);
    });

	$(".gallery-slide").show();
  $('.btn').on('click', function() {
    const category = $(this).data('category');
    $('.btn').removeClass('active');
    $(this).addClass('active');

    // Update gallery cards and thumbnails based on the selected category
    if (category === "all") {
            $(".gallery-slide").show();
        } else {
            $(".gallery-slide").hide();
            $(`.gallery-slide.${category}`).show();
        }

	});

	const modal = document.querySelector(".modal");
	modal.classList.add('show')
  });
});


/*End Jquery*/

window.addEventListener('DOMContentLoaded', function () {
	// Get the current page URL
	var currentPage = window.location.href;

	// Get all the anchor elements inside the navbar
	var navbarLinks = document.querySelectorAll('.navbar-nav a');

	// Loop through each link and check if its href matches the current page URL
	navbarLinks.forEach(function (link) {
		if (link.href === currentPage) {
			link.classList.add('active-link');
		}
	});
	//animate on scroll	
	var boxes = document.querySelectorAll('.box');

	var options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.25
	};

	var observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.intersectionRatio > 0) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
				observer.unobserve(entry.target);
			}
		});
	}, options);

	boxes.forEach(function (box) {
		observer.observe(box);
	});

	var boxes_left = document.querySelectorAll('.box-left');

	boxes_left.forEach(function (box) {
		observer.observe(box);
	});

	var boxes_right = document.querySelectorAll('.box-right');

	boxes_right.forEach(function (box) {
		observer.observe(box);
	});

	var video = document.getElementById('myVideo');

	var options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.25
	};

	var observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.intersectionRatio > 0) {
				video.play();
			} else {
				video.pause();
			}
		});
	}, options);

	observer.observe(video);
	
});

// Animation classes

