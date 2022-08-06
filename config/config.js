import { defineConfig } from 'umi';
import routes from "./routes"

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    antd: {//配置antd组件库
        dark: false,
        compact: true,
    },
    layout: {
        // 支持任何不需要 dom 的
        // https://procomponents.ant.design/components/layout#prolayout
        name: 'Ant Design',
        locale: true,
        layout: 'side',
    },
    routes: routes,
    fastRefresh: {},
});
