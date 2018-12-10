const isProdMode = Object.is(process.env.NODE_ENV, 'production')

const ssoUrl = isProdMode ? 'https://acctrest.usoftchina.com' : 'https://ssorest.uuzcc.cn'

const sellerUrl = isProdMode ? 'https://mallsellerrest.usoftchina.com' : 'https://mallsellerrest.uuzcc.cn'

const demandUrl = isProdMode ? 'https://malldemandrest.usoftchina.com' : 'https://malldemandrest.uuzcc.cn'

const productUrl = isProdMode ? 'https://mallproductrest.usoftchina.com' : 'https://mallproductrest.uuzcc.cn'

const tradeUrl = isProdMode ? 'https://malltraderest.usoftchina.com' : 'https://malltraderest.uuzcc.cn'

export default {
  ssoUrl: ssoUrl,
  sellerUrl: sellerUrl,
  demandUrl: demandUrl,
  productUrl: productUrl,
  tradeUrl: tradeUrl
}
