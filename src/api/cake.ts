import { request } from "umi";

export const cateAdd = (cateObj: any) => {
    return request('/classes/CakeCate', {
        method: "POST",
        data: cateObj
    })
}