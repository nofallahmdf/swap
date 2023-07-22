"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6921);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-9296570a-0"
})`
	position: absolute;
	right: 16px;
	z-index: 100;
`;
const Connect = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, {
            chainStatus: "none"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Aggregator_Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./public/loader.png
/* harmony default export */ const loader = ({"src":"/_next/static/media/loader.2bb4f519.png","height":3667,"width":3667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEXtJSzrHSXsKjHtKC/qICfrHSXsIinvGiLsGiLuAADuFyDtCRXheX3XAADtJy3sIyruHiTuHSTuGCDuFyDls7bls7WfrLHrio2eqq7lY2niWmKkZGikY2biNTviNDrhLzTiLjPjKjHvISfaHy7aHi7uAADtAAHtAADsAACb30VEAAAAFHRSTlMAACkpKSnCwsLC7u75+fr6+vr6+hqq0t0AAABHSURBVHjaBUAHFkAgAP12OztlFtH9T+ghq5qhb6oMJfP74VkJEuR5yUCgkhknkxR0tPNio0b9im0VX42cu/txPAcK2rW0wA+kYASH7AjTdAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Aggregator/Loader.tsx



const LoaderWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-837242ce-0"
})`
	margin: 0 auto;
	margin-top: 72px;
	width: fit-content;
`;
const LoaderText = external_styled_components_default().div.withConfig({
    componentId: "sc-837242ce-1"
})`
	margin-top: 8px;
	font-size: 20px;
	font-weight: 500;
	text-align: center;
	padding-left: 8px;
`;
const LoaderBody = external_styled_components_default().img.withConfig({
    componentId: "sc-837242ce-2"
})`
	width: 120px;
	height: 120px;
	-webkit-animation: spin 3s linear infinite;
	-moz-animation: spin 3s linear infinite;
	animation: spin 3s linear infinite;
	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
const Loader = ({ loaded  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoaderWrapper, {
        children: [
            loaded ? null : /*#__PURE__*/ jsx_runtime_.jsx(LoaderBody, {
                src: loader.src
            }),
            loaded ? /*#__PURE__*/ jsx_runtime_.jsx(LoaderText, {
                children: "Not Found"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(LoaderText, {
                children: "Loading..."
            })
        ]
    });
};
/* harmony default export */ const Aggregator_Loader = (Loader);


/***/ }),

/***/ 3181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input),
/* harmony export */   "r": () => (/* binding */ TokenInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const InputElem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.withConfig({
    componentId: "sc-481038cc-0"
})`
	cursor: text;
	display: block;
	height: 48px;
	width: 100%;
	padding: 8px 16px;
	line-height: 25px;
	font-size: 14px;
	font-weight: 500;
	font-family: inherit;
	-webkit-appearance: none;
	color: ${({ theme  })=>theme.mode !== "dark" ? "#000" : "#fff"};
	border: ${({ theme  })=>theme.mode === "dark" ? "1px solid #232323;" : "1px solid #cdd9ed;"};
	background: ${({ theme  })=>theme.mode === "dark" ? "#000" : "#fff"};
	transition: border 0.3s ease;
	&::placeholder {
		color: #cbd1dc;
	}
	&:focus {
		outline: none;
		border-color: ${({ theme  })=>theme.mode === "dark" ? "#949494" : "#8e8e8e"};
	}
`;
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-481038cc-1"
})`
	position: relative;
	display: flex;
	width: 100%;
	margin-top: 4px;
	& > input,
	span {
		white-space: nowrap;
		display: block;
		&:not(:first-child):not(:last-child) {
			border-radius: 0;
		}
		&:first-child {
			border-radius: 12px 0 0 12px;
		}
		&:last-child {
			border-radius: 0 12px 12px 0;
		}
		&:only-child {
			border-radius: 12px;
		}
		&:not(:first-child) {
			margin-left: -2px;
		}
	}

	& > input {
		position: relative;
		z-index: 1;
		flex: 1 1 auto;
		width: 1%;
		margin-top: 0;
		margin-bottom: 0;
	}

	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	& > span {
		text-align: center;
		cursor: pointer;
		padding: 8px 12px;
		font-size: 14px;
		line-height: 30px;
		height: 48px;
		color: ${({ theme  })=>theme.mode === "dark" ? "#1c1f2d" : "#727272"};
		border: ${({ theme  })=>theme.mode === "dark" ? "1px solid #232323;" : "1px solid #cdd9ed;"};
		background: ${({ theme  })=>theme.mode === "dark" ? "#787878" : "#d8d8d8"};
		transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
	}
`;
const TokenInput = ({ setAmount , amount , onMaxClick , ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputWrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputElem, {
                placeholder: "Token amount",
                type: "number",
                pattern: "\\d+((\\.|,)\\d+)?",
                onChange: (val)=>{
                    setAmount(val.target.value);
                },
                value: amount,
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                onClick: onMaxClick,
                children: "Max"
            })
        ]
    });
};
const Input = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputWrapper, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputElem, {
            ...props
        })
    });
};


/***/ }),

/***/ 1991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Aggregator_TokenSelect)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-window"
var external_react_window_ = __webpack_require__(551);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./src/Theme/index.js + 1 modules
var Theme = __webpack_require__(3694);
// EXTERNAL MODULE: ./src/components/MultiSelect/index.tsx
var MultiSelect = __webpack_require__(3545);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Aggregator/Search.tsx







const ModalWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-3e6776ef-0"
})`
	display: flex;
	flex-direction: column;
	max-width: 540px;
	height: 500px;
	background: ${({ theme  })=>theme.bg1};
	top: -50px;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;

	box-shadow: ${({ theme  })=>theme.mode === "dark" ? "10px 0px 50px 10px rgba(26, 26, 26, 0.9);" : "10px 0px 50px 10px rgba(211, 211, 211, 0.9);;"};
	padding: 16px;
	border-radius: 16px;
	position: absolute;
	z-index: 2;

	animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	@keyframes scale-in-center {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
`;
const Header = external_styled_components_default().div.withConfig({
    componentId: "sc-3e6776ef-1"
})`
	position: sticky;
	text-align: center;
	justify-content: center;
	display: flex;
	margin-bottom: 8px;
`;
const PairRow = external_styled_components_default().div.withConfig({
    componentId: "sc-3e6776ef-2"
})`
	display: flex;
	grid-row-gap: 8px;
	margin-top: 16px;
	border-bottom: ${({ theme  })=>theme.mode === "dark" ? "1px solid #373944;" : "2px solid #c6cae0;"};
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: ${({ hover  })=>hover ? " rgba(246, 246, 246, 0.1);" : "none"};
	}
`;
const IconImage = external_styled_components_default().img.withConfig({
    componentId: "sc-3e6776ef-3"
})`
	border-radius: 50%;
	width: 20px;
	height: 20px;
`;
const IconWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-3e6776ef-4"
})`
	display: flex;
	margin-right: 8px;
`;
const Pairs = external_styled_components_default().div.withConfig({
    componentId: "sc-3e6776ef-5"
})`
	overflow-y: scroll;
`;
const Row = ({ data: { data , onClick  } , index , style  })=>{
    const pair = data[index];
    return /*#__PURE__*/ _jsxs(PairRow, {
        style: style,
        onClick: ()=>onClick(pair),
        children: [
            /*#__PURE__*/ _jsxs(IconWrapper, {
                children: [
                    /*#__PURE__*/ _jsx(IconImage, {
                        src: pair.token0.logoURI
                    }),
                    " - ",
                    /*#__PURE__*/ _jsx(IconImage, {
                        src: pair.token1.logoURI
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(TYPE.heading, {
                children: pair.label
            })
        ]
    }, pair.value);
};
const Modal = ({ close , onInputChange , data , onClick  })=>{
    return /*#__PURE__*/ _jsxs(ModalWrapper, {
        children: [
            /*#__PURE__*/ _jsxs(Header, {
                children: [
                    /*#__PURE__*/ _jsx(TYPE.largeHeader, {
                        fontSize: 20,
                        children: "Search"
                    }),
                    /*#__PURE__*/ _jsx(CloseBtn, {
                        onClick: close
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx(Input, {
                    placeholder: "Search... (BTC-ETH)",
                    onChange: onInputChange,
                    autoFocus: true
                })
            }),
            /*#__PURE__*/ _jsx(List, {
                height: 390,
                itemCount: data.length,
                itemSize: 38,
                itemData: {
                    data,
                    onClick
                },
                children: Row
            }),
            /*#__PURE__*/ _jsx(Pairs, {})
        ]
    });
};
function Search({ tokens , setTokens  }) {
    const { 0: isOpen , 1: setIsOpen  } = useState(false);
    const toggle = ()=>setIsOpen((open)=>!open);
    const { 0: data , 1: setData  } = useState([]);
    const onRowClick = (pair)=>{
        setTokens(pair);
        setIsOpen(false);
        setData([]);
    };
    const onChange = ({ target: { value  }  })=>{
        const [symbol0, symbol1] = value.split(/-| | \//);
        if (symbol0?.length < 2) {
            setData([]);
            return;
        }
        const tokens00 = tokens.filter(({ symbol  })=>symbol.toLowerCase() === symbol0.toLowerCase());
        const tokens01 = tokens.filter(({ symbol  })=>symbol.toLowerCase().includes(symbol0.toLowerCase()));
        const tokens0 = tokens00.concat(tokens01);
        const tokens1 = (()=>{
            if (tokens0.length > 100 || !symbol1) return tokens.slice(0, 100);
            else return tokens.filter(({ symbol  })=>symbol.toLowerCase().includes(symbol1));
        })();
        const data = tokens0.reduce((acc, token0)=>acc.concat(tokens1.map((token1)=>({
                    token1,
                    token0,
                    label: `${token0.symbol}-${token1.symbol}`,
                    value: `${token0.address}-${token1.address}`
                }))), []);
        setData(data);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Input, {
                placeholder: "Search... (BTC-ETH)",
                disabled: true,
                onClick: ()=>{
                    toggle();
                }
            }),
            isOpen ? /*#__PURE__*/ _jsx(Modal, {
                onClick: onRowClick,
                close: ()=>setIsOpen(false),
                onInputChange: onChange,
                data: data
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Aggregator/TokenInput.tsx
var TokenInput = __webpack_require__(3181);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/CloseBtn/index.tsx
var components_CloseBtn = __webpack_require__(8699);
;// CONCATENATED MODULE: ./src/components/Aggregator/TokenSelect.tsx












const TokenSelect_Row = ({ data: { data , onClick  } , index , style  })=>{
    const token = data[index];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PairRow, {
        style: style,
        onClick: ()=>onClick(token),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IconWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(IconImage, {
                    src: token.logoURI
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                children: `${token.name} (${token.symbol})`
            }),
            token.balanceUSD ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    marginRight: 0,
                    marginLeft: "auto"
                },
                children: [
                    (token.amount / 10 ** token.decimals).toFixed(3),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        style: {
                            fontSize: 12
                        },
                        children: [
                            " (~$",
                            token.balanceUSD?.toFixed(3),
                            ")"
                        ]
                    })
                ]
            }) : null
        ]
    }, token.value);
};
const saveToken = (token)=>{
    const tokens = JSON.parse(localStorage.getItem("savedTokens") || "{}");
    const chainTokens = tokens[token.chainId] || [];
    const newTokens = {
        ...tokens,
        [token.chainId]: chainTokens.concat(token)
    };
    localStorage.setItem("savedTokens", JSON.stringify(newTokens));
};
const AddToken = ({ address , selectedChain , onClick  })=>{
    const { data , isLoading  } = (0,external_wagmi_.useToken)({
        address: address,
        chainId: selectedChain.id,
        enabled: typeof address === "string" && address.length === 42 && selectedChain ? true : false
    });
    const { chain  } = (0,external_wagmi_.useNetwork)();
    const onTokenClick = ()=>{
        saveToken({
            address,
            ...data || {},
            label: data?.symbol,
            value: address,
            chainId: chain?.id
        });
        onClick({
            address,
            label: data?.symbol,
            value: address
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PairRow, {
        style: {
            lineHeight: "38px"
        },
        hover: false,
        onClick: onTokenClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IconWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.QuestionIcon, {
                    height: "20px",
                    width: "20px",
                    marginTop: "10px"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Theme/* TYPE.heading */.wD.heading, {
                children: isLoading ? "Loading..." : data?.name ? `${data.name} (${data.symbol})` : address.slice(0, 4) + "..." + address.slice(-4)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                height: 38,
                marginLeft: "auto",
                onClick: onTokenClick,
                children: "Add token"
            })
        ]
    }, address);
};
const SelectModal = ({ close , data , onClick , selectedChain  })=>{
    const { 0: input , 1: setInput  } = (0,external_react_.useState)("");
    const onInputChange = (e)=>{
        setInput(e?.target?.value);
    };
    const filteredData = input ? data?.filter((token)=>token.symbol.toLowerCase().includes(input.toLowerCase()) || token.address.toLowerCase() === input.toLowerCase()) : data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Theme/* TYPE.largeHeader */.wD.largeHeader, {
                        fontSize: 20,
                        children: "Select Token"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_CloseBtn/* CloseBtn */.d, {
                        onClick: close
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TokenInput/* Input */.I, {
                    placeholder: "Search... (Symbol or Address)",
                    onChange: onInputChange,
                    autoFocus: true
                })
            }),
            external_ethers_.ethers.utils.isAddress(input) ? /*#__PURE__*/ jsx_runtime_.jsx(AddToken, {
                address: input,
                onClick: onClick,
                selectedChain: selectedChain
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_window_.FixedSizeList, {
                height: 390,
                itemCount: filteredData.length,
                itemSize: 38,
                itemData: {
                    data: filteredData,
                    onClick
                },
                children: TokenSelect_Row
            })
        ]
    });
};
const TokenSelect = ({ tokens , onClick , token , selectedChain  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const onTokenClick = (token)=>{
        onClick(token);
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    cursor: "pointer"
                },
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ jsx_runtime_.jsx(MultiSelect/* default */.Z, {
                    openMenuOnClick: false,
                    value: token,
                    isDisabled: true
                })
            }),
            isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(SelectModal, {
                close: ()=>setOpen(false),
                data: tokens,
                onClick: onTokenClick,
                selectedChain: selectedChain
            }) : null
        ]
    });
};
/* harmony default export */ const Aggregator_TokenSelect = (TokenSelect);


/***/ }),

/***/ 1811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTokenApprove)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7787);



// To change the approve amount you first have to reduce the addresses`
//  allowance to zero by calling `approve(_spender, 0)` if it is not
//  already 0 to mitigate the race condition described here:
//  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
const oldErc = [
    "0xdAC17F958D2ee523a2206206994597C13D831ec7".toLowerCase() // USDT
];
const useTokenApprove = (token, spender, amount)=>{
    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount)();
    const isOld = oldErc.includes(token?.toLowerCase());
    const { data: allowance  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({
        address: token,
        abi: wagmi__WEBPACK_IMPORTED_MODULE_1__.erc20ABI,
        functionName: "allowance",
        args: [
            address,
            spender
        ],
        watch: true,
        enabled: isConnected && !!spender && token !== ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero
    });
    const shouldRemoveApproval = isOld && allowance && allowance.lt(ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(amount)) && !allowance.eq(0);
    const normalizedAmount = Number(amount) ? amount : "0";
    const { config  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.usePrepareContractWrite)({
        address: token,
        abi: wagmi__WEBPACK_IMPORTED_MODULE_1__.erc20ABI,
        functionName: "approve",
        args: [
            spender,
            shouldRemoveApproval ? ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from("0") : normalizedAmount ? ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(normalizedAmount) : ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.MaxUint256
        ],
        enabled: isConnected && !!spender && !!token
    });
    const { config: configInfinite  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.usePrepareContractWrite)({
        address: token,
        abi: wagmi__WEBPACK_IMPORTED_MODULE_1__.erc20ABI,
        functionName: "approve",
        args: [
            spender,
            shouldRemoveApproval ? ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from("0") : ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.MaxUint256
        ],
        enabled: isConnected && !!spender && !!token
    });
    const { write: approve , isLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)(config);
    const { write: approveInfinite , isLoading: isInfiniteLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)(configInfinite);
    if (token === ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.AddressZero || token?.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_2__/* .nativeAddress.toLowerCase */ .cB.toLowerCase()) return {
        isApproved: true
    };
    if (!address || !allowance) return {
        isApproved: false
    };
    if (allowance.toString() === ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.constants.MaxUint256.toString()) return {
        isApproved: true
    };
    if (normalizedAmount && allowance.gte(ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(normalizedAmount))) return {
        isApproved: true
    };
    return {
        isApproved: false,
        approve,
        approveInfinite,
        isLoading,
        isInfiniteLoading
    };
};


/***/ }),

