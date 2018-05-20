// ページの読み込みを待つ
window.addEventListener("load", init);

var ua = navigator.userAgent;
if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0) {
  var sp = true;
} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
  var sp = true;
}


var ww = window.innerWidth;
var wh = window.innerHeight;

function init() {
  // サイズを指定
  const width = ww;
  const height = wh;
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#model"),
    alpha: true
  });
  renderer.setPixelRatio(1);
  renderer.setClearColor(0x000000, 0); // the default
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  // シーンを作成
  const scene = new THREE.Scene();
  //   scene.background = new THREE.Color("rgba(255, 244, 0, 0)");
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
  // カメラの初期座標を設定
  camera.position.set(0, 0, 300);
  // カメラコントローラーを作成
  // const controls = new THREE.OrbitControls(camera);





  if (sp) {
    var controls = new THREE.DeviceOrientationControls(camera);
    controls.connect();
  } else {
    var controls = new THREE.OrbitControls(camera);
  }





  // 平行光源を作成
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  // 環境光を追加
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);
  // 3DS形式のモデルデータを読み込む
  const loader = new THREE.TDSLoader();
  // テクスチャーのパスを指定
  loader.setPath("../assets/3ds/portalgun/textures/");
  // 3dsファイルのパスを指定
  loader.load("../assets/3ds/portalgun/coachin.3ds", object => {
    // 読み込み後に3D空間に追加
    scene.add(object);
    object.rotation.set(1.5, 1, 0.2);
  });
  tick();

  function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}