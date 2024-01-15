import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './admin-footer.component.html',
  styleUrl: './admin-footer.component.css'
})
export class AdminFooterComponent {

  @Input() isSidebarShow !: boolean;

}