/***/ 5261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ AggregatorContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6921);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9766);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MultiSelect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3545);
/* harmony import */ var _components_FAQs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(5673);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1875);
/* harmony import */ var _components_SwapRoute__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2138);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6911);
/* harmony import */ var _TokenInput__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3181);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2570);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1811);
/* harmony import */ var _queries_useGetRoutes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4939);
/* harmony import */ var _queries_useGetPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47);
/* harmony import */ var _queries_useTokenBalances__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7692);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7787);
/* harmony import */ var _TokenSelect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1991);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4868);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9738);
/* harmony import */ var _adapters_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5324);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CloseBtn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8699);
/* harmony import */ var _TransactionModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, bignumber_js__WEBPACK_IMPORTED_MODULE_6__, _queries_useTokenBalances__WEBPACK_IMPORTED_MODULE_13__, _queries_useGetRoutes__WEBPACK_IMPORTED_MODULE_16__, _queries_useGetPrice__WEBPACK_IMPORTED_MODULE_17__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, bignumber_js__WEBPACK_IMPORTED_MODULE_6__, _queries_useTokenBalances__WEBPACK_IMPORTED_MODULE_13__, _queries_useGetRoutes__WEBPACK_IMPORTED_MODULE_16__, _queries_useGetPrice__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























