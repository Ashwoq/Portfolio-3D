// useAssetPreloader.js
import { useEffect, useState } from "react";
import one from "../src/assets/logo/amazonLogo.png";
import two from "../src/assets/logo/fjordLogo.svg";
import three from "../src/assets/logo/linkedinLogo.svg";
import four from "../src/assets/logo/mugavariLogo.png";
import five from "../src/assets/logo/oneyesLogo.jpg";
import six from "../src/assets/logo/reltimeLogo.svg";
import seven from "../src/assets/logo/swifinLogo.svg";
import eight from "../src/assets/logo/WowHRLogo.png";
import nine from "../src/assets/logo/xodaLogo.svg";
import oneone from "../src/assets/svg/email.svg";
import onetwo from "../src/assets/svg/instagram.svg";
import onethree from "../src/assets/svg/linkedin.svg";
import gohanImg from "./assets/webp/gohans.webp";
import zoroImg from "./assets/webp/zoro.webp";
import itachiImg from "./assets/webp/itachi.webp";
import luffyImg from "./assets/webp/luffyss.webp";
import spiderImg from "./assets/webp/spider.webp";
import batmanImg from "./assets/webp/batman.webp";
import xodaImg from "./assets/webp/xoda.webp";
import wowhrImg from "./assets/webp/wowhr.webp";
import swifinImg from "./assets/webp/swifin.webp";
import sriImg from "./assets/webp/sri.webp";
import spaceImg from "./assets/webp/space.webp";
import mugavariImg from "./assets/webp/mugavari.webp";
import gb11Img from "./assets/webp/gb11.webp";
import gb22Img from "./assets/webp/gb22.webp";
import fjordImg from "./assets/webp/fjord.webp";
import amazonImg from "./assets/webp/amazon.webp";
import ad2dImg from "./assets/webp/ad2d.webp";
import portalImg from "./assets/webp/portal.webp";
import tvImageImg from "./assets/webp/tvImage.webp";
import ecommerceImg from "./assets/webp/ecommerce.webp";
import introImg from "./assets/webp/intro.webp";
import htmlCssImg from "./assets/webp/html.webp";
import reactjsImg from "./assets/webp/reactjs.webp";
import blenderImg from "./assets/webp/blender.webp";
import javascriptImg from "./assets/webp/javascript.webp";
import splineImg from "./assets/webp/spline.webp";
import threejsImg from "./assets/webp/threejs.webp";
import gsapImg from "./assets/webp/gsap.webp";
import tailwindcssImg from "./assets/webp/tailwindcss.webp";
import figmaImg from "./assets/webp/figma.webp";
import flutterImg from "./assets/webp/flutter.webp";
import ratingsImg from "./assets/webp/ratings.webp";
import unityImg from "./assets/webp/unity.webp";
import theone from "/ad.svg";
import thetwo from "/ad2.svg";
import thethree from "/ad3.svg";
// import thefour from "/Bakev2.2.jpg";
import thefive from "/hai.webp";
import thesix from "/hey.png";
import theseven from "/preview.webp";

// ⬅️ Define your asset URLs here
const urls = [
  theone,
  thetwo,
  thethree,
  // thefour,
  thefive,
  thesix,
  theseven,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  oneone,
  onetwo,
  onethree,
  gohanImg,
  zoroImg,
  itachiImg,
  luffyImg,
  spiderImg,
  batmanImg,
  xodaImg,
  wowhrImg,
  swifinImg,
  sriImg,
  spaceImg,
  mugavariImg,
  gb11Img,
  gb22Img,
  fjordImg,
  amazonImg,
  ad2dImg,
  portalImg,
  tvImageImg,
  ecommerceImg,
  introImg,
  htmlCssImg,
  reactjsImg,
  blenderImg,
  javascriptImg,
  splineImg,
  threejsImg,
  gsapImg,
  tailwindcssImg,
  figmaImg,
  flutterImg,
  ratingsImg,
  unityImg,
];

const useAssetPreloader = (shouldStart = true) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let loaded = 0;
    const total = urls.length;

    const update = () => {
      loaded++;
      const raw = (loaded / total) * 100;
      if (loaded >= total) {
        setProgress(100);
      } else {
        setProgress((prev) => prev + (raw - prev) * 0.2);
      }
    };

    const preload = async () => {
      const timeout = (ms) => new Promise((res) => setTimeout(res, ms));
      const promises = urls.map((url) => {
        if (url.endsWith(".svg")) {
          return Promise.race([
            fetch(url)
              .then((res) => res.text())
              .then(update)
              .catch(update),
            timeout(5000).then(update), // fallback after 5s
          ]);
        } else {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = img.onerror = () => {
              update();
              resolve();
            };
            setTimeout(() => resolve(update()), 5000); // image failsafe
          });
        }
      });

      await Promise.all(promises);
    };

    preload();
  }, [shouldStart]);

  return progress;
};

export default useAssetPreloader;
