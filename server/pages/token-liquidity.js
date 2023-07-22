"use strict";
(() => {
var exports = {};
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 1411:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LiquidityByToken)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9766);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7787);
/* harmony import */ var _queries_useGetTokenLiquidity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3498);
/* harmony import */ var _queries_useGetPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);
/* harmony import */ var _utils_getChartData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4222);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _queries_useGetMCap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_4__, _queries_useGetPrice__WEBPACK_IMPORTED_MODULE_8__, _queries_useGetTokenLiquidity__WEBPACK_IMPORTED_MODULE_9__, _utils_getChartData__WEBPACK_IMPORTED_MODULE_10__, _queries_useGetMCap__WEBPACK_IMPORTED_MODULE_11__]);
([bignumber_js__WEBPACK_IMPORTED_MODULE_4__, _queries_useGetPrice__WEBPACK_IMPORTED_MODULE_8__, _queries_useGetTokenLiquidity__WEBPACK_IMPORTED_MODULE_9__, _utils_getChartData__WEBPACK_IMPORTED_MODULE_10__, _queries_useGetMCap__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const SlippageChart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\LiquidityByToken\\index.tsx -> " + "../SlippageChart"
        ]
    },
    ssr: false
});
function LiquidityByToken({ fromToken , toToken , chain  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { minSlippage , maxSlippage , showTokenMcap  } = router.query;
    const minimumSlippage = typeof minSlippage === "string" && !Number.isNaN(Number(minSlippage)) ? Number(minSlippage) : 0;
    const maximumSlippage = typeof maxSlippage === "string" && !Number.isNaN(Number(maxSlippage)) ? Number(maxSlippage) : 0;
    const fromTokenMCapPercentage = showTokenMcap === "true";
    const { data: tokenAndGasPrices , isLoading: fetchingTokenPrices  } = (0,_queries_useGetPrice__WEBPACK_IMPORTED_MODULE_8__/* .useGetPrice */ .R)({
        chain,
        toToken: toToken?.address,
        fromToken: fromToken?.address,
        skipRefetch: true
    });
    const { data: initialRoutes , isLoading: fetchingInitialTokenLiq  } = (0,_queries_useGetTokenLiquidity__WEBPACK_IMPORTED_MODULE_9__/* .useGetInitialTokenLiquidity */ .W)({
        fromToken,
        toToken,
        chain,
        gasPriceData: tokenAndGasPrices?.gasPriceData,
        gasTokenPrice: tokenAndGasPrices?.gasTokenPrice,
        fromTokenPrice: tokenAndGasPrices?.fromTokenPrice ?? 0,
        toTokenPrice: tokenAndGasPrices?.toTokenPrice
    });
    const isLoading = fetchingTokenPrices || fetchingInitialTokenLiq;
    const [liquidity, setLiquidity] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const { data: addlLiqRoutes  } = (0,_queries_useGetTokenLiquidity__WEBPACK_IMPORTED_MODULE_9__/* .useGetTokensLiquidity */ .a)({
        fromToken,
        toToken,
        chain,
        gasPriceData: tokenAndGasPrices?.gasPriceData,
        gasTokenPrice: tokenAndGasPrices?.gasTokenPrice,
        fromTokenPrice: tokenAndGasPrices?.fromTokenPrice,
        toTokenPrice: tokenAndGasPrices?.toTokenPrice,
        liquidity
    });
    const { chartData , newLiquidityValues  } = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>(0,_utils_getChartData__WEBPACK_IMPORTED_MODULE_10__/* .getChartData */ .W)({
            routes: [
                ...initialRoutes || [],
                ...addlLiqRoutes || []
            ]?.sort((a, b)=>a[0] - b[0]),
            toTokenDecimals: toToken.decimals,
            fromTokenDecimals: fromToken.decimals,
            price: fromToken.symbol === "WBTC" ? 10000 : 500,
            minimumSlippage,
            maximumSlippage
        }), [
        initialRoutes,
        toToken.decimals,
        fromToken.decimals,
        fromToken.symbol,
        addlLiqRoutes,
        minimumSlippage,
        maximumSlippage
    ]);
    const filteredNewliqValues = newLiquidityValues.filter((newliq)=>!liquidity.includes(newliq));
    if (filteredNewliqValues.length) {
        setLiquidity((prevLiq)=>[
                ...prevLiq,
                ...filteredNewliqValues
            ].sort((a, b)=>a - b));
    }
    const [sliderValue, setSliderValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState([
        0,
        100
    ]);
    const { data: fromTokenMcap  } = (0,_queries_useGetMCap__WEBPACK_IMPORTED_MODULE_11__/* .useGetMcap */ .O)({
        id: fromToken.geckoId
    });
    const mcap = fromTokenMcap && fromTokenMCapPercentage ? Math.round(fromTokenMcap) : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
        flexDir: "column",
        gap: "24px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Table, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("caption", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                            alignItems: "center",
                            flexWrap: "nowrap",
                            justifyContent: "center",
                            gap: 1,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                                    as: "span",
                                    alignItems: "center",
                                    gap: "2px",
                                    flexWrap: "nowrap",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: fromToken.logoURI,
                                            alt: "",
                                            style: {
                                                width: "20px",
                                                height: "20px",
                                                objectFit: "cover",
                                                display: " flex",
                                                borderRadius: "100%"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                            as: "span",
                                            fontWeight: 500,
                                            fontSize: 16,
                                            children: fromToken.symbol
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__.ArrowRight, {
                                    width: 16,
                                    height: 16,
                                    display: "block"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                                    as: "span",
                                    alignItems: "center",
                                    gap: "2px",
                                    flexWrap: "nowrap",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: toToken.logoURI,
                                            alt: "",
                                            style: {
                                                width: "20px",
                                                height: "20px",
                                                objectFit: "cover",
                                                display: " flex"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                            as: "span",
                                            fontWeight: 500,
                                            fontSize: 16,
                                            children: toToken.symbol
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Trade"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Receive"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: _components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_12__/* .initialLiquidity.map */ .pi.map((liqAmount)=>{
                            const topRoute = initialRoutes?.find((t)=>t[0] === liqAmount)?.[1] ?? null;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: `$${liqAmount.toLocaleString()} of ${fromToken.symbol}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                            height: "16px",
                                            width: "100%",
                                            maxWidth: "24ch",
                                            margin: "auto"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: topRoute?.price?.amountReturned ? `${Number((0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(topRoute?.price?.amountReturned ?? 0).div(10 ** Number(toToken.decimals || 18)).toFixed(3)).toLocaleString()} ${toToken.symbol} via ${topRoute?.name}` : ""
                                        })
                                    })
                                ]
                            }, toToken.address + liqAmount);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                minH: "745px",
                children: chartData.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "16px",
                            flexWrap: "wrap",
                            margin: "24px 32px 24px auto",
                            w: "full",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    w: "fit-content",
                                    children: [
                                        fromToken.geckoId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Switch, {
                                            id: "coinMcap",
                                            checked: fromTokenMCapPercentage,
                                            onChange: ()=>{
                                                router.push({
                                                    pathname: router.pathname,
                                                    query: {
                                                        ...router.query,
                                                        showTokenMcap: !fromTokenMCapPercentage
                                                    }
                                                }, undefined, {
                                                    shallow: true
                                                });
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
                                            htmlFor: "coinMcap",
                                            mb: "0",
                                            children: `Show % of ${fromToken.symbol} Mcap`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                                    as: "form",
                                    alignItems: "center",
                                    flexDir: "row",
                                    gap: "20px",
                                    width: "100%",
                                    maxW: "360px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                            as: "label",
                                            whiteSpace: "nowrap",
                                            children: "Slippage Range"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.RangeSlider, {
                                            "aria-label": [
                                                "min slippage",
                                                "max slippage"
                                            ],
                                            min: 0,
                                            max: 100,
                                            defaultValue: [
                                                0,
                                                100
                                            ],
                                            step: 1,
                                            onChange: (val)=>setSliderValue(val),
                                            onChangeEnd: (val)=>{
                                                router.push({
                                                    pathname: router.pathname,
                                                    query: {
                                                        ...router.query,
                                                        minSlippage: val[0],
                                                        maxSlippage: val[1]
                                                    }
                                                }, undefined, {
                                                    shallow: true
                                                });
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.RangeSliderMark, {
                                                    value: sliderValue[0],
                                                    textAlign: "center",
                                                    color: "white",
                                                    mt: "-8",
                                                    ml: "-5",
                                                    w: "12",
                                                    children: [
                                                        sliderValue[0],
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.RangeSliderMark, {
                                                    value: sliderValue[1],
                                                    textAlign: "center",
                                                    color: "white",
                                                    mt: "-8",
                                                    ml: "-5",
                                                    w: "12",
                                                    children: [
                                                        sliderValue[1],
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.RangeSliderTrack, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.RangeSliderFilledTrack, {
                                                        bg: "#2563eb"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.RangeSliderThumb, {
                                                    index: 0
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.RangeSliderThumb, {
                                                    index: 1
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                            height: "400px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SlippageChart, {
                                chartData: chartData,
                                fromTokenSymbol: fromToken.symbol,
                                toTokenSymbol: toToken.symbol,
                                mcap: mcap
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                            flexDir: "column",
                            gap: "20px",
                            marginY: "36px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                    as: "p",
                                    fontSize: "1rem",
                                    children: "This tool gets price quotes on 10 different dex aggregators at different levels and displays the results over a chart, so the resulting data aggregates all liquidity across the hundreds of dexs that all those aggregators have integrated, including stuff like limit orders, thus we are quite confident that this will accurately report all on-chain liquidity."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                    as: "p",
                                    fontSize: "1rem",
                                    children: "You can use this tool to find out how much needs to be sold to cause a price drop of 10%, 20%... or just to see how deep the liquidity is for a given token. It'll be especially useful for defi risk teams."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                    as: "p",
                                    fontSize: "1rem",
                                    children: "The chart will keep updating with more data as long as this window is open, so if you want your chart to be more granular just wait for a bit, you'll notice how the chart adjust in real time."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
                                    as: "p",
                                    fontSize: "1rem",
                                    children: "There's currently a bug that causes spikes to be formed if you switch to a different tab while the chart is being created, so please avoid doing that."
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
const Table = styled_components__WEBPACK_IMPORTED_MODULE_3___default().table.withConfig({
    componentId: "sc-e0199e8e-0"
})`
	table-layout: fixed;
	width: 100%;

	th,
	td,
	caption {
		padding: 4px;
		font-size: 1rem;
		font-weight: 400;
		text-align: center;
		border: 1px solid ${({ theme  })=>theme.bg3};
	}

	caption {
		border-bottom: none;
	}
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenLiquidity),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1072);
/* harmony import */ var _components_Aggregator_getTokenList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3465);
/* harmony import */ var _components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7787);
/* harmony import */ var _components_MultiSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3545);
/* harmony import */ var _components_Aggregator_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6911);
/* harmony import */ var _components_LiquidityByToken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1411);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LiquidityByToken__WEBPACK_IMPORTED_MODULE_10__]);
_components_LiquidityByToken__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











