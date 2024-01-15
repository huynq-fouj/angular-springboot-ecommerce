import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../customer/layouts/header/header.component';
import { AdminHeaderComponent } from "./layouts/admin-header/admin-header.component";
import { AdminSideBarComponent } from "./layouts/admin-side-bar/admin-side-bar.component";
import { AdminFooterComponent } from "./layouts/admin-footer/admin-footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        AdminHeaderComponent,
        AdminSideBarComponent,
        AdminFooterComponent
    ]
})
export class AdminComponent {

  isSidebarShow: boolean = true;

  constructor() {}

}
