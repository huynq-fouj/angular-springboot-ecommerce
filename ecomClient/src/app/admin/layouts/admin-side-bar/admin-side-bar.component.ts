import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SIDEBAR_LINKS, SidebarLink } from '../../sidebar.links';

@Component({
  selector: 'app-admin-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    CdkAccordionModule,
  ],
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css'
})
export class AdminSideBarComponent {

  @Input() isSidebarShow !: boolean;
  @Output() isCloseSideBar = new EventEmitter<boolean>();
  sidebarLinks : Array<SidebarLink> = SIDEBAR_LINKS;

  toggleSideBar() {
    this.isCloseSideBar.emit();
  }

}
