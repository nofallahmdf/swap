"use strict";
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 5324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ redirectQuoteReq),
/* harmony export */   "g": () => (/* binding */ sendSwapEvent)
/* harmony export */ });
const redirectQuoteReq = async (protocol, chain, from, to, amount, extra)=>{
    const data = await fetch(`https://api.llama.fi/dexAggregatorQuote?protocol=${protocol}&chain=${chain}&from=${from}&to=${to}&amount=${amount}`, {
        method: "POST",
        body: JSON.stringify(extra)
    }).then((res)=>res.json());
    return data;
};
const sendSwapEvent = async (event)=>{
    const data = await fetch(`https://api.llama.fi/storeAggregatorEvent`, {
        method: "POST",
        body: JSON.stringify(event)
    }).then((res)=>res.json());
    return data;
};


/***/ }),

/***/ 7787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O0": () => (/* binding */ defillamaReferrerAddress),
/* harmony export */   "XX": () => (/* binding */ chainNamesReplaced),
/* harmony export */   "cB": () => (/* binding */ nativeAddress),
/* harmony export */   "pi": () => (/* binding */ initialLiquidity),
/* harmony export */   "zk": () => (/* binding */ chainsMap)
/* harmony export */ });
const defillamaReferrerAddress = "0x08a3c2A819E3de7ACa384c798269B3Ce1CD0e437";
const chainsMap = {
    ethereum: 1,
    bsc: 56,
    polygon: 137,
    optimism: 10,
    arbitrum: 42161,
    avax: 43114,
    gnosis: 100,
    fantom: 250,
    klaytn: 8217,
    aurora: 1313161554,
    celo: 42220,
    cronos: 25,
    dogechain: 2000,
    moonriver: 1285,
    bttc: 199,
    oasis: 42262,
    velas: 106,
    heco: 128,
    harmony: 1666600000,
    boba: 288,
    okexchain: 66,
    fuse: 122,
    moonbeam: 1284
};
const chainNamesReplaced = {
    bsc: "BSC",
    avax: "Avalanche",
    okexchain: "OKX",
    bttc: "BitTorrent"
};
const nativeAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase();
const initialLiquidity = [
    500,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    500000000
];


/***/ }),

/***/ 3465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ getTokenList)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nativeTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6322);


const tokensToRemove = {
    1: {
        ["0xB8c77482e45F1F44dE1745F52C74426C631bDD52".toLowerCase()]: true
    }
};
const oneInchChains = {
    ethereum: 1,
    bsc: 56,
    polygon: 137,
    optimism: 10,
    arbitrum: 42161,
    avax: 43114,
    gnosis: 100,
    fantom: 250,
    klaytn: 8217
};
async function getTokenList() {
    // const uniList = await fetch('https://tokens.uniswap.org/').then((r) => r.json());
    // const sushiList = await fetch('https://token-list.sushi.com/').then((r) => r.json());
    const oneInch = await Promise.all(Object.values(oneInchChains).map(async (chainId)=>fetch(`https://tokens.1inch.io/v1.1/${chainId}`).then((r)=>r.json())));
    // const hecoList = await fetch('https://token-list.sushi.com/').then((r) => r.json()); // same as sushi
    // const lifiList = await fetch('https://li.quest/v1/tokens').then((r) => r.json());
    const [uniList, sushiList, lifiList, geckoList] = await Promise.all([
        fetch("https://tokens.uniswap.org/").then((r)=>r.json()),
        fetch("https://token-list.sushi.com/").then((r)=>r.json()),
        fetch("https://li.quest/v1/tokens").then((r)=>r.json()),
        fetch("https://api.coingecko.com/api/v3/coins/list?include_platform=false").then((res)=>res.json())
    ]);
    const oneInchList = Object.values(oneInchChains).map((chainId, i)=>Object.values(oneInch[i]).map((token)=>({
                ...token,
                chainId
            }))).flat();
    const tokensByChain = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)([
        ...oneInchList,
        ...sushiList.tokens,
        ...uniList.tokens,
        ..._nativeTokens__WEBPACK_IMPORTED_MODULE_1__/* .nativeTokens */ .w
    ], "chainId"), lifiList.tokens), (val)=>(0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(val, (token)=>token.address.toLowerCase()));
    const tokensFiltered = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(tokensByChain, (val, key)=>{
        return val.filter((token)=>!tokensToRemove[key]?.[token.address.toLowerCase()]);
    });
    const tokenlist = {};
    for(const chain in tokensFiltered){
        tokenlist[chain] = tokensFiltered[chain].map((t)=>({
                ...t,
                label: t.symbol,
                value: t.address,
                geckoId: geckoList ? geckoList?.find((geckoCoin)=>geckoCoin.symbol === t.symbol.toLowerCase())?.id ?? null : null
            }));
    }
    tokenlist[66][0].logoURI = tokenlist[66][1].logoURI;
    return {
        props: {
            tokenlist
        },
        revalidate: 5 * 60 // 5 minutes
    };
}


/***/ }),

/***/ 6322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ nativeTokens)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4868);


