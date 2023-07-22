"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 3694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZL": () => (/* binding */ GlobalStyle),
  "wD": () => (/* binding */ TYPE),
  "ZP": () => (/* binding */ ThemeProvider)
});

// UNUSED EXPORTS: Header

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__(5799);
// EXTERNAL MODULE: ./src/contexts/LocalStorage.tsx + 1 modules
var LocalStorage = __webpack_require__(8305);
;// CONCATENATED MODULE: ./src/constants/breakpoints.ts
const sm = 480 / 16;
const med = 812 / 16;
const lg = 1024 / 16;
const xl = 1400 / 16;
const twoXl = 1536 / 16;

;// CONCATENATED MODULE: ./src/Theme/index.js






function ThemeProvider({ children  }) {
    const [darkMode] = (0,LocalStorage/* useDarkModeManager */.m$)();
    return /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
        theme: theme(darkMode),
        children: children
    });
}
const theme = (darkMode)=>({
        mode: darkMode ? "dark" : "light",
        text1: darkMode ? "#FAFAFA" : "#1F1F1F",
        text2: darkMode ? "#C3C5CB" : "#565A69",
        text3: darkMode ? "#6C7284" : "#888D9B",
        text4: darkMode ? "#565A69" : "#C3C5CB",
        text5: darkMode ? "#2C2F36" : "#EDEEF2",
        // special case text types
        white: "#FFFFFF",
        // backgrounds / greys
        bg1: darkMode ? "#212429" : "#FAFAFA",
        bg2: darkMode ? "#2C2F36" : "#F7F8FA",
        bg3: darkMode ? "#40444F" : "#EDEEF2",
        bg4: darkMode ? "#565A69" : "#CED0D9",
        bg5: darkMode ? "#565A69" : "#888D9B",
        bg6: darkMode ? "#000" : "#FFFFFF",
        bg7: darkMode ? "rgba(7,14,15,0.7)" : "rgba(252,252,251,1)",
        //specialty colors
        background: darkMode ? "#22242A" : "#ffffff",
        advancedBG: darkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.4)",
        divider: darkMode ? "rgba(43, 43, 43, 0.435)" : "rgba(43, 43, 43, 0.035)",
        //primary colors
        primary1: darkMode ? "#2172E5" : "#445ed0",
        // other
        red1: "#FF6871",
        green1: "#27AE60",
        link: "#2172E5",
        blue: "#2f80ed",
        //shadow
        shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        // breakpoints
        bpSm: `${sm}rem`,
        bpMed: `${med}rem`,
        bpLg: `${lg}rem`,
        bpXl: `${xl}rem`,
        bp2Xl: `${twoXl}rem`,
        maxSm: `@media screen and (max-width: ${sm}rem)`,
        maxMed: `@media screen and (max-width: ${med}rem)`,
        maxLg: `@media screen and (max-width: ${lg}rem)`,
        maxXl: `@media screen and (max-width: ${xl}rem)`,
        minSm: `@media screen and (min-width: ${sm}rem)`,
        minMed: `@media screen and (min-width: ${med}rem)`,
        minLg: `@media screen and (min-width: ${lg}rem)`,
        minXl: `@media screen and (min-width: ${xl}rem)`,
        min2Xl: `@media screen and (min-width: ${twoXl}rem)`,
        breakpoints: [
            `${sm}rem`,
            `${med}rem`,
            `${lg}rem`,
            `${xl}rem`
        ]
    });
