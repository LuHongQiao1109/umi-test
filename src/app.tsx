import { message } from "antd"
import "./utils/init_leancloud"

console.log('%c 🐭项目运行时配置🐭:', 'color: Orchid; background: LightPink; font-size: 20px;')
//在这个文件中做项目运行时配置
//异步请求相关运行时配置

export const request = {
    requestInterceptors: [//请求拦截 
        (url: string, options: { url: string; headers: { "X-LC-Id": string; "X-LC-Key": string; "Content-Type": string; }; }) => {
            console.log('请求拦截:', url, options);
            options.url = 'https://mbsx7aop.lc-cn-n1-shared.com/1.1' + url
            options.headers = {
                "X-LC-Id": "mBsX7AOPREORgYdsvaFeR08q-gzGzoHsz",
                "X-LC-Key": "YhMml2WfcDnbjB2x2F53wYXW",
                "Content-Type": "application/json"
            }
            return options
        }
    ],
    responseInterceptors: [//相应拦截
        async (resopnse: any, options: any) => {
            let res = await resopnse.json()
            console.log('resopnse', resopnse);
            console.log('options', options);
            console.log('res', res);

            if (res.objectId && options.method.toLowerCase() == "post") {
                message.success("您已成功加入")
            } else {
                message.warning("加入失败")
            }
            return { data: res.data }
        }
    ]
}