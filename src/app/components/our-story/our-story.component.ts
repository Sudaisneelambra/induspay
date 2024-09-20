import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class OurStoryComponent implements OnInit {
  
  @ViewChild('ourStorySection', { static: true }) ourStorySection!: ElementRef;


  percentage: number = 0;
  targetPercentage: number = 92;
  percentageDuration = 2000;

  boolean=false
  animationStarted = false;

  observer!: IntersectionObserver;

  fullText: string = 'We know how everything works and why your business is failing over and over again.';
  displayedText: string = '';
  index: number = 0;
  delay: number = 50;

  ngOnInit(): void {
    this.setUpIntersectionObserver();
  }


  /**text animation */
  animateText(): void {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText[this.index++];
      setTimeout(() => this.animateText(), this.delay);
    }
  }


  /**setup displying time */
  setUpIntersectionObserver(): void {
    const options = {
      root: null, 
      threshold: 0.2, 
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.startPercentageCount();
          this.animateText()
          this.animationStarted = true;
          this.boolean=true  
        } else if (!entry.isIntersecting && this.animationStarted) {
          this.resetCount();  
        }
      });
    }, options);

    this.observer.observe(this.ourStorySection.nativeElement);
  }


  /**percentage count */
  startPercentageCount(): void {
    const start = this.percentage;
    const range = this.targetPercentage - start;
    const increment = range > 0 ? 1 : -1;
    const stepTime = Math.abs(Math.floor(this.percentageDuration / range));
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= this.targetPercentage) || (increment < 0 && current <= this.targetPercentage)) {
        current = this.targetPercentage;
        clearInterval(timer);
      }
      this.percentage = current;
    }, stepTime);
  }

  
  /**reset count */
  resetCount(): void { 
      this.percentage = 0;
      this.animationStarted = false; 
      this.boolean = false;
      this.displayedText=''
      this.index=0
  }
  
}