/*
Integrated:
- paraswap
- 0x
- 1inch
- cowswap
- kyberswap
- firebird (https://docs.firebird.finance/developer/api-specification)
- https://openocean.finance/
- airswap
- https://app.unidex.exchange/trading
- https://twitter.com/odosprotocol
- yieldyak
- https://defi.krystal.app/

- rook
- https://rubic.exchange/ - aggregates aggregators
- https://twitter.com/RangoExchange - api key requested, bridge aggregator, aggregates aggregators on same chain
- thorswap - aggregates aggregators that we already have
- lifi
- https://twitter.com/ChainHopDEX - only has 1inch
- https://twitter.com/MayanFinance

no api:
- https://twitter.com/HeraAggregator (no api)
- slingshot (no api)
- orion protocol
- autofarm.network/swap/
- https://swapr.eth.limo/#/swap?chainId=1 - aggregates aggregators + swapr

non evm:
- jupiter (solana)
- openocean (solana)
- https://twitter.com/prism_ag (solana)
- coinhall (terra)
- https://twitter.com/tfm_com (terra)

cant integrate:
- https://twitter.com/UniDexFinance - api broken (seems abandoned)
- https://bebop.xyz/ - not live
- VaporDex - not live
- https://twitter.com/hippolabs__ - not live
- dexguru - no api
- https://wowmax.exchange/alpha/ - still beta + no api
- https://twitter.com/RBXtoken - doesnt work
- https://www.bungee.exchange/ - couldnt use it
- wardenswap - no api + sdk is closed source
- https://twitter.com/DexibleApp - not an aggregator, only supports exotic orders like TWAP, segmented order, stop loss...
*/ const Body = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-0"
})`
	display: grid;
	grid-row-gap: 16px;
	padding-bottom: 4px;

	width: 100%;
	max-width: 30rem;

	box-shadow: ${({ theme  })=>theme.mode === "dark" ? "10px 0px 50px 10px rgba(26, 26, 26, 0.9);" : "10px 0px 50px 10px rgba(211, 211, 211, 0.9);;"};
	padding: 16px;
	border-radius: 16px;
	text-align: left;
	transition: all 0.66s ease-out;
	animation: ${(props)=>props.showRoutes === true ? "slide-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both" : "none"};

	@keyframes slide-left {
		0% {
			transform: translateX(180px);
		}
		100% {
			transform: translateX(0);
		}
	}
`;
const BackgroundImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-1"
})`
	background-image: url('/bg.png'); // Path to your background image in the public folder
	background-size: 2000px;
	background-repeat: no-repeat;
	background-position: center;
	// Add any other styles for the background image container
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-2"
})`
	width: 100%;
	text-align: center;
	display: grid;
	grid-row-gap: 36px;
	margin: 10px auto 40px;
	position: relative;
	top: 36px;

	h1 {
		font-weight: 500;
	}

	@media screen and (min-width: ${({ theme  })=>theme.bpMed}) {
		top: 0px;
	}
