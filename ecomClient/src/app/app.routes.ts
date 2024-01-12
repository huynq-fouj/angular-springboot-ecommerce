import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "signup",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "customer",
        loadChildren: () => import("./customer/customer.routes").then(m => m.CUSTOMER_ROUTES)
    },
    {
        path: "admin",
        loadChildren: () => import("./admin/admin.routes").then(m => m.ADMIN_ROUTES)
    },
    {
        path: "",
        component: AppComponent,
        title: "E-commerce",
    },
    {
        path: "**",
        component: PageNotFoundComponent,
        title: "Page not found"
    }
];
