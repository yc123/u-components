const isProdMode = Object.is(process.env.NODE_ENV, 'production')

const baseUrl = isProdMode ? 'https://maderest.usoftchina.com' : 'https://maderest.uuzcc.cn'

export default {
  baseUrl: baseUrl
}
