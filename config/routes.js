export default [
    { path: '/', component: '@/pages/start/index', name: "首页" },
    { path: '/test', component: '@/pages/test/index', name: "测试页" },
    {
        path: "/stu",
        name: "学员录入",
        routes: [
            { path: "/stu/list", name: "学员列表", component: "@/pages/stu/list" },
            { path: "/stu/dis", name: "学员录入", component: "@/pages/stu/dis" }
        ]
    },
    {
        path: "/category",
        name: "分类管理",
        routes: [
            { path: "/category/categorylist", name: "分类列表", component: "@/pages/category/categoryList" },
            { path: "/category/categorypub", name: "分类发布", component: "@/pages/category/categoryPub" }
        ]
    },
    {
        path: "/banner",
        name: "轮播图片",
        routes: [
            { path: "/banner/bannerlist", name: "轮播列表", component: "@/pages/banner/list" },
            { path: "/banner/bannerpub", name: "轮播发布", component: "@/pages/banner/pub" }
        ]
    }

]