const ethereum = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 1,
    name: "Ethereum",
    symbol: "ETH",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("ethereum"),
    decimals: 18
};
const binance = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 56,
    name: "Binance",
    symbol: "BNB",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("binance"),
    decimals: 18
};
const arbitrum = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 42161,
    name: "Ethereum",
    symbol: "ETH",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("ethereum"),
    decimals: 18
};
const optimism = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 10,
    name: "Ethereum",
    symbol: "ETH",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("ethereum"),
    decimals: 18
};
const okx = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 66,
    name: "OKX",
    symbol: "OKX",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("okexchain"),
    decimals: 18
};
const boba = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 288,
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("ethereum"),
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18
};
const harmony = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 1666600000,
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("harmony"),
    decimals: 18,
    name: "Harmony",
    symbol: "ONE"
};
const heco = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 128,
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("heco"),
    name: "Huobi Token",
    symbol: "HT"
};
const velas = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 106,
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("velas"),
    name: "Velas",
    symbol: "VLX"
};
const oasis = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 24462,
    name: "Oasis",
    symbol: "ROSE",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("oasis"),
    decimals: 18
};
const bttc = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 199,
    name: "BitTorrent",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("bittorrent"),
    symbol: "BTT",
    decimals: 18
};
const moonriver = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 1285,
    name: "MoonRiver",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("moonriver"),
    symbol: "MOVR",
    decimals: 18
};
const moonbeam = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 1284,
    name: "Moonbeam",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("moonbeam"),
    symbol: "GLMR",
    decimals: 18
};
const fuse = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 122,
    name: "Fuse",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("fuse"),
    symbol: "FUSE",
    decimals: 18
};
const dogechain = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 2000,
    name: "Doge",
    symbol: "DOGE",
    decimals: 18,
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("dogechain")
};
const cronos = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 25,
    name: "Cronos",
    symbol: "CRO",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("cronos"),
    decimals: 18
};
const celo = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 42220,
    name: "Celo",
    symbol: "CELO",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("celo"),
    decimals: 18
};
const aurora = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 1313161554,
    name: "Ethereum",
    symbol: "ETH",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("ethereum"),
    decimals: 18
};
const avax = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 43114,
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("avalanche"),
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18
};
const klaytn = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 8217,
    name: "Klaytn",
    symbol: "KLAY",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("klaytn"),
    decimals: 18
};
const fantom = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 250,
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("fantom"),
    name: "Fantom",
    symbol: "FTM",
    decimals: 18
};
const gnosis = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 100,
    name: "xDai",
    symbol: "xDai",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("gnosis"),
    decimals: 18
};
const polygon = {
    mcap: Number.MAX_SAFE_INTEGER,
    address: ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero,
    chainId: 137,
    name: "Matic",
    symbol: "MATIC",
    logoURI: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("polygon"),
    decimals: 18
};
const nativeTokens = [
    ethereum,
    arbitrum,
    binance,
    optimism,
    polygon,
    oasis,
    fantom,
    velas,
    harmony,
    gnosis,
    klaytn,
    avax,
    aurora,
    cronos,
    celo,
    dogechain,
    moonriver,
    bttc,
    heco,
    boba,
    okx,
    moonbeam,
    fuse
];


/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j$": () => (/* binding */ adapters),
  "Mk": () => (/* binding */ getAllChains),
  "LF": () => (/* binding */ router_swap)
});

// NAMESPACE OBJECT: ./src/components/Aggregator/adapters/0x.ts
var _0x_namespaceObject = {};
__webpack_require__.r(_0x_namespaceObject);
__webpack_require__.d(_0x_namespaceObject, {
  "approvalAddress": () => (approvalAddress),
  "chainToId": () => (chainToId),
  "getQuote": () => (getQuote),
  "getTxData": () => (getTxData),
  "name": () => (_0x_name),
  "swap": () => (swap),
  "token": () => (token)
});

// NAMESPACE OBJECT: ./src/components/Aggregator/adapters/1inch.ts
var _1inch_namespaceObject = {};
__webpack_require__.r(_1inch_namespaceObject);
__webpack_require__.d(_1inch_namespaceObject, {
  "approvalAddress": () => (_1inch_approvalAddress),
  "chainToId": () => (_1inch_chainToId),
  "getQuote": () => (_1inch_getQuote),
  "getTxData": () => (_1inch_getTxData),
  "name": () => (_1inch_name),
  "referral": () => (referral),
  "swap": () => (_1inch_swap),
  "token": () => (_1inch_token)
});

// NAMESPACE OBJECT: ./src/components/Aggregator/adapters/cowswap/index.ts
var cowswap_namespaceObject = {};
__webpack_require__.r(cowswap_namespaceObject);
__webpack_require__.d(cowswap_namespaceObject, {
  "approvalAddress": () => (cowswap_approvalAddress),
  "chainToId": () => (cowswap_chainToId),
  "getQuote": () => (cowswap_getQuote),
  "getTxData": () => (cowswap_getTxData),
  "name": () => (cowswap_name),
  "referral": () => (cowswap_referral),
  "swap": () => (cowswap_swap),
  "token": () => (cowswap_token)
});

// NAMESPACE OBJECT: ./src/components/Aggregator/adapters/kyberswap.ts
var kyberswap_namespaceObject = {};
__webpack_require__.r(kyberswap_namespaceObject);
__webpack_require__.d(kyberswap_namespaceObject, {
  "approvalAddress": () => (kyberswap_approvalAddress),
  "chainToId": () => (kyberswap_chainToId),
  "getQuote": () => (kyberswap_getQuote),
  "getTxData": () => (kyberswap_getTxData),
  "name": () => (kyberswap_name),
  "swap": () => (kyberswap_swap),
  "token": () => (kyberswap_token)
});

// NAMESPACE OBJECT: ./src/components/Aggregator/adapters/openocean.ts
var openocean_namespaceObject = {};
__webpack_require__.r(openocean_namespaceObject);
__webpack_require__.d(openocean_namespaceObject, {
  "approvalAddress": () => (openocean_approvalAddress),
  "chainToId": () => (openocean_chainToId),
  "getQuote": () => (openocean_getQuote),
  "getTxData": () => (openocean_getTxData),
  "name": () => (openocean_name),
  "swap": () => (openocean_swap),
  "token": () => (openocean_token)
});

