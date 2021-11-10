import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import * as THREE from 'three';
// import * as dat from 'dat.gui';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.scss']
})
export class Index1Component implements OnInit, AfterViewInit {

  gui: any;
  canvas: any;
  scene: any;
  geometry: any;
  material: any;
  sphere: any;
  pointLight: any;
  sizes: any;
  camera: any;
  renderer: any;
  clock: any;
  controls: any;
  particles:any;
  particlesCount: number = 5000;
  particlesMesh: any;
  materialStars: any;
  loader:any;
  crossIcon: any;
  mouseX: any = 0;
  mouseY: any = 0;

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
    this.loader = new THREE.TextureLoader();
    this.crossIcon = this.loader.load('../../../assets/img/light.png')

    this.canvas = this.el.nativeElement.querySelector('.webgl')
    this.scene = new THREE.Scene()

    this.geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

    this.material = new THREE.PointsMaterial({
      size: 0.005,
      color: '#fff'
    })

    this.materialStars = new THREE.PointsMaterial({
      size: 0.005,
      map: this.crossIcon,
      transparent: true
    })


    this.particles = new THREE.BufferGeometry()

    const particlesArr = new Float32Array(this.particlesCount * 3);

    for (let i = 0; i < this.particlesCount * 3; i++){
      particlesArr[i] = (Math.random() - 0.5) * 5
    }
    this.particles.setAttribute('position', new THREE.BufferAttribute(particlesArr, 3))


    this.sphere = new THREE.Points(this.geometry, this.material)
    this.particlesMesh = new THREE.Points(this.particles, this.materialStars)
    this.scene.add(this.sphere, this.particlesMesh)

    this.pointLight = new THREE.PointLight(0xffffff, 0.1)
    this.pointLight.position.x = 2
    this.pointLight.position.y = 3
    this.pointLight.position.z = 4
    this.scene.add(this.pointLight)

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
      this.sizes.width = window.innerWidth
      this.sizes.height = window.innerHeight

      this.camera.aspect = this.sizes.width / this.sizes.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.sizes.width, this.sizes.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    window.addEventListener('mousemove', (event) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    })


    this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
    this.camera.position.x = 0
    this.camera.position.y = 0
    this.camera.position.z = 2
    this.scene.add(this.camera)

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(new THREE.Color('#21282a'))

    this.clock = new THREE.Clock()

    const tick = () => {

      const elapsedTime = this.clock.getElapsedTime()
      this.sphere.rotation.y = 0.5 * elapsedTime
      this.particlesMesh.rotation.y = -0.03 * elapsedTime
      if (this.mouseX > 0){
        this.particlesMesh.rotation.x = -this.mouseY * (elapsedTime * 0.00008)
        this.particlesMesh.rotation.y = this.mouseX * (elapsedTime * 0.00008)
      }
      this.renderer.render(this.scene, this.camera)

      window.requestAnimationFrame(tick)
    }

    tick()
    this.gsapFunc();
  }

  gsapFunc(){

  }

}
