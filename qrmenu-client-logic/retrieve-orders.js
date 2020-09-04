require('qrmenu-commons/polyfills/string')
// require('qrmenu-commons/polyfills/function')
const { utils: { call } } = require('qrmenu-commons')
const context = require('./context')

/**
 * @param {string} token of the current worker
 */

module.exports = function (token) {

    String.validate.notVoid(token)
    
    return call('GET', `${this.API_URL}/orders`,
        undefined,
        { 'Authorization': `Bearer ${token}` })
        .then(({ status, body }) => {
            
            if(status === 200) {
                const orders = JSON.parse(body)
                return orders
            }

            const {error} = JSON.parse(body)

            return error
            
        })
}.bind(context)