// NAMESPACE OBJECT: ./src/components/Aggregator/adapters/yieldyak/index.ts
var yieldyak_namespaceObject = {};
__webpack_require__.r(yieldyak_namespaceObject);
__webpack_require__.d(yieldyak_namespaceObject, {
  "approvalAddress": () => (yieldyak_approvalAddress),
  "chainToId": () => (yieldyak_chainToId),
  "getQuote": () => (yieldyak_getQuote),
  "name": () => (yieldyak_name),
  "swap": () => (yieldyak_swap),
  "token": () => (yieldyak_token)
});

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: ./src/components/Aggregator/constants.ts
var constants = __webpack_require__(7787);
;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/0x.ts


const chainToId = {
    ethereum: "https://api.0x.org/",
    bsc: "https://bsc.api.0x.org/",
    polygon: "https://polygon.api.0x.org/",
    optimism: "https://optimism.api.0x.org/",
    arbitrum: "https://arbitrum.api.0x.org/",
    avax: "https://avalanche.api.0x.org/",
    fantom: "https://fantom.api.0x.org/",
    celo: "https://celo.api.0x.org/"
};
const _0x_name = "Matcha/0x";
const token = "ZRX";
function approvalAddress() {
    // https://docs.0x.org/0x-api-swap/guides/swap-tokens-with-0x-api
    return "0xdef1c0ded9bec7f1a1670819833240f027b25eff";
}
const nativeToken = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
async function getQuote(chain, from, to, amount, extra) {
    // amount should include decimals
    const tokenFrom = from === external_ethers_.ethers.constants.AddressZero ? nativeToken : from;
    const tokenTo = to === external_ethers_.ethers.constants.AddressZero ? nativeToken : to;
    const data = await fetch(`${chainToId[chain]}swap/v1/quote?buyToken=${tokenTo}&sellToken=${tokenFrom}&sellAmount=${amount}&slippagePercentage=${extra.slippage / 100 || 1}&affiliateAddress=${constants/* defillamaReferrerAddress */.O0}&enableSlippageProtection=false`).then((r)=>r.json());
    return {
        amountReturned: data.buyAmount,
        estimatedGas: data.gas,
        tokenApprovalAddress: data.to,
        rawQuote: data,
        logo: "https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2F1690203644-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FKX9pG8rH3DbKDOvV7di7%252Ficon%252F1nKfBhLbPxd2KuXchHET%252F0x%2520logo.png%3Falt%3Dmedia%26token%3D25a85a3e-7f72-47ea-a8b2-e28c0d24074b"
    };
}
async function swap({ signer , rawQuote  }) {
    const fromAddress = await signer.getAddress();
    const tx = await signer.sendTransaction({
        from: fromAddress,
        to: rawQuote.to,
        data: rawQuote.data,
        value: rawQuote.value
    });
    return tx;
}
const getTxData = ({ rawQuote  })=>rawQuote?.data;

;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/1inch.ts
// Source https://docs.1inch.io/docs/aggregation-protocol/api/swagger


const _1inch_chainToId = {
    ethereum: 1,
    bsc: 56,
    polygon: 137,
    optimism: 10,
    arbitrum: 42161,
    gnosis: 100,
    avax: 43114,
    fantom: 250,
    klaytn: 8217,
    aurora: 1313161554
};
const _1inch_name = "1inch";
const _1inch_token = "1INCH";
const referral = true;
function _1inch_approvalAddress() {
    // https://api.1inch.io/v4.0/1/approve/spender
    return "0x1111111254fb6c44bac0bed2854e76f90643097d";
}
const _1inch_nativeToken = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
async function _1inch_getQuote(chain, from, to, amount, extra) {
    // ethereum = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
    // amount should include decimals
    const tokenFrom = from === external_ethers_.ethers.constants.AddressZero ? _1inch_nativeToken : from;
    const tokenTo = to === external_ethers_.ethers.constants.AddressZero ? _1inch_nativeToken : to;
    const [data, { address: tokenApprovalAddress  }, swapData] = await Promise.all([
        fetch(`https://api.1inch.io/v4.0/${_1inch_chainToId[chain]}/quote?fromTokenAddress=${tokenFrom}&toTokenAddress=${tokenTo}&amount=${amount}&slippage=${extra.slippage}`).then((r)=>r.json()),
        fetch(`https://api.1inch.io/v4.0/${_1inch_chainToId[chain]}/approve/spender`).then((r)=>r.json()),
        extra.userAddress !== external_ethers_.ethers.constants.AddressZero ? fetch(`https://api.1inch.io/v4.0/${_1inch_chainToId[chain]}/swap?fromTokenAddress=${tokenFrom}&toTokenAddress=${tokenTo}&amount=${amount}&fromAddress=${extra.userAddress}&slippage=${extra.slippage}&referrerAddress=${constants/* defillamaReferrerAddress */.O0}`).then((r)=>r.json()) : null
    ]);
    return {
        amountReturned: swapData?.toTokenAmount ?? data.toTokenAmount,
        estimatedGas: swapData?.tx?.gas ?? data.estimatedGas,
        tokenApprovalAddress,
        rawQuote: swapData,
        logo: "https://defillama.com/_next/image?url=https%3A%2F%2Ficons.llama.fi%2F1inch-network.jpg&w=48&q=75"
    };
}
async function _1inch_swap({ signer , rawQuote  }) {
    const tx = await signer.sendTransaction({
        from: rawQuote.tx.from,
        to: rawQuote.tx.to,
        data: rawQuote.tx.data,
        value: rawQuote.tx.value
    });
    return tx;
}
const _1inch_getTxData = ({ rawQuote  })=>rawQuote?.tx?.data;