`;
const Balance = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-3"
})`
	text-align: right;
	padding-right: 4px;
	text-decoration: underline;
	margin-top: 4px;
	cursor: pointer;
`;
const Routes = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-4"
})`
	padding: 16px;
	border-radius: 16px;
	text-align: left;
	overflow-y: scroll;
	min-width: 360px;
	max-height: 482px;
	min-width: 26rem;
	animation: tilt-in-fwd-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	box-shadow: ${({ theme  })=>theme.mode === "dark" ? "10px 0px 50px 10px rgba(26, 26, 26, 0.9);" : "10px 0px 50px 10px rgba(211, 211, 211, 0.9);"};

	&::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	@keyframes tilt-in-fwd-in {
		0% {
			transform: rotateY(-20deg) rotateX(35deg) translate(-300px, -300px) skew(35deg, -10deg);
			opacity: 0;
		}
		100% {
			transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
			opacity: 1;
		}
	}

	@keyframes tilt-in-fwd-out {
		0% {
			transform: rotateY(-20deg) rotateX(35deg) translate(-1000px, -1000px) skew(35deg, -10deg);
			opacity: 0;
		}
		100% {
			transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
			opacity: 1;
		}
	}
`;
const BodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-5"
})`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin: 0 auto;

	@media screen and (min-width: ${({ theme  })=>theme.bpLg}) {
		flex-direction: row;
	}
`;
const TokenSelectBody = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-6"
})`
	display: grid;
	grid-column-gap: 8px;
	margin-top: 16px;
	margin-bottom: 8px;
	grid-template-columns: 5fr 1fr 5fr;
`;
const FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-7"
})`
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 4px;
	padding-left: 4px;
`;
const SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-8"
})`
	border: ${({ theme  })=>theme.mode === "dark" ? "2px solid #373944;" : "2px solid #c6cae0;"};
	border-radius: 16px;
	padding: 8px;
	padding-bottom: 16px;
`;
const SwapWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-9"
})`
	width: 100%;
	display: flex;
	& > button {
		width: 100%;
		margin-right: 4px;
	}
`;
const InputFooter = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
    componentId: "sc-9da992f0-10"
})`
	display: flex;
	justify-content: space-between;
