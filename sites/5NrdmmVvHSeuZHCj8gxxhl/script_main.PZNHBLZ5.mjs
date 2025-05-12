import {C as k, F, H as E, T as I, W as P, c, e as R, fa as w, qa as S, t as h, u as p, v as i, w as v, x as y, y as _, z as b} from "./chunk-S6IUZFYY.mjs";
import "./chunk-JR5VT52U.mjs";
import {c as t} from "./chunk-RIUMFBNJ.mjs";
var L = "default"in p ? h : p
  , l = {}
  , M = L;
l.createRoot = M.createRoot;
l.hydrateRoot = M.hydrateRoot;
var T = l.createRoot
  , U = l.hydrateRoot;
var u = {
    uZAmJ7glf: {
        elements: {
            I6pi7Mre3: "daige",
            uBuZtjhvA: "inverted",
            w352qzQaI: "bg-container",
            W7wLT0_tV: "container",
            YxzJiHfow: "planet",
            zMg6403W1: "container-1"
        },
        page: i( () => import("./peBdZ05RWpQ8kADcSs10IRcv4ZolbGb25cHhBTCN-C4.P55COFM7.mjs")),
        path: "/"
    },
    a8QBTkm3o: {
        elements: {
            aEUZvJCvm: "bg-container",
            aFmrRXsdG: "container",
            E1UggiPp5: "planet",
            TEdKikjed: "container-1"
        },
        page: i( () => import("./FsK4pBBcoynCPPHiL3C3o-CVwi0ULkZpkbBnm0Sa6s0.44A32RCY.mjs")),
        path: "/roadmap"
    },
    E7hoLWug8: {
        elements: {
            cn1OHdQTw: "container"
        },
        page: i( () => import("./cYg14gO0z0GyKh1U81qdnGHlYPAgGhMfDOCSZhGYfZo.CRPX5YLQ.mjs")),
        path: "/proof"
    }
}
  , z = [{
    code: "en-US",
    id: "default",
    name: "English",
    slug: ""
}];
async function N({routeId: a, pathVariables: o, localeId: r}) {
    await u[a].page.preload();
    let n = c(P, {
        isWebsite: !0,
        routeId: a,
        pathVariables: o,
        routes: u,
        collectionUtils: {},
        framerSiteId: "73b51995ccdc302cc8a2508d47933c6aa2d729432e0a9b96996fe86b096557fb",
        notFoundPage: i( () => import("./SitesNotFoundPage.js@1.1-QARACIIY.mjs")),
        isReducedMotion: void 0,
        localeId: r,
        locales: z,
        preserveQueryParams: void 0
    })
      , s = c(I, {
        children: n,
        value: {
            enableAsyncURLUpdates: !0,
            replaceNestedLinks: !0,
            useGranularSuspense: !0,
            wrapUpdatesInTransitions: !1
        }
    });
    return c(v, {
        children: s,
        value: {
            routes: {}
        }
    })
}
var H = typeof document < "u";
if (H) {
    t.__framer_importFromPackage = (o, r) => () => c(F, {
        error: 'Package component not supported: "' + r + '" in "' + o + '"'
    }),
    t.process = {
        ...t.process,
        env: {
            ...t.process ? t.process.env : void 0,
            NODE_ENV: "production"
        }
    },
    t.__framer_events = t.__framer_events || [],
    E();
    let a = document.getElementById("main");
    "framerHydrateV2"in a.dataset ? x(!0, a) : x(!1, a)
}
function V() {
    H && t.__framer_events.push(arguments)
}
async function x(a, o) {
    try {
        let g = function(e, O) {
            let m = O?.componentStack;
            console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.", e, m),
            !(Math.random() > .01) && V("published_site_load_recoverable_error", {
                message: String(e),
                componentStack: m,
                stack: m ? void 0 : e instanceof Error && typeof e.stack == "string" ? e.stack : null
            })
        }, r, n, s, d;
        if (a) {
            let e = JSON.parse(o.dataset.framerHydrateV2);
            r = e.routeId,
            n = e.localeId,
            s = e.pathVariables,
            d = e.breakpoints
        } else {
            let e = k(u, decodeURIComponent(location.pathname), !0, z);
            r = e.routeId,
            n = e.localeId,
            s = e.pathVariables
        }
        let f = await N({
            routeId: r,
            localeId: n,
            pathVariables: s
        });
        a ? (S("framer-rewrite-breakpoints", () => {
            w(d),
            t.__framer_onRewriteBreakpoints?.(d)
        }
        ),
        R( () => {
            y(),
            b(),
            _(),
            U(o, f, {
                onRecoverableError: g
            })
        }
        )) : T(o, {
            onRecoverableError: g
        }).render(f)
    } catch (r) {
        throw V("published_site_load_error", {
            message: String(r),
            stack: r instanceof Error && typeof r.stack == "string" ? r.stack : null
        }),
        r
    }
}
export {N as getPageRoot};
//# sourceMappingURL=script_main.PZNHBLZ5.mjs.map