// EXTERNAL MODULE: external "@gnosis.pm/gp-v2-contracts"
var gp_v2_contracts_ = __webpack_require__(902);
;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/cowswap/abi.ts
const ABI = {
    natviveSwap: [
        {
            "inputs": [
                {
                    "internalType": "contract ICoWSwapSettlement",
                    "name": "_cowSwapSettlement",
                    "type": "address"
                },
                {
                    "internalType": "contract IWrappedNativeToken",
                    "name": "_wrappedNativeToken",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "EthTransferFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "IncorrectEthAmount",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "orderHash",
                    "type": "bytes32"
                }
            ],
            "name": "NotAllowedToInvalidateOrder",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotAllowedZeroSellAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OrderIsAlreadyExpired",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "orderHash",
                    "type": "bytes32"
                }
            ],
            "name": "OrderIsAlreadyOwned",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReceiverMustBeSet",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "orderUid",
                    "type": "bytes"
                }
            ],
            "name": "OrderInvalidation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "sellToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "buyToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "sellAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "buyAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint32",
                            "name": "validTo",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "appData",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "feeAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "kind",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bool",
                            "name": "partiallyFillable",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sellTokenBalance",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "buyTokenBalance",
                            "type": "bytes32"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct GPv2Order.Data",
                    "name": "order",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "enum ICoWSwapOnchainOrders.OnchainSigningScheme",
                            "name": "scheme",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes",
                            "name": "data",
                            "type": "bytes"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct ICoWSwapOnchainOrders.OnchainSignature",
                    "name": "signature",
                    "type": "tuple"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "OrderPlacement",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "orderUid",
                    "type": "bytes"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "refunder",
                    "type": "address"
                }
            ],
            "name": "OrderRefund",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "cowSwapSettlement",
            "outputs": [
                {
                    "internalType": "contract ICoWSwapSettlement",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "buyToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "sellAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "buyAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "appData",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "feeAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint32",
                            "name": "validTo",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bool",
                            "name": "partiallyFillable",
                            "type": "bool"
                        },
                        {
                            "internalType": "int64",
                            "name": "quoteId",
                            "type": "int64"
                        }
                    ],
                    "internalType": "struct EthFlowOrder.Data",
                    "name": "order",
                    "type": "tuple"
                }
            ],
            "name": "createOrder",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "orderHash",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "buyToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "sellAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "buyAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "appData",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "feeAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint32",
                            "name": "validTo",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bool",
                            "name": "partiallyFillable",
                            "type": "bool"
                        },
                        {
                            "internalType": "int64",
                            "name": "quoteId",
                            "type": "int64"
                        }
                    ],
                    "internalType": "struct EthFlowOrder.Data",
                    "name": "order",
                    "type": "tuple"
                }
            ],
            "name": "invalidateOrder",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "buyToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "sellAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "buyAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "appData",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "feeAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint32",
                            "name": "validTo",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bool",
                            "name": "partiallyFillable",
                            "type": "bool"
                        },
                        {
                            "internalType": "int64",
                            "name": "quoteId",
                            "type": "int64"
                        }
                    ],
                    "internalType": "struct EthFlowOrder.Data[]",
                    "name": "orderArray",
                    "type": "tuple[]"
                }
            ],
            "name": "invalidateOrdersIgnoringNotAllowed",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "orderHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "isValidSignature",
            "outputs": [
                {
                    "internalType": "bytes4",
                    "name": "",
                    "type": "bytes4"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orders",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint32",
                    "name": "validTo",
                    "type": "uint32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "unwrap",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "wrap",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "wrapAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "wrappedNativeToken",
            "outputs": [
                {
                    "internalType": "contract IWrappedNativeToken",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ]
};

;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/cowswap/index.ts
// Source: https://docs.cow.fi/off-chain-services/api



const cowswap_chainToId = {
    ethereum: "https://api.cow.fi/mainnet",
    gnosis: "https://api.cow.fi/xdai"
};
const wrappedTokens = {
    ethereum: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    gnosis: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d"
};
const nativeSwapAddress = {
    ethereum: "0x40A50cf069e992AA4536211B23F286eF88752187",
    gnosis: "0x40A50cf069e992AA4536211B23F286eF88752187"
};
const cowswap_name = "CowSwap";
const cowswap_token = "COW";
const cowswap_referral = true;
function cowswap_approvalAddress() {
    return "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110";
}
const cowswap_nativeToken = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
// https://docs.cow.fi/tutorials/how-to-submit-orders-via-the-api/2.-query-the-fee-endpoint
async function cowswap_getQuote(chain, from, to, amount, extra) {
    const tokenTo = to === external_ethers_.ethers.constants.AddressZero ? cowswap_nativeToken : to;
    const tokenFrom = from === external_ethers_.ethers.constants.AddressZero ? wrappedTokens[chain] : from;
    // amount should include decimals
    const data = await fetch(`${cowswap_chainToId[chain]}/api/v1/quote`, {
        method: "POST",
        body: JSON.stringify({
            sellToken: tokenFrom,
            buyToken: tokenTo,
            receiver: extra.userAddress,
            appData: "0xf249b3db926aa5b5a1b18f3fec86b9cc99b9a8a99ad7e8034242d2838ae97422",
            partiallyFillable: false,
            sellTokenBalance: "erc20",
            buyTokenBalance: "erc20",
            from: extra.userAddress,
            //"priceQuality": "fast",
            signingScheme: "ethsign",
            //"onchainOrder": false,
            kind: "sell",
            sellAmountBeforeFee: amount
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((r)=>r.json());
    return {
        amountReturned: data.quote.buyAmount,
        estimatedGas: 0,
        feeAmount: data.quote.feeAmount,
        validTo: data.quote.validTo,
        rawQuote: data,
        tokenApprovalAddress: "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110",
        logo: "https://assets.coingecko.com/coins/images/24384/small/cow.png?1660960589"
    };
}
async function cowswap_swap({ chain , signer , rawQuote , from , to  }) {
    const fromAddress = await signer.getAddress();
    if (from === external_ethers_.ethers.constants.AddressZero) {
        const nativeSwap = new external_ethers_.ethers.Contract(nativeSwapAddress[chain], ABI.natviveSwap, signer);
        const tx = await nativeSwap.createOrder([
            to,
            fromAddress,
            rawQuote.quote.sellAmount,
            rawQuote.quote.buyAmount,
            rawQuote.quote.appData,
            rawQuote.quote.feeAmount,
            rawQuote.quote.validTo,
            rawQuote.quote.partiallyFillable,
            rawQuote.id
        ], {
            value: Number(rawQuote.quote.sellAmount) + Number(rawQuote.quote.feeAmount)
        });
        return tx;
    } else {
        const order = {
            sellToken: rawQuote.quote.sellToken,
            buyToken: rawQuote.quote.buyToken,
            sellAmount: rawQuote.quote.sellAmount,
            buyAmount: rawQuote.quote.buyAmount,
            validTo: rawQuote.quote.validTo,
            appData: rawQuote.quote.appData,
            receiver: fromAddress,
            feeAmount: rawQuote.quote.feeAmount,
            kind: gp_v2_contracts_.OrderKind.SELL,
            partiallyFillable: rawQuote.quote.partiallyFillable
        };
        const rawSignature = await (0,gp_v2_contracts_.signOrder)((0,gp_v2_contracts_.domain)(1, "0x9008D19f58AAbD9eD0D60971565AA8510560ab41"), order, signer, gp_v2_contracts_.SigningScheme.ETHSIGN);
        const signature = external_ethers_.ethers.utils.joinSignature(rawSignature.data);
        const data = await fetch(`${cowswap_chainToId[chain]}/api/v1/orders`, {
            method: "POST",
            body: JSON.stringify({
                ...rawQuote.quote,
                signature,
                signingScheme: "ethsign"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((r)=>r.json());
        if (data.errorType) throw {
            reason: data.description
        };
        return data;
    }
}
const cowswap_getTxData = ()=>"";

;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/kyberswap.ts

// https://docs.kyberswap.com/Aggregator/aggregator-api#tag/swap/operation/get-route-encode
const kyberswap_chainToId = {
    ethereum: "ethereum",
    bsc: "bsc",
    polygon: "polygon",
    optimism: "optimism",
    arbitrum: "arbitrum",
    avax: "avalanche",
    fantom: "fantom",
    aurora: "aurora",
    bttc: "bttc",
    cronos: "cronos",
    oasis: "oasis",
    velas: "velas"
};
const kyberswap_name = "KyberSwap";
const kyberswap_token = "KNC";
function kyberswap_approvalAddress() {
    return "0x00555513Acf282B42882420E5e5bA87b44D8fA6E";
}
const kyberswap_nativeToken = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
async function kyberswap_getQuote(chain, from, to, amount, extra) {
    const tokenFrom = from === external_ethers_.ethers.constants.AddressZero ? kyberswap_nativeToken : from;
    const tokenTo = to === external_ethers_.ethers.constants.AddressZero ? kyberswap_nativeToken : to;
    const data = await fetch(`https://aggregator-api.kyberswap.com/${kyberswap_chainToId[chain]}/route/encode?tokenIn=${tokenFrom}&tokenOut=${tokenTo}&amountIn=${amount}&to=${extra.userAddress}&saveGas=0&gasInclude=0&slippageTolerance=${+extra.slippage * 100 || 50}&clientData={"source":"DefiLlama"}`, {
        headers: {
            "Accept-Version": "Latest"
        }
    }).then((r)=>r.json());
    return {
        amountReturned: data.outputAmount,
        estimatedGas: data.totalGas,
        tokenApprovalAddress: data.routerAddress,
        rawQuote: data,
        logo: "https://assets.coingecko.com/coins/images/14899/small/RwdVsGcw_400x400.jpg?1618923851"
    };
}
async function kyberswap_swap({ signer , from , rawQuote  }) {
    const fromAddress = await signer.getAddress();
    const transactionOption = {
        from: fromAddress,
        to: rawQuote.routerAddress,
        data: rawQuote.encodedSwapData
    };
    if (from === external_ethers_.ethers.constants.AddressZero) transactionOption.value = rawQuote.inputAmount;
    const tx = await signer.sendTransaction(transactionOption);
    return tx;
}
const kyberswap_getTxData = ({ rawQuote  })=>rawQuote?.encodedSwapData;

;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/openocean.ts

const openocean_chainToId = {
    ethereum: 1,
    bsc: 56,
    polygon: 137,
    optimism: 10,
    arbitrum: 42161,
    gnosis: 100,
    avax: 43114,
    fantom: 250,
    aurora: 1313161554,
    heco: 128,
    harmony: 1666600000,
    boba: 288,
    okexchain: 66,
    cronos: 25,
    moonriver: 1285
};
const openocean_name = "OpenOcean";
const openocean_token = "OOE";
function openocean_approvalAddress() {
    return "0x6352a56caadc4f1e25cd6c75970fa768a3304e64";
}
// https://docs.openocean.finance/dev/openocean-api-3.0/quick-start
// the api from their docs is broken
// eg: https://open-api.openocean.finance/v3/eth/quote?inTokenAddress=0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9&outTokenAddress=0x8888801af4d980682e47f1a9036e589479e835c5&amount=100000000000000000000&gasPrice=400000000
// returns a AAVE->MPH trade that returns 10.3k MPH, when in reality that trade only gets you 3.8k MPH
// Replaced API with the one you get from snooping in their frontend, which works fine
async function openocean_getQuote(chain, from, to, amount, { slippage , userAddress  }) {
    const gasPrice = await fetch(`https://ethapi.openocean.finance/v2/${openocean_chainToId[chain]}/gas-price`).then((r)=>r.json());
    const data = await fetch(`https://ethapi.openocean.finance/v2/${openocean_chainToId[chain]}/swap?inTokenAddress=${from}&outTokenAddress=${to}&amount=${amount}&gasPrice=${gasPrice.fast?.maxPriorityFeePerGas ?? gasPrice.fast}&slippage=${+slippage * 100 || 100}&account=${userAddress || external_ethers_.ethers.constants.AddressZero}`).then((r)=>r.json());
    return {
        amountReturned: data.outAmount,
        estimatedGas: data.estimatedGas,
        tokenApprovalAddress: "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",
        rawQuote: data,
        logo: "https://assets.coingecko.com/coins/images/17014/small/ooe_log.png?1626074195"
    };
}
async function openocean_swap({ signer , rawQuote  }) {
    const tx = await signer.sendTransaction({
        from: rawQuote.from,
        to: rawQuote.to,
        data: rawQuote.data,
        value: rawQuote.value
    });
    return tx;
}
const openocean_getTxData = ({ rawQuote  })=>rawQuote?.data;

// EXTERNAL MODULE: ./src/components/Aggregator/rpcs.ts
var rpcs = __webpack_require__(8673);
;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/yieldyak/abi.ts
const abi_ABI = {
    yieldYakRouter: [
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_adapters",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_trustedTokens",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "_feeClaimer",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_asset",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Recovered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "_newAdapters",
                    "type": "address[]"
                }
            ],
            "name": "UpdatedAdapters",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_oldFeeClaimer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_newFeeClaimer",
                    "type": "address"
                }
            ],
            "name": "UpdatedFeeClaimer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_oldMinFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_newMinFee",
                    "type": "uint256"
                }
            ],
            "name": "UpdatedMinFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "_newTrustedTokens",
                    "type": "address[]"
                }
            ],
            "name": "UpdatedTrustedTokens",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_tokenIn",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_tokenOut",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amountIn",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amountOut",
                    "type": "uint256"
                }
            ],
            "name": "YakSwap",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ADAPTERS",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "AVAX",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "FEE_CLAIMER",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "FEE_DENOMINATOR",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "MIN_FEE",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "NAME",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "TRUSTED_TOKENS",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "WAVAX",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "adaptersCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxSteps",
                    "type": "uint256"
                }
            ],
            "name": "findBestPath",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256[]",
                            "name": "amounts",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "adapters",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "path",
                            "type": "address[]"
                        }
                    ],
                    "internalType": "struct YakRouter.FormattedOffer",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxSteps",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_gasPrice",
                    "type": "uint256"
                }
            ],
            "name": "findBestPathWithGas",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256[]",
                            "name": "amounts",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "adapters",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "path",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "gasEstimate",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct YakRouter.FormattedOfferWithGas",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "_index",
                    "type": "uint8"
                }
            ],
            "name": "queryAdapter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "uint8[]",
                    "name": "_options",
                    "type": "uint8[]"
                }
            ],
            "name": "queryNoSplit",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "adapter",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenIn",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenOut",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOut",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct YakRouter.Query",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tokenOut",
                    "type": "address"
                }
            ],
            "name": "queryNoSplit",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "adapter",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenIn",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenOut",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOut",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct YakRouter.Query",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "recoverAVAX",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenAmount",
                    "type": "uint256"
                }
            ],
            "name": "recoverERC20",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_adapters",
                    "type": "address[]"
                }
            ],
            "name": "setAdapters",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_claimer",
                    "type": "address"
                }
            ],
            "name": "setFeeClaimer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                }
            ],
            "name": "setMinFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_trustedTokens",
                    "type": "address[]"
                }
            ],
            "name": "setTrustedTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amountIn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOut",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address[]",
                            "name": "path",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "adapters",
                            "type": "address[]"
                        }
                    ],
                    "internalType": "struct YakRouter.Trade",
                    "name": "_trade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                }
            ],
            "name": "swapNoSplit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amountIn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOut",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address[]",
                            "name": "path",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "adapters",
                            "type": "address[]"
                        }
                    ],
                    "internalType": "struct YakRouter.Trade",
                    "name": "_trade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                }
            ],
            "name": "swapNoSplitFromAVAX",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amountIn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOut",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address[]",
                            "name": "path",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "adapters",
                            "type": "address[]"
                        }
                    ],
                    "internalType": "struct YakRouter.Trade",
                    "name": "_trade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                }
            ],
            "name": "swapNoSplitToAVAX",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amountIn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOut",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address[]",
                            "name": "path",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "adapters",
                            "type": "address[]"
                        }
                    ],
                    "internalType": "struct YakRouter.Trade",
                    "name": "_trade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "_r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_s",
                    "type": "bytes32"
                }
            ],
            "name": "swapNoSplitToAVAXWithPermit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amountIn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOut",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address[]",
                            "name": "path",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "adapters",
                            "type": "address[]"
                        }
                    ],
                    "internalType": "struct YakRouter.Trade",
                    "name": "_trade",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "_r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_s",
                    "type": "bytes32"
                }
            ],
            "name": "swapNoSplitWithPermit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "trustedTokensCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ]
};

