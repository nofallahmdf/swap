"use strict";
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 7257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ allChains)
/* harmony export */ });
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4868);


const okx = {
    id: 66,
    name: "OKX",
    network: "okx",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("okexchain"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "OKT",
        symbol: "OKT"
    },
    rpcUrls: {
        default: "https://mainnet.boba.network"
    },
    blockExplorers: {
        default: {
            name: "OKLink",
            url: "https://www.oklink.com/en/okc"
        }
    },
    testnet: false
};
const binance = {
    id: 56,
    name: "Binance SmartChain",
    network: "binance",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("binance"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Binance",
        symbol: "BNB"
    },
    rpcUrls: {
        default: "https://rpc.ankr.com/bsc"
    },
    blockExplorers: {
        default: {
            name: "BSCScan",
            url: "https://bscscan.com"
        }
    },
    testnet: false
};
const boba = {
    id: 288,
    name: "Boba",
    network: "boba",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("boba"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Ethereum",
        symbol: "ETH"
    },
    rpcUrls: {
        default: "https://mainnet.boba.network"
    },
    blockExplorers: {
        default: {
            name: "BobaScan",
            url: "https://bobascan.com"
        }
    },
    testnet: false
};
const harmony = {
    id: 1666600000,
    name: "Harmony",
    network: "harmony",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("harmony"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Harmony",
        symbol: "ONE"
    },
    rpcUrls: {
        default: "https://api.s0.t.hmny.io"
    },
    blockExplorers: {
        default: {
            name: "Harmony Explorer",
            url: "https://explorer.harmony.one"
        }
    },
    testnet: false
};
const heco = {
    id: 128,
    name: "Heco",
    network: "heco",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("heco"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Huobi Token",
        symbol: "HT"
    },
    rpcUrls: {
        default: "https://http-mainnet.hecochain.com"
    },
    blockExplorers: {
        default: {
            name: "HecoScan",
            url: "https://www.hecoinfo.com/en-us"
        }
    },
    testnet: false
};
const velas = {
    id: 106,
    name: "Velas",
    network: "velas",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("velas"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Velas",
        symbol: "VLX"
    },
    rpcUrls: {
        default: "https://evmexplorer.velas.com/rpc"
    },
    blockExplorers: {
        default: {
            name: "VelaScan",
            url: "https://velascan.org"
        }
    },
    testnet: false
};
const oasis = {
    id: 42262,
    name: "Oasis",
    network: "oasis",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("oasis"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Oasis",
        symbol: "ROSE"
    },
    rpcUrls: {
        default: "https://emerald.oasis.dev"
    },
    blockExplorers: {
        default: {
            name: "OasisScan",
            url: "https://www.oasisscan.com"
        }
    },
    testnet: false
};
const bttc = {
    id: 199,
    name: "BitTorrent",
    network: "bttc",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("bittorrent"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "BitTorrent",
        symbol: "BTT"
    },
    rpcUrls: {
        default: "https://rpc.bittorrentchain.io"
    },
    blockExplorers: {
        default: {
            name: "BTTScan",
            url: "https://bttcscan.com"
        }
    },
    testnet: false
};
const moonbeam = {
    id: 1284,
    name: "Moonbeam",
    network: "moonbeam",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("moonbeam"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Moonbeam",
        symbol: "GLMR"
    },
    rpcUrls: {
        default: "https://rpc.api.moonbeam.network"
    },
    blockExplorers: {
        default: {
            name: "MoonScan",
            url: "https://moonscan.io"
        }
    },
    testnet: false
};
const fuse = {
    id: 122,
    name: "Fuse",
    network: "fuse",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("fuse"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Fuse",
        symbol: "FUSE"
    },
    rpcUrls: {
        default: "https://rpc.fuse.io"
    },
    blockExplorers: {
        default: {
            name: "Fuse Explorer",
            url: "https://explorer.fuse.io"
        }
    },
    testnet: false
};
const moonriver = {
    id: 1285,
    name: "MoonRiver",
    network: "moonriver",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("moonriver"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Moonriver",
        symbol: "MOVR"
    },
    rpcUrls: {
        default: "https://moonriver.public.blastapi.io"
    },
    blockExplorers: {
        default: {
            name: "MoonScan",
            url: "https://moonriver.moonscan.io"
        }
    },
    testnet: false
};
const dogechain = {
    id: 2000,
    name: "DogeChain",
    network: "doge",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("dogechain"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Doge",
        symbol: "DOGE"
    },
    rpcUrls: {
        default: "https://dogechain.ankr.com"
    },
    blockExplorers: {
        default: {
            name: "DogeChain Explorer",
            url: "https://explorer.dogechain.dog"
        }
    },
    testnet: false
};
const cronos = {
    id: 25,
    name: "Cronos",
    network: "cronos",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("cronos"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Cronos",
        symbol: "CRO"
    },
    rpcUrls: {
        default: "https://evm.cronos.org"
    },
    blockExplorers: {
        default: {
            name: "CronosScan",
            url: "https://cronoscan.com"
        }
    },
    testnet: false
};
const celo = {
    id: 42220,
    name: "Celo",
    network: "celo",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("celo"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Celo",
        symbol: "CELO"
    },
    rpcUrls: {
        default: "https://rpc.ankr.com/celo"
    },
    blockExplorers: {
        default: {
            name: "CeloScan",
            url: "https://celoscan.io"
        }
    },
    testnet: false
};
const aurora = {
    id: 1313161554,
    name: "Aurora",
    network: "aurora",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("aurora"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Ethereum",
        symbol: "ETH"
    },
    rpcUrls: {
        default: "https://mainnet.aurora.dev"
    },
    blockExplorers: {
        default: {
            name: "AuroraScan",
            url: "https://aurorascan.dev"
        }
    },
    testnet: false
};
const avax = {
    id: 43114,
    name: "AVAX",
    network: "avax",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("avalanche"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Avalanche",
        symbol: "AVAX"
    },
    rpcUrls: {
        default: "https://avalanche-evm.publicnode.com"
    },
    blockExplorers: {
        default: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        }
    },
    testnet: false
};
const klaytn = {
    id: 8217,
    name: "Klaytn",
    network: "Klaytn",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("klaytn"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Klaytn",
        symbol: "KLAY"
    },
    rpcUrls: {
        default: "https://cypress.fandom.finance/archive"
    },
    blockExplorers: {
        default: {
            name: "KlaytnScope",
            url: "https://scope.klaytn.com"
        }
    },
    testnet: false
};
const fantom = {
    id: 250,
    name: "Fantom Opera",
    network: "fantom",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("fantom"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Fantom",
        symbol: "FTM"
    },
    rpcUrls: {
        default: "https://rpc.ftm.tools"
    },
    blockExplorers: {
        default: {
            name: "FTMScan",
            url: "https://ftmscan.com"
        }
    },
    testnet: false
};
const gnosis = {
    id: 100,
    name: "Gnosis",
    network: "gnosis",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("gnosis"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "xDai",
        symbol: "xDai"
    },
    rpcUrls: {
        default: "https://rpc.ankr.com/gnosis"
    },
    blockExplorers: {
        default: {
            name: "GnosisScan",
            url: "https://gnosisscan.io"
        }
    },
    testnet: false
};
const polygon = {
    id: 137,
    name: "Polygon",
    network: "polygon",
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("polygon"),
    iconBackground: "#000",
    nativeCurrency: {
        decimals: 18,
        name: "Matic",
        symbol: "MATIC"
    },
    rpcUrls: {
        default: "https://rpc.ankr.com/polygon"
    },
    blockExplorers: {
        default: {
            name: "PolygonScan",
            url: "https://polygonscan.com"
        }
    },
    testnet: false
};
const arbirum = {
    ...wagmi__WEBPACK_IMPORTED_MODULE_0__.chain.arbitrum,
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("arbitrum")
};
const ethereum = {
    ...wagmi__WEBPACK_IMPORTED_MODULE_0__.chain.mainnet,
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("ethereum")
};
const optimism = {
    ...wagmi__WEBPACK_IMPORTED_MODULE_0__.chain.optimism,
    iconUrl: (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__/* .chainIconUrl */ .jG)("optimism")
};
const allChains = [
    polygon,
    binance,
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
    moonriver,
    heco,
    boba,
    okx,
    bttc,
    dogechain,
    optimism,
    arbirum,
    ethereum,
    moonbeam,
    fuse
];


/***/ }),

/***/ 4868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fm": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "jG": () => (/* binding */ chainIconUrl),
/* harmony export */   "l1": () => (/* binding */ getSavedTokens)
/* harmony export */ });
const capitalizeFirstLetter = (word)=>word.charAt(0).toUpperCase() + word.slice(1);
function chainIconUrl(chain) {
    return `/chain-icons/rsz_${chain.toLowerCase()}.jpg`;
}
function getSavedTokens() {
    return JSON.parse(localStorage.getItem("savedTokens") || "{}");
}


/***/ })

};
;