`;
const chains = (0,_router__WEBPACK_IMPORTED_MODULE_11__/* .getAllChains */ .Mk)();
function AggregatorContainer({ tokenlist  }) {
    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)();
    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();
    const { chain: chainOnWallet  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork)();
    const { 0: isPrivacyEnabled , 1: setIsPrivacyEnabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useToast)();
    const savedTokens = (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .getSavedTokens */ .l1)();
    const { data: tokenBalances  } = (0,_queries_useTokenBalances__WEBPACK_IMPORTED_MODULE_13__/* .useTokenBalances */ .Z)(address);
    const { 0: slippage , 1: setSlippage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0.1");
    const addRecentTransaction = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.useAddRecentTransaction)();
    const { switchNetwork  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSwitchNetwork)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { chain: chainOnURL , from: fromToken , to: toToken  } = router.query;
    const chainName = typeof chainOnURL === "string" ? chainOnURL.toLowerCase() : "ethereum";
    const fromTokenSymbol = typeof fromToken === "string" ? fromToken.toLowerCase() : null;
    const toTokenSymbol = typeof toToken === "string" ? toToken.toLowerCase() : null;
    const { selectedChain , selectedFromToken , selectedToToken , chainTokenList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const tokenList = tokenlist && chainName ? tokenlist[_constants__WEBPACK_IMPORTED_MODULE_14__/* .chainsMap */ .zk[chainName]] || [] : null;
        const selectedChain = chains.find((c)=>c.value === chainName);
        const selectedFromToken = tokenList?.find((t)=>t.symbol.toLowerCase() === fromTokenSymbol || t.address.toLowerCase() === fromTokenSymbol);
        const selectedToToken = tokenList?.find((t)=>t.symbol.toLowerCase() === toTokenSymbol || t.address.toLowerCase() === toTokenSymbol);
        return {
            selectedChain: selectedChain ? {
                ...selectedChain,
                id: _constants__WEBPACK_IMPORTED_MODULE_14__/* .chainsMap */ .zk[selectedChain.value]
            } : null,
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
    const { data: fromToken2  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useToken)({
        address: fromToken,
        chainId: selectedChain.id,
        enabled: typeof fromToken === "string" && fromToken.length === 42 && selectedChain ? true : false
    });
    const { data: toToken2  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useToken)({
        address: toToken,
        chainId: selectedChain.id,
        enabled: typeof toToken === "string" && toToken.length === 42 && selectedChain ? true : false
    });
    const finalSelectedFromToken = !selectedFromToken && fromToken2 ? {
        name: fromToken2.name || fromToken2.address.slice(0, 4) + "..." + fromToken2.address.slice(-4),
        label: fromToken2.symbol || fromToken2.address.slice(0, 4) + "..." + fromToken2.address.slice(-4),
        symbol: fromToken2.symbol || "",
        address: fromToken2.address,
        value: fromToken2.address,
        decimals: fromToken2.decimals,
        logoURI: "",
        chainId: selectedChain.id ?? 1,
        geckoId: null
    } : selectedFromToken;
    const finalSelectedToToken = !selectedToToken && toToken2 ? {
        name: toToken2.name || toToken2.address.slice(0, 4) + "..." + toToken2.address.slice(-4),
        label: toToken2.symbol || toToken2.address.slice(0, 4) + "..." + toToken2.address.slice(-4),
        symbol: toToken2.symbol || "",
        address: toToken2.address,
        value: toToken2.address,
        decimals: toToken2.decimals,
        logoURI: "",
        chainId: selectedChain.id ?? 1,
        geckoId: null
    } : selectedToToken;
    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("10");
    const { 0: txModalOpen , 1: setTxModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: txUrl , 1: setTxUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const amountWithDecimals = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(amount).times((0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(10).pow(finalSelectedFromToken?.decimals || 18)).toFixed(0);
    const isValidSelectedChain = selectedChain && chainOnWallet ? selectedChain.id === chainOnWallet.id : false;
    const balance = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useBalance)({
        addressOrName: address,
        token: [
            ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.constants.AddressZero,
            _constants__WEBPACK_IMPORTED_MODULE_14__/* .nativeAddress.toLowerCase */ .cB.toLowerCase()
        ].includes(finalSelectedFromToken?.address?.toLowerCase()) ? undefined : (finalSelectedFromToken?.address),
        watch: true,
        chainId: selectedChain.id,
        enabled: selectedChain && isConnected
    });
    const { data: gasPriceData  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useFeeData)({
        chainId: selectedChain?.id,
        enabled: selectedChain ? true : false
    });
    const tokensInChain = chainTokenList?.concat(savedTokens[chainOnWallet?.id] || []).map((token)=>({
            ...token,
            amount: tokenBalances?.[chainOnWallet?.id]?.[token.address.toLowerCase()]?.amount || 0,
            balanceUSD: tokenBalances?.[chainOnWallet?.id]?.[token.address.toLowerCase()]?.balanceUSD || 0
        })).sort((a, b)=>b.balanceUSD - a.balanceUSD) ?? [];
    const { 0: route , 1: setRoute  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const confirmingTxToastRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const swapMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({
        mutationFn: (params)=>(0,_router__WEBPACK_IMPORTED_MODULE_11__/* .swap */ .LF)(params),
        onSuccess: (data, variables)=>{
            let txUrl;
            if (data.hash) {
                addRecentTransaction({
                    hash: data.hash,
                    description: `Swap transaction using ${variables.adapter} is sent.`
                });
                const explorerUrl = chainOnWallet.blockExplorers.default.url;
                setTxModalOpen(true);
                txUrl = `${explorerUrl}/tx/${data.hash}`;
                setTxUrl(txUrl);
            } else {
                setTxModalOpen(true);
                txUrl = `https://explorer.cow.fi/orders/${data}`;
                setTxUrl(txUrl);
            }
            confirmingTxToastRef.current = toast({
                title: "Confirming Transaction",
                description: "",
                status: "loading",
                isClosable: true,
                position: "top-right"
            });
            data.wait?.()?.then((final)=>{
                if (final.status === 1) {
                    if (confirmingTxToastRef.current) {
                        toast.close(confirmingTxToastRef.current);
                    }
                    const fromToken = variables.tokens.fromToken;
                    const toToken = variables.tokens.toToken;
                    const inAmount = variables.rawQuote?.inAmount ?? variables.rawQuote?.inputAmount;
                    const outAmount = variables.rawQuote?.outAmount ?? variables.rawQuote?.outputAmount;
                    toast({
                        title: "Transaction Success",
                        description: `Swapped ${inAmount ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(inAmount).div(10 ** Number(fromToken.decimals || 18)).toFixed(3) : ""} ${fromToken.symbol} for ${outAmount ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(outAmount).div(10 ** Number(toToken.decimals || 18)).toFixed(3) : ""} ${toToken.symbol} via ${variables.adapter}`,
                        status: "success",
                        duration: 10000,
                        isClosable: true,
                        position: "top-right",
                        containerStyle: {
                            width: "100%",
                            maxWidth: "300px"
                        }
                    });
                } else {
                    toast({
                        title: "Transaction Failed",
                        status: "error",
                        duration: 10000,
                        isClosable: true,
                        position: "top-right",
                        containerStyle: {
                            width: "100%",
                            maxWidth: "300px"
                        }
                    });
                }
            }).catch(()=>{
                toast({
                    title: "Transaction Failed",
                    status: "error",
                    duration: 10000,
                    isClosable: true,
                    position: "top-right",
                    containerStyle: {
                        width: "100%",
                        maxWidth: "300px"
                    }
                });
            });
            (0,_adapters_utils__WEBPACK_IMPORTED_MODULE_15__/* .sendSwapEvent */ .g)({
                chain: selectedChain.value,
                user: address,
                from: variables.from,
                to: variables.to,
                aggregator: variables.adapter,
                isError: false,
                quote: variables.rawQuote,
                txUrl,
                amount: String(amount),
                errorData: {},
                amountUsd: +fromTokenPrice * +amount || 0
            });
        },
        onError: (err, variables)=>{
            if (err.code !== "ACTION_REJECTED" || err.code.toString() === "-32603") {
                toast({
                    title: "Something went wrong.",
                    description: err.reason,
                    status: "error",
                    duration: 10000,
                    isClosable: true,
                    position: "top-right",
                    containerStyle: {
                        width: "100%",
                        maxWidth: "300px"
                    }
                });
                (0,_adapters_utils__WEBPACK_IMPORTED_MODULE_15__/* .sendSwapEvent */ .g)({
                    chain: selectedChain.value,
                    user: address,
                    from: variables.from,
                    to: variables.to,
                    aggregator: variables.adapter,
                    isError: true,
                    quote: variables.rawQuote,
                    txUrl: "",
                    amount: String(amount),
                    errorData: err,
                    amountUsd: fromTokenPrice * +amount || 0
                });
            }
        }
    });
    const handleSwap = ()=>{
        swapMutation.mutate({
            chain: selectedChain.value,
            from: finalSelectedFromToken.value,
            to: finalSelectedToToken.value,
            amount: amountWithDecimals,
            signer,
            slippage,
            adapter: route.name,
            rawQuote: route?.price?.rawQuote,
            tokens: {
                fromToken: finalSelectedFromToken,
                toToken: finalSelectedToToken
            }
        });
    };
    const { data: routes = [] , isLoading  } = (0,_queries_useGetRoutes__WEBPACK_IMPORTED_MODULE_16__/* .useGetRoutes */ .N)({
        chain: selectedChain?.value,
        from: finalSelectedFromToken?.value,
        to: finalSelectedToToken?.value,
        amount: amountWithDecimals,
        extra: {
            gasPriceData,
            userAddress: address || ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.constants.AddressZero,
            amount,
            fromToken: finalSelectedFromToken,
            toToken: finalSelectedToToken,
            slippage,
            selectedRoute: route?.name,
            isPrivacyEnabled,
            setRoute
        }
    });
    const { data: tokenPrices  } = (0,_queries_useGetPrice__WEBPACK_IMPORTED_MODULE_17__/* .useGetPrice */ .R)({
        chain: selectedChain?.value,
        toToken: finalSelectedToToken?.address,
        fromToken: finalSelectedFromToken?.address
    });
    const { gasTokenPrice =0 , toTokenPrice , fromTokenPrice  } = tokenPrices || {};
    const { isApproved , approve , approveInfinite , isLoading: isApproveLoading , isInfiniteLoading: isApproveInfiniteLoading  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useTokenApprove */ .Z)(finalSelectedFromToken?.address, route?.price?.tokenApprovalAddress, amountWithDecimals);
    const onMaxClick = ()=>{
        if (balance?.data?.formatted) {
            if (route?.price?.estimatedGas && gasPriceData?.formatted?.gasPrice && finalSelectedFromToken?.address === ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.constants.AddressZero) {
                const gas = +route.price.estimatedGas * +gasPriceData?.formatted?.gasPrice * 2 / 1e18;
                const amountWithoutGas = +balance?.data?.formatted - gas;
                setAmount(amountWithoutGas);
            } else {
                setAmount(balance?.data?.formatted);
            }
        }
    };
    const onChainChange = (newChain)=>{
        router.push({
            pathname: "/",
            query: {
                chain: newChain.value
            }
        }, undefined, {
            shallow: true
        }).then(()=>{
            if (switchNetwork) switchNetwork(newChain.chainId);
        });
    };
    const onFromTokenChange = (token)=>{
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                from: token.address
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
                to: token.address
            }
        }, undefined, {
            shallow: true
        });
    };
    const setTokens = (tokens)=>{
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                from: tokens.token0.symbol,
                to: tokens.token1.symbol
            }
        }, undefined, {
            shallow: true
        });
    };
    let normalizedRoutes = [
        ...routes || []
    ]?.map((route)=>{
        let gasUsd = gasTokenPrice * +route.price.estimatedGas * +gasPriceData?.formatted?.gasPrice / 1e18 || 0;
        // CowSwap native token swap
        gasUsd = route.price.feeAmount && finalSelectedFromToken.address === ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.constants.AddressZero ? route.price.feeAmount / 1e18 * gasTokenPrice : gasUsd;
        gasUsd = route.l1Gas !== "Unknown" && route.l1Gas ? route.l1Gas * gasTokenPrice + gasUsd : gasUsd;
        gasUsd = route.l1Gas === "Unknown" ? "Unknown" : gasUsd;
        const amount = +route.price.amountReturned / 10 ** +finalSelectedToToken?.decimals;
        const amountUsd = toTokenPrice ? (amount * toTokenPrice).toFixed(2) : null;
        const netOut = amountUsd ? route.l1Gas !== "Unknown" ? +amountUsd - +gasUsd : +amountUsd : amount;
        return {
            route,
            gasUsd,
            amountUsd,
            amount,
            netOut,
            ...route
        };
    }).filter(({ fromAmount , amount: toAmount  })=>Number(toAmount) && amountWithDecimals === fromAmount).sort((a, b)=>b.netOut - a.netOut).map((route, i, arr)=>({
            ...route,
            lossPercent: route.netOut / arr[0].netOut
        }));
    normalizedRoutes = normalizedRoutes.filter((r)=>r.gasUsd !== "Unknown").concat(normalizedRoutes.filter((r)=>r.gasUsd === "Unknown"));
    const priceImpact = fromTokenPrice && toTokenPrice && route?.route?.amountUsd > 0 ? 100 - route?.route?.amountUsd / (+fromTokenPrice * +amount) * 100 : 0;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackgroundImageWrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "logo-dexfin.png",
                    style: {
                        width: "160px",
                        height: "100%"
                    },
                    alt: ""
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BodyWrapper, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Body, {
                            showRoutes: finalSelectedFromToken && finalSelectedToToken ? true : false,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormHeader, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                                        children: "Chain"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Spacer, {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                        content: "Redirect requests through the DefiLlama Server to hide your IP address",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormControl, {
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormLabel, {
                                                                    htmlFor: "privacy-switch",
                                                                    pb: "0",
                                                                    lineHeight: 1,
                                                                    children: "Private mode"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Switch, {
                                                                    id: "privacy-switch",
                                                                    onChange: (e)=>setIsPrivacyEnabled(e?.target?.checked),
                                                                    isChecked: isPrivacyEnabled
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MultiSelect__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                            options: chains,
                                            value: selectedChain,
                                            onChange: onChainChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SelectWrapper, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormHeader, {
                                            children: "Select Tokens"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TokenSelectBody, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenSelect__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                    tokens: chainTokenList,
                                                    token: finalSelectedFromToken,
                                                    onClick: onFromTokenChange,
                                                    selectedChain: selectedChain
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
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
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__.ArrowRight, {}),
                                                    "aria-label": "Switch Tokens",
                                                    marginTop: "auto"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenSelect__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                                    tokens: chainTokenList,
                                                    token: finalSelectedToToken,
                                                    onClick: onToTokenChange,
                                                    selectedChain: selectedChain
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormHeader, {
                                            children: "Amount In"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenInput__WEBPACK_IMPORTED_MODULE_22__/* .TokenInput */ .r, {
                                            setAmount: setAmount,
                                            amount: amount,
                                            onMaxClick: onMaxClick
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputFooter, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        marginTop: 4,
                                                        marginLeft: 4
                                                    },
                                                    children: [
                                                        "Slippage %",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TokenInput__WEBPACK_IMPORTED_MODULE_22__/* .Input */ .I, {
                                                            value: slippage,
                                                            type: "number",
                                                            style: {
                                                                width: 55,
                                                                height: 30,
                                                                display: "inline",
                                                                appearance: "textfield"
                                                            },
                                                            onChange: (val)=>{
                                                                if (+val.target.value < 50) setSlippage(val.target.value);
                                                            }
                                                        }),
                                                        " ",
                                                        fromTokenPrice ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                "Value: $",
                                                                (+fromTokenPrice * +amount).toLocaleString(undefined, {
                                                                    maximumFractionDigits: 3
                                                                })
                                                            ]
                                                        }) : null
                                                    ]
                                                }),
                                                balance.isSuccess ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Balance, {
                                                    onClick: onMaxClick,
                                                    children: [
                                                        "Balance:",
                                                        " ",
                                                        (+balance?.data?.formatted).toLocaleString(undefined, {
                                                            maximumFractionDigits: 3
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwapWrapper, {
                                    children: !isConnected ? // <Button colorScheme={'messenger'} onClick={() => openConnectModal()}>
                                    // 	Connect Wallet
                                    // </Button>
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : !isValidSelectedChain ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                        onClick: ()=>switchNetwork(selectedChain.id),
                                        children: "Switch Network"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            route && address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                                isLoading: swapMutation.isLoading || isApproveLoading,
                                                loadingText: "Preparing transaction",
                                                colorScheme: "messenger",
                                                onClick: ()=>{
                                                    if (approve) approve();
                                                    if (+amount > +balance?.data?.formatted) return;
                                                    if (isApproved) handleSwap();
                                                },
                                                children: isApproved ? "Swap" : "Approve"
                                            }) : null,
                                            route && address && !isApproved && [
                                                "Matcha/0x",
                                                "1inch",
                                                "CowSwap"
                                            ].includes(route?.name) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                                colorScheme: "messenger",
                                                loadingText: "Preparing transaction",
                                                isLoading: isApproveInfiniteLoading,
                                                onClick: ()=>{
                                                    if (approveInfinite) approveInfinite();
                                                },
                                                children: "Approve Infinite"
                                            }) : null
                                        ]
                                    })
                                }),
                                priceImpact > 15 && !isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Alert, {
                                    status: "warning",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.AlertIcon, {}),
                                        "High price impact! More than ",
                                        priceImpact.toFixed(2),
                                        "% drop."
                                    ]
                                }) : null
                            ]
                        }),
                        finalSelectedFromToken && finalSelectedToToken && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Routes, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormHeader, {
                                    children: [
                                        "Routes",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CloseBtn__WEBPACK_IMPORTED_MODULE_23__/* .CloseBtn */ .d, {
                                            right: "4px",
                                            top: "6px",
                                            onClick: ()=>router.push({
                                                    pathname: "/"
                                                }, undefined, {
                                                    shallow: true
                                                })
                                        })
                                    ]
                                }),
                                isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                    loaded: !isLoading
                                }) : null,
                                normalizedRoutes.map((r, i)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_SwapRoute__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                                        ...r,
                                        index: i,
                                        selected: route?.name === r.name,
                                        setRoute: ()=>setRoute({
                                                ...r.route,
                                                route: r
                                            }),
                                        toToken: finalSelectedToToken,
                                        amountFrom: amountWithDecimals,
                                        fromToken: finalSelectedFromToken,
                                        selectedChain: selectedChain.label,
                                        gasTokenPrice: gasTokenPrice,
                                        key: selectedChain.label + finalSelectedFromToken.label + finalSelectedToToken.label + amountWithDecimals + gasPriceData.formatted.gasPrice + r.name
                                    }))
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FAQs__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransactionModal__WEBPACK_IMPORTED_MODULE_28__/* .TransactionModal */ .t, {
                    open: txModalOpen,
                    setOpen: setTxModalOpen,
                    link: txUrl
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ CloseBtn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1829);



