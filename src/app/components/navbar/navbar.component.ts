import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


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
}
