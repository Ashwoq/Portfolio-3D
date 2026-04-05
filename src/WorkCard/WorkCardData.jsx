import React from "react";
import linkedinLogo from "../assets/logo/linkedinLogo.svg";
import swifinLogo from "../assets/logo/swifinLogo.svg";
import reltimeLogo from "../assets/logo/reltimeLogo.svg";
import mugavariLogo from "../assets/logo/mugavariLogo.png";
import amazonLogo from "../assets/logo/amazonLogo.png";
import wowHRLogo from "../assets/logo/wowHRLogo.png";
import oneyesLogo from "../assets/logo/oneyesLogo.jpg";
import xodaLogo from "../assets/logo/xodaLogo.svg";
import fjordLogo from "../assets/logo/fjordLogo.svg";

const CARD_CONTENT = [
  {
    range: [0.09, 0.115],
    data: {
      title: "SWIFIN",
      linkTitle: "Visit Swifin",
      titleLink: "https://www.swifin.com",
      logo: swifinLogo,
      overlayerInAnimation: "overlayerFadeInFromLeft",
      overlayerExitAnimation: "overlayerFadeOutToLeftExit",
      cardBorderWidth: "110px",
      links: [
        {
          href: "https://www.swifin.com",
          logo: swifinLogo,
          title: "Visit Swifin",
        },
        {
          href: "https://www.linkedin.com/company/reltimedefi",
          logo: reltimeLogo,
          title: "Visit Reltime",
        },
      ],
      description: [
        `Built the responsive frontend of <strong class="highlight"><a href="https://swifin.com" target="_blank" title="visit swifin">Swifin.com</a></strong> using <strong class="highlight">ReactJS</strong> and <strong class="highlight">TailwindCSS</strong>, based on UI designs from <strong class="highlight"> <a title="check about reltime" href="https://www.linkedin.com/company/reltimedefi" target="_blank" >Reltime's</a></strong> design team.`,
        `Additionally, I designed and developed the <strong class="highlight">Swifin Admin Panel</strong> with modules for <strong class="highlight">KYC</strong>, <strong class="highlight">bulk emails</strong>, <strong class="highlight">transactions</strong>, <strong class="highlight">user/admin roles</strong>, and an <strong class="highlight">analytics dashboard</strong>. Collaborated with backend developers for seamless API integration.`,
      ],
      tech: [
        { title: "ReactJS + Vite", subtitle: "Core Stack" },
        { title: "TailwindCSS", subtitle: "UI Styling" },
        { title: "Admin Panel", subtitle: "KYC, Analytics, Roles" },
      ],
    },
  },
  {
    range: [0.12, 0.1375],
    data: {
      title: "Mugavari Foundations",
      linkTitle: "Visit Mugavari Foundations",
      titleLink: "https://mugavari-foundations-gen-2.web.app/",
      logo: mugavariLogo,
      cardBorderWidth: "210px",
      links: [
        {
          href: "https://mugavari-foundations-gen-2.web.app/",
          logo: mugavariLogo,
          title: "Visit Mugavari Foundations",
        },
      ],
      description: [
        `Developed the frontend of <strong class="highlight"><a href="https://mugavari-foundations-gen-2.web.app/" target="_blank" title="visit mugavari">Mugavari Foundations</a></strong> using <strong class="highlight">ReactJS</strong>. Designed to be fully <strong class="highlight">mobile-optimized</strong> and responsive, based on UI provided by the client's designer.`,
        `This was my <strong class="highlight">first real-world freelance project</strong>, completed during my <strong class="highlight">2nd year internship (Jan–Mar 2022)</strong>.`,
        `Worked as a <strong class="highlight">freelance Frontend Developer</strong> and also contributed to building the <strong class="highlight">admin panel</strong> with <strong class="highlight">Firebase</strong> authentication and login system.`,
      ],
      tech: [
        { title: "ReactJS", subtitle: "Frontend Stack" },
        { title: "CSS", subtitle: "Custom Styling" },
        { title: "Firebase", subtitle: "Auth + Admin Panel" },
      ],
    },
  },
  {
    range: [0.155, 0.17],
    data: {
      title: "AMAZON CLONE",
      titleLink: "https://az-clone-v2-160324.web.app/",
      logo: amazonLogo,
      cardBorderWidth: "175px",

      links: [
        {
          href: "https://az-clone-v2-160324.web.app/",
          logo: amazonLogo,
          title: "Amazon Clone",
        },
        {
          href: "https://ashwoq2d.netlify.app/",
          logo: "./ad2.svg",
          title: "Amazon Clone",
        },
      ],

      description: [
        `Built a fully functional <strong class="highlight"><a href="https://az-clone-v2-160324.web.app/" target="_blank">Amazon Clone</a></strong> using <strong class="highlight">ReactJS</strong>, <strong class="highlight">Vite</strong>, <strong class="highlight">TailwindCSS</strong>, and <strong class="highlight">Firebase</strong>. Implemented features like product listings, cart functionality, login/logout with authentication, and responsive layout.`,
        `This was developed within <strong class="highlight">4 days</strong> as part of an interview assignment in <strong class="highlight">April 2024</strong>,  entirely based on a full <strong class="highlight">YouTube tutorial</strong> walkthrough.`,
      ],

      tech: [
        { title: "ReactJS + Vite", subtitle: "Core Stack" },
        { title: "TailwindCSS", subtitle: "UI Styling" },
        { title: "Firebase", subtitle: "Auth & Hosting" },
      ],
    },
  },
  {
    range: [0.185, 0.205],
    data: {
      title: "WOWHR",
      linkTitle: "Visit WOWHR (my build)",
      titleLink: "https://wowhr-com.web.app/",
      logo: wowHRLogo,
      cardBorderWidth: null,
      overlayerInAnimation: "overlayerFadeInToTopIn",
      overlayerExitAnimation: "overlayerFadeOutToTopExit",
      style: {
        top: "49%",
        left: "35%",
        width: "550px",
      },
      animation: "bounce-in-bottom",
      exitAnimation: "fade-out-bottom",
      links: [
        {
          href: "https://wowhr-com.web.app/",
          logo: wowHRLogo,
          title: "WOWHR my Build",
        },
        {
          href: "https://www.oneyesinfotechsolutions.com/",
          logo: oneyesLogo,
          title: "Official Oneyes Site",
        },
      ],

      description: [
        `Developed the <strong class="highlight">WOWHR landing page</strong> in <strong class="highlight">5 days</strong> using <strong class="highlight">ReactJS</strong>, <strong class="highlight">TailwindCSS</strong>, and <strong class="highlight">AOS</strong>, based on a design from <strong class="highlight">OneYes Infotech</strong> during my <strong class="highlight">May–Aug 2024</strong> internship.`,
        `Implemented everything from header to footer — including the hero section, About Us, testimonials, scroll animations, and full responsiveness. Route-specific pages (e.g., /badge, /login) were developed by a different contributor.`,
        `Submitted my code at <strong class="highlight"><a href="https://wowhr-com.web.app/" title="visit wowhr (my build)" target="_blank">wowhr-com.web.app</a></strong>. It was later refined by another developer and launched officially as <strong class="highlight"><a href="https://wowhr.in/" title="visit wowhr official" target="_blank">wowhr.in</a></strong>.`,
      ],
      tech: [
        { title: "ReactJS + Vite", subtitle: "Frontend Stack" },
        { title: "TailwindCSS", subtitle: "Styling System" },
        { title: "AOS", subtitle: "Scroll Animations" },
      ],
    },
  },
  {
    range: [0.22, 0.2375],
    data: {
      title: "XODA.AI",
      titleLink: "https://xoda.ai",
      logo: xodaLogo,
      linkTitle: "VIsit Xoda.ai",
      links: [
        {
          href: "https://xoda.ai",
          logo: xodaLogo,
          title: "XODA.AI Landing Page",
        },
        {
          href: "https://www.linkedin.com/company/reltimedefi",
          logo: reltimeLogo,
          title: "Reltime",
        },
      ],

      description: [
        `Developed the <strong class="highlight"><a href="https://xoda.ai" target="_blank" title="visit xoda">xoda.ai</a></strong> landing page using <strong class="highlight">ReactJS</strong>, <strong class="highlight">TailwindCSS</strong>, and <strong class="highlight">GSAP</strong> for smooth scroll animations.`,
        `This project was also comes under <strong class="highlight"><a href="https://www.linkedin.com/company/reltimedefi" title="check about reltime" target="_blank">Reltime</a></strong>, where I translated provided UI designs into a fully responsive landing page—from header to footer.`,
        `Note: Only the landing page was developed by me. The inner chat interface and AI functionality were handled by another developer.`,
      ],

      tech: [
        { title: "ReactJS + Vite", subtitle: "Frontend Stack" },
        { title: "TailwindCSS", subtitle: "UI Styling" },
        { title: "GSAP", subtitle: "Scroll Animations" },
      ],
    },
  },
  {
    range: [0.25, 0.2675],
    data: {
      title: "Portfolio - 2D",
      titleLink: "https://ashwoq2d.netlify.app/",
      linkTitle: "Visit my 2d portfolio",
      logo: "./ad.svg",
      cardBorderWidth: "140px",
      animation: "bounce-in-right",
      exitAnimation: "fade-out-right",
      overlayerInAnimation: "overlayerFadeInToRightIn",
      overlayerExitAnimation: "overlayerFadeOutToRightExit",
      style: { width: "450px", left: "unset", right: "4%" },
      links: [
        {
          href: "https://ashwoq2d.netlify.app/",
          logo: "./ad.svg",
          title: "Visit Portfolio - 2D",
        },
        {
          href: "https://ashwoq2d.netlify.app/",
          logo: "./ad2.svg",
          title: "Visit Portfolio - 2D, New Logo ;)",
        },
      ],
      description: [
        `Built a <strong class="highlight"><a href="https://ashwoq2d.netlify.app/" title="portfolio 2d" target="_blank">2D portfolio site</a></strong> using <strong class="highlight">HTML</strong>, <strong class="highlight">CSS</strong>, and <strong class="highlight">GSAP</strong> featuring a <strong class="highlight">scroll-driven road trip experience</strong>. As users scroll or autoplay, a car drives past animated buildings representing my work, skills, and journey.`,
        `All <strong class="highlight">SVGs and assets</strong>—backgrounds, buildings, stars, vehicles, comic-style bubbles—were <strong class="highlight">custom designed by me in Figma</strong>, with <strong class="highlight">Freepik</strong> serving as creative reference.`,
        `Currently in <strong class="highlight">beta</strong>, optimized for <strong class="highlight">15.6” screens</strong>. Each section has <strong class="highlight">unique GSAP animation</strong> for an immersive storytelling effect.`,
      ],
      tech: [
        { title: "HTML + CSS", subtitle: "Core Build" },
        { title: "GSAP", subtitle: "Scroll Animations" },
        { title: "Figma", subtitle: "Custom Illustrations" },
      ],
    },
  },
  {
    range: [0.275, 0.29],
    data: {
      title: "3D Space Corridor",
      linkTitle: "Checkout my 3D model",
      titleLink:
        "https://www.linkedin.com/posts/ashwoq-dedath-s-8636ab203_3dmodeling-blender-threejs-activity-7213405979269373952-kIe-",
      logo: "./ad2.svg",
      cardBorderWidth: "180px",
      style: { width: "440px" },

      links: [
        {
          href: "https://www.linkedin.com/posts/ashwoq-dedath-s-8636ab203_3dmodeling-blender-threejs-activity-7213405979269373952-kIe-",
          logo: "./ad2.svg",
          title: "LinkedIn Post",
        },
      ],
      description: [
        `Created a detailed <strong class="highlight"><a target="_blank" href="https://www.linkedin.com/posts/ashwoq-dedath-s-8636ab203_3dmodeling-blender-threejs-activity-7213405979269373952-kIe-">3D space corridor (link)</a></strong> using <strong class="highlight">Blender</strong> as my first full 3D model, completed in <strong class="highlight">Nov 2023</strong>. Followed tutorials by creators like <strong class="highlight"><a target="_blank" title="Ryan King Art Channel" href="https://www.youtube.com/@RyanKingArt">Ryan King Art</a></strong>, <strong class="highlight"><a target="_blank" title="Ducky 3D Channel" href="https://www.youtube.com/@TheDucky3D">Ducky 3D</a></strong>, and others while adding my own touches.`,
        `Originally planned to be part of my <strong class="highlight">3D portfolio</strong>, but due to its <strong class="highlight">high-poly mesh, baked lighting, and large texture size</strong>, it was too GPU-intensive for smooth web deployment.`,
        `Eventually, I pivoted to building my current <strong class="highlight">simpler, performant 3D room</strong> instead.`,
      ],
      tech: [
        { title: "Blender", subtitle: "3D Modeling Tool" },
        { title: "Cycles Render", subtitle: "280+ hrs rendering" },
        { title: "High-Poly", subtitle: "Too complex for Web" },
      ],
    },
  },
  {
    range: [0.325, 0.345],
    data: {
      title: "ECommerce Store",
      titleLink: "https://e-commerce-ashwoq.firebaseapp.com/",
      linkTitle: "Ecommerce site",
      logo: "./ad2.svg",
      animation: "bounce-in-right",
      exitAnimation: "fade-out-right",
      cardBorderWidth: "180px",
      overlayerInAnimation: "overlayerFadeInToRightIn",
      overlayerExitAnimation: "overlayerFadeOutToRightExit",

      style: {
        left: "unset",
        right: "4%",
      },
      links: [
        {
          href: "https://e-commerce-ashwoq.firebaseapp.com/",
          logo: "./ad2.svg",
          title: "Live Store",
        },
      ],

      // `Built a full-stack <strong class="highlight"><a target="_blank" href="https://e-commerce-ashwoq.firebaseapp.com/">ECommerce web app</a></strong> using <strong class="highlight">ReactJS</strong>, <strong class="highlight">TailwindCSS</strong>, and <strong class="highlight">Firebase</strong> as a personal project over <strong class="highlight">3 weeks</strong>.`,
      description: [
        `Built a full-stack <strong class="highlight"><a target="_blank" href="https://e-commerce-ashwoq.firebaseapp.com/">ECommerce web app</a></strong> by following a <strong class="highlight">Udemy course</strong>, and extending it as a personal project over <strong class="highlight">3 weeks</strong>, using <strong class="highlight">ReactJS</strong>, <strong class="highlight">TailwindCSS</strong>, and <strong class="highlight">Firebase</strong>.`,
        `Implemented core features like <strong class="highlight">add to cart</strong>, <strong class="highlight">user login</strong>, <strong class="highlight">checkout</strong>, and <strong class="highlight">Stripe payment gateway</strong>.`,
        `Also developed an <strong class="highlight">admin dashboard</strong> to manage product categories and listings for store owners.`,
      ],
      tech: [
        { title: "ReactJS", subtitle: "Frontend Stack" },
        { title: "Firebase", subtitle: "Auth + Realtime DB" },
        { title: "TailwindCSS", subtitle: "UI Styling" },
      ],
    },
  },
  {
    range: [0.36, 0.377],
    data: {
      title: "3D Portal Website",
      titleLink: "https://portal-v4.vercel.app/",
      linkTitle: "Live Portal Website",
      logo: "./ad2.svg",
      animation: "bounce-in-right",
      exitAnimation: "fade-out-right",
      cardBorderWidth: "180px",
      overlayerInAnimation: "overlayerFadeInToRightIn",
      overlayerExitAnimation: "overlayerFadeOutToRightExit",

      style: {
        left: "unset",
        right: "4%",
      },
      links: [
        {
          href: "https://portal-v4.vercel.app/",
          logo: "./ad2.svg",
          title: "Live Portal Website",
        },
        {
          href: "https://www.linkedin.com/posts/ashwoq-dedath-s-8636ab203_blender-threejs-rtf-activity-7162671681185021952-tVnz?utm_source=share&utm_medium=member_desktop",
          logo: linkedinLogo,
          title: "LinkedIn Post",
        },
      ],
      description: [
        `Developed my <strong class="highlight"><a target="_blank" href="https://e-commerce-ashwoq.firebaseapp.com/">first 3D website</a></strong> using <strong class="highlight">Three.js</strong>, <strong class="highlight">Blender</strong>, <strong class="highlight">GSAP</strong>, <strong class="highlight">GLSL Shaders</strong>, and <strong class="highlight">lil-gui</strong>, inspired by <strong class="highlight">Bruno Simon's tutorials</strong>.`,
        `Completed in <strong class="highlight">2 weeks</strong> as a personal project to explore real-time 3D web development. Designed the portal scene in Blender and implemented scroll interactions and shader effects in Three.js.`,
        `Shared on <strong class="highlight"><a href="https://www.linkedin.com/posts/ashwoq-dedath-s-8636ab203_blender-threejs-rtf-activity-7162671681185021952-tVnz?utm_source=share&utm_medium=member_desktop" target="_blank">LinkedIn</a></strong> on <strong class="highlight">January 13, 2024</strong>.`,
      ],
      tech: [
        { title: "Three.js + Blender", subtitle: "3D Engine & Modeling" },
        { title: "GSAP + lil-gui", subtitle: "Animation & Controls" },
        { title: "GLSL", subtitle: "Custom Shader Effects" },
      ],
    },
  },
  {
    range: [0.395, 0.415],
    data: {
      title: "Fjord Estate",
      titleLink: "http://fjord.estate/",
      linkTitle: "Vist Fjord Estate",
      logo: fjordLogo,
      cardBorderWidth: "140px",
      style: {
        // transform: "skew(20deg)",
      },
      links: [
        {
          href: "http://fjord.estate/",
          logo: fjordLogo,
          title: "Visit Fjord Estate",
        },
        {
          href: "https://www.linkedin.com/company/reltimedefi",
          logo: reltimeLogo,
          title: "Check About Reltime",
        },
      ],
      description: [
        `Developed the <strong class="highlight"><a href="http://fjord.estate/" target="_blank">Fjord Estate</a></strong> website's frontend using <strong class="highlight">ReactJS</strong>, <strong class="highlight">TailwindCSS</strong>, and <strong class="highlight">AOS</strong> animations based on a UI design provided by the <strong class="highlight">Reltime</strong> design team.`,
        `This is a <strong class="highlight">Real World Asset (RWA)</strong> platform for which I developed the entire frontend, including responsive layouts and animated sections.`,
        `Also designed and developed an <strong class="highlight">admin panel</strong> with modules for <strong class="highlight">KYC</strong> and other administrative controls.`,
      ],
      tech: [
        { title: "ReactJS + Vite", subtitle: "Frontend Stack" },
        { title: "TailwindCSS", subtitle: "Styling System" },
        { title: "AOS", subtitle: "Scroll Animations" },
      ],
    },
  },
  {
    range: [0.43, 0.47],
    data: {
      title: "Gameboy 3D",
      titleLink: "https://gameboy-ad.web.app/",
      linkTitle: "Vist Gameboy...",
      logo: "./ad2.svg",
      cardBorderWidth: "150px",
      style: {
        left: "auto",
        width: "450px",
        right: "4%",
        top: "20%",
      },
      overlayerInAnimation: "overlayerFadeInToRightIn",
      overlayerExitAnimation: "overlayerFadeOutToRightExit",

      animation: "bounce-in-right",
      exitAnimation: "fade-out-right",

      links: [
        {
          href: "https://gameboy-ad.web.app/",
          logo: "./ad2.svg",
          title: "Live Site",
        },
        {
          href: "https://www.linkedin.com/posts/ashwoq-dedath-s-8636ab203_3d-spline-react-activity-7218110415118839808-pIB8/",
          logo: linkedinLogo,
          title: "LinkedIn Post",
        },
      ],
      description: [
        `Created a <strong class="highlight"><a href="https://gameboy-ad.web.app/" target="_blank">3D Gameboy-themed website (Mini Portfolio)</a></strong> in <strong class="highlight">3 days</strong> using <strong class="highlight">Spline</strong>. It serves as a <strong class="highlight">mini self-introduction</strong> featuring two switchable themes: <strong class="highlight">classic grey</strong> and <strong class="highlight">toony style</strong>.`,
        `This is my <strong class="highlight">second 3D website</strong> after the Portal project. I used my real non-working Gameboy as reference, designing the entire 3D model from scratch.`,
        `Transitioning from <strong class="highlight">Blender</strong> to <strong class="highlight">Spline</strong> was a fresh learning experience. The site is optimized for desktops and may take a few seconds to load.`,
        `Hosted the project on <strong class="highlight">Firebase</strong> and shared it on <strong class="highlight"><a href="https://www.linkedin.com/posts/ashwoq-dedath-s-8636ab203_3dmodeling-webdevelopment-spline-activity-7225146256224849921-3OGM" target="_blank">LinkedIn</a></strong> on <strong class="highlight">April 20, 2024</strong>.`,
      ],

      tech: [
        { title: "Spline", subtitle: "3D Modeling & Interaction" },
        { title: "Firebase", subtitle: "Hosting & Deployment" },
        { title: "Custom Themes", subtitle: "Classic & Toony" },
      ],
    },
  },
  {
    range: [0.49, 0.505],
    data: {
      title: "Admin Panel",
      titleLink: null,
      logo: reltimeLogo,
      cardBorderWidth: "140px",
      links: [
        {
          href: "https://www.linkedin.com/company/reltimedefi",
          logo: reltimeLogo,
          title: "Check about Reltime",
        },
      ],
      style: { width: "400px" },

      description: [
        `This project falls under <strong class="highlight"><a href="https://www.linkedin.com/company/reltimedefi" title="check about reltime" target="_blank">Reltime</a></strong>, where I designed and developed the frontend for a modern <strong class="highlight">admin panel</strong>.`,
        `I referenced leading admin panels in the market and implemented features like <strong class="highlight">role-based access</strong> for Admin, Sub-Admin, and Super-Admin, along with modules such as <strong class="highlight">KYC verification</strong>, <strong class="highlight">OTP-based login</strong>, <strong class="highlight">bulk email communication</strong>, <strong class="highlight">user management</strong>, and <strong class="highlight">analytics</strong>.`,
        `I also collaborated closely with the backend developer for seamless <strong class="highlight">API integration</strong> across all modules. <small>(Yeah, I blurred some parts of the image — secret stuff, you know.)</small>`,
      ],

      tech: [
        { title: "ReactJS + Vite", subtitle: "Frontend Stack" },
        { title: "TailwindCSS", subtitle: "Utility-first Styling" },
        { title: "Access Control", subtitle: "Multi-tier Admins" },
      ],
    },
  },
  {
    range: [0.635, 0.675],
    data: {
      title: "RESUME",
      linkTitle: "See my resume...",
      titleLink: "./AshwoqS_Resume.pdf",
      logo: "./ad2.svg",
      cardBorderWidth: null,
      links: [
        {
          href: "./AshwoqS_Resume.pdf",
          logo: "./ad2.svg",
          title: "Resume",
        },
      ],
      style: {
        width: "300px",
      },
      description: [
        `<span class="liner">Well, everything’s already written (basically I'm looking for a job in chennai) ... so yeah 😄</br></span>
        <span>Update : Never mind, I got a Job! 😁 </span>
        </span>`,
        `You can click here to <span 
        title="click here to view my resume" class="resumerDownload resumerDownloadtheone"><div class="shimmer resumerDownload-links-flex"><a href="./AshwoqS_Resume.pdf" target="_blank" rel="noopener noreferrer" class="resumerDownload-a">view my resume</a></div></span>
        `,
        `
        or click here to <span
        title="click here to download my resume"  class="resumerDownload"><div class="shimmer resumerDownload-links-flex"><a href="./AshwoqS_Resume.pdf" download class="resumerDownload-a">download resume</a></div></span>
        `,
      ],

      tech: [
        { title: "Role", subtitle: "Frontend | UI Dev" },
        { title: "Location", subtitle: "Chennai" },
        { title: "Exp.", subtitle: "1yr (Almost😅)" },
      ],
    },
  },
];

export default CARD_CONTENT;
