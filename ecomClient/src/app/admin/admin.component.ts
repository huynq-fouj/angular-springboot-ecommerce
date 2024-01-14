import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../customer/layouts/header/header.component';
import { AdminHeaderComponent } from "./layouts/admin-header/admin-header.component";
import { AdminSideBarComponent } from "./layouts/admin-side-bar/admin-side-bar.component";
import { AdminFooterComponent } from "./layouts/admin-footer/admin-footer.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [
        RouterOutlet,
        HeaderComponent,
        AdminHeaderComponent,
        AdminSideBarComponent,
        AdminFooterComponent
    ]
})
export class AdminComponent {

  constructor() {}

}
