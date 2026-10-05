/**
* Template Name: Stratify
* Fast load & instant rendering optimizations for Maklon Kosmetik ID
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  if (document.readyState !== 'loading') {
    toggleScrolled();
  } else {
    document.addEventListener('DOMContentLoaded', toggleScrolled);
  }

  /**
   * Mobile nav toggle & dropdown handling
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    const body = document.querySelector('body');
    body.classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  // Handle dropdown toggles on mobile & desktop
  document.addEventListener('click', function(e) {
    const toggleBtn = e.target.closest('.mobile-nav-toggle');
    if (toggleBtn && !mobileNavToggleBtn) {
      mobileNavToogle();
      return;
    }

    const dropdownLink = e.target.closest('.navmenu .dropdown > a');
    if (dropdownLink) {
      const isMobile = window.innerWidth < 1200 || document.querySelector('.mobile-nav-active');
      if (isMobile) {
        const submenu = dropdownLink.nextElementSibling;
        if (submenu && submenu.tagName === 'UL') {
          e.preventDefault();
          dropdownLink.classList.toggle('active');
          submenu.classList.toggle('dropdown-active');
        }
      }
    } else {
      const regularNav = e.target.closest('#navmenu a:not(.dropdown > a)');
      if (regularNav && document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    }
  });

  /**
   * Preloader - Remove instantly
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.remove();
  }

  /**
   * Scroll top button
   */
  function toggleScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  document.addEventListener('click', function(e) {
    const scrollTopBtn = e.target.closest('.scroll-top');
    if (scrollTopBtn) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });

  if (document.readyState !== 'loading') {
    toggleScrollTop();
  } else {
    document.addEventListener('DOMContentLoaded', toggleScrollTop);
  }
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init (Instant DOMContentLoaded Execution)
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 300,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }

  if (document.readyState !== 'loading') {
    aosInit();
  } else {
    document.addEventListener('DOMContentLoaded', aosInit);
  }

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });
    }

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        if (initIsotope) {
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
        }
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let configEl = swiperElement.querySelector(".swiper-config");
      if (!configEl) return;
      let config = JSON.parse(configEl.innerHTML.trim());

      if (swiperElement.classList.contains("swiper-tab")) {
        if (typeof initSwiperWithCustomPagination === 'function') {
          initSwiperWithCustomPagination(swiperElement, config);
        }
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  if (document.readyState !== 'loading') {
    initSwiper();
  } else {
    document.addEventListener('DOMContentLoaded', initSwiper);
  }

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  function handleHashScroll() {
    if (window.location.hash) {
      let section = document.querySelector(window.location.hash);
      if (section) {
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop || 0),
          behavior: 'smooth'
        });
      }
    }
  }
  if (document.readyState !== 'loading') {
    handleHashScroll();
  } else {
    document.addEventListener('DOMContentLoaded', handleHashScroll);
  }

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  if (document.readyState !== 'loading') {
    navmenuScrollspy();
  } else {
    document.addEventListener('DOMContentLoaded', navmenuScrollspy);
  }
  document.addEventListener('scroll', navmenuScrollspy);

})();