;// CONCATENATED MODULE: ./src/components/Aggregator/adapters/yieldyak/index.ts



// Source https://github.com/yieldyak/yak-aggregator
const yieldyak_chainToId = {
    avax: "0xC4729E56b831d74bBc18797e0e17A295fA77488c"
};
const yieldyak_name = "YieldYak";
const yieldyak_token = "YAK";
function yieldyak_approvalAddress(chain) {
    return yieldyak_chainToId[chain];
}
const yieldyak_nativeToken = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
async function yieldyak_getQuote(chain, from, to, amount, extra) {
    const routerContract = new external_ethers_.ethers.Contract(yieldyak_chainToId[chain], abi_ABI.yieldYakRouter, rpcs/* providers */.a[chain]);
    const tokenFrom = from === external_ethers_.ethers.constants.AddressZero ? yieldyak_nativeToken : from;
    const tokenTo = to === external_ethers_.ethers.constants.AddressZero ? yieldyak_nativeToken : to;
    const gasPrice = extra.gasPriceData.gasPrice.toNumber();
    const data = await routerContract.findBestPathWithGas(amount, tokenFrom, tokenTo, 3, gasPrice);
    return {
        amountReturned: data.amounts[data.amounts.length - 1],
        estimatedGas: data.gasEstimate,
        rawQuote: data,
        tokenApprovalAddress: "0xC4729E56b831d74bBc18797e0e17A295fA77488c",
        logo: "https://assets.coingecko.com/coins/images/17654/small/yieldyak.png?1665824438"
    };
}
async function yieldyak_swap({ chain , signer , rawQuote , from , to  }) {
    const fromAddress = await signer.getAddress();
    const routerContract = new external_ethers_.ethers.Contract(yieldyak_chainToId[chain], abi_ABI.yieldYakRouter, signer);
    const swapFunc = (()=>{
        if (from === external_ethers_.ethers.constants.AddressZero) return routerContract.swapNoSplitFromAVAX;
        if (to === external_ethers_.ethers.constants.AddressZero) return routerContract.swapNoSplitToAVAX;
        return routerContract.swapNoSplit;
    })();
    const tx = await swapFunc([
        rawQuote.amounts[0],
        rawQuote.amounts[rawQuote.amounts.length - 1],
        rawQuote.path,
        rawQuote.adapters
    ], fromAddress, 0, from === external_ethers_.ethers.constants.AddressZero ? {
        value: rawQuote.amounts[0]
    } : {});
    return tx;
}

