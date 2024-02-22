import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserComponent } from "./components/user/user.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product/components/product-list/product-list.component";
import { CategoryComponent } from "./components/category/category.component";
import { AddProductComponent } from "./components/product/components/add-product/add-product.component";


export const ADMIN_ROUTES : Routes = [
    {
        path: "",
        component: DashboardComponent,
        title: "Dashboard",
    },
    {
        path: "user",
        component: UserComponent,
        title: "Người dùng"
    },
    {
        path: "product",
        component: ProductComponent,
        children: [
            {
                path: "",
                component: ProductListComponent,
                title: "Danh sách sản phẩm"
            },
            {
                path: "add",
                component: AddProductComponent,
                title: "Thêm sản phẩm"
            }
        ]
    },
    {
        path: "category",
        component: CategoryComponent,
        title: 'Loại sản phẩm'
    }
];