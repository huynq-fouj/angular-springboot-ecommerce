import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./users/users.component";
import { CategoryComponent } from "./category/category.component";
import { ProductsComponent } from "./products/products.component";

export const ADMIN_ROUTES : Routes = [
    {
        path: "",
        component: DashboardComponent,
        title: "Dashboard",
    },
    {
        path: "users",
        component: UsersComponent,
    },
    {
        path: "category",
        component: CategoryComponent,
    },
    {
        path: "products",
        component: ProductsComponent,
    }
];