// EXTERNAL MODULE: ./src/utils/index.tsx
var utils = __webpack_require__(4868);
// EXTERNAL MODULE: ./src/components/WalletProvider/chains.ts
var WalletProvider_chains = __webpack_require__(7257);
;// CONCATENATED MODULE: ./src/components/Aggregator/router.ts



// import * as firebird from './adapters/firebird'


// import * as rango from './adapters/rango';
// import * as unidex from "./adapters/unidex" - disabled, their api is broken
// import * as airswap from './adapters/airswap' cors
// import * as odos from './adapters/odos';




// import * as krystal from './adapters/krystal'
const adapters = [
    _0x_namespaceObject,
    _1inch_namespaceObject,
    cowswap_namespaceObject,
    kyberswap_namespaceObject,
    openocean_namespaceObject,
    yieldyak_namespaceObject
];
const adaptersMap = adapters.reduce((acc, adapter)=>({
        ...acc,
        [adapter.name]: adapter
    }), {});
function getAllChains() {
    const chains = new Set();
    for (const adapter of adapters){
        Object.keys(adapter.chainToId).forEach((chain)=>chains.add(chain));
    }
    const chainsArr = Array.from(chains);
    const chainsOptions = chainsArr.map((c)=>({
            value: c,
            label: constants/* chainNamesReplaced */.XX[c] ?? (0,utils/* capitalizeFirstLetter */.fm)(c),
            chainId: constants/* chainsMap */.zk[c],
            logoURI: WalletProvider_chains/* allChains.find */.k.find(({ id  })=>id === constants/* chainsMap */.zk[c])?.iconUrl
        }));
    return chainsOptions;
}
async function router_swap({ chain , from , to , amount , signer , slippage ="1" , adapter , rawQuote , tokens  }) {
    const aggregator = adaptersMap[adapter];
    try {
        const res = await aggregator.swap({
            chain,
            from,
            to,
            amount,
            signer,
            slippage,
            rawQuote,
            tokens
        });
        return res;
    } catch (e) {
        throw e;
    }
}


