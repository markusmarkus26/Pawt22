import {G as t, J as x, g as c, l as f, n as y, o as v} from "./chunk-S6IUZFYY.mjs";
import {c as p} from "./chunk-RIUMFBNJ.mjs";
function E(V) {
    let {parentId: s, children: l, movementAxis: i} = V
      , [m,b] = f(null)
      , [u,M] = f(null);
    return c( () => {
        let a = document.getElementById(s);
        if (!a)
            return;
        let e = n => {
            b(n.clientX),
            M(n.clientY)
        }
          , r = () => {
            l.forEach(n => {
                let o = document.getElementById(n.id);
                o && (o.style.transition = `transform ${n.transitionDuration}ms cubic-bezier(0, 0, 0.58, 1) `,
                o.style.transform = "translate(0, 0)")
            }
            )
        }
        ;
        return a.addEventListener("mousemove", e),
        a.addEventListener("mouseleave", r),
        () => {
            a.removeEventListener("mousemove", e),
            a.removeEventListener("mouseleave", r)
        }
    }
    , [s, l]),
    c( () => {
        document.getElementById(s) && l.forEach(e => {
            let r = document.getElementById(e.id);
            if (!r)
                return;
            let n = 0
              , o = 0
              , d = e.movementFactor / 1e3;
            if ((i === "Both" || i === "Horizontal") && m && (n = (m - p.innerWidth / 2) * e.sensitivityX * .01 * d),
            (i === "Both" || i === "Vertical") && u && (o = (u - p.innerHeight / 2) * e.sensitivityY * .01 * d),
            e.reverseMovement && (n *= -1,
            o *= -1),
            e.lockReverse) {
                console.log(e),
                n < 0 && (r.style.transition = `transform ${e.transitionDuration}ms cubic-bezier(0, 0, 0.58, 1`,
                r.style.transform = `translate(${n}px, ${o}px)`);
                return
            }
            r.style.transition = `transform ${e.transitionDuration}ms cubic-bezier(0, 0, 0.58, 1)`,
            r.style.transform = `translate(${n}px, ${o}px)`
        }
        )
    }
    , [m, u, s, l, i]),
    v(y, {})
}
x(E, {
    parentId: {
        type: t.String,
        title: "Parent ID",
        defaultValue: "container"
    },
    movementAxis: {
        type: t.Enum,
        title: "Movement Axis",
        options: ["Both", "Horizontal", "Vertical"],
        optionTitles: ["Both", "Horizontal", "Vertical"],
        defaultValue: "Both"
    },
    children: {
        type: t.Array,
        title: "Children",
        propertyControl: {
            type: t.Object,
            controls: {
                id: {
                    type: t.String,
                    title: "ID",
                    defaultValue: "child"
                },
                movementFactor: {
                    type: t.Number,
                    title: "Speed (ms)",
                    defaultValue: 500,
                    displayStepper: !0,
                    step: 10
                },
                reverseMovement: {
                    type: t.Boolean,
                    title: "Reverse Movement",
                    defaultValue: !1
                },
                sensitivityX: {
                    type: t.Number,
                    title: "Horizontal Sensitivity",
                    defaultValue: 10,
                    displayStepper: !0,
                    step: 10
                },
                sensitivityY: {
                    type: t.Number,
                    title: "Vertical Sensitivity",
                    defaultValue: 10,
                    displayStepper: !0,
                    step: 10
                },
                transitionDuration: {
                    type: t.Number,
                    title: "Transition Duration (ms)",
                    defaultValue: 500,
                    displayStepper: !0,
                    step: 10
                },
                lockReverse: {
                    type: t.Boolean,
                    title: "Lock Reverse Movement (horizontal)",
                    defaultValue: !1
                }
            }
        }
    }
});
export {E as a};
//# sourceMappingURL=chunk-AAT37M7M.mjs.map
