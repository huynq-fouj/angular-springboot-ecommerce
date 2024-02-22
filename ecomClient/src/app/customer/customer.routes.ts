import { Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";

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