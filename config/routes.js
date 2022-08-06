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
    }
]