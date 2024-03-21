import { Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UserComponent } from "./pages/user/user.component";
import { ProductComponent } from "./pages/product/product.component";
import { ProductListComponent } from "./pages/product/components/product-list/product-list.component";
import { CategoryComponent } from "./pages/category/category.component";
import { AddProductComponent } from "./pages/product/components/add-product/add-product.component";
import { ProductDetailComponent } from "./pages/product/components/product-detail/product-detail.component";


export const ADMIN_ROUTES : Routes = [
    {
        path: "",
        component: DashboardComponent,
        title: "Dashboard",
    },
    {
        path: "users",
        component: UserComponent,
        title: "Người dùng"
    },
    {
        path: "products",
        component: ProductComponent,
        children: [
            {
                path: "",
                component: ProductListComponent,
                title: "Danh sách sản phẩm"
            },
            {
                path: "details/:id",
                component: ProductDetailComponent,
                title: "Chi tiết sản phẩm",
            },
            {
                path: "add",
                component: AddProductComponent,
                title: "Thêm sản phẩm"
            }
        ]
    },
    {
        path: "categories",
        component: CategoryComponent,
        title: 'Loại sản phẩm'
    }
];