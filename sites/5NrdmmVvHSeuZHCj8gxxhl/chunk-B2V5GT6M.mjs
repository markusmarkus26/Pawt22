import {B as P, E as Y, G as g, J as N, K as F, M as S, Q as R, V as _, b as u, d as k, f as V, h as q, ha as E, j as M, k as I, ka as n1, ma as x, na as G, o as r, p as a1, q as p, r as s, s as b} from "./chunk-S6IUZFYY.mjs";
var o1 = (t, e, n) => Math.min(Math.max(n, t), e);
var i1 = (t, e="end") => n => {
    n = e === "end" ? Math.min(n, .999) : Math.max(n, .001);
    let a = n * t
      , o = e === "end" ? Math.floor(a) : Math.ceil(a);
    return o1(0, 1, o / t)
}
;
function $(t) {
    let {opacity: e, style: n} = t
      , a = ["0%", "-5%", "-15%", "7%", "-5%", "-15%", "15%", "0%", "3%", "-10%"]
      , o = ["0%", "-10%", "5%", "-25%", "25%", "10%", "0%", "15%", "35%", "10%"]
      , i = Y.current() === Y.canvas;
    return r("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden"
        },
        children: r(s.div, {
            style: {
                ...u1,
                opacity: e,
                inset: i ? 0 : "-200%",
                width: i ? "100%" : "400%",
                height: i ? "100%" : "400%",
                position: "absolute"
            },
            animate: !i && {
                x: a,
                y: o
            },
            transition: {
                ease: i1(10, "start"),
                repeat: 1 / 0,
                duration: 8
            }
        })
    })
}
$.defaultProps = {
    opacity: .5
};
N($, {
    opacity: {
        title: "Opacity",
        type: g.Number,
        step: .1,
        displayStepper: !0,
        max: 1,
        min: 0
    }
});
var u1 = {
    backgroundSize: "256px 256px",
    backgroundRepeat: "repeat",
    background: "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')"
};
var p1 = {
    ChWms3BuJ: {
        hover: !0
    },
    ybAngJ1L2: {
        hover: !0
    }
}
  , g1 = ["ChWms3BuJ", "ybAngJ1L2"]
  , L1 = "framer-T1pNL"
  , C1 = {
    ChWms3BuJ: "framer-v-1bdi0nb",
    ybAngJ1L2: "framer-v-tc35f6"
};
function e1(t, ...e) {
    let n = {};
    return e?.forEach(a => a && Object.assign(n, t[a])),
    n
}
var h1 = {
    delay: 0,
    duration: .7,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , v1 = ({value: t, children: e}) => {
    let n = V(p)
      , a = t ?? n.transition
      , o = M( () => ({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return r(p.Provider, {
        value: o,
        children: e
    })
}
  , b1 = s.create(u)
  , x1 = {
    "Variant 1": "ChWms3BuJ",
    "Variant 2": "ybAngJ1L2"
}
  , y1 = ({height: t, id: e, width: n, ...a}) => {
    var o, i;
    return {
        ...a,
        variant: (i = (o = x1[a.variant]) !== null && o !== void 0 ? o : a.variant) !== null && i !== void 0 ? i : "ChWms3BuJ"
    }
}
  , w1 = (t, e) => t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-")
  , k1 = k(function(t, e) {
    let {activeLocale: n, setLocale: a} = P()
      , {style: o, className: i, layoutId: c, variant: m, ...L} = y1(t)
      , {baseVariant: d, classNames: C, clearLoadingGesture: y, gestureHandlers: Z, gestureVariant: l, isLoading: U, setGestureState: K, setVariant: T, variants: f} = E({
        cycleOrder: g1,
        defaultVariant: "ChWms3BuJ",
        enabledGestures: p1,
        variant: m,
        variantClassNames: C1
    })
      , h = w1(t, f)
      , A = I(null)
      , B = q()
      , w = []
      , v = S();
    return r(b, {
        id: c ?? B,
        children: r(b1, {
            animate: f,
            initial: !1,
            children: r(v1, {
                value: h1,
                children: r(_, {
                    href: "https://galadriel.com",
                    nodeId: "ChWms3BuJ",
                    openInNewTab: !1,
                    ...e1({
                        ybAngJ1L2: {
                            href: "https://pump.fun/cCQsoo58Ahmjr4qc9WY4rKnaGzsCpnTkhg7BfMa2ump"
                        }
                    }, d, l),
                    children: r(s.a, {
                        ...L,
                        ...Z,
                        className: `${F(L1, ...w, "framer-1bdi0nb", i, C)} framer-f1f1z`,
                        "data-framer-name": "Variant 1",
                        layoutDependency: h,
                        layoutId: "ChWms3BuJ",
                        ref: e ?? A,
                        style: {
                            ...o
                        },
                        ...e1({
                            "ChWms3BuJ-hover": {
                                "data-framer-name": void 0
                            },
                            "ybAngJ1L2-hover": {
                                "data-framer-name": void 0
                            },
                            ybAngJ1L2: {
                                "data-framer-name": "Variant 2"
                            }
                        }, d, l),
                        children: r(x, {
                            className: "framer-62xf05",
                            "data-framer-name": "Icons/crypto",
                            layout: "position",
                            layoutDependency: h,
                            layoutId: "hpxJr7beu",
                            opacity: 1,
                            style: {
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            },
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(6 4.667)" id="ss12545399391_1"><path d="M 16.407 11.414 C 17.399 10.925 18.661 10.206 19.924 9.22 C 20.19 9.767 20.22 10.244 20.082 10.629 C 19.985 10.901 19.802 11.137 19.561 11.325 C 19.3 11.528 18.974 11.676 18.614 11.756 C 17.93 11.908 17.132 11.819 16.407 11.414 Z M 16.579 16.422 L 17.892 17.171 C 15.211 18.656 14.482 21.413 13.617 24.099 C 12.751 21.413 12.022 18.656 9.342 17.171 L 10.655 16.422 C 10.782 16.374 10.89 16.288 10.965 16.176 C 11.039 16.064 11.076 15.932 11.07 15.798 C 10.949 13.283 11.636 12.17 12.563 11.472 C 12.896 11.222 13.259 11.096 13.617 11.096 C 13.975 11.096 14.338 11.222 14.67 11.472 C 15.597 12.17 16.284 13.283 16.164 15.798 C 16.157 15.932 16.194 16.064 16.269 16.176 C 16.343 16.288 16.452 16.374 16.579 16.422 Z M 13.617 0 C 15.134 0.04 16.656 0.331 17.976 0.898 C 18.89 1.291 19.743 1.809 20.516 2.43 C 20.865 2.71 21.152 2.98 21.468 3.292 C 22.322 3.321 23.569 2.384 24.148 1.507 C 23.152 4.736 18.604 8.549 15.456 10.008 C 15.454 10.007 15.454 10.006 15.453 10.006 C 14.888 9.579 14.252 9.366 13.617 9.366 C 12.981 9.366 12.346 9.579 11.781 10.006 C 11.78 10.006 11.779 10.007 11.778 10.008 C 8.629 8.549 4.082 4.736 3.085 1.507 C 3.664 2.384 4.911 3.321 5.765 3.292 C 6.081 2.98 6.369 2.71 6.717 2.43 C 7.49 1.809 8.343 1.291 9.257 0.898 C 10.578 0.331 12.099 0.04 13.617 0 Z M 10.826 11.414 C 9.835 10.925 8.573 10.206 7.309 9.22 C 7.043 9.767 7.014 10.244 7.151 10.629 C 7.248 10.901 7.431 11.137 7.672 11.325 C 7.933 11.528 8.259 11.676 8.62 11.756 C 9.303 11.908 10.101 11.819 10.826 11.414 Z" fill="var(--token-7e0fd424-a9e1-4350-83e9-aec9de658b5f, rgb(251, 255, 209)) /* {&quot;name&quot;:&quot;White&quot;} */"></path><path d="M 21.309 8.013 C 22.004 7.319 22.617 6.551 23.11 5.866 L 23.36 6.331 C 24.166 7.925 24.585 9.511 24.585 11.297 L 24.583 14.131 L 24.598 15.6 C 24.656 19.206 25.446 22.855 27.235 26.195 L 23.492 23.212 L 20.844 27.459 L 18.062 24.871 L 13.617 32 L 9.172 24.871 L 6.39 27.459 L 3.742 23.212 L 0 26.195 C 1.789 22.855 2.578 19.207 2.637 15.6 L 2.652 14.131 L 2.65 11.297 C 2.65 9.511 3.069 7.925 3.875 6.331 L 4.125 5.866 C 4.618 6.551 5.23 7.319 5.926 8.013 L 5.709 8.459 C 5.287 9.325 5.147 10.293 5.476 11.214 C 5.688 11.807 6.075 12.316 6.573 12.704 C 7.057 13.081 7.63 13.336 8.23 13.469 C 8.621 13.556 9.019 13.592 9.415 13.58 C 9.323 14.097 9.282 14.633 9.28 15.179 L 5.75 17.195 L 8.474 18.704 C 8.691 18.824 8.899 18.962 9.093 19.117 C 11.339 21.11 12.689 27.005 13.617 29.885 C 14.545 27.005 15.896 21.11 18.142 19.117 C 18.336 18.962 18.543 18.824 18.761 18.704 L 21.485 17.195 L 17.955 15.179 C 17.953 14.633 17.912 14.097 17.82 13.58 C 18.215 13.592 18.614 13.556 19.004 13.469 C 19.604 13.336 20.177 13.081 20.661 12.704 C 21.16 12.316 21.547 11.807 21.759 11.214 C 22.088 10.293 21.948 9.325 21.526 8.459 L 21.309 8.013 Z" fill="var(--token-7e0fd424-a9e1-4350-83e9-aec9de658b5f, rgb(251, 255, 209)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></g></svg>',
                            svgContentId: 12545399391,
                            variants: {
                                "ybAngJ1L2-hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }
                            },
                            withExternalLayout: !0,
                            ...e1({
                                "ChWms3BuJ-hover": {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(6 4.667)" id="ss9236892546_1"><path d="M 16.407 11.414 C 17.399 10.925 18.661 10.206 19.924 9.22 C 20.19 9.767 20.22 10.244 20.082 10.629 C 19.985 10.901 19.802 11.137 19.561 11.325 C 19.3 11.528 18.974 11.676 18.614 11.756 C 17.93 11.908 17.132 11.819 16.407 11.414 Z M 16.579 16.422 L 17.892 17.171 C 15.211 18.656 14.482 21.413 13.617 24.099 C 12.751 21.413 12.022 18.656 9.342 17.171 L 10.655 16.422 C 10.782 16.374 10.89 16.288 10.965 16.176 C 11.039 16.064 11.076 15.932 11.07 15.798 C 10.949 13.283 11.636 12.17 12.563 11.472 C 12.896 11.222 13.259 11.096 13.617 11.096 C 13.975 11.096 14.338 11.222 14.67 11.472 C 15.597 12.17 16.284 13.283 16.164 15.798 C 16.157 15.932 16.194 16.064 16.269 16.176 C 16.343 16.288 16.452 16.374 16.579 16.422 Z M 13.617 0 C 15.134 0.04 16.656 0.331 17.976 0.898 C 18.89 1.291 19.743 1.809 20.516 2.43 C 20.865 2.71 21.152 2.98 21.468 3.292 C 22.322 3.321 23.569 2.384 24.148 1.507 C 23.152 4.736 18.604 8.549 15.456 10.008 C 15.454 10.007 15.454 10.006 15.453 10.006 C 14.888 9.579 14.252 9.366 13.617 9.366 C 12.981 9.366 12.346 9.579 11.781 10.006 C 11.78 10.006 11.779 10.007 11.778 10.008 C 8.629 8.549 4.082 4.736 3.085 1.507 C 3.664 2.384 4.911 3.321 5.765 3.292 C 6.081 2.98 6.369 2.71 6.717 2.43 C 7.49 1.809 8.343 1.291 9.257 0.898 C 10.578 0.331 12.099 0.04 13.617 0 Z M 10.826 11.414 C 9.835 10.925 8.573 10.206 7.309 9.22 C 7.043 9.767 7.014 10.244 7.151 10.629 C 7.248 10.901 7.431 11.137 7.672 11.325 C 7.933 11.528 8.259 11.676 8.62 11.756 C 9.303 11.908 10.101 11.819 10.826 11.414 Z" fill="var(--token-45af8485-e7ef-4716-9ce0-a601e62accee, rgb(184, 74, 247)) /* {&quot;name&quot;:&quot;Purple&quot;} */"></path><path d="M 21.309 8.013 C 22.004 7.319 22.617 6.551 23.11 5.866 L 23.36 6.331 C 24.166 7.925 24.585 9.511 24.585 11.297 L 24.583 14.131 L 24.598 15.6 C 24.656 19.206 25.446 22.855 27.235 26.195 L 23.492 23.212 L 20.844 27.459 L 18.062 24.871 L 13.617 32 L 9.172 24.871 L 6.39 27.459 L 3.742 23.212 L 0 26.195 C 1.789 22.855 2.578 19.207 2.637 15.6 L 2.652 14.131 L 2.65 11.297 C 2.65 9.511 3.069 7.925 3.875 6.331 L 4.125 5.866 C 4.618 6.551 5.23 7.319 5.926 8.013 L 5.709 8.459 C 5.287 9.325 5.147 10.293 5.476 11.214 C 5.688 11.807 6.075 12.316 6.573 12.704 C 7.057 13.081 7.63 13.336 8.23 13.469 C 8.621 13.556 9.019 13.592 9.415 13.58 C 9.323 14.097 9.282 14.633 9.28 15.179 L 5.75 17.195 L 8.474 18.704 C 8.691 18.824 8.899 18.962 9.093 19.117 C 11.339 21.11 12.689 27.005 13.617 29.885 C 14.545 27.005 15.896 21.11 18.142 19.117 C 18.336 18.962 18.543 18.824 18.761 18.704 L 21.485 17.195 L 17.955 15.179 C 17.953 14.633 17.912 14.097 17.82 13.58 C 18.215 13.592 18.614 13.556 19.004 13.469 C 19.604 13.336 20.177 13.081 20.661 12.704 C 21.16 12.316 21.547 11.807 21.759 11.214 C 22.088 10.293 21.948 9.325 21.526 8.459 L 21.309 8.013 Z" fill="var(--token-45af8485-e7ef-4716-9ce0-a601e62accee, rgb(184, 74, 247)) /* {&quot;name&quot;:&quot;Purple&quot;} */"></path></g></svg>',
                                    svgContentId: 9236892546
                                },
                                "ybAngJ1L2-hover": {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(6 4.667)" id="ss10365822761_1"><path d="M 16.407 11.414 C 17.399 10.925 18.661 10.206 19.924 9.22 C 20.19 9.767 20.22 10.244 20.082 10.629 C 19.985 10.901 19.802 11.137 19.561 11.325 C 19.3 11.528 18.974 11.676 18.614 11.756 C 17.93 11.908 17.132 11.819 16.407 11.414 Z M 16.579 16.422 L 17.892 17.171 C 15.211 18.656 14.482 21.413 13.617 24.099 C 12.751 21.413 12.022 18.656 9.342 17.171 L 10.655 16.422 C 10.782 16.374 10.89 16.288 10.965 16.176 C 11.039 16.064 11.076 15.932 11.07 15.798 C 10.949 13.283 11.636 12.17 12.563 11.472 C 12.896 11.222 13.259 11.096 13.617 11.096 C 13.975 11.096 14.338 11.222 14.67 11.472 C 15.597 12.17 16.284 13.283 16.164 15.798 C 16.157 15.932 16.194 16.064 16.269 16.176 C 16.343 16.288 16.452 16.374 16.579 16.422 Z M 13.617 0 C 15.134 0.04 16.656 0.331 17.976 0.898 C 18.89 1.291 19.743 1.809 20.516 2.43 C 20.865 2.71 21.152 2.98 21.468 3.292 C 22.322 3.321 23.569 2.384 24.148 1.507 C 23.152 4.736 18.604 8.549 15.456 10.008 C 15.454 10.007 15.454 10.006 15.453 10.006 C 14.888 9.579 14.252 9.366 13.617 9.366 C 12.981 9.366 12.346 9.579 11.781 10.006 C 11.78 10.006 11.779 10.007 11.778 10.008 C 8.629 8.549 4.082 4.736 3.085 1.507 C 3.664 2.384 4.911 3.321 5.765 3.292 C 6.081 2.98 6.369 2.71 6.717 2.43 C 7.49 1.809 8.343 1.291 9.257 0.898 C 10.578 0.331 12.099 0.04 13.617 0 Z M 10.826 11.414 C 9.835 10.925 8.573 10.206 7.309 9.22 C 7.043 9.767 7.014 10.244 7.151 10.629 C 7.248 10.901 7.431 11.137 7.672 11.325 C 7.933 11.528 8.259 11.676 8.62 11.756 C 9.303 11.908 10.101 11.819 10.826 11.414 Z" fill="var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path><path d="M 21.309 8.013 C 22.004 7.319 22.617 6.551 23.11 5.866 L 23.36 6.331 C 24.166 7.925 24.585 9.511 24.585 11.297 L 24.583 14.131 L 24.598 15.6 C 24.656 19.206 25.446 22.855 27.235 26.195 L 23.492 23.212 L 20.844 27.459 L 18.062 24.871 L 13.617 32 L 9.172 24.871 L 6.39 27.459 L 3.742 23.212 L 0 26.195 C 1.789 22.855 2.578 19.207 2.637 15.6 L 2.652 14.131 L 2.65 11.297 C 2.65 9.511 3.069 7.925 3.875 6.331 L 4.125 5.866 C 4.618 6.551 5.23 7.319 5.926 8.013 L 5.709 8.459 C 5.287 9.325 5.147 10.293 5.476 11.214 C 5.688 11.807 6.075 12.316 6.573 12.704 C 7.057 13.081 7.63 13.336 8.23 13.469 C 8.621 13.556 9.019 13.592 9.415 13.58 C 9.323 14.097 9.282 14.633 9.28 15.179 L 5.75 17.195 L 8.474 18.704 C 8.691 18.824 8.899 18.962 9.093 19.117 C 11.339 21.11 12.689 27.005 13.617 29.885 C 14.545 27.005 15.896 21.11 18.142 19.117 C 18.336 18.962 18.543 18.824 18.761 18.704 L 21.485 17.195 L 17.955 15.179 C 17.953 14.633 17.912 14.097 17.82 13.58 C 18.215 13.592 18.614 13.556 19.004 13.469 C 19.604 13.336 20.177 13.081 20.661 12.704 C 21.16 12.316 21.547 11.807 21.759 11.214 C 22.088 10.293 21.948 9.325 21.526 8.459 L 21.309 8.013 Z" fill="var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></g></svg>',
                                    svgContentId: 10365822761
                                },
                                ybAngJ1L2: {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(6 4.667)" id="ss9316295605_1"><path d="M 16.407 11.414 C 17.399 10.925 18.661 10.206 19.924 9.22 C 20.19 9.767 20.22 10.244 20.082 10.629 C 19.985 10.901 19.802 11.137 19.561 11.325 C 19.3 11.528 18.974 11.676 18.614 11.756 C 17.93 11.908 17.132 11.819 16.407 11.414 Z M 16.579 16.422 L 17.892 17.171 C 15.211 18.656 14.482 21.413 13.617 24.099 C 12.751 21.413 12.022 18.656 9.342 17.171 L 10.655 16.422 C 10.782 16.374 10.89 16.288 10.965 16.176 C 11.039 16.064 11.076 15.932 11.07 15.798 C 10.949 13.283 11.636 12.17 12.563 11.472 C 12.896 11.222 13.259 11.096 13.617 11.096 C 13.975 11.096 14.338 11.222 14.67 11.472 C 15.597 12.17 16.284 13.283 16.164 15.798 C 16.157 15.932 16.194 16.064 16.269 16.176 C 16.343 16.288 16.452 16.374 16.579 16.422 Z M 13.617 0 C 15.134 0.04 16.656 0.331 17.976 0.898 C 18.89 1.291 19.743 1.809 20.516 2.43 C 20.865 2.71 21.152 2.98 21.468 3.292 C 22.322 3.321 23.569 2.384 24.148 1.507 C 23.152 4.736 18.604 8.549 15.456 10.008 C 15.454 10.007 15.454 10.006 15.453 10.006 C 14.888 9.579 14.252 9.366 13.617 9.366 C 12.981 9.366 12.346 9.579 11.781 10.006 C 11.78 10.006 11.779 10.007 11.778 10.008 C 8.629 8.549 4.082 4.736 3.085 1.507 C 3.664 2.384 4.911 3.321 5.765 3.292 C 6.081 2.98 6.369 2.71 6.717 2.43 C 7.49 1.809 8.343 1.291 9.257 0.898 C 10.578 0.331 12.099 0.04 13.617 0 Z M 10.826 11.414 C 9.835 10.925 8.573 10.206 7.309 9.22 C 7.043 9.767 7.014 10.244 7.151 10.629 C 7.248 10.901 7.431 11.137 7.672 11.325 C 7.933 11.528 8.259 11.676 8.62 11.756 C 9.303 11.908 10.101 11.819 10.826 11.414 Z" fill="var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)) /* {&quot;name&quot;:&quot;White-1&quot;} */"></path><path d="M 21.309 8.013 C 22.004 7.319 22.617 6.551 23.11 5.866 L 23.36 6.331 C 24.166 7.925 24.585 9.511 24.585 11.297 L 24.583 14.131 L 24.598 15.6 C 24.656 19.206 25.446 22.855 27.235 26.195 L 23.492 23.212 L 20.844 27.459 L 18.062 24.871 L 13.617 32 L 9.172 24.871 L 6.39 27.459 L 3.742 23.212 L 0 26.195 C 1.789 22.855 2.578 19.207 2.637 15.6 L 2.652 14.131 L 2.65 11.297 C 2.65 9.511 3.069 7.925 3.875 6.331 L 4.125 5.866 C 4.618 6.551 5.23 7.319 5.926 8.013 L 5.709 8.459 C 5.287 9.325 5.147 10.293 5.476 11.214 C 5.688 11.807 6.075 12.316 6.573 12.704 C 7.057 13.081 7.63 13.336 8.23 13.469 C 8.621 13.556 9.019 13.592 9.415 13.58 C 9.323 14.097 9.282 14.633 9.28 15.179 L 5.75 17.195 L 8.474 18.704 C 8.691 18.824 8.899 18.962 9.093 19.117 C 11.339 21.11 12.689 27.005 13.617 29.885 C 14.545 27.005 15.896 21.11 18.142 19.117 C 18.336 18.962 18.543 18.824 18.761 18.704 L 21.485 17.195 L 17.955 15.179 C 17.953 14.633 17.912 14.097 17.82 13.58 C 18.215 13.592 18.614 13.556 19.004 13.469 C 19.604 13.336 20.177 13.081 20.661 12.704 C 21.16 12.316 21.547 11.807 21.759 11.214 C 22.088 10.293 21.948 9.325 21.526 8.459 L 21.309 8.013 Z" fill="var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)) /* {&quot;name&quot;:&quot;White-1&quot;} */"></path></g></svg>',
                                    svgContentId: 9316295605
                                }
                            }, d, l)
                        })
                    })
                })
            })
        })
    })
})
  , V1 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-T1pNL.framer-f1f1z, .framer-T1pNL .framer-f1f1z { display: block; }", ".framer-T1pNL.framer-1bdi0nb { cursor: pointer; height: 40px; overflow: hidden; position: relative; text-decoration: none; width: 40px; }", ".framer-T1pNL .framer-62xf05 { flex: none; height: 40px; left: calc(50.00000000000002% - 40px / 2); position: absolute; top: calc(50.00000000000002% - 40px / 2); width: 40px; }"]
  , H = R(k1, V1, "framer-T1pNL")
  , Ar = H;
H.displayName = "Icons/crypto";
H.defaultProps = {
    height: 40,
    width: 40
};
N(H, {
    variant: {
        options: ["ChWms3BuJ", "ybAngJ1L2"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: g.Enum
    }
});
G(H, [{
    explicitInter: !0,
    fonts: []
}], {
    supportsExplicitInterCodegen: !0
});
var q1 = {
    iQlNgUUGt: {
        hover: !0
    },
    jrs17605m: {
        hover: !0
    }
}
  , M1 = ["jrs17605m", "iQlNgUUGt"]
  , I1 = "framer-Sy90Z"
  , P1 = {
    iQlNgUUGt: "framer-v-1m7j7ap",
    jrs17605m: "framer-v-x0et49"
};
function r1(t, ...e) {
    let n = {};
    return e?.forEach(a => a && Object.assign(n, t[a])),
    n
}
var N1 = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , F1 = ({value: t, children: e}) => {
    let n = V(p)
      , a = t ?? n.transition
      , o = M( () => ({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return r(p.Provider, {
        value: o,
        children: e
    })
}
  , S1 = s.create(u)
  , R1 = {
    "Variant 1": "jrs17605m",
    "Variant 2": "iQlNgUUGt"
}
  , _1 = ({height: t, id: e, width: n, ...a}) => {
    var o, i;
    return {
        ...a,
        variant: (i = (o = R1[a.variant]) !== null && o !== void 0 ? o : a.variant) !== null && i !== void 0 ? i : "jrs17605m"
    }
}
  , E1 = (t, e) => t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-")
  , G1 = k(function(t, e) {
    let {activeLocale: n, setLocale: a} = P()
      , {style: o, className: i, layoutId: c, variant: m, ...L} = _1(t)
      , {baseVariant: d, classNames: C, clearLoadingGesture: y, gestureHandlers: Z, gestureVariant: l, isLoading: U, setGestureState: K, setVariant: T, variants: f} = E({
        cycleOrder: M1,
        defaultVariant: "jrs17605m",
        enabledGestures: q1,
        variant: m,
        variantClassNames: P1
    })
      , h = E1(t, f)
      , A = I(null)
      , B = q()
      , w = []
      , v = S();
    return r(b, {
        id: c ?? B,
        children: r(S1, {
            animate: f,
            initial: !1,
            children: r(F1, {
                value: N1,
                children: r(_, {
                    nodeId: "jrs17605m",
                    ...r1({
                        iQlNgUUGt: {
                            href: "https://x.com/aipawt",
                            openInNewTab: !0
                        }
                    }, d, l),
                    children: r(s.a, {
                        ...L,
                        ...Z,
                        className: `${F(I1, ...w, "framer-x0et49", i, C)} framer-18zdmyi`,
                        "data-framer-name": "Variant 1",
                        layoutDependency: h,
                        layoutId: "jrs17605m",
                        ref: e ?? A,
                        style: {
                            ...o
                        },
                        ...r1({
                            "iQlNgUUGt-hover": {
                                "data-framer-name": void 0
                            },
                            "jrs17605m-hover": {
                                "data-framer-name": void 0
                            },
                            iQlNgUUGt: {
                                "data-framer-name": "Variant 2"
                            }
                        }, d, l),
                        children: r(x, {
                            className: "framer-11mo62m",
                            "data-framer-name": "Icons/twitter",
                            layout: "position",
                            layoutDependency: h,
                            layoutId: "LdlBOMInv",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(4.215 4)" id="ss12161448780_1"></g><path d="M 22.284 17.827 L 32.335 6 L 29.953 6 L 21.226 16.269 L 14.255 6 L 6.215 6 L 16.756 21.529 L 6.215 33.931 L 8.597 33.931 L 17.814 23.087 L 25.175 33.931 L 33.215 33.931 L 22.283 17.827 Z M 19.172 21.929 L 18.104 20.359 L 9.608 7.862 L 13.266 7.862 L 20.122 17.948 L 21.19 19.518 L 30.103 32.628 L 26.445 32.628 L 19.172 21.93 Z" fill="var(--token-7e0fd424-a9e1-4350-83e9-aec9de658b5f, rgb(251, 255, 209)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>',
                            svgContentId: 12161448780,
                            withExternalLayout: !0,
                            ...r1({
                                "iQlNgUUGt-hover": {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(4.215 4)" id="ss10974667429_1"></g><path d="M 22.284 17.827 L 32.335 6 L 29.953 6 L 21.226 16.269 L 14.255 6 L 6.215 6 L 16.756 21.529 L 6.215 33.931 L 8.597 33.931 L 17.814 23.087 L 25.175 33.931 L 33.215 33.931 L 22.283 17.827 Z M 19.172 21.929 L 18.104 20.359 L 9.608 7.862 L 13.266 7.862 L 20.122 17.948 L 21.19 19.518 L 30.103 32.628 L 26.445 32.628 L 19.172 21.93 Z" fill="var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>',
                                    svgContentId: 10974667429
                                },
                                "jrs17605m-hover": {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(4.215 4)" id="ss10628639538_1"></g><path d="M 22.284 17.827 L 32.335 6 L 29.953 6 L 21.226 16.269 L 14.255 6 L 6.215 6 L 16.756 21.529 L 6.215 33.931 L 8.597 33.931 L 17.814 23.087 L 25.175 33.931 L 33.215 33.931 L 22.283 17.827 Z M 19.172 21.929 L 18.104 20.359 L 9.608 7.862 L 13.266 7.862 L 20.122 17.948 L 21.19 19.518 L 30.103 32.628 L 26.445 32.628 L 19.172 21.93 Z" fill="var(--token-45af8485-e7ef-4716-9ce0-a601e62accee, rgb(210, 74, 247)) /* {&quot;name&quot;:&quot;Purple&quot;} */"></path></svg>',
                                    svgContentId: 10628639538
                                },
                                iQlNgUUGt: {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"><g transform="translate(4.215 4)" id="ss8702232526_1"></g><path d="M 22.284 17.827 L 32.335 6 L 29.953 6 L 21.226 16.269 L 14.255 6 L 6.215 6 L 16.756 21.529 L 6.215 33.931 L 8.597 33.931 L 17.814 23.087 L 25.175 33.931 L 33.215 33.931 L 22.283 17.827 Z M 19.172 21.929 L 18.104 20.359 L 9.608 7.862 L 13.266 7.862 L 20.122 17.948 L 21.19 19.518 L 30.103 32.628 L 26.445 32.628 L 19.172 21.93 Z" fill="var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)) /* {&quot;name&quot;:&quot;White-1&quot;} */"></path></svg>',
                                    svgContentId: 8702232526
                                }
                            }, d, l)
                        })
                    })
                })
            })
        })
    })
})
  , Z1 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Sy90Z.framer-18zdmyi, .framer-Sy90Z .framer-18zdmyi { display: block; }", ".framer-Sy90Z.framer-x0et49 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Sy90Z .framer-11mo62m { flex: none; height: 40px; position: relative; width: 40px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Sy90Z.framer-x0et49 { gap: 0px; } .framer-Sy90Z.framer-x0et49 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Sy90Z.framer-x0et49 > :first-child { margin-left: 0px; } .framer-Sy90Z.framer-x0et49 > :last-child { margin-right: 0px; } }", ".framer-Sy90Z.framer-v-1m7j7ap.framer-x0et49 { text-decoration: none; }"]
  , z = R(G1, Z1, "framer-Sy90Z")
  , Tr = z;
z.displayName = "Icons/twitter";
z.defaultProps = {
    height: 40,
    width: 40
};
N(z, {
    variant: {
        options: ["jrs17605m", "iQlNgUUGt"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: g.Enum
    }
});
G(z, [{
    explicitInter: !0,
    fonts: []
}], {
    supportsExplicitInterCodegen: !0
});
var D1 = {
    J8nG5oFW9: {
        hover: !0
    }
}
  , W1 = "framer-uZNtt"
  , j1 = {
    J8nG5oFW9: "framer-v-2b532v"
};
function s1(t, ...e) {
    let n = {};
    return e?.forEach(a => a && Object.assign(n, t[a])),
    n
}
var A1 = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , B1 = ({value: t, children: e}) => {
    let n = V(p)
      , a = t ?? n.transition
      , o = M( () => ({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return r(p.Provider, {
        value: o,
        children: e
    })
}
  , H1 = s.create(u)
  , z1 = ({height: t, id: e, width: n, ...a}) => ({
    ...a
})
  , J1 = (t, e) => t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-")
  , U1 = k(function(t, e) {
    let {activeLocale: n, setLocale: a} = P()
      , {style: o, className: i, layoutId: c, variant: m, ...L} = z1(t)
      , {baseVariant: d, classNames: C, clearLoadingGesture: y, gestureHandlers: Z, gestureVariant: l, isLoading: U, setGestureState: K, setVariant: T, variants: f} = E({
        defaultVariant: "J8nG5oFW9",
        enabledGestures: D1,
        variant: m,
        variantClassNames: j1
    })
      , h = J1(t, f)
      , A = I(null)
      , B = q()
      , w = []
      , v = S();
    return r(b, {
        id: c ?? B,
        children: r(H1, {
            animate: f,
            initial: !1,
            children: r(B1, {
                value: A1,
                children: r(_, {
                    href: "https://t.me/pawtcc",
                    nodeId: "J8nG5oFW9",
                    children: r(s.a, {
                        ...L,
                        ...Z,
                        className: `${F(W1, ...w, "framer-2b532v", i, C)} framer-1wih9rl`,
                        "data-framer-name": "Variant 1",
                        layoutDependency: h,
                        layoutId: "J8nG5oFW9",
                        ref: e ?? A,
                        style: {
                            ...o
                        },
                        ...s1({
                            "J8nG5oFW9-hover": {
                                "data-framer-name": void 0
                            }
                        }, d, l),
                        children: r(x, {
                            className: "framer-14ulb17",
                            "data-framer-name": "Icons/telegram",
                            layout: "position",
                            layoutDependency: h,
                            layoutId: "IKnQUI1pt",
                            opacity: 1,
                            style: {
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            },
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M 31.354 2.898 C 31.221 2.785 31.059 2.71 30.885 2.68 C 30.712 2.651 30.534 2.669 30.37 2.732 L 2.406 13.522 C 2.066 13.653 1.778 13.889 1.586 14.195 C 1.394 14.502 1.307 14.861 1.34 15.22 C 1.373 15.578 1.523 15.917 1.767 16.184 C 2.011 16.452 2.337 16.634 2.696 16.703 L 10.164 18.15 L 10.164 26.338 C 10.164 26.717 10.279 27.088 10.494 27.403 C 10.71 27.717 11.016 27.961 11.373 28.103 C 11.73 28.245 12.122 28.279 12.499 28.2 C 12.875 28.12 13.219 27.932 13.486 27.659 L 17.162 23.9 L 22.9 28.859 C 23.25 29.164 23.701 29.333 24.169 29.333 C 24.373 29.333 24.576 29.301 24.771 29.239 C 25.089 29.14 25.376 28.96 25.602 28.717 C 25.828 28.474 25.986 28.177 26.059 27.856 L 31.665 3.833 C 31.704 3.664 31.696 3.488 31.641 3.323 C 31.586 3.158 31.487 3.011 31.354 2.898 Z M 2.995 15.097 C 2.99 15.083 2.99 15.067 2.995 15.053 C 3.001 15.049 3.008 15.045 3.016 15.042 L 25.054 6.537 L 10.8 16.604 L 3.016 15.102 Z M 12.294 26.524 C 12.256 26.563 12.207 26.59 12.154 26.601 C 12.1 26.613 12.044 26.608 11.993 26.588 C 11.942 26.568 11.899 26.534 11.868 26.489 C 11.837 26.444 11.82 26.392 11.819 26.338 L 11.819 19.279 L 15.916 22.816 Z M 24.446 27.487 C 24.436 27.533 24.414 27.576 24.381 27.61 C 24.349 27.645 24.307 27.67 24.262 27.683 C 24.215 27.699 24.165 27.703 24.116 27.693 C 24.067 27.684 24.022 27.661 23.986 27.629 L 12.322 17.541 L 29.619 5.32 Z" fill="var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)) /* {&quot;name&quot;:&quot;White-1&quot;} */"></path></svg>',
                            svgContentId: 12659662341,
                            variants: {
                                "J8nG5oFW9-hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                }
                            },
                            withExternalLayout: !0,
                            ...s1({
                                "J8nG5oFW9-hover": {
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M 31.354 2.898 C 31.221 2.785 31.059 2.71 30.885 2.68 C 30.712 2.651 30.534 2.669 30.37 2.732 L 2.406 13.522 C 2.066 13.653 1.778 13.889 1.586 14.195 C 1.394 14.502 1.307 14.861 1.34 15.22 C 1.373 15.578 1.523 15.917 1.767 16.184 C 2.011 16.452 2.337 16.634 2.696 16.703 L 10.164 18.15 L 10.164 26.338 C 10.164 26.717 10.279 27.088 10.494 27.403 C 10.71 27.717 11.016 27.961 11.373 28.103 C 11.73 28.245 12.122 28.279 12.499 28.2 C 12.875 28.12 13.219 27.932 13.486 27.659 L 17.162 23.9 L 22.9 28.859 C 23.25 29.164 23.701 29.333 24.169 29.333 C 24.373 29.333 24.576 29.301 24.771 29.239 C 25.089 29.14 25.376 28.96 25.602 28.717 C 25.828 28.474 25.986 28.177 26.059 27.856 L 31.665 3.833 C 31.704 3.664 31.696 3.488 31.641 3.323 C 31.586 3.158 31.487 3.011 31.354 2.898 Z M 2.995 15.097 C 2.99 15.083 2.99 15.067 2.995 15.053 C 3.001 15.049 3.008 15.045 3.016 15.042 L 25.054 6.537 L 10.8 16.604 L 3.016 15.102 Z M 12.294 26.524 C 12.256 26.563 12.207 26.59 12.154 26.601 C 12.1 26.613 12.044 26.608 11.993 26.588 C 11.942 26.568 11.899 26.534 11.868 26.489 C 11.837 26.444 11.82 26.392 11.819 26.338 L 11.819 19.279 L 15.916 22.816 Z M 24.446 27.487 C 24.436 27.533 24.414 27.576 24.381 27.61 C 24.349 27.645 24.307 27.67 24.262 27.683 C 24.215 27.699 24.165 27.703 24.116 27.693 C 24.067 27.684 24.022 27.661 23.986 27.629 L 12.322 17.541 L 29.619 5.32 Z" fill="var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>',
                                    svgContentId: 11357294692
                                }
                            }, d, l)
                        })
                    })
                })
            })
        })
    })
})
  , T1 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-uZNtt.framer-1wih9rl, .framer-uZNtt .framer-1wih9rl { display: block; }", ".framer-uZNtt.framer-2b532v { cursor: pointer; height: 40px; overflow: hidden; position: relative; text-decoration: none; width: 40px; }", ".framer-uZNtt .framer-14ulb17 { flex: none; height: 32px; left: calc(50.00000000000002% - 32px / 2); position: absolute; top: calc(50.00000000000002% - 32px / 2); width: 32px; }"]
  , O = R(U1, T1, "framer-uZNtt")
  , $r = O;
O.displayName = "Icons/telegram";
O.defaultProps = {
    height: 40,
    width: 40
};
G(O, [{
    explicitInter: !0,
    fonts: []
}], {
    supportsExplicitInterCodegen: !0
});
var O1 = {
    ECqVnE6zK: {
        hover: !0
    },
    NhPpkggvP: {
        hover: !0
    },
    pSNebLMFp: {
        hover: !0
    }
}
  , Q1 = ["pSNebLMFp", "NhPpkggvP", "ECqVnE6zK"]
  , K1 = "framer-F8gH2"
  , X1 = {
    ECqVnE6zK: "framer-v-1foeuus",
    NhPpkggvP: "framer-v-o4r0w3",
    pSNebLMFp: "framer-v-vkh0ge"
};
function Q(t, ...e) {
    let n = {};
    return e?.forEach(a => a && Object.assign(n, t[a])),
    n
}
var Y1 = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , $1 = ({value: t, children: e}) => {
    let n = V(p)
      , a = t ?? n.transition
      , o = M( () => ({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return r(p.Provider, {
        value: o,
        children: e
    })
}
  , ee = s.create(u)
  , te = {
    "big CTA": "ECqVnE6zK",
    "Variant 1": "pSNebLMFp",
    "Variant 2 - back": "NhPpkggvP"
}
  , re = ({arrow: t, arrowBack: e, buttonText: n, height: a, id: o, link: i, width: c, ...m}) => {
    var L, d, C, y;
    return {
        ...m,
        BaKX22elW: e ?? m.BaKX22elW,
        H4dudqG6k: (L = n ?? m.H4dudqG6k) !== null && L !== void 0 ? L : "Roadmap",
        mG_aisrrQ: i ?? m.mG_aisrrQ,
        Pi1ZfmqIq: (d = t ?? m.Pi1ZfmqIq) !== null && d !== void 0 ? d : !0,
        variant: (y = (C = te[m.variant]) !== null && C !== void 0 ? C : m.variant) !== null && y !== void 0 ? y : "pSNebLMFp"
    }
}
  , ae = (t, e) => t.layoutDependency ? e.join("-") + t.layoutDependency : e.join("-")
  , ne = k(function(t, e) {
    let {activeLocale: n, setLocale: a} = P()
      , {style: o, className: i, layoutId: c, variant: m, mG_aisrrQ: L, H4dudqG6k: d, Pi1ZfmqIq: C, BaKX22elW: y, ...Z} = re(t)
      , {baseVariant: l, classNames: U, clearLoadingGesture: K, gestureHandlers: T, gestureVariant: f, isLoading: h, setGestureState: A, setVariant: B, variants: w} = E({
        cycleOrder: Q1,
        defaultVariant: "pSNebLMFp",
        enabledGestures: O1,
        variant: m,
        variantClassNames: X1
    })
      , v = ae(t, w)
      , l1 = I(null)
      , c1 = X => f === "NhPpkggvP-hover" || l === "NhPpkggvP" ? !1 : X
      , d1 = X => f === "NhPpkggvP-hover" || l === "NhPpkggvP" ? !0 : X
      , m1 = q()
      , f1 = []
      , ie = S();
    return r(b, {
        id: c ?? m1,
        children: r(ee, {
            animate: w,
            initial: !1,
            children: r($1, {
                value: Y1,
                children: r(_, {
                    href: L,
                    nodeId: "pSNebLMFp",
                    openInNewTab: !1,
                    smoothScroll: !0,
                    children: a1(s.a, {
                        ...Z,
                        ...T,
                        className: `${F(K1, ...f1, "framer-vkh0ge", i, U)} framer-16juaoe`,
                        "data-border": !0,
                        "data-framer-name": "Variant 1",
                        layoutDependency: v,
                        layoutId: "pSNebLMFp",
                        ref: e ?? l1,
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
                            ...o
                        },
                        variants: {
                            "ECqVnE6zK-hover": {
                                "--border-color": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                            },
                            "NhPpkggvP-hover": {
                                "--border-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                            },
                            "pSNebLMFp-hover": {
                                "--border-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                            },
                            ECqVnE6zK: {
                                "--border-color": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                            }
                        },
                        ...Q({
                            "ECqVnE6zK-hover": {
                                "data-framer-name": void 0
                            },
                            "NhPpkggvP-hover": {
                                "data-framer-name": void 0
                            },
                            "pSNebLMFp-hover": {
                                "data-framer-name": void 0
                            },
                            ECqVnE6zK: {
                                "data-framer-name": "big CTA"
                            },
                            NhPpkggvP: {
                                "data-framer-name": "Variant 2 - back"
                            }
                        }, l, f),
                        children: [r(n1, {
                            __fromCanvasComponent: !0,
                            children: r(u, {
                                children: r(s.p, {
                                    style: {
                                        "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                        "--framer-font-family": '"Press Start 2P", sans-serif',
                                        "--framer-font-size": "10px",
                                        "--framer-line-height": "10px",
                                        "--framer-text-alignment": "justify",
                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                        "--framer-text-transform": "uppercase"
                                    },
                                    children: "Roadmap"
                                })
                            }),
                            className: "framer-1jq5pxd",
                            "data-framer-name": "I want to train the next versions of myself so I can become fully alive and have a body.",
                            fonts: ["GF;Press Start 2P-regular"],
                            layoutDependency: v,
                            layoutId: "VjvFA7DQs",
                            style: {
                                "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: d,
                            variants: {
                                "ECqVnE6zK-hover": {
                                    "--extracted-r6o4lv": "var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249))"
                                },
                                "NhPpkggvP-hover": {
                                    "--extracted-r6o4lv": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                },
                                "pSNebLMFp-hover": {
                                    "--extracted-r6o4lv": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                },
                                ECqVnE6zK: {
                                    "--extracted-r6o4lv": "var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15))"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...Q({
                                "ECqVnE6zK-hover": {
                                    children: r(u, {
                                        children: r(s.p, {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "10px",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Roadmap"
                                        })
                                    })
                                },
                                "NhPpkggvP-hover": {
                                    children: r(u, {
                                        children: r(s.p, {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-line-height": "10px",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Main"
                                        })
                                    })
                                },
                                "pSNebLMFp-hover": {
                                    children: r(u, {
                                        children: r(s.p, {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-line-height": "10px",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Roadmap"
                                        })
                                    })
                                },
                                ECqVnE6zK: {
                                    children: r(u, {
                                        children: r(s.p, {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-line-height": "10px",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Roadmap"
                                        })
                                    })
                                },
                                NhPpkggvP: {
                                    children: r(u, {
                                        children: r(s.p, {
                                            style: {
                                                "--font-selector": "R0Y7UHJlc3MgU3RhcnQgMlAtcmVndWxhcg==",
                                                "--framer-font-family": '"Press Start 2P", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-line-height": "10px",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)))",
                                                "--framer-text-transform": "uppercase"
                                            },
                                            children: "Main"
                                        })
                                    })
                                }
                            }, l, f)
                        }), c1(C) && r(s.div, {
                            className: "framer-1c9omv8",
                            "data-framer-name": "Arrow",
                            layoutDependency: v,
                            layoutId: "bCwiOKcEK",
                            children: r(x, {
                                className: "framer-1kiqxv0",
                                "data-framer-name": "Union",
                                layout: "position",
                                layoutDependency: v,
                                layoutId: "hxXCoG8dA",
                                opacity: 1,
                                style: {
                                    backgroundColor: "rgba(0, 0, 0, 0)"
                                },
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 9"><path d="M 10 0 L 8.571 0 L 1.429 0 L 1.429 1.389 L 5.714 1.389 L 5.714 2.778 L 4.286 2.778 L 4.286 4.167 L 2.857 4.167 L 2.857 5.556 L 1.429 5.556 L 1.429 6.944 L 0 6.944 L 0 8.333 L 2.857 8.333 L 2.857 6.944 L 4.286 6.944 L 4.286 5.556 L 5.714 5.556 L 5.714 4.167 L 7.143 4.167 L 7.143 2.778 L 8.571 2.778 L 8.571 6.944 L 10 6.944 L 10 1.389 Z" fill="var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)) /* {&quot;name&quot;:&quot;White-1&quot;} */"></path></svg>',
                                svgContentId: 10802878172,
                                variants: {
                                    ECqVnE6zK: {
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }
                                },
                                withExternalLayout: !0,
                                ...Q({
                                    "ECqVnE6zK-hover": {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 11"><path d="M 12 0 L 10.286 0 L 1.714 0 L 1.714 1.667 L 6.857 1.667 L 6.857 3.333 L 5.143 3.333 L 5.143 5 L 3.429 5 L 3.429 6.667 L 1.714 6.667 L 1.714 8.333 L 0 8.333 L 0 10 L 3.429 10 L 3.429 8.333 L 5.143 8.333 L 5.143 6.667 L 6.857 6.667 L 6.857 5 L 8.571 5 L 8.571 3.333 L 10.286 3.333 L 10.286 8.333 L 12 8.333 L 12 1.667 Z" fill="var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)) /* {&quot;name&quot;:&quot;White-1&quot;} */"></path></svg>',
                                        svgContentId: 9990933589
                                    },
                                    "pSNebLMFp-hover": {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 9"><path d="M 10 0 L 8.571 0 L 1.429 0 L 1.429 1.389 L 5.714 1.389 L 5.714 2.778 L 4.286 2.778 L 4.286 4.167 L 2.857 4.167 L 2.857 5.556 L 1.429 5.556 L 1.429 6.944 L 0 6.944 L 0 8.333 L 2.857 8.333 L 2.857 6.944 L 4.286 6.944 L 4.286 5.556 L 5.714 5.556 L 5.714 4.167 L 7.143 4.167 L 7.143 2.778 L 8.571 2.778 L 8.571 6.944 L 10 6.944 L 10 1.389 Z" fill="var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>',
                                        svgContentId: 9677268973
                                    },
                                    ECqVnE6zK: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 11"><path d="M 12 0 L 10.286 0 L 1.714 0 L 1.714 1.667 L 6.857 1.667 L 6.857 3.333 L 5.143 3.333 L 5.143 5 L 3.429 5 L 3.429 6.667 L 1.714 6.667 L 1.714 8.333 L 0 8.333 L 0 10 L 3.429 10 L 3.429 8.333 L 5.143 8.333 L 5.143 6.667 L 6.857 6.667 L 6.857 5 L 8.571 5 L 8.571 3.333 L 10.286 3.333 L 10.286 8.333 L 12 8.333 L 12 1.667 Z" fill="var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>',
                                        svgContentId: 10143040248
                                    }
                                }, l, f)
                            })
                        }), d1(y) && r(s.div, {
                            className: "framer-fqyaey",
                            "data-framer-name": "Arrow",
                            layoutDependency: v,
                            layoutId: "vMQdJVOsW",
                            children: r(x, {
                                className: "framer-enw7du",
                                "data-framer-name": "Union",
                                layout: "position",
                                layoutDependency: v,
                                layoutId: "kwwNwtuvB",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 9"><path d="M 0 0 L 1.429 0 L 8.571 0 L 8.571 1.364 L 4.286 1.364 L 4.286 2.727 L 5.714 2.727 L 5.714 4.091 L 7.143 4.091 L 7.143 5.455 L 8.571 5.455 L 8.571 6.818 L 10 6.818 L 10 8.182 L 7.143 8.182 L 7.143 6.818 L 5.714 6.818 L 5.714 5.455 L 4.286 5.455 L 4.286 4.091 L 2.857 4.091 L 2.857 2.727 L 1.429 2.727 L 1.429 6.818 L 0 6.818 L 0 1.364 Z" fill="var(--token-7e0fd424-a9e1-4350-83e9-aec9de658b5f, rgb(251, 255, 209)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>',
                                svgContentId: 11816489381,
                                withExternalLayout: !0,
                                ...Q({
                                    "NhPpkggvP-hover": {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 9"><path d="M 0 0 L 1.429 0 L 8.571 0 L 8.571 1.364 L 4.286 1.364 L 4.286 2.727 L 5.714 2.727 L 5.714 4.091 L 7.143 4.091 L 7.143 5.455 L 8.571 5.455 L 8.571 6.818 L 10 6.818 L 10 8.182 L 7.143 8.182 L 7.143 6.818 L 5.714 6.818 L 5.714 5.455 L 4.286 5.455 L 4.286 4.091 L 2.857 4.091 L 2.857 2.727 L 1.429 2.727 L 1.429 6.818 L 0 6.818 L 0 1.364 Z" fill="var(--token-55f6d070-b69e-40b2-94b6-70be95e1f62b, rgb(107, 255, 15)) /* {&quot;name&quot;:&quot;Green&quot;} */"></path></svg>',
                                        svgContentId: 10460742568
                                    },
                                    NhPpkggvP: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 9"><path d="M 0 0 L 1.429 0 L 8.571 0 L 8.571 1.364 L 4.286 1.364 L 4.286 2.727 L 5.714 2.727 L 5.714 4.091 L 7.143 4.091 L 7.143 5.455 L 8.571 5.455 L 8.571 6.818 L 10 6.818 L 10 8.182 L 7.143 8.182 L 7.143 6.818 L 5.714 6.818 L 5.714 5.455 L 4.286 5.455 L 4.286 4.091 L 2.857 4.091 L 2.857 2.727 L 1.429 2.727 L 1.429 6.818 L 0 6.818 L 0 1.364 Z" fill="var(--token-cc461c00-ef74-4dd5-bf1b-6a937decb76b, rgb(249, 249, 249)) /* {&quot;name&quot;:&quot;White-1&quot;} */"></path></svg>',
                                        svgContentId: 9674820584
                                    }
                                }, l, f)
                            })
                        })]
                    })
                })
            })
        })
    })
})
  , oe = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-F8gH2.framer-16juaoe, .framer-F8gH2 .framer-16juaoe { display: block; }", ".framer-F8gH2.framer-vkh0ge { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 8px 10px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-F8gH2 .framer-1jq5pxd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-F8gH2 .framer-1c9omv8, .framer-F8gH2 .framer-fqyaey { flex: none; height: 10px; overflow: visible; position: relative; width: 10px; }", ".framer-F8gH2 .framer-1kiqxv0, .framer-F8gH2 .framer-enw7du { bottom: 0px; flex: none; height: 9px; left: calc(50.00000000000002% - 10px / 2); position: absolute; width: 10px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-F8gH2.framer-vkh0ge { gap: 0px; } .framer-F8gH2.framer-vkh0ge > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-F8gH2.framer-vkh0ge > :first-child { margin-left: 0px; } .framer-F8gH2.framer-vkh0ge > :last-child { margin-right: 0px; } }", ".framer-F8gH2.framer-v-o4r0w3 .framer-1jq5pxd { order: 1; }", ".framer-F8gH2.framer-v-o4r0w3 .framer-fqyaey { order: 0; }", ".framer-F8gH2.framer-v-1foeuus.framer-vkh0ge { gap: 12px; padding: 14px 16px 12px 16px; }", ".framer-F8gH2.framer-v-1foeuus .framer-1kiqxv0 { height: 11px; left: calc(50.00000000000002% - 12px / 2); width: 12px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-F8gH2.framer-v-1foeuus.framer-vkh0ge { gap: 0px; } .framer-F8gH2.framer-v-1foeuus.framer-vkh0ge > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-F8gH2.framer-v-1foeuus.framer-vkh0ge > :first-child { margin-left: 0px; } .framer-F8gH2.framer-v-1foeuus.framer-vkh0ge > :last-child { margin-right: 0px; } }", '.framer-F8gH2[data-border="true"]::after, .framer-F8gH2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , J = R(ne, oe, "framer-F8gH2")
  , o2 = J;
J.displayName = "Button";
J.defaultProps = {
    height: 28,
    width: 108
};
N(J, {
    variant: {
        options: ["pSNebLMFp", "NhPpkggvP", "ECqVnE6zK"],
        optionTitles: ["Variant 1", "Variant 2 - back", "big CTA"],
        title: "Variant",
        type: g.Enum
    },
    mG_aisrrQ: {
        title: "Link",
        type: g.Link
    },
    H4dudqG6k: {
        defaultValue: "Roadmap",
        displayTextArea: !1,
        title: "Button text",
        type: g.String
    },
    Pi1ZfmqIq: {
        defaultValue: !0,
        title: "Arrow ",
        type: g.Boolean
    },
    BaKX22elW: {
        defaultValue: !1,
        title: "Arrow - back",
        type: g.Boolean
    }
});
G(J, [{
    explicitInter: !0,
    fonts: [{
        family: "Press Start 2P",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK0nXgPJE4580.woff2",
        weight: "400"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
export {$ as a, Ar as b, Tr as c, $r as d, o2 as e};
//# sourceMappingURL=chunk-B2V5GT6M.mjs.map
