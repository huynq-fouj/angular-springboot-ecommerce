import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

export const CUSTOMER_ROUTES : Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Trang chủ"
    },
    {
        path: "contact",
        component: ContactComponent,
        title: "Liên hệ",
    }
];