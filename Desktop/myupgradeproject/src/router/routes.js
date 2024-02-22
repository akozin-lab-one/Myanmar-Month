import Main from "../pages/Main.vue";
import MainProduct from "../pages/products/Main.vue";
import CreateProduct from "../pages/products/Create.vue";
import Category from "../pages/categories/Category.vue";
import CreateCategory from "../pages/categories/CreateCategory.vue";
import EditProduct from "../pages/products/Edit.vue";
import EditCategory from "../pages/categories/EditCategory.vue"
import Shop from "../pages/shops/Main.vue"
import CreateShop from "../pages/shops/Create.vue"
import EditShop from "../pages/shops/Edit.vue"

const routes = [{
    path: '/',
    component: Main,
    name: 'main'
}, {
    path: '/product/main',
    component: MainProduct,
    name: 'products'
}, {
    path: '/product/create',
    component: CreateProduct,
    name: 'createproducts'
},{
    path: '/product/edit',
    component: EditProduct,
    name: 'editproduct'
}, {
    path: '/category/main',
    component: Category,
    name: 'categories'
}, {
    path: '/category/create',
    component: CreateCategory,
    name: 'createcategories'
},{
    path: '/category/edit',
    component: EditCategory,
    name: 'editcategory'
},{
    path: '/shop/main',
    component: Shop,
    name: 'shopmain'
},{
    path: '/shop/create',
    component: CreateShop,
    name: 'createshop'
},{
    path: '/shop/edit',
    component: EditShop,
    name: 'editshop'
}]

export default routes