const CloseBtn = ({ onClick , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        bg: "none",
        pos: "absolute",
        top: "-4px",
        right: "-8px",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_2__/* .CrossIcon */ .aM, {}),
        "aria-label": "close",
        onClick: onClick,
        ...props
    });


/***/ }),

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FaqWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3694);



function FaqWrapper() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Theme__WEBPACK_IMPORTED_MODULE_2__/* .TYPE.largeHeader */ .wD.largeHeader, {
                children: "FAQ"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
                allowMultiple: true,
                margin: "0 auto",
                style: {
                    width: "100%",
                    maxWidth: "600px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionButton, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            flex: "1",
                                            textAlign: "left",
                                            children: "What is this?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionIcon, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionPanel, {
                                pb: 4,
                                children: "It's an aggregator of DEX aggregators, we query the price in 1inch, cowswap, matcha... and then offer you the best price among all of them."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionButton, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            flex: "1",
                                            textAlign: "left",
                                            children: "Does Dexfin take any fees?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionIcon, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionPanel, {
                                pb: 4,
                                children: [
                                    "Dexfin takes 0 fee on swaps.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionButton, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            flex: "1",
                                            textAlign: "left",
                                            children: "Is it safe?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionIcon, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AccordionPanel, {
                                pb: 4,
                                children: [
                                    "Our aggregator uses the router contract of each aggregator, we don't use any contracts developed by us. Thus you inherit the same security you'd get by swapping directly from their UI instead of ours.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " We do add our referral code to swaps tho, so, for aggregators with revenue sharing, they will send us part of the fee they earn. This is not an extra fee, you'd be charged the same fee anyway, but now a small part of it is shared with DefiLlama. We also integrate aggregators with no fee sharing the best price, and in those cases we don't make any money"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Footer.tsx



const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().footer.withConfig({
    componentId: "sc-31aceed7-0"
})`
	color: #fff;
	padding: 20px;
	text-align: center;

	a {
		color: #fff;
		text-decoration: none;
		cursor: pointer;
	}
`;
const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "https://t.me/camelabs",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " Camelabs. All rights reserved."
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 1829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aM": () => (/* binding */ CrossIcon),
/* harmony export */   "yv": () => (/* binding */ GasIcon)
/* harmony export */ });
/* unused harmony export ArrowIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const GasIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        "data-prefix": "far",
        "data-icon": "gas-pump",
        role: "img",
        viewBox: "0 0 512 512",
        width: 16,
        height: 16,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "currentColor",
            d: "M493.3 107.3l-86.6-86.6c-3.1-3.1-8.2-3.1-11.3 0l-22.6 22.6c-3.1 3.1-3.1 8.2 0 11.3L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V48c0-26.5-21.5-48-48-48H80C53.5 0 32 21.5 32 48v416H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-24V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.7-33.3-18.7-45.3zM272 464H80V240h192v224zm0-272H80V48h192v144z"
        })
    });
const CrossIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
            fill: "currentColor"
        })
    });
};
const ArrowIcon = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Arrow Forward"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "48",
                d: "M268 112l144 144-144 144M392 256H100"
            })
        ]
    });
};



/***/ }),

