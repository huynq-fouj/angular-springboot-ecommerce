import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { AccessErrorComponent } from './error/access-error/access-error.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        title: "Đăng nhập"
    },
    {
        path: "signup",
        component: RegisterComponent,
        title: "Đăng ký"
    },
    {
        path: "",
        component: CustomerComponent,
        loadChildren: () => import("./customer/customer.routes").then(m => m.CUSTOMER_ROUTES)
    },
    {
        path: "admin",
        component: AdminComponent,
        loadChildren: () => import("./admin/admin.routes").then(m => m.ADMIN_ROUTES)
    },
    {
        path: "access-error",
        component: AccessErrorComponent,
        title: "Không có quyền hạn"
    },
    {
        path: "**",
        component: PageNotFoundComponent,
        title: "Trang không tồn tại"
    }
];