const TextWrapper = external_styled_components_default()(external_rebass_.Text).withConfig({
    componentId: "sc-1c6032a5-0"
})`
	color: ${({ color , theme  })=>theme[color]};
`;
const TYPE = {
    heading (props) {
        return /*#__PURE__*/ jsx_runtime_.jsx(TextWrapper, {
            fontWeight: 500,
            fontSize: 16,
            color: "text1",
            ...props
        });
    },
    main (props) {
        return /*#__PURE__*/ jsx_runtime_.jsx(TextWrapper, {
            fontWeight: 500,
            fontSize: 14,
            color: "text1",
            ...props
        });
    },
    body (props) {
        return /*#__PURE__*/ jsx_runtime_.jsx(TextWrapper, {
            fontWeight: 400,
            fontSize: 14,
            color: "text1",
            ...props
        });
    },
    largeHeader (props) {
        return /*#__PURE__*/ jsx_runtime_.jsx(TextWrapper, {
            fontWeight: 500,
            color: "text1",
            fontSize: 24,
            ...props
        });
    }
};
const Header = external_styled_components_default().h1.withConfig({
    componentId: "sc-1c6032a5-1"
})`
	color: ${({ theme  })=>theme["text1"]};
	font-size: 24px;
	font-weight: 500;
	margin: 0 0 -20px;
`;
const GlobalStyle = external_styled_components_.createGlobalStyle`
	body, #__next {
		background-color: ${({ theme  })=>theme.background};
	}

  #__next {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    position: relative;
    color: ${({ theme  })=>theme.text1};
    isolation: isolate;

    ${({ theme: { minLg  }  })=>minLg} {
      flex-direction: row;
    }
  }

  a, input, button, textarea, select {
    &:focus-visible {
      outline: 1px solid ${({ theme  })=>theme.text1};
    }
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

	.tooltip-trigger {
		color: ${({ theme  })=>theme.text1};
		display: flex;
		align-items: center;
		padding: 0;

		:focus-visible {
			outline-offset: 2px;
		}
	}

	.tooltip-trigger a {
		display: flex;
	}
`;


/***/ }),

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ getOptimismFee)
});

// UNUSED EXPORTS: useOptimismFees

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
// EXTERNAL MODULE: ./src/components/Aggregator/rpcs.ts
var rpcs = __webpack_require__(8673);
;// CONCATENATED MODULE: ./src/components/Aggregator/hooks/useOptimismFees/abi.ts
const abi_FEE_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_owner",
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
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "DecimalsUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "GasPriceUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "L1BaseFeeUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "OverheadUpdated",
        "type": "event"
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
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ScalarUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "decimals",
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
        "name": "gasPrice",
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
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "getL1Fee",
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
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "getL1GasUsed",
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
        "name": "l1BaseFee",
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
        "name": "overhead",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "scalar",
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
                "name": "_decimals",
                "type": "uint256"
            }
        ],
        "name": "setDecimals",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_gasPrice",
                "type": "uint256"
            }
        ],
        "name": "setGasPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_baseFee",
                "type": "uint256"
            }
        ],
        "name": "setL1BaseFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_overhead",
                "type": "uint256"
            }
        ],
        "name": "setOverhead",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_scalar",
                "type": "uint256"
            }
        ],
        "name": "setScalar",
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
    }
];

;// CONCATENATED MODULE: ./src/components/Aggregator/hooks/useOptimismFees/index.ts




const FEE_ADDRESS = "0x420000000000000000000000000000000000000F";
const useOptimismFees = (txData, gasTokenPrice)=>{
    const { chain  } = useNetwork();
    const { data: l1Fee  } = useContractRead({
        address: FEE_ADDRESS,
        abi: FEE_ABI,
        functionName: "getL1Fee",
        args: [
            txData
        ],
        enabled: chain?.id === 10,
        cacheTime: 10000
    });
    return +l1Fee?.toString() * gasTokenPrice / 1e18;
};
const getOptimismFee = async (txData)=>{
    const provider = rpcs/* providers.optimism */.a.optimism;
    const gasContract = new external_ethers_.ethers.Contract(FEE_ADDRESS, abi_FEE_ABI, provider);
    try {
        const gas = await gasContract.getL1Fee(txData);
        return gas / 1e18;
    } catch (e) {
        console.log(e);
        return "Unknown";
    }
};


/***/ }),

/***/ 3545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__);





