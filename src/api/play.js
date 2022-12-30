import request from '@/utils/request.js'

export const getSongById = params => request({
    url:'/song/detail',
    params:params
})

export const getLyricById = params => request({
    url:'/lyric',
    params:params
})
