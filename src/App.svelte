<script>
  import { onMount } from "svelte";

  import gsap from "gsap";
  import * as THREE from "three";
  import * as TWEEN from "@tweenjs/tween.js";
  import vertexShader from "./shaders/vertex.glsl";
  import fragmentShader from "./shaders/fragment.glsl";
  import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
  import atmoosphereFragmentShader from "./shaders/atmosphereFragment.glsl";

  import earthTexture from "./assets/planets/textures/globe.jpg";
  import jupiterTexture from "./assets/planets/textures/jupiter.jpg";
  import marsTexture from "./assets/planets/textures/mars.jpg";
  import mercuryTexture from "./assets/planets/textures/mercury.jpg";
  import moonTexture from "./assets/planets/textures/moon.jpg";
  import neptuneTexture from "./assets/planets/textures/neptune.jpg";
  import saturnTexture from "./assets/planets/textures/saturn.jpg";
  import sunTexture from "./assets/planets/textures/sun.jpg";
  import uranusTexture from "./assets/planets/textures/uranus.jpg";
  import venusTexture from "./assets/planets/textures/venus.jpg";

  import earthIcon from "./assets/planets/icons/earth.png";
  import jupiterIcon from "./assets/planets/icons/jupiter.png";
  import marsIcon from "./assets/planets/icons/mars.png";
  import mercuryIcon from "./assets/planets/icons/mercury.png";
  import neptuneIcon from "./assets/planets/icons/neptune.png";
  import saturnIcon from "./assets/planets/icons/saturn.png";
  import uranusIcon from "./assets/planets/icons/uranus.png";
  import venusIcon from "./assets/planets/icons/venus.png";

  import { planetsData } from "./assets/planets/dataSheet.json";

  const tweenAnimationTime = 1500;
  const tweenType = TWEEN.Easing.Elastic.Out;
  let planets = [...planetsData];
  let currentPlanet;

  onMount(() => {
    planets.map((planet) => {
      if (planet.name === "Earth") {
        planet.texture = earthTexture;
        planet.icon = earthIcon;
      }
      if (planet.name === "Jupiter") {
        planet.texture = jupiterTexture;
        planet.icon = jupiterIcon;
      }
      if (planet.name === "Mars") {
        planet.texture = marsTexture;
        planet.icon = marsIcon;
      }
      if (planet.name === "Mercury") {
        planet.texture = mercuryTexture;
        planet.icon = mercuryIcon;
      }
      if (planet.name === "Neptune") {
        planet.texture = neptuneTexture;
        planet.icon = neptuneIcon;
      }
      if (planet.name === "Saturn") {
        planet.texture = saturnTexture;
        planet.icon = saturnIcon;
      }
      if (planet.name === "Uranus") {
        planet.texture = uranusTexture;
        planet.icon = uranusIcon;
      }
      if (planet.name === "Venus") {
        planet.texture = venusTexture;
        planet.icon = venusIcon;
      }
    });
    createPlanetScene();
    currentPlanet = planets.find((planet) => planet.name === "Earth");
    planets = planets;
  });

  function createPlanetScene() {
    const canvasContainer = document.querySelector("#canvas-container");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasContainer.offsetWidth / canvasContainer.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector("canvas"),
    });
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    createStarField(scene);

    planets.forEach((planet) => {
      planet.mesh = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            globeTexture: {
              value: new THREE.TextureLoader().load(planet.texture),
            },
          },
        })
      );

      // create atmosphere
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        new THREE.ShaderMaterial({
          vertexShader: atmosphereVertexShader,
          fragmentShader: atmoosphereFragmentShader,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        })
      );

      atmosphere.scale.set(1.1, 1.1, 1.1);
      planet.mesh.add(atmosphere);

      //Earth is default
      if (planet.name != "Earth") {
        planet.mesh.position.y += 20;
      }

      scene.add(planet.mesh);
    });

    let planetRotationSnapshot;
    let mouseControl = false;
    const mousePosition = {
      x: undefined,
      y: undefined,
    };

    canvasContainer.addEventListener("mouseover", () => {
      planetRotationSnapshot = currentPlanet.mesh.rotation.y;
      mouseControl = true;
    });
    canvasContainer.addEventListener("mouseout", () => (mouseControl = false));
    canvasContainer.addEventListener("mousemove", (e) => {
      mousePosition.x = (e.clientX / innerWidth) * 2 - 1;
      mousePosition.y = -(e.clientY / innerHeight) * 2 + 1;
    });

    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
      renderer.render(scene, camera);

      if (currentPlanet) currentPlanet.mesh.rotation.y += 0.001;

      if (mouseControl) {
        gsap.to(currentPlanet?.mesh.rotation, {
          x: -mousePosition.y * 0.3,
          y: planetRotationSnapshot + mousePosition.x * 0.5,
          duration: 2,
        });
      }
    }
    animate();
  }

  function createStarField(scene) {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
  }

  function togglePreviousPlanet() {
    let index = planets.findIndex(
      (planet) => planet.name === currentPlanet.name
    );
    let targetIndex = index - 1;
    if (targetIndex < 0) {
      targetIndex = planets.length - 1;
    }

    movePlanetsDown(currentPlanet, planets[targetIndex]);
    changeTextWall(planets[targetIndex]);
  }

  function toggleNextPlanet() {
    let index = planets.findIndex(
      (planet) => planet.name === currentPlanet.name
    );
    let lastEntryIndex = planets.length - 1;
    let targetIndex = index + 1;

    if (targetIndex > lastEntryIndex) {
      targetIndex = 0;
    }

    movePlanetsUp(currentPlanet, planets[targetIndex]);
    changeTextWall(planets[targetIndex]);
  }

  function togglePlanetChangeByClick(targetPlanet) {
    if (currentPlanet === targetPlanet) return;
    let currentPlanetIndex = 0;
    let targetPlanetIndex = 0;

    for (let i = 0; i < planets.length; i++) {
      if (planets[i].name === currentPlanet.name) {
        currentPlanetIndex = i;
      }
      if (planets[i].name === targetPlanet.name) {
        targetPlanetIndex = i;
      }
    }

    if (currentPlanetIndex > targetPlanetIndex) {
      movePlanetsDown(currentPlanet, targetPlanet);
    } else {
      movePlanetsUp(currentPlanet, targetPlanet);
    }

    changeTextWall(targetPlanet);
  }

  function movePlanetsUp(centerPlanet, newCenterPlanet) {
    newCenterPlanet.mesh.position.y = -20;

    new TWEEN.Tween(centerPlanet.mesh.position)
      .to({ y: 20 }, tweenAnimationTime)
      .easing(tweenType)
      .start();

    new TWEEN.Tween(newCenterPlanet.mesh.position)
      .to({ y: 0 }, tweenAnimationTime)
      .easing(tweenType)
      .start();
  }

  function movePlanetsDown(centerPlanet, newCenterPlanet) {
    newCenterPlanet.mesh.position.y = 20;

    new TWEEN.Tween(centerPlanet.mesh.position)
      .to({ y: -20 }, tweenAnimationTime)
      .easing(tweenType)
      .start();

    new TWEEN.Tween(newCenterPlanet.mesh.position)
      .to({ y: 0 }, tweenAnimationTime)
      .easing(tweenType)
      .start();
  }

  function changeTextWall(targetPlanet) {
    const textWall = document.querySelector(".text-wall");
    textWall.style.opacity = "0";
    textWall.addEventListener(
      "transitionend",
      () => {
        currentPlanet = targetPlanet;
        textWall.style.opacity = "1";
      },
      { once: true }
    );
  }