const formatOptionLabel = ({ label , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginLeft: "10px",
                    color: "#ccc"
                },
                children: rest.logoURI ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: rest.logoURI,
                    style: {
                        width: 20,
                        height: 20,
                        marginRight: 8,
                        borderRadius: "50%",
                        aspectRatio: 1
                    },
                    alt: ""
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.QuestionIcon, {
                    height: "20px",
                    width: "20px",
                    marginRight: "8px"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: label
            })
        ]
    });
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-32b37d3-0"
})`
	--background: ${({ theme  })=>theme.bg6};
	--menu-background: ${({ theme  })=>theme.bg6};
	--color: ${({ theme  })=>theme.text1};
	--placeholder: ${({ theme  })=>theme.text3};
	--bg-hover: ${({ theme  })=>theme.bg2};
	--option-bg: ${({ theme  })=>theme.bg2};

	& > * > * {
		box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
			0px 0px 1px rgba(0, 0, 0, 0.04);
		border-radius: 12px;
	}
`;
const customStyles = {
    control: (provided)=>({
            ...provided,
            background: "var(--background)",
            padding: "4px 2px",
            borderRadius: "12px",
            border: "none",
            color: "var(--color)",
            boxShadow: "0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            margin: 0,
            zIndex: 0
        }),
    input: (provided)=>({
            ...provided,
            color: "var(--color)"
        }),
    menu: (provided)=>({
            ...provided,
            background: "var(--menu-background)",
            zIndex: 10
        }),
    option: (provided, state)=>({
            ...provided,
            color: state.isActive ? "black" : "var(--color)"
        }),
    multiValue: (provided)=>({
            ...provided,
            fontFamily: "inherit",
            background: "var(--option-bg)",
            padding: "2px"
        }),
    multiValueLabel: (styles)=>({
            ...styles,
            color: "var(--color)"
        }),
    placeholder: (provided)=>({
            ...provided,
            color: "var(--placeholder)"
        }),
    singleValue: (provided, state)=>({
            ...provided,
            color: "var(--color)"
        })
};
const height = 35;
const MenuList = (props)=>{
    const { options , children , maxHeight , getValue  } = props;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;
    if (!children.length) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_window__WEBPACK_IMPORTED_MODULE_3__.FixedSizeList, {
        height: maxHeight,
        itemCount: children.length,
        itemSize: height,
        initialScrollOffset: initialOffset,
        children: ({ index , style  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: style,
                children: children[index]
            })
    });
};
const ReactSelect = ({ options , style , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        style: style,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
            styles: {
                ...customStyles
            },
            options: options,
            theme: (theme)=>{
                return {
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: "var(--bg-hover)",
                        primary50: "var(--bg-hover)",
                        primary75: "var(--bg-hover)"
                    }
                };
            },
            components: {
                MenuList
            },
            formatOptionLabel: formatOptionLabel,
            ...props
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactSelect);


/***/ }),

/***/ 1072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3694);





