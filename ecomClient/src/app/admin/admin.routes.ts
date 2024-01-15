import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./users/users.component";
import { ProductsComponent } from "./products/products.component";
import { CategoriesComponent } from "./products/categories/categories.component";
import { ProductListComponent } from "./products/product-list/product-list.component";

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
        path: "products",
        component: ProductsComponent,
        children: [
            {
                path: "",
                component: ProductListComponent,
                title: "Danh sách sản phẩm"
            },
            {
                path: "categories",
                component: CategoriesComponent,
                title: "Loại sản phẩm"
            }
        ]
    }
];