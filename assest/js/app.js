
$(document).ready(function () {
  // For preloader
  setTimeout(() => {
    $('.preloader').fadeOut(500)
  }, 5000);

  // For Contact Button 
  
  $('.select_container').hide()
  
  $('.icon_cover').click(function () {
    $('.select_container').toggle()
  })

  // For Switch In NavBar
  $('#switch').click(function () {
    $('.collapse').toggle()
  })

 // Get the current year
 const currentYear = new Date().getFullYear();
 // Update the year in the footer
 $("#currentYear").text(currentYear);


  // i_am_a_web developer 
  $('.i_am_a_web').text("I'm Mr. Emmanuel, a Fullstack Web Developer proficient in HTML, CSS, JavaScript, Bootstrap, jQuery, Angular, Python, and Django. I specialize in crafting seamless and immersive web experiences, from sleek user interfaces to robust backend solutions.");


  // my_story
  $('.my_story').html("In my professional journey, I'm deeply committed to delivering excellence, ensuring every client is delighted with the outcome. <br> As a Fullstack Developer, I specialize in crafting modern, responsive web designs that captivate users. With expertise in frontend technologies like HTML, CSS, and JavaScript, as well as backend proficiency in Python and Django, I bring projects to life with seamless integration and superior performance.");


  // my_experience 
  $('.my_experience').html("<b>Fullstack Web Developer, Remote. Aug 2023 – Present</b> <br>As a Fullstack Web Developer, I've crafted visually appealing and interactive user interfaces for websites, utilizing HTML, CSS, JavaScript, jQuery, Python and Django. <br> <br> <b> Key Responsibilities and Achievements:</b> <br> <b>-</b> Developed and maintained websites, ensuring seamless user experiences. <br> <b>-</b> Collaborated with design teams to translate static designs into dynamic websites. <br> <b>-</b> Conducted testing and debugging for frontend performance and cross-browser compatibility.")



  // For My About
  $('.about').click(function () {
    $('.display1').fadeIn(3000)
    $('.display2').hide()
    $('.display3').hide()
    $(this).css({
      "background": "var(--blue)",
      "color": "var(--white)"
    });
    $('.skills').css({
      "background": "var(--white)",
      "color": "var(--blue)"
    });
    $('.experience').css({
      "background": "var(--white)",
      "color": "var(--blue)"
    });
  });


  $('.display2').hide()
  $('.skills').click(function () {
    $('.display1').hide();
    $('.display2').fadeIn(3000);
    $('.display3').hide();
    $(this).css({
      "background": "var(--blue)",
      "color": "var(--white)"
    });
    $('.about').css({
      "background": "var(--white)",
      "color": "var(--blue)"
    });
    $('.experience').css({
      "background": "var(--white)",
      "color": "var(--blue)"
    });
  });


  $('.display3').hide()
  $('.experience').click(function () {
    $('.display1').hide()
    $('.display2').hide()
    $('.display3').fadeIn(3000)
    $(this).css({
      "background": "var(--blue)",
      "color": "var(--white)"
    });
    $('.skills').css({
      "background": "var(--white)",
      "color": "var(--blue)"
    });
    $('.about').css({
      "background": "var(--white)",
      "color": "var(--blue)"
    });
  });



  // For My Skills
  let skills = $('.my_skills')
  let each_skills = [
    {
      img: './assest/img/html.png',
      b: 'HTML',
    },
    {
      img: './assest/img/css.png',
      b: 'CSS',
    },
    {
      img: './assest/img/javascript.png',
      b: 'JavaScript',
    },
    {
      img: './assest/img/angular.png',
      b: 'Angular',
    },
    {
      img: './assest/img/vue.png',
      b: 'Vue.js',
    },
    {
      img: './assest/img/python.png',
      b: 'Python',
    },
    {
      img: './assest/img/django.png',
      b: 'Django',
    },
    {
      img: './assest/img/jquery.png',
      b: 'jQuery',
    },
    {
      img: './assest/img/bootstrap.png',
      b: 'Bootstrap',
    },
    {
      img: './assest/img/figma.png',
      b: 'Figma',
    },
    {
      img: './assest/img/adobexd.png',
      b: 'Adobe XD',
    },
    {
      img: './assest/img/github.png',
      b: 'GitHub',
    }
  ];

  each_skills.forEach(item => {
    skills.append(`
      <div>
         <img src="${item.img}" alt="">
        <span><b>${item.b}</b></span>
      </div>
      
    `)
  })

  // End Of My Skills



  // for  my services
  let services = $('.my_service');

  let security = [
    {
      h2: 'Web Design',
      p: "Building websites from scratch using various technologies and frameworks, tailored to the client's specific needs and requirements.",
      i: 'bi bi-laptop',
    },
    {
      h2: 'Full-Stack Development',
      p: 'Developing both the front-end and back-end of websites, ensuring a seamless user experience and robust functionality.',
      i: 'bi bi-code-slash',
    },
    {
      h2: 'Responsive Design',
      p: 'Creating websites that are optimized for various devices (desktop, tablet, mobile) to ensure a consistent and engaging user experience.',
      i: 'bi bi-phone',
    },
    {
      h2: 'Custom Web Applications',
      p: 'Designing and developing custom web applications that cater to unique business needs, enhancing efficiency and productivity.',
      i: 'bi bi-briefcase',
    },
    {
      h2: 'Web Maintenance and Support',
      p: 'Providing ongoing maintenance, updates, and technical support to ensure websites remain functional, secure, and up to date.',
      i: 'bi bi-wrench-adjustable',
    },
    // {
    //   h2: 'SEO Optimization',
    //   p: 'Optimizing websites for search engines to improve visibility, ranking, and overall online presence.',
    //   i: 'bi bi-search',
    // },
    // {
    //   h2: 'Security Enhancement',
    //   p: 'Implementing security measures to protect websites from potential threats and vulnerabilities.',
    //   i: 'bi bi-shield-lock',
    // },
    // {
    //   h2: 'Consultation and Strategy',
    //   p: 'Providing expert advice and strategic planning to help clients make informed decisions regarding their web development projects.',
    //   i: 'bi bi-chat-quote',
    // },
    {
      h2: 'User Experience (UX) Design',
      p: 'Focusing on creating intuitive and enjoyable user interfaces to improve user engagement and satisfaction.',
      i: 'bi bi-emoji-smile',
    },
  ];

  security.forEach(item => {
    services.append(`
      <div>
        <div class="my_service_box animate">
          <button class="my_services_btn"><i class="${item.i}"></i></button>
          <h3>${item.h2}</h3>
          <p class="reduce">${item.p}</p>
        </div>
      </div>
    `);
  });

  // End of my_services


  // For my Portfolios
  let codes = $('.my_works')

  let details = [
    {
      img: './assest/img/topqualitywears.png',
      a: 'https://topqualitywears.com/',
      h3: 'Top Quality Wears',
      p2: 'Developed With Python Django. frontend and backend',
      p3: 'Website is Live Kindly Patronize',
    },
    {
      img: './assest/img/vivatest.jpg',
      a: 'https://www.vivastyled.com/',
      h3: 'Viva',
      p2: 'Developed With Python Django. frontend and backend',
      p3: 'Website is Live Kindly Patronize',
    },
    {
      img: './assest/img/afronews.jpg',
      a: 'https://afronews.pythonanywhere.com/',
      h3: 'AfroNews',
      p2: 'Developed With Python Django. frontend and backend',
      p3: 'Hosted at Python Anywhere',
    },
    {
      img: './assest/img/origami.png',
      a: 'https://origamisite.netlify.app/',
      h3: 'Origami',
      p2: 'Developed With Bootstrap and jQuery. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/xspace.png',
      a: 'http://xspace.digitalmojotechsol.com/',
      h3: 'XSpace',
      p2: 'Developed With Bootstrap and jQuery. Frontend Only',
      p3: 'Website is Live Kindly Patronize',
    },
    {
      img: './assest/img/direxy.png',
      a: 'https://digitalmojo.netlify.app/',
      h3: 'Direxy',
      p2: 'Developed With Bootstrap and jQuery. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/entrapov.png',
      a: 'https://entrapov.netlify.app/',
      h3: 'Entrapov',
      p2: 'Developed With Bootstrap and jQuery. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/cnn.png',
      a: 'https://cnn-website-clone.netlify.app/',
      h3: 'CNN Clone',
      p2: 'Developed With Bootstrap and Angular. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/openlabs.png',
      a: 'https://openlabs-clone.netlify.app/',
      h3: 'OpenLabs Clone',
      p2: 'Developed With Bootstrap and Angular. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/Eco_Boutique.png',
      a: 'https://eco-boutique.netlify.app/',
      h3: 'Ecommerce Website',
      p2: 'Developed With Bootstrap and jQuery. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/DezignSntr.png',
      a: 'https://dezignsntr.netlify.app/',
      h3: 'DezignSntr',
      p2: 'Developed With HTML, CSS, JavaScript and jQuery. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/blog.png',
      a: 'https://openlabsblogsite.netlify.app/',
      h3: 'Simple Blog',
      p2: 'Developed With HTML, CSS, JavaScript. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/facebook.png',
      a: 'https://chisconike.github.io/Facebook/',
      h3: 'Facebook Clone',
      p2: 'Developed With HTML, CSS, JavaScript and jQuery. Frontend Only',
      p3: 'Hosted at Github',
    },
    {
      img: './assest/img/instagram.png"',
      a: 'https://chisconike.github.io/Instagram/',
      h3: 'Instagram Clone',
      p2: 'Developed With HTML, CSS and JavaScript. Frontend Only',
      p3: 'Hosted at Github',
    },
    {
      img: './assest/img/youtube.png',
      a: 'https://youtubeclonebyemma.netlify.app/',
      h3: 'YouTube Clone',
      p2: 'Developed With HTML, CSS and JavaScript. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/BibleSchool.png',
      a: 'https://hcbcschool.netlify.app/',
      h3: 'His Coming Bible College',
      p2: 'Developed With HTML, CSS and JavaScript. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/payjax.png',
      a: 'https://pajax.netlify.app/',
      h3: 'Payjax',
      p2: 'Developed With HTML and CSS. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/port.png',
      a: 'https://project-with-mr-emma.netlify.app/',
      h3: 'Portfolio',
      p2: 'Developed With HTML, CSS and JavaScript. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    {
      img: './assest/img/bar-lounge.png',
      a: 'https://bar-lounge.netlify.app/',
      h3: 'Bar-Lounge',
      p2: 'Developed With HTML, CSS and JavaScript. Frontend Only',
      p3: 'Hosted at Netlify',
    },
    // {
    //   img: './assest/img/nedu.png',
    //   a: 'https://nedumotors.netlify.app/',
    //   h3: 'NeduMotors',
    //   p2: 'Developed With HTML, CSS and JavaScript.',
    //   p3: 'Hosted at Netlify',
    // },
    // {
    //   img: './assest/img/ecomerce.png',
    //   a: 'https://e-commerce-by-emma.netlify.app/',
    //   h3: 'E-Commerce',
    //   p2: 'Developed With HTML and CSS.',
    //   p3: 'Hosted at Netlify',
    // },
    // {
    //   img: './assest/img/food.png',
    //   a: 'https://food-website-by-emma.netlify.app/',
    //   h3: 'Food.',
    //   p2: 'Developed With HTML and CSS.',
    //   p3: 'Hosted at Netlify',
    // },
  ]

  details.forEach(item => {
    codes.append(`
   
  <div class="my_works_box animate">
  <h3>${item.h3}</h3>
  <img src="${item.img}" alt="my works">
  <div class="view_my_code">
    <p>${item.p2}</p>
    <p class="hosted">${item.p3}</p>
    <a href="${item.a}" target="_blank"><button>View Project</button></a>
  </div>
  </div>
    `);
  });

  // End of my Portfolios



  // For Footer

  let social = $('.social')
  let accounts = [
    {
      a: 'https://www.facebook.com/Chisconike/',
      btn: 'facebook',
    },
    {
      a: 'https://twitter.com/chisconike',
      btn: 'twitter',
    },
    {
      a: 'https://www.instagram.com/chisco_emmanuel/',
      btn: 'instagram',
    },
    {
      a: 'https://www.youtube.com/channel/UCNE__3MVIDfxCsP2PVf9xdw',
      btn: 'youtube',
    },
    {
      a: 'https://github.com/Chisconike',
      btn: 'github',
    },
    {
      a: 'https://www.linkedin.com/in/okoh-emmanuel-chinedu/',
      btn: 'linkedin',
    },
    {
      a: 'https://wa.me/+233507614107',
      btn: 'whatsapp',
    },
  ]

  accounts.forEach(item => {
    social.append(`
        <li>
          <a href="${item.a}" target="_blank">
          <button><i class="bi bi-${item.btn}"></i></button>
         </a>
       </li>
    `)
  })



  // for animation 
  const check = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('display');
      } else {
        item.target.classList.remove('display');
      }
    })
  })

  const animate = document.querySelectorAll('.animate');
  animate.forEach((el) => check.observe(el));


});
