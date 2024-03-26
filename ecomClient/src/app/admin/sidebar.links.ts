export interface SidebarLink {
    url ?: string;
    label : string;
    icon ?: string;
    googleIcon ?: string;
    notRedirect ?: boolean;
    children ?: Array<SidebarLink>;
}

export const SIDEBAR_LINKS : Array<SidebarLink> = [
    {
        url: '/admin',
        label: 'Thống kê',
        googleIcon: 'view_comfy_alt',
    },
    {
        label: 'Người dùng',
        notRedirect: true,
        googleIcon: 'group',
        children: [
            {
                url: '/admin/users',
                label: 'Danh sách',
                googleIcon: 'patient_list'
            },
        ]
    },
    {
        label: 'Sản phẩm',
        notRedirect: true,
        googleIcon: 'inventory_2',
        children: [
            {
                url: '/admin/products',
                label: 'Danh sách',
                googleIcon: 'view_list'
            },
            {
                url: '/admin/products/add',
                label: 'Thêm sản phẩm',
                googleIcon: 'add_box'
            },
            {
                url: '/admin/categories',
                label: 'Loại sản phẩm',
                googleIcon: 'category'
            },
        ]
    },
    {
        label: 'Đơn hàng',
        notRedirect: true,
        googleIcon: 'sell',
        children: [
            {
                url: '/admin/bills',
                label: 'Danh sách',
                googleIcon: 'view_list',
            },
            {
                url: '/admin/bills/trash',
                label: 'Đơn hàng đã xóa',
                googleIcon: 'delete_sweep'
            },
        ]
    },
    {
        url: '/admin/contacts',
        label: 'Liên hệ',
        googleIcon: 'chat_bubble'
    },
]