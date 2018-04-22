import * as THREE from "three";
import * as $ from "jquery";
import "jquery-inview"; // ここでimportするとjquery pluginが使える
import { jarallax, jarallaxElement, jarallaxVideo } from "jarallax";
import AOS from "aos";
import "./style.scss";

AOS.init();

window.addEventListener("DOMContentLoaded", () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.parent.screen.width, window.parent.screen.height);
  document.getElementById("keyvisual").appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 10000);
  camera.position.set(0, 0, 1000);
  const geometry = new THREE.BoxGeometry(250, 250, 250);
  const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  const box = new THREE.Mesh(geometry, material);
  box.position.z = -5;
  scene.add(box);
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);
  const tick = (): void => {
    requestAnimationFrame(tick);
    box.rotation.x += 0.05;
    box.rotation.y += 0.05;
    renderer.render(scene, camera);
  };
  tick();
});

(function() {
  $("#about").on("inview", function(event, isInView) {
    if (isInView) {
      const textArray = "coach-inについて";
      let counter = 0;
      setInterval(function() {
        const textArrayLength = textArray.length;
        $("#about").append(textArray[counter]);
        counter = counter + 1;
        if (counter === textArrayLength) {
          clearInterval(this);
        }
      }, 40);
    } else {
    }
  });

  $("#howto").on("inview", function(event, isInView) {
    if (isInView) {
      const textArray = "How To Use";
      let counter = 0;
      setInterval(function() {
        const textArrayLength = textArray.length;
        $("#howto").append(textArray[counter]);
        counter = counter + 1;
        if (counter === textArrayLength) {
          clearInterval(this);
        }
      }, 40);
    } else {
      null;
    }
  });
})();