const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-a04fd039-0"
})`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin: 16px;
	isolation: isolate;

	@media screen and (min-width: ${({ theme  })=>theme.bpLg}) {
		margin: 28px;
	}
`;
const Center = styled_components__WEBPACK_IMPORTED_MODULE_3___default().main.withConfig({
    componentId: "sc-a04fd039-1"
})`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 28px;
	width: 100%;
	max-width: 86rem;
	min-height: 100%;
	margin: 0 auto;
	color: ${({ theme  })=>theme.text1};
`;
function Layout({ title , children , defaultSEO =false , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_4__/* .GlobalStyle */ .ZL, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageWrapper, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Center, {
                            ...props,
                            children: children
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 47:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useGetPrice)
/* harmony export */ });
/* unused harmony export getPrice */
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _components_Aggregator_rpcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8673);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
async function getPrice({ chain , fromToken , toToken  }) {
    if (!fromToken || !toToken || !chain) {
        return {
            gasTokenPrice: 0,
            fromTokenPrice: 0,
            toTokenPrice: 0
        };
    }
    const [{ coins  }, gasPriceData] = await Promise.all([
        fetch(`https://coins.llama.fi/prices/current/${chain}:${toToken},${chain}:${ZERO_ADDRESS},${chain}:${fromToken}`).then((r)=>r.json()),
        _components_Aggregator_rpcs__WEBPACK_IMPORTED_MODULE_1__/* .providers */ .a[chain].getFeeData()
    ]);
    return {
        gasTokenPrice: coins[`${chain}:${ZERO_ADDRESS}`]?.price,
        fromTokenPrice: coins[`${chain}:${fromToken}`]?.price,
        toTokenPrice: coins[`${chain}:${toToken}`]?.price,
        gasPriceData
    };
}
function useGetPrice({ chain , fromToken , toToken , skipRefetch  }) {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "gasPrice",
        chain,
        fromToken,
        toToken
    ], ()=>getPrice({
            chain,
            fromToken,
            toToken
        }), {
        ...skipRefetch ? {
            refetchOnMount: false,
            refetchInterval: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchIntervalInBackground: false
        } : {
            refetchInterval: 20000
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useGetRoutes),
/* harmony export */   "Y": () => (/* binding */ getAdapterRoutes)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Aggregator_adapters_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5324);
/* harmony import */ var _components_Aggregator_hooks_useOptimismFees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3398);
/* harmony import */ var _components_Aggregator_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6911);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function getAdapterRoutes({ adapter , chain , from , to , amount , extra ={}  }) {
    if (!chain || !from || !to || !amount || amount === "0") {
        return {
            price: null,
            name: adapter.name,
            airdrop: !adapter.token,
            fromAmount: amount,
            txData: "",
            l1Gas: 0
        };
    }
    try {
        let price;
        if (extra.isPrivacyEnabled) {
            price = await (0,_components_Aggregator_adapters_utils__WEBPACK_IMPORTED_MODULE_2__/* .redirectQuoteReq */ .T)(adapter.name, chain, from, to, amount, extra);
        } else {
            price = await adapter.getQuote(chain, from, to, amount, {
                ...extra
            });
        }
        const txData = adapter?.getTxData?.(price) ?? "";
        let l1Gas = 0;
        if (chain === "optimism") {
            l1Gas = await (0,_components_Aggregator_hooks_useOptimismFees__WEBPACK_IMPORTED_MODULE_3__/* .getOptimismFee */ .Z)(txData);
        }
        const res = {
            price,
            l1Gas,
            txData,
            name: adapter.name,
            airdrop: !adapter.token,
            fromAmount: amount
        };
        return res;
    } catch (e) {
        console.error(e);
        return {
            price: null,
            l1Gas: 0,
            name: adapter.name,
            airdrop: !adapter.token,
            fromAmount: amount,
            txData: ""
        };
    }
}
function useGetRoutes({ chain , from , to , amount , extra ={}  }) {
    const res = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueries)({
        queries: _components_Aggregator_router__WEBPACK_IMPORTED_MODULE_4__/* .adapters.filter */ .j$.filter((adap)=>adap.chainToId[chain] !== undefined).map((adapter)=>{
            return {
                queryKey: [
                    "routes",
                    adapter.name,
                    chain,
                    from,
                    to,
                    amount,
                    JSON.stringify((0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(extra, "selectedRoute"))
                ],
                queryFn: ()=>getAdapterRoutes({
                        adapter,
                        chain,
                        from,
                        to,
                        amount,
                        extra
                    }),
                refetchInterval: 15000,
                onSuccess: (data)=>{
                    if (data.name === extra.selectedRoute) extra.setRoute(data);
                }
            };
        })
    });
    return {
        isLoading: res.filter((r)=>r.status === "success").length >= 1 ? false : true,
        data: res?.filter((r)=>r.status === "success" && !!r.data && r.data.price).map((r)=>r.data) ?? []
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;