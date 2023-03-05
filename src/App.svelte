<script>
  import { onMount } from "svelte";
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  // import gsap from "gsap";
  import * as THREE from "three";
  import vertexShader from "./shaders/vertex.glsl";
  import fragmentShader from "./shaders/fragment.glsl";

  import atmosphereVertexShader from "./shaders/atmosphereVertex.glsl";
  import atmoosphereFragmentShader from "./shaders/atmosphereFragment.glsl";

  import globeTexture from "./assets/planets/textures/globe.jpg";
  import jupiterTexture from "./assets/planets/textures/jupiter.jpg";
  import marsTexture from "./assets/planets/textures/mars.jpg";
  import mercuryTexture from "./assets/planets/textures/mercury.jpg";
  import moonTexture from "./assets/planets/textures/moon.jpg";
  import neptuneTexture from "./assets/planets/textures/neptune.jpg";
  import saturnTexture from "./assets/planets/textures/saturn.jpg";
  import sunTexture from "./assets/planets/textures/sun.jpg";
  import uranusTexture from "./assets/planets/textures/uranus.jpg";
  import venusTexture from "./assets/planets/textures/venus.jpg";

  import { planets } from "./assets/planets/dataSheet.json";

  let currentPlanet;

  onMount(() => {
    currentPlanet = planets.find((planet) => planet.name === "Earth");
    createPlanetScene();
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

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector("canvas"),
    });
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // create merkur
    const merkur = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(mercuryTexture),
          },
        },
      })
    );
    merkur.position.y += 40;
    scene.add(merkur);

    // create venus
    const venus = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(venusTexture),
          },
        },
      })
    );
    venus.position.y += 20;
    scene.add(venus);

    // create earth
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(globeTexture),
          },
        },
      })
    );

    //Moon Orbit
    //todo transparent
    const moonOrbit = new THREE.Mesh(
      new THREE.SphereGeometry(5, 35, 35),
      new THREE.MeshBasicMaterial()
    );
    //moonOrbit.rotation.set(0,4,0);
    moonOrbit.rotation.set(1, 4, 0);
    moonOrbit.scale.set(0.9, 0.9, 0.9);

    const group = new THREE.Group();
    group.add(moonOrbit);
    group.add(earth);
    scene.add(group);

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
    //scene.add(atmosphere)

    // create moon
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(5, 35, 35),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(moonTexture),
          },
        },
      })
    );
    moon.position.set(0, 8, 0);
    moon.rotation.set(0, 0, 0);
    moon.scale.set(0.3, 0.3, 0.3);

    moonOrbit.add(moon);

    // create mars
    const mars = new THREE.Mesh(
      new THREE.SphereGeometry(5, 70, 70),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(marsTexture),
          },
        },
      })
    );
    mars.position.y -= 20;
    scene.add(mars);

    // create jupiter
    const jupiter = new THREE.Mesh(
      new THREE.SphereGeometry(5, 70, 70),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(jupiterTexture),
          },
        },
      })
    );
    jupiter.position.y -= 40;
    scene.add(jupiter);

    // create saturn
    const saturn = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(saturnTexture),
          },
        },
      })
    );
    saturn.position.y -= 60;
    scene.add(saturn);

    // create uranus
    const uranus = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(uranusTexture),
          },
        },
      })
    );
    uranus.position.y -= 80;
    scene.add(uranus);

    // create neptun
    const neptun = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(neptuneTexture),
          },
        },
      })
    );
    neptun.position.y -= 100;
    scene.add(neptun);

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

    camera.position.z = 15;

    const mouse = {
      x: undefined,
      y: undefined,
    };

    function animate() {
      moonOrbit.rotation.z += 0.002;
      moon.rotation.y += 0.001;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      earth.rotation.y += 0.001;

      jupiter.rotation.y += 0.001;
      saturn.rotation.y += 0.001;
      mars.rotation.y += 0.001;
      uranus.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      neptun.rotation.y += 0.001;
      merkur.rotation.y += 0.001;
      //gsap.to(group.rotation, {
      //  x: -mouse.y * 0.3,
      //  y: mouse.x * 0.5,
      //  duration: 2
      //})
    }
    animate();

    addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / innerHeight) * 2 + 1;
    });
  }

  function togglePreviousPlanet() {
    let index = planets.findIndex(
      (planet) => planet.name === currentPlanet.name
    );
    let targetIndex = index - 1;
    if (targetIndex < 0) {
      targetIndex = planets.length - 1;
    }

    currentPlanet = planets[targetIndex];
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

    currentPlanet = planets[targetIndex];
  }
</script>

<main>
  <div class="planet-legend">
    <button on:click={() => togglePreviousPlanet()}>
      <i class="fa-solid fa-chevron-up" />
    </button>
    <ul>
      {#each planets as data}
        <li class={currentPlanet?.name === data.name ? "selected" : ""}>
          <button on:click={() => (currentPlanet = data)}>
            {data.name}
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
    <p class="fun-fact">{currentPlanet?.text}</p>
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

          button {
            width: 50px;
            height: 50px;
            background-color: green;
            border-radius: 25px;
          }

          &.selected {
            border: solid 2px red;
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
      flex: 4;
    }
  }
</style>
