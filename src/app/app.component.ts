import { Component, OnInit, HostListener } from '@angular/core';

import * as THREE from 'three';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'threedee';
  public key;
  public animateRight;
  public animateLeft;
  public animateUp;
  public animateDown;
  public reset;
  constructor(){

  }
  
  ngOnInit(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    this.animateRight = function() {
      cube.rotation.y += 0.01;

      renderer.render(scene,camera);
    };
    this.animateLeft = function(){
      cube.rotation.y -= 0.01;

      renderer.render(scene, camera);
    }
    this.animateDown = function(){
      cube.rotation.x += 0.01;

      renderer.render(scene, camera);
    }
    this.animateUp = function(){
      cube.rotation.x -= 0.01;
      
      renderer.render(scene, camera);
    }

    this.reset = function(){
      cube.rotation.x = 0;
      cube.rotation.y = 0;

      renderer.render(scene, camera);
    }
    renderer.render(scene,camera);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    console.log(this.key);
    if(this.key == 'd'){
      this.animateRight();
    };
    if(this.key == 'a'){
      this.animateLeft();
    };
    if(this.key == 'w'){
      this.animateUp();
    }
    if(this.key == 's'){
      this.animateDown();
    }
  }
  @HostListener('click', ['$event'])
  onClick(e) {
    console.log(e)
  }

}