</script>

<main>
  <div class="planet-legend">
    <button on:click={() => togglePreviousPlanet()}>
      <i class="fa-solid fa-chevron-up" />
    </button>
    <ul>
      {#each planets as planet}
        <li class={currentPlanet?.name === planet.name ? "selected" : ""}>
          <button on:click={() => togglePlanetChangeByClick(planet)}>
            <img src={planet.icon} alt={planet.name} />
          </button>
        </li>
      {/each}
    </ul>
    <button on:click={() => toggleNextPlanet()}>
      <i class="fa-solid fa-chevron-down" />
    </button>
  </div>
  <div class="text-wall">
    <h1>{currentPlanet?.name}</h1>
    <p class="info-text">{currentPlanet?.text}</p>
    <p class="fun-fact-label">fun fact:</p>
    <p class="fun-fact">{currentPlanet?.funFact}</p>
  </div>
  <div class="planet-preview" id="canvas-container">
    <canvas />
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex: 1;

    .planet-legend {
      flex: 1;
      display: flex;
      flex-direction: column;

      button {
        width: 100%;
        height: 75px;
        border: none;
        outline: none;
        font-size: 40px;
        cursor: pointer;
        background-color: transparent;
      }

      ul {
        list-style: none;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 2px black;
          position: relative;

          button {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 0;

            img {
              width: 50px;
              height: 50px;
              border-radius: 25px;
            }
          }

          &.selected {
            button img {
              box-shadow: 0 0 50px rgba(255, 255, 255, 0.9);
            }
          }
        }
      }
    }

    .text-wall {
      flex: 4;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 1;
      transition: opacity 0.15s ease-in-out;

      h1 {
        margin: 20px;
        font-size: 50px;
      }

      p {
        margin: 20px;
        font-size: 25px;
        overflow-y: auto;
      }

      .fun-fact-label {
        text-transform: uppercase;
        font-weight: bold;
        margin-right: 10px;
        margin: 0 20px;
      }
    }

    .planet-preview {
      display: flex;
      flex: 4;
    }
  }
</style>
