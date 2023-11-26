import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FormsModule, MenuComponent],
})
export class AppComponent implements OnInit {
  @ViewChild('yourElement') yourElement: ElementRef;

  ngOnInit() {
    const anim1: any = document.getElementById('name-title');
    const anim2: any = document.getElementById('img-section');
    const anim3: any = document.getElementById('name-description');
    const anim4: any = document.getElementById('sec1');
    const anim5: any = document.getElementById('nav-item1');
    const anim6: any = document.getElementById('nav-item2');
    const anim7: any = document.getElementById('nav-item3');

    gsap.from(anim1, {
      y: -100,
      duration: 0.8,
      delay: 0.8,
      opacity: 0,
    });
    gsap.from(anim2, {
      x: -300,
      duration: 0.8,
      delay: 0.8,
      opacity: 0,
    });
    gsap.from(anim3, {
      x: 300,
      duration: 1,
      delay: 1.4,
      opacity: 0,
    });
    gsap.from(anim4, {
      y: -3000,
      duration: 2.2,
      delay: 0,
      opacity: 0.5,
    });
    gsap.from(anim5, {
      y: -200,
      duration: 0.6,
      delay: 4,
      opacity: 0,
    });
    gsap.from(anim6, {
      y: -200,
      duration: 0.6,
      delay: 3.6,
      opacity: 0,
    });
    gsap.from(anim7, {
      y: -200,
      duration: 0.6,
      delay: 3.2,
      opacity: 0,
    });
  }
  title = 'Shubham Khunte';
  isHovered = false;

  scrollToSkills(): void {
    const target: Element | null = document.querySelector('.skills');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToWork(): void {
    const target: Element | null = document.querySelector('.work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToContact(): void {
    const target: Element | null = document.querySelector('.contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToHome(): void {
    const target: Element | null = document.querySelector(".home");
    if(target){
      target.scrollIntoView({behavior: 'smooth'});
    }
  }
}
