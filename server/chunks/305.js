"use strict";
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 8305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FR": () => (/* binding */ Updater),
  "ZP": () => (/* binding */ Provider),
  "m$": () => (/* binding */ useDarkModeManager)
});

// UNUSED EXPORTS: DARK_MODE, useLocalStorageContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/index.ts


const useIsClient = ()=>{
    const { 0: isClient , 1: setIsClient  } = (0,external_react_.useState)(false);
    const windowType = "undefined";
    (0,external_react_.useEffect)(()=>{
        if (windowType !== "undefined") {
            setIsClient(true);
        }
    }, [
        windowType
    ]);
    return isClient;
};

;// CONCATENATED MODULE: ./src/contexts/LocalStorage.tsx



const DEFILLAMA = "DEFILLAMA";
const DARK_MODE = "DARK_MODE";
const UPDATABLE_KEYS = [
    DARK_MODE
];
const UPDATE_KEY = "UPDATE_KEY";
const LocalStorageContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
function useLocalStorageContext() {
    return (0,external_react_.useContext)(LocalStorageContext);
}
function reducer(state, { type , payload  }) {
    switch(type){
        case UPDATE_KEY:
            {
                const { key , value  } = payload;
                if (!UPDATABLE_KEYS.some((k)=>k === key)) {
                    throw Error(`Unexpected key in LocalStorageContext reducer: '${key}'.`);
                } else {
                    return {
                        ...state,
                        [key]: value
                    };
                }
            }
        default:
            {
                throw Error(`Unexpected action type in LocalStorageContext reducer: '${type}'.`);
            }
    }
}
function init() {
    const defaultLocalStorage = {
        [DARK_MODE]: true
    };
    try {
        const parsed = JSON.parse(window.localStorage.getItem(DEFILLAMA));
        if (!parsed) {
            return defaultLocalStorage;
        } else {
            return {
                ...defaultLocalStorage,
                ...parsed
            };
        }
    } catch  {
        return defaultLocalStorage;
    }
}
function Provider({ children  }) {
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, undefined, init);
    const updateKey = (0,external_react_.useCallback)((key, value)=>{
        dispatch({
            type: UPDATE_KEY,
            payload: {
                key,
                value
            }
        });
    }, []);
    const values = (0,external_react_.useMemo)(()=>[
            {
                ...state
            },
            {
                updateKey
            }
        ], [
        state,
        updateKey
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(LocalStorageContext.Provider, {
        value: values,
        children: children
    });
}
function Updater() {
    const [state] = useLocalStorageContext();
    (0,external_react_.useEffect)(()=>{
        window.localStorage.setItem(DEFILLAMA, JSON.stringify(state));
    });
    return null;
}
function useDarkModeManager() {
    const [state, { updateKey  }] = useLocalStorageContext();
    const isClient = useIsClient();
    let darkMode = state[DARK_MODE];
    let isDarkMode = isClient ? darkMode : true;
    const toggleDarkMode = (0,external_react_.useCallback)((value)=>{
        updateKey(DARK_MODE, value === false || value === true ? value : !isDarkMode);
    }, [
        updateKey,
        isDarkMode
    ]);
    return [
        isDarkMode,
        toggleDarkMode
    ];
}


/***/ })

};
;