async function getStaticProps() {
    return (0,_components_Aggregator_getTokenList__WEBPACK_IMPORTED_MODULE_5__/* .getTokenList */ .H)();
}
const chains = (0,_components_Aggregator_router__WEBPACK_IMPORTED_MODULE_6__/* .getAllChains */ .Mk)();
function TokenLiquidity({ tokenlist  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { chain , from: fromToken , to: toToken  } = router.query;
    const chainName = typeof chain === "string" ? chain.toLowerCase() : "ethereum";
    const fromTokenSymbol = typeof fromToken === "string" ? fromToken.toLowerCase() : null;
    const toTokenSymbol = typeof toToken === "string" ? toToken.toLowerCase() : null;
    const { selectedChain , selectedFromToken , selectedToToken , chainTokenList  } = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        const tokenList = tokenlist && chainName ? tokenlist[_components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_7__/* .chainsMap */ .zk[chainName]] || [] : null;
        const selectedChain = chains.find((c)=>c.value === chainName);
        const selectedFromToken = tokenList?.find((t)=>t.symbol.toLowerCase() === fromTokenSymbol || t.address.toLowerCase() === fromTokenSymbol);
        const selectedToToken = tokenList?.find((t)=>t.symbol.toLowerCase() === toTokenSymbol || t.address.toLowerCase() === toTokenSymbol);
        return {
            selectedChain,
            selectedFromToken: selectedFromToken ? {
                ...selectedFromToken,
                label: selectedFromToken.symbol,
                value: selectedFromToken.address
            } : null,
            selectedToToken: selectedToToken ? {
                ...selectedToToken,
                label: selectedToToken.symbol,
                value: selectedToToken.address
            } : null,
            chainTokenList: tokenList
        };
    }, [
        chainName,
        fromTokenSymbol,
        toTokenSymbol,
        tokenlist
    ]);
    const onChainChange = (chain)=>{
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                chain: chain.value
            }
        }, undefined, {
            shallow: true
        });
    };
    const onFromTokenChange = (token)=>{
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                from: token.symbol
            }
        }, undefined, {
            shallow: true
        });
    };
    const onToTokenChange = (token)=>{
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                to: token.symbol
            }
        }, undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        title: `Token Liquidity - LlamaSwap`,
        defaultSEO: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                alignSelf: "center",
                children: "Token Liquidity"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                flexDir: "column",
                gap: "20px",
                marginTop: "40px",
                maxW: "48rem",
                w: "100%",
                marginX: "auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                htmlFor: "privacy-switch",
                                pb: "0",
                                lineHeight: 1,
                                children: "Chain"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MultiSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                options: chains,
                                value: selectedChain,
                                onChange: onChainChange,
                                style: {
                                    flex: 1
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                        gap: "16px",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                        htmlFor: "privacy-switch",
                                        pb: "0",
                                        lineHeight: 1,
                                        children: "From"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MultiSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        options: chainTokenList,
                                        value: selectedFromToken,
                                        onChange: onFromTokenChange,
                                        style: {
                                            flex: 1
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                onClick: ()=>router.push({
                                        pathname: router.pathname,
                                        query: {
                                            ...router.query,
                                            to: fromToken,
                                            from: toToken
                                        }
                                    }, undefined, {
                                        shallow: true
                                    }),
                                bg: "none",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, {}),
                                "aria-label": "Switch Tokens",
                                marginTop: "auto"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                        htmlFor: "privacy-switch",
                                        pb: "0",
                                        lineHeight: 1,
                                        children: "To"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MultiSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        options: chainTokenList,
                                        value: selectedToToken,
                                        onChange: onToTokenChange,
                                        style: {
                                            flex: 1
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            selectedChain && selectedFromToken && selectedToToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LiquidityByToken__WEBPACK_IMPORTED_MODULE_10__/* .LiquidityByToken */ .Z, {
                fromToken: selectedFromToken,
                toToken: selectedToToken,
                chain: chainName
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useGetMcap)
/* harmony export */ });
/* unused harmony export getMcap */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getMcap({ id  }) {
    if (!id) {
        return null;
    }
    const data = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true
    `).then((res)=>res.json());
    return data ? Object.values(data)?.[0]["usd_market_cap"] ?? null : null;
}
function useGetMcap({ id  }) {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "mcap",
        id
    ], ()=>getMcap({
            id
        }), {
        refetchOnMount: false,
        refetchInterval: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchIntervalInBackground: false
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ useGetInitialTokenLiquidity),
/* harmony export */   "a": () => (/* binding */ useGetTokensLiquidity)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9766);
/* harmony import */ var _components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7787);
/* harmony import */ var _components_Aggregator_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6911);
/* harmony import */ var _useGetRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4939);
/* harmony import */ var _utils_getTopRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1746);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _useGetRoutes__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, bignumber_js__WEBPACK_IMPORTED_MODULE_1__, _useGetRoutes__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getInitialLiquidityRoutes({ chain , fromToken , toToken , gasPriceData , fromTokenPrice , toTokenPrice , gasTokenPrice  }) {
    if (!fromToken || !chain || !toToken || !gasPriceData || !fromTokenPrice || !toTokenPrice || !gasTokenPrice) {
        return [];
    }
    try {
        const res = await Promise.allSettled(_components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_4__/* .initialLiquidity.map */ .pi.map((amount)=>getAdapterRoutesByAmount({
                chain,
                fromToken: {
                    ...fromToken,
                    value: fromToken.address,
                    label: fromToken.symbol
                },
                toToken,
                amount,
                fromTokenPrice,
                gasPriceData
            })));
        const topRoutes = [];
        res.forEach((item)=>{
            if (item.status === "fulfilled") {
                const [liquidity, routes] = item.value;
                const topRoute = (0,_utils_getTopRoute__WEBPACK_IMPORTED_MODULE_5__/* .getTopRoute */ .M)({
                    routes,
                    gasPriceData,
                    gasTokenPrice,
                    fromToken,
                    toToken,
                    toTokenPrice
                });
                topRoutes.push([
                    Number(liquidity),
                    topRoute
                ]);
            }
        });
        return topRoutes;
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function getLiquidityRoutes({ chain , fromToken , toToken , gasPriceData , fromTokenPrice , toTokenPrice , gasTokenPrice , amount  }) {
    try {
        if (!fromToken || !chain || !toToken || !gasPriceData || !fromTokenPrice || !toTokenPrice || !gasTokenPrice || !amount) {
            return [
                amount,
                null
            ];
        }
        const [, routes] = await getAdapterRoutesByAmount({
            chain,
            fromToken: {
                ...fromToken,
                value: fromToken.address,
                label: fromToken.symbol
            },
            toToken,
            amount,
            fromTokenPrice,
            gasPriceData
        });
        const topRoute = (0,_utils_getTopRoute__WEBPACK_IMPORTED_MODULE_5__/* .getTopRoute */ .M)({
            routes,
            gasPriceData,
            gasTokenPrice,
            fromToken,
            toToken,
            toTokenPrice
        });
        return [
            amount,
            topRoute
        ];
    } catch (error) {
        console.log(error);
        return [
            amount,
            null
        ];
    }
}
async function getAdapterRoutesByAmount({ chain , fromToken , toToken , amount , fromTokenPrice , gasPriceData  }) {
    try {
        const amountWithDecimals = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(amount).times((0,bignumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1).div(fromTokenPrice))).times(10 ** (fromToken?.decimals || 18)).toFixed(0);
        const res = await Promise.allSettled(_components_Aggregator_router__WEBPACK_IMPORTED_MODULE_6__/* .adapters.filter */ .j$.filter((adap)=>adap.chainToId[chain]).map((adapter)=>(0,_useGetRoutes__WEBPACK_IMPORTED_MODULE_7__/* .getAdapterRoutes */ .Y)({
                adapter,
                chain,
                from: fromToken?.value,
                to: toToken?.value,
                amount: amountWithDecimals,
                extra: {
                    gasPriceData,
                    amount: amount.toString(),
                    fromToken,
                    toToken,
                    userAddress: ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.constants.AddressZero
                }
            })));
        const data = res.map((route)=>route.status === "fulfilled" ? route.value : null).filter((route)=>!!route);
        return [
            `${amount.toString()}`,
            data
        ];
    } catch (error) {
        console.log(error);
        return [
            `${amount.toString()}`,
            []
        ];
    }
}
const useGetInitialTokenLiquidity = ({ chain , fromToken , toToken , gasTokenPrice , fromTokenPrice , toTokenPrice , gasPriceData  })=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "initialLiquidity",
        chain,
        fromToken?.address,
        toToken?.address,
        gasTokenPrice,
        fromTokenPrice,
        toTokenPrice
    ], ()=>getInitialLiquidityRoutes({
            chain: chain,
            fromToken,
            toToken,
            gasTokenPrice,
            fromTokenPrice,
            toTokenPrice,
            gasPriceData
        }), {
        refetchOnMount: false,
        refetchInterval: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchIntervalInBackground: false
    });
};
const useGetTokensLiquidity = ({ chain , fromToken , toToken , gasTokenPrice , fromTokenPrice , toTokenPrice , gasPriceData , liquidity  })=>{
    const res = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueries)({
        queries: liquidity.map((liquidityAmount)=>{
            return {
                queryKey: [
                    "liquidity",
                    liquidityAmount,
                    chain,
                    fromToken?.address,
                    toToken?.address,
                    gasTokenPrice,
                    fromTokenPrice,
                    toTokenPrice
                ],
                queryFn: ()=>getLiquidityRoutes({
                        chain: chain,
                        fromToken,
                        toToken,
                        gasTokenPrice,
                        fromTokenPrice,
                        toTokenPrice,
                        gasPriceData,
                        amount: liquidityAmount
                    }),
                refetchOnMount: false,
                refetchInterval: 5 * 60 * 1000,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
                refetchIntervalInBackground: false,
                retry: 0,
                retryOnMount: false
            };
        })
    });
    return {
        isLoading: res.filter((r)=>r.status === "success").length >= 1 ? false : true,
        data: (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>res?.filter((r)=>r.status === "success").map((r)=>r.data) ?? [], [
            res
        ])
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getChartData)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9766);
/* harmony import */ var _components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7787);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bignumber_js__WEBPACK_IMPORTED_MODULE_0__]);
bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getChartData({ routes , price , fromTokenDecimals , toTokenDecimals , minimumSlippage , maximumSlippage  }) {
    const liquidityAt = price || 500;
    // price at $500 liquidity
    const currentPrice = routes?.find((route)=>route[0] === liquidityAt)?.[1]?.price?.amountReturned ?? null;
    const chartData = [];
    const newLiquidityValues = [];
    if (currentPrice) {
        routes?.forEach(([netOutUSD, { name , price , fromAmount  }], index)=>{
            const amountReturned = price?.amountReturned ?? null;
            if (amountReturned) {
                const expectedPrice = Number(currentPrice) * (Number(netOutUSD) / liquidityAt);
                const slippage = netOutUSD < liquidityAt ? 0 : Number(Math.abs((Number(amountReturned) - expectedPrice) / expectedPrice * 100).toFixed(2));
                const prevValue = chartData[index - 1];
                if (chartData.length && prevValue && slippage - prevValue[1] > 1) {
                    const newLiq = Math.floor((Number(prevValue[0]) + Number(netOutUSD)) / 2);
                    if (!newLiquidityValues.includes(newLiq) && !_components_Aggregator_constants__WEBPACK_IMPORTED_MODULE_1__/* .initialLiquidity.includes */ .pi.includes(newLiq) && newLiq > 500 && newLiq < 500000000 && routes.length <= 100) {
                        newLiquidityValues.push(newLiq);
                    }
                }
                chartData.push([
                    Number(netOutUSD),
                    slippage,
                    Number((0,bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(amountReturned).div(10 ** Number(toTokenDecimals || 18)).toFixed(3)),
                    name,
                    Number((0,bignumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fromAmount).div(10 ** Number(fromTokenDecimals || 18)).toFixed(3))
                ]);
            }
        });
    }
    const minIndex = getMinIndexRoute(chartData, minimumSlippage || 0);
    const maxIndex = getMaxIndexRoute(chartData, maximumSlippage || 100);
    const dataInRange = chartData.slice(minIndex, maxIndex + 1);
    return {
        chartData: dataInRange.filter((values, index)=>dataInRange[index + 1] ? values[1] < dataInRange[index + 1][1] : true),
        newLiquidityValues: newLiquidityValues.sort((a, b)=>a - b)
    };
}
function getMinIndexRoute(arr, minSlippage) {
    let left = 0, right = arr.length - 1;
    while(left <= right){
        // Process until it is last element
        let mid = Math.floor((left + (right + 1)) / 2); // using floor as we may get floating numbers
        if (arr[mid][1] >= minSlippage && (mid > 0 ? arr[mid - 1][1] < minSlippage : true)) {
            // element found at mid
            return mid; // no need to process further
        }
        if (minSlippage < arr[mid][1]) {
            // element might be in first half
            right = mid - 1; // right is mid - 1 because we know that mid is not correct element
        } else {
            // element might be in second half
            left = mid + 1; // left is mid + 1 because we know that mid is not correct element
        }
    }
    return 0; // if not found, return 0 index
}
function getMaxIndexRoute(arr, maxSlippage) {
    let left = 0, right = arr.length - 1;
    while(left <= right){
        // Process until it is last element
        let mid = Math.floor((left + (right + 1)) / 2); // using floor as we may get floating numbers
        if (arr[mid][1] <= maxSlippage && (mid < arr.length - 1 ? arr[mid + 1][1] > maxSlippage : true)) {
            // element found at mid
            return mid; // no need to process further
        }
        if (maxSlippage < arr[mid][1]) {
            // element might be in first half
            right = mid - 1; // right is mid - 1 because we know that mid is not correct element
        } else {
            // element might be in second half
            left = mid + 1; // left is mid + 1 because we know that mid is not correct element
        }
    }
    return arr.length; // if not found, return array length
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ getTopRoute)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

function getTopRoute({ routes , gasPriceData , gasTokenPrice , fromToken , toToken , toTokenPrice  }) {
    const sortedRoutes = routes.map((route)=>{
        if (route.price) {
            let gasUsd = route.price.estimatedGas && gasPriceData?.formatted?.gasPrice && gasTokenPrice ? gasTokenPrice * +route.price.estimatedGas * +gasPriceData?.formatted?.gasPrice / 1e18 : 0;
            // CowSwap native token swap
            gasUsd = route.price.feeAmount && fromToken.address === ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero ? Number(route.price.feeAmount) / 1e18 * gasTokenPrice : gasUsd;
            const amount = +route.price.amountReturned / 10 ** +toToken?.decimals;
            const amountUsd = (amount * toTokenPrice).toFixed(2);
            const netOut = +amountUsd - gasUsd;
            return {
                ...route,
                netOut
            };
        }
        return {
            ...route,
            netOut: 0
        };
    }).sort((a, b)=>Number(b.netOut ?? 0) - Number(a.netOut ?? 0));
    const topRoute = sortedRoutes.length > 0 ? sortedRoutes[0] : null;
    return topRoute;
}


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 902:
/***/ ((module) => {

module.exports = require("@gnosis.pm/gp-v2-contracts");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 551:
/***/ ((module) => {

module.exports = require("react-window");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5799:
/***/ ((module) => {

module.exports = require("rebass");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9766:
/***/ ((module) => {

module.exports = import("bignumber.js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,257,568,305,846], () => (__webpack_exec__(22)));
module.exports = __webpack_exports__;

})();