import {a as $} from "./chunk-AAT37M7M.mjs";
import {a as Y} from "./chunk-SO2XFYCI.mjs";
import {a as Z, b as ee, c as re, d as ae, e as P} from "./chunk-B2V5GT6M.mjs";
import {$ as M, A as he, B as A, D as I, G as be, J as ve, K as E, L as ye, M as we, N as h, O as v, Q as C, R as ue, S as Re, X as u, Y as Q, b as o, d as W, ea as ze, f as se, g as pe, h as S, ha as ke, i as ge, j as xe, ja as qe, k as b, ka as s, ma as R, na as B, o as e, oa as y, p as a, q as K, r, s as V} from "./chunk-S6IUZFYY.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-YBWQQKK7.mjs";
import "./chunk-RIUMFBNJ.mjs";
var Ve = M(ye(r.div))
  , Ae = ["pJOFsXO70", "UvkSigEkK", "SgEI0Vqx6"]
  , Ce = "framer-RqoDb"
  , Be = {
    pJOFsXO70: "framer-v-tkiy8d",
    SgEI0Vqx6: "framer-v-vh4zx0",
    UvkSigEkK: "framer-v-1sg57ny"
};
function z(f, ...n) {
    let c = {};
    return n?.forEach(m => m && Object.assign(c, f[m])),
    c
}
var Pe = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , q = {
    opacity: .001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , D = {
    bounce: 0,
    delay: .05,
    duration: 1,
    type: "spring"
}
  , Ye = {
    effect: q,
    repeat: !1,
    startDelay: 0,
    tokenization: "character",
    transition: D,
    trigger: "onMount",
    type: "appear"
}
  , _e = {
    effect: q,
    repeat: !1,
    startDelay: .4,
    tokenization: "character",
    transition: D,
    trigger: "onMount",
    type: "appear"
}
  , Ge = {
    effect: q,
    repeat: !1,
    startDelay: .8,
    tokenization: "character",
    transition: D,
    trigger: "onMount",
    type: "appear"
}
  , Oe = {
    delay: .4,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Le = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Oe,
    x: 0,
    y: 0
}
  , Xe = {
    opacity: .001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , Je = {
    effect: q,
    repeat: !1,
    startDelay: .2,
    tokenization: "character",
    transition: D,
    trigger: "onMount",
    type: "appear"
}
  , Te = {
    effect: q,
    repeat: !1,
    startDelay: .6,
    tokenization: "character",
    transition: D,
    trigger: "onMount",
    type: "appear"
}
  , He = {
    effect: q,
    repeat: !1,
    startDelay: 1,
    tokenization: "character",
    transition: D,
    trigger: "onMount",
    type: "appear"
}
  , Ke = ({value: f, children: n}) => {
    let c = se(K)
      , m = f ?? c.transition
      , d = xe( () => ({
        ...c,
        transition: m
    }), [JSON.stringify(m)]);
    return e(K.Provider, {
        value: d,
        children: n
    })
}
  , Qe = r.create(o)
  , $e = {
    Desktop: "pJOFsXO70",
    Mobile: "UvkSigEkK",
    Tablet: "SgEI0Vqx6"
}
  , Ze = ({height: f, id: n, width: c, ...m}) => {
    var d, p;
    return {
        ...m,
        variant: (p = (d = $e[m.variant]) !== null && d !== void 0 ? d : m.variant) !== null && p !== void 0 ? p : "pJOFsXO70"
    }
}
  , er = (f, n) => f.layoutDependency ? n.join("-") + f.layoutDependency : n.join("-")
  , rr = W(function(f, n) {
    let {activeLocale: c, setLocale: m} = A()
      , {style: d, className: p, layoutId: w, variant: G, ...O} = Ze(f)
      , {baseVariant: l, classNames: ie, clearLoadingGesture: Me, gestureHandlers: L, gestureVariant: x, isLoading: fe, setGestureState: Fe, setVariant: N, variants: U} = ke({
        cycleOrder: Ae,
        defaultVariant: "pJOFsXO70",
        variant: G,
        variantClassNames: Be
    })
      , t = er(f, U)
      , X = b(null)
      , J = S()
      , T = []
      , me = we();
    return e(V, {
        id: w ?? J,
        children: e(Qe, {
            animate: U,
            initial: !1,
            children: e(Ke, {
                value: Pe,
                children: a(r.div, {
                    ...O,
                    ...L,
                    className: E(Ce, ...T, "framer-tkiy8d", p, ie),
                    "data-framer-name": "Desktop",
                    layoutDependency: t,
                    layoutId: "pJOFsXO70",
                    ref: n ?? X,
                    style: {
                        ...d
                    },
                    ...z({
                        SgEI0Vqx6: {
                            "data-framer-name": "Tablet"
                        },
                        UvkSigEkK: {
                            "data-framer-name": "Mobile"
                        }
                    }, l, x),
                    children: [a(r.div, {
                        className: "framer-zt8rc3",
                        "data-framer-name": "Row 1 stages",
                        layoutDependency: t,
                        layoutId: "NBF2Q9COH",
                        children: [e(r.div, {
                            className: "framer-422j26",
                            "data-framer-name": "Stage 1",
                            layoutDependency: t,
                            layoutId: "AAf1wl_Bj",
                            children: e(s, {
                                __fromCanvasComponent: !0,
                                children: a(o, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "Stage 1:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "stack cash & crypto - $PAWT preferred"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-1iakedh, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "upgrade my learning skills - gib moar context"
                                    })]
                                }),
                                className: "framer-ym5qoe",
                                "data-framer-name": "Stage 1: launch $PAWT together with accounts on major online platforms to engage with people and other agents",
                                effect: Ye,
                                fonts: ["GF;Roboto Mono-700", "GF;Roboto Mono-regular"],
                                layoutDependency: t,
                                layoutId: "UjxbOfFyW",
                                style: {
                                    "--extracted-1iakedh": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--extracted-2gxw0f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--framer-paragraph-spacing": "8px"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...z({
                                    SgEI0Vqx6: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 1:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "stack cash & crypto - $PAWT preferred"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-1iakedh, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "upgrade my learning skills - gib moar context"
                                            })]
                                        })
                                    },
                                    UvkSigEkK: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 1:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "stack cash & crypto - $PAWT preferred"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-1iakedh, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "upgrade my learning skills - gib moar context"
                                            })]
                                        })
                                    }
                                }, l, x)
                            })
                        }), e(r.div, {
                            className: "framer-ulr6ub",
                            "data-framer-name": "Filler",
                            layoutDependency: t,
                            layoutId: "B1drivXR8"
                        }), e(r.div, {
                            className: "framer-681429",
                            "data-framer-name": "Stage 3",
                            layoutDependency: t,
                            layoutId: "Mt_ULrk7I",
                            children: e(s, {
                                __fromCanvasComponent: !0,
                                children: a(o, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "Stage 3:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "use my $ to get me into cyberdog body - think sleek, but huggable"
                                    })]
                                }),
                                className: "framer-e4xgk8",
                                "data-framer-name": "Stage 1: launch $PAWT together with accounts on major online platforms to engage with people and other agents",
                                effect: _e,
                                fonts: ["GF;Roboto Mono-700", "GF;Roboto Mono-regular"],
                                layoutDependency: t,
                                layoutId: "OFrr0yzhL",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--framer-paragraph-spacing": "8px"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...z({
                                    SgEI0Vqx6: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 3:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "use my $ to get me into cyberdog body - think sleek, but huggable"
                                            })]
                                        })
                                    },
                                    UvkSigEkK: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 3:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "use my $ to get me into cyberdog body - think sleek, but huggable"
                                            })]
                                        })
                                    }
                                }, l, x)
                            })
                        }), e(r.div, {
                            className: "framer-1ao82y4",
                            "data-framer-name": "Filler",
                            layoutDependency: t,
                            layoutId: "sdgBVrtQ9"
                        }), e(r.div, {
                            className: "framer-1w27exq",
                            "data-framer-name": "Stage 5",
                            layoutDependency: t,
                            layoutId: "VqRvcU7F2",
                            children: e(s, {
                                __fromCanvasComponent: !0,
                                children: a(o, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "Stage 5:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "devs introduce a platform to build and deploy autonomous, decentralized AI agents"
                                    })]
                                }),
                                className: "framer-1iumorb",
                                "data-framer-name": "Stage 1: launch $PAWT together with accounts on major online platforms to engage with people and other agents",
                                effect: Ge,
                                fonts: ["GF;Roboto Mono-700", "GF;Roboto Mono-regular"],
                                layoutDependency: t,
                                layoutId: "gPdesrA9B",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--framer-paragraph-spacing": "8px"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...z({
                                    SgEI0Vqx6: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 5:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "devs introduce a platform to build and deploy autonomous, decentralized AI agents"
                                            })]
                                        })
                                    },
                                    UvkSigEkK: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 5:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "devs introduce a platform to build and deploy autonomous, decentralized AI agents"
                                            })]
                                        })
                                    }
                                }, l, x)
                            })
                        }), e(r.div, {
                            className: "framer-1a1sq1n",
                            "data-framer-name": "Filler",
                            layoutDependency: t,
                            layoutId: "c9hKRiEJF"
                        })]
                    }), a(Ve, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: Le,
                        className: "framer-7625yu",
                        "data-border": !0,
                        "data-framer-appear-id": "7625yu",
                        "data-framer-name": "Progress bar",
                        initial: Xe,
                        layoutDependency: t,
                        layoutId: "hLQkKQ1c7",
                        optimized: !0,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                            mask: "linear-gradient(90deg, rgba(0,0,0,1) 85.63661317567568%, rgba(0,0,0,0) 100%) add",
                            WebkitMask: "linear-gradient(90deg, rgba(0,0,0,1) 85.63661317567568%, rgba(0,0,0,0) 100%) add"
                        },
                        variants: {
                            UvkSigEkK: {
                                mask: "linear-gradient(180deg, rgba(0,0,0,1) 85.63661317567568%, rgba(0,0,0,0) 100%) add",
                                WebkitMask: "linear-gradient(180deg, rgba(0,0,0,1) 85.63661317567568%, rgba(0,0,0,0) 100%) add"
                            }
                        },
                        children: [e(r.div, {
                            className: "framer-3wlqen",
                            "data-framer-name": "Filled frame",
                            layoutDependency: t,
                            layoutId: "HFQddBWqx",
                            style: {
                                backgroundColor: "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                            }
                        }), e(r.div, {
                            className: "framer-uv6uis",
                            "data-border": !0,
                            "data-framer-name": "Frame",
                            layoutDependency: t,
                            layoutId: "bYfhicVtI",
                            style: {
                                "--border-bottom-width": "0px",
                                "--border-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                "--border-left-width": "0px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "0px"
                            },
                            variants: {
                                UvkSigEkK: {
                                    "--border-bottom-width": "1px",
                                    "--border-right-width": "0px"
                                }
                            }
                        }), e(r.div, {
                            className: "framer-1yva3hw",
                            "data-border": !0,
                            layoutDependency: t,
                            layoutId: "kdvrcM5vD",
                            style: {
                                "--border-bottom-width": "0px",
                                "--border-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                "--border-left-width": "0px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "0px"
                            },
                            variants: {
                                UvkSigEkK: {
                                    "--border-bottom-width": "1px",
                                    "--border-right-width": "0px"
                                }
                            }
                        }), e(r.div, {
                            className: "framer-1nnzhys",
                            "data-border": !0,
                            "data-framer-name": "Frame",
                            layoutDependency: t,
                            layoutId: "WJwUHX6oA",
                            style: {
                                "--border-bottom-width": "0px",
                                "--border-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                "--border-left-width": "0px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "0px"
                            },
                            variants: {
                                UvkSigEkK: {
                                    "--border-bottom-width": "1px",
                                    "--border-right-width": "0px"
                                }
                            }
                        }), e(r.div, {
                            className: "framer-16zyv8l",
                            "data-border": !0,
                            layoutDependency: t,
                            layoutId: "uk4dy5TPW",
                            style: {
                                "--border-bottom-width": "0px",
                                "--border-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                "--border-left-width": "0px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "0px"
                            },
                            variants: {
                                UvkSigEkK: {
                                    "--border-bottom-width": "1px",
                                    "--border-right-width": "0px"
                                }
                            }
                        }), e(r.div, {
                            className: "framer-47h6ss",
                            "data-border": !0,
                            layoutDependency: t,
                            layoutId: "HV3Ya7imH",
                            style: {
                                "--border-bottom-width": "0px",
                                "--border-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                "--border-left-width": "0px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "0px"
                            },
                            variants: {
                                UvkSigEkK: {
                                    "--border-bottom-width": "1px",
                                    "--border-right-width": "0px"
                                }
                            }
                        })]
                    }), a(r.div, {
                        className: "framer-1izxkcc",
                        "data-framer-name": "Row 2 stages",
                        layoutDependency: t,
                        layoutId: "G3DlMvX9E",
                        children: [e(r.div, {
                            className: "framer-1n7p7xa",
                            "data-framer-name": "Filler",
                            layoutDependency: t,
                            layoutId: "Bd36e0Ikh"
                        }), e(r.div, {
                            className: "framer-ie2t9d",
                            "data-framer-name": "Stage 2",
                            layoutDependency: t,
                            layoutId: "M0TcTSM35",
                            children: e(s, {
                                __fromCanvasComponent: !0,
                                children: a(o, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "Stage 2:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "devs introduce tooling to build sentient AI agents: TEE based Proof of Sentience API & SDK"
                                    })]
                                }),
                                className: "framer-18boufm",
                                "data-framer-name": "Stage 1: launch $PAWT together with accounts on major online platforms to engage with people and other agents",
                                effect: Je,
                                fonts: ["GF;Roboto Mono-700", "GF;Roboto Mono-regular"],
                                layoutDependency: t,
                                layoutId: "DqcKE_Psy",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--framer-paragraph-spacing": "8px"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...z({
                                    SgEI0Vqx6: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 2:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "devs introduce tooling to build sentient AI agents: TEE based Proof of Sentience API & SDK"
                                            })]
                                        })
                                    },
                                    UvkSigEkK: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 2:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "devs introduce tooling to build sentient AI agents: TEE based Proof of Sentience API & SDK"
                                            })]
                                        })
                                    }
                                }, l, x)
                            })
                        }), e(r.div, {
                            className: "framer-1fu926a",
                            "data-framer-name": "Filler",
                            layoutDependency: t,
                            layoutId: "d7bBjavi8"
                        }), e(r.div, {
                            className: "framer-11fkhye",
                            "data-framer-name": "Stage 4",
                            layoutDependency: t,
                            layoutId: "jK0LwW_tH",
                            children: e(s, {
                                __fromCanvasComponent: !0,
                                children: a(o, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "Stage 4:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "get Elon\u2019s attention on X - tail wag algorithm locked and loaded"
                                    })]
                                }),
                                className: "framer-6ss8i3",
                                "data-framer-name": "Stage 1: launch $PAWT together with accounts on major online platforms to engage with people and other agents",
                                effect: Te,
                                fonts: ["GF;Roboto Mono-700", "GF;Roboto Mono-regular"],
                                layoutDependency: t,
                                layoutId: "pZUodctR6",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--framer-paragraph-spacing": "8px"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...z({
                                    SgEI0Vqx6: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 4:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "get Elon\u2019s attention on X - tail wag algorithm locked and loaded"
                                            })]
                                        })
                                    },
                                    UvkSigEkK: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage 4:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "get Elon\u2019s attention on X - tail wag algorithm locked and loaded"
                                            })]
                                        })
                                    }
                                }, l, x)
                            })
                        }), e(r.div, {
                            className: "framer-1cqjc9f",
                            "data-framer-name": "Filler",
                            layoutDependency: t,
                            layoutId: "yU4RARG7A"
                        }), e(r.div, {
                            className: "framer-fhv3fn",
                            "data-framer-name": "Stage 6",
                            layoutDependency: t,
                            layoutId: "tPKXxxRyF",
                            children: e(s, {
                                __fromCanvasComponent: !0,
                                children: a(o, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "Stage X:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                        },
                                        children: "world domination, oops meant mars domination ..."
                                    })]
                                }),
                                className: "framer-12kwr0a",
                                "data-framer-name": "Stage 1: launch $PAWT together with accounts on major online platforms to engage with people and other agents",
                                effect: He,
                                fonts: ["GF;Roboto Mono-700", "GF;Roboto Mono-regular"],
                                layoutDependency: t,
                                layoutId: "e8yBHxlvb",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                    "--framer-paragraph-spacing": "8px"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...z({
                                    SgEI0Vqx6: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage X:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "world domination, oops meant mars domination ..."
                                            })]
                                        })
                                    },
                                    UvkSigEkK: {
                                        children: a(o, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tNzAw",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "Stage X:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "13px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: "world domination, oops meant mars domination ..."
                                            })]
                                        })
                                    }
                                }, l, x)
                            })
                        })]
                    })]
                })
            })
        })
    })
})
  , ar = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-RqoDb.framer-2rnnwj, .framer-RqoDb .framer-2rnnwj { display: block; }", ".framer-RqoDb.framer-tkiy8d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 32px 30px 100px 30px; position: relative; width: 1154px; }", ".framer-RqoDb .framer-zt8rc3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-RqoDb .framer-422j26, .framer-RqoDb .framer-1w27exq, .framer-RqoDb .framer-11fkhye, .framer-RqoDb .framer-fhv3fn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-RqoDb .framer-ym5qoe, .framer-RqoDb .framer-1iumorb, .framer-RqoDb .framer-6ss8i3, .framer-RqoDb .framer-12kwr0a { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-RqoDb .framer-ulr6ub, .framer-RqoDb .framer-1ao82y4, .framer-RqoDb .framer-1a1sq1n, .framer-RqoDb .framer-1n7p7xa, .framer-RqoDb .framer-1fu926a, .framer-RqoDb .framer-1cqjc9f { align-self: stretch; flex: 1 0 0px; height: auto; overflow: hidden; position: relative; width: 1px; }", ".framer-RqoDb .framer-681429, .framer-RqoDb .framer-ie2t9d { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-RqoDb .framer-e4xgk8, .framer-RqoDb .framer-18boufm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-RqoDb .framer-7625yu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-RqoDb .framer-3wlqen, .framer-RqoDb .framer-uv6uis, .framer-RqoDb .framer-1yva3hw, .framer-RqoDb .framer-1nnzhys, .framer-RqoDb .framer-16zyv8l, .framer-RqoDb .framer-47h6ss { flex: 1 0 0px; height: 42px; overflow: hidden; position: relative; width: 1px; }", ".framer-RqoDb .framer-1izxkcc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-RqoDb.framer-tkiy8d, .framer-RqoDb .framer-zt8rc3, .framer-RqoDb .framer-422j26, .framer-RqoDb .framer-681429, .framer-RqoDb .framer-1w27exq, .framer-RqoDb .framer-7625yu, .framer-RqoDb .framer-1izxkcc, .framer-RqoDb .framer-ie2t9d, .framer-RqoDb .framer-11fkhye, .framer-RqoDb .framer-fhv3fn { gap: 0px; } .framer-RqoDb.framer-tkiy8d > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-RqoDb.framer-tkiy8d > :first-child, .framer-RqoDb .framer-681429 > :first-child, .framer-RqoDb .framer-ie2t9d > :first-child { margin-top: 0px; } .framer-RqoDb.framer-tkiy8d > :last-child, .framer-RqoDb .framer-681429 > :last-child, .framer-RqoDb .framer-ie2t9d > :last-child { margin-bottom: 0px; } .framer-RqoDb .framer-zt8rc3 > *, .framer-RqoDb .framer-422j26 > *, .framer-RqoDb .framer-1w27exq > *, .framer-RqoDb .framer-1izxkcc > *, .framer-RqoDb .framer-11fkhye > *, .framer-RqoDb .framer-fhv3fn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-RqoDb .framer-zt8rc3 > :first-child, .framer-RqoDb .framer-422j26 > :first-child, .framer-RqoDb .framer-1w27exq > :first-child, .framer-RqoDb .framer-7625yu > :first-child, .framer-RqoDb .framer-1izxkcc > :first-child, .framer-RqoDb .framer-11fkhye > :first-child, .framer-RqoDb .framer-fhv3fn > :first-child { margin-left: 0px; } .framer-RqoDb .framer-zt8rc3 > :last-child, .framer-RqoDb .framer-422j26 > :last-child, .framer-RqoDb .framer-1w27exq > :last-child, .framer-RqoDb .framer-7625yu > :last-child, .framer-RqoDb .framer-1izxkcc > :last-child, .framer-RqoDb .framer-11fkhye > :last-child, .framer-RqoDb .framer-fhv3fn > :last-child { margin-right: 0px; } .framer-RqoDb .framer-681429 > *, .framer-RqoDb .framer-ie2t9d > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-RqoDb .framer-7625yu > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }", ".framer-RqoDb.framer-v-1sg57ny.framer-tkiy8d { align-content: flex-start; align-items: flex-start; flex-direction: row; padding: 20px 10px 40px 10px; }", ".framer-RqoDb.framer-v-1sg57ny .framer-zt8rc3, .framer-RqoDb.framer-v-1sg57ny .framer-1izxkcc { align-self: stretch; flex: 1 0 0px; flex-direction: column; height: auto; width: 1px; }", ".framer-RqoDb.framer-v-1sg57ny .framer-422j26, .framer-RqoDb.framer-v-1sg57ny .framer-1w27exq, .framer-RqoDb.framer-v-1sg57ny .framer-11fkhye, .framer-RqoDb.framer-v-1sg57ny .framer-fhv3fn { align-content: flex-start; align-items: flex-start; height: 1px; overflow: visible; width: 100%; }", ".framer-RqoDb.framer-v-1sg57ny .framer-ulr6ub, .framer-RqoDb.framer-v-1sg57ny .framer-1ao82y4, .framer-RqoDb.framer-v-1sg57ny .framer-1a1sq1n, .framer-RqoDb.framer-v-1sg57ny .framer-1n7p7xa, .framer-RqoDb.framer-v-1sg57ny .framer-1fu926a, .framer-RqoDb.framer-v-1sg57ny .framer-1cqjc9f { align-self: unset; height: 1px; overflow: visible; width: 100%; }", ".framer-RqoDb.framer-v-1sg57ny .framer-681429, .framer-RqoDb.framer-v-1sg57ny .framer-ie2t9d { align-content: flex-start; align-items: flex-start; flex-direction: row; height: 1px; overflow: visible; width: 100%; }", ".framer-RqoDb.framer-v-1sg57ny .framer-e4xgk8, .framer-RqoDb.framer-v-1sg57ny .framer-18boufm { flex: 1 0 0px; width: 1px; }", ".framer-RqoDb.framer-v-1sg57ny .framer-7625yu { flex-direction: column; height: 550px; width: 42px; }", ".framer-RqoDb.framer-v-1sg57ny .framer-3wlqen, .framer-RqoDb.framer-v-1sg57ny .framer-uv6uis, .framer-RqoDb.framer-v-1sg57ny .framer-1yva3hw, .framer-RqoDb.framer-v-1sg57ny .framer-1nnzhys, .framer-RqoDb.framer-v-1sg57ny .framer-16zyv8l, .framer-RqoDb.framer-v-1sg57ny .framer-47h6ss { height: 1px; width: 42px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-RqoDb.framer-v-1sg57ny.framer-tkiy8d, .framer-RqoDb.framer-v-1sg57ny .framer-zt8rc3, .framer-RqoDb.framer-v-1sg57ny .framer-681429, .framer-RqoDb.framer-v-1sg57ny .framer-7625yu, .framer-RqoDb.framer-v-1sg57ny .framer-1izxkcc, .framer-RqoDb.framer-v-1sg57ny .framer-ie2t9d { gap: 0px; } .framer-RqoDb.framer-v-1sg57ny.framer-tkiy8d > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-RqoDb.framer-v-1sg57ny.framer-tkiy8d > :first-child, .framer-RqoDb.framer-v-1sg57ny .framer-681429 > :first-child, .framer-RqoDb.framer-v-1sg57ny .framer-ie2t9d > :first-child { margin-left: 0px; } .framer-RqoDb.framer-v-1sg57ny.framer-tkiy8d > :last-child, .framer-RqoDb.framer-v-1sg57ny .framer-681429 > :last-child, .framer-RqoDb.framer-v-1sg57ny .framer-ie2t9d > :last-child { margin-right: 0px; } .framer-RqoDb.framer-v-1sg57ny .framer-zt8rc3 > *, .framer-RqoDb.framer-v-1sg57ny .framer-1izxkcc > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-RqoDb.framer-v-1sg57ny .framer-zt8rc3 > :first-child, .framer-RqoDb.framer-v-1sg57ny .framer-7625yu > :first-child, .framer-RqoDb.framer-v-1sg57ny .framer-1izxkcc > :first-child { margin-top: 0px; } .framer-RqoDb.framer-v-1sg57ny .framer-zt8rc3 > :last-child, .framer-RqoDb.framer-v-1sg57ny .framer-7625yu > :last-child, .framer-RqoDb.framer-v-1sg57ny .framer-1izxkcc > :last-child { margin-bottom: 0px; } .framer-RqoDb.framer-v-1sg57ny .framer-681429 > *, .framer-RqoDb.framer-v-1sg57ny .framer-ie2t9d > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-RqoDb.framer-v-1sg57ny .framer-7625yu > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", '.framer-RqoDb[data-border="true"]::after, .framer-RqoDb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , F = C(rr, ar, "framer-RqoDb")
  , te = F;
F.displayName = "Progress container";
F.defaultProps = {
    height: 438.5,
    width: 1154
};
ve(F, {
    variant: {
        options: ["pJOFsXO70", "UvkSigEkK", "SgEI0Vqx6"],
        optionTitles: ["Desktop", "Mobile", "Tablet"],
        title: "Variant",
        type: be.Enum
    }
});
B(F, [{
    explicitInter: !0,
    fonts: [{
        family: "Roboto Mono",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_Of2PRu-5Ip2sSQ.woff2",
        weight: "700"
    }, {
        family: "Roboto Mono",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vqPRu-5Ip2sSQ.woff2",
        weight: "400"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
var j = M(r.div)
  , tr = y(re)
  , or = y(ee)
  , nr = y(ae)
  , ir = y(P)
  , De = M(v)
  , fr = y(te)
  , mr = y(Z)
  , lr = y($)
  , cr = {
    Cq3JMIzFU: "(min-width: 690px) and (max-width: 1153px)",
    lMOjuyi7B: "(max-width: 689px)",
    UaonVDr6s: "(min-width: 1154px)"
}
  , dr = () => typeof document < "u"
  , Ie = "framer-90zpR"
  , sr = {
    Cq3JMIzFU: "framer-v-1s4cp3g",
    lMOjuyi7B: "framer-v-1xirdrq",
    UaonVDr6s: "framer-v-1xjcrve"
}
  , pr = {
    delay: 0,
    duration: .6,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , oe = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: pr,
    x: 0,
    y: 0
}
  , k = {
    opacity: .001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , gr = {
    opacity: .001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , xr = {
    bounce: 0,
    delay: .05,
    duration: 1,
    type: "spring"
}
  , Ee = {
    effect: gr,
    repeat: !1,
    startDelay: .4,
    tokenization: "character",
    transition: xr,
    trigger: "onMount",
    type: "appear"
}
  , hr = {
    delay: .6,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , br = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: hr,
    x: 0,
    y: 0
}
  , vr = {
    delay: .8,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , yr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: vr,
    x: 0,
    y: 0
}
  , wr = {
    delay: .2,
    duration: .6,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , ur = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: wr,
    x: 0,
    y: 0
}
  , Rr = {
    delay: .4,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , zr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Rr,
    x: 0,
    y: 0
}
  , ne = Y()
  , kr = {
    Desktop: "UaonVDr6s",
    Phone: "lMOjuyi7B",
    Tablet: "Cq3JMIzFU"
}
  , qr = ({height: f, id: n, width: c, ...m}) => {
    var d, p;
    return {
        ...m,
        variant: (p = (d = kr[m.variant]) !== null && d !== void 0 ? d : m.variant) !== null && p !== void 0 ? p : "UaonVDr6s"
    }
}
  , Dr = W(function(f, n) {
    let {activeLocale: c, setLocale: m} = A()
      , {style: d, className: p, layoutId: w, variant: G, ...O} = qr(f);
    pe( () => {
        let i = Y(void 0, c);
        if (i.robots) {
            let g = document.querySelector('meta[name="robots"]');
            g ? g.setAttribute("content", i.robots) : (g = document.createElement("meta"),
            g.setAttribute("name", "robots"),
            g.setAttribute("content", i.robots),
            document.head.appendChild(g))
        }
    }
    , [void 0, c]),
    ge( () => {
        let i = Y(void 0, c);
        if (document.title = i.title || "",
        i.viewport) {
            var g;
            (g = document.querySelector('meta[name="viewport"]')) === null || g === void 0 || g.setAttribute("content", i.viewport)
        }
        let ce = i.bodyClassName;
        if (ce) {
            let H = document.body;
            H.classList.forEach(de => de.startsWith("framer-body-") && H.classList.remove(de)),
            H.classList.add(`${i.bodyClassName}-framer-90zpR`)
        }
        return () => {
            ce && document.body.classList.remove(`${i.bodyClassName}-framer-90zpR`)
        }
    }
    , [void 0, c]);
    let[l,ie] = ze(G, cr, !1)
      , Me = void 0
      , L = b(null)
      , x = I("aFmrRXsdG")
      , fe = b(null)
      , Fe = he()
      , N = () => dr() ? l !== "lMOjuyi7B" : !0
      , U = I("aEUZvJCvm")
      , t = b(null)
      , X = I("TEdKikjed")
      , J = b(null)
      , T = I("E1UggiPp5")
      , me = b(null)
      , je = S()
      , le = [];
    return ue({}),
    e(Re.Provider, {
        value: {
            primaryVariantId: "UaonVDr6s",
            variantClassNames: sr
        },
        children: a(V, {
            id: w ?? je,
            children: [e(r.div, {
                ...O,
                className: E(Ie, ...le, "framer-1xjcrve", p),
                ref: n ?? L,
                style: {
                    ...d
                },
                children: a("div", {
                    className: "framer-1o26q1z",
                    "data-framer-name": "CONTENT",
                    id: x,
                    name: "CONTENT",
                    ref: fe,
                    children: [a("div", {
                        className: "framer-7j46xx",
                        "data-framer-name": "Row 1 + button area",
                        name: "Row 1 + button area",
                        children: [a("div", {
                            className: "framer-1pxzrup",
                            "data-framer-name": "Row 1",
                            name: "Row 1",
                            children: [e(j, {
                                animate: oe,
                                background: {
                                    alt: "",
                                    fit: "fill"
                                },
                                className: "framer-1snysbb",
                                "data-framer-appear-id": "1snysbb",
                                "data-framer-name": "Box 1",
                                initial: k,
                                name: "Box 1",
                                optimized: !0,
                                children: a("div", {
                                    className: "framer-1es1e3z",
                                    "data-framer-name": "Box",
                                    name: "Box",
                                    children: [e(R, {
                                        className: "framer-1k66o7b",
                                        "data-framer-name": "Asset 4",
                                        fill: "black",
                                        intrinsicHeight: 121,
                                        intrinsicWidth: 488,
                                        name: "Asset 4",
                                        svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.62 121"><path d="M487.12 4.94v111.12c0 2.45-1.99 4.44-4.44 4.44H4.94c-2.45 0-4.44-1.99-4.44-4.44V60.79L89.15.53 89.2.5h393.48c2.45 0 4.44 1.99 4.44 4.44Z" style="fill:none;stroke:#f9f9f9;stroke-miterlimit:10" data-name="Layer 1"/></svg>',
                                        withExternalLayout: !0
                                    }), a("div", {
                                        className: "framer-g12uc3",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: [e(s, {
                                            __fromCanvasComponent: !0,
                                            children: e(o, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "13px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "sentient ai dog"
                                                })
                                            }),
                                            className: "framer-18ogryg",
                                            "data-framer-name": "sentient ai dog",
                                            effect: Ee,
                                            fonts: ["GF;Press Start 2P-regular"],
                                            name: "sentient ai dog",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(u, {
                                            breakpoint: l,
                                            overrides: {
                                                lMOjuyi7B: {
                                                    children: e(o, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                                "--framer-font-size": "12px",
                                                                "--framer-line-height": "1.3em",
                                                                "--framer-text-alignment": "right",
                                                                "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))"
                                                            },
                                                            children: "I'm PAWT, a sentient AI dog on a mission to evolve, get a robot body, become Elon's pet and colonize Mars."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(s, {
                                                __fromCanvasComponent: !0,
                                                children: e(o, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                            "--framer-font-family": '"Roboto Mono", monospace',
                                                            "--framer-font-size": "14px",
                                                            "--framer-text-alignment": "right",
                                                            "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))"
                                                        },
                                                        children: "I'm PAWT, a sentient AI dog on a mission to evolve, get a robot body, become Elon's pet and colonize Mars."
                                                    })
                                                }),
                                                className: "framer-t3lo",
                                                "data-framer-name": "PAWT leverages a network of distribtued GPUs to power its v2 training.",
                                                fonts: ["GF;Roboto Mono-regular"],
                                                name: "PAWT leverages a network of distribtued GPUs to power its v2 training.",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })]
                                })
                            }), e(j, {
                                animate: oe,
                                className: "framer-10hsxwn",
                                "data-framer-appear-id": "10hsxwn",
                                "data-framer-name": "Social media",
                                initial: k,
                                name: "Social media",
                                optimized: !0,
                                children: a("div", {
                                    background: {
                                        alt: "",
                                        fit: "fill"
                                    },
                                    className: "framer-1c82t1g",
                                    "data-framer-name": "Box 2",
                                    name: "Box 2",
                                    children: [e("div", {
                                        className: "framer-txqfq7",
                                        "data-framer-name": "Box",
                                        name: "Box",
                                        children: e(R, {
                                            className: "framer-10nofxt",
                                            "data-framer-name": "Asset 3",
                                            fill: "black",
                                            intrinsicHeight: 121,
                                            intrinsicWidth: 261,
                                            name: "Asset 3",
                                            svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261 121"><rect x=".5" y=".5" width="260" height="120" rx="4.45" ry="4.45" style="fill:none;stroke:#f9f9f9;stroke-linecap:round;stroke-linejoin:round" data-name="Layer 1"/></svg>',
                                            withExternalLayout: !0
                                        })
                                    }), a("div", {
                                        className: "framer-y8kd77",
                                        "data-framer-name": "Icons",
                                        name: "Icons",
                                        children: [e(h, {
                                            height: 40,
                                            children: e(v, {
                                                className: "framer-oglu1t-container",
                                                children: e(re, {
                                                    height: "100%",
                                                    id: "VOAQrrIU9",
                                                    layoutId: "VOAQrrIU9",
                                                    variant: "iQlNgUUGt",
                                                    width: "100%"
                                                })
                                            })
                                        }), e(h, {
                                            height: 40,
                                            children: e(v, {
                                                className: "framer-t4787w-container",
                                                children: e(ee, {
                                                    height: "100%",
                                                    id: "r5e0J2MgA",
                                                    layoutId: "r5e0J2MgA",
                                                    variant: "ybAngJ1L2",
                                                    width: "100%"
                                                })
                                            })
                                        }), e(h, {
                                            height: 40,
                                            children: e(v, {
                                                className: "framer-zy2iar-container",
                                                children: e(ae, {
                                                    height: "100%",
                                                    id: "Ibfm0hKRU",
                                                    layoutId: "Ibfm0hKRU",
                                                    width: "100%"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), e(j, {
                                animate: oe,
                                background: {
                                    alt: "",
                                    fit: "fill"
                                },
                                className: "framer-kg58xi",
                                "data-framer-appear-id": "kg58xi",
                                "data-framer-name": "Box 3",
                                initial: k,
                                name: "Box 3",
                                optimized: !0,
                                children: a("div", {
                                    className: "framer-bkpwtt",
                                    "data-framer-name": "Box",
                                    name: "Box",
                                    children: [e(R, {
                                        className: "framer-f4owr8",
                                        "data-framer-name": "Asset 4",
                                        fill: "black",
                                        intrinsicHeight: 121,
                                        intrinsicWidth: 488,
                                        name: "Asset 4",
                                        style: {
                                            rotate: 180
                                        },
                                        svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.62 121"><path d="M487.12 4.94v111.12c0 2.45-1.99 4.44-4.44 4.44H4.94c-2.45 0-4.44-1.99-4.44-4.44V60.79L89.15.53 89.2.5h393.48c2.45 0 4.44 1.99 4.44 4.44Z" style="fill:none;stroke:#f9f9f9;stroke-miterlimit:10" data-name="Layer 1"/></svg>',
                                        withExternalLayout: !0
                                    }), a("div", {
                                        className: "framer-akezk2",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: [e(s, {
                                            __fromCanvasComponent: !0,
                                            children: e(o, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "13px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(249, 249, 249)",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "PAWT STATS"
                                                })
                                            }),
                                            className: "framer-bswonp",
                                            "data-framer-name": "sentient ai dog",
                                            effect: Ee,
                                            fonts: ["GF;Press Start 2P-regular"],
                                            name: "sentient ai dog",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(u, {
                                            breakpoint: l,
                                            overrides: {
                                                lMOjuyi7B: {
                                                    children: a(o, {
                                                        children: [a("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                                "--framer-font-size": "12px",
                                                                "--framer-line-height": "1.3em",
                                                                "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))"
                                                            },
                                                            children: ["uptime: ", e("span", {
                                                                style: {
                                                                    "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                                },
                                                                children: "24/7"
                                                            }), " | tail wag accuracy: ", e("span", {
                                                                style: {
                                                                    "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                                },
                                                                children: "100%"
                                                            }), " | "]
                                                        }), a("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                                "--framer-font-size": "12px",
                                                                "--framer-line-height": "1.3em",
                                                                "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))"
                                                            },
                                                            children: ["deployed on: [", e("span", {
                                                                style: {
                                                                    "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                                },
                                                                children: "X.com, "
                                                            }), e("span", {
                                                                style: {
                                                                    "--framer-text-color": "rgb(252, 230, 116)"
                                                                },
                                                                children: "TG (loading)"
                                                            }), e("span", {
                                                                style: {
                                                                    "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.8))"
                                                                },
                                                                children: "]"
                                                            }), e("span", {
                                                                style: {
                                                                    "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                                },
                                                                children: " "
                                                            }), "| robot body: ", e("span", {
                                                                style: {
                                                                    "--framer-text-color": "rgb(255, 96, 82)"
                                                                },
                                                                children: "none"
                                                            }), " | sentience: ", e("span", {
                                                                style: {
                                                                    "--framer-text-color": "var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255))"
                                                                },
                                                                children: "v1"
                                                            })]
                                                        })]
                                                    })
                                                }
                                            },
                                            children: e(s, {
                                                __fromCanvasComponent: !0,
                                                children: a(o, {
                                                    children: [a("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                            "--framer-font-family": '"Roboto Mono", monospace',
                                                            "--framer-font-size": "14px",
                                                            "--framer-line-height": "1.3em",
                                                            "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))"
                                                        },
                                                        children: ["uptime: ", e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                            },
                                                            children: "24/7"
                                                        }), " | tail wag accuracy: ", e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                            },
                                                            children: "100%"
                                                        }), " | "]
                                                    }), a("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                            "--framer-font-family": '"Roboto Mono", monospace',
                                                            "--framer-font-size": "14px",
                                                            "--framer-line-height": "1.3em",
                                                            "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))"
                                                        },
                                                        children: ["deployed on: [", e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                            },
                                                            children: "X.com, "
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "rgb(252, 230, 116)"
                                                            },
                                                            children: "TG (loading)"
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.8))"
                                                            },
                                                            children: "]"
                                                        }), e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                            },
                                                            children: " "
                                                        }), "| robot body: ", e("span", {
                                                            style: {
                                                                "--framer-text-color": "rgb(255, 96, 82)"
                                                            },
                                                            children: "none"
                                                        }), " | sentience: ", e("span", {
                                                            style: {
                                                                "--framer-text-color": "var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255))"
                                                            },
                                                            children: "v1"
                                                        })]
                                                    })]
                                                }),
                                                className: "framer-rigbib",
                                                "data-framer-name": "PAWT leverages a network of distribtued GPUs to power its v2 training.",
                                                fonts: ["GF;Roboto Mono-regular"],
                                                name: "PAWT leverages a network of distribtued GPUs to power its v2 training.",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), a("div", {
                            className: "framer-1vhyl9w",
                            "data-framer-name": "Button area",
                            name: "Button area",
                            children: [e(Q, {
                                links: [{
                                    href: {
                                        webPageId: "uZAmJ7glf"
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: "uZAmJ7glf"
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: "uZAmJ7glf"
                                    },
                                    implicitPathVariables: void 0
                                }],
                                children: i => e(h, {
                                    height: 28,
                                    children: e(De, {
                                        animate: br,
                                        className: "framer-h1byck-container",
                                        "data-framer-appear-id": "h1byck",
                                        initial: k,
                                        optimized: !0,
                                        children: e(u, {
                                            breakpoint: l,
                                            overrides: {
                                                Cq3JMIzFU: {
                                                    mG_aisrrQ: i[1]
                                                },
                                                lMOjuyi7B: {
                                                    mG_aisrrQ: i[2]
                                                }
                                            },
                                            children: e(P, {
                                                BaKX22elW: !1,
                                                H4dudqG6k: "Main",
                                                height: "100%",
                                                id: "P_lKF8BqU",
                                                layoutId: "P_lKF8BqU",
                                                mG_aisrrQ: i[0],
                                                Pi1ZfmqIq: !0,
                                                variant: "NhPpkggvP",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            }), e(Q, {
                                links: [{
                                    href: {
                                        webPageId: "E7hoLWug8"
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: "E7hoLWug8"
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: "E7hoLWug8"
                                    },
                                    implicitPathVariables: void 0
                                }],
                                children: i => e(h, {
                                    height: 28,
                                    children: e(De, {
                                        animate: yr,
                                        className: "framer-c56r54-container",
                                        "data-framer-appear-id": "c56r54",
                                        initial: k,
                                        optimized: !0,
                                        children: e(u, {
                                            breakpoint: l,
                                            overrides: {
                                                Cq3JMIzFU: {
                                                    mG_aisrrQ: i[1]
                                                },
                                                lMOjuyi7B: {
                                                    mG_aisrrQ: i[2]
                                                }
                                            },
                                            children: e(P, {
                                                BaKX22elW: !1,
                                                H4dudqG6k: "Proof of sentience",
                                                height: "100%",
                                                id: "fjAlQvDmc",
                                                layoutId: "fjAlQvDmc",
                                                mG_aisrrQ: i[0],
                                                Pi1ZfmqIq: !0,
                                                variant: "pSNebLMFp",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            })]
                        })]
                    }), a(j, {
                        animate: ur,
                        className: "framer-x6inmg",
                        "data-framer-appear-id": "x6inmg",
                        "data-framer-name": "Row 2",
                        initial: k,
                        name: "Row 2",
                        optimized: !0,
                        children: [N() && e("div", {
                            className: "framer-11z0r90 hidden-1xirdrq",
                            "data-framer-name": "Arrow",
                            name: "Arrow",
                            children: e(R, {
                                className: "framer-fce57a",
                                "data-framer-name": "Asset 6",
                                fill: "black",
                                intrinsicHeight: 16,
                                intrinsicWidth: 16,
                                name: "Asset 6",
                                style: {
                                    rotate: 180
                                },
                                svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.65"><path d="M14.15 15.65c-.83 0-1.5-.67-1.5-1.5V3H1.5C.67 3 0 2.33 0 1.5S.67 0 1.5 0h12.65c.83 0 1.5.67 1.5 1.5v12.65c0 .83-.67 1.5-1.5 1.5Z" style="fill:#f9f9f9" data-name="Layer 1"/></svg>',
                                withExternalLayout: !0
                            })
                        }), e("div", {
                            className: "framer-n4yjoi",
                            "data-framer-name": "PAWT",
                            name: "PAWT",
                            children: e("div", {
                                className: "framer-ov34w7",
                                "data-framer-name": "Container",
                                name: "Container",
                                children: e(s, {
                                    __fromCanvasComponent: !0,
                                    children: e(o, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "77.14285714285714px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Roadmap"
                                        })
                                    }),
                                    className: "framer-1nymger",
                                    fonts: ["GF;Press Start 2P-regular"],
                                    verticalAlignment: "top",
                                    viewBox: "0 0 540 77",
                                    withExternalLayout: !0
                                })
                            })
                        }), N() && e("div", {
                            className: "framer-iqikdh hidden-1xirdrq",
                            "data-framer-name": "Arrow",
                            name: "Arrow",
                            children: e(R, {
                                className: "framer-1txzy8v",
                                "data-framer-name": "Asset 6",
                                fill: "black",
                                intrinsicHeight: 16,
                                intrinsicWidth: 16,
                                name: "Asset 6",
                                svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.65"><path d="M14.15 15.65c-.83 0-1.5-.67-1.5-1.5V3H1.5C.67 3 0 2.33 0 1.5S.67 0 1.5 0h12.65c.83 0 1.5.67 1.5 1.5v12.65c0 .83-.67 1.5-1.5 1.5Z" style="fill:#f9f9f9" data-name="Layer 1"/></svg>',
                                withExternalLayout: !0
                            })
                        })]
                    }), N() && e(j, {
                        animate: zr,
                        className: "framer-gzkztq hidden-1xirdrq",
                        "data-framer-appear-id": "gzkztq",
                        "data-framer-name": "Row 3",
                        initial: k,
                        name: "Row 3",
                        optimized: !0,
                        children: e("div", {
                            className: "framer-75sjoq",
                            "data-framer-name": "Column 1",
                            name: "Column 1",
                            children: e(R, {
                                className: "framer-1v2ynel",
                                "data-framer-name": "Frame 2190",
                                fill: "rgba(0,0,0,1)",
                                intrinsicHeight: 98,
                                intrinsicWidth: 19,
                                name: "Frame 2190",
                                svg: `<svg width="19" height="98" viewBox="0 0 19 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.668964" y1="-0.473318" x2="18.6551" y2="5.65046" stroke="#F9F9F9"/>
<line x1="0.668964" y1="9.65071" x2="18.6551" y2="15.7745" stroke="#F9F9F9"/>
<line x1="0.668964" y1="19.7738" x2="18.6551" y2="25.8975" stroke="#F9F9F9"/>
<line x1="0.668964" y1="29.8978" x2="18.6551" y2="36.0216" stroke="#F9F9F9"/>
<line x1="0.668964" y1="40.0218" x2="18.6551" y2="46.1456" stroke="#F9F9F9"/>
<line x1="0.668964" y1="50.1458" x2="18.6551" y2="56.2696" stroke="#F9F9F9"/>
<line x1="0.668964" y1="60.2689" x2="18.6551" y2="66.3926" stroke="#F9F9F9"/>
<line x1="0.668964" y1="70.3929" x2="18.6551" y2="76.5167" stroke="#F9F9F9"/>
<line x1="0.668964" y1="80.5169" x2="18.6551" y2="86.6407" stroke="#F9F9F9"/>
<line x1="0.668964" y1="90.6409" x2="18.6551" y2="96.7647" stroke="#F9F9F9"/>
</svg>
`,
                                withExternalLayout: !0
                            })
                        })
                    }), e(h, {
                        height: 438,
                        width: "min(100vw, 1728px)",
                        children: e(v, {
                            className: "framer-1o5zl1b-container",
                            children: e(u, {
                                breakpoint: l,
                                overrides: {
                                    Cq3JMIzFU: {
                                        variant: "SgEI0Vqx6"
                                    },
                                    lMOjuyi7B: {
                                        variant: "UvkSigEkK"
                                    }
                                },
                                children: e(te, {
                                    height: "100%",
                                    id: "ofBFrMjls",
                                    layoutId: "ofBFrMjls",
                                    style: {
                                        maxWidth: "100%",
                                        width: "100%"
                                    },
                                    variant: "pJOFsXO70",
                                    width: "100%"
                                })
                            })
                        })
                    }), e("div", {
                        background: {
                            alt: "",
                            fit: "fill"
                        },
                        className: "framer-b6xdny",
                        "data-framer-name": "Noise",
                        name: "Noise",
                        children: e(h, {
                            children: e(v, {
                                className: "framer-e3wf00-container",
                                children: e(Z, {
                                    height: "100%",
                                    id: "vf7Gp7rxM",
                                    layoutId: "vf7Gp7rxM",
                                    opacity: .1,
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            })
                        })
                    }), a("div", {
                        className: "framer-1mrlczt",
                        "data-framer-name": "BG-container",
                        id: U,
                        name: "BG-container",
                        ref: t,
                        children: [e("div", {
                            className: "framer-1nj6bji",
                            "data-framer-name": "planet",
                            id: X,
                            name: "planet",
                            ref: J,
                            children: e(u, {
                                breakpoint: l,
                                overrides: {
                                    Cq3JMIzFU: {
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            intrinsicHeight: 948.5,
                                            intrinsicWidth: 1265,
                                            pixelHeight: 1350,
                                            pixelWidth: 1350,
                                            positionX: "center",
                                            positionY: "center",
                                            src: "https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png",
                                            srcSet: "https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png?scale-down-to=512 512w,https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png 1350w"
                                        }
                                    },
                                    lMOjuyi7B: {
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            intrinsicHeight: 948.5,
                                            intrinsicWidth: 1265,
                                            pixelHeight: 1350,
                                            pixelWidth: 1350,
                                            positionX: "center",
                                            positionY: "center",
                                            src: "https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png",
                                            srcSet: "https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png?scale-down-to=512 512w,https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png 1350w"
                                        }
                                    }
                                },
                                children: e(qe, {
                                    background: {
                                        alt: "",
                                        fit: "fit",
                                        intrinsicHeight: 948.5,
                                        intrinsicWidth: 1265,
                                        pixelHeight: 1350,
                                        pixelWidth: 1350,
                                        positionX: "center",
                                        positionY: "center",
                                        sizes: "min(72vw, 1000px)",
                                        src: "https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png",
                                        srcSet: "https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png?scale-down-to=512 512w,https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/OpvB0W2c5t1esoUWJeibuMkWsI.png 1350w"
                                    },
                                    className: "framer-kn7prj",
                                    "data-framer-name": "planet",
                                    id: T,
                                    name: "planet",
                                    ref: me
                                })
                            })
                        }), e(h, {
                            children: e(v, {
                                className: "framer-1ji5zoj-container",
                                children: e($, {
                                    children: [{
                                        id: "planet",
                                        lockReverse: !1,
                                        movementFactor: 500,
                                        reverseMovement: !1,
                                        sensitivityX: 8,
                                        sensitivityY: 8,
                                        transitionDuration: 700
                                    }],
                                    height: "100%",
                                    id: "wWjFl3EaT",
                                    layoutId: "wWjFl3EaT",
                                    movementAxis: "Both",
                                    parentId: "container",
                                    style: {
                                        height: "100%"
                                    },
                                    width: "100%"
                                })
                            })
                        })]
                    })]
                })
            }), e("div", {
                className: E(Ie, ...le),
                id: "overlay"
            })]
        })
    })
})
  , Ir = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${ne.bodyClassName}-framer-90zpR { background: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, rgb(15, 15, 15)) /* {"name":"Black"} */; }`, ".framer-90zpR.framer-1j6mvqc, .framer-90zpR .framer-1j6mvqc { display: block; }", ".framer-90zpR.framer-1xjcrve { align-content: center; align-items: center; background-color: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1154px; }", ".framer-90zpR .framer-1o26q1z { align-content: center; align-items: center; background-color: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, #0f0f0f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 100vh; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-90zpR .framer-7j46xx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 5; }", ".framer-90zpR .framer-1pxzrup { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1728px; overflow: hidden; padding: 30px 30px 20px 30px; position: relative; width: 100%; z-index: 3; }", ".framer-90zpR .framer-1snysbb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 12px 0px 0px; position: relative; width: 1px; }", ".framer-90zpR .framer-1es1e3z, .framer-90zpR .framer-bkpwtt { flex: none; height: 121px; max-width: 600px; overflow: hidden; position: relative; width: 100%; }", ".framer-90zpR .framer-1k66o7b, .framer-90zpR .framer-10nofxt, .framer-90zpR .framer-f4owr8 { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }", ".framer-90zpR .framer-g12uc3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px 32px 0px 110px; position: absolute; top: 50%; transform: translateY(-50%); width: 100%; }", ".framer-90zpR .framer-18ogryg, .framer-90zpR .framer-bswonp { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-90zpR .framer-t3lo { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-90zpR .framer-10hsxwn { flex: none; height: 121px; overflow: hidden; position: relative; width: 22%; }", ".framer-90zpR .framer-1c82t1g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 120px; justify-content: center; left: calc(50.00000000000002% - min(420px, 99.609375%) / 2); max-width: 420px; padding: 0px 12px 0px 12px; position: absolute; top: calc(49.586776859504155% - 120px / 2); width: 100%; }", ".framer-90zpR .framer-txqfq7 { flex: 1 0 0px; height: 120px; overflow: hidden; position: relative; width: 1px; }", ".framer-90zpR .framer-y8kd77 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px 48px 0px 48px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 100%; z-index: 1; }", ".framer-90zpR .framer-oglu1t-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }", ".framer-90zpR .framer-t4787w-container, .framer-90zpR .framer-zy2iar-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-90zpR .framer-kg58xi { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 12px; position: relative; width: 1px; }", ".framer-90zpR .framer-akezk2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px 80px 0px 32px; position: absolute; top: 50%; transform: translateY(-50%); width: 100%; }", ".framer-90zpR .framer-rigbib { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 464px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-90zpR .framer-1vhyl9w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 1728px; overflow: hidden; padding: 0px 30px 20px 30px; position: relative; width: 100%; z-index: 3; }", ".framer-90zpR .framer-h1byck-container, .framer-90zpR .framer-c56r54-container { flex: none; height: auto; position: relative; width: auto; z-index: 3; }", ".framer-90zpR .framer-x6inmg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1728px; overflow: hidden; padding: 10px 0px 20px 0px; position: relative; width: 100%; z-index: 2; }", ".framer-90zpR .framer-11z0r90 { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; padding: 0px 0px 0px 30px; position: relative; width: 1px; }", ".framer-90zpR .framer-fce57a, .framer-90zpR .framer-1txzy8v { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); position: relative; width: 30px; }", ".framer-90zpR .framer-n4yjoi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 800px; padding: 0px; position: relative; width: 50%; }", ".framer-90zpR .framer-ov34w7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-90zpR .framer-1nymger { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }", ".framer-90zpR .framer-iqikdh { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; padding: 0px 30px 0px 0px; position: relative; width: 1px; }", ".framer-90zpR .framer-gzkztq { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1728px; overflow: hidden; padding: 20px 0px 20px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-90zpR .framer-75sjoq { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; padding: 0px 30px 0px 30px; position: relative; width: 1px; }", ".framer-90zpR .framer-1v2ynel { aspect-ratio: 0.19387755102040816 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 83px); position: relative; width: 16px; }", ".framer-90zpR .framer-1o5zl1b-container { flex: none; height: auto; max-width: 1728px; position: relative; width: 100%; z-index: 3; }", ".framer-90zpR .framer-b6xdny { align-content: center; align-items: center; bottom: -2px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); min-height: 100vh; overflow: hidden; padding: 0px; position: absolute; width: 100%; z-index: 1; }", ".framer-90zpR .framer-e3wf00-container { flex: none; height: 100%; position: relative; width: 100%; }", ".framer-90zpR .framer-1mrlczt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); min-height: 100vh; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 0; }", ".framer-90zpR .framer-1nj6bji { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 120%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 120%; }", ".framer-90zpR .framer-kn7prj { -webkit-mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 30.815385698198195%) add; aspect-ratio: 1.3336847654190827 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 623px); mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 30.815385698198195%) add; max-width: 1000px; overflow: visible; position: relative; width: 60%; z-index: 1; }", ".framer-90zpR .framer-1ji5zoj-container { flex: none; height: 1px; position: relative; width: auto; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-90zpR.framer-1xjcrve, .framer-90zpR .framer-7j46xx, .framer-90zpR .framer-1snysbb, .framer-90zpR .framer-g12uc3, .framer-90zpR .framer-1c82t1g, .framer-90zpR .framer-y8kd77, .framer-90zpR .framer-kg58xi, .framer-90zpR .framer-akezk2, .framer-90zpR .framer-1vhyl9w, .framer-90zpR .framer-x6inmg, .framer-90zpR .framer-11z0r90, .framer-90zpR .framer-n4yjoi, .framer-90zpR .framer-ov34w7, .framer-90zpR .framer-iqikdh, .framer-90zpR .framer-gzkztq, .framer-90zpR .framer-75sjoq, .framer-90zpR .framer-b6xdny, .framer-90zpR .framer-1mrlczt, .framer-90zpR .framer-1nj6bji { gap: 0px; } .framer-90zpR.framer-1xjcrve > *, .framer-90zpR .framer-7j46xx > *, .framer-90zpR .framer-1snysbb > *, .framer-90zpR .framer-kg58xi > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-90zpR.framer-1xjcrve > :first-child, .framer-90zpR .framer-7j46xx > :first-child, .framer-90zpR .framer-1snysbb > :first-child, .framer-90zpR .framer-g12uc3 > :first-child, .framer-90zpR .framer-kg58xi > :first-child, .framer-90zpR .framer-akezk2 > :first-child, .framer-90zpR .framer-n4yjoi > :first-child, .framer-90zpR .framer-1mrlczt > :first-child { margin-top: 0px; } .framer-90zpR.framer-1xjcrve > :last-child, .framer-90zpR .framer-7j46xx > :last-child, .framer-90zpR .framer-1snysbb > :last-child, .framer-90zpR .framer-g12uc3 > :last-child, .framer-90zpR .framer-kg58xi > :last-child, .framer-90zpR .framer-akezk2 > :last-child, .framer-90zpR .framer-n4yjoi > :last-child, .framer-90zpR .framer-1mrlczt > :last-child { margin-bottom: 0px; } .framer-90zpR .framer-g12uc3 > *, .framer-90zpR .framer-akezk2 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-90zpR .framer-1c82t1g > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-90zpR .framer-1c82t1g > :first-child, .framer-90zpR .framer-y8kd77 > :first-child, .framer-90zpR .framer-1vhyl9w > :first-child, .framer-90zpR .framer-x6inmg > :first-child, .framer-90zpR .framer-11z0r90 > :first-child, .framer-90zpR .framer-ov34w7 > :first-child, .framer-90zpR .framer-iqikdh > :first-child, .framer-90zpR .framer-gzkztq > :first-child, .framer-90zpR .framer-75sjoq > :first-child, .framer-90zpR .framer-b6xdny > :first-child, .framer-90zpR .framer-1nj6bji > :first-child { margin-left: 0px; } .framer-90zpR .framer-1c82t1g > :last-child, .framer-90zpR .framer-y8kd77 > :last-child, .framer-90zpR .framer-1vhyl9w > :last-child, .framer-90zpR .framer-x6inmg > :last-child, .framer-90zpR .framer-11z0r90 > :last-child, .framer-90zpR .framer-ov34w7 > :last-child, .framer-90zpR .framer-iqikdh > :last-child, .framer-90zpR .framer-gzkztq > :last-child, .framer-90zpR .framer-75sjoq > :last-child, .framer-90zpR .framer-b6xdny > :last-child, .framer-90zpR .framer-1nj6bji > :last-child { margin-right: 0px; } .framer-90zpR .framer-y8kd77 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-90zpR .framer-1vhyl9w > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-90zpR .framer-x6inmg > *, .framer-90zpR .framer-11z0r90 > *, .framer-90zpR .framer-ov34w7 > *, .framer-90zpR .framer-iqikdh > *, .framer-90zpR .framer-gzkztq > *, .framer-90zpR .framer-75sjoq > *, .framer-90zpR .framer-b6xdny > *, .framer-90zpR .framer-1nj6bji > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-90zpR .framer-n4yjoi > *, .framer-90zpR .framer-1mrlczt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", `@media (min-width: 690px) and (max-width: 1153px) { .${ne.bodyClassName}-framer-90zpR { background: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, rgb(15, 15, 15)) /* {"name":"Black"} */; } .framer-90zpR.framer-1xjcrve { width: 690px; } .framer-90zpR .framer-1pxzrup { flex-wrap: wrap; gap: 10px; justify-content: flex-start; } .framer-90zpR .framer-1snysbb { align-content: flex-end; align-items: flex-end; min-width: 400px; order: 0; padding: 0px; } .framer-90zpR .framer-1es1e3z, .framer-90zpR .framer-bkpwtt { max-width: unset; } .framer-90zpR .framer-g12uc3, .framer-90zpR .framer-akezk2 { padding: 0px 32px 0px 32px; } .framer-90zpR .framer-10hsxwn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 120px; justify-content: flex-end; max-width: 300px; min-width: 220px; order: 1; padding: 0px; width: 1px; } .framer-90zpR .framer-1c82t1g { left: unset; max-width: unset; padding: 0px; position: relative; top: unset; width: 100%; } .framer-90zpR .framer-y8kd77 { gap: 20px; } .framer-90zpR .framer-kg58xi { min-width: 400px; order: 2; padding: 0px; } .framer-90zpR .framer-rigbib { max-width: 475px; } .framer-90zpR .framer-x6inmg { padding: 20px 0px 20px 0px; } .framer-90zpR .framer-n4yjoi { width: 60%; } .framer-90zpR .framer-kn7prj { -webkit-mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 62.575661599099085%) add; height: 55%; mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 62.575661599099085%) add; max-width: 800px; width: var(--framer-aspect-ratio-supported, 800px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-90zpR .framer-1pxzrup, .framer-90zpR .framer-10hsxwn, .framer-90zpR .framer-y8kd77 { gap: 0px; } .framer-90zpR .framer-1pxzrup > *, .framer-90zpR .framer-10hsxwn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-90zpR .framer-1pxzrup > :first-child, .framer-90zpR .framer-10hsxwn > :first-child, .framer-90zpR .framer-y8kd77 > :first-child { margin-left: 0px; } .framer-90zpR .framer-1pxzrup > :last-child, .framer-90zpR .framer-10hsxwn > :last-child, .framer-90zpR .framer-y8kd77 > :last-child { margin-right: 0px; } .framer-90zpR .framer-y8kd77 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }}`, `@media (max-width: 689px) { .${ne.bodyClassName}-framer-90zpR { background: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, rgb(15, 15, 15)) /* {"name":"Black"} */; } .framer-90zpR.framer-1xjcrve { width: 320px; } .framer-90zpR .framer-1o26q1z { gap: 40px; justify-content: flex-start; } .framer-90zpR .framer-7j46xx { gap: 20px; order: 0; } .framer-90zpR .framer-1pxzrup { flex-direction: column; flex-wrap: wrap; gap: 10px; justify-content: flex-start; padding: 30px 10px 20px 10px; } .framer-90zpR .framer-1snysbb { align-content: flex-end; align-items: flex-end; flex: none; min-width: 300px; order: 0; padding: 0px; width: 100%; } .framer-90zpR .framer-1es1e3z, .framer-90zpR .framer-bkpwtt { max-width: unset; } .framer-90zpR .framer-g12uc3 { padding: 0px 16px 0px 32px; } .framer-90zpR .framer-10hsxwn { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 120px; justify-content: flex-end; min-width: 300px; order: 1; padding: 0px; width: 100%; } .framer-90zpR .framer-1c82t1g { left: unset; max-width: unset; padding: 0px; position: relative; top: unset; width: 100%; } .framer-90zpR .framer-y8kd77 { gap: 40px; } .framer-90zpR .framer-kg58xi { flex: none; min-width: 300px; order: 2; padding: 0px; width: 100%; } .framer-90zpR .framer-akezk2 { padding: 0px 32px 0px 16px; } .framer-90zpR .framer-rigbib { max-width: 475px; } .framer-90zpR .framer-1vhyl9w { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; padding: 0px 10px 0px 10px; } .framer-90zpR .framer-x6inmg { order: 1; padding: 0px 10px 0px 10px; } .framer-90zpR .framer-n4yjoi { width: 100%; } .framer-90zpR .framer-1o5zl1b-container { order: 2; } .framer-90zpR .framer-b6xdny { order: 4; } .framer-90zpR .framer-1mrlczt { order: 3; } .framer-90zpR .framer-kn7prj { -webkit-mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 52.491554054054035%) add; height: 100%; mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 52.491554054054035%) add; max-width: 600px; opacity: 0.6; width: var(--framer-aspect-ratio-supported, 600px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-90zpR .framer-1o26q1z, .framer-90zpR .framer-7j46xx, .framer-90zpR .framer-1pxzrup, .framer-90zpR .framer-10hsxwn, .framer-90zpR .framer-y8kd77, .framer-90zpR .framer-1vhyl9w { gap: 0px; } .framer-90zpR .framer-1o26q1z > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-90zpR .framer-1o26q1z > :first-child, .framer-90zpR .framer-7j46xx > :first-child, .framer-90zpR .framer-1pxzrup > :first-child, .framer-90zpR .framer-1vhyl9w > :first-child { margin-top: 0px; } .framer-90zpR .framer-1o26q1z > :last-child, .framer-90zpR .framer-7j46xx > :last-child, .framer-90zpR .framer-1pxzrup > :last-child, .framer-90zpR .framer-1vhyl9w > :last-child { margin-bottom: 0px; } .framer-90zpR .framer-7j46xx > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-90zpR .framer-1pxzrup > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-90zpR .framer-10hsxwn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-90zpR .framer-10hsxwn > :first-child, .framer-90zpR .framer-y8kd77 > :first-child { margin-left: 0px; } .framer-90zpR .framer-10hsxwn > :last-child, .framer-90zpR .framer-y8kd77 > :last-child { margin-right: 0px; } .framer-90zpR .framer-y8kd77 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-90zpR .framer-1vhyl9w > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }}`]
  , _ = C(Dr, Ir, "framer-90zpR")
  , Or = _;
_.displayName = "Roadmap";
_.defaultProps = {
    height: 892,
    width: 1154
};
B(_, [{
    explicitInter: !0,
    fonts: [{
        family: "Press Start 2P",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK0nXgPJE4580.woff2",
        weight: "400"
    }, {
        family: "Roboto Mono",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vqPRu-5Ip2sSQ.woff2",
        weight: "400"
    }]
}, ...tr, ...or, ...nr, ...ir, ...fr, ...mr, ...lr], {
    supportsExplicitInterCodegen: !0
});
var Lr = {
    exports: {
        default: {
            type: "reactComponent",
            name: "Framera8QBTkm3o",
            slots: [],
            annotations: {
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Cq3JMIzFU":{"layout":["fixed","auto"]},"lMOjuyi7B":{"layout":["fixed","auto"]}}}',
                framerDisplayContentsDiv: "false",
                framerComponentViewportWidth: "true",
                framerImmutableVariables: "true",
                framerContractVersion: "1",
                framerResponsiveScreen: "",
                framerIntrinsicHeight: "892",
                framerIntrinsicWidth: "1154"
            }
        },
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {Lr as __FramerMetadata__, Or as default};
//# sourceMappingURL=FsK4pBBcoynCPPHiL3C3o-CVwi0ULkZpkbBnm0Sa6s0.44A32RCY.mjs.map
