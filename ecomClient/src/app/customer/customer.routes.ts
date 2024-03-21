import { Routes } from "@angular/router";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";

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