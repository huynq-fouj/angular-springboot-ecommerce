import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from "./layouts/footer/footer.component";

@Component({
    selector: 'app-customer',
    standalone: true,
    templateUrl: './customer.component.html',
    styleUrl: './customer.component.css',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent
    ]
})
export class CustomerComponent {

}