/***/ 2138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3694);
/* harmony import */ var _components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9738);
/* harmony import */ var _Aggregator_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1811);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1829);








const Route = ({ name , price , toToken , setRoute , selected , index , gasUsd , amountUsd , airdrop , fromToken , amountFrom , lossPercent  })=>{
    const { isApproved  } = (0,_Aggregator_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useTokenApprove */ .Z)(fromToken?.address, price?.tokenApprovalAddress, amountFrom);
    if (!price.amountReturned || Number(gasUsd) === 0 && name !== "CowSwap") return null;
    const amount = +price.amountReturned / 10 ** +toToken?.decimals;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RouteWrapper, {
        onClick: setRoute,
        selected: selected,
        best: index === 0,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RouteRow, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: toToken?.logoURI,
                        alt: "",
                        style: {
                            marginRight: 4
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Theme__WEBPACK_IMPORTED_MODULE_5__/* .TYPE.heading */ .wD.heading, {
                        children: [
                            amount.toLocaleString(undefined, {
                                minimumFractionDigits: 3,
                                maximumFractionDigits: 3
                            }),
                            " ",
                            amountUsd && Number.isFinite(Number(amountUsd)) ? `($${Number(amountUsd).toLocaleString(undefined, {
                                minimumFractionDigits: 3,
                                maximumFractionDigits: 3
                            })})` : null
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginLeft: "auto",
                            display: "flex"
                        },
                        children: name === "CowSwap" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            content: "Gas is taken from output amount",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_7__/* .GasIcon */ .yv, {}),
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        marginLeft: 8
                                    },
                                    children: [
                                        "$",
                                        gasUsd.toLocaleString(undefined, {
                                            minimumFractionDigits: 3,
                                            maximumFractionDigits: 3
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons__WEBPACK_IMPORTED_MODULE_7__/* .GasIcon */ .yv, {}),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginLeft: 8
                                    },
                                    children: gasUsd === "Unknown" ? gasUsd : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            "$",
                                            gasUsd.toLocaleString(undefined, {
                                                minimumFractionDigits: 3,
                                                maximumFractionDigits: 3
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RouteRow, {
                children: [
                    toToken.symbol,
                    " via ",
                    name,
                    airdrop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        content: "This project has no token and might airdrop one in the future",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            style: {
                                marginLeft: 4
                            },
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.Gift, {
                                    width: 16,
                                    height: 16
                                })
                            ]
                        })
                    }) : null,
                    isApproved ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        content: "Token is approved for this aggregator.",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                marginLeft: 4
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.Unlock, {
                                width: 16,
                                height: 16
                            })
                        })
                    }) : null,
                    index === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginLeft: "auto",
                            display: "flex"
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                                colorScheme: "green",
                                children: "Best Route"
                            })
                        ]
                    }) : Number.isFinite(lossPercent) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginLeft: "auto",
                            display: "flex"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                            colorScheme: "red",
                            children: [
                                "-",
                                Math.abs(100 - lossPercent * 100).toFixed(2),
                                "%"
                            ]
                        })
                    }) : null
                ]
            })
        ]
    });
};
const RouteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-bc43b11d-0"
})`
	display: grid;
	grid-row-gap: 8px;
	margin-top: 16px;

	background-color: ${({ theme , selected  })=>theme.mode === "dark" ? selected ? " #161616;" : "#2d3039;" : selected ? " #bec1c7;" : " #dde3f3;"};
	border: ${({ theme  })=>theme.mode === "dark" ? "1px solid #373944;" : "1px solid #c6cae0;"};
	padding: 8px;
	border-radius: 8px;
	cursor: pointer;

	animation: swing-in-left-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
	@keyframes swing-in-left-fwd {
		0% {
			transform: rotateX(100deg);
			transform-origin: left;
			opacity: 0;
		}
		100% {
			transform: rotateX(0);
			transform-origin: left;
			opacity: 1;
		}
	}

	&:hover {
		background-color: ${({ theme  })=>theme.mode === "dark" ? "#161616;" : "#b7b7b7;;"};
	}
`;
const RouteRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-bc43b11d-1"
})`
	display: flex;

	img {
		width: 24px;
		height: 24px;
		aspect-ratio: 1;
		border-radius: 50%;
		margin-right: 0;
	}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);


/***/ }),

/***/ 9738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tooltip)
});

// UNUSED EXPORTS: Tooltip2

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "ariakit/tooltip"
const tooltip_namespaceObject = require("ariakit/tooltip");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Tooltip/index.tsx





const TooltipPopver = external_styled_components_default()(tooltip_namespaceObject.Tooltip).withConfig({
    componentId: "sc-6d67c26a-0"
})`
	font-size: 0.85rem;
	padding: 1rem;
	color: ${({ theme  })=>theme.mode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(204, 10%, 10%)"};
	background: ${({ theme  })=>theme.mode === "dark" ? "hsl(204, 3%, 12%)" : "hsl(204, 20%, 100%)"};
	border: 1px solid ${({ theme  })=>theme.mode === "dark" ? "hsl(204, 3%, 32%)" : "hsl(204, 20%, 88%)"};
	border-radius: 8px;
	filter: ${({ theme  })=>theme.mode === "dark" ? "drop-shadow(0 4px 6px rgba(0, 0, 0, 40%))" : "drop-shadow(0 4px 6px rgba(0, 0, 0, 15%))"};
	max-width: 228px;
`;
const TooltipAnchor2 = external_styled_components_default()(tooltip_namespaceObject.TooltipAnchor).withConfig({
    componentId: "sc-6d67c26a-1"
})`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex-shrink: 0;

	a {
		display: flex;
	}
`;
const Popover2 = external_styled_components_default()(TooltipPopver).withConfig({
    componentId: "sc-6d67c26a-2"
})`
	padding: 12px;
`;
function Tooltip({ content , as , href , shallow , onClick , children , ...props }) {
    const tooltip = (0,tooltip_namespaceObject.useTooltipState)();
    if (!content || content === "") return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
    const triggerProps = {
        ...onClick && {
            onClick
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(tooltip_namespaceObject.TooltipAnchor, {
                state: tooltip,
                as: as || (href ? "div" : "button"),
                className: "tooltip-trigger",
                ...triggerProps,
                children: href ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: href,
                    shallow: shallow,
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: children
                    })
                }) : children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TooltipPopver, {
                state: tooltip,
                ...props,
                children: content
            })
        ]
    });
}
function Tooltip2({ content , children , ...props }) {
    const tooltip = useTooltipState();
    if (!content || content === "") return /*#__PURE__*/ _jsx(_Fragment, {
        children: children
    });
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(TooltipAnchor2, {
                state: tooltip,
                children: children
            }),
            /*#__PURE__*/ _jsx(Popover2, {
                state: tooltip,
                ...props,
                children: content
            })
        ]
    });
}


/***/ }),

/***/ 5773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ TransactionModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);




const TransactionModal = ({ open , setOpen , link  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        isCentered: true,
        motionPreset: "slideInBottom",
        closeOnOverlayClick: true,
        isOpen: open,
        onClose: ()=>setOpen(false),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                        display: "flex",
                        gap: "8px",
                        flexDir: "column",
                        alignItems: "center",
                        marginY: "4rem",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "80",
                                height: "80",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "0.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                        points: "16 12 12 8 8 12"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                        x1: "12",
                                        y1: "16",
                                        x2: "12",
                                        y2: "8"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                as: "h1",
                                fontSize: "xl",
                                fontWeight: "600",
                                children: "Transaction Submitted"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        href: link,
                        isExternal: true,
                        fontSize: "lg",
                        textAlign: "center",
                        padding: "6px 1rem",
                        borderRadius: "0.375rem",
                        bg: "#a2cdff",
                        margin: "0 1rem 1rem",
                        color: "black",
                        _hover: {
                            textDecoration: "none"
                        },
                        children: [
                            "View on explorer ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ExternalLinkIcon, {
                                mx: "2px"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Aggregator),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Aggregator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5261);
/* harmony import */ var _components_Aggregator_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4462);
/* harmony import */ var _components_Aggregator_getTokenList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3465);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Aggregator_ConnectButton__WEBPACK_IMPORTED_MODULE_4__, _components_Aggregator__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Aggregator_ConnectButton__WEBPACK_IMPORTED_MODULE_4__, _components_Aggregator__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function getStaticProps() {
    return (0,_components_Aggregator_getTokenList__WEBPACK_IMPORTED_MODULE_2__/* .getTokenList */ .H)();
}
function Aggregator(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: `Shibx Swap`,
        defaultSEO: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Aggregator_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Aggregator__WEBPACK_IMPORTED_MODULE_5__/* .AggregatorContainer */ .S, {
                tokenlist: props.tokenlist
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTokenBalances)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getBalances = async (address)=>{
    if (!address) return {};
    const balances = await fetch(`https://rifcoe52qb.execute-api.eu-central-1.amazonaws.com/balances/${address}/tokens`).then((r)=>r.json());
    const balancesByChain = balances.chains.reduce((acc, chainBalances)=>({
            ...acc,
            [chainBalances.chainId]: chainBalances.balances.reduce((inAcc, token)=>({
                    ...inAcc,
                    [token.address.toLowerCase()]: token
                }))
        }), {});
    return balancesByChain;
};
const useTokenBalances = (address)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "balances",
        address
    ], ()=>getBalances(address), {
        refetchInterval: 20000
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,257,568,305,846], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();