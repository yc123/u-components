const isProdMode = Object.is(process.env.NODE_ENV, 'production')

const baseUrl = isProdMode ? 'https://finrest.usoftchina.com' : 'https://finrest.uuzcc.cn'

const authorityUrl = isProdMode ? 'https://securityrest.usoftchina.com' : 'https://securityrest.uuzcc.cn'

const basicAdminUrl = isProdMode ? 'https://basicadmin.usoftchina.com' : 'https://basicadmin.uuzcc.cn'

module.exports = {
  baseUrl: baseUrl,
  authorityUrl: authorityUrl,
  basicAdminUrl: basicAdminUrl
}