/***/ }),

/***/ 8673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ providers)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

function createProvider(name, defaultRpc, chainId) {
    if (process.env.HISTORICAL) {
        if (chainId === 1) {
            console.log("RPC providers set to historical, only the first RPC provider will be used");
        }
        return new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.StaticJsonRpcProvider((process.env[name.toUpperCase() + "_RPC"] ?? defaultRpc)?.split(",")[0], {
            name,
            chainId
        });
    } else {
        return new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.FallbackProvider((process.env[name.toUpperCase() + "_RPC"] ?? defaultRpc).split(",").map((url, i)=>({
                provider: new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.StaticJsonRpcProvider(url, {
                    name,
                    chainId
                }),
                priority: i
            })), 1);
    }
}
const providers = {
    ethereum: createProvider("ethereum", "https://rpc.ankr.com/eth,https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79,https://cloudflare-eth.com/,https://main-light.eth.linkpool.io/,https://api.mycryptoapi.com/eth", 1),
    bsc: createProvider("bsc", "https://bsc-dataseed.binance.org/,https://bsc-dataseed1.defibit.io/,https://bsc-dataseed1.ninicoin.io/,https://bsc-dataseed2.defibit.io/,https://bsc-dataseed2.ninicoin.io/", 56),
    polygon: createProvider("polygon", "https://polygon-rpc.com/,https://rpc-mainnet.maticvigil.com/", 137),
    heco: createProvider("heco", "https://http-mainnet.hecochain.com", 128),
    fantom: createProvider("fantom", "https://rpc.ankr.com/fantom,https://rpc.ftm.tools/,https://rpcapi.fantom.network", 250),
    rsk: createProvider("rsk", "https://public-node.rsk.co", 30),
    tomochain: createProvider("tomochain", "https://rpc.tomochain.com", 88),
    xdai: createProvider("xdai", "https://rpc.ankr.com/gnosis,https://xdai-archive.blockscout.com", 100),
    avax: createProvider("avax", "https://api.avax.network/ext/bc/C/rpc,https://rpc.ankr.com/avalanche", 43114),
    wan: createProvider("wan", "https://gwan-ssl.wandevs.org:56891", 888),
    harmony: createProvider("harmony", "https://harmony-0-rpc.gateway.pokt.network,https://api.harmony.one,https://api.s0.t.hmny.io", 1666600000),
    thundercore: createProvider("thundercore", "https://mainnet-rpc.thundercore.com", 108),
    okexchain: createProvider("okexchain", "https://exchainrpc.okex.org", 66),
    optimism: createProvider("optimism", "https://opt-mainnet.g.alchemy.com/v2/CMDWPZtTF2IsTOH0TE-8WNm8CTjPWz1H", 10),
    arbitrum: createProvider("arbitrum", "https://arb1.arbitrum.io/rpc", 42161),
    kcc: createProvider("kcc", "https://rpc-mainnet.kcc.network", 321),
    celo: createProvider("celo", "https://forno.celo.org", 42220),
    iotex: createProvider("iotex", "https://babel-api.mainnet.iotex.io", 4689),
    moonriver: createProvider("moonriver", "https://rpc.api.moonriver.moonbeam.network/,https://moonriver.api.onfinality.io/public", 1285),
    shiden: createProvider("shiden", "https://evm.shiden.astar.network,https://shiden.api.onfinality.io/public,https://rpc.shiden.astar.network:8545", 336),
    palm: createProvider("palm", "https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b", 11297108109),
    energyweb: createProvider("energyweb", "https://rpc.energyweb.org", 246),
    energi: createProvider("energi", "https://nodeapi.energi.network", 39797),
    songbird: createProvider("songbird", "https://songbird.towolabs.com/rpc", 19),
    hpb: createProvider("hpb", "https://hpbnode.com", 269),
    gochain: createProvider("gochain", "https://rpc.gochain.io", 60),
    ethereumclassic: createProvider("ethereumclassic", "https://www.ethercluster.com/etc,https://blockscout.com/etc/mainnet/api/eth-rpc", 61),
    xdaiarb: createProvider("xdaiarb", "https://arbitrum.xdaichain.com", 200),
    kardia: createProvider("kardia", "https://rpc.kardiachain.io/", 24),
    fuse: createProvider("fuse", "https://rpc.fuse.io", 122),
    smartbch: createProvider("smartbch", "https://smartbch.fountainhead.cash/mainnet", 10000),
    elastos: createProvider("elastos", "https://api.elastos.io/eth,https://api.trinity-tech.cn/eth", 20),
    hoo: createProvider("hoo", "https://http-mainnet.hoosmartchain.com", 70),
    fusion: createProvider("fusion", "https://mainnet.anyswap.exchange,https://mainway.freemoon.xyz/gate", 32659),
    aurora: createProvider("aurora", "https://mainnet.aurora.dev", 1313161554),
    ronin: createProvider("ronin", "https://api.roninchain.com/rpc", 2020),
    boba: createProvider("boba", "https://mainnet.boba.network/", 288),
    cronos: createProvider("cronos", "https://cronosrpc-1.xstaking.sg,https://evm.cronos.org,https://rpc.vvs.finance,https://evm-cronos.crypto.org", 25),
    polis: createProvider("polis", "https://rpc.polis.tech", 333999),
    zyx: createProvider("zyx", "https://rpc-1.zyx.network/,https://rpc-2.zyx.network/,https://rpc-3.zyx.network/,https://rpc-5.zyx.network/", 55),
    telos: createProvider("telos", "https://mainnet.telos.net/evm,https://rpc1.eu.telos.net/evm,https://rpc1.us.telos.net/evm", 40),
    metis: createProvider("metis", "https://andromeda.metis.io/?owner=1088", 1088),
    ubiq: createProvider("ubiq", "https://rpc.octano.dev", 8),
    velas: createProvider("velas", "https://evmexplorer.velas.com/rpc", 106),
    callisto: createProvider("callisto", "https://rpc.callisto.network,https://clo-geth.0xinfra.com/", 820),
    klaytn: createProvider("klaytn", "https://public-node-api.klaytnapi.com/v1/cypress", 8217),
    csc: createProvider("csc", "https://rpc.coinex.net/,https://rpc1.coinex.net/,https://rpc2.coinex.net/,https://rpc3.coinex.net/,https://rpc4.coinex.net/", 52),
    nahmii: createProvider("nahmii", "https://l2.nahmii.io/", 5551),
    liquidchain: createProvider("xlc", "https://rpc.liquidchain.net/,https://rpc.xlcscan.com/", 5050),
    meter: createProvider("meter", "https://rpc.meter.io", 82),
    theta: createProvider("theta", "https://eth-rpc-api.thetatoken.org/rpc", 361),
    oasis: createProvider("oasis", "https://emerald.oasis.dev/", 42262),
    syscoin: createProvider("syscoin", "https://rpc.ankr.com/syscoin,https://rpc.syscoin.org", 57),
    moonbeam: createProvider("moonbeam", "https://rpc.api.moonbeam.network", 1284),
    curio: createProvider("curio", "https://mainnet-api.skalenodes.com/v1/fit-betelgeuse", 836542336838601),
    astar: createProvider("astar", "https://evm.astar.network/,https://rpc.astar.network:8545,https://astar.api.onfinality.io/public", 592)
};


/***/ })

};
;