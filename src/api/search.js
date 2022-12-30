import request from '@/utils/request';

export const hotSearch = params => request({
    url:'/search/hot',
    params:params
})

export const cloudSearch = params => request({
    url:'/cloudsearch',
    params:params
})