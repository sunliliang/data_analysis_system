/*!
 * SunHater Circle Loader v0.2 (2013-12-28)
 * jQuery plugin
 * Copyright (c) 2014 Pavel Tzonkov <sunhater@sunhater.com>
 * Dual licensed under the MIT and GPL licenses.
 * http://opensource.org/licenses/MIT
 * http://www.gnu.org/licenses/gpl.html
 */
(function (a) {
    a.fn.shCircleLoader = function (i, e) {
        var m = "shcl", c = 1, d = a(this);
        if (i === "destroy") {
            d.find("." + m).detach();
            return
        } else {
            if ((i === "progress") && (typeof e !== "undefined")) {
                d.each(function () {
                    var s = a(this), q = s.find("." + m);
                    if (!q.get(0)) {
                        return
                    }
                    if (!s.find("span").get(0)) {
                        q.append("<span></span>")
                    }
                    var r = q.find("span").last();
                    r.html(e).css({
                        position: "absolute",
                        display: "block",
                        left: Math.round((q.width() - r.width()) / 2) + "px",
                        top: Math.round((q.height() - r.height()) / 2) + "px"
                    })
                });
                return
            }
        }
        o = {
            namespace: m,
            radius: "auto",
            dotsRadius: "auto",
            color: "auto",
            dots: 12,
            duration: 1,
            clockwise: true,
            externalCss: false,
            keyframes: "0%{{prefix}transform:scale(1)}80%{{prefix}transform:scale(.3)}100%{{prefix}transform:scale(1)}",
            uaPrefixes: ["o", "ms", "webkit", "moz", ""]
        };
        a.extend(o, i);
        var n = o.color, l = o.namespace, k = o.dots, f = o.externalCss, b = o.uaPrefixes, p = function (q) {
            return q.replace(/(.*)px$/i, "$1")
        }, j = function (t) {
            var r, s, q = "";
            for (r = 0; r < b.length; r++) {
                s = b[r].length ? ("-" + b[r] + "-") : "";
                q += t.replace(/\{prefix\}/g, s)
            }
            return q
        }, h = function (u, t) {
            var q = {};
            if (!u.substr) {
                a.each(u, function (x, w) {
                    a.extend(q, h(x, w))
                })
            } else {
                var r, s;
                for (r = 0; r < b.length; r++) {
                    s = b[r].length ? ("-" + b[r] + "-") : "";
                    q[s + u] = t
                }
            }
            return q
        };
        while (a("#" + l + c).get(0)) {
            c++
        }
        if (!f) {
            var g = o.keyframes.replace(/\s+$/, "").replace(/^\s+/, "");
            if (!/(\;|\{)\s*visibility\s*\:/gi.test(g)) {
                g = /^(0+\%|from)\s*\{/i.test(g) ? g.replace(/^((0+\%|from)\s*\{)(.*)$/i, "$1visibility:visible;$3") : (/\s+(0+\%|from)\s*\{/i.test(g) ? g.replace(/(\s+(0+\%|from)\s*\{)/i, "$1visibility:visible;") : ("0%{visibility:visible}" + g))
            }
            a(a("head").get(0) ? "head" : "body").append('<style id="' + l + c + '" type="text/css">' + j("@{prefix}keyframes " + l + c + "_bounce{" + g + "}") + "</style>")
        }
        d.each(function () {
            var q, u, z, s, D, F, E, A, w, C, B = {}, t = a(this), v = t.find("." + m);
            if (v.get(0)) {
                v.shCircleLoader("destroy")
            }
            t.html('<div class="' + l + ((l != m) ? (" " + m) : "") + '"></div>');
            if (f) {
                t = t.find("div")
            }
            F = t.innerWidth() - p(t.css("padding-left")) - p(t.css("padding-right"));
            E = t.innerHeight() - p(t.css("padding-top")) - p(t.css("padding-bottom"));
            q = (o.radius == "auto") ? ((F < E) ? (F / 2) : (E / 2)) : o.radius;
            if (!f) {
                q--;
                if (o.dotsRadius == "auto") {
                    u = Math.abs(Math.sin(Math.PI / (1 * k))) * q;
                    u = (u * q) / (u + q) - 1
                } else {
                    u = o.dotsRadius
                }
                t = t.find("div");
                z = Math.ceil(q * 2);
                C = {position: "relative", width: z + "px", height: z + "px"};
                if (z < F) {
                    C.marginLeft = Math.round((F - z) / 2)
                }
                if (z < E) {
                    C.marginTop = Math.round((E - z) / 2)
                }
                t.css(C);
                z = Math.ceil(u * 2) + "px";
                B = {position: "absolute", visibility: "hidden", width: z, height: z};
                if (n !== null) {
                    B.background = (n == "auto") ? t.css("color") : n
                }
                a.extend(B, h({
                    "border-radius": Math.ceil(u) + "px",
                    "animation-name": l + c + "_bounce",
                    "animation-duration": o.duration + "s",
                    "animation-iteration-count": "infinite",
                    "animation-direction": "normal"
                }))
            }
            for (z = 0; z < k; z++) {
                t.append("<div></div>");
                if (f && (typeof u === "undefined")) {
                    u = (p(t.find("div").css("width")) / 2)
                }
                s = t.find("div").last();
                A = (o.duration / k) * z;
                D = (2 * Math.PI * z) / k;
                w = q - u;
                F = w * Math.sin(D);
                E = w * Math.cos(D);
                if (o.clockwise) {
                    E = -E
                }
                C = {left: Math.round(F + w) + "px", top: Math.round(E + w) + "px"};
                if (A) {
                    a.extend(C, h("animation-delay", A + "s"))
                }
                a.extend(C, B);
                s.css(C)
            }
        })
    }
})(jQuery);