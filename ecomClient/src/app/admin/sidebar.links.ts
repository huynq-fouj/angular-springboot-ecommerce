export interface SidebarLink {
    url ?: string;
    label : string;
    /**
     * Code html để hiển thị icon
     */
    icon ?: string;
    /**
     * Dùng tên icon của google
     */
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
                googleIcon: 'fiber_manual_record'
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
                googleIcon: 'fiber_manual_record'
            },
            {
                url: '/admin/products/add',
                label: 'Thêm sản phẩm',
                googleIcon: 'fiber_manual_record'
            },
            {
                url: '/admin/categories',
                label: 'Loại sản phẩm',
                googleIcon: 'fiber_manual_record'
            },
        ]
    },
    {
        label: 'Đơn hàng',
        notRedirect: true,
        children: [
            {
                label: 'Danh sách'
            }
        ]
    },
    {
        url: '/admin/contacts',
        label: 'Liên hệ'
    },
]