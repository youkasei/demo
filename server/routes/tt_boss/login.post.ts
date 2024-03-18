import { defineEventHandler } from 'h3'
import { ofetch as $fetch } from 'ofetch'
import http from 'http'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // console.log(event.headers, body)
    const headers = Object.create({})
    for (const [key, value] of event.headers.entries()) {
        // headers.set(key,value)
        headers[key] = value
    }
    // console.log('checked:', headers)
    const res = await new Promise((resolve, reject) => {
        const req = http.request({
            hostname: '152.101.90.195',
            port: 10004,
            path: '/tt_boss/login',
            method: 'POST',
            headers: {
                Token: headers['token'],
                'content-length': Buffer.byteLength(JSON.stringify(body))
            },
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                console.log('data', data)
                resolve(data)
            })
        })
        req.write(JSON.stringify(body))
        req.end()
    })
    return res

})


