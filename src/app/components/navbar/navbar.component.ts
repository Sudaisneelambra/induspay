import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){}

  /**default value */
  openMenu:boolean=false

  /**show menu */
  showMenu(){
    this.openMenu = !this.openMenu
  }

  /**closing menu bar */
  close(){
    this.openMenu = false
  }

  gotToContactForm(){
    const contactScreen = document.getElementById('contact')
    contactScreen?.scrollIntoView({behavior:'smooth'})
    this.openMenu = false

  }


  goToHomePage(){
    const homeScreen = document.getElementById('hero')
    homeScreen?.scrollIntoView({behavior:'smooth'})
    this.openMenu = false

  }

  goToServicesPage(){
    const serviceScreen = document.getElementById('services')
    serviceScreen?.scrollIntoView({behavior:'smooth'})
    this.openMenu = false
  }

  goToDirectorsPage(){
    const serviceScreen = document.getElementById('directors')
    serviceScreen?.scrollIntoView({behavior:'smooth'})
    this.openMenu = false
  }
}
