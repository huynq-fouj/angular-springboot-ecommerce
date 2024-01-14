import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css'
})
export class AdminSideBarComponent {

}
