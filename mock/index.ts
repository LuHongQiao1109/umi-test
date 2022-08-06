import mockjs from "mockjs"
var Mock = require('mockjs')
var Random = Mock.Random

export default {
    // 使用 mockjs 等三方库
    'GET /api/tags': mockjs.mock({
        'code': 200,
        'data': {
            'list|100': [{
                id: '@id',
                name: '@cname',
                'value|1-100': 50,
                'type|0-2': 1,
                'time': '@date',
                'img': Random.image('200x100', '#FF6600')
            }],
        }
    }),
};

// export default {
//     // 支持值为 Object 和 Array
//     'GET /api/users': { users: [1, 2] },

//     // GET 可忽略
//     '/api/users/1': { id: 1 },

//     // 支持自定义函数，API 参考 express@4
//     'POST /api/users/create': (req, res) => {
//         // 添加跨域请求头
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.end('ok');
//     },
// }


