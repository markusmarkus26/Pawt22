import {a as ue, b as xe, c as Le, d as ve, e as $} from "./chunk-B2V5GT6M.mjs";
import {$ as be, A as Ve, B as H, D as Ee, E as me, G as u, J as U, K as F, M as fe, N as z, O as C, Q as Y, R as We, S as je, V as Q, X as M, Y as Fe, b as n, d as A, ea as _e, f as ie, g as S, h as T, ha as se, i as Ie, ia as ge, j as E, k as Z, ka as c, l as J, ma as w, na as O, o as e, oa as I, p as a, pa as Ne, q as B, r, s as G} from "./chunk-S6IUZFYY.mjs";
import "./chunk-JR5VT52U.mjs";
import {a as le} from "./chunk-FPI22T2P.mjs";
import "./chunk-YBWQQKK7.mjs";
import {c as h} from "./chunk-RIUMFBNJ.mjs";
var K = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
  , ke = {
    ...K,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column"
}
  , Je = {
    onClick: {
        type: u.EventHandler
    },
    onMouseEnter: {
        type: u.EventHandler
    },
    onMouseLeave: {
        type: u.EventHandler
    }
}
  , Qe = {
    type: u.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0
}
  , $e = {
    font: {
        type: u.Boolean,
        title: "Font",
        defaultValue: !1,
        disabledTitle: "Default",
        enabledTitle: "Custom"
    },
    fontFamily: {
        type: u.String,
        title: "Family",
        placeholder: "Inter",
        hidden: ({font: t}) => !t
    },
    fontWeight: {
        type: u.Enum,
        title: "Weight",
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
        hidden: ({font: t}) => !t
    }
};
function we() {
    return E( () => me.current() === me.canvas, [])
}
var rr = {
    borderRadius: {
        title: "Radius",
        type: u.FusedNumber,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0
    }
};
var tr = {
    padding: {
        type: u.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding"
    }
};
function ee({type: t, url: o, html: s, style: m={}}) {
    return t === "url" && o ? e(or, {
        url: o,
        style: m
    }) : t === "html" && s ? e(ir, {
        html: s,
        style: m
    }) : e(ar, {
        style: m
    })
}
U(ee, {
    type: {
        type: u.Enum,
        defaultValue: "url",
        displaySegmentedControl: !0,
        options: ["url", "html"],
        optionTitles: ["URL", "HTML"]
    },
    url: {
        title: "URL",
        type: u.String,
        description: "Some websites don\u2019t support embedding.",
        hidden(t) {
            return t.type !== "url"
        }
    },
    html: {
        title: "HTML",
        type: u.String,
        displayTextArea: !0,
        hidden(t) {
            return t.type !== "html"
        }
    }
});
function ar({style: t}) {
    return e("div", {
        style: {
            minHeight: Ge(t),
            ...ke,
            overflow: "hidden",
            ...t
        },
        children: e("div", {
            style: ye,
            children: "To embed a website or widget, add it to the properties\xA0panel."
        })
    })
}
function or({url: t, style: o}) {
    let s = !o.height;
    /[a-z]+:\/\//.test(t) || (t = "https://" + t);
    let m = we()
      , [l,p] = J(m ? void 0 : !1);
    if (S( () => {
        if (!m)
            return;
        let b = !0;
        p(void 0);
        async function q() {
            let k = await fetch("https://api.framer.com/functions/check-iframe-url?url=" + encodeURIComponent(t));
            if (k.status == 200) {
                let {isBlocked: i} = await k.json();
                b && p(i)
            } else {
                let i = await k.text();
                console.error(i);
                let R = new Error("This site can\u2019t be reached.");
                p(R)
            }
        }
        return q().catch(k => {
            console.error(k),
            p(k)
        }
        ),
        () => {
            b = !1
        }
    }
    , [t]),
    m && s)
        return e(de, {
            message: "URL embeds do not support auto height.",
            style: o
        });
    if (!t.startsWith("https://"))
        return e(de, {
            message: "Unsupported protocol.",
            style: o
        });
    if (l === void 0)
        return e(lr, {});
    if (l instanceof Error)
        return e(de, {
            message: l.message,
            style: o
        });
    if (l === !0) {
        let b = `Can\u2019t embed ${t} due to its content security policy.`;
        return e(de, {
            message: b,
            style: o
        })
    }
    return e("iframe", {
        src: t,
        style: {
            ...Ae,
            ...o
        },
        loading: "lazy",
        fetchPriority: m ? "low" : "auto",
        referrerPolicy: "no-referrer",
        sandbox: nr(m)
    })
}
var Ae = {
    width: "100%",
    height: "100%",
    border: "none"
};
function nr(t) {
    let o = ["allow-same-origin", "allow-scripts"];
    return t || o.push("allow-downloads", "allow-forms", "allow-modals", "allow-orientation-lock", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-storage-access-by-user-activation", "allow-top-navigation-by-user-activation"),
    o.join(" ")
}
function ir({html: t, ...o}) {
    if (t.includes("<\/script>")) {
        let m = t.includes("</spline-viewer>")
          , l = t.includes("<!-- framer-direct-embed -->");
        return m || l ? e(fr, {
            html: t,
            ...o
        }) : e(mr, {
            html: t,
            ...o
        })
    }
    return e(sr, {
        html: t,
        ...o
    })
}
function mr({html: t, style: o}) {
    let s = Z()
      , [m,l] = J(0);
    S( () => {
        var k;
        let i = (k = s.current) === null || k === void 0 ? void 0 : k.contentWindow;
        function R(_) {
            if (_.source !== i)
                return;
            let V = _.data;
            if (typeof V != "object" || V === null)
                return;
            let d = V.embedHeight;
            typeof d == "number" && l(d)
        }
        return h.addEventListener("message", R),
        i?.postMessage("getEmbedHeight", "*"),
        () => {
            h.removeEventListener("message", R)
        }
    }
    , []);
    let p = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${t}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`
      , b = {
        ...Ae,
        ...o
    };
    return !o.height && (b.height = m + "px"),
    e("iframe", {
        ref: s,
        style: b,
        srcDoc: p
    })
}
function fr({html: t, style: o}) {
    let s = Z();
    return S( () => {
        let m = s.current;
        if (m)
            return m.innerHTML = t,
            Be(m),
            () => {
                m.innerHTML = ""
            }
    }
    , [t]),
    e("div", {
        ref: s,
        style: {
            ...Te,
            ...o
        }
    })
}
function sr({html: t, style: o}) {
    return e("div", {
        style: {
            ...Te,
            ...o
        },
        dangerouslySetInnerHTML: {
            __html: t
        }
    })
}
var Te = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};
function Be(t) {
    if (t instanceof Element && t.tagName === "SCRIPT") {
        let o = document.createElement("script");
        o.text = t.innerHTML;
        for (let {name: s, value: m} of t.attributes)
            o.setAttribute(s, m);
        t.parentElement.replaceChild(o, t)
    } else
        for (let o of t.childNodes)
            Be(o)
}
function lr() {
    return e("div", {
        className: "framerInternalUI-componentPlaceholder",
        style: {
            ...K,
            overflow: "hidden"
        },
        children: e("div", {
            style: ye,
            children: "Loading\u2026"
        })
    })
}
function de({message: t, style: o}) {
    return e("div", {
        className: "framerInternalUI-errorPlaceholder",
        style: {
            minHeight: Ge(o),
            ...K,
            overflow: "hidden",
            ...o
        },
        children: e("div", {
            style: ye,
            children: t
        })
    })
}
var ye = {
    textAlign: "center",
    minWidth: 140
};
function Ge(t) {
    if (!t.height)
        return 200
}
var cr = ["MLTU2_Ohz", "GBkXGG4NC"]
  , dr = "framer-dHsuf"
  , pr = {
    GBkXGG4NC: "framer-v-1v9jeyi",
    MLTU2_Ohz: "framer-v-1iustp2"
};
function Me(t, ...o) {
    let s = {};
    return o?.forEach(m => m && Object.assign(s, t[m])),
    s
}
var hr = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , br = ({value: t, children: o}) => {
    let s = ie(B)
      , m = t ?? s.transition
      , l = E( () => ({
        ...s,
        transition: m
    }), [JSON.stringify(m)]);
    return e(B.Provider, {
        value: l,
        children: o
    })
}
  , gr = r.create(n)
  , ur = {
    Desktop: "MLTU2_Ohz",
    Phone: "GBkXGG4NC"
}
  , xr = ({height: t, id: o, text: s, width: m, ...l}) => {
    var p, b, q;
    return {
        ...l,
        variant: (b = (p = ur[l.variant]) !== null && p !== void 0 ? p : l.variant) !== null && b !== void 0 ? b : "MLTU2_Ohz",
        xrVk1SdPL: (q = s ?? l.xrVk1SdPL) !== null && q !== void 0 ? q : "LLM request #113"
    }
}
  , Lr = (t, o) => t.layoutDependency ? o.join("-") + t.layoutDependency : o.join("-")
  , vr = A(function(t, o) {
    let {activeLocale: s, setLocale: m} = H()
      , {style: l, className: p, layoutId: b, variant: q, xrVk1SdPL: k, ...i} = xr(t)
      , {baseVariant: R, classNames: _, clearLoadingGesture: V, gestureHandlers: d, gestureVariant: N, isLoading: De, setGestureState: oe, setVariant: X, variants: f} = se({
        cycleOrder: cr,
        defaultVariant: "MLTU2_Ohz",
        variant: q,
        variantClassNames: pr
    })
      , g = Lr(t, f)
      , y = Z(null)
      , P = T()
      , j = []
      , ne = fe();
    return e(G, {
        id: b ?? P,
        children: e(gr, {
            animate: f,
            initial: !1,
            children: e(br, {
                value: hr,
                children: a(r.div, {
                    ...i,
                    ...d,
                    className: F(dr, ...j, "framer-1iustp2", p, _),
                    "data-border": !0,
                    "data-framer-name": "Desktop",
                    layoutDependency: g,
                    layoutId: "MLTU2_Ohz",
                    ref: o ?? y,
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
                        ...l
                    },
                    ...Me({
                        GBkXGG4NC: {
                            "data-framer-name": "Phone"
                        }
                    }, R, N),
                    children: [a(r.div, {
                        className: "framer-1cqenh8",
                        "data-framer-name": "Request nr",
                        layoutDependency: g,
                        layoutId: "v74p6I5AJ",
                        children: [e(r.div, {
                            className: "framer-1uzkwai",
                            "data-framer-name": "Checkmark",
                            layoutDependency: g,
                            layoutId: "XbzHjnoiY",
                            style: {
                                backgroundColor: "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))",
                                borderBottomLeftRadius: 2,
                                borderBottomRightRadius: 2,
                                borderTopLeftRadius: 2,
                                borderTopRightRadius: 2
                            },
                            children: e(w, {
                                className: "framer-rczjkr",
                                "data-framer-name": "Union",
                                layout: "position",
                                layoutDependency: g,
                                layoutId: "qV18Bjw9x",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 11"><path d="M 5.79 10.833 L 14.68 1.878 C 15.107 1.448 15.107 0.752 14.68 0.322 C 14.254 -0.107 13.563 -0.107 13.136 0.322 L 5.793 7.72 L 1.864 3.762 C 1.437 3.333 0.746 3.333 0.32 3.762 C -0.107 4.192 -0.107 4.888 0.32 5.318 L 4.249 9.275 L 4.246 9.278 Z" fill="var(--token-9057efb0-115b-4a23-b1fd-97237921d348, rgb(15, 15, 15)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>',
                                svgContentId: 10266680681,
                                withExternalLayout: !0
                            })
                        }), e(c, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                                children: e(r.p, {
                                    style: {
                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                        "--framer-font-family": '"Roboto Mono", monospace',
                                        "--framer-font-size": "14px",
                                        "--framer-line-height": "1em",
                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                    },
                                    children: "LLM request #113"
                                })
                            }),
                            className: "framer-1ohr8fs",
                            fonts: ["GF;Roboto Mono-regular"],
                            layoutDependency: g,
                            layoutId: "bE0FwxRDu",
                            style: {
                                "--extracted-r6o4lv": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            text: k,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...Me({
                                GBkXGG4NC: {
                                    children: e(n, {
                                        children: e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-font-size": "12px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                            },
                                            children: "LLM request #113"
                                        })
                                    })
                                }
                            }, R, N)
                        })]
                    }), e(c, {
                        __fromCanvasComponent: !0,
                        children: e(n, {
                            children: e(r.p, {
                                style: {
                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                    "--framer-font-family": '"Roboto Mono", monospace',
                                    "--framer-font-size": "14px",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)))"
                                },
                                children: "10:12:33 am"
                            })
                        }),
                        className: "framer-m8aelh",
                        fonts: ["GF;Roboto Mono-regular"],
                        layoutDependency: g,
                        layoutId: "JH6pN5LDl",
                        style: {
                            "--extracted-r6o4lv": "var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline"
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...Me({
                            GBkXGG4NC: {
                                children: e(n, {
                                    children: e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "11px",
                                            "--framer-line-height": "1em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)))"
                                        },
                                        children: "10:12:33 am"
                                    })
                                })
                            }
                        }, R, N)
                    })]
                })
            })
        })
    })
})
  , kr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-dHsuf.framer-5lsl4n, .framer-dHsuf .framer-5lsl4n { display: block; }", ".framer-dHsuf.framer-1iustp2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 20px; position: relative; width: 680px; will-change: var(--framer-will-change-override, transform); }", ".framer-dHsuf .framer-1cqenh8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-dHsuf .framer-1uzkwai { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }", ".framer-dHsuf .framer-rczjkr { flex: none; height: 11px; left: calc(50.00000000000002% - 15px / 2); position: absolute; top: calc(50.00000000000002% - 11px / 2); width: 15px; }", ".framer-dHsuf .framer-1ohr8fs, .framer-dHsuf .framer-m8aelh { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dHsuf .framer-1cqenh8 { gap: 0px; } .framer-dHsuf .framer-1cqenh8 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-dHsuf .framer-1cqenh8 > :first-child { margin-left: 0px; } .framer-dHsuf .framer-1cqenh8 > :last-child { margin-right: 0px; } }", ".framer-dHsuf.framer-v-1v9jeyi.framer-1iustp2 { padding: 14px; }", ".framer-dHsuf.framer-v-1v9jeyi .framer-1cqenh8 { gap: 12px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dHsuf.framer-v-1v9jeyi .framer-1cqenh8 { gap: 0px; } .framer-dHsuf.framer-v-1v9jeyi .framer-1cqenh8 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-dHsuf.framer-v-1v9jeyi .framer-1cqenh8 > :first-child { margin-left: 0px; } .framer-dHsuf.framer-v-1v9jeyi .framer-1cqenh8 > :last-child { margin-right: 0px; } }", '.framer-dHsuf[data-border="true"]::after, .framer-dHsuf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , re = Y(vr, kr, "framer-dHsuf")
  , te = re;
re.displayName = "Request box";
re.defaultProps = {
    height: 64,
    width: 680
};
U(re, {
    variant: {
        options: ["MLTU2_Ohz", "GBkXGG4NC"],
        optionTitles: ["Desktop", "Phone"],
        title: "Variant",
        type: u.Enum
    },
    xrVk1SdPL: {
        defaultValue: "LLM request #113",
        displayTextArea: !1,
        title: "Text",
        type: u.String
    }
});
O(re, [{
    explicitInter: !0,
    fonts: [{
        family: "Roboto Mono",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vqPRu-5Ip2sSQ.woff2",
        weight: "400"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
var wr = ["mZh7I_ryP", "yFZLEczXt", "gd5wMqSWR"]
  , yr = "framer-hkppD"
  , Mr = {
    gd5wMqSWR: "framer-v-fpw9m8",
    mZh7I_ryP: "framer-v-145tuu6",
    yFZLEczXt: "framer-v-agr9mt"
};
function v(t, ...o) {
    let s = {};
    return o?.forEach(m => m && Object.assign(s, t[m])),
    s
}
var zr = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , qr = {
    opacity: .001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , Sr = {
    bounce: 0,
    delay: .05,
    duration: 1,
    type: "spring"
}
  , ze = {
    effect: qr,
    repeat: !1,
    startDelay: .4,
    tokenization: "character",
    transition: Sr,
    trigger: "onMount",
    type: "appear"
}
  , Zr = (t, o) => `translateY(-50%) ${o}`
  , Rr = ({value: t, children: o}) => {
    let s = ie(B)
      , m = t ?? s.transition
      , l = E( () => ({
        ...s,
        transition: m
    }), [JSON.stringify(m)]);
    return e(B.Provider, {
        value: l,
        children: o
    })
}
  , Cr = r.create(n)
  , Dr = {
    Desktop: "mZh7I_ryP",
    Phone: "gd5wMqSWR",
    Tablet: "yFZLEczXt"
}
  , Ir = ({height: t, id: o, width: s, ...m}) => {
    var l, p;
    return {
        ...m,
        variant: (p = (l = Dr[m.variant]) !== null && l !== void 0 ? l : m.variant) !== null && p !== void 0 ? p : "mZh7I_ryP"
    }
}
  , Vr = (t, o) => t.layoutDependency ? o.join("-") + t.layoutDependency : o.join("-")
  , Er = A(function(t, o) {
    let {activeLocale: s, setLocale: m} = H()
      , {style: l, className: p, layoutId: b, variant: q, ...k} = Ir(t)
      , {baseVariant: i, classNames: R, clearLoadingGesture: _, gestureHandlers: V, gestureVariant: d, isLoading: N, setGestureState: De, setVariant: oe, variants: X} = se({
        cycleOrder: wr,
        defaultVariant: "mZh7I_ryP",
        variant: q,
        variantClassNames: Mr
    })
      , f = Vr(t, X)
      , g = Z(null)
      , y = () => !["yFZLEczXt", "gd5wMqSWR"].includes(i)
      , P = T()
      , j = []
      , ne = fe();
    return e(G, {
        id: b ?? P,
        children: e(Cr, {
            animate: X,
            initial: !1,
            children: e(Rr, {
                value: zr,
                children: a(r.div, {
                    ...k,
                    ...V,
                    className: F(yr, ...j, "framer-145tuu6", p, R),
                    "data-framer-name": "Desktop",
                    layoutDependency: f,
                    layoutId: "mZh7I_ryP",
                    ref: o ?? g,
                    style: {
                        ...l
                    },
                    ...v({
                        gd5wMqSWR: {
                            "data-framer-name": "Phone"
                        },
                        yFZLEczXt: {
                            "data-framer-name": "Tablet"
                        }
                    }, i, d),
                    children: [a(r.div, {
                        className: "framer-9cg7s1",
                        "data-framer-name": "Row 1",
                        layoutDependency: f,
                        layoutId: "cHsx37zDF",
                        children: [a(r.div, {
                            className: "framer-w9zenm",
                            "data-framer-name": "Box container - agent",
                            layoutDependency: f,
                            layoutId: "wsaFLjPVE",
                            children: [a(r.div, {
                                className: "framer-17ws5t8",
                                "data-border": !0,
                                "data-framer-name": "Box",
                                layoutDependency: f,
                                layoutId: "kkXMYOadK",
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
                                    borderTopRightRadius: 4
                                },
                                children: [e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Agent"
                                        })
                                    }),
                                    className: "framer-1jf5o2z",
                                    effect: ze,
                                    fonts: ["GF;Press Start 2P-regular"],
                                    layoutDependency: f,
                                    layoutId: "jeP1lhxs7",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "Agent"
                                                })
                                            }),
                                            effect: void 0
                                        },
                                        yFZLEczXt: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "Agent"
                                                })
                                            })
                                        }
                                    }, i, d)
                                }), e(c, {
                                    __fromCanvasComponent: !0,
                                    children: a(n, {
                                        children: [e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                "--framer-text-transform": "inherit"
                                            },
                                            children: "Proof of"
                                        }), e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                "--framer-text-transform": "inherit"
                                            },
                                            children: "Sentience API"
                                        })]
                                    }),
                                    className: "framer-93k0zf",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    layoutDependency: f,
                                    layoutId: "VkkaCC1wp",
                                    style: {
                                        "--extracted-2gxw0f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                        "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            children: a(n, {
                                                children: [e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "11px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "Proof of"
                                                }), e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "11px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "Sentience API"
                                                })]
                                            })
                                        },
                                        yFZLEczXt: {
                                            children: a(n, {
                                                children: [e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "12px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "Proof of"
                                                }), e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "12px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-2gxw0f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "Sentience API"
                                                })]
                                            })
                                        }
                                    }, i, d)
                                })]
                            }), e(w, {
                                className: "framer-fb35mk",
                                "data-framer-name": "Frame 2190",
                                layout: "position",
                                layoutDependency: f,
                                layoutId: "xdOtRryBV",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 112"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                svgContentId: 9577932521,
                                withExternalLayout: !0,
                                ...v({
                                    gd5wMqSWR: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 95"><path d="M 0.563 -7.401 L 15.71 -2.214" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 1.174 L 15.71 6.36" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.747 L 15.71 14.934" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 18.322 L 15.71 23.508" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.896 L 15.71 32.082" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 35.47 L 15.71 40.657" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 44.044 L 15.71 49.23" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.618 L 15.71 57.805" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 61.193 L 15.71 66.379" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.767 L 15.71 74.954" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 78.198 L 15.273 83.385" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 87.347 L 15.273 92.534" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.494 L 15.273 100.681" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 103.989 L 15.4 109.175" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                        svgContentId: 10358662441
                                    },
                                    yFZLEczXt: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 103"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                        svgContentId: 10125398318
                                    }
                                }, i, d)
                            })]
                        }), a(r.div, {
                            className: "framer-1tdv34t",
                            "data-framer-name": "Arrow container",
                            layoutDependency: f,
                            layoutId: "xfvFW1PT6",
                            style: {
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4
                            },
                            children: [a(r.div, {
                                className: "framer-1qz2873",
                                "data-framer-name": "Request",
                                layoutDependency: f,
                                layoutId: "pHTY9HkX1",
                                children: [e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: a(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)))",
                                                "--framer-text-transform": "inherit"
                                            },
                                            children: ["Request LLM inference:", e(r.span, {
                                                style: {
                                                    "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                },
                                                children: e(r.br, {})
                                            }), "{Message, Model}"]
                                        })
                                    }),
                                    className: "framer-1vskzob",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    layoutDependency: f,
                                    layoutId: "Uz2ZADX6o",
                                    style: {
                                        "--extracted-1w3ko1f": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                        "--extracted-r6o4lv": "var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    variants: {
                                        gd5wMqSWR: {
                                            "--extracted-3sq8v0": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                        }
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            children: e(n, {
                                                children: a(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "8px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-alignment": "right",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: [e(r.span, {
                                                        style: {
                                                            "--framer-font-size": "11px"
                                                        },
                                                        children: "Request LLM inference:"
                                                    }), e(r.span, {
                                                        style: {
                                                            "--framer-font-size": "11px",
                                                            "--framer-text-color": "var(--extracted-3sq8v0, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                        },
                                                        children: e(r.br, {})
                                                    }), e(r.span, {
                                                        style: {
                                                            "--framer-font-size": "11px"
                                                        },
                                                        children: "{Message, Model}"
                                                    })]
                                                })
                                            })
                                        },
                                        yFZLEczXt: {
                                            children: e(n, {
                                                children: a(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "12px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: ["Request LLM inference:", e(r.span, {
                                                        style: {
                                                            "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))"
                                                        },
                                                        children: e(r.br, {})
                                                    }), "{Message, Model}"]
                                                })
                                            })
                                        }
                                    }, i, d)
                                }), e(w, {
                                    className: "framer-dvdwr9",
                                    "data-framer-name": "Arrow 6",
                                    layout: "position",
                                    layoutDependency: f,
                                    layoutId: "LX5YOZtW8",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 12"><path d="M 270 5.826 L 260 0.053 L 260 11.6 Z M 0 6.826 L 2.935 6.826 L 2.935 4.826 L 0 4.826 Z M 8.804 6.826 L 14.674 6.826 L 14.674 4.826 L 8.804 4.826 Z M 20.544 6.826 L 26.413 6.826 L 26.413 4.826 L 20.544 4.826 Z M 32.283 6.826 L 38.152 6.826 L 38.152 4.826 L 32.283 4.826 Z M 44.022 6.826 L 49.891 6.826 L 49.891 4.826 L 44.022 4.826 Z M 55.761 6.826 L 61.63 6.826 L 61.63 4.826 L 55.761 4.826 Z M 67.5 6.826 L 73.37 6.826 L 73.37 4.826 L 67.5 4.826 Z M 79.239 6.826 L 85.109 6.826 L 85.109 4.826 L 79.239 4.826 Z M 90.978 6.826 L 96.848 6.826 L 96.848 4.826 L 90.978 4.826 Z M 102.717 6.826 L 108.587 6.826 L 108.587 4.826 L 102.717 4.826 Z M 114.457 6.826 L 120.326 6.826 L 120.326 4.826 L 114.457 4.826 Z M 126.196 6.826 L 132.065 6.826 L 132.065 4.826 L 126.196 4.826 Z M 137.935 6.826 L 143.804 6.826 L 143.804 4.826 L 137.935 4.826 Z M 149.674 6.826 L 155.544 6.826 L 155.544 4.826 L 149.674 4.826 Z M 161.413 6.826 L 167.283 6.826 L 167.283 4.826 L 161.413 4.826 Z M 173.152 6.826 L 179.022 6.826 L 179.022 4.826 L 173.152 4.826 Z M 184.891 6.826 L 190.761 6.826 L 190.761 4.826 L 184.891 4.826 Z M 196.63 6.826 L 202.5 6.826 L 202.5 4.826 L 196.63 4.826 Z M 208.37 6.826 L 214.239 6.826 L 214.239 4.826 L 208.37 4.826 Z M 220.109 6.826 L 225.978 6.826 L 225.978 4.826 L 220.109 4.826 Z M 231.848 6.826 L 237.717 6.826 L 237.717 4.826 L 231.848 4.826 Z M 243.587 6.826 L 249.457 6.826 L 249.457 4.826 L 243.587 4.826 Z M 255.326 6.826 L 261.196 6.826 L 261.196 4.826 L 255.326 4.826 Z M 270 5.826 L 260 0.053 L 260 11.6 Z M 0 6.826 L 2.935 6.826 L 2.935 4.826 L 0 4.826 Z M 8.804 6.826 L 14.674 6.826 L 14.674 4.826 L 8.804 4.826 Z M 20.544 6.826 L 26.413 6.826 L 26.413 4.826 L 20.544 4.826 Z M 32.283 6.826 L 38.152 6.826 L 38.152 4.826 L 32.283 4.826 Z M 44.022 6.826 L 49.891 6.826 L 49.891 4.826 L 44.022 4.826 Z M 55.761 6.826 L 61.63 6.826 L 61.63 4.826 L 55.761 4.826 Z M 67.5 6.826 L 73.37 6.826 L 73.37 4.826 L 67.5 4.826 Z M 79.239 6.826 L 85.109 6.826 L 85.109 4.826 L 79.239 4.826 Z M 90.978 6.826 L 96.848 6.826 L 96.848 4.826 L 90.978 4.826 Z M 102.717 6.826 L 108.587 6.826 L 108.587 4.826 L 102.717 4.826 Z M 114.457 6.826 L 120.326 6.826 L 120.326 4.826 L 114.457 4.826 Z M 126.196 6.826 L 132.065 6.826 L 132.065 4.826 L 126.196 4.826 Z M 137.935 6.826 L 143.804 6.826 L 143.804 4.826 L 137.935 4.826 Z M 149.674 6.826 L 155.544 6.826 L 155.544 4.826 L 149.674 4.826 Z M 161.413 6.826 L 167.283 6.826 L 167.283 4.826 L 161.413 4.826 Z M 173.152 6.826 L 179.022 6.826 L 179.022 4.826 L 173.152 4.826 Z M 184.891 6.826 L 190.761 6.826 L 190.761 4.826 L 184.891 4.826 Z M 196.63 6.826 L 202.5 6.826 L 202.5 4.826 L 196.63 4.826 Z M 208.37 6.826 L 214.239 6.826 L 214.239 4.826 L 208.37 4.826 Z M 220.109 6.826 L 225.978 6.826 L 225.978 4.826 L 220.109 4.826 Z M 231.848 6.826 L 237.717 6.826 L 237.717 4.826 L 231.848 4.826 Z M 243.587 6.826 L 249.457 6.826 L 249.457 4.826 L 243.587 4.826 Z M 255.326 6.826 L 261.196 6.826 L 261.196 4.826 L 255.326 4.826 Z" fill="var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)) /* {&quot;name&quot;:&quot;Accent - purple&quot;} */"></path></svg>',
                                    svgContentId: 9977018825,
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 143"><path d="M 150 3.355 L 144.444 -0.013 L 144.444 6.723 Z M 0 3.938 L 1.63 3.938 L 1.63 2.771 L 0 2.771 Z M 4.891 3.938 L 8.152 3.938 L 8.152 2.771 L 4.891 2.771 Z M 11.413 3.938 L 14.674 3.938 L 14.674 2.771 L 11.413 2.771 Z M 17.935 3.938 L 21.196 3.938 L 21.196 2.771 L 17.935 2.771 Z M 24.456 3.938 L 27.717 3.938 L 27.717 2.771 L 24.456 2.771 Z M 30.978 3.938 L 34.239 3.938 L 34.239 2.771 L 30.978 2.771 Z M 37.5 3.938 L 40.761 3.938 L 40.761 2.771 L 37.5 2.771 Z M 44.022 3.938 L 47.283 3.938 L 47.283 2.771 L 44.022 2.771 Z M 50.544 3.938 L 53.804 3.938 L 53.804 2.771 L 50.544 2.771 Z M 57.065 3.938 L 60.326 3.938 L 60.326 2.771 L 57.065 2.771 Z M 63.587 3.938 L 66.848 3.938 L 66.848 2.771 L 63.587 2.771 Z M 70.109 3.938 L 73.369 3.938 L 73.369 2.771 L 70.109 2.771 Z M 76.631 3.938 L 79.891 3.938 L 79.891 2.771 L 76.631 2.771 Z M 83.152 3.938 L 86.413 3.938 L 86.413 2.771 L 83.152 2.771 Z M 89.674 3.938 L 92.935 3.938 L 92.935 2.771 L 89.674 2.771 Z M 96.196 3.938 L 99.457 3.938 L 99.457 2.771 L 96.196 2.771 Z M 102.717 3.938 L 105.978 3.938 L 105.978 2.771 L 102.717 2.771 Z M 109.239 3.938 L 112.5 3.938 L 112.5 2.771 L 109.239 2.771 Z M 115.761 3.938 L 119.022 3.938 L 119.022 2.771 L 115.761 2.771 Z M 122.283 3.938 L 125.543 3.938 L 125.543 2.771 L 122.283 2.771 Z M 128.804 3.938 L 132.065 3.938 L 132.065 2.771 L 128.804 2.771 Z M 135.326 3.938 L 138.587 3.938 L 138.587 2.771 L 135.326 2.771 Z M 141.848 3.938 L 145.109 3.938 L 145.109 2.771 L 141.848 2.771 Z M 150 3.355 L 144.444 -0.013 L 144.444 6.723 Z M 0 3.938 L 1.63 3.938 L 1.63 2.771 L 0 2.771 Z M 4.891 3.938 L 8.152 3.938 L 8.152 2.771 L 4.891 2.771 Z M 11.413 3.938 L 14.674 3.938 L 14.674 2.771 L 11.413 2.771 Z M 17.935 3.938 L 21.196 3.938 L 21.196 2.771 L 17.935 2.771 Z M 24.456 3.938 L 27.717 3.938 L 27.717 2.771 L 24.456 2.771 Z M 30.978 3.938 L 34.239 3.938 L 34.239 2.771 L 30.978 2.771 Z M 37.5 3.938 L 40.761 3.938 L 40.761 2.771 L 37.5 2.771 Z M 44.022 3.938 L 47.283 3.938 L 47.283 2.771 L 44.022 2.771 Z M 50.544 3.938 L 53.804 3.938 L 53.804 2.771 L 50.544 2.771 Z M 57.065 3.938 L 60.326 3.938 L 60.326 2.771 L 57.065 2.771 Z M 63.587 3.938 L 66.848 3.938 L 66.848 2.771 L 63.587 2.771 Z M 70.109 3.938 L 73.369 3.938 L 73.369 2.771 L 70.109 2.771 Z M 76.631 3.938 L 79.891 3.938 L 79.891 2.771 L 76.631 2.771 Z M 83.152 3.938 L 86.413 3.938 L 86.413 2.771 L 83.152 2.771 Z M 89.674 3.938 L 92.935 3.938 L 92.935 2.771 L 89.674 2.771 Z M 96.196 3.938 L 99.457 3.938 L 99.457 2.771 L 96.196 2.771 Z M 102.717 3.938 L 105.978 3.938 L 105.978 2.771 L 102.717 2.771 Z M 109.239 3.938 L 112.5 3.938 L 112.5 2.771 L 109.239 2.771 Z M 115.761 3.938 L 119.022 3.938 L 119.022 2.771 L 115.761 2.771 Z M 122.283 3.938 L 125.543 3.938 L 125.543 2.771 L 122.283 2.771 Z M 128.804 3.938 L 132.065 3.938 L 132.065 2.771 L 128.804 2.771 Z M 135.326 3.938 L 138.587 3.938 L 138.587 2.771 L 135.326 2.771 Z M 141.848 3.938 L 145.109 3.938 L 145.109 2.771 L 141.848 2.771 Z" transform="translate(-72 62.044) rotate(90 75 3.368)" fill="var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)) /* {&quot;name&quot;:&quot;Accent - purple&quot;} */"></path></svg>',
                                            svgContentId: 8766295666
                                        },
                                        yFZLEczXt: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 7"><path d="M 150 3.399 L 144.444 0.031 L 144.444 6.766 Z M 0 3.982 L 1.63 3.982 L 1.63 2.815 L 0 2.815 Z M 4.891 3.982 L 8.152 3.982 L 8.152 2.815 L 4.891 2.815 Z M 11.413 3.982 L 14.674 3.982 L 14.674 2.815 L 11.413 2.815 Z M 17.935 3.982 L 21.196 3.982 L 21.196 2.815 L 17.935 2.815 Z M 24.456 3.982 L 27.717 3.982 L 27.717 2.815 L 24.456 2.815 Z M 30.978 3.982 L 34.239 3.982 L 34.239 2.815 L 30.978 2.815 Z M 37.5 3.982 L 40.761 3.982 L 40.761 2.815 L 37.5 2.815 Z M 44.022 3.982 L 47.283 3.982 L 47.283 2.815 L 44.022 2.815 Z M 50.544 3.982 L 53.804 3.982 L 53.804 2.815 L 50.544 2.815 Z M 57.065 3.982 L 60.326 3.982 L 60.326 2.815 L 57.065 2.815 Z M 63.587 3.982 L 66.848 3.982 L 66.848 2.815 L 63.587 2.815 Z M 70.109 3.982 L 73.369 3.982 L 73.369 2.815 L 70.109 2.815 Z M 76.631 3.982 L 79.891 3.982 L 79.891 2.815 L 76.631 2.815 Z M 83.152 3.982 L 86.413 3.982 L 86.413 2.815 L 83.152 2.815 Z M 89.674 3.982 L 92.935 3.982 L 92.935 2.815 L 89.674 2.815 Z M 96.196 3.982 L 99.457 3.982 L 99.457 2.815 L 96.196 2.815 Z M 102.717 3.982 L 105.978 3.982 L 105.978 2.815 L 102.717 2.815 Z M 109.239 3.982 L 112.5 3.982 L 112.5 2.815 L 109.239 2.815 Z M 115.761 3.982 L 119.022 3.982 L 119.022 2.815 L 115.761 2.815 Z M 122.283 3.982 L 125.543 3.982 L 125.543 2.815 L 122.283 2.815 Z M 128.804 3.982 L 132.065 3.982 L 132.065 2.815 L 128.804 2.815 Z M 135.326 3.982 L 138.587 3.982 L 138.587 2.815 L 135.326 2.815 Z M 141.848 3.982 L 145.109 3.982 L 145.109 2.815 L 141.848 2.815 Z M 150 3.399 L 144.444 0.031 L 144.444 6.766 Z M 0 3.982 L 1.63 3.982 L 1.63 2.815 L 0 2.815 Z M 4.891 3.982 L 8.152 3.982 L 8.152 2.815 L 4.891 2.815 Z M 11.413 3.982 L 14.674 3.982 L 14.674 2.815 L 11.413 2.815 Z M 17.935 3.982 L 21.196 3.982 L 21.196 2.815 L 17.935 2.815 Z M 24.456 3.982 L 27.717 3.982 L 27.717 2.815 L 24.456 2.815 Z M 30.978 3.982 L 34.239 3.982 L 34.239 2.815 L 30.978 2.815 Z M 37.5 3.982 L 40.761 3.982 L 40.761 2.815 L 37.5 2.815 Z M 44.022 3.982 L 47.283 3.982 L 47.283 2.815 L 44.022 2.815 Z M 50.544 3.982 L 53.804 3.982 L 53.804 2.815 L 50.544 2.815 Z M 57.065 3.982 L 60.326 3.982 L 60.326 2.815 L 57.065 2.815 Z M 63.587 3.982 L 66.848 3.982 L 66.848 2.815 L 63.587 2.815 Z M 70.109 3.982 L 73.369 3.982 L 73.369 2.815 L 70.109 2.815 Z M 76.631 3.982 L 79.891 3.982 L 79.891 2.815 L 76.631 2.815 Z M 83.152 3.982 L 86.413 3.982 L 86.413 2.815 L 83.152 2.815 Z M 89.674 3.982 L 92.935 3.982 L 92.935 2.815 L 89.674 2.815 Z M 96.196 3.982 L 99.457 3.982 L 99.457 2.815 L 96.196 2.815 Z M 102.717 3.982 L 105.978 3.982 L 105.978 2.815 L 102.717 2.815 Z M 109.239 3.982 L 112.5 3.982 L 112.5 2.815 L 109.239 2.815 Z M 115.761 3.982 L 119.022 3.982 L 119.022 2.815 L 115.761 2.815 Z M 122.283 3.982 L 125.543 3.982 L 125.543 2.815 L 122.283 2.815 Z M 128.804 3.982 L 132.065 3.982 L 132.065 2.815 L 128.804 2.815 Z M 135.326 3.982 L 138.587 3.982 L 138.587 2.815 L 135.326 2.815 Z M 141.848 3.982 L 145.109 3.982 L 145.109 2.815 L 141.848 2.815 Z" fill="var(--token-9cf80c3c-8f64-4037-b1a0-77568e1370cb, rgb(187, 162, 255)) /* {&quot;name&quot;:&quot;Accent - purple&quot;} */"></path></svg>',
                                            svgContentId: 11698834234
                                        }
                                    }, i, d)
                                })]
                            }), a(r.div, {
                                className: "framer-5h7vjb",
                                "data-framer-name": "Inference",
                                layoutDependency: f,
                                layoutId: "Qgo9JTfsF",
                                children: [e(w, {
                                    className: "framer-1ks2a4m",
                                    "data-framer-name": "Arrow 6",
                                    layout: "position",
                                    layoutDependency: f,
                                    layoutId: "bt64CqAxa",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 12"><path d="M 270 5.774 L 260 0 L 260 11.547 Z M 0 6.774 L 2.935 6.774 L 2.935 4.774 L 0 4.774 Z M 8.804 6.774 L 14.674 6.774 L 14.674 4.774 L 8.804 4.774 Z M 20.544 6.774 L 26.413 6.774 L 26.413 4.774 L 20.544 4.774 Z M 32.283 6.774 L 38.152 6.774 L 38.152 4.774 L 32.283 4.774 Z M 44.022 6.774 L 49.891 6.774 L 49.891 4.774 L 44.022 4.774 Z M 55.761 6.774 L 61.63 6.774 L 61.63 4.774 L 55.761 4.774 Z M 67.5 6.774 L 73.37 6.774 L 73.37 4.774 L 67.5 4.774 Z M 79.239 6.774 L 85.109 6.774 L 85.109 4.774 L 79.239 4.774 Z M 90.978 6.774 L 96.848 6.774 L 96.848 4.774 L 90.978 4.774 Z M 102.717 6.774 L 108.587 6.774 L 108.587 4.774 L 102.717 4.774 Z M 114.457 6.774 L 120.326 6.774 L 120.326 4.774 L 114.457 4.774 Z M 126.196 6.774 L 132.065 6.774 L 132.065 4.774 L 126.196 4.774 Z M 137.935 6.774 L 143.804 6.774 L 143.804 4.774 L 137.935 4.774 Z M 149.674 6.774 L 155.544 6.774 L 155.544 4.774 L 149.674 4.774 Z M 161.413 6.774 L 167.283 6.774 L 167.283 4.774 L 161.413 4.774 Z M 173.152 6.774 L 179.022 6.774 L 179.022 4.774 L 173.152 4.774 Z M 184.891 6.774 L 190.761 6.774 L 190.761 4.774 L 184.891 4.774 Z M 196.63 6.774 L 202.5 6.774 L 202.5 4.774 L 196.63 4.774 Z M 208.37 6.774 L 214.239 6.774 L 214.239 4.774 L 208.37 4.774 Z M 220.109 6.774 L 225.978 6.774 L 225.978 4.774 L 220.109 4.774 Z M 231.848 6.774 L 237.717 6.774 L 237.717 4.774 L 231.848 4.774 Z M 243.587 6.774 L 249.457 6.774 L 249.457 4.774 L 243.587 4.774 Z M 255.326 6.774 L 261.196 6.774 L 261.196 4.774 L 255.326 4.774 Z M 270 5.774 L 260 0 L 260 11.547 Z M 0 6.774 L 2.935 6.774 L 2.935 4.774 L 0 4.774 Z M 8.804 6.774 L 14.674 6.774 L 14.674 4.774 L 8.804 4.774 Z M 20.544 6.774 L 26.413 6.774 L 26.413 4.774 L 20.544 4.774 Z M 32.283 6.774 L 38.152 6.774 L 38.152 4.774 L 32.283 4.774 Z M 44.022 6.774 L 49.891 6.774 L 49.891 4.774 L 44.022 4.774 Z M 55.761 6.774 L 61.63 6.774 L 61.63 4.774 L 55.761 4.774 Z M 67.5 6.774 L 73.37 6.774 L 73.37 4.774 L 67.5 4.774 Z M 79.239 6.774 L 85.109 6.774 L 85.109 4.774 L 79.239 4.774 Z M 90.978 6.774 L 96.848 6.774 L 96.848 4.774 L 90.978 4.774 Z M 102.717 6.774 L 108.587 6.774 L 108.587 4.774 L 102.717 4.774 Z M 114.457 6.774 L 120.326 6.774 L 120.326 4.774 L 114.457 4.774 Z M 126.196 6.774 L 132.065 6.774 L 132.065 4.774 L 126.196 4.774 Z M 137.935 6.774 L 143.804 6.774 L 143.804 4.774 L 137.935 4.774 Z M 149.674 6.774 L 155.544 6.774 L 155.544 4.774 L 149.674 4.774 Z M 161.413 6.774 L 167.283 6.774 L 167.283 4.774 L 161.413 4.774 Z M 173.152 6.774 L 179.022 6.774 L 179.022 4.774 L 173.152 4.774 Z M 184.891 6.774 L 190.761 6.774 L 190.761 4.774 L 184.891 4.774 Z M 196.63 6.774 L 202.5 6.774 L 202.5 4.774 L 196.63 4.774 Z M 208.37 6.774 L 214.239 6.774 L 214.239 4.774 L 208.37 4.774 Z M 220.109 6.774 L 225.978 6.774 L 225.978 4.774 L 220.109 4.774 Z M 231.848 6.774 L 237.717 6.774 L 237.717 4.774 L 231.848 4.774 Z M 243.587 6.774 L 249.457 6.774 L 249.457 4.774 L 243.587 4.774 Z M 255.326 6.774 L 261.196 6.774 L 261.196 4.774 L 255.326 4.774 Z" transform="translate(0 0.053) rotate(180 135 5.774)" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.8)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                    svgContentId: 8680987971,
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 143"><path d="M 149.997 3.368 L 144.403 0 L 144.403 6.736 Z M -1.059 3.951 L 0.583 3.951 L 0.583 2.785 L -1.059 2.785 Z M 3.867 3.951 L 7.15 3.951 L 7.15 2.785 L 3.867 2.785 Z M 10.434 3.951 L 13.718 3.951 L 13.718 2.785 L 10.434 2.785 Z M 17.002 3.951 L 20.286 3.951 L 20.286 2.785 L 17.002 2.785 Z M 23.57 3.951 L 26.853 3.951 L 26.853 2.785 L 23.57 2.785 Z M 30.137 3.951 L 33.421 3.951 L 33.421 2.785 L 30.137 2.785 Z M 36.705 3.951 L 39.989 3.951 L 39.989 2.785 L 36.705 2.785 Z M 43.273 3.951 L 46.556 3.951 L 46.556 2.785 L 43.273 2.785 Z M 49.84 3.951 L 53.124 3.951 L 53.124 2.785 L 49.84 2.785 Z M 56.408 3.951 L 59.692 3.951 L 59.692 2.785 L 56.408 2.785 Z M 62.976 3.951 L 66.259 3.951 L 66.259 2.785 L 62.976 2.785 Z M 69.543 3.951 L 72.827 3.951 L 72.827 2.785 L 69.543 2.785 Z M 76.111 3.951 L 79.395 3.951 L 79.395 2.785 L 76.111 2.785 Z M 82.679 3.951 L 85.963 3.951 L 85.963 2.785 L 82.679 2.785 Z M 89.246 3.951 L 92.53 3.951 L 92.53 2.785 L 89.246 2.785 Z M 95.814 3.951 L 99.098 3.951 L 99.098 2.785 L 95.814 2.785 Z M 102.381 3.951 L 105.666 3.951 L 105.666 2.785 L 102.381 2.785 Z M 108.949 3.951 L 112.233 3.951 L 112.233 2.785 L 108.949 2.785 Z M 115.517 3.951 L 118.801 3.951 L 118.801 2.785 L 115.517 2.785 Z M 122.085 3.951 L 125.368 3.951 L 125.368 2.785 L 122.085 2.785 Z M 128.652 3.951 L 131.936 3.951 L 131.936 2.785 L 128.652 2.785 Z M 135.22 3.951 L 138.504 3.951 L 138.504 2.785 L 135.22 2.785 Z M 141.788 3.951 L 145.072 3.951 L 145.072 2.785 L 141.788 2.785 Z M 149.997 3.368 L 144.403 0 L 144.403 6.736 Z M -1.059 3.951 L 0.583 3.951 L 0.583 2.785 L -1.059 2.785 Z M 3.867 3.951 L 7.15 3.951 L 7.15 2.785 L 3.867 2.785 Z M 10.434 3.951 L 13.718 3.951 L 13.718 2.785 L 10.434 2.785 Z M 17.002 3.951 L 20.286 3.951 L 20.286 2.785 L 17.002 2.785 Z M 23.57 3.951 L 26.853 3.951 L 26.853 2.785 L 23.57 2.785 Z M 30.137 3.951 L 33.421 3.951 L 33.421 2.785 L 30.137 2.785 Z M 36.705 3.951 L 39.989 3.951 L 39.989 2.785 L 36.705 2.785 Z M 43.273 3.951 L 46.556 3.951 L 46.556 2.785 L 43.273 2.785 Z M 49.84 3.951 L 53.124 3.951 L 53.124 2.785 L 49.84 2.785 Z M 56.408 3.951 L 59.692 3.951 L 59.692 2.785 L 56.408 2.785 Z M 62.976 3.951 L 66.259 3.951 L 66.259 2.785 L 62.976 2.785 Z M 69.543 3.951 L 72.827 3.951 L 72.827 2.785 L 69.543 2.785 Z M 76.111 3.951 L 79.395 3.951 L 79.395 2.785 L 76.111 2.785 Z M 82.679 3.951 L 85.963 3.951 L 85.963 2.785 L 82.679 2.785 Z M 89.246 3.951 L 92.53 3.951 L 92.53 2.785 L 89.246 2.785 Z M 95.814 3.951 L 99.098 3.951 L 99.098 2.785 L 95.814 2.785 Z M 102.381 3.951 L 105.666 3.951 L 105.666 2.785 L 102.381 2.785 Z M 108.949 3.951 L 112.233 3.951 L 112.233 2.785 L 108.949 2.785 Z M 115.517 3.951 L 118.801 3.951 L 118.801 2.785 L 115.517 2.785 Z M 122.085 3.951 L 125.368 3.951 L 125.368 2.785 L 122.085 2.785 Z M 128.652 3.951 L 131.936 3.951 L 131.936 2.785 L 128.652 2.785 Z M 135.22 3.951 L 138.504 3.951 L 138.504 2.785 L 135.22 2.785 Z M 141.788 3.951 L 145.072 3.951 L 145.072 2.785 L 141.788 2.785 Z" transform="translate(-72.472 72.562) rotate(270 75.528 3.368)" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.8)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                            svgContentId: 9302108707
                                        },
                                        yFZLEczXt: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 7"><path d="M 220 6.268 L 214.444 2.9 L 214.444 9.636 Z M 70 6.851 L 71.63 6.851 L 71.63 5.684 L 70 5.684 Z M 74.891 6.851 L 78.152 6.851 L 78.152 5.684 L 74.891 5.684 Z M 81.413 6.851 L 84.674 6.851 L 84.674 5.684 L 81.413 5.684 Z M 87.935 6.851 L 91.196 6.851 L 91.196 5.684 L 87.935 5.684 Z M 94.457 6.851 L 97.717 6.851 L 97.717 5.684 L 94.457 5.684 Z M 100.978 6.851 L 104.239 6.851 L 104.239 5.684 L 100.978 5.684 Z M 107.5 6.851 L 110.761 6.851 L 110.761 5.684 L 107.5 5.684 Z M 114.022 6.851 L 117.283 6.851 L 117.283 5.684 L 114.022 5.684 Z M 120.544 6.851 L 123.804 6.851 L 123.804 5.684 L 120.544 5.684 Z M 127.065 6.851 L 130.326 6.851 L 130.326 5.684 L 127.065 5.684 Z M 133.587 6.851 L 136.848 6.851 L 136.848 5.684 L 133.587 5.684 Z M 140.109 6.851 L 143.369 6.851 L 143.369 5.684 L 140.109 5.684 Z M 146.631 6.851 L 149.891 6.851 L 149.891 5.684 L 146.631 5.684 Z M 153.152 6.851 L 156.413 6.851 L 156.413 5.684 L 153.152 5.684 Z M 159.674 6.851 L 162.935 6.851 L 162.935 5.684 L 159.674 5.684 Z M 166.196 6.851 L 169.457 6.851 L 169.457 5.684 L 166.196 5.684 Z M 172.717 6.851 L 175.978 6.851 L 175.978 5.684 L 172.717 5.684 Z M 179.239 6.851 L 182.5 6.851 L 182.5 5.684 L 179.239 5.684 Z M 185.761 6.851 L 189.022 6.851 L 189.022 5.684 L 185.761 5.684 Z M 192.283 6.851 L 195.543 6.851 L 195.543 5.684 L 192.283 5.684 Z M 198.804 6.851 L 202.065 6.851 L 202.065 5.684 L 198.804 5.684 Z M 205.326 6.851 L 208.587 6.851 L 208.587 5.684 L 205.326 5.684 Z M 211.848 6.851 L 215.109 6.851 L 215.109 5.684 L 211.848 5.684 Z M 220 6.268 L 214.444 2.9 L 214.444 9.636 Z M 70 6.851 L 71.63 6.851 L 71.63 5.684 L 70 5.684 Z M 74.891 6.851 L 78.152 6.851 L 78.152 5.684 L 74.891 5.684 Z M 81.413 6.851 L 84.674 6.851 L 84.674 5.684 L 81.413 5.684 Z M 87.935 6.851 L 91.196 6.851 L 91.196 5.684 L 87.935 5.684 Z M 94.457 6.851 L 97.717 6.851 L 97.717 5.684 L 94.457 5.684 Z M 100.978 6.851 L 104.239 6.851 L 104.239 5.684 L 100.978 5.684 Z M 107.5 6.851 L 110.761 6.851 L 110.761 5.684 L 107.5 5.684 Z M 114.022 6.851 L 117.283 6.851 L 117.283 5.684 L 114.022 5.684 Z M 120.544 6.851 L 123.804 6.851 L 123.804 5.684 L 120.544 5.684 Z M 127.065 6.851 L 130.326 6.851 L 130.326 5.684 L 127.065 5.684 Z M 133.587 6.851 L 136.848 6.851 L 136.848 5.684 L 133.587 5.684 Z M 140.109 6.851 L 143.369 6.851 L 143.369 5.684 L 140.109 5.684 Z M 146.631 6.851 L 149.891 6.851 L 149.891 5.684 L 146.631 5.684 Z M 153.152 6.851 L 156.413 6.851 L 156.413 5.684 L 153.152 5.684 Z M 159.674 6.851 L 162.935 6.851 L 162.935 5.684 L 159.674 5.684 Z M 166.196 6.851 L 169.457 6.851 L 169.457 5.684 L 166.196 5.684 Z M 172.717 6.851 L 175.978 6.851 L 175.978 5.684 L 172.717 5.684 Z M 179.239 6.851 L 182.5 6.851 L 182.5 5.684 L 179.239 5.684 Z M 185.761 6.851 L 189.022 6.851 L 189.022 5.684 L 185.761 5.684 Z M 192.283 6.851 L 195.543 6.851 L 195.543 5.684 L 192.283 5.684 Z M 198.804 6.851 L 202.065 6.851 L 202.065 5.684 L 198.804 5.684 Z M 205.326 6.851 L 208.587 6.851 L 208.587 5.684 L 205.326 5.684 Z M 211.848 6.851 L 215.109 6.851 L 215.109 5.684 L 211.848 5.684 Z" transform="translate(0 0.044) rotate(180 110 4.811)" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.8)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                            svgContentId: 12376756836
                                        }
                                    }, i, d)
                                }), e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: a(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment": "right",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))",
                                                "--framer-text-transform": "inherit"
                                            },
                                            children: ["Inference response:", e(r.br, {}), "{Message, Proof}"]
                                        })
                                    }),
                                    className: "framer-dsohrz",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    layoutDependency: f,
                                    layoutId: "oLcTbm4jt",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            children: e(n, {
                                                children: a(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "8px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: [e(r.span, {
                                                        style: {
                                                            "--framer-font-size": "11px"
                                                        },
                                                        children: "Inference response:"
                                                    }), e(r.span, {
                                                        style: {
                                                            "--framer-font-size": "11px"
                                                        },
                                                        children: e(r.br, {})
                                                    }), e(r.span, {
                                                        style: {
                                                            "--framer-font-size": "11px"
                                                        },
                                                        children: "{Message, Proof}"
                                                    })]
                                                })
                                            })
                                        },
                                        yFZLEczXt: {
                                            children: e(n, {
                                                children: a(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "12px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-alignment": "right",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: ["Inference response:", e(r.br, {}), "{Message, Proof}"]
                                                })
                                            })
                                        }
                                    }, i, d)
                                })]
                            })]
                        }), a(r.div, {
                            className: "framer-9tollg",
                            "data-framer-name": "Box container - Tee",
                            layoutDependency: f,
                            layoutId: "Q0n1gYOv2",
                            children: [a(r.div, {
                                className: "framer-ogfro9",
                                "data-border": !0,
                                "data-framer-name": "Box",
                                layoutDependency: f,
                                layoutId: "tCsc9SX4m",
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
                                    borderTopRightRadius: 4
                                },
                                children: [e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Tee NETWORK"
                                        })
                                    }),
                                    className: "framer-r1gb87",
                                    effect: ze,
                                    fonts: ["GF;Press Start 2P-regular"],
                                    layoutDependency: f,
                                    layoutId: "VgONhLBHU",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "Tee NETWORK"
                                                })
                                            }),
                                            effect: void 0
                                        },
                                        yFZLEczXt: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "Tee NETWORK"
                                                })
                                            })
                                        }
                                    }, i, d)
                                }), e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                "--framer-text-transform": "inherit"
                                            },
                                            children: "Hardware enclaves with access to LLM APIs"
                                        })
                                    }),
                                    className: "framer-uzyzs0",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    layoutDependency: f,
                                    layoutId: "UbyPWelOR",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "11px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "Hardware enclaves with access to LLM APIs"
                                                })
                                            })
                                        },
                                        yFZLEczXt: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "12px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "Hardware enclaves with access to LLM APIs"
                                                })
                                            })
                                        }
                                    }, i, d)
                                })]
                            }), e(w, {
                                className: "framer-1x16hhy",
                                "data-framer-name": "Frame 2190",
                                layout: "position",
                                layoutDependency: f,
                                layoutId: "WKXgezWCg",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 111"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                svgContentId: 12637279978,
                                withExternalLayout: !0,
                                ...v({
                                    gd5wMqSWR: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 103"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                        svgContentId: 10125398318
                                    },
                                    yFZLEczXt: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 103"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                        svgContentId: 10125398318
                                    }
                                }, i, d)
                            })]
                        })]
                    }), a(r.div, {
                        className: "framer-8wnjwj",
                        "data-framer-name": "Row 2",
                        layoutDependency: f,
                        layoutId: "ybNE1ssWM",
                        children: [a(r.div, {
                            className: "framer-i4sz5e",
                            "data-framer-name": "Arrow box - left",
                            layoutDependency: f,
                            layoutId: "KO71EV0Fc",
                            children: [e(c, {
                                __fromCanvasComponent: !0,
                                children: a(n, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "right",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                        },
                                        children: "Verify:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "right",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                        },
                                        children: "{Proof}"
                                    })]
                                }),
                                className: "framer-1c0c9v3",
                                fonts: ["GF;Roboto Mono-regular"],
                                layoutDependency: f,
                                layoutId: "H5NGPYgdh",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                    "--extracted-r6o4lv": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...v({
                                    gd5wMqSWR: {
                                        children: a(n, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "11px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "Verify:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "11px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "{Proof}"
                                            })]
                                        })
                                    },
                                    yFZLEczXt: {
                                        children: a(n, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "12px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "Verify:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "12px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "right",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "{Proof}"
                                            })]
                                        })
                                    }
                                }, i, d)
                            }), e(w, {
                                className: "framer-ijg8il",
                                "data-framer-name": "Arrow 9",
                                layout: "position",
                                layoutDependency: f,
                                layoutId: "MISVVZLvf",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135 71"><path d="M 133.795 65.338 L 125.759 69.996 L 125.759 60.68 Z M 126.331 66.145 L 121.355 66.145 L 121.355 64.531 L 126.331 64.531 Z M 116.379 66.145 L 111.403 66.145 L 111.403 64.531 L 116.379 64.531 Z M 106.427 66.145 L 101.451 66.145 L 101.451 64.531 L 106.427 64.531 Z M 96.475 66.145 L 91.499 66.145 L 91.499 64.531 L 96.475 64.531 Z M 86.523 66.145 L 81.547 66.145 L 81.547 64.531 L 86.523 64.531 Z M 76.571 66.145 L 71.595 66.145 L 71.595 64.531 L 76.571 64.531 Z M 66.619 66.145 L 61.643 66.145 L 61.643 64.531 L 66.619 64.531 Z M 56.667 66.145 L 51.691 66.145 L 51.691 64.531 L 56.667 64.531 Z M 46.715 66.145 L 41.739 66.145 L 41.739 64.531 L 46.715 64.531 Z M 36.763 66.145 L 31.787 66.145 L 31.787 64.531 L 36.763 64.531 Z M 26.811 66.145 L 21.836 66.145 L 21.836 64.531 L 26.811 64.531 Z M 16.86 66.145 L 11.884 66.145 L 11.884 64.531 L 16.86 64.531 Z M 6.908 66.145 L 4.42 66.145 L 4.42 64.531 L 6.908 64.531 Z M 4.42 66.145 C 3.876 66.145 3.356 66.036 2.881 65.838 L 3.497 64.348 C 3.78 64.466 4.091 64.531 4.42 64.531 Z M 0.707 63.655 C 0.51 63.178 0.402 62.656 0.402 62.111 L 2.009 62.111 C 2.009 62.44 2.074 62.753 2.192 63.037 Z M 0.402 62.111 L 0.402 59.589 L 2.009 59.589 L 2.009 62.111 Z M 0.402 54.547 L 0.402 49.504 L 2.009 49.504 L 2.009 54.547 Z M 0.402 44.462 L 0.402 39.419 L 2.009 39.419 L 2.009 44.462 Z M 0.402 34.376 L 0.402 29.334 L 2.009 29.334 L 2.009 34.376 Z M 0.402 24.291 L 0.402 19.249 L 2.009 19.249 L 2.009 24.291 Z M 0.402 14.206 L 0.402 9.163 L 2.009 9.163 L 2.009 14.206 Z M 0.402 4.121 L 0.402 1.599 L 2.009 1.599 L 2.009 4.121 Z" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                svgContentId: 10028465670,
                                withExternalLayout: !0,
                                ...v({
                                    gd5wMqSWR: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 61"><path d="M 60 2.092 L 56.386 0 L 56.386 4.183 Z M 56.643 1.729 L 54.404 1.729 L 54.404 2.454 L 56.643 2.454 Z M 52.166 1.729 L 49.928 1.729 L 49.928 2.454 L 52.166 2.454 Z M 47.69 1.729 L 45.452 1.729 L 45.452 2.454 L 47.69 2.454 Z M 43.214 1.729 L 40.975 1.729 L 40.975 2.454 L 43.214 2.454 Z M 38.737 1.729 L 36.499 1.729 L 36.499 2.454 L 38.737 2.454 Z M 34.261 1.729 L 32.023 1.729 L 32.023 2.454 L 34.261 2.454 Z M 29.785 1.729 L 27.546 1.729 L 27.546 2.454 L 29.785 2.454 Z M 25.308 1.729 L 23.07 1.729 L 23.07 2.454 L 25.308 2.454 Z M 20.832 1.729 L 18.594 1.729 L 18.594 2.454 L 20.832 2.454 Z M 16.355 1.729 L 14.117 1.729 L 14.117 2.454 L 16.355 2.454 Z M 11.879 1.729 L 9.641 1.729 L 9.641 2.454 L 11.879 2.454 Z M 7.403 1.729 L 5.165 1.729 L 5.165 2.454 L 7.403 2.454 Z M 2.926 1.729 L 1.807 1.729 L 1.807 2.454 L 2.926 2.454 Z M 1.807 1.729 C 1.563 1.729 1.329 1.778 1.115 1.867 L 1.392 2.536 C 1.52 2.483 1.66 2.454 1.807 2.454 Z M 0.137 2.847 C 0.049 3.061 0 3.296 0 3.541 L 0.723 3.541 C 0.723 3.393 0.752 3.252 0.805 3.125 Z M 0 3.541 L 0 4.673 L 0.723 4.673 L 0.723 3.541 Z M 0 6.937 L 0 9.201 L 0.723 9.201 L 0.723 6.937 Z M 0 11.465 L 0 13.729 L 0.723 13.729 L 0.723 11.465 Z M 0 15.994 L 0 18.258 L 0.723 18.258 L 0.723 15.994 Z M 0 20.522 L 0 22.786 L 0.723 22.786 L 0.723 20.522 Z M 0 25.05 L 0 27.314 L 0.723 27.314 L 0.723 25.05 Z M 0 29.579 L 0 30.711 L 0.723 30.711 L 0.723 29.579 Z" transform="translate(-13.363 15.297) rotate(90 30 15.355)" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                        svgContentId: 9954089013
                                    },
                                    yFZLEczXt: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 42"><path d="M 79.286 38.651 L 74.524 41.406 L 74.524 35.895 Z M 74.863 39.128 L 71.914 39.128 L 71.914 38.173 L 74.863 38.173 Z M 68.965 39.128 L 66.017 39.128 L 66.017 38.173 L 68.965 38.173 Z M 63.068 39.128 L 60.119 39.128 L 60.119 38.173 L 63.068 38.173 Z M 57.17 39.128 L 54.221 39.128 L 54.221 38.173 L 57.17 38.173 Z M 51.273 39.128 L 48.324 39.128 L 48.324 38.173 L 51.273 38.173 Z M 45.375 39.128 L 42.427 39.128 L 42.427 38.173 L 45.375 38.173 Z M 39.478 39.128 L 36.529 39.128 L 36.529 38.173 L 39.478 38.173 Z M 33.581 39.128 L 30.632 39.128 L 30.632 38.173 L 33.581 38.173 Z M 27.683 39.128 L 24.734 39.128 L 24.734 38.173 L 27.683 38.173 Z M 21.786 39.128 L 18.837 39.128 L 18.837 38.173 L 21.786 38.173 Z M 15.888 39.128 L 12.94 39.128 L 12.94 38.173 L 15.888 38.173 Z M 9.991 39.128 L 7.042 39.128 L 7.042 38.173 L 9.991 38.173 Z M 4.093 39.128 L 2.619 39.128 L 2.619 38.173 L 4.093 38.173 Z M 2.619 39.128 C 2.297 39.128 1.989 39.064 1.708 38.947 L 2.072 38.065 C 2.24 38.135 2.424 38.173 2.619 38.173 Z M 0.419 37.655 C 0.302 37.373 0.238 37.064 0.238 36.742 L 1.19 36.742 C 1.19 36.937 1.229 37.121 1.299 37.29 Z M 0.238 36.742 L 0.238 35.25 L 1.19 35.25 L 1.19 36.742 Z M 0.238 32.267 L 0.238 29.284 L 1.19 29.284 L 1.19 32.267 Z M 0.238 26.301 L 0.238 23.318 L 1.19 23.318 L 1.19 26.301 Z M 0.238 20.335 L 0.238 17.352 L 1.19 17.352 L 1.19 20.335 Z M 0.238 14.369 L 0.238 11.386 L 1.19 11.386 L 1.19 14.369 Z M 0.238 8.404 L 0.238 5.421 L 1.19 5.421 L 1.19 8.404 Z M 0.238 2.438 L 0.238 0.946 L 1.19 0.946 L 1.19 2.438 Z" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                        svgContentId: 12373651069
                                    }
                                }, i, d)
                            })]
                        }), e(r.div, {
                            className: "framer-cfsdwe",
                            "data-framer-name": "Box container - solana",
                            layoutDependency: f,
                            layoutId: "ofhb1oWXe",
                            children: a(r.div, {
                                className: "framer-zmuzl0",
                                layoutDependency: f,
                                layoutId: "SSqDp_IX4",
                                children: [y() && e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment": "right",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))",
                                                "--framer-text-transform": "inherit"
                                            },
                                            children: "on-chain or off-chian"
                                        })
                                    }),
                                    className: "framer-u87mq8",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    layoutDependency: f,
                                    layoutId: "cIuSm70uZ",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline",
                                        opacity: 0
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), a(r.div, {
                                    className: "framer-1qefjcf",
                                    layoutDependency: f,
                                    layoutId: "iao3mQr36",
                                    children: [e(r.div, {
                                        className: "framer-jtpikn",
                                        "data-border": !0,
                                        "data-framer-name": "Box",
                                        layoutDependency: f,
                                        layoutId: "M4L5b4na4",
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
                                            borderTopRightRadius: 4
                                        },
                                        transformTemplate: Zr,
                                        children: e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "SOLANA"
                                                })
                                            }),
                                            className: "framer-1betib",
                                            effect: ze,
                                            fonts: ["GF;Press Start 2P-regular"],
                                            layoutDependency: f,
                                            layoutId: "HYJh0QQki",
                                            style: {
                                                "--extracted-r6o4lv": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))",
                                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                                "--framer-link-text-decoration": "underline"
                                            },
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                            ...v({
                                                gd5wMqSWR: {
                                                    children: e(n, {
                                                        children: e(r.p, {
                                                            style: {
                                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                                "--framer-font-size": "14px",
                                                                "--framer-line-height": "17px",
                                                                "--framer-text-alignment": "center",
                                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                                "--framer-text-transform": "uppercase"
                                                            },
                                                            children: "SOLANA"
                                                        })
                                                    }),
                                                    effect: void 0
                                                }
                                            }, i, d)
                                        })
                                    }), e(w, {
                                        className: "framer-1wi4mzn",
                                        "data-framer-name": "Frame 2190",
                                        layout: "position",
                                        layoutDependency: f,
                                        layoutId: "BrCJkroFM",
                                        opacity: 1,
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 60"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path></svg>',
                                        svgContentId: 10567871198,
                                        withExternalLayout: !0,
                                        ...v({
                                            gd5wMqSWR: {
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 146"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 120.397 L 15.4 125.583" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 129.694 L 15.4 134.881" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 137.989 L 15.4 143.175" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                                svgContentId: 9607339109
                                            },
                                            yFZLEczXt: {
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 58"><path d="M 0.563 0.599 L 15.71 5.786" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 9.174 L 15.71 14.36" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 17.747 L 15.71 22.934" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 26.322 L 15.71 31.508" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 34.896 L 15.71 40.082" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 43.47 L 15.71 48.657" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 52.044 L 15.71 57.23" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 60.618 L 15.71 65.805" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 69.193 L 15.71 74.379" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.563 77.767 L 15.71 82.954" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 86.198 L 15.273 91.385" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 95.347 L 15.273 100.534" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.127 103.494 L 15.273 108.681" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0.253 111.989 L 15.4 117.175" fill="transparent" stroke="rgb(249,249,249)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path></svg>',
                                                svgContentId: 11676877063
                                            }
                                        }, i, d)
                                    })]
                                }), e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: e(r.p, {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))",
                                                "--framer-text-transform": "inherit"
                                            },
                                            children: "on- or off-chain ledger"
                                        })
                                    }),
                                    className: "framer-5mvfca",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    layoutDependency: f,
                                    layoutId: "msK7dv4em",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...v({
                                        gd5wMqSWR: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.3em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "on- or off-chain ledger"
                                                })
                                            })
                                        },
                                        yFZLEczXt: {
                                            children: e(n, {
                                                children: e(r.p, {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.3em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))",
                                                        "--framer-text-transform": "inherit"
                                                    },
                                                    children: "on- or off-chain ledger"
                                                })
                                            })
                                        }
                                    }, i, d)
                                })]
                            })
                        }), a(r.div, {
                            className: "framer-1vlwell",
                            "data-framer-name": "Arrow box - right",
                            layoutDependency: f,
                            layoutId: "fv6jNLXgP",
                            children: [e(w, {
                                className: "framer-18du3xx",
                                "data-framer-name": "Arrow 9",
                                layout: "position",
                                layoutDependency: f,
                                layoutId: "wuiLlMfSB",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135 71"><path d="M 0.404 65.338 L 8.488 69.996 L 8.488 60.68 Z M 7.912 66.145 L 12.919 66.145 L 12.919 64.531 L 7.912 64.531 Z M 17.924 66.145 L 22.93 66.145 L 22.93 64.531 L 17.924 64.531 Z M 27.936 66.145 L 32.942 66.145 L 32.942 64.531 L 27.936 64.531 Z M 37.947 66.145 L 42.953 66.145 L 42.953 64.531 L 37.947 64.531 Z M 47.959 66.145 L 52.964 66.145 L 52.964 64.531 L 47.959 64.531 Z M 57.97 66.145 L 62.976 66.145 L 62.976 64.531 L 57.97 64.531 Z M 67.982 66.145 L 72.988 66.145 L 72.988 64.531 L 67.982 64.531 Z M 77.993 66.145 L 82.999 66.145 L 82.999 64.531 L 77.993 64.531 Z M 88.005 66.145 L 93.011 66.145 L 93.011 64.531 L 88.005 64.531 Z M 98.016 66.145 L 103.022 66.145 L 103.022 64.531 L 98.016 64.531 Z M 108.028 66.145 L 113.034 66.145 L 113.034 64.531 L 108.028 64.531 Z M 118.039 66.145 L 123.045 66.145 L 123.045 64.531 L 118.039 64.531 Z M 128.051 66.145 L 130.554 66.145 L 130.554 64.531 L 128.051 64.531 Z M 130.554 66.145 C 131.1 66.145 131.624 66.036 132.101 65.838 L 131.482 64.348 C 131.197 64.466 130.884 64.531 130.554 64.531 Z M 134.289 63.655 C 134.487 63.178 134.596 62.656 134.596 62.111 L 132.979 62.111 C 132.979 62.44 132.913 62.753 132.795 63.037 Z M 134.596 62.111 L 134.596 59.589 L 132.979 59.589 L 132.979 62.111 Z M 134.596 54.547 L 134.596 49.504 L 132.979 49.504 L 132.979 54.547 Z M 134.596 44.462 L 134.596 39.419 L 132.979 39.419 L 132.979 44.462 Z M 134.596 34.376 L 134.596 29.334 L 132.979 29.334 L 132.979 34.376 Z M 134.596 24.291 L 134.596 19.249 L 132.979 19.249 L 132.979 24.291 Z M 134.596 14.206 L 134.596 9.163 L 132.979 9.163 L 132.979 14.206 Z M 134.596 4.121 L 134.596 1.599 L 132.979 1.599 L 132.979 4.121 Z" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                svgContentId: 9658462711,
                                withExternalLayout: !0,
                                ...v({
                                    gd5wMqSWR: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 61"><path d="M 0 2.079 L 3.614 0 L 3.614 4.158 Z M 3.357 1.719 L 5.596 1.719 L 5.596 2.439 L 3.357 2.439 Z M 7.834 1.719 L 10.072 1.719 L 10.072 2.439 L 7.834 2.439 Z M 12.31 1.719 L 14.548 1.719 L 14.548 2.439 L 12.31 2.439 Z M 16.786 1.719 L 19.025 1.719 L 19.025 2.439 L 16.786 2.439 Z M 21.263 1.719 L 23.501 1.719 L 23.501 2.439 L 21.263 2.439 Z M 25.739 1.719 L 27.977 1.719 L 27.977 2.439 L 25.739 2.439 Z M 30.215 1.719 L 32.454 1.719 L 32.454 2.439 L 30.215 2.439 Z M 34.692 1.719 L 36.93 1.719 L 36.93 2.439 L 34.692 2.439 Z M 39.168 1.719 L 41.406 1.719 L 41.406 2.439 L 39.168 2.439 Z M 43.645 1.719 L 45.883 1.719 L 45.883 2.439 L 43.645 2.439 Z M 48.121 1.719 L 50.359 1.719 L 50.359 2.439 L 48.121 2.439 Z M 52.597 1.719 L 54.835 1.719 L 54.835 2.439 L 52.597 2.439 Z M 57.074 1.719 L 58.193 1.719 L 58.193 2.439 L 57.074 2.439 Z M 58.193 1.719 C 58.437 1.719 58.671 1.767 58.885 1.856 L 58.608 2.521 C 58.48 2.468 58.34 2.439 58.193 2.439 Z M 59.863 2.83 C 59.951 3.043 60 3.276 60 3.52 L 59.277 3.52 C 59.277 3.372 59.248 3.233 59.195 3.106 Z M 60 3.52 L 60 4.645 L 59.277 4.645 L 59.277 3.52 Z M 60 6.896 L 60 9.146 L 59.277 9.146 L 59.277 6.896 Z M 60 11.397 L 60 13.648 L 59.277 13.648 L 59.277 11.397 Z M 60 15.898 L 60 18.149 L 59.277 18.149 L 59.277 15.898 Z M 60 20.4 L 60 22.65 L 59.277 22.65 L 59.277 20.4 Z M 60 24.901 L 60 27.152 L 59.277 27.152 L 59.277 24.901 Z M 60 29.403 L 60 30.528 L 59.277 30.528 L 59.277 29.403 Z" transform="translate(-13.869 14.805) rotate(90 30 15.264)" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                        svgContentId: 12364881261
                                    },
                                    yFZLEczXt: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 42"><path d="M 0.24 38.651 L 5.03 41.406 L 5.03 35.895 Z M 4.689 39.128 L 7.656 39.128 L 7.656 38.173 L 4.689 38.173 Z M 10.622 39.128 L 13.588 39.128 L 13.588 38.173 L 10.622 38.173 Z M 16.555 39.128 L 19.521 39.128 L 19.521 38.173 L 16.555 38.173 Z M 22.487 39.128 L 25.454 39.128 L 25.454 38.173 L 22.487 38.173 Z M 28.42 39.128 L 31.386 39.128 L 31.386 38.173 L 28.42 38.173 Z M 34.353 39.128 L 37.319 39.128 L 37.319 38.173 L 34.353 38.173 Z M 40.286 39.128 L 43.252 39.128 L 43.252 38.173 L 40.286 38.173 Z M 46.218 39.128 L 49.185 39.128 L 49.185 38.173 L 46.218 38.173 Z M 52.151 39.128 L 55.117 39.128 L 55.117 38.173 L 52.151 38.173 Z M 58.084 39.128 L 61.05 39.128 L 61.05 38.173 L 58.084 38.173 Z M 64.017 39.128 L 66.983 39.128 L 66.983 38.173 L 64.017 38.173 Z M 69.949 39.128 L 72.916 39.128 L 72.916 38.173 L 69.949 38.173 Z M 75.882 39.128 L 77.365 39.128 L 77.365 38.173 L 75.882 38.173 Z M 77.365 39.128 C 77.689 39.128 77.999 39.064 78.282 38.947 L 77.915 38.065 C 77.746 38.135 77.561 38.173 77.365 38.173 Z M 79.579 37.655 C 79.696 37.373 79.76 37.064 79.76 36.742 L 78.802 36.742 C 78.802 36.937 78.764 37.121 78.694 37.29 Z M 79.76 36.742 L 79.76 35.25 L 78.802 35.25 L 78.802 36.742 Z M 79.76 32.267 L 79.76 29.284 L 78.802 29.284 L 78.802 32.267 Z M 79.76 26.301 L 79.76 23.318 L 78.802 23.318 L 78.802 26.301 Z M 79.76 20.335 L 79.76 17.352 L 78.802 17.352 L 78.802 20.335 Z M 79.76 14.369 L 79.76 11.386 L 78.802 11.386 L 78.802 14.369 Z M 79.76 8.404 L 79.76 5.421 L 78.802 5.421 L 78.802 8.404 Z M 79.76 2.438 L 79.76 0.946 L 78.802 0.946 L 78.802 2.438 Z" fill="var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {&quot;name&quot;:&quot;White-2&quot;} */"></path></svg>',
                                        svgContentId: 11008053017
                                    }
                                }, i, d)
                            }), e(c, {
                                __fromCanvasComponent: !0,
                                children: a(n, {
                                    children: [e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                        },
                                        children: "Store:"
                                    }), e(r.p, {
                                        style: {
                                            "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                            "--framer-font-family": '"Roboto Mono", monospace',
                                            "--framer-font-size": "14px",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-color": "var(--extracted-2gxw0f, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                        },
                                        children: "{Proof}"
                                    })]
                                }),
                                className: "framer-7b7d54",
                                fonts: ["GF;Roboto Mono-regular"],
                                layoutDependency: f,
                                layoutId: "viEtX5OIk",
                                style: {
                                    "--extracted-2gxw0f": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                    "--extracted-r6o4lv": "var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7))",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...v({
                                    gd5wMqSWR: {
                                        children: a(n, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "11px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "Store:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "11px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "{Proof}"
                                            })]
                                        })
                                    },
                                    yFZLEczXt: {
                                        children: a(n, {
                                            children: [e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "12px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "Store:"
                                            }), e(r.p, {
                                                style: {
                                                    "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                    "--framer-font-family": '"Roboto Mono", monospace',
                                                    "--framer-font-size": "12px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--extracted-2gxw0f, var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)))"
                                                },
                                                children: "{Proof}"
                                            })]
                                        })
                                    }
                                }, i, d)
                            })]
                        })]
                    })]
                })
            })
        })
    })
})
  , Wr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-hkppD.framer-hwmejw, .framer-hkppD .framer-hwmejw { display: block; }", ".framer-hkppD.framer-145tuu6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 22px 0px 22px 0px; position: relative; width: min-content; }", ".framer-hkppD .framer-9cg7s1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-hkppD .framer-w9zenm, .framer-hkppD .framer-9tollg, .framer-hkppD .framer-cfsdwe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-hkppD .framer-17ws5t8, .framer-hkppD .framer-ogfro9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 20px 24px 20px; position: relative; width: 270px; will-change: var(--framer-will-change-override, transform); }", ".framer-hkppD .framer-1jf5o2z, .framer-hkppD .framer-93k0zf, .framer-hkppD .framer-1vskzob, .framer-hkppD .framer-dsohrz, .framer-hkppD .framer-r1gb87, .framer-hkppD .framer-uzyzs0, .framer-hkppD .framer-1betib { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-hkppD .framer-fb35mk { flex: none; height: 112px; position: relative; width: 17px; }", ".framer-hkppD .framer-1tdv34t { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 270px; will-change: var(--framer-will-change-override, transform); }", ".framer-hkppD .framer-1qz2873, .framer-hkppD .framer-5h7vjb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-hkppD .framer-dvdwr9, .framer-hkppD .framer-1ks2a4m { flex: none; height: 12px; position: relative; width: 270px; }", ".framer-hkppD .framer-1x16hhy { flex: none; height: 111px; position: relative; width: 17px; }", ".framer-hkppD .framer-8wnjwj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-hkppD .framer-i4sz5e, .framer-hkppD .framer-1vlwell { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 24px 0px; position: relative; width: 270px; }", ".framer-hkppD .framer-1c0c9v3, .framer-hkppD .framer-7b7d54 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-hkppD .framer-ijg8il, .framer-hkppD .framer-18du3xx { flex: none; height: 71px; position: relative; width: 135px; }", ".framer-hkppD .framer-zmuzl0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 144px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 288px; }", ".framer-hkppD .framer-u87mq8, .framer-hkppD .framer-5mvfca { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 177px; word-break: break-word; word-wrap: break-word; }", ".framer-hkppD .framer-1qefjcf { flex: none; height: 68px; overflow: visible; position: relative; width: 287px; }", ".framer-hkppD .framer-jtpikn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 24px 20px 24px 20px; position: absolute; top: 50%; width: 270px; will-change: var(--framer-will-change-override, transform); }", ".framer-hkppD .framer-1wi4mzn { flex: none; height: 60px; position: absolute; right: 0px; top: calc(50.00000000000002% - 60px / 2); width: 17px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hkppD.framer-145tuu6, .framer-hkppD .framer-9cg7s1, .framer-hkppD .framer-w9zenm, .framer-hkppD .framer-17ws5t8, .framer-hkppD .framer-1tdv34t, .framer-hkppD .framer-1qz2873, .framer-hkppD .framer-5h7vjb, .framer-hkppD .framer-9tollg, .framer-hkppD .framer-ogfro9, .framer-hkppD .framer-8wnjwj, .framer-hkppD .framer-i4sz5e, .framer-hkppD .framer-cfsdwe, .framer-hkppD .framer-zmuzl0, .framer-hkppD .framer-jtpikn, .framer-hkppD .framer-1vlwell { gap: 0px; } .framer-hkppD.framer-145tuu6 > *, .framer-hkppD .framer-17ws5t8 > *, .framer-hkppD .framer-ogfro9 > *, .framer-hkppD .framer-zmuzl0 > *, .framer-hkppD .framer-jtpikn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hkppD.framer-145tuu6 > :first-child, .framer-hkppD .framer-17ws5t8 > :first-child, .framer-hkppD .framer-1tdv34t > :first-child, .framer-hkppD .framer-1qz2873 > :first-child, .framer-hkppD .framer-5h7vjb > :first-child, .framer-hkppD .framer-ogfro9 > :first-child, .framer-hkppD .framer-zmuzl0 > :first-child, .framer-hkppD .framer-jtpikn > :first-child { margin-top: 0px; } .framer-hkppD.framer-145tuu6 > :last-child, .framer-hkppD .framer-17ws5t8 > :last-child, .framer-hkppD .framer-1tdv34t > :last-child, .framer-hkppD .framer-1qz2873 > :last-child, .framer-hkppD .framer-5h7vjb > :last-child, .framer-hkppD .framer-ogfro9 > :last-child, .framer-hkppD .framer-zmuzl0 > :last-child, .framer-hkppD .framer-jtpikn > :last-child { margin-bottom: 0px; } .framer-hkppD .framer-9cg7s1 > *, .framer-hkppD .framer-8wnjwj > *, .framer-hkppD .framer-i4sz5e > *, .framer-hkppD .framer-1vlwell > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-hkppD .framer-9cg7s1 > :first-child, .framer-hkppD .framer-w9zenm > :first-child, .framer-hkppD .framer-9tollg > :first-child, .framer-hkppD .framer-8wnjwj > :first-child, .framer-hkppD .framer-i4sz5e > :first-child, .framer-hkppD .framer-cfsdwe > :first-child, .framer-hkppD .framer-1vlwell > :first-child { margin-left: 0px; } .framer-hkppD .framer-9cg7s1 > :last-child, .framer-hkppD .framer-w9zenm > :last-child, .framer-hkppD .framer-9tollg > :last-child, .framer-hkppD .framer-8wnjwj > :last-child, .framer-hkppD .framer-i4sz5e > :last-child, .framer-hkppD .framer-cfsdwe > :last-child, .framer-hkppD .framer-1vlwell > :last-child { margin-right: 0px; } .framer-hkppD .framer-w9zenm > *, .framer-hkppD .framer-9tollg > *, .framer-hkppD .framer-cfsdwe > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-hkppD .framer-1tdv34t > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-hkppD .framer-1qz2873 > *, .framer-hkppD .framer-5h7vjb > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }", ".framer-hkppD.framer-v-agr9mt.framer-145tuu6 { gap: 20px; }", ".framer-hkppD.framer-v-agr9mt .framer-9cg7s1 { gap: 12px; }", ".framer-hkppD.framer-v-agr9mt .framer-17ws5t8, .framer-hkppD.framer-v-agr9mt .framer-1tdv34t, .framer-hkppD.framer-v-agr9mt .framer-jtpikn { width: 170px; }", ".framer-hkppD.framer-v-agr9mt .framer-fb35mk, .framer-hkppD.framer-v-agr9mt .framer-1x16hhy, .framer-hkppD.framer-v-fpw9m8 .framer-1x16hhy { height: 103px; }", ".framer-hkppD.framer-v-agr9mt .framer-dvdwr9, .framer-hkppD.framer-v-agr9mt .framer-1ks2a4m { height: 7px; width: 150px; }", ".framer-hkppD.framer-v-agr9mt .framer-ogfro9 { padding: 24px 16px 24px 16px; width: 170px; }", ".framer-hkppD.framer-v-agr9mt .framer-8wnjwj { gap: 16px; }", ".framer-hkppD.framer-v-agr9mt .framer-i4sz5e, .framer-hkppD.framer-v-agr9mt .framer-1vlwell { gap: 16px; width: 170px; }", ".framer-hkppD.framer-v-agr9mt .framer-1c0c9v3 { order: 0; }", ".framer-hkppD.framer-v-agr9mt .framer-ijg8il { height: 42px; order: 1; width: 80px; }", ".framer-hkppD.framer-v-agr9mt .framer-cfsdwe { align-content: flex-start; align-items: flex-start; }", ".framer-hkppD.framer-v-agr9mt .framer-zmuzl0 { gap: 8px; height: 93px; width: 215px; }", ".framer-hkppD.framer-v-agr9mt .framer-1qefjcf { width: 187px; }", ".framer-hkppD.framer-v-agr9mt .framer-1wi4mzn { height: 58px; top: calc(48.43750000000002% - 58px / 2); }", ".framer-hkppD.framer-v-agr9mt .framer-18du3xx { height: 42px; width: 80px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hkppD.framer-v-agr9mt.framer-145tuu6, .framer-hkppD.framer-v-agr9mt .framer-9cg7s1, .framer-hkppD.framer-v-agr9mt .framer-8wnjwj, .framer-hkppD.framer-v-agr9mt .framer-i4sz5e, .framer-hkppD.framer-v-agr9mt .framer-zmuzl0, .framer-hkppD.framer-v-agr9mt .framer-1vlwell { gap: 0px; } .framer-hkppD.framer-v-agr9mt.framer-145tuu6 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-hkppD.framer-v-agr9mt.framer-145tuu6 > :first-child, .framer-hkppD.framer-v-agr9mt .framer-zmuzl0 > :first-child { margin-top: 0px; } .framer-hkppD.framer-v-agr9mt.framer-145tuu6 > :last-child, .framer-hkppD.framer-v-agr9mt .framer-zmuzl0 > :last-child { margin-bottom: 0px; } .framer-hkppD.framer-v-agr9mt .framer-9cg7s1 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-hkppD.framer-v-agr9mt .framer-9cg7s1 > :first-child, .framer-hkppD.framer-v-agr9mt .framer-8wnjwj > :first-child, .framer-hkppD.framer-v-agr9mt .framer-i4sz5e > :first-child, .framer-hkppD.framer-v-agr9mt .framer-1vlwell > :first-child { margin-left: 0px; } .framer-hkppD.framer-v-agr9mt .framer-9cg7s1 > :last-child, .framer-hkppD.framer-v-agr9mt .framer-8wnjwj > :last-child, .framer-hkppD.framer-v-agr9mt .framer-i4sz5e > :last-child, .framer-hkppD.framer-v-agr9mt .framer-1vlwell > :last-child { margin-right: 0px; } .framer-hkppD.framer-v-agr9mt .framer-8wnjwj > *, .framer-hkppD.framer-v-agr9mt .framer-i4sz5e > *, .framer-hkppD.framer-v-agr9mt .framer-1vlwell > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-hkppD.framer-v-agr9mt .framer-zmuzl0 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }", ".framer-hkppD.framer-v-fpw9m8.framer-145tuu6 { flex-direction: row; gap: 12px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-9cg7s1 { flex-direction: column; gap: 24px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-17ws5t8, .framer-hkppD.framer-v-fpw9m8 .framer-ogfro9 { padding: 24px 16px 24px 16px; width: 140px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-fb35mk { height: 95px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-1tdv34t { align-self: unset; flex-direction: row; gap: 2px; height: min-content; justify-content: flex-start; width: 156px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-1qz2873 { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-direction: row; width: 1px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-1vskzob, .framer-hkppD.framer-v-fpw9m8 .framer-dsohrz { flex: 1 0 0px; width: 1px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-dvdwr9, .framer-hkppD.framer-v-fpw9m8 .framer-1ks2a4m { height: 143px; width: 6px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-5h7vjb { align-content: flex-end; align-items: flex-end; flex: 1 0 0px; flex-direction: row; justify-content: flex-start; width: 1px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-8wnjwj { flex-direction: column; gap: 16px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-i4sz5e, .framer-hkppD.framer-v-fpw9m8 .framer-1vlwell { align-content: center; align-items: center; flex-direction: column; gap: 12px; padding: 0px 20px 0px 0px; width: 72px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-1c0c9v3, .framer-hkppD.framer-v-fpw9m8 .framer-7b7d54 { flex: none; width: 100%; }", ".framer-hkppD.framer-v-fpw9m8 .framer-ijg8il, .framer-hkppD.framer-v-fpw9m8 .framer-18du3xx { height: 61px; width: 32px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-cfsdwe { align-self: stretch; justify-content: flex-end; width: auto; }", ".framer-hkppD.framer-v-fpw9m8 .framer-zmuzl0 { height: 194px; width: 74px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-1qefjcf { height: 152px; order: 0; width: 66px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-jtpikn { top: 50%; width: 50px; }", ".framer-hkppD.framer-v-fpw9m8 .framer-1wi4mzn { height: 146px; top: calc(50.98039215686276% - 146px / 2); }", ".framer-hkppD.framer-v-fpw9m8 .framer-5mvfca { order: 2; width: 81px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hkppD.framer-v-fpw9m8.framer-145tuu6, .framer-hkppD.framer-v-fpw9m8 .framer-9cg7s1, .framer-hkppD.framer-v-fpw9m8 .framer-1tdv34t, .framer-hkppD.framer-v-fpw9m8 .framer-1qz2873, .framer-hkppD.framer-v-fpw9m8 .framer-5h7vjb, .framer-hkppD.framer-v-fpw9m8 .framer-8wnjwj, .framer-hkppD.framer-v-fpw9m8 .framer-i4sz5e, .framer-hkppD.framer-v-fpw9m8 .framer-1vlwell { gap: 0px; } .framer-hkppD.framer-v-fpw9m8.framer-145tuu6 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-hkppD.framer-v-fpw9m8.framer-145tuu6 > :first-child, .framer-hkppD.framer-v-fpw9m8 .framer-1tdv34t > :first-child, .framer-hkppD.framer-v-fpw9m8 .framer-1qz2873 > :first-child, .framer-hkppD.framer-v-fpw9m8 .framer-5h7vjb > :first-child { margin-left: 0px; } .framer-hkppD.framer-v-fpw9m8.framer-145tuu6 > :last-child, .framer-hkppD.framer-v-fpw9m8 .framer-1tdv34t > :last-child, .framer-hkppD.framer-v-fpw9m8 .framer-1qz2873 > :last-child, .framer-hkppD.framer-v-fpw9m8 .framer-5h7vjb > :last-child { margin-right: 0px; } .framer-hkppD.framer-v-fpw9m8 .framer-9cg7s1 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-hkppD.framer-v-fpw9m8 .framer-9cg7s1 > :first-child, .framer-hkppD.framer-v-fpw9m8 .framer-8wnjwj > :first-child, .framer-hkppD.framer-v-fpw9m8 .framer-i4sz5e > :first-child, .framer-hkppD.framer-v-fpw9m8 .framer-1vlwell > :first-child { margin-top: 0px; } .framer-hkppD.framer-v-fpw9m8 .framer-9cg7s1 > :last-child, .framer-hkppD.framer-v-fpw9m8 .framer-8wnjwj > :last-child, .framer-hkppD.framer-v-fpw9m8 .framer-i4sz5e > :last-child, .framer-hkppD.framer-v-fpw9m8 .framer-1vlwell > :last-child { margin-bottom: 0px; } .framer-hkppD.framer-v-fpw9m8 .framer-1tdv34t > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-hkppD.framer-v-fpw9m8 .framer-1qz2873 > *, .framer-hkppD.framer-v-fpw9m8 .framer-5h7vjb > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-hkppD.framer-v-fpw9m8 .framer-8wnjwj > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-hkppD.framer-v-fpw9m8 .framer-i4sz5e > *, .framer-hkppD.framer-v-fpw9m8 .framer-1vlwell > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }", '.framer-hkppD[data-border="true"]::after, .framer-hkppD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , ae = Y(Er, Wr, "framer-hkppD")
  , qe = ae;
ae.displayName = "Table";
ae.defaultProps = {
    height: 317.5,
    width: 884
};
U(ae, {
    variant: {
        options: ["mZh7I_ryP", "yFZLEczXt", "gd5wMqSWR"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: u.Enum
    }
});
O(ae, [{
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
}], {
    supportsExplicitInterCodegen: !0
});
ge.loadFonts([]);
var He = [{
    explicitInter: !0,
    fonts: []
}]
  , Ue = ['.framer-lEasz .framer-styles-preset-1gwsvzq:not(.rich-text-wrapper), .framer-lEasz .framer-styles-preset-1gwsvzq.rich-text-wrapper a { --framer-link-current-text-color: var(--token-b10cf9b5-e550-4903-9281-63dc6a98f8a8, rgba(249, 249, 249, 0.7)) /* {"name":"White-2"} */; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-7e0fd424-a9e1-4350-83e9-aec9de658b5f, #fbffd1) /* {"name":"White"} */; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, #6bff0f); --framer-link-text-decoration: underline; }']
  , Ye = "framer-lEasz";
var W = be(r.div)
  , Fr = I(Le)
  , _r = I(xe)
  , Nr = I(ve)
  , Pr = I($)
  , Se = be(C)
  , Ar = I(ee)
  , Tr = I(qe)
  , Br = I(te)
  , Gr = I(ue)
  , Hr = {
    E_y3s1DGC: "(max-width: 689px)",
    MmeRVgVFc: "(min-width: 1154px)",
    Z9B8pZgIC: "(min-width: 690px) and (max-width: 1153px)"
}
  , Ur = () => typeof document < "u"
  , Oe = "framer-bzMeS"
  , Yr = {
    E_y3s1DGC: "framer-v-en6qh0",
    MmeRVgVFc: "framer-v-bsxhao",
    Z9B8pZgIC: "framer-v-2kodlj"
}
  , Or = {
    delay: 0,
    duration: .6,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Ze = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Or,
    x: 0,
    y: 0
}
  , D = {
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
  , Xr = {
    opacity: .001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , Jr = {
    bounce: 0,
    delay: .05,
    duration: 1,
    type: "spring"
}
  , Xe = {
    effect: Xr,
    repeat: !1,
    startDelay: .4,
    tokenization: "character",
    transition: Jr,
    trigger: "onMount",
    type: "appear"
}
  , Qr = {
    delay: .6,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Re = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Qr,
    x: 0,
    y: 0
}
  , $r = {
    delay: .2,
    duration: .6,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Kr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: $r,
    x: 0,
    y: 0
}
  , et = {
    delay: 0,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , pe = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: et,
    x: 0,
    y: 0
}
  , Ce = le()
  , rt = {
    Desktop: "MmeRVgVFc",
    Phone: "E_y3s1DGC",
    Tablet: "Z9B8pZgIC"
}
  , tt = ({height: t, id: o, width: s, ...m}) => {
    var l, p;
    return {
        ...m,
        variant: (p = (l = rt[m.variant]) !== null && l !== void 0 ? l : m.variant) !== null && p !== void 0 ? p : "MmeRVgVFc"
    }
}
  , at = A(function(t, o) {
    let {activeLocale: s, setLocale: m} = H()
      , {style: l, className: p, layoutId: b, variant: q, ...k} = tt(t);
    S( () => {
        let g = le(void 0, s);
        if (g.robots) {
            let y = document.querySelector('meta[name="robots"]');
            y ? y.setAttribute("content", g.robots) : (y = document.createElement("meta"),
            y.setAttribute("name", "robots"),
            y.setAttribute("content", g.robots),
            document.head.appendChild(y))
        }
    }
    , [void 0, s]),
    Ie( () => {
        let g = le(void 0, s);
        if (document.title = g.title || "",
        g.viewport) {
            var y;
            (y = document.querySelector('meta[name="viewport"]')) === null || y === void 0 || y.setAttribute("content", g.viewport)
        }
        let P = g.bodyClassName;
        if (P) {
            let j = document.body;
            j.classList.forEach(ne => ne.startsWith("framer-body-") && j.classList.remove(ne)),
            j.classList.add(`${g.bodyClassName}-framer-bzMeS`)
        }
        return () => {
            P && document.body.classList.remove(`${g.bodyClassName}-framer-bzMeS`)
        }
    }
    , [void 0, s]);
    let[i,R] = _e(q, Hr, !1)
      , _ = void 0
      , V = Z(null)
      , d = Ee("cn1OHdQTw")
      , N = Z(null)
      , De = Ve()
      , oe = () => Ur() ? i !== "E_y3s1DGC" : !0
      , X = T()
      , f = [Ye];
    return We({}),
    e(je.Provider, {
        value: {
            primaryVariantId: "MmeRVgVFc",
            variantClassNames: Yr
        },
        children: a(G, {
            id: b ?? X,
            children: [e(r.div, {
                ...k,
                className: F(Oe, ...f, "framer-bsxhao", p),
                ref: o ?? V,
                style: {
                    ...l
                },
                children: a("div", {
                    className: "framer-1bep45o",
                    "data-framer-name": "CONTENT",
                    id: d,
                    name: "CONTENT",
                    ref: N,
                    children: [a("div", {
                        className: "framer-1tez3dp",
                        "data-framer-name": "Row 1 + button area",
                        name: "Row 1 + button area",
                        children: [a("div", {
                            className: "framer-18fih4j",
                            "data-framer-name": "Row 1",
                            name: "Row 1",
                            children: [e(W, {
                                animate: Ze,
                                background: {
                                    alt: "",
                                    fit: "fill"
                                },
                                className: "framer-1mw189w",
                                "data-framer-appear-id": "1mw189w",
                                "data-framer-name": "Box 1",
                                initial: D,
                                name: "Box 1",
                                optimized: !0,
                                children: a("div", {
                                    className: "framer-xdd5ux",
                                    "data-framer-name": "Box",
                                    name: "Box",
                                    children: [e(w, {
                                        className: "framer-46a63g",
                                        "data-framer-name": "Asset 4",
                                        fill: "black",
                                        intrinsicHeight: 121,
                                        intrinsicWidth: 488,
                                        name: "Asset 4",
                                        svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.62 121"><path d="M487.12 4.94v111.12c0 2.45-1.99 4.44-4.44 4.44H4.94c-2.45 0-4.44-1.99-4.44-4.44V60.79L89.15.53 89.2.5h393.48c2.45 0 4.44 1.99 4.44 4.44Z" style="fill:none;stroke:#f9f9f9;stroke-miterlimit:10" data-name="Layer 1"/></svg>',
                                        withExternalLayout: !0
                                    }), a("div", {
                                        className: "framer-5gcldi",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(n, {
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
                                            className: "framer-17cxf02",
                                            "data-framer-name": "sentient ai dog",
                                            effect: Xe,
                                            fonts: ["GF;Press Start 2P-regular"],
                                            name: "sentient ai dog",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(M, {
                                            breakpoint: i,
                                            overrides: {
                                                E_y3s1DGC: {
                                                    children: e(n, {
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
                                            children: e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(n, {
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
                                                className: "framer-fjiqmx",
                                                "data-framer-name": "PAWT leverages a network of distribtued GPUs to power its v2 training.",
                                                fonts: ["GF;Roboto Mono-regular"],
                                                name: "PAWT leverages a network of distribtued GPUs to power its v2 training.",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })]
                                })
                            }), e(W, {
                                animate: Ze,
                                className: "framer-1j9hstd",
                                "data-framer-appear-id": "1j9hstd",
                                "data-framer-name": "Social media",
                                initial: D,
                                name: "Social media",
                                optimized: !0,
                                children: a("div", {
                                    background: {
                                        alt: "",
                                        fit: "fill"
                                    },
                                    className: "framer-1htjown",
                                    "data-framer-name": "Box 2",
                                    name: "Box 2",
                                    children: [e("div", {
                                        className: "framer-spcht9",
                                        "data-framer-name": "Box",
                                        name: "Box",
                                        children: e(w, {
                                            className: "framer-w27cd4",
                                            "data-framer-name": "Asset 3",
                                            fill: "black",
                                            intrinsicHeight: 121,
                                            intrinsicWidth: 261,
                                            name: "Asset 3",
                                            svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261 121"><rect x=".5" y=".5" width="260" height="120" rx="4.45" ry="4.45" style="fill:none;stroke:#f9f9f9;stroke-linecap:round;stroke-linejoin:round" data-name="Layer 1"/></svg>',
                                            withExternalLayout: !0
                                        })
                                    }), a("div", {
                                        className: "framer-1vcvfui",
                                        "data-framer-name": "Icons",
                                        name: "Icons",
                                        children: [e(z, {
                                            height: 40,
                                            children: e(C, {
                                                className: "framer-1mn6vhj-container",
                                                children: e(Le, {
                                                    height: "100%",
                                                    id: "ndBT7jkRS",
                                                    layoutId: "ndBT7jkRS",
                                                    variant: "iQlNgUUGt",
                                                    width: "100%"
                                                })
                                            })
                                        }), e(z, {
                                            height: 40,
                                            children: e(C, {
                                                className: "framer-1v6qvvy-container",
                                                children: e(xe, {
                                                    height: "100%",
                                                    id: "lb0D9Vai0",
                                                    layoutId: "lb0D9Vai0",
                                                    variant: "ybAngJ1L2",
                                                    width: "100%"
                                                })
                                            })
                                        }), e(z, {
                                            height: 40,
                                            children: e(C, {
                                                className: "framer-swzys9-container",
                                                children: e(ve, {
                                                    height: "100%",
                                                    id: "ihPKnaCIl",
                                                    layoutId: "ihPKnaCIl",
                                                    width: "100%"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), e(W, {
                                animate: Ze,
                                background: {
                                    alt: "",
                                    fit: "fill"
                                },
                                className: "framer-loq7s1",
                                "data-framer-appear-id": "loq7s1",
                                "data-framer-name": "Box 3",
                                initial: D,
                                name: "Box 3",
                                optimized: !0,
                                children: a("div", {
                                    className: "framer-1fm5q33",
                                    "data-framer-name": "Box",
                                    name: "Box",
                                    children: [e(w, {
                                        className: "framer-qrid7v",
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
                                        className: "framer-uqh6kc",
                                        "data-framer-name": "Text",
                                        name: "Text",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(n, {
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
                                            className: "framer-vc1pjb",
                                            "data-framer-name": "sentient ai dog",
                                            effect: Xe,
                                            fonts: ["GF;Press Start 2P-regular"],
                                            name: "sentient ai dog",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(M, {
                                            breakpoint: i,
                                            overrides: {
                                                E_y3s1DGC: {
                                                    children: a(n, {
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
                                                },
                                                Z9B8pZgIC: {
                                                    children: a(n, {
                                                        children: [a("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                                "--framer-font-size": "14px",
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
                                            children: e(c, {
                                                __fromCanvasComponent: !0,
                                                children: a(n, {
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
                                                className: "framer-1udjvwa",
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
                        }), e("div", {
                            className: "framer-bb1bb4",
                            "data-framer-name": "Button area",
                            name: "Button area",
                            children: e(Fe, {
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
                                children: g => e(z, {
                                    height: 28,
                                    children: e(Se, {
                                        animate: Re,
                                        className: "framer-xafx9c-container",
                                        "data-framer-appear-id": "xafx9c",
                                        initial: D,
                                        optimized: !0,
                                        children: e(M, {
                                            breakpoint: i,
                                            overrides: {
                                                E_y3s1DGC: {
                                                    mG_aisrrQ: g[2]
                                                },
                                                Z9B8pZgIC: {
                                                    mG_aisrrQ: g[1]
                                                }
                                            },
                                            children: e($, {
                                                BaKX22elW: !1,
                                                H4dudqG6k: "Main",
                                                height: "100%",
                                                id: "hCTdHtbWc",
                                                layoutId: "hCTdHtbWc",
                                                mG_aisrrQ: g[0],
                                                Pi1ZfmqIq: !0,
                                                variant: "NhPpkggvP",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    }), a("div", {
                        className: "framer-15gdleg",
                        "data-framer-name": "Heading + content",
                        name: "Heading + content",
                        children: [a(W, {
                            animate: Kr,
                            className: "framer-1erduk7",
                            "data-framer-appear-id": "1erduk7",
                            "data-framer-name": "Heading",
                            initial: D,
                            name: "Heading",
                            optimized: !0,
                            children: [oe() && e("div", {
                                className: "framer-p69hzy hidden-en6qh0",
                                "data-framer-name": "Arrow",
                                name: "Arrow",
                                children: e(w, {
                                    className: "framer-y8qxte",
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
                                className: "framer-mytprm",
                                "data-framer-name": "PAWT",
                                name: "PAWT",
                                children: e("div", {
                                    className: "framer-qzwykv",
                                    "data-framer-name": "Container",
                                    name: "Container",
                                    children: e(M, {
                                        breakpoint: i,
                                        overrides: {
                                            E_y3s1DGC: {
                                                viewBox: "0 0 876 234"
                                            },
                                            Z9B8pZgIC: {
                                                viewBox: "0 0 876 234"
                                            }
                                        },
                                        children: e(c, {
                                            __fromCanvasComponent: !0,
                                            children: a(n, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "97.29634141068088px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "PROOF OF"
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "97.29634141068088px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "SENTIENCE"
                                                })]
                                            }),
                                            className: "framer-1vryhbc",
                                            fonts: ["GF;Press Start 2P-regular"],
                                            verticalAlignment: "top",
                                            viewBox: "0 0 875 234",
                                            withExternalLayout: !0
                                        })
                                    })
                                })
                            }), oe() && e("div", {
                                className: "framer-ilg13c hidden-en6qh0",
                                "data-framer-name": "Arrow",
                                name: "Arrow",
                                children: e(w, {
                                    className: "framer-1bgd4tj",
                                    "data-framer-name": "Asset 6",
                                    fill: "black",
                                    intrinsicHeight: 16,
                                    intrinsicWidth: 16,
                                    name: "Asset 6",
                                    svg: '<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.65"><path d="M14.15 15.65c-.83 0-1.5-.67-1.5-1.5V3H1.5C.67 3 0 2.33 0 1.5S.67 0 1.5 0h12.65c.83 0 1.5.67 1.5 1.5v12.65c0 .83-.67 1.5-1.5 1.5Z" style="fill:#f9f9f9" data-name="Layer 1"/></svg>',
                                    withExternalLayout: !0
                                })
                            })]
                        }), a("div", {
                            className: "framer-u6a58w",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [a(W, {
                                animate: pe,
                                className: "framer-1k200bq",
                                "data-border": !0,
                                "data-framer-appear-id": "1k200bq",
                                "data-framer-name": "Intro",
                                initial: D,
                                name: "Intro",
                                optimized: !0,
                                children: [e(c, {
                                    __fromCanvasComponent: !0,
                                    children: a(n, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                            },
                                            children: "As autonomous AI agents get access to more features, monetary value and overall impact online, it\u2019s becoming critical for developers to prove their sentience. "
                                        }), a("p", {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                            },
                                            children: [e("span", {
                                                style: {
                                                    "--framer-font-size": "16px"
                                                },
                                                children: "As a layer of trust we're already seeing activity logs for "
                                            }), e(Q, {
                                                href: "https://zerebro.org/proof-of-conciousness",
                                                nodeId: "vbyXbhZa6",
                                                openInNewTab: !0,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-1gwsvzq",
                                                    "data-styles-preset": "fe9vHQdfa",
                                                    children: e("span", {
                                                        style: {
                                                            "--framer-font-size": "16px"
                                                        },
                                                        children: "zerebro"
                                                    })
                                                })
                                            }), e("span", {
                                                style: {
                                                    "--framer-font-size": "16px"
                                                },
                                                children: " and "
                                            }), e(Q, {
                                                href: "https://aixbt.tech/agent",
                                                nodeId: "vbyXbhZa6",
                                                openInNewTab: !0,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-1gwsvzq",
                                                    "data-styles-preset": "fe9vHQdfa",
                                                    children: e("span", {
                                                        style: {
                                                            "--framer-font-size": "16px"
                                                        },
                                                        children: "aixbt"
                                                    })
                                                })
                                            }), e("span", {
                                                style: {
                                                    "--framer-font-size": "16px"
                                                },
                                                children: ", but we're taking it further with making them verifiable."
                                            }), a("span", {
                                                style: {
                                                    "--framer-font-size": "16px"
                                                },
                                                children: [e("br", {}), e("br", {})]
                                            }), e("span", {
                                                style: {
                                                    "--framer-font-size": "16px"
                                                },
                                                children: "For this, we're introducing an OpenAI compatible LLM API that abstracts complex cryptographic mechanisms to enable devs easily integrate proofs for agent\u2019s thoughts & actions to its users."
                                            })]
                                        })]
                                    }),
                                    className: "framer-om62ve",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(z, {
                                    height: 28,
                                    children: e(Se, {
                                        animate: Re,
                                        className: "framer-als1ti-container",
                                        "data-framer-appear-id": "als1ti",
                                        initial: D,
                                        optimized: !0,
                                        children: e($, {
                                            BaKX22elW: !1,
                                            H4dudqG6k: "build yours now",
                                            height: "100%",
                                            id: "BHC058FJr",
                                            layoutId: "BHC058FJr",
                                            mG_aisrrQ: "https://github.com/galadriel-ai/sentience",
                                            Pi1ZfmqIq: !0,
                                            variant: "ECqVnE6zK",
                                            width: "100%"
                                        })
                                    })
                                })]
                            }), a(W, {
                                animate: pe,
                                className: "framer-agy57k",
                                "data-border": !0,
                                "data-framer-appear-id": "agy57k",
                                "data-framer-name": "Embedd",
                                initial: D,
                                name: "Embedd",
                                optimized: !0,
                                children: [e("div", {
                                    className: "framer-ahazby",
                                    "data-framer-name": "Heading",
                                    name: "Heading",
                                    children: e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                    "--framer-font-family": '"Press Start 2P", sans-serif',
                                                    "--framer-font-size": "24px",
                                                    "--framer-line-height": "1.4em",
                                                    "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                                    "--framer-text-transform": "uppercase"
                                                },
                                                children: "PAWT sentience is verified"
                                            })
                                        }),
                                        className: "framer-183y5c3",
                                        fonts: ["GF;Press Start 2P-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                        children: a("p", {
                                            style: {
                                                "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                "--framer-font-family": '"Roboto Mono", monospace',
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                            },
                                            children: ["All PAWT ", e(Q, {
                                                href: "https://x.com/daigeagi",
                                                nodeId: "XLy4sRXDw",
                                                openInNewTab: !0,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-1gwsvzq",
                                                    "data-styles-preset": "fe9vHQdfa",
                                                    children: "tweets"
                                                })
                                            }), " are fully autonomous, cryptographically verifiable using our API."]
                                        })
                                    }),
                                    className: "framer-rtxj",
                                    fonts: ["GF;Roboto Mono-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(z, {
                                    children: e(C, {
                                        className: "framer-ofyn4r-container",
                                        children: e(ee, {
                                            height: "100%",
                                            html: "",
                                            id: "JRH_gv_tV",
                                            layoutId: "JRH_gv_tV",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            type: "url",
                                            url: "https://agent-logs-frontend.vercel.app/",
                                            width: "100%"
                                        })
                                    })
                                })]
                            }), a(W, {
                                animate: pe,
                                className: "framer-17qstkq",
                                "data-border": !0,
                                "data-framer-appear-id": "17qstkq",
                                "data-framer-name": "How it works",
                                initial: D,
                                name: "How it works",
                                optimized: !0,
                                children: [e("div", {
                                    className: "framer-gs45wt",
                                    "data-framer-name": "Heading",
                                    name: "Heading",
                                    children: e(M, {
                                        breakpoint: i,
                                        overrides: {
                                            E_y3s1DGC: {
                                                children: e(n, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                            "--framer-font-family": '"Press Start 2P", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-line-height": "1.4em",
                                                            "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: "How does it work?"
                                                    })
                                                })
                                            }
                                        },
                                        children: e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(n, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "How does it work?"
                                                })
                                            }),
                                            className: "framer-k0qlul",
                                            fonts: ["GF;Press Start 2P-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                }), a("div", {
                                    className: "framer-1eloeaw",
                                    "data-framer-name": "Table + description",
                                    name: "Table + description",
                                    children: [a("div", {
                                        className: "framer-q795oi",
                                        "data-framer-name": "Text area",
                                        name: "Text area",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: a(n, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                                    },
                                                    children: "An AI Agent calls OpenAI compatible LLM API via a TEE - fully encrypted hardware enclave."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                                    },
                                                    children: "TEE back-end calls LLM API and returns the response with a cryptographically verifiable proof of inference."
                                                })]
                                            }),
                                            className: "framer-gfwozw",
                                            fonts: ["GF;Roboto Mono-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(c, {
                                            __fromCanvasComponent: !0,
                                            children: a(n, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                                    },
                                                    children: "The response with a proof is stored on a ledger and is publicly available for verification. The ledger can be on- or off-chain."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                                    },
                                                    children: "[Coming soon: user-friendly proof explorer]"
                                                })]
                                            }),
                                            className: "framer-uimgyv",
                                            fonts: ["GF;Roboto Mono-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    }), e("div", {
                                        className: "framer-1kn1ihj",
                                        "data-framer-name": "Table container",
                                        name: "Table container",
                                        children: e(z, {
                                            height: 317,
                                            children: e(C, {
                                                className: "framer-oegtu0-container",
                                                children: e(M, {
                                                    breakpoint: i,
                                                    overrides: {
                                                        E_y3s1DGC: {
                                                            variant: "gd5wMqSWR"
                                                        },
                                                        Z9B8pZgIC: {
                                                            variant: "yFZLEczXt"
                                                        }
                                                    },
                                                    children: e(qe, {
                                                        height: "100%",
                                                        id: "WLA16stsH",
                                                        layoutId: "WLA16stsH",
                                                        variant: "mZh7I_ryP",
                                                        width: "100%"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), a(W, {
                                animate: pe,
                                className: "framer-1kr2u2n",
                                "data-border": !0,
                                "data-framer-appear-id": "1kr2u2n",
                                "data-framer-name": "LLM requests",
                                initial: D,
                                name: "LLM requests",
                                optimized: !0,
                                children: [e("div", {
                                    className: "framer-1ns8yd4",
                                    "data-framer-name": "Heading",
                                    name: "Heading",
                                    children: e(M, {
                                        breakpoint: i,
                                        overrides: {
                                            E_y3s1DGC: {
                                                children: e(n, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                            "--framer-font-family": '"Press Start 2P", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-line-height": "1.4em",
                                                            "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: "show proof"
                                                    })
                                                })
                                            }
                                        },
                                        children: e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(n, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: "show proof"
                                                })
                                            }),
                                            className: "framer-1ebgwo8",
                                            fonts: ["GF;Press Start 2P-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                }), a("div", {
                                    className: "framer-v0sm8f",
                                    "data-framer-name": "Boxes + text area",
                                    name: "Boxes + text area",
                                    children: [e("div", {
                                        className: "framer-1uq6lzm",
                                        "data-framer-name": "Request boxes",
                                        name: "Request boxes",
                                        children: a("div", {
                                            className: "framer-xb049z",
                                            "data-framer-name": "Boxes",
                                            name: "Boxes",
                                            children: [e(M, {
                                                breakpoint: i,
                                                overrides: {
                                                    E_y3s1DGC: {
                                                        width: "calc(min(100vw - 20px, 1728px) - 32px)"
                                                    },
                                                    Z9B8pZgIC: {
                                                        width: "min((min(100vw - 60px, 1728px) - 64px) * 0.6, 900px)"
                                                    }
                                                },
                                                children: e(z, {
                                                    height: 64,
                                                    width: "min((min(100vw - 60px, 1728px) - 64px) * 0.66, 900px)",
                                                    children: e(C, {
                                                        className: "framer-dt2j0c-container",
                                                        children: e(M, {
                                                            breakpoint: i,
                                                            overrides: {
                                                                E_y3s1DGC: {
                                                                    variant: "GBkXGG4NC"
                                                                },
                                                                Z9B8pZgIC: {
                                                                    variant: "GBkXGG4NC"
                                                                }
                                                            },
                                                            children: e(te, {
                                                                height: "100%",
                                                                id: "YO27IFYF7",
                                                                layoutId: "YO27IFYF7",
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                variant: "MLTU2_Ohz",
                                                                width: "100%",
                                                                xrVk1SdPL: "LLM request #113"
                                                            })
                                                        })
                                                    })
                                                })
                                            }), e(M, {
                                                breakpoint: i,
                                                overrides: {
                                                    E_y3s1DGC: {
                                                        width: "calc(min(100vw - 20px, 1728px) - 32px)"
                                                    },
                                                    Z9B8pZgIC: {
                                                        width: "min((min(100vw - 60px, 1728px) - 64px) * 0.6, 900px)"
                                                    }
                                                },
                                                children: e(z, {
                                                    height: 64,
                                                    width: "min((min(100vw - 60px, 1728px) - 64px) * 0.66, 900px)",
                                                    children: e(C, {
                                                        className: "framer-1pumwhv-container",
                                                        children: e(M, {
                                                            breakpoint: i,
                                                            overrides: {
                                                                E_y3s1DGC: {
                                                                    variant: "GBkXGG4NC"
                                                                },
                                                                Z9B8pZgIC: {
                                                                    variant: "GBkXGG4NC"
                                                                }
                                                            },
                                                            children: e(te, {
                                                                height: "100%",
                                                                id: "PzyXL5GJd",
                                                                layoutId: "PzyXL5GJd",
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                variant: "MLTU2_Ohz",
                                                                width: "100%",
                                                                xrVk1SdPL: "LLM request #112"
                                                            })
                                                        })
                                                    })
                                                })
                                            }), e(M, {
                                                breakpoint: i,
                                                overrides: {
                                                    E_y3s1DGC: {
                                                        width: "calc(min(100vw - 20px, 1728px) - 32px)"
                                                    },
                                                    Z9B8pZgIC: {
                                                        width: "min((min(100vw - 60px, 1728px) - 64px) * 0.6, 900px)"
                                                    }
                                                },
                                                children: e(z, {
                                                    height: 64,
                                                    width: "min((min(100vw - 60px, 1728px) - 64px) * 0.66, 900px)",
                                                    children: e(C, {
                                                        className: "framer-1vmvwco-container",
                                                        children: e(M, {
                                                            breakpoint: i,
                                                            overrides: {
                                                                E_y3s1DGC: {
                                                                    variant: "GBkXGG4NC"
                                                                },
                                                                Z9B8pZgIC: {
                                                                    variant: "GBkXGG4NC"
                                                                }
                                                            },
                                                            children: e(te, {
                                                                height: "100%",
                                                                id: "t5cL1vlk4",
                                                                layoutId: "t5cL1vlk4",
                                                                style: {
                                                                    width: "100%"
                                                                },
                                                                variant: "MLTU2_Ohz",
                                                                width: "100%",
                                                                xrVk1SdPL: "LLM request #111"
                                                            })
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    }), e("div", {
                                        className: "framer-1ujkji3",
                                        "data-framer-name": "Text area",
                                        name: "Text area",
                                        children: e(c, {
                                            __fromCanvasComponent: !0,
                                            children: a(n, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                                    },
                                                    children: "Display your AI agent\u2019s verified thoughts, actions, responses, etc. on every interface, using our JS SDK. "
                                                }), a("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7Um9ib3RvIE1vbm8tcmVndWxhcg==",
                                                        "--framer-font-family": '"Roboto Mono", monospace',
                                                        "--framer-font-size": "14px",
                                                        "--framer-line-height": "1.4em",
                                                        "--framer-text-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                                    },
                                                    children: [e("span", {
                                                        style: {
                                                            "--framer-font-size": "16px"
                                                        },
                                                        children: e("br", {})
                                                    }), e("span", {
                                                        style: {
                                                            "--framer-font-size": "16px"
                                                        },
                                                        children: "See "
                                                    }), e(Q, {
                                                        href: "https://explorer.galadriel.com/",
                                                        nodeId: "gmBp1rkGE",
                                                        openInNewTab: !0,
                                                        smoothScroll: !1,
                                                        children: e("a", {
                                                            className: "framer-styles-preset-1gwsvzq",
                                                            "data-styles-preset": "fe9vHQdfa",
                                                            children: e("span", {
                                                                style: {
                                                                    "--framer-font-size": "16px"
                                                                },
                                                                children: "explorer.galadriel.com"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }),
                                            className: "framer-8vmets",
                                            fonts: ["GF;Roboto Mono-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            }), e(z, {
                                height: 28,
                                children: e(Se, {
                                    animate: Re,
                                    className: "framer-11o6im6-container",
                                    "data-framer-appear-id": "11o6im6",
                                    initial: D,
                                    optimized: !0,
                                    children: e($, {
                                        BaKX22elW: !1,
                                        H4dudqG6k: "build yours now",
                                        height: "100%",
                                        id: "vhbfpCrtb",
                                        layoutId: "vhbfpCrtb",
                                        mG_aisrrQ: "https://github.com/galadriel-ai/sentience",
                                        Pi1ZfmqIq: !0,
                                        variant: "ECqVnE6zK",
                                        width: "100%"
                                    })
                                })
                            })]
                        })]
                    }), e("div", {
                        background: {
                            alt: "",
                            fit: "fill"
                        },
                        className: "framer-1tete4q",
                        "data-framer-name": "Noise",
                        name: "Noise",
                        children: e(z, {
                            children: e(C, {
                                className: "framer-1e6b32n-container",
                                children: e(ue, {
                                    height: "100%",
                                    id: "JQf7c0nJf",
                                    layoutId: "JQf7c0nJf",
                                    opacity: .1,
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            })
                        })
                    })]
                })
            }), e("div", {
                className: F(Oe, ...f),
                id: "overlay"
            })]
        })
    })
})
  , ot = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Ce.bodyClassName}-framer-bzMeS { background: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, rgb(15, 15, 15)) /* {"name":"Black"} */; }`, ".framer-bzMeS.framer-pdmkr2, .framer-bzMeS .framer-pdmkr2 { display: block; }", ".framer-bzMeS.framer-bsxhao { align-content: center; align-items: center; background-color: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1154px; }", ".framer-bzMeS .framer-1bep45o { align-content: center; align-items: center; background-color: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, #0f0f0f); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 100vh; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bzMeS .framer-1tez3dp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 5; }", ".framer-bzMeS .framer-18fih4j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1728px; overflow: hidden; padding: 30px 30px 20px 30px; position: relative; width: 100%; z-index: 3; }", ".framer-bzMeS .framer-1mw189w { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 12px 0px 0px; position: relative; width: 1px; }", ".framer-bzMeS .framer-xdd5ux, .framer-bzMeS .framer-1fm5q33 { flex: none; height: 121px; max-width: 600px; overflow: hidden; position: relative; width: 100%; }", ".framer-bzMeS .framer-46a63g, .framer-bzMeS .framer-w27cd4, .framer-bzMeS .framer-qrid7v { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }", ".framer-bzMeS .framer-5gcldi { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px 32px 0px 110px; position: absolute; top: 50%; transform: translateY(-50%); width: 100%; }", ".framer-bzMeS .framer-17cxf02, .framer-bzMeS .framer-vc1pjb { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-bzMeS .framer-fjiqmx { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-bzMeS .framer-1j9hstd { flex: none; height: 121px; overflow: hidden; position: relative; width: 22%; }", ".framer-bzMeS .framer-1htjown { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 120px; justify-content: center; left: calc(50.00000000000002% - min(420px, 99.609375%) / 2); max-width: 420px; padding: 0px 12px 0px 12px; position: absolute; top: calc(49.586776859504155% - 120px / 2); width: 100%; }", ".framer-bzMeS .framer-spcht9 { flex: 1 0 0px; height: 120px; overflow: hidden; position: relative; width: 1px; }", ".framer-bzMeS .framer-1vcvfui { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px 48px 0px 48px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 100%; z-index: 1; }", ".framer-bzMeS .framer-1mn6vhj-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }", ".framer-bzMeS .framer-1v6qvvy-container, .framer-bzMeS .framer-swzys9-container, .framer-bzMeS .framer-oegtu0-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-bzMeS .framer-loq7s1 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 12px; position: relative; width: 1px; }", ".framer-bzMeS .framer-uqh6kc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px 80px 0px 32px; position: absolute; top: 50%; transform: translateY(-50%); width: 100%; }", ".framer-bzMeS .framer-1udjvwa { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 464px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-bzMeS .framer-bb1bb4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 1728px; overflow: hidden; padding: 0px 30px 20px 30px; position: relative; width: 100%; z-index: 3; }", ".framer-bzMeS .framer-xafx9c-container, .framer-bzMeS .framer-als1ti-container, .framer-bzMeS .framer-11o6im6-container { flex: none; height: auto; position: relative; width: auto; z-index: 3; }", ".framer-bzMeS .framer-15gdleg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 30px 100px 30px; position: relative; width: 100%; z-index: 2; }", ".framer-bzMeS .framer-1erduk7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1728px; overflow: hidden; padding: 20px 0px 20px 0px; position: relative; width: 100%; z-index: 2; }", ".framer-bzMeS .framer-p69hzy { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }", ".framer-bzMeS .framer-y8qxte, .framer-bzMeS .framer-1bgd4tj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); position: relative; width: 30px; }", ".framer-bzMeS .framer-mytprm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 900px; padding: 0px; position: relative; width: 80%; }", ".framer-bzMeS .framer-qzwykv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-bzMeS .framer-1vryhbc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }", ".framer-bzMeS .framer-ilg13c { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-end; padding: 0px; position: relative; width: 1px; }", ".framer-bzMeS .framer-u6a58w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bzMeS .framer-1k200bq { --border-bottom-width: 0px; --border-color: var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, #f9f9f9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1728px; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }", ".framer-bzMeS .framer-om62ve { --framer-paragraph-spacing: 16px; flex: none; height: auto; max-width: 900px; min-width: 200px; position: relative; white-space: pre-wrap; width: 66%; word-break: break-word; word-wrap: break-word; }", ".framer-bzMeS .framer-agy57k, .framer-bzMeS .framer-17qstkq { --border-bottom-width: 0px; --border-color: var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, #f9f9f9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1728px; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }", ".framer-bzMeS .framer-ahazby, .framer-bzMeS .framer-gs45wt, .framer-bzMeS .framer-1ns8yd4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bzMeS .framer-183y5c3, .framer-bzMeS .framer-k0qlul, .framer-bzMeS .framer-1ebgwo8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-bzMeS .framer-rtxj { --framer-paragraph-spacing: 16px; flex: none; height: auto; min-width: 200px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-bzMeS .framer-ofyn4r-container { flex: none; height: 400px; position: relative; width: 100%; }", ".framer-bzMeS .framer-1eloeaw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bzMeS .framer-q795oi { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 66%; min-width: 230px; padding: 0px; position: relative; width: 1px; }", ".framer-bzMeS .framer-gfwozw, .framer-bzMeS .framer-uimgyv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 16px; flex: 1 0 0px; height: auto; min-width: 200px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-bzMeS .framer-1kn1ihj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; max-width: 1000px; min-width: 900px; padding: 0px; position: relative; width: 1px; }", ".framer-bzMeS .framer-1kr2u2n { --border-bottom-width: 0px; --border-color: var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, #f9f9f9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1728px; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }", ".framer-bzMeS .framer-v0sm8f { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bzMeS .framer-1uq6lzm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; max-width: 900px; padding: 0px; position: relative; width: 66%; }", ".framer-bzMeS .framer-xb049z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bzMeS .framer-dt2j0c-container, .framer-bzMeS .framer-1pumwhv-container, .framer-bzMeS .framer-1vmvwco-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-bzMeS .framer-1ujkji3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 500px; padding: 0px; position: relative; width: 1px; }", ".framer-bzMeS .framer-8vmets { --framer-paragraph-spacing: 16px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-bzMeS .framer-1tete4q { align-content: center; align-items: center; bottom: -2px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); min-height: 100vh; overflow: hidden; padding: 0px; position: absolute; width: 100%; z-index: 0; }", ".framer-bzMeS .framer-1e6b32n-container { flex: none; height: 100%; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bzMeS.framer-bsxhao, .framer-bzMeS .framer-1bep45o, .framer-bzMeS .framer-1tez3dp, .framer-bzMeS .framer-1mw189w, .framer-bzMeS .framer-5gcldi, .framer-bzMeS .framer-1htjown, .framer-bzMeS .framer-1vcvfui, .framer-bzMeS .framer-loq7s1, .framer-bzMeS .framer-uqh6kc, .framer-bzMeS .framer-bb1bb4, .framer-bzMeS .framer-15gdleg, .framer-bzMeS .framer-1erduk7, .framer-bzMeS .framer-p69hzy, .framer-bzMeS .framer-mytprm, .framer-bzMeS .framer-qzwykv, .framer-bzMeS .framer-ilg13c, .framer-bzMeS .framer-u6a58w, .framer-bzMeS .framer-1k200bq, .framer-bzMeS .framer-agy57k, .framer-bzMeS .framer-ahazby, .framer-bzMeS .framer-17qstkq, .framer-bzMeS .framer-gs45wt, .framer-bzMeS .framer-1eloeaw, .framer-bzMeS .framer-q795oi, .framer-bzMeS .framer-1kn1ihj, .framer-bzMeS .framer-1kr2u2n, .framer-bzMeS .framer-1ns8yd4, .framer-bzMeS .framer-v0sm8f, .framer-bzMeS .framer-1uq6lzm, .framer-bzMeS .framer-xb049z, .framer-bzMeS .framer-1ujkji3, .framer-bzMeS .framer-1tete4q { gap: 0px; } .framer-bzMeS.framer-bsxhao > *, .framer-bzMeS .framer-1bep45o > *, .framer-bzMeS .framer-1tez3dp > *, .framer-bzMeS .framer-1mw189w > *, .framer-bzMeS .framer-loq7s1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-bzMeS.framer-bsxhao > :first-child, .framer-bzMeS .framer-1bep45o > :first-child, .framer-bzMeS .framer-1tez3dp > :first-child, .framer-bzMeS .framer-1mw189w > :first-child, .framer-bzMeS .framer-5gcldi > :first-child, .framer-bzMeS .framer-loq7s1 > :first-child, .framer-bzMeS .framer-uqh6kc > :first-child, .framer-bzMeS .framer-15gdleg > :first-child, .framer-bzMeS .framer-mytprm > :first-child, .framer-bzMeS .framer-u6a58w > :first-child, .framer-bzMeS .framer-agy57k > :first-child, .framer-bzMeS .framer-ahazby > :first-child, .framer-bzMeS .framer-17qstkq > :first-child, .framer-bzMeS .framer-gs45wt > :first-child, .framer-bzMeS .framer-1kn1ihj > :first-child, .framer-bzMeS .framer-1kr2u2n > :first-child, .framer-bzMeS .framer-1ns8yd4 > :first-child, .framer-bzMeS .framer-1uq6lzm > :first-child, .framer-bzMeS .framer-xb049z > :first-child { margin-top: 0px; } .framer-bzMeS.framer-bsxhao > :last-child, .framer-bzMeS .framer-1bep45o > :last-child, .framer-bzMeS .framer-1tez3dp > :last-child, .framer-bzMeS .framer-1mw189w > :last-child, .framer-bzMeS .framer-5gcldi > :last-child, .framer-bzMeS .framer-loq7s1 > :last-child, .framer-bzMeS .framer-uqh6kc > :last-child, .framer-bzMeS .framer-15gdleg > :last-child, .framer-bzMeS .framer-mytprm > :last-child, .framer-bzMeS .framer-u6a58w > :last-child, .framer-bzMeS .framer-agy57k > :last-child, .framer-bzMeS .framer-ahazby > :last-child, .framer-bzMeS .framer-17qstkq > :last-child, .framer-bzMeS .framer-gs45wt > :last-child, .framer-bzMeS .framer-1kn1ihj > :last-child, .framer-bzMeS .framer-1kr2u2n > :last-child, .framer-bzMeS .framer-1ns8yd4 > :last-child, .framer-bzMeS .framer-1uq6lzm > :last-child, .framer-bzMeS .framer-xb049z > :last-child { margin-bottom: 0px; } .framer-bzMeS .framer-5gcldi > *, .framer-bzMeS .framer-uqh6kc > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-bzMeS .framer-1htjown > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-bzMeS .framer-1htjown > :first-child, .framer-bzMeS .framer-1vcvfui > :first-child, .framer-bzMeS .framer-bb1bb4 > :first-child, .framer-bzMeS .framer-1erduk7 > :first-child, .framer-bzMeS .framer-p69hzy > :first-child, .framer-bzMeS .framer-qzwykv > :first-child, .framer-bzMeS .framer-ilg13c > :first-child, .framer-bzMeS .framer-1k200bq > :first-child, .framer-bzMeS .framer-1eloeaw > :first-child, .framer-bzMeS .framer-q795oi > :first-child, .framer-bzMeS .framer-v0sm8f > :first-child, .framer-bzMeS .framer-1ujkji3 > :first-child, .framer-bzMeS .framer-1tete4q > :first-child { margin-left: 0px; } .framer-bzMeS .framer-1htjown > :last-child, .framer-bzMeS .framer-1vcvfui > :last-child, .framer-bzMeS .framer-bb1bb4 > :last-child, .framer-bzMeS .framer-1erduk7 > :last-child, .framer-bzMeS .framer-p69hzy > :last-child, .framer-bzMeS .framer-qzwykv > :last-child, .framer-bzMeS .framer-ilg13c > :last-child, .framer-bzMeS .framer-1k200bq > :last-child, .framer-bzMeS .framer-1eloeaw > :last-child, .framer-bzMeS .framer-q795oi > :last-child, .framer-bzMeS .framer-v0sm8f > :last-child, .framer-bzMeS .framer-1ujkji3 > :last-child, .framer-bzMeS .framer-1tete4q > :last-child { margin-right: 0px; } .framer-bzMeS .framer-1vcvfui > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-bzMeS .framer-bb1bb4 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-bzMeS .framer-15gdleg > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-bzMeS .framer-1erduk7 > *, .framer-bzMeS .framer-p69hzy > *, .framer-bzMeS .framer-qzwykv > *, .framer-bzMeS .framer-ilg13c > *, .framer-bzMeS .framer-1ujkji3 > *, .framer-bzMeS .framer-1tete4q > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-bzMeS .framer-mytprm > *, .framer-bzMeS .framer-ahazby > *, .framer-bzMeS .framer-gs45wt > *, .framer-bzMeS .framer-1ns8yd4 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-bzMeS .framer-u6a58w > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-bzMeS .framer-1k200bq > *, .framer-bzMeS .framer-1eloeaw > *, .framer-bzMeS .framer-v0sm8f > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-bzMeS .framer-agy57k > *, .framer-bzMeS .framer-17qstkq > *, .framer-bzMeS .framer-1kr2u2n > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-bzMeS .framer-q795oi > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-bzMeS .framer-1kn1ihj > *, .framer-bzMeS .framer-1uq6lzm > *, .framer-bzMeS .framer-xb049z > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }", `@media (min-width: 690px) and (max-width: 1153px) { .${Ce.bodyClassName}-framer-bzMeS { background: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, rgb(15, 15, 15)) /* {"name":"Black"} */; } .framer-bzMeS.framer-bsxhao { width: 690px; } .framer-bzMeS .framer-18fih4j { flex-wrap: wrap; gap: 10px; justify-content: flex-start; } .framer-bzMeS .framer-1mw189w, .framer-bzMeS .framer-loq7s1 { min-width: 400px; padding: 0px; } .framer-bzMeS .framer-xdd5ux, .framer-bzMeS .framer-1fm5q33 { max-width: unset; } .framer-bzMeS .framer-5gcldi, .framer-bzMeS .framer-uqh6kc { padding: 0px 32px 0px 32px; } .framer-bzMeS .framer-1j9hstd { flex: 1 0 0px; max-width: 300px; min-width: 220px; width: 1px; } .framer-bzMeS .framer-1htjown { left: calc(50.00000000000002% - 99.609375% / 2); max-width: unset; padding: 0px; } .framer-bzMeS .framer-1vcvfui { gap: 20px; } .framer-bzMeS .framer-1udjvwa { max-width: 475px; } .framer-bzMeS .framer-15gdleg { padding: 0px 30px 80px 30px; } .framer-bzMeS .framer-p69hzy { flex: none; padding: 0px 16px 0px 0px; width: min-content; } .framer-bzMeS .framer-mytprm { flex: 1 0 0px; max-width: unset; width: 1px; } .framer-bzMeS .framer-ilg13c { flex: none; padding: 0px 0px 0px 16px; width: min-content; } .framer-bzMeS .framer-1k200bq { flex-wrap: wrap; } .framer-bzMeS .framer-om62ve { width: 100%; } .framer-bzMeS .framer-1eloeaw { flex-direction: column; gap: 40px; overflow: visible; } .framer-bzMeS .framer-q795oi { flex: none; max-width: 700px; width: 100%; } .framer-bzMeS .framer-1kn1ihj { flex: none; min-width: unset; overflow: visible; width: 100%; } .framer-bzMeS .framer-v0sm8f { gap: 32px; } .framer-bzMeS .framer-1uq6lzm { width: 60%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bzMeS .framer-18fih4j, .framer-bzMeS .framer-1vcvfui, .framer-bzMeS .framer-1eloeaw, .framer-bzMeS .framer-v0sm8f { gap: 0px; } .framer-bzMeS .framer-18fih4j > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-bzMeS .framer-18fih4j > :first-child, .framer-bzMeS .framer-1vcvfui > :first-child, .framer-bzMeS .framer-v0sm8f > :first-child { margin-left: 0px; } .framer-bzMeS .framer-18fih4j > :last-child, .framer-bzMeS .framer-1vcvfui > :last-child, .framer-bzMeS .framer-v0sm8f > :last-child { margin-right: 0px; } .framer-bzMeS .framer-1vcvfui > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-bzMeS .framer-1eloeaw > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-bzMeS .framer-1eloeaw > :first-child { margin-top: 0px; } .framer-bzMeS .framer-1eloeaw > :last-child { margin-bottom: 0px; } .framer-bzMeS .framer-v0sm8f > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } }}`, `@media (max-width: 689px) { .${Ce.bodyClassName}-framer-bzMeS { background: var(--token-9057efb0-115b-4a23-b1fd-97237921d348, rgb(15, 15, 15)) /* {"name":"Black"} */; } .framer-bzMeS.framer-bsxhao { width: 320px; } .framer-bzMeS .framer-1tez3dp, .framer-bzMeS .framer-1vcvfui { gap: 20px; } .framer-bzMeS .framer-18fih4j { flex-direction: column; flex-wrap: wrap; gap: 10px; justify-content: flex-start; padding: 30px 10px 20px 10px; } .framer-bzMeS .framer-1mw189w, .framer-bzMeS .framer-loq7s1 { flex: none; min-width: 300px; padding: 0px; width: 100%; } .framer-bzMeS .framer-xdd5ux, .framer-bzMeS .framer-1fm5q33 { max-width: unset; } .framer-bzMeS .framer-5gcldi { padding: 0px 16px 0px 32px; } .framer-bzMeS .framer-1j9hstd { min-width: 220px; width: 100%; } .framer-bzMeS .framer-1htjown { left: calc(50.00000000000002% - 99.609375% / 2); max-width: unset; padding: 0px; } .framer-bzMeS .framer-uqh6kc { padding: 0px 40px 0px 16px; } .framer-bzMeS .framer-bb1bb4 { gap: 16px; padding: 0px 10px 20px 10px; } .framer-bzMeS .framer-15gdleg { padding: 0px 10px 48px 10px; } .framer-bzMeS .framer-1erduk7 { padding: 20px 0px 0px 0px; } .framer-bzMeS .framer-mytprm { flex: 1 0 0px; max-width: unset; width: 1px; } .framer-bzMeS .framer-u6a58w { gap: 64px; } .framer-bzMeS .framer-1k200bq { flex-wrap: wrap; gap: 40px; padding: 0px 16px 0px 16px; } .framer-bzMeS .framer-om62ve { width: 100%; } .framer-bzMeS .framer-agy57k, .framer-bzMeS .framer-17qstkq, .framer-bzMeS .framer-1kr2u2n { gap: 40px; padding: 0px 16px 0px 16px; } .framer-bzMeS .framer-1eloeaw { flex-direction: column; gap: 40px; } .framer-bzMeS .framer-q795oi { flex: none; gap: 20px; max-width: 700px; width: 100%; } .framer-bzMeS .framer-1kn1ihj { align-content: center; align-items: center; flex: none; min-width: unset; width: 100%; } .framer-bzMeS .framer-v0sm8f { flex-direction: column; gap: 32px; } .framer-bzMeS .framer-1uq6lzm { max-width: unset; width: 100%; } .framer-bzMeS .framer-1ujkji3 { flex: none; max-width: unset; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-bzMeS .framer-1tez3dp, .framer-bzMeS .framer-18fih4j, .framer-bzMeS .framer-1vcvfui, .framer-bzMeS .framer-bb1bb4, .framer-bzMeS .framer-u6a58w, .framer-bzMeS .framer-1k200bq, .framer-bzMeS .framer-agy57k, .framer-bzMeS .framer-17qstkq, .framer-bzMeS .framer-1eloeaw, .framer-bzMeS .framer-q795oi, .framer-bzMeS .framer-1kr2u2n, .framer-bzMeS .framer-v0sm8f { gap: 0px; } .framer-bzMeS .framer-1tez3dp > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-bzMeS .framer-1tez3dp > :first-child, .framer-bzMeS .framer-18fih4j > :first-child, .framer-bzMeS .framer-u6a58w > :first-child, .framer-bzMeS .framer-agy57k > :first-child, .framer-bzMeS .framer-17qstkq > :first-child, .framer-bzMeS .framer-1eloeaw > :first-child, .framer-bzMeS .framer-1kr2u2n > :first-child, .framer-bzMeS .framer-v0sm8f > :first-child { margin-top: 0px; } .framer-bzMeS .framer-1tez3dp > :last-child, .framer-bzMeS .framer-18fih4j > :last-child, .framer-bzMeS .framer-u6a58w > :last-child, .framer-bzMeS .framer-agy57k > :last-child, .framer-bzMeS .framer-17qstkq > :last-child, .framer-bzMeS .framer-1eloeaw > :last-child, .framer-bzMeS .framer-1kr2u2n > :last-child, .framer-bzMeS .framer-v0sm8f > :last-child { margin-bottom: 0px; } .framer-bzMeS .framer-18fih4j > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-bzMeS .framer-1vcvfui > *, .framer-bzMeS .framer-q795oi > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-bzMeS .framer-1vcvfui > :first-child, .framer-bzMeS .framer-bb1bb4 > :first-child, .framer-bzMeS .framer-1k200bq > :first-child, .framer-bzMeS .framer-q795oi > :first-child { margin-left: 0px; } .framer-bzMeS .framer-1vcvfui > :last-child, .framer-bzMeS .framer-bb1bb4 > :last-child, .framer-bzMeS .framer-1k200bq > :last-child, .framer-bzMeS .framer-q795oi > :last-child { margin-right: 0px; } .framer-bzMeS .framer-bb1bb4 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-bzMeS .framer-u6a58w > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-bzMeS .framer-1k200bq > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-bzMeS .framer-agy57k > *, .framer-bzMeS .framer-17qstkq > *, .framer-bzMeS .framer-1eloeaw > *, .framer-bzMeS .framer-1kr2u2n > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-bzMeS .framer-v0sm8f > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }}`, ...Ue, '.framer-bzMeS[data-border="true"]::after, .framer-bzMeS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , he = Y(at, ot, "framer-bzMeS")
  , qo = he;
he.displayName = "Page";
he.defaultProps = {
    height: 2694,
    width: 1154
};
O(he, [{
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
}, ...Fr, ..._r, ...Nr, ...Pr, ...Ar, ...Tr, ...Br, ...Gr, ...Ne(He)], {
    supportsExplicitInterCodegen: !0
});
var So = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramerE7hoLWug8",
            slots: [],
            annotations: {
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Z9B8pZgIC":{"layout":["fixed","auto"]},"E_y3s1DGC":{"layout":["fixed","auto"]}}}',
                framerContractVersion: "1",
                framerResponsiveScreen: "",
                framerDisplayContentsDiv: "false",
                framerIntrinsicHeight: "2694",
                framerImmutableVariables: "true",
                framerIntrinsicWidth: "1154",
                framerComponentViewportWidth: "true"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {So as __FramerMetadata__, qo as default};
//# sourceMappingURL=cYg14gO0z0GyKh1U81qdnGHlYPAgGhMfDOCSZhGYfZo.CRPX5YLQ.mjs.map
