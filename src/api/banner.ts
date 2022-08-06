import { request } from "umi";

export const bannerAdd = (bannerObj: any) => {
    return request('/classes/bannerAdd', {
        method: "POST",
        data: bannerObj
    })
}