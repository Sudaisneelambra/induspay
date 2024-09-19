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
    this.router.navigate(['/contact-form'])
  }
}
