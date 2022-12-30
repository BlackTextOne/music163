import request from '@/utils/request.js'

export const recommendMusic = params => request({
    url:'/personalized',
    params:params
})

export const recommendNewMusic = params => request({
    url:'/personalized/newsong',
    params:params
})