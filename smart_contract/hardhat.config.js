

require('@nomiclabs/hardhat-waffle');


module.exports = {
    solidity: '0.8.0',
    networks : {
        ropsten : {
            url : 'https://eth-ropsten.alchemyapi.io/v2/eyQnLAnVPloNPtXark6GcWNklt151VVY',
            accounts: ['f3fac0a4e50097ae306812fbbbec1f8b9f6772f1af5917eb9069d10f450e441d']
        }
    }



}