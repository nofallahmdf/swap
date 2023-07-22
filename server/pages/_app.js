"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ WalletWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1176);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const { provider , chains  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([
    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.arbitrum,
    {
        ...wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet,
        rpcUrls: {
            default: "https://rpc.ankr.com/eth"
        }
    },
    {
        ...wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.optimism,
        rpcUrls: {
            default: "https://optimism-mainnet.public.blastapi.io"
        }
    },
    ..._chains__WEBPACK_IMPORTED_MODULE_6__/* .allChains */ .k
], [
    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_4__.jsonRpcProvider)({
        rpc: (chain)=>({
                http: chain.rpcUrls.default
            })
    })
]);
const Provider = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-bb096275-0"
})`
	width: 100%;
	& > div {
		width: 100%;
	}
`;
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({
    appName: "DefiLlama",
    chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({
    autoConnect: true,
    connectors,
    provider
});
const WalletWrapper = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {
        client: wagmiClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Provider, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {
                chains: chains,
                showRecentTransactions: true,
                theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.darkTheme)(),
                children: children
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useAnalytics)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "fathom-client"
const external_fathom_client_namespaceObject = require("fathom-client");
;// CONCATENATED MODULE: ./src/hooks/useAnalytics.tsx



const useAnalytics = ()=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (true) {
            external_fathom_client_namespaceObject.load("ZHMZCAUS", {
                includedDomains: [
                    "swap.defillama.com"
                ],
                url: "/script.js"
            });
        }
        const onRouteChangeComplete = ()=>{
            external_fathom_client_namespaceObject.trackPageview();
        };
        // Record a pageview when route changes
        router.events.on("routeChangeComplete", onRouteChangeComplete);
        // Unassign event listener
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChangeComplete);
        };
    }, [
        router.events
    ]);
};
/* harmony default export */ const hooks_useAnalytics = (useAnalytics);


/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _contexts_LocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8305);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8385);
/* harmony import */ var _components_WalletProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2863);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _components_WalletProvider__WEBPACK_IMPORTED_MODULE_6__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _components_WalletProvider__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const setChakraMode = ()=>{
    localStorage.setItem("chakra-ui-color-mode", "dark");
};
function App({ Component , pageProps  }) {
    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_1__.useState(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient());
    (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [isMounted, setIsMounted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setIsMounted(true);
        setChakraMode();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {
            state: pageProps.dehydratedState,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_contexts_LocalStorage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_LocalStorage__WEBPACK_IMPORTED_MODULE_5__/* .Updater */ .FR, {}),
                        isMounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WalletProvider__WEBPACK_IMPORTED_MODULE_6__/* .WalletWrapper */ .o, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 1176:
/***/ ((module) => {

module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [257,305], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();