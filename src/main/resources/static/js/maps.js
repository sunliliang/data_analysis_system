(function (config) {
    var ba = navigator.userAgent.toLowerCase(), da = window, ea = document, ga = ea.documentElement;

    function ha(a) {
        return -1 !== ba.indexOf(a)
    }

    var la = /([a-z0-9]*\d+[a-z0-9]*)/;

    function ma() {
        var a = na;
        if (!a) return null;
        var a = a.toLowerCase(), b = null;
        if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
        a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
        if (0 <= a.indexOf("intel")) {
            b = ["Intel"];
            0 <= a.indexOf("mobile") && b.push("Mobile");
            (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
            if (0 <= a.indexOf("haswell")) b.push("Haswell"); else if (0 <= a.indexOf("ivy")) b.push("HD 4000"); else if (0 <= a.indexOf("sandy")) b.push("HD 3000"); else if (0 <= a.indexOf("ironlake")) b.push("HD");
            else {
                0 <= a.indexOf("hd") && b.push("HD");
                var c = a.match(la);
                c && b.push(c[1].toUpperCase())
            }
            return b = b.join(" ")
        }
        return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
            b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(la)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
        b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(la)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
    }

    var oa = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
        pa = "ActiveXObject" in da,
        sa = "devicePixelRatio" in da && 1 < da.devicePixelRatio || pa && "matchMedia" in da && da.matchMedia("(min-resolution:144dpi)") && da.matchMedia("(min-resolution:144dpi)").matches,
        ta = ha("windows nt"), ua = -1 !== ba.search(/windows nt [1-5]\./), va = -1 !== ba.search(/windows nt 5\.[12]/),
        wa = ua && !va;
    ha("windows nt 10");
    var xa = ha("windows phone"), ya = ha("macintosh"), za = ha("Mb2345Browser"), Aa = ha("ipad;") || ha("ipad "),
        Ba = Aa && sa, Ca = ha("ipod touch;"), Da = ha("iphone;") || ha("iphone "), Ea = Da || Aa || Ca,
        Fa = Ea && -1 !== ba.search(/ os [456]_/);
    Ea && ba.search(/ os [4-8]_/);
    var Ga = Ea && -1 !== ba.search(/ os [78]_/);
    Ea && ha("os 8_");
    var Ja = Ea && ha("os 10_"), Ka = ha("android"), La = -1 !== ba.search(/android [123]/), Ma = ha("android 4");
    Ka && -1 === ba.search(/android [1-4]/) || ba.search(/android 4.4/);
    var Na = Ka ? "android" : Ea ? "ios" : ta ? "windows" : ya ? "mac" : "other", Oa = pa && !da.XMLHttpRequest,
        Pa = pa && !ea.querySelector, Qa = pa && !ea.addEventListener, Ra = pa && ha("ie 9"), Sa = pa && ha("msie 10"),
        Ta = pa && ha("rv:11"), Ua = ha("edge"), Va = ha("qtweb"), Wa = ha("ucbrowser"), Xa = ha("alipay") || Ka && Wa,
        Ya = ha("miuibrowser"), Za = ha("micromessenger"), $a = ha("mqqbrowser"), ab = ha("baidubrowser"),
        chrome = (ha("chrome") || ha("crios")) && !Za && !ab && !$a && !Ua && !Ya, bb = chrome && ha("chromium"),
        cb = chrome && !bb && 30 < parseInt(ba.split("chrome/")[1]), db = ha("firefox"),
        eb = db && 27 < parseInt(ba.split("firefox/")[1]), fb = (ya || Ea) && ha("safari") && ha("version/"),
        gb = ya && fb && 7 < parseInt(ba.split("version/")[1]), hb = Ea && ha("aliapp"),
        ib = Ea && (!$a && !Wa && !Za && !chrome && !db && !fb || hb && !Wa), jb = Ka || Ea || xa || ha("mobile"),
        kb = da.navigator && da.navigator.msPointerEnabled && !!da.navigator.msMaxTouchPoints,
        lb = da.navigator && da.navigator.pointerEnabled && !!da.navigator.maxTouchPoints, mb = lb || kb,
        nb = "ontouchstart" in ea || mb, ob = function () {
            if (!jb) return da.devicePixelRatio || 1;
            var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window) try {
                if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta"); else return 1
            } catch (b) {
                return 1
            }
            for (var c = a.length - 1; 0 <= c; c -= 1) if ("viewport" === a[c].name) {
                var c = a[c].content, d;
                -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
                a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
                c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                if (d) {
                    if (c >= a) return d > c ? c : d < a ? a : d
                } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
                console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
                return null
            }
        }(), pb = sa && (!jb || !!ob && 1 <= ob), qb = pa && "transition" in ga.style,
        rb = !!ea.createElementNS && !!ea.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        sb = ea.createElement("canvas"), vb = !(!sb || !sb.getContext), wb = window.URL || window.webkitURL,
        xb = !pa && !(Wa && Ka) && window.Worker && wb && wb.createObjectURL && window.Blob, yb = "", na = "", zb = 0,
        Ab = {
            alpha: !0,
            antialias: !0, depth: !0, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !0, stencil: !1
        }, Bb = function () {
            if (!window.forceWebGL && (!vb || !xb || ib && hb && !Wa)) return !1;
            for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try {
                    b = sb.getContext(a[c], window.forceWebGL ? {alpha: !1, antialias: !0, depth: !0} : Ab)
                } catch (d) {
                }
                if (b) {
                    if (b.drawingBufferWidth !== sb.width || b.drawingBufferHeight !== sb.height) break;
                    if (window.forceWebGL) return yb = a[c], zb = Infinity, !0;
                    if (!b.getShaderPrecisionFormat || !b.getParameter ||
                        !b.getExtension) break;
                    zb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
                    var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
                    if (!e) break;
                    zb = Math.min(zb, e[0], e[1]);
                    fb && "mac" === Na && (zb = Math.min(zb, 4096));
                    e = Math.max(screen.width, screen.height);
                    pb && (e *= Math.min(2, window.devicePixelRatio || 1));
                    if (e > zb) break;
                    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
                    na = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
                    if ((b = ma()) && -1 !== oa.indexOf(b)) break;
                    yb = a[c];
                    return !0
                }
            }
            return !1
        }(), Cb = Bb && (cb || eb || gb) && ("mac" === Na || "windows" === Na) && !jb,
        Db = !vb || Va || xa || jb && db || Ra || Fa || Ba || Ca || La || ha("gt-n710") || wa,
        Eb = !Db && !Cb && (Ma || Ga || Ea && Za || !jb), Fb = Cb ? "vw" : Db ? "d" : Eb ? "dv" : "v",
        Gb = ha("webkit"), Hb = "WebKitCSSMatrix" in da && "m11" in new window.WebKitCSSMatrix,
        Ib = "MozPerspective" in ga.style, Jb = "OTransition" in ga.style, Kb = qb || Hb || Ib || Jb,
        Lb = void 0 !== config[8] ? config[8] : !0, Mb = void 0 !== config[9] ? config[9] : !0,
        Nb = void 0 !== config[10] ? config[10] : !0, Ob = void 0 !== config[11] ? config[11] :
        !0, Pb = void 0 !== config[12] ? config[12] : null, Qb = !rb && jb && vb, Rb = !0;
    try {
        if ("undefined" === typeof da.localStorage) Rb = !1; else {
            var Sb = (new Date).getTime() + "";
            da.localStorage.setItem("_test", Sb);
            da.localStorage.getItem("_test") !== Sb && (Rb = !1);
            da.localStorage.removeItem("_test")
        }
    } catch (Tb) {
        Rb = !1
    }
    config.l = {
        Z9: Aa,
        a$: Da,
        size: Da ? 100 : Ka ? 200 : 500,
        Iv: ya,
        Cea: ta,
        cA: Ea,
        vha: Ja,
        gh: Ka,
        l6: La,
        FR: Xa,
        Kp: Na,
        az: ab,
        Dba: $a,
        $I: fb,
        GW: Za,
        pn: pa,
        Mg: Oa,
        up: Pa,
        e$: Ra,
        FS: Sa,
        Ld: Qa,
        b$: Ta,
        y8: Ua,
        f$: pa && !Ta,
        $$: za,
        Kj: Rb,
        He: Rb && Ob && !jb && chrome,
        Rk: Pb,
        geolocation: jb || pa && !Qa || Ua,
        $da: Wa,
        zB: Wa && !chrome,
        chrome: chrome,
        jG: sa && chrome,
        xG: db,
        Y: jb,
        faa: jb && Gb,
        FT: jb && Hb,
        eaa: jb && da.opera,
        md: sa,
        EB: ob,
        ga: pb,
        ke: nb,
        HT: kb,
        BI: lb,
        uU: mb,
        c7: 57 <= parseInt(ba.split("chrome/")[1]),
        EW: Gb,
        c$: qb,
        FW: Hb,
        W8: Ib,
        Qaa: Jb,
        Zy: Kb,
        Ck: rb,
        qn: vb,
        fT: xb,
        Ps: Nb,
        Ef: Cb,
        zW: yb,
        BW: Ab,
        cH: na,
        Z$: zb,
        Qea: !1,
        uR: Lb,
        kz: Lb && !Db,
        A6: Lb ? Fb : "d",
        KQ: Lb ? Bb : !1,
        ow: Lb && vb,
        $l: Lb && Bb,
        Aha: Lb && (!Db || Bb),
        un: Mb && !!da.WebSocket && !ab,
        aia: Qb,
        Saa: vb || Qb ? "c" : "d"
    };
    var Ub = config;
    config = void 0;
    var Vb = {
        overlay: ["style"],
        "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
        "AMap.MarkerList": ["AMap.TplUtils"],
        Map3D: ["vectorlayer", "wgl"]
    };
    window.AMap ? (window.AMap.version = "1536672475631", window.AMap.CB = {
        oC: function (a) {
            a(Ub)
        }
    }) : window.AMap = {
        version: "1536672475631", CB: {
            oC: function (a) {
                a(Ub)
            }
        }
    };
    Ub.Vg = "1536672475631";
    Ub.Yo = Vb;
    Ub.rA = "raster";
    for (var Wb = document.head || document.getElementsByTagName("head")[0], Xb = ".vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1;overflow:hidden}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 3px 14px rgba(0,0,100,0.6);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left;border:#c0c0c0 solid 1px}.amap-info-outer:hover,.amap-menu-outer:hover{box-shadow:0 3px 14px rgba(0,0,0,0.75)}.amap-info-content{background:#fff;border:1px solid #ccc;padding:10px 18px 10px 10px;+margin:0 10px;+padding:10px 0;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp{height:23px;margin:0 auto;overflow:hidden;position:relative;top:-1px;width:30px;background-image:url(../../theme/v1.3/sharp.png);_background-image:url(../../theme/v1.3/sharp.gif)}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}".replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
        Ub[2].split(",")[0] + "/"), Yb = null, kc = 0, lc = Wb.childNodes.length; kc < lc; kc++) if (1 === Wb.childNodes[kc].nodeType) {
        Yb = Wb.childNodes[kc];
        break
    }
    if (Xb) if (Wb) {
        var mc = document.createElement("style");
        mc.setAttribute("type", "text/css");
        mc.setAttribute("class", "AMap.style");
        mc.styleSheet ? mc.styleSheet.cssText = Xb : mc.innerHTML = Xb;
        Yb ? Wb.insertBefore(mc, Yb) : Wb.appendChild(mc)
    } else document.write("<style type='text/css'>" + Xb + "</style>");
    var f = f || {Pa: {Ed: 0, Yn: []}}, v = {B: {}, control: {}, D: {}};
    f.CLASS_NAME = "AMap";
    f.e = f.BuryPoint = {CT: {}, WH: {}, options: {}, mI: {}, RN: {}, SN: {}, OO: {}, PO: {}};
    f.e.Fg = f.BuryPoint.dic = {
        "AMap.event": {
            c: "ev",
            m: {addDomListener: "a", addListener: "b", addListenerOnce: "c", removeListener: "d", trigger: "e"}
        },
        AMap: {c: "aa", m: {convertFrom: "a"}},
        "AMap.Map": {
            c: "m",
            o: {
                view: "a",
                layers: "b",
                level: "c",
                center: "d",
                zooms: "e",
                lang: "f",
                cursor: "g",
                crs: "h",
                animateEnable: "i",
                isHotspot: "j",
                defaultLayer: "k",
                rotateEnable: "l",
                resizeEnable: "m",
                dragEnable: "n",
                zoomEnable: "o",
                doubleClickZoom: "p",
                keyboardEnable: "q",
                jogEnable: "r",
                scrollWheel: "s",
                touchZoom: "t",
                mapStyle: "u",
                "features ": "v",
                zoom: "w"
            },
            m: {
                setMapStyle: "a",
                getMapStyle: "b",
                getFeatures: "c",
                setFeatures: "d",
                setLang: "e",
                getLang: "f",
                setCity: "g",
                getCity: "h",
                getAdcode: "i",
                setLimitBounds: "j",
                clearLimitBounds: "k",
                getLimitBounds: "l",
                setZoom: "m",
                getZoom: "n",
                getCenter: "o",
                setCenter: "p",
                setRotation: "q",
                getBounds: "r",
                getStatus: "s",
                setStatus: "t",
                getResolution: "u",
                getScale: "v",
                getDefaultCursor: "w",
                setDefaultCursor: "x",
                zoomIn: "y",
                zoomOut: "z",
                setZoomAndCenter: "0",
                setBounds: "1",
                clearMap: "2",
                destroy: "3",
                addControl: "4",
                removeControl: "5",
                clearControl: "6",
                clearInfoWindow: "7",
                remove: "8",
                add: "9",
                getAllOverlays: "a1",
                getSize: "a2",
                getContainer: "a3",
                panTo: "a4",
                panBy: "a5",
                setFitView: "a6",
                setLayers: "a7",
                getLayers: "a8",
                getDefaultLayer: "a9",
                setDefaultLayer: "a0",
                pixelToLngLat: "b0",
                lnglatToPixel: "b1",
                drawPolyline: "b2",
                drawPolygon: "b3",
                drawCircle: "b4"
            }
        },
        "AMap.View2D": {c: "v", o: {center: "a", rotation: "b", zoom: "c", crs: "d"}},
        "AMap.Buildings": {p: "AMap.Layer", c: "b"},
        "AMap.CustomLayer": {
            p: "AMap.Layer", c: "c", o: {map: "a", zIndex: "b", opacity: "c", zooms: "d"}, m: {
                setOpacity: "2a",
                getContainer: "2b", show: "2c", hide: "2d", setzIndex: "2e"
            }
        },
        "AMap.ImageLayer": {
            p: "AMap.Layer",
            c: "i",
            o: {bounds: "a", url: "b", map: "c", opacity: "d", visible: "e", zIndex: "f", zooms: "g"},
            m: {
                getMap: "4a",
                show: "4b",
                getOpacity: "4c",
                setOpacity: "4d",
                getBounds: "4e",
                setBounds: "4f",
                getImageUrl: "4g",
                setImageUrl: "4h",
                hide: "4i",
                setOptions: "4j",
                getOptions: "4k"
            }
        },
        "AMap.Layer": {
            c: "l",
            m: {getZooms: "a", setOpacity: "b", show: "c", hide: "d", setMap: "e", getMap: "f", setzIndex: "g"}
        },
        "AMap.MassMarks": {
            p: "AMap.Layer", c: "ma", o: {
                zIndex: "a", opacity: "b",
                zooms: "c", anchor: "d", url: "e", size: "f", cursor: "g", alwaysRender: "h"
            }, m: {setData: "0a", getData: "0b", getStyle: "0c", setStyle: "0d", setMap: "0e"}
        },
        "AMap.TileLayer": {
            p: "AMap.Layer",
            c: "tl",
            o: {
                map: "a",
                tileSize: "b",
                tileUrl: "c",
                errorUrl: "d",
                getTileUrl: "e",
                zIndex: "f",
                opacity: "g",
                zooms: "h",
                detectRetina: "i"
            },
            m: {
                setTextIndex: "3a",
                getTiles: "3b",
                setTileUrl: "3d",
                getTileUrl: "3e",
                getZooms: "3f",
                stopRefresh: "3g",
                startRefresh: "3h",
                reload: "3i"
            }
        },
        "AMap.TileLayer.Satellite": {
            p: "AMap.TileLayer", c: "s", o: {
                map: "a", zIndex: "b", opacity: "c",
                zooms: "d", detectRetina: "e"
            }
        },
        "AMap.TileLayer.RoadNet": {
            p: "AMap.TileLayer",
            c: "r",
            o: {map: "a", zIndex: "b", opacity: "c", zooms: "d", detectRetina: "e"}
        },
        "AMap.TileLayer.Traffic": {
            p: "AMap.TileLayer",
            c: "t",
            o: {map: "a", zIndex: "b", opacity: "c", zooms: "d", detectRetina: "e", autoRefresh: "f", interval: "g"}
        },
        "AMap.LayerGroup": {p: "AMap.Overlay", c: "LayerGroup", o: {}},
        "AMap.OverlayGroup": {p: "AMap.Overlay", c: "OverlayGroup", o: {}},
        "AMap.Vector": {
            p: "AMap.Overlay", c: "v", m: {
                show: "4a", hide: "4b", getVisible: "4c", getOptions: "4d", setOptions: "4e",
                setDraggable: "4f"
            }
        },
        "AMap.VectorTile": {p: "AMap.Layer", c: "vt"},
        "AMap.CircleMarker": {p: "AMap.Circle", c: "CircleMarker"},
        "AMap.Circle": {
            p: "AMap.Vector",
            c: "ci",
            o: {
                map: "a",
                zIndex: "b",
                center: "c",
                radius: "d",
                strokeColor: "e",
                strokeOpacity: "f",
                strokeWeight: "g",
                fillColor: "h",
                fillOpacity: "i",
                strokeStyle: "j",
                extData: "k",
                strokeDasharray: "l"
            },
            m: {setCenter: "8a", getCenter: "8b", setRadius: "8c", getRadius: "8d", contains: "8e"}
        },
        "AMap.Ellipse": {
            p: "AMap.Vector", c: "ei", o: {
                map: "a",
                zIndex: "b",
                center: "c",
                radius: "d",
                strokeColor: "e",
                strokeOpacity: "f",
                strokeWeight: "g",
                fillColor: "h",
                fillOpacity: "i",
                strokeStyle: "j",
                extData: "k",
                strokeDasharray: "l"
            }, m: {setCenter: "8a", getCenter: "8b", setRadius: "8c", getRadius: "8d", contains: "8e"}
        },
        "AMap.Rectangle": {
            p: "AMap.Vector",
            c: "ra",
            o: {
                map: "a",
                zIndex: "b",
                center: "c",
                radius: "d",
                strokeColor: "e",
                strokeOpacity: "f",
                strokeWeight: "g",
                fillColor: "h",
                fillOpacity: "i",
                strokeStyle: "j",
                extData: "k",
                strokeDasharray: "l"
            },
            m: {setCenter: "8a", getCenter: "8b", setRadius: "8c", getRadius: "8d", contains: "8e"}
        },
        "AMap.ContextMenu": {
            p: "AMap.Overlay",
            c: "cm",
            o: {position: "a", content: "b", width: "c"},
            m: {addItem: "2a", removeItem: "2b", open: "2c", close: "2d"}
        },
        "AMap.GroundImage": {
            p: "AMap.ImageLayer",
            c: "g",
            o: {map: "a", clickable: "b", opacity: "c"},
            m: {setMap: "8a"}
        },
        "AMap.Icon": {
            c: "ic",
            o: {size: "a", imageOffset: "b", image: "c", imageSize: "c"},
            m: {setImageSize: "a", getImageSize: "b"}
        },
        "AMap.ImageMarker": {
            p: "AMap.Overlay",
            c: "im",
            m: {
                setPosition: "3a",
                getBounds: "3b",
                getPosition: "3c",
                hide: "3d",
                show: "3e",
                setCursor: "3f",
                setRotation: "3g",
                setzIndex: "3h"
            }
        },
        "AMap.InfoWindow": {
            p: "AMap.Overlay",
            c: "iw",
            o: {
                isCustom: "a",
                autoMove: "b",
                closeWhenClickMap: "c",
                content: "d",
                size: "e",
                offset: "f",
                position: "g",
                showShadow: "h"
            },
            m: {
                open: "1a",
                close: "1b",
                setContent: "1c",
                getContentU: "1d",
                getContent: "1e",
                setPosition: "1f",
                setOffset: "1g",
                getPosition: "1h",
                setSize: "1i",
                getSize: "1j",
                getIsOpen: "1k"
            }
        },
        "AMap.Marker": {
            p: "AMap.Overlay", c: "mk", o: {
                map: "a",
                position: "b",
                offset: "c",
                icon: "d",
                content: "e",
                topWhenClick: "f",
                topWhenMouseOver: "g",
                draggable: "h",
                raiseOnDrag: "j",
                cursor: "k",
                visible: "l",
                zIndex: "m",
                angle: "n",
                autoRotation: "o",
                animation: "p",
                shadow: "q",
                title: "r",
                clickable: "s",
                shape: "t",
                extData: "u"
            }, m: {
                setRaiseOnDrag: "9a",
                setPosition: "9b",
                getPosition: "9c",
                setIcon: "9d",
                getIcon: "9e",
                setContent: "9f",
                getContent: "9g",
                hide: "9h",
                show: "9i",
                setCursor: "9j",
                setRotation: "9k",
                setAngle: "9l",
                getAngle: "9m",
                setOffset: "9n",
                getOffset: "9o",
                setzIndex: "9p",
                setOpacity: "9q",
                setDraggable: "9r",
                getDraggable: "9s",
                moveTo: "9t",
                moveAlong: "9u",
                stopMove: "9v",
                setShadow: "9w",
                getShadow: "9x",
                setClickable: "9y",
                getClickable: "9z",
                setTitle: "90",
                getTitle: "91",
                setLabel: "92",
                getLabel: "93",
                setTop: "94",
                getTop: "95",
                setShape: "96",
                getShape: "97",
                setAnimation: "98",
                getAnimation: "99",
                getMap: "9a1"
            }
        },
        "AMap.MarkerShape": {c: "ms", o: {coords: "a", type: "b"}},
        "AMap.Overlay": {c: "o", m: {show: "a", hide: "b", setMap: "c", getMap: "d", setExtData: "e", getExtData: "f"}},
        "AMap.Poly": {p: "AMap.Vector", c: "ly", m: {setPath: "5a", getPath: "5b"}},
        "AMap.Polygon": {
            p: "AMap.Poly", c: "gn", o: {
                map: "a",
                zIndex: "b",
                path: "c",
                strokeColor: "d",
                strokeOpacity: "e",
                strokeWeight: "f",
                fillColor: "g",
                fillOpacity: "h",
                extData: "i",
                strokeStyle: "j",
                strokeDasharray: "k"
            }, m: {getArea: "6a", toString: "6b", contains: "6c"}
        },
        "AMap.Polyline": {
            p: "AMap.Poly",
            c: "le",
            o: {
                map: "a",
                zIndex: "b",
                geodesic: "c",
                isOutline: "d",
                outlineColor: "e",
                path: "f",
                strokeColor: "g",
                strokeOpacity: "h",
                strokeWeight: "i",
                strokeStyle: "j",
                strokeDasharray: "k",
                extData: "l"
            },
            m: {getLength: "7a"}
        },
        "AMap.Text": {p: "AMap.Overlay"},
        "AMap.Panorama": {c: "aa"},
        "AMap.PanoramaMarker": {c: "ar"},
        "AMap.PanoramaService": {c: "ae"},
        "AMap.AdvancedInfoWindow": {
            p: "AMap.InfoWindow", c: "pa", o: {
                autoMove: "a",
                closeWhenClickMap: "b",
                content: "c",
                offset: "d",
                position: "e",
                panel: "f",
                searchRadius: "g",
                placeSearch: "h",
                driving: "i",
                walking: "j",
                transit: "k",
                asOrigin: "l",
                asDestination: "m"
            }, m: {clear: "aa", searchPoiByKeyWord: "ab"}
        },
        "AMap.AntiCrabFrame": {c: "pb", m: {setMapStyle: "a"}},
        "AMap.ArrivalRange": {c: "pc", m: {search: "a"}},
        "AMap.Autocomplete": {
            c: "pd",
            o: {type: "a", city: "b", input: "c"},
            m: {setType: "a", setCity: "b", search: "c"}
        },
        "AMap.AutoPanby": {c: "pe"},
        "AMap.CircleEditor": {c: "pf", m: {open: "a", close: "b"}},
        "AMap.EllipseEditor": {
            c: "pfa", m: {
                open: "a",
                close: "b"
            }
        },
        "AMap.RectangleEditor": {c: "pfb", m: {open: "a", close: "b"}},
        "AMap.CitySearch": {c: "pg", m: {getLocalCity: "a", getCityByIp: "b"}},
        "AMap.CloudDataLayer": {
            c: "ph",
            o: {map: "a", query: "b", clickable: "c"},
            m: {reload: "a", setMap: "b", getMap: "c", setOptions: "d", wrapUrl: "e"}
        },
        "AMap.CloudDataSearch": {
            c: "pi",
            o: {keywords: "a", filter: "b", orderBy: "c", pageSize: "d", pageIndex: "e"},
            m: {
                setOptions: "a",
                clear: "b",
                setPageIndex: "c",
                setPageSize: "d",
                searchNearBy: "e",
                searchById: "f",
                searchByDistrict: "g",
                searchInPolygon: "h"
            }
        },
        "AMap.CloudDataSearchRender": {c: "pj"},
        "AMap.DistrictSearch": {
            c: "pk",
            o: {level: "a", extensions: "b", subdistrict: "c"},
            m: {setLevel: "a", setExtensions: "b", setSubdistrict: "c", search: "d"}
        },
        "AMap.DragRoute": {
            c: "pl",
            o: {
                polyOptions: "a",
                startMarkerOptions: "b",
                midMarkerOptions: "c",
                endMarkerOptions: "d",
                showTraffic: "e"
            },
            m: {
                setAvoidPolygons: "a",
                clearAvoidPolygons: "b",
                getAvoidPolygons: "c",
                setAvoidRoad: "d",
                clearAvoidRoad: "e",
                getAvoidRoad: "f",
                search: "g",
                setPolicy: "h",
                showRoute: "i",
                close: "j",
                open: "k",
                getWays: "l",
                getRoute: "m",
                destroy: "n",
                getPolyline: "o",
                getStart: "p",
                getEnd: "q",
                getPoint: "r",
                getRoutes: "s"
            }
        },
        "AMap.Driving": {
            c: "pm",
            o: {policy: "a", extensions: "b", map: "c", panel: "d", hideMarkers: "e"},
            m: {
                clear: "a",
                search: "b",
                setAvoidPolygons: "c",
                clearAvoidPolygons: "d",
                getAvoidPolygons: "e",
                setAvoidRoad: "f",
                clearAvoidRoad: "g",
                getAvoidRoad: "h",
                setPolicy: "i",
                setLocation: "j",
                close: "k",
                open: "l"
            }
        },
        "AMap.DrivingRender": {c: "pp"},
        "AMap.Geocoder": {
            c: "pq",
            o: {city: "a", radius: "b", extensions: "c"},
            m: {getLocation: "a", setCity: "b", getAddress: "c"}
        },
        "AMap.Geolocation": {
            c: "pr", o: {
                enableHighAccuracy: "a",
                timeout: "b",
                maximumAge: "c",
                convert: "d",
                showButton: "e",
                buttonDom: "f",
                buttonPosition: "g",
                buttonOffset: "h",
                showMarker: "i",
                markerOptions: "j",
                showCircle: "k",
                circleOptions: "l",
                panToLocation: "m",
                zoomToAccuracy: "n",
                useNative: "o"
            }, m: {isSupported: "a", getCurrentPosition: "b", watchPosition: "c", clearWatch: "d"}
        },
        "AMap.GetLL": {c: "ps"},
        "AMap.Heatmap": {
            c: "pt", o: {radius: "a", gradient: "b", opacity: "c", zooms: "d"}, m: {
                setOptions: "a",
                getOptions: "b",
                setDataSet: "c",
                getDataSet: "d",
                addDataPoint: "e",
                setMap: "f",
                hide: "g",
                show: "h",
                getMap: "i",
                setzIndex: "j",
                getzIndex: "k"
            }
        },
        "AMap.HotSpot": {c: "pu", m: {setMap: "a"}},
        "AMap.LineSearch": {
            c: "pv",
            o: {pageIndex: "a", pageSize: "b", city: "c", extensions: "d"},
            m: {setPageIndex: "a", setPageSize: "b", setCity: "c", searchById: "d", search: "e"}
        },
        "AMap.MapType": {c: "pw", m: {hide: "a", show: "b"}},
        "AMap.Cluster": {c: "px"},
        "AMap.MarkerClusterer": {
            c: "py",
            o: {gridSize: "a", minClusterSize: "b", maxZoom: "c", averageCenter: "d", styles: "e", zoomOnClick: "f"},
            m: {
                disperse: "a",
                addMarker: "b",
                addMarkers: "c",
                removeMarker: "d",
                removeMarkers: "e",
                clearMarkers: "f",
                getClustersCount: "g",
                getMap: "h",
                setMap: "i",
                getMarkers: "j",
                setMarkers: "k",
                getGridSize: "l",
                setGridSize: "m",
                getMinClusterSize: "n",
                setMinClusterSize: "o",
                getMaxZoom: "p",
                setMaxZoom: "q",
                isAverageCenter: "r",
                setAverageCenter: "s",
                getStyles: "t",
                setStyles: "u"
            }
        },
        "AMap.MouseTool": {
            c: "pz",
            m: {
                marker: "a",
                polyline: "b",
                polygon: "c",
                rectangle: "d",
                circle: "e",
                rule: "f",
                measureArea: "g",
                rectZoomIn: "h",
                rectZoomOut: "i",
                close: "j"
            }
        },
        "AMap.WebGLTool": {c: "pz", m: {parse: "a"}},
        "AMap.OverView": {
            c: "p0", o: {
                tileLayer: "a",
                isOpen: "b", visible: "c"
            }, m: {open: "a", close: "b", getTileLayer: "c", setTileLayer: "d", show: "e", hide: "f"}
        },
        "AMap.PlaceSearch": {
            c: "p1",
            o: {city: "a", type: "b", lang: "c", pageSize: "d", pageIndex: "e", extensions: "f", map: "g", panel: "h"},
            m: {
                clear: "a",
                setLang: "b",
                searchInBounds: "c",
                searchNearBy: "d",
                getDetails: "e",
                setType: "f",
                setPageIndex: "g",
                setPageSize: "h",
                setCity: "i",
                close: "j",
                open: "k"
            }
        },
        "AMap.PlaceSearchLayer": {c: "p2", o: {map: "a", keywords: "b"}, m: {setMap: "a", setKeywords: "b"}},
        "AMap.PlaceSearchRender": {c: "p3"},
        "AMap.PolyEditor": {
            c: "p4",
            m: {open: "a", close: "b"}
        },
        "AMap.RangingTool": {
            c: "p5",
            o: {
                startMarkerOptions: "a",
                midMarkerOptions: "b",
                endMarkerOptions: "c",
                lineOptions: "d",
                tmpLineOptions: "e",
                startLabelText: "f",
                midLabelText: "g",
                endLabelText: "h",
                startLabelOffset: "i",
                midLabelOffset: "j",
                endLabelOffset: "k"
            },
            m: {turnOn: "a", turnOff: "b"}
        },
        "AMap.RoadInfoSearch": {
            c: "p6",
            o: {pageIndex: "a", pageSize: "b", city: "c"},
            m: {
                setPageIndex: "a",
                setPageSize: "b",
                setCity: "c",
                roadInfoSearchByRoadId: "d",
                roadInfoSearchByRoadName: "e",
                crossInfoSearchByCrossId: "f",
                crossInfoSearchByRoadName: "g"
            }
        },
        "AMap.Scale": {c: "p7", m: {show: "a", hide: "b"}},
        "AMap.StationSearch": {
            c: "p8",
            o: {pageIndex: "a", pageSize: "b", city: "c"},
            m: {setPageIndex: "a", setPageSize: "b", setCity: "c", searchById: "d", search: "e"}
        },
        "AMap.ControlBar": {},
        "AMap.ToolBar": {
            c: "p9",
            o: {offset: "a", ruler: "b", direction: "c", autoPosition: "d", locationMarker: "e", useNative: "f"},
            m: {
                getOffset: "a",
                setOffset: "b",
                hideRuler: "c",
                showRuler: "d",
                hideDirection: "e",
                showDirection: "f",
                hideLocation: "g",
                showLocation: "h",
                hide: "i",
                show: "j",
                doLocation: "k",
                getLocation: "l"
            }
        },
        "AMap.Transfer": {
            c: "1",
            o: {
                city: "a",
                policy: "b",
                nightflag: "c",
                cityd: "d",
                extensions: "e",
                map: "f",
                panel: "g",
                hideMarkers: "h"
            },
            m: {
                clear: "a",
                search: "b",
                leaveAt: "c",
                setPolicy: "d",
                setCity: "e",
                setCityd: "f",
                close: "g",
                open: "h"
            }
        },
        "AMap.TransferRender": {c: "2"},
        "AMap.UTFGrid": {c: "3", m: {setMap: "a"}},
        "AMap.Walking": {
            c: "4",
            o: {map: "a", panel: "b", hideMarkers: "c"},
            m: {clear: "a", search: "b", close: "c", open: "d"}
        },
        "AMap.WalkingRender": {c: "5"},
        "AMap.Weather": {c: "6", m: {getLive: "a", getForecast: "b"}},
        "AMap.IndoorMap": {
            p: "AMap.CustomLayer",
            c: "7",
            o: {alwaysShow: "9a"},
            m: {
                showIndoorMap: "9a",
                showFloor: "9b",
                showFloorBar: "9c",
                hideFloorBar: "9d",
                hideLabels: "9e",
                showLabels: "9f",
                getSelectedBuildingId: "9g",
                getSelectedBuilding: "9h",
                setSelectedBuildingId: "9i",
                getVisibleBuildingIds: "9j"
            }
        },
        "AMap.Riding": {
            c: "prd",
            o: {map: "a", panel: "b", policy: "c"},
            m: {clear: "a", search: "b", close: "c", open: "d", setPolicy: "e"}
        },
        "AMap.RidingRender": {c: "prdr"},
        "AMap.BezierCurve": {
            p: "AMap.Polyline",
            c: "AMap.BezierCurve",
            o: {tolerance: "tolerance", interpolateNumLimit: "interpolateNumLimit"}
        },
        "AMap.BezierCurveEditor": {
            c: "AMap.BezierCurveEditor",
            o: {getMarkerOptions: "getMarkerOptions", getCtrlLineOptions: "getCtrlLineOptions"}
        },
        "AMap.GeometryUtil": {c: "AMap.GeometryUtil"},
        "AMap.GeoJSON": {c: "AMap.GeoJSON"}
    };
    f.e.G9 = f.BuryPoint.getMethodName = function (a, b) {
        if (!this.Fg[a]) return b;
        var c;
        for (c = this.Fg[a].m && this.Fg[a].m[b]; !c && this.Fg[a].p;) {
            var d = this.Fg[a].p;
            c = this.Fg[d].m && this.Fg[d].m[b];
            a = d
        }
        c || (c = b);
        return c
    };
    f.e.add = f.BuryPoint.add = function (a, b, c) {
        var d;
        if (d = this.Fg[a] ? this.Fg[a].c : a) {
            if (b) {
                a = this.G9(a, b);
                if (!a) return;
                d += "," + a
            }
            this.CT[d] = 1;
            c && (this.WH[d] = c)
        }
    };
    f.e.ab = f.BuryPoint.addOptions = function (a, b) {
        var c = this.Fg[a].c, d, e;
        for (e in b) b.hasOwnProperty(e) && ((d = this.Fg[a].o && this.Fg[a].o[e]) || (d = e), d = c + "," + d, this.options[d] = 1);
        "AMap.Map" === a && this.rY(a, b, ["mapStyle", "lang", "renderer", "zoom"])
    };
    f.e.rY = f.BuryPoint._addOptionsValue = function (a, b, c) {
        for (var d = 0, e, g; d < c.length; d++) e = c[d], b && b[e] && (g = {}, g[e] = b[e], this.h6(a, g))
    };
    f.e.h6 = f.BuryPoint.addOptionsValue = function (a, b) {
        var c = this.Fg[a].c, d, e;
        for (e in b) b.hasOwnProperty(e) && ((d = this.Fg[a].o && this.Fg[a].o[e]) || (d = e), d = c + "," + d, this.mI[d] = b[e])
    };
    f.e.send = f.BuryPoint.send = function () {
        var a = [], b = [], c = [], d = [], e = f.e, g;
        for (g in e.CT) 1 !== e.RN[g] && a.push(g);
        for (g in e.WH) 1 !== e.SN[g] && b.push(g + "=" + e.WH[g]);
        for (g in e.options) 1 !== e.OO[g] && c.push(g);
        for (g in e.mI) 1 !== e.PO[g] && d.push(g + "=" + e.mI[g]);
        if (0 < a.length || 0 < b.length || 0 < c.length || 0 < d.length) g = ["type=f", "k=" + f.w.key, "u=" + f.w.Lm, "m=" + (f.l.Y ? 1 : 0), "pf=" + f.l.Kp, "methods=" + a.join("@"), "methodsParams=" + b.join("@"), "options=" + c.join("@"), "optionsValue=" + d.join("@")], new f.Ka.Xa(f.w.ac + "://webapi.amap.com/count?" +
            g.join("&")), e.clear(a, b, c, d);
        window.setTimeout(e.send, 1E4)
    };
    f.e.clear = f.BuryPoint.clear = function (a, b, c, d) {
        for (var e = 0; e < a.length; e++) this.RN[a[e]] = 1;
        for (e = 0; e < b.length; e++) this.SN[b[e].split("=")[0]] = 1;
        for (e = 0; e < c.length; e++) this.OO[c[e]] = 1;
        for (e = 0; e < d.length; e++) this.PO[d[e].split("=")[0]] = 1
    };
    window.setTimeout(f.e.send, 1E4);
    f.Z = function () {
    };
    f.Z.extend = f.Z.extend = function (a) {
        function b() {
        }

        function c() {
            this.C && (this.C.apply(this, arguments), this.CLASS_NAME && f.e.add(this.CLASS_NAME));
            if (!d && this.th) {
                var a = document.createElement("style");
                a.setAttribute("type", "text/css");
                this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
                this.th = this.th.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + f.w.eb + "/");
                a.styleSheet ? a.styleSheet.cssText = this.th : a.innerHTML = this.th;
                for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, g = b.childNodes.length; e <
                g; e++) if (1 === b.childNodes[e].nodeType) {
                    c = b.childNodes[e];
                    break
                }
                c ? b.insertBefore(a, c) : b.appendChild(a)
            }
            d = !0
        }

        var d = !1;
        b.prototype = this.prototype;
        var e = new b;
        e.constructor = c;
        c.prototype = e;
        for (var g in this) this.hasOwnProperty(g) && "prototype" !== g && (c[g] = this[g]);
        a.MV && (f.extend(c, a.MV), a.MV = null);
        a.ea && (f.extend.apply(null, [e].concat(a.ea)), a.ea = null);
        a.F && e.F && (a.F = f.extend({}, e.F, a.F));
        f.extend(e, a);
        a.toString && (e.toString = a.toString);
        c.Bc = this.prototype;
        return c
    };
    f.Z.gb = f.Z.include = function (a) {
        f.extend(this.prototype, a)
    };
    f.extend = function (a) {
        var b = Array.prototype.slice.call(arguments, 1), c, d, e, g;
        d = 0;
        for (e = b.length; d < e; d += 1) for (c in g = b[d] || {}, g) Object.prototype.hasOwnProperty.call(g, c) && ("function" === typeof g[c] && "function" === typeof a[c] && (g[c].ma = a[c]), a[c] = g[c]);
        return a
    };
    f.Z.en = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) {
            var c = a[b];
            if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]); else for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
        }
    };
    f.ja = {
        h: function (a, b, c, d, e) {
            if (this.Lg(a, b, c || this)) return this;
            var g = this.Zj = this.Zj || {};
            g[a] = g[a] || [];
            e ? g[a].unshift({mb: b, Bf: c || this, Rl: d}) : g[a].push({mb: b, Bf: c || this, Rl: d});
            "complete" === a && this.Aa && this.r(a);
            return this
        }, Lg: function (a, b, c) {
            var d = this.Zj;
            if (b && c) {
                if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].mb === b && d[a][e].Bf === c) return !0;
                return !1
            }
            return d && a in d && d[a] && 0 < d[a].length
        }, H: function (a, b, c) {
            if (!this.Lg(a)) return this;
            var d = this.Zj;
            if (d && d[a]) for (var e = 0; e < d[a].length; e +=
                1) if (!(d[a][e].mb !== b && "mv" !== b || c && d[a][e].Bf !== c)) {
                d[a].splice(e, 1);
                d[a].length || (d[a] = null);
                break
            }
            return this
        }, r: function (a, b) {
            if (!this.Lg(a)) return this;
            var c = {type: a};
            b || "string" !== typeof b && "number" !== typeof b && "boolean" !== typeof b ? f.a.eA(b) ? c.value = b : c = f.extend(c, b) : c.value = b;
            for (var d = [].concat(this.Zj[a]), e = 0; e < d.length; e += 1) d[e].mb && (d[e].mb.call(d[e].Bf || this, c), d[e].Rl && this.Zj[a] && this.Zj[a].splice(e, 1));
            return this
        }, uj: function (a) {
            a ? this.Zj && this.Zj[a] && (this.Zj[a] = null) : this.Zj = null;
            return this
        }
    };
    f.ja.on || (f.ja.on = f.ja.h);
    f.ja.off || (f.ja.off = f.ja.H);
    f.ja.emit || (f.ja.emit = f.ja.r);
    f.de = {
        set: function (a, b, c) {
            var d = this.gi;
            if (d && d[a]) {
                var d = d[a], e = "set" + this.pS(a);
                d[e] ? (d[e](b, c), c || this.KA(a, b)) : d.set(a, b, c)
            } else (this.yh = this.yh || {})[a] = b, c || this.KA(a, b)
        }, pS: function (a) {
            return a.charAt(0).toUpperCase() + a.substr(1)
        }, get: function (a, b, c) {
            var d, e = this.gi;
            d = "get" + this.pS(a);
            if (e && e[a]) return c = e[a], c[d] ? c[d](b) : c.get(a, b);
            if (this[d] && !c) return this[d](b);
            if (this.yh && this.yh.hasOwnProperty(a)) return this.yh[a]
        }, X: function (a, b, c) {
            this.gi || (this.gi = {});
            this.gi[a] !== b && (b.h(a, function (b) {
                this.KA(a,
                    b)
            }, this), this.gi[a] = b, c || this.KA(a))
        }, Ud: function (a, b, c) {
            for (var d = 0; d < a.length; d += 1) this.X(a[d], b, !c)
        }, ci: function (a) {
            this.gi && this.gi[a] && (this.gi[a].H(a, "mv", this), this.gi[a] = void 0)
        }, Vn: function () {
            if (this.gi) for (var a in this.gi) this.gi.hasOwnProperty(a) && this.ci(a)
        }, KA: function (a, b) {
            if (this[a + "Changed"]) this[a + "Changed"](b); else this.OQ && this.OQ();
            this.r(a, b)
        }, Dha: function (a, b, c) {
            var d = new (f.Z.extend({ea: [f.ja, f.de]}));
            d.OQ = function () {
                for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
                b &&
                (d.Vn(), c())
            };
            for (var e = 0; e < a.length; e += 1) d.X(a[e], b)
        }, Lf: function (a, b) {
            var c, d;
            for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
        }
    };
    f.w = {
        localStorage: !0,
        Yy: 500,
        Ge: !0,
        Id: {
            dark: "#202020",
            blue_night: "#090d20",
            test: "#033447",
            mapv: "#000001",
            techblue: "#000b11",
            insight: "#19212a",
            "default": "#fcf9f2"
        },
        $ha: "dark light blue darkblue fresh grey midblue".split(" "),
        key: "f8ffe058b8e6f5b05e8ff43ca4207393",
        ac: "http",
        Uc: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
        Yc: "http://restapi.amap.com",
        eb: "http://webapi.amap.com",
        CA: "http://gaode.com",
        Dp: "http://m.amap.com",
        Jv: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
        mA: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
        aJ: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
        TA: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
        VA: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
        vw: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
        Hw: "http://vector.amap.com",
        Gw: "vdata.amap.com",
        JW: "ws"
    };

    function nc(a) {
        f.Z.Yo = a.Yo;
        f.l = a.l;
        f.rA = a.rA;
        f.oba = a[7];
        a.l = null;
        f.w.eb = a[2].split(",")[0];
        f.w.Vg = a.Vg;
        f.w.Gv = a.Gv;
        var b = f.w.ac = f.w.eb.split(":")[0];
        "https" === b && (f.w.JW = "wss", f.w.Yc = f.w.Yc.replace("http", "https"), f.w.Jv = f.w.Jv.replace("http", "https"), f.w.mA = f.w.mA.replace("http", "https"), f.w.aJ = f.w.aJ.replace("http", "https"), f.w.TA = f.w.TA.replace("http", "https"), f.w.VA = f.w.VA.replace("http", "https"), f.w.vw = f.w.vw.replace("http", "https"), f.w.Hw = f.w.Hw.replace("http", "https"));
        var c = window.location.href;
        0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
        f.w.U8 = c;
        c = encodeURIComponent(c);
        f.w.Lm = c;
        f.w.lg = f.w.eb + "/theme/v1.3/markers/" + (f.l.md ? "b" : "n");
        var d = document.createElement("style");
        d.type = "text/css";
        f.w.Q7 = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
        var e = ".amap-container{cursor:" + f.w.Q7 + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
        d.styleSheet ? (b = function () {
            try {
                d.styleSheet.cssText = e
            } catch (a) {
            }
        },
            d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
        (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
        f.w.mode = Number(a[3]);
        f.w.Uc = a[1];
        f.w.key = a[0];
        f.w.Bu = a[4];
        f.w.Vc = a[5];
        f.w.W5 = a[6]
    }

    window.AMap && window.AMap.CB && window.AMap.CB.oC && window.AMap.CB.oC(nc);
    f.Xi = {Wo: Math.PI / 180, Eba: 180 / Math.PI, mG: 6378137};
    (function () {
        function a(a) {
            return "undefined" === typeof a ? "" : a
        }

        f.Pf = {
            J9: function (b) {
                b.name = a(b.name);
                var c = [b.y, b.x, b.name];
                if (f.l.Y) {
                    var d = [f.w.Dp + "/callAPP?", "src=jsapi_q"];
                    d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                    d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                    d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
                        b.y + "&lon=" + b.x));
                    d.push("&mo=" + encodeURIComponent(f.w.Dp + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                    return d.join("")
                }
                return f.w.CA + "?q=" + c.join(",") + "&src=jsapi_q"
            }, gS: function (b) {
                b.name = a(b.name);
                b.address = a(b.address);
                b.x = a(b.x);
                b.y = a(b.y);
                var c = [b.id, b.y, b.x, b.name, b.address];
                if (f.l.Y) {
                    var d = [f.w.Dp + "/callAPP?", "src=jsapi_p"];
                    d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    d.push("&android=" +
                        encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                    d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    return d.join("")
                }
                return f.w.CA + "?p=" + c.join(",") + "&src=jsapi_p"
            }, eS: function (b) {
                if (f.l.Y) {
                    var c = [f.w.Dp + "/callAPP?", "src=jsapi_detail"];
                    c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    b.name = a(b.name);
                    b.x = a(b.x);
                    b.y =
                        a(b.y);
                    c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                    c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    c.push("&mo=" + encodeURIComponent(f.w.Dp + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                    return c.join("")
                }
                return f.w.CA + "/detail/" + b.id + "?src=jsapi_detail"
            }, ZG: function (b) {
                b.sname = a(b.sname);
                "" === b.sname &&
                (b.sname = "\u8d77\u70b9");
                b.dname = a(b.dname);
                "" === b.dname && (b.dname = "\u7ec8\u70b9");
                b.mcount = a(b.mcount);
                b.my = a(b.my);
                b.mx = a(b.mx);
                b.mname = a(b.mname);
                var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
                if (f.l.Y) {
                    var d = [f.w.Dp + "/callAPP?", "src=jsapi_r_" + b.t];
                    d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    var e = b.t;
                    0 === b.t ? e = 2 : 2 === b.t && (e = 4);
                    d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
                    d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    d.push("&mo=" + encodeURIComponent(f.w.Dp +
                        "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                    return d.join("")
                }
                return f.w.CA + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
            }, Sn: function (a) {
                f.l.Y ? window.location.href = a : window.open(a)
            }
        }
    })();
    "function" !== typeof Object.keys && (Object.keys = function (a) {
        var b = [], c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    });
    f.a = {
        lB: [], Ya: 268435456, ev: {
            start: function (a) {
                a.startTime = new Date;
                a.dW = [];
                var b = (new Date).getTime();
                a.id = requestAnimationFrame(function d() {
                    var e = (new Date).getTime();
                    a.dW.push(e - b);
                    b = e;
                    a.id = requestAnimationFrame(d)
                })
            }, cancel: function (a) {
                a.id && cancelAnimationFrame(a.id)
            }, stop: function (a) {
                a.F7 = new Date - a.startTime;
                this.cancel(a);
                a.ev = Math.round(1E3 / (a.F7 / (a.dW.length + 1)))
            }
        }, Db: function (a) {
            if ("object" === typeof a && null !== a) {
                if (a.Fp || this.Tr(a, "Float32Array") || this.Tr(a, "Uint16Array")) return a;
                var b =
                    this.isArray(a) ? [] : {}, c;
                for (c in a) a.hasOwnProperty(c) && (b[c] = f.a.Db(a[c]));
                return b
            }
            return a
        }, Bk: function (a) {
            return "function" === typeof a
        }, Pv: function () {
        }, keys: function (a) {
            if ("function" === typeof Object.keys) return Object.keys(a);
            var b = [], c;
            for (c in a) a.hasOwnProperty(c) && b.push(c);
            return b
        }, map: function (a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = [];
            if (a && a.length) f.a.gf(a, function () {
                for (var e = arguments.length, g = Array(e), h = 0; h < e; h++) g[h] = arguments[h];
                d[g[1]] = b.apply(c ||
                    a, g)
            }); else return a;
            return d
        }, gf: function (a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++) ;
        }, find: function (a, b) {
            for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if ("function" === typeof b) {
                if (b.call(c, a[d], d, a)) return a[d]
            } else if (a[d] === b) return a[d];
            return null
        }, eA: function (a) {
            return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a &&
                1 === a.nodeType && "string" === typeof a.nodeName
        }, WJ: function (a, b) {
            var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM", d, e;
            "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
            var g, h, k, l, m;
            h = [];
            k = NaN;
            l = 0;
            for (m = a.length; l < m; l++) g = a[l], g = c.indexOf(g), isNaN(k) ? k = g * d : (h.push(k + g - e), k = NaN);
            return h
        }, Bca: function (a, b) {
            for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
                var g = c * e, h = g + c;
                h > b.length && (h = b.length);
                for (; g < h; g += 1) a(b[g])
            }
        },
        ZQ: function (a) {
            var b = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };
            return "string" === typeof a ? b[a.toLowerCase()] ? b[a.toLowerCase()] : a : a
        }, Cz: function (a, b, c) {
            var d, e;
            d = Math.floor(c / 2);
            e = c - d;
            d = (1 << d) - 1 << e;
            e = (1 << e) - 1;
            return [c, a & d | b & e, b & d | a & e]
        }, Dz: function (a) {
            return a ? encodeURIComponent(a) : ""
        }, Kd: function (a,
                         b, c, d) {
            c = a[b].i[c];
            if ("undefined" === typeof c) return null;
            a = a[b].s;
            if ("number" === typeof c) return a[c];
            for (; "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d);) ;
            d = c[d.toString()];
            return "number" === typeof d ? a[d] : null
        }, cV: function (a) {
            return f.a.Af("ff" + a)
        }, Af: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
            b.push((b.shift() / 255).toFixed(2));
            return "rgba(" + b.join(",") + ")"
        }, vs: function (a) {
            return f.a.lr("ff" + a)
        }, lr: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c,
                2), 16) / 255);
            b.push(b.shift());
            return b
        }, zp: function (a) {
            for (var b in a) if (a.hasOwnProperty(b)) return !1;
            return !0
        }, pk: function (a, b) {
            return 0 > b ? a : a.slice(0, b).concat(a.slice(b + 1, a.length))
        }, XF: function (a, b) {
            var c = f.a.indexOf(a, b);
            return f.a.pk(a, c)
        }, indexOf: function (a, b) {
            if (!a || !a.length) return -1;
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c += 1) if (a[c] === b) return c;
            return -1
        }, bind: function (a, b) {
            var c = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
            return function () {
                return a.apply(b,
                    c || arguments)
            }
        }, rb: function (a, b) {
            b = b || {};
            a.F = f.extend({}, a.F, b);
            return a.F
        }, zR: function () {
            return !1
        }, join: function (a, b) {
            if (a.join) return a.join(b);
            var c = [], d;
            for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
            return c.join(b)
        }, TR: function (a, b) {
            return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
        }, Fb: function () {
            var a = 0;
            return function (b) {
                b._amap_id || (a += 1, b._amap_id = a);
                return b._amap_id
            }
        }(), C8: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", Bi: Date.now ? function () {
                return Date.now()
            } :
            function () {
                return (new Date).getTime()
            }, Iha: function (a, b, c, d) {
            var e;
            if (d) {
                var g = 0, h, k = this.Bi;
                e = function () {
                    h = k();
                    if (h - g < b) return !1;
                    g = h;
                    a.apply(c, arguments)
                }
            } else {
                var l, m, n;
                n = function () {
                    l = !1;
                    m && (e.apply(c, m), m = !1)
                };
                e = function () {
                    l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
                }
            }
            return e
        }, Dd: function (a, b) {
            return Number(Number(a).toFixed(b || 0))
        }, isArray: function (a) {
            return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
        }, Tr: function (a, b) {
            return Object.prototype.toString.call(a).split(" ")[1].slice(0,
                -1).toLowerCase() === b.toLowerCase()
        }, ea: function (a, b) {
            return -1 !== this.indexOf(a, b)
        }, PV: function (a) {
            var b = 0;
            if (0 === a.length) return b;
            for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
            return b
        }, yga: function (a, b) {
            b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
            for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
            return c
        }, U7: function (a, b) {
            var c = (a + "").slice(-2), d = (b + "").slice(-2);
            a = a.slice(0, -2);
            b = b.slice(0, -2);
            var e = parseInt((d + c).slice(1)), d =
                parseInt("1" + d) / 3E3;
            a -= parseInt("1" + c) / 3E3 * (Math.ceil(e / 250) % 2 ? 1 : -1);
            b -= d * (1 < e / 500 ? 1 : -1);
            return new f.W(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
        }, OT: function (a) {
            return "undefined" !== typeof JSON && JSON.stringify ? f.a.PV(JSON.stringify(a)) : null
        }, ija: function (a, b) {
            if (b || !a.hasOwnProperty("_amap_hash")) {
                var c = f.a.OT(a);
                c && (a._amap_hash = c)
            }
            return a._amap_hash
        }, iepngFix: function (a) {
            function b() {
                for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
                d.BH = !0
            }

            this.tU || (this.tU = [], this.BH = !1);
            var c = this.tU, d = this;
            if ("img" === a.tagName.toLowerCase()) c.push(a); else {
                a = a.getElementsByTagName("*");
                for (var e = 0; e < a.length; e += 1) c.push(a[e])
            }
            window.DD_belatedPNG && this.BH ? setTimeout(function () {
                b()
            }, 100) : this.BH || f.jb.load("AMap.FixPng", b)
        }, ra: function (a) {
            if (f.a.isArray(a)) if (f.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1) a[b] = f.a.ra(a[b]); else if (b = typeof a[0], "string" === b || "number" === b) return new f.W(a[0], a[1]);
            return a
        }, Sl: function (a) {
            return f.a.isArray(a) ? new f.tc(a[0], a[1]) : a
        }
    };
    (function () {
        function a(a) {
            window.clearTimeout(a)
        }

        function b(a) {
            var b, c, d = ["webkit", "moz", "o", "ms"];
            for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
            return c
        }

        function c(a) {
            var b = +new Date, c = Math.max(0, (f.l.gh ? 50 : 20) - (b - d));
            d = b + c;
            return window.setTimeout(a, c)
        }

        var d = 0, e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
            g = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
        f.a.ec = function (a, b, c, d) {
            a = f.a.bind(a, b);
            if (c) a(); else return e.call(window, a, d)
        };
        f.a.cg =
            function (a) {
                a && g.call(window, a)
            }
    })();
    f.a.YU = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function (a) {
        var b = Date.now();
        return setTimeout(function () {
            a({
                didTimeout: !1, timeRemaining: function () {
                    return Math.max(0, 70 - (Date.now() - b))
                }
            })
        }, 0)
    };
    f.a.LQ = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function (a) {
        clearTimeout(a)
    };
    (function (a) {
        var b = 1, c = {};
        a.a.Nca = function (a, b) {
            if (c[a]) {
                var g = c[a];
                g.mw = 1;
                g.result = b;
                if (g.sj) {
                    for (var h = g.sj, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
                    g.sj = null
                }
            }
        };
        a.a.j7 = function (a) {
            c[a] = null
        };
        a.a.wea = function (a, b) {
            if (c[a]) {
                var g = c[a];
                0 < g.mw ? b(null, g.result) : (g.sj || (g.sj = []), g.sj.push(b))
            } else b(null, a)
        };
        a.a.RG = function (d, e) {
            var g = navigator.geolocation;
            if (!a.l.cA || "https:" === document.location.protocol) return d(null, g);
            var h;
            e && e.xea && (h = "f" + b++, c[h] = {mw: 0});
            var k = null, l = !1;
            e && e.timeout && (k = setTimeout(function () {
                k =
                    void 0;
                d({code: 3, info: "TIME_OUT", message: "Get geolocation time out."});
                l = !0
            }, e.timeout));
            g.getCurrentPosition(function () {
                l || (clearTimeout(k), k = void 0, d(null, g))
            }, function (b) {
                l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.jb.load("AMap.GeoRemoteLoc", function () {
                    d(null, a.aX, h)
                }) : d(null, g))
            }, {timeout: 1E3});
            return h
        }
    })(f);
    (function (a) {
        var b = a.Z.extend({
            ea: [a.ja], C: function () {
            }
        });
        a.im = new b
    })(f);
    (function (a) {
        var b = a.Z.extend({
            ea: [a.ja], C: function () {
                this.L0()
            }, L0: function () {
                a.im && a.im.h("vecTileParsed.buildings", this.s0, this)
            }, YS: function (a) {
                return a.map.tN
            }, VR: function (a) {
                return this.YS(a) ? a.map.CD : null
            }, Kca: function (a, b) {
                if (b) {
                    var e = b.map;
                    e && (e.CD ? e.CD.toString() : "") !== (a ? a.toString() : "") && (e.CD = a || [], e.set("display", 0))
                }
            }, tV: function (a, b) {
                if (b) {
                    var e = b.map;
                    e && e.tN !== a && (e.tN = a, e.set("display", 0))
                }
            }, qfa: function () {
            }, pN: function (a, b) {
                if (a) for (var e = 0, g = a.length; e < g; e++) a[e] && 0 > b.indexOf(a[e]) &&
                b.push(a[e])
            }, CR: function (b) {
                if (!b) return null;
                b = b.map.Wa;
                for (var d = 0, e = b.length; d < e; d++) if (a.B.Zi && b[d] instanceof a.B.Zi && b[d].Oa && b[d].Oa.length && (-1 !== b[d].Oa.indexOf("building") || -1 !== b[d].Oa.indexOf("poilabel"))) return b[d];
                return null
            }, Y8: function (a) {
                if (a = this.CR(a)) {
                    if (a = a.oa.get("tiles", null, !0)) a = a[0]; else return null;
                    if (!a || !a.length) return null;
                    for (var b = [], e = 0, g = a.length; e < g; e++) {
                        var h = a[e];
                        h.Zf && h.Zf.fe && this.pN(h.Zf.fe, b)
                    }
                    return b
                }
            }, s0: function (a) {
                if (a.qw && a.qw.Zf && (a = a.qw.Zf.fe)) {
                    var b =
                        [];
                    this.pN(a, b);
                    this.r("vecTileParsed.builds.found", {HQ: b})
                }
            }
        });
        a.sg = new b
    })(f);
    (function (a) {
        function b() {
            return {
                checkup: function () {
                    var a = Array.prototype.slice.call(arguments, 0);
                    a.pop()(null, a)
                }
            }
        }

        function c(a) {
            return {
                injectCode: function (b, c) {
                    var d = null, e = null;
                    try {
                        d = (new Function("self", b))(a)
                    } catch (g) {
                        e = g.toString()
                    }
                    c(e, d)
                }
            }
        }

        function d(a) {
            function b(c, d) {
                function e(a, b, c) {
                    a = {Hs: Date.now(), zs: h, error: a, result: b};
                    if (c) for (var g in c) c.hasOwnProperty(g) && (a[g] = c[g]);
                    d(a)
                }

                var g = c.kH, h = c.zs, l = c.QF, m = c.Lu, w = c.s6 || [], s = a._wkHandlers[g];
                s ? s[l] ? m ? s[l].apply(s, w.concat(e)) : e(null, s[l].apply(s,
                    w)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + g)
            }

            var c = [];
            a.Vy = function (a) {
                c.push.apply(c, a)
            };
            a.addEventListener("message", function (d) {
                function e(b) {
                    if (x) {
                        x.push(b);
                        var d = !!b.raa;
                        d || t++;
                        if (t > h) console.error("Resp len wrong!!"); else if (b = t === h, d || b) {
                            d = 1 < x.length ? {oca: x} : x[0];
                            d.Hs = Date.now();
                            d.Xia = u;
                            if (c.length) {
                                try {
                                    a.postMessage(d, c)
                                } catch (g) {
                                    a.postMessage(d), console.error(g)
                                }
                                c.length = 0
                            } else a.postMessage(d);
                            x.length = 0;
                            b && (e = x = null)
                        }
                    } else console.error("Seemed callback already sent!!")
                }

                var g =
                    d.data;
                d = g.mca || [g];
                for (var h = d.length, t = 0, u = Date.now() - g.Hs, x = [], g = 0; g < h; g++) b(d[g], e)
            }, !1)
        }

        function e(d, h) {
            this.F = a.extend({batchSend: !0, lazy: !1, libPolyfills: null}, h);
            this.er = [];
            this.vt = this.F.clientId || "w" + g++;
            this.F.onReady && this.hI(this.F.onReady);
            this.yx = this.F_();
            if ("function" === typeof d) {
                var m = {};
                m[this.yx] = d;
                d = m
            }
            d[e.bH] = c;
            d[this.DM()] = b;
            this.Nx = d;
            this.bP();
            this.F.lazy || this.nr();
            a.Vz || !1 === this.F.hostWorker || (a.Vz = this)
        }

        var g = 1, h = 1;
        a.extend(e, {
            bH: "_g_", Xca: function (a) {
                if (!a.mY) {
                    var b = [];
                    a.addEventListener("message", function (a) {
                        a = a.data;
                        a = a.oca || [a];
                        for (var c = 0, d = a.length; c < d; c++) {
                            var e = a[c], g;
                            a:{
                                g = e.zs;
                                for (var h = !!e.raa, k = 0, x = b.length; k < x; k++) {
                                    var w = b[k];
                                    if (g === w.zs) {
                                        h || b.splice(k, 1);
                                        g = w;
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            g ? g.Lu.call(null, e.error, e.result, !0) : console.warn("Receive worker msg: ", e)
                        }
                    }, !1);
                    a.aY = b;
                    a.mY = !0
                }
            }
        });
        a.extend(e.prototype, {
            F_: function () {
                return "_def_" + this.vt
            }, DM: function () {
                return "_cln_" + this.vt
            }, z4: function () {
                var a = Array.prototype.slice.call(arguments, 0);
                this.eP = a;
                if (this.$q) {
                    for (var b =
                        0, c = this.$q.length; b < c; b++) this.$q[b].apply(null, a);
                    this.$q.length = 0
                }
            }, Vy: function (a) {
                this.r4 && this.er.push.apply(this.er, a)
            }, hI: function (a) {
                this.eP ? a.apply(null, this.eP) : (this.$q || (this.$q = []), this.$q.push(a))
            }, nr: function (b) {
                var c = this;
                if (!c.IL) {
                    c.IL = !0;
                    var d = function (d, e) {
                        d && a.l.fT && console.warn(d);
                        c.z4.call(c, d, e);
                        b && b(d, e)
                    };
                    a.l.fT ? this.q4(function (a, b) {
                        b ? this.S0(b, function (a, c) {
                            a ? d(a) : (this.ly(c), this.iF = c, this.er.length = 0, this.Yx = null, d(null, {
                                B6: b,
                                Dea: c
                            }))
                        }) : d("Worker start failed!")
                    }) : d("Worker not supported!")
                }
            },
            NS: function (a, b, c) {
                var d = this;
                a = a || d.yx;
                var g = {};
                d.oL(a, b, g);
                d.ly(null, g);
                d.hI(function (h) {
                    h ? c(h) : d.iF ? (h = d.JM(b, d.oD(d.vt, a)), d.iF.sendMessage(e.bH + ":injectCode", h, function (a, b) {
                        a || d.ly(d.iF, g);
                        c(a, b)
                    })) : c("Worker msger missing!!")
                })
            }, oD: function (a, b) {
                if (!a || !b) throw Error("clientId or ns missing!!");
                return a + "_" + b
            }, X_: function (a, b, c) {
                function d() {
                    var b = Array.prototype.slice.call(arguments, 0);
                    c.sendMessage.apply(c, [a].concat(b))
                }

                var e = this;
                if (!c) return function () {
                    e.IL || "utilCall" === e.F.lazy && e.nr();
                    b.apply(this.Yx, arguments)
                };
                d._proxy2Worker = !0;
                return d
            }, bP: function () {
                this.ly(null)
            }, bZ: function (a) {
                var b = {}, c;
                for (c in a) a.hasOwnProperty(c) && this.oL(c, a[c], b);
                return b
            }, oL: function (a, b, c) {
                b = b.call(null, !1);
                for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.yx && (c[d] = b[d]))
            }, ly: function (a, b) {
                b || (this.Yx || (this.Yx = this.bZ(this.Nx)), b = this.Yx);
                for (var c in b) if (b.hasOwnProperty(c)) {
                    var d = b[c];
                    "function" === typeof d && (this[c] = this.X_(c, d, a))
                }
                this.r4 = !!a
            }, JM: function (a, b) {
                var c = a.toString(),
                    d, c = c.replace(/^function([^\(]*)\(/, function () {
                        d = "_prep_h" + h++;
                        return "function " + d + "("
                    });
                return d ? c + ';if(self._wkHandlers["' + b + '"]){ console.log(self._wkHandlers["' + b + '"]); throw new Error("' + b + ' already exists!"); }self._wkHandlers["' + b + '"]=' + d + ".call(null,self)||{};" + d + "=null;" : (console.error("No function match!!"), !1)
            }, q4: function (a) {
                var b = this.vt, c = [], d;
                for (d in this.Nx) if (this.Nx.hasOwnProperty(d)) {
                    var g = this.JM(this.Nx[d], this.oD(b, d));
                    g && c.push(g)
                }
                b = this.F.libPolyfills || [];
                d = 0;
                for (g = b.length; d <
                g; d++) b[d] = "(" + b[d].toString() + ")(self);";
                var h = b.join(";\n") + ";\n" + c.join(";\n"), c = this.F.hostWorker, r = this;
                c && c !== r ? c.hI(function (b, c) {
                    b ? a.call(r, b) : c.Dea.sendMessage(e.bH + ":injectCode", h, function (b) {
                        b ? a.call(r, b) : a.call(r, null, c.B6)
                    })
                }) : setTimeout(function () {
                    a.call(r, null, r.A5(h))
                }, 0)
            }, A5: function (a) {
                var b = {type: "text/javascript; charset=utf-8"};
                a = "self._wkHandlers={};(" + d.toString() + ")(self);\n" + a;
                var c;
                try {
                    var e = window.URL || window.webkitURL, g = e.createObjectURL(new Blob([a], b));
                    c = new Worker(g);
                    setTimeout(function () {
                        e.revokeObjectURL(g);
                        g = null
                    }, 3E3)
                } catch (h) {
                    console.error(h);
                    return
                }
                return c
            }, OZ: function (b) {
                var c = 1, d = b.aY, e = this, g = !!e.F.batchSend;
                return function (h) {
                    var r = Array.prototype.slice.call(arguments, 1),
                        t = "function" === typeof r[r.length - 1] ? r.pop() : null, u = e.vt, x = h.split(":"),
                        w = e.yx;
                    1 < x.length && (h = x[1], w = x[0]);
                    r = {Hs: a.a.Bi(), kH: e.oD(u, w), Lu: !!t, zs: u + "_" + c++, QF: h, s6: r};
                    t && d.push({QF: r.QF, kH: r.kH, Hs: r.Hs, zs: r.zs, Lu: t});
                    g ? e.FY(b, r) : e.Yq(b, r)
                }
            }, Yq: function (a, b) {
                if (this.er.length) {
                    try {
                        a.postMessage(b,
                            this.er)
                    } catch (c) {
                        a.postMessage(b), console.error(c)
                    }
                    this.er.length = 0
                } else a.postMessage(b)
            }, FY: function (b, c) {
                b.eE || (b.eE = []);
                b.eE.push(c);
                if (!b.$O) {
                    var d = this;
                    b.$O = setTimeout(function () {
                        b.$O = null;
                        var c = b.eE;
                        c.length && (d.Yq(b, 1 === c.length ? c[0] : {Hs: a.a.Bi(), mca: c}), c.length = 0)
                    }, 0)
                }
            }, s5: function (a) {
                var b = this;
                a.addEventListener("error", function (a) {
                    console.error(a);
                    b.bP(null)
                }, !1);
                e.Xca(a)
            }, S0: function (a, b) {
                var c = this;
                c.s5(a);
                var d = this.OZ(a);
                if (e.yZ) b.call(c, null, {sendMessage: d}); else {
                    e.yZ = !0;
                    var g =
                        [c.DM() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function (a, e) {
                            var h = !0;
                            if (a || !e || e.length !== g.length - 2) h = !1; else for (var k = 0, x = e.length; k < x; k++) if (e[k] !== g[k + 1]) {
                                h = !1;
                                break
                            }
                            h ? b.call(c, null, {sendMessage: d}) : (console.error(a), b.call(c, "Self checkup failed!!"))
                        }];
                    d.apply(c, g)
                }
            }
        });
        a.lt = e
    })(f);
    (function () {
        if (!f.od) {
            f.od = {Hd: {}, wv: {}};
            var a = f.od, b = f.od.Hd, c = f.a, d = f.w;
            b.start = function (b) {
                a.wv[b.id] = {
                    J: b.J, time: {MS: c.Bi()}, R6: function () {
                        return c.Bi() - this.time.MS
                    }
                }
            };
            b.end = function (b) {
                var d = a.wv[b.id], e = d.time, d = c.bind(d.R6, d), l = b.index, m = b.key;
                "function" !== typeof b.Vc && (b.Vc = function () {
                });
                if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d()); else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d(); else return b.Vc(Error("Duplicate Invoke"));
                b.Vc(null)
            };
            b.push = function (b) {
                var c = a.wv[b.id].time,
                    d = b.key, e = b.gm;
                "function" !== typeof b.Vc && (b.Vc = function () {
                });
                if (void 0 === c[d]) c[d] = e; else return b.Vc(Error("Duplicate Invoke"));
                b.Vc(null)
            };
            b.send = function (b) {
                var c = d.ac + "://webapi.amap.com/count?", k = f.extend(e({J: a.wv[b.id].J}), b.params || {}), l = f.a;
                b.params && b.params.rs && !b.params.type && (b = a.wv[b.id].time, delete b.MS, k = f.extend(k, b));
                b = [];
                for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
                b.push("jl=" + (d.Gv ? 1 : 0));
                if (l.Tr(window.performance, "performance") &&
                    l.Tr(window.performance.getEntriesByType, "function")) {
                    var n = 0, p = ["webapi.amap.com", "100.69.169.127", "localhost"], q = ["/maps", "/css"];
                    l.gf(window.performance.getEntriesByType("resource"), function (a) {
                        var b = void 0, c = void 0;
                        a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
                        a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
                        b && c && l.ea(p, b) && l.ea(q, c) && (n += parseInt(a.responseEnd - a.startTime))
                    });
                    0 !== n && b.push("sd=" + n)
                }
                new f.Ka.Xa(c + b.join("&"))
            };
            var e = function (a) {
                var b = f.l;
                a = f.g.MR(a.J);
                return {
                    type: "q",
                    resolution: a.width +
                        "*" + a.height,
                    k: d.key,
                    u: d.Lm,
                    iw: b.Ef ? 1 : 0,
                    cw: b.KQ ? 1 : 0,
                    gc: b.cH,
                    m: b.Y ? 1 : 0,
                    cv: b.kz ? 1 : 0,
                    pf: b.Kp,
                    dpr: window.devicePixelRatio,
                    screenwidth: screen.width,
                    scale: b.EB || 0,
                    detect: b.ga ? 1 : 0,
                    v: d.Bu
                }
            }
        }
    })();
    f.g = {
        get: function (a) {
            return "string" === typeof a ? document.getElementById(a) : a
        }, Lz: function (a) {
            if (!a) return [0, 0];
            var b = a.clientWidth, c = a.clientHeight;
            b && c || !a.childNodes[0] || (b = b || a.childNodes[0].clientWidth, c = c || a.childNodes[0].clientHeight);
            window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
            return [b, c]
        }, Oha: function (a, b) {
            var c = document.head || document.getElementsByTagName("head")[0];
            if (c) {
                var d = document.createElement("link");
                d.setAttribute("rel", "stylesheet");
                d.setAttribute("type", "text/css");
                d.setAttribute("href", a);
                b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
            } else document.write("<link rel='stylesheet' href='" + a + "'/>")
        }, Kd: function (a, b) {
            var c = a.style[b];
            !c && a.currentStyle && (c = a.currentStyle[b]);
            c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
            c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
            c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
            return "auto" === c ? null : c
        }, Tz: function (a) {
            if (a) return new f.tc(a.clientWidth ||
                document.body.clientWidth, a.clientHeight || (f.l.pn ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
        }, MR: function (a) {
            return new f.tc(a.clientWidth, a.clientHeight)
        }, aH: function (a) {
            var b = 0, c = 0, d = a, e = document.body, g = document.documentElement, h, k = f.l.up;
            do {
                b += d.offsetTop || 0;
                c += d.offsetLeft || 0;
                b += parseInt(f.g.Kd(d, "borderTopWidth"), 10) || 0;
                c += parseInt(f.g.Kd(d, "borderLeftWidth"), 10) || 0;
                h = f.g.Kd(d, "position");
                if (d.offsetParent ===
                    e && "absolute" === h) break;
                if ("fixed" === h) {
                    b += e.scrollTop || g.scrollTop || 0;
                    c += e.scrollLeft || g.scrollLeft || 0;
                    break
                }
                d = d.offsetParent
            } while (d);
            d = a;
            do {
                if (d === e) break;
                b -= d.scrollTop || 0;
                c -= d.scrollLeft || 0;
                f.g.h8() || !f.l.EW && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== f.g.Kd(d, "overflow-y") && "hidden" !== f.g.Kd(d, "overflow") && (c += 17));
                d = d.parentNode
            } while (d);
            return new f.I(c, b)
        }, h8: function () {
            f.g.c_ || (f.g.c_ = !0, f.g.b_ = "ltr" === f.g.Kd(document.body, "direction"));
            return f.g.b_
        }, create: function (a, b, c) {
            a = document.createElement(a);
            c && (a.className = c);
            b && b.appendChild(a);
            return a
        }, nR: function () {
            document.selection && document.selection.empty && document.selection.empty();
            this.A3 || (this.A3 = document.onselectstart, document.onselectstart = f.a.zR)
        }, tR: function () {
        }, Ada: function (a, b, c) {
            c ? this.za(a, b) : this.Ha(a, b)
        }, vk: function (a, b) {
            if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        }, za: function (a, b) {
            a && b && !f.g.vk(a, b) && (a.className += (a.className ? " " : "") + b)
        }, Eca: function (a, b) {
            a && (a.className = b || "")
        }, Ha: function (a,
                         b) {
            function c(a, c) {
                return c === b ? "" : a
            }

            a && b && (a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
        }, aS: function (a, b) {
            return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
        }, Zl: function (a, b) {
            if (a.style) if ("opacity" in a.style) a.style.opacity = b; else if ("filter" in a.style) {
                var c = Math.round(100 * b);
                a.style.filter = "";
                100 !== c && (a.style.filter =
                    " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
            }
        }, yJ: function (a) {
            for (var b = document.documentElement.style, c = 0; c < a.length; c += 1) if (a[c] in b) return a[c];
            return !1
        }, nS: function (a) {
            var b = f.l.FW;
            return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
        }, hha: function (a, b) {
            return f.g.nS(b.add(b.ed(-1 * a))) + (" scale(" + a + ") ")
        }, eja: function (a, b, c) {
            a.wg = b;
            !c && f.l.Zy ? (b = f.g.nS(b), c = a.style[f.g.Ke].split("rotate"), 1 < c.length ? (c[0] = b, a.style[f.g.Ke] = c.join("rotate")) : a.style[f.g.Ke] = b, f.l.FT &&
            (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
        }, ge: function (a) {
            a.wg || (a.wg = a.style.left ? new f.I(parseInt(a.style.left), parseInt(a.style.top)) : new f.I(0, 0));
            return a.wg
        }, cja: function (a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
        }, qV: function (a, b) {
            ";" !== b[b.length - 1] && (b += ";");
            return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
        }, Da: function (a, b) {
            a = a instanceof Array ? a : [a];
            for (var c =
                0; c < a.length; c += 1) for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
            return this
        }, bw: function (a) {
            for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
        }, remove: function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, rotate: function (a, b, c) {
            var d = f.g.Ke;
            c = c || {x: a.clientWidth / 2, y: a.clientHeight / 2};
            d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[f.g.Tn[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()",
            0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
        }, kS: function (a, b, c) {
            var d = f.g.Ke;
            c = c || {x: a.clientWidth / 2, y: a.clientHeight / 2};
            return d ? f.g.Tn[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (f.g.Tn[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
        }, Nk: function (a, b, c) {
            a.width = b;
            a.height = c
        }, getElementsByClassName: function (a, b, c) {
            b = b || "*";
            c = c || document;
            if (c.getElementsByClassName) return c.getElementsByClassName(a);
            b = c.getElementsByTagName(b);
            a = RegExp("(^|\\s)" +
                a + "(\\s|$)");
            c = [];
            for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
            return c
        }, fillText: function (a, b) {
            if (a) return void 0 !== a.textContent ? a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
        }
    };
    (function () {
        var a = f.g.yJ(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), b;
        f.extend(f.g, {
            nR: function () {
                f.A.h(window, "selectstart", f.A.preventDefault);
                if (a) {
                    var c = document.documentElement.style;
                    "none" !== c[a] && (b = c[a], c[a] = "none")
                }
            }, tR: function () {
                f.A.H(window, "selectstart", f.A.preventDefault);
                a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
            }, b8: function () {
                f.A.h(window, "dragstart", f.A.preventDefault)
            }, E8: function () {
                f.A.H(window, "dragstart", f.A.preventDefault)
            }
        })
    })();
    f.g.Ke = f.g.yJ(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
    f.g.Tn = {
        transform: "transform",
        WebkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        MozTransform: "-moz-transform",
        msTransform: "-ms-transform"
    };
    f.g.$w = f.g.yJ(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    f.g.efa = "webkitTransition" === f.g.$w || "OTransition" === f.g.$w ? f.g.$w + "End" : "transitionend";
    f.A = {
        h: function (a, b, c, d) {
            function e(b) {
                b = b || window.event;
                b.target = b.target || b.srcElement;
                return c.call(d || a, b, k)
            }

            var g = f.a.Fb(a) + "_" + f.a.Fb(c) + "_" + f.a.Fb(d || a), h = b + g;
            if (a[h]) return this;
            var k = b;
            f.l.xG && "mousewheel" === b && (b = "DOMMouseScroll");
            if (f.l.pn && ("mouseover" === b || "mouseout" === b)) {
                var l = e;
                b = "mouseover" === b ? "mouseenter" : "mouseleave";
                e = function (a) {
                    l(a)
                }
            }
            if (f.l.uU && 0 === b.indexOf("touch")) return a[h] = e, this.d6(a, b, e, g);
            f.l.ke && "dblclick" === b && this.a6 && this.a6(a, e, g);
            "addEventListener" in a ? a.addEventListener(b,
                e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
            a[h] = e;
            return this
        }, Rl: function (a, b, c, d) {
            var e = this;
            this.h(a, b, function h(k) {
                e.H(a, b, h, d);
                return c.call(d || a, k || window.event, b)
            }, d)
        }, H: function (a, b, c, d) {
            c = f.a.Fb(a) + "_" + f.a.Fb(c) + "_" + f.a.Fb(d || a);
            d = b + c;
            var e = a[d];
            f.l.xG && "mousewheel" === b && (b = "DOMMouseScroll");
            !f.l.pn || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
            f.l.uU && -1 < b.indexOf("touch") ? this.Pba(a, b, c) : f.l.ke && "dblclick" === b && this.Lba ? this.Lba(a, c) :
                "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
            a[d] = null;
            return this
        }, gja: function (a, b) {
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b.target.dispatchEvent(c)
        }, stopPropagation: function (a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        }, ida: function (a) {
            var b = f.A.stopPropagation;
            f.l.ke && (f.A.h(a,
                "touchstart", b, this), f.A.h(a, "touchmove", b, this), f.A.h(a, "touchend", b, this));
            f.l.Y || (f.A.h(a, "mousedown", b, this), f.A.h(a, "mouseup", b, this), f.A.h(a, "mousemove", b, this));
            f.l.BI && (f.A.h(a, "pointerdown", b, this), f.A.h(a, "pointerup", b, this), f.A.h(a, "pointermove", b, this));
            f.l.HT && (f.A.h(a, "MSPointerDown", b, this), f.A.h(a, "MSPointerUp", b, this), f.A.h(a, "MSPointerMove", b, this))
        }, preventDefault: function (a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            return this
        }, stop: function (a) {
            return f.A.preventDefault(a).stopPropagation(a)
        },
        Dca: function (a) {
            return a && a.getBoundingClientRect ? (a.iC = a.getBoundingClientRect(), a.$K = [a.clientLeft, a.clientTop], !0) : !1
        }, bea: function (a) {
            a.iC && (a.iC = null, a.$K = null)
        }, H8: function (a, b) {
            var c = b.iC || b.getBoundingClientRect(), d = b.$K || [b.clientLeft, b.clientTop];
            return new f.I(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
        }, yi: function (a, b) {
            if (b && b.getBoundingClientRect) return this.H8(a, b);
            var c = document.body, d = document.documentElement,
                c = new f.I(f.l.ke ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), f.l.ke ?
                    a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
            return b ? c.Sa(f.g.aH(b)) : c
        }, aT: function (a) {
            return 1 === a.which || 0 === a.button || 1 === a.button
        }
    };
    f.extend(f.A, {
        dE: [], VN: !1, d6: function (a, b, c, d) {
            switch (b) {
                case "touchstart":
                    return this.g6(a, b, c, d);
                case "touchend":
                    return this.e6(a, b, c, d);
                case "touchmove":
                    return this.f6(a, b, c, d)
            }
        }, tk: function (a) {
            if (f.l.BI) return a;
            switch (a) {
                case "pointerdown":
                    return "MSPointerDown";
                case "pointerup":
                    return "MSPointerUp";
                case "pointercancel":
                    return "MSPointerCancel";
                case "pointermove":
                    return "MSPointerMove"
            }
        }, g6: function (a, b, c, d) {
            function e(a) {
                for (var b = !1, d = 0; d < g.length; d += 1) if (g[d].pointerId === a.pointerId) {
                    b = !0;
                    break
                }
                b ||
                g.push(a);
                a.touches = g.slice();
                a.changedTouches = [a];
                c(a)
            }

            var g = this.dE;
            a["_amap_touchstart" + d] = e;
            a.addEventListener(this.tk("pointerdown"), e, !1);
            this.VN || (a = function (a) {
                for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
                    g.splice(b, 1);
                    break
                }
            }, document.documentElement.addEventListener(this.tk("pointerup"), a, !1), document.documentElement.addEventListener(this.tk("pointercancel"), a, !1), this.VN = !0);
            return this
        }, f6: function (a, b, c, d) {
            function e(a) {
                if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE || 0 !== a.buttons) {
                    for (var b =
                        0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
                        g[b] = a;
                        break
                    }
                    a.touches = g.slice();
                    a.changedTouches = [a];
                    c(a)
                }
            }

            var g = this.dE;
            a["_amap_touchmove" + d] = e;
            a.addEventListener(this.tk("pointermove"), e, !1);
            return this
        }, e6: function (a, b, c, d) {
            function e(a) {
                for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
                    g.splice(b, 1);
                    break
                }
                a.touches = g.slice();
                a.changedTouches = [a];
                c(a)
            }

            var g = this.dE;
            a["_amap_touchend" + d] = e;
            a.addEventListener(this.tk("pointerup"), e, !1);
            a.addEventListener(this.tk("pointercancel"),
                e, !1);
            return this
        }, Pba: function (a, b, c) {
            c = a["_amap_" + b + c];
            switch (b) {
                case "touchstart":
                    a.removeEventListener(this.tk("pointerdown"), c, !1);
                    break;
                case "touchmove":
                    a.removeEventListener(this.tk("pointermove"), c, !1);
                    break;
                case "touchend":
                    a.removeEventListener(this.tk("pointerup"), c, !1), a.removeEventListener(this.tk("pointercancel"), c, !1)
            }
            return this
        }
    });
    (function () {
        function a(a) {
            var b = a.target || a.srcElement;
            b.iL && g(b.iL);
            b.iL = e(function () {
                var c = b.Xk;
                if (c && c.Wk) for (var d = 0; d < c.Wk.length; d += 1) c.Wk[d].call(c, a)
            })
        }

        function b() {
            var b = this.contentDocument.defaultView;
            b.Xk = this.kY;
            b.addEventListener("resize", a);
            a.call(b, {target: b})
        }

        var c = document.attachEvent, d = navigator.userAgent.match(/(Trident|Edge)/), e = f.a.ec, g = f.a.cg;
        f.extend(f.A, {
            i6: function (e, g) {
                if (!e.Wk) if (e.Wk = [], c) e.Xk = e, e.attachEvent("onresize", a); else {
                    "static" === window.getComputedStyle(e).position &&
                    (e.style.position = "relative");
                    var l = e.Xk = document.createElement("object");
                    l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                    l.kY = e;
                    l.onload = b;
                    l.type = "text/html";
                    d && e.appendChild(l);
                    l.data = "about:blank";
                    d || e.appendChild(l)
                }
                e.Wk.push(g)
            }, Fia: function (b, d) {
                b.Wk.splice(b.Wk.indexOf(d), 1);
                b.Wk.length || (c ? b.detachEvent("onresize", a) : (b.Xk.contentDocument.defaultView.removeEventListener("resize",
                    a), b.Xk = !b.removeChild(b.Xk)))
            }, k7: function (a) {
                a.Wk = null;
                if (a.Xk) {
                    var b = a.Xk;
                    b.parentNode === a && b.parentNode.removeChild(b);
                    a.Xk = null
                }
            }
        })
    })();
    var oc;
    f.jb = {
        gaa: f.w.eb + "/maps", Yo: f.Z.Yo, QH: 0, ms: [], Uo: {}, kg: function (a, b) {
            function c() {
                d += 1;
                d === e.length && b && b()
            }

            a.length || b();
            for (var d = 0, e = [], g = 0; g < a.length; g += 1) {
                var h = this.Yo[a[g]];
                if (h) for (var k = 0; k < h.length; k += 1) e.push(h[k]);
                e.push(a[g])
            }
            for (g = 0; g < e.length; g += 1) this.uG(e[g], c)
        }, Av: function (a) {
            for (var b = 0; b < a.length; b += 1) if (1 !== this.uz(a[b]).status) return !1;
            return !0
        }, uG: function (a, b) {
            var c = this.uz(a);
            if (1 === c.status) b && b(); else {
                b && c.pr.push(b);
                try {
                    if (f.l.Kj && window.localStorage) {
                        var d = window.localStorage["_AMap_" + a];
                        d && (d = JSON.parse(d), d.version === f.w.Vg ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                    }
                } catch (e) {
                }
                if (0 === c.status) {
                    this.Aba(a);
                    var g = this;
                    g.QH || (g.QH = 1, window.setTimeout(function () {
                        g.QH = 0;
                        var a = g.gaa + "/modules?v=" + f.w.Bu + "&key=" + f.w.key + "&m=" + g.ms.join(",") + "&vrs=" + f.w.Vg;
                        f.jb.IC(g.ms.join(","));
                        g.ms = [];
                        c.$A = g.N$(a)
                    }, 1));
                    c.status = -1
                }
            }
        }, IC: function (a) {
            a = f.w.Yc + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + f.w.key, "m=" + a].join("&");
            new f.Ka.Xa(a, {callback: "callback"})
        }, load: function (a, b) {
            var c = this.Yo[a];
            if (c) {
                for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
                d.push(a);
                for (var g = 0, c = function () {
                    g += 1;
                    g === d.length && b && b()
                }, e = 0; e < d.length; e += 1) this.uG(d[e], c)
            } else this.uG(a, b)
        }, Aba: function (a) {
            for (var b = 0; b < this.ms.length; b += 1) if (this.ms[b] === a) return;
            this.ms.push(a)
        }, Qj: function (a, b) {
            var c = this.uz(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.status = 1;
            for (var e = 0, g = c.pr.length; e < g; e += 1) c.pr[e]();
            c.pr = []
        }, iga: function (a, b) {
            var c = this;
            c.timeout =
                setTimeout(function () {
                    1 !== c.Uo[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
                }, 5E3)
        }, uz: function (a) {
            this.Uo[a] || (this.Uo[a] = {}, this.Uo[a].status = 0, this.Uo[a].pr = []);
            return this.Uo[a]
        }, remove: function (a) {
            this.Uo[a] = null
        }, N$: function (a) {
            f.w.mode && (a += "&mode=" + f.w.mode);
            var b = document.createElement("script");
            b.charset = "utf-8";
            a && 0 === a.indexOf(f.w.eb) && (b.crossOrigin = "Anonymous");
            b.src = a;
            document.body.appendChild(b);
            return b
        }
    };
    window._jsload_ = function (a, b, c) {
        var d = f.jb.uz(a);
        d.$A && 0 <= f.a.indexOf(document.body.childNodes, d.$A) && document.body.removeChild(d.$A);
        d.$A = null;
        try {
            if (!c && window.localStorage && b && "" !== b && f.l.Kj) {
                var e = window.localStorage["_AMap_" + a], e = e || "{}", e = JSON.parse(e);
                e.version !== f.w.Vg || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: f.w.Vg,
                    script: b
                })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: f.w.Vg,
                    script: b,
                    css: e.css
                }))
            }
        } catch (g) {
        }
        f.jb.Qj(a, b)
    };
    window._cssload_ = function (a, b, c) {
        try {
            !c && window.localStorage && b && "" !== b && f.l.Kj && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                css: b,
                version: f.w.Vg
            }))
        } catch (d) {
        }
        var e = document.createElement("style");
        e.type = "text/css";
        -1 === f.w.eb.indexOf("webapi.amap.com") && (b = b.replace(eval("/webapi.amap.com/gi"), f.w.eb.split("://")[1]));
        "https" === f.w.ac && (b = b.replace(eval("/http:/gi"), "https:"));
        e.styleSheet ? (a = function () {
                try {
                    e.styleSheet.cssText = b
                } catch (a) {
                }
            }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) :
            e.appendChild(document.createTextNode(b));
        a = document.head || document.getElementsByTagName("head")[0];
        2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
    };
    (function (a) {
        var b = f.l;
        if (!f.indexedDB && b.He) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
                d = a.IDBKeyRange || a.Gja || a.Wha || a.Vha;
            if (c) {
                var e = f.a, g = null;
                a = "amap-jsapi" + (a.Sea ? "-debug" : "");
                var h = f.extend({}, f.ja), k;
                try {
                    k = c.open(a), k.onsuccess = function () {
                        g = this.result;
                        h.r("dbReady", {status: "success"})
                    }, k.onerror = function () {
                        h.r("dbReady", {status: "error"})
                    }, k.onblocked = function () {
                        h.r("dbReady", {status: "blocked"})
                    }, k.onupgradeneeded = function (a) {
                        a.currentTarget.result.createObjectStore("tile",
                            {keyPath: "tileKey"})
                    }
                } catch (l) {
                    b.He = !1
                } finally {
                    if (!b.He) return
                }
                var b = function (a) {
                    return function () {
                        try {
                            return a.apply(this, arguments)
                        } catch (b) {
                            var c = arguments[arguments.length - 1];
                            "function" === typeof c && setTimeout(function () {
                                c({code: 4})
                            }, 1)
                        }
                    }
                }, m = b(function (a, b) {
                    return null === g ? (setTimeout(function () {
                        b && b({code: 3})
                    }, 1), null) : g.transaction("tile", a).objectStore("tile")
                }), n = function (a, b) {
                    for (var c = -1, d = 0, e = b.length; d < e; d++) if (b[d] > a) {
                        c = d;
                        break
                    }
                    return c
                };
                f.indexedDB = {
                    Cu: b(function (a, b) {
                        g ? "function" ===
                            typeof a && a() : h.h("dbReady", function (c) {
                            "success" === c.status ? "function" === typeof a && a() : "function" === typeof b && b({
                                code: 3,
                                status: status
                            })
                        })
                    }), count: b(function (a) {
                        var b = this, c = arguments;
                        this.Cu(function () {
                            b.IC.apply(b, c)
                        }, a)
                    }), IC: b(function (a) {
                        var b = m("readonly", a).count();
                        b.onsuccess = function () {
                            a(null, b.result)
                        };
                        b.onerror = function () {
                            a({code: 7})
                        }
                    }), get: b(function (a, b) {
                        var c = this, d = arguments;
                        this.Cu(function () {
                            c.x_.apply(c, d)
                        }, b)
                    }), x_: b(function (a, b) {
                        var c = m("readonly", b);
                        if (e.isArray(a)) {
                            var g = [], h =
                                a.slice(0);
                            a.sort();
                            c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
                                if (c = c.target.result) {
                                    var d = e.indexOf(h, c.value.tileKey);
                                    -1 !== d && (g[d] = c.value);
                                    c["continue"](a[n(c.value.tileKey, a)])
                                } else b && b(null, g.filter(function (a) {
                                    return void 0 !== a
                                }))
                            }
                        } else c = c.get(a), c.onsuccess = function (a) {
                            b && b(null, a.target.result)
                        }, c.onerror = function () {
                            b && b({code: 1})
                        }
                    }), add: b(function (a, b) {
                        var c = this, d = arguments;
                        this.Cu(function () {
                            c.oY.apply(c, d)
                        }, b)
                    }), oY: b(function (a, b) {
                        e.isArray(a) || (a = [a]);
                        for (var c =
                            a.length, d = 0, g = c; d < g; d++) {
                            var h = m("readwrite", b).add(a[d]);
                            h.onsuccess = function () {
                                0 === --c && b(null)
                            };
                            h.onerror = function (a) {
                                -1 === a.target.error.message.indexOf("Key already exists") ? (b({code: 5}), c = 0) : 0 === --c && b(null)
                            }
                        }
                    }), remove: b(function (a, b) {
                        var c = this, d = arguments;
                        this.Cu(function () {
                            c.G4.apply(c, d)
                        }, b)
                    }), G4: b(function (a, b) {
                        var c = m("readwrite", b);
                        e.isArray(a) || (a = [a]);
                        a = a.sort();
                        c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
                            if (c = c.target.result) {
                                if (e.ea(c.value.tileKey, a)) c["delete"]();
                                c["continue"](a[n(c.value.tileKey, a)])
                            } else b && b(null)
                        }
                    }), clear: b(function (a) {
                        var b = this, c = arguments;
                        this.Cu(function () {
                            b.kx.apply(b, c)
                        }, a)
                    }), kx: b(function (a) {
                        var b = m("readwrite", a).clear();
                        b.onsuccess = function () {
                            a && a(null)
                        };
                        b.onerror = function () {
                            a && a({code: 2})
                        }
                    })
                }
            } else b.He = !1
        }
    })(window);
    (function () {
        function a(a) {
            u.data.keys = u.data.keys.filter(function (b) {
                return !q.ea(a, b)
            }).concat(a)
        }

        function b(a) {
            return [f.w.Vg, a.Pi.replace(/\//g, ","), a.Ef ? "w" : "v", t(a.ga, a.Ge), l(a.url)].join("|")
        }

        function c() {
            u.data.keys.length >= u.WB && d()
        }

        function d() {
            var a = u.data.keys.length, b = Math.floor(a / 2);
            a > u.WB && (b = Math.floor(a - u.WB / 2));
            a = u.data.keys.slice(0, b);
            u.data.keys = u.data.keys.slice(b + 1);
            r.remove(a, function (a) {
                a && 3 === a.code && (p.He = !1)
            })
        }

        function e() {
            h();
            w.setItem(u.key, u.data, !0);
            p.He && r && r.clear(function (a) {
                a &&
                3 === a.code && (p.He = !1)
            })
        }

        function g() {
            h();
            var a = w.getItem(u.key, !0);
            a && (a.DB === u.data.DB && a.oQ === u.data.oQ ? u.data = a : e())
        }

        function h() {
            u.data = {DB: p.Rk, oQ: f.w.Vg, keys: [], dg: {}, Ph: {}};
            u.dm = {}
        }

        function k(a) {
            a && (u.data.DB = a, p.Rk = a)
        }

        function l(a) {
            var b = "limg";
            /flds=([^&]+)/.test(a) && (b = RegExp.$1);
            return b
        }

        function m(a) {
            if ("object" === typeof a && null !== a) {
                var b = [];
                if (q.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function (a) {
                    return m(a)
                }); else {
                    b.push("__arrayObject");
                    var c = {}, d;
                    for (d in a) (0 > parseInt(d) ||
                        isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = m(a[d]));
                    b.push(c);
                    b.push(a.map(function (a) {
                        return m(a)
                    }))
                } else if (q.Tr(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a)); else if (q.Tr(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a)); else for (d in b = {}, a) a.hasOwnProperty(d) && (b[d] = m(a[d]));
                return b
            }
            return a
        }

        function n(a) {
            if ("object" === typeof a && null !== a) {
                var b = {};
                if (q.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]); else if ("__Uint16Array" ===
                    a[0]) b = new Uint16Array(a[1]); else if ("__arrayObject" === a[0]) {
                    b = n(a[2]);
                    a = a[1];
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
                } else b = a.map(function (a) {
                    return n(a)
                }); else for (c in a) a.hasOwnProperty(c) && (b[c] = n(a[c]));
                return b
            }
            return a
        }

        var p = f.l, q = f.a;
        if (!f.ko && (f.l.ow || f.l.$l) && (p.He || p.Kj)) {
            var r = f.indexedDB, t = function (a, b) {
                return [a ? 1 : 0, p.Y ? 1 : 0, b ? 1 : 0].join()
            }, u = {WB: 1E3, key: "_AMap_data.tileKeys"}, x = [], w = {
                getItem: function (a, b) {
                    var c = localStorage.getItem(a);
                    if (c && b) {
                        var d;
                        try {
                            d = JSON.parse(c)
                        } catch (e) {
                            d =
                                null
                        }
                        c = d
                    }
                    return c
                }, setItem: function (a, b, c) {
                    var d = b;
                    c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.Ph).length && (b.Ph = {}, d = JSON.stringify(b)));
                    try {
                        localStorage.setItem(a, d)
                    } catch (g) {
                        e()
                    }
                }
            };
            f.ko = {
                get: function (c, d) {
                    function g(a) {
                        var b = {nH: w, daa: T, dg: u.data.dg};
                        /\|limg/.test(M[0]) ? b.E$ = h(a) : b.Nd = k(a);
                        d && d(null, b)
                    }

                    function h(a) {
                        var b = [];
                        a.forEach(function (a) {
                            a.data.forEach(function (a) {
                                b.push(a)
                            })
                        });
                        return b
                    }

                    function k(a) {
                        var b = [];
                        l(c.url).split(",").forEach(function (c) {
                            a.forEach(function (a) {
                                if (a =
                                    a.data[c]) {
                                    var d = a.Oi;
                                    a.Oi = new f.ei(d.z, d.x, d.y);
                                    a.Oi.P = d.P;
                                    for (var e in a.Ea) a.Ea.hasOwnProperty(e) && delete a.Ea[e].bo;
                                    b.push(a)
                                }
                            })
                        });
                        return b
                    }

                    var t = c.wda, w = [], M = [], T = [], Z = [];
                    if ("FS" !== c.type && !u.data.keys.length) return d({code: 1});
                    t.forEach(function (a) {
                        var d = b({Pi: a.key, url: c.url, Ef: c.Ef, ga: c.B.ga, Ge: c.Ge});
                        "FS" !== c.type || p.He ? "FS" !== c.type || /\|w\|/.test(d) ? q.ea(u.data.keys, d) ? (w.push(a), M.push(d)) : T.push(a) : (x.push(d), u.data.Ph[d] ? (w.push(a), M.push(d), Z.push({
                                data: n(u.data.Ph[d]),
                                tileKey: d
                            })) :
                            q.ea(u.data.keys, d) ? (w.push(a), M.push(d)) : T.push(a)) : /\|w\|/.test(d) ? T.push(a) : (x.push(d), u.data.Ph[d] ? (w.push(a), M.push(d), Z.push({
                            data: n(u.data.Ph[d]),
                            tileKey: d
                        })) : T.push(a))
                    });
                    if (M.length) {
                        if (!p.He) return g(Z);
                        var A = M.slice(0);
                        if (Z.length) {
                            if (Z.length === A.length) return g(Z);
                            Z.forEach(function (a) {
                                a = q.indexOf(A, a.tileKey);
                                A.splice(a, 1)
                            })
                        }
                        r.get(A, function (b, h) {
                            if (b) 3 === b.code ? p.He = !1 : e(), d && d({code: 1}); else {
                                "FS" === c.type && h.length && h.forEach(function (a) {
                                    /\|w\|/.test(a.tileKey) || (u.data.Ph[a.tileKey] =
                                        m(a.data))
                                });
                                if (Z.length) {
                                    var l = [];
                                    h = h.concat(Z);
                                    h.forEach(function (a) {
                                        var b = q.indexOf(x, a.tileKey);
                                        l[b] = a
                                    });
                                    h = l = l.filter(function (a) {
                                        return void 0 !== a
                                    })
                                }
                                h.length === M.length ? (g(h), a(M)) : (e(), d && d({code: 1}))
                            }
                        })
                    } else d && d({code: 1})
                }, fm: function (a) {
                    a.Fs.forEach(function (c) {
                        c = b({Pi: c.key, url: a.url, Ef: a.Ef, ga: a.B.ga, Ge: a.Ge});
                        u.dm[c] && delete u.dm[c]
                    })
                }, set: function (a, c) {
                    a.Rk && a.Rk !== u.data.DB && (k(a.Rk), e(), c && c({code: 2}));
                    if (a.Ii) {
                        var d = b({Pi: a.Pi, url: a.url, Ef: a.Ef, ga: a.B.ga, Ge: a.Ge});
                        if (p.He || q.ea(x,
                            d)) {
                            var g = u.dm[d] || [];
                            g.push(q.Db(a.data));
                            u.dm[d] = g
                        }
                    } else a.Nd.forEach(function (c) {
                        var d = b({Pi: c.Pi, url: a.url, Ef: a.Ef, ga: a.B.ga, Ge: a.Ge});
                        if (p.He || q.ea(x, d)) {
                            var e = u.dm[d] || {};
                            e[c.yd] = q.Db(c);
                            u.dm[d] = e
                        }
                    });
                    u.data.dg = {"x-vd-v": a["x-vd-v"], tv: a.tv, bgc: a.bgc}
                }, flush: function () {
                    var a = !0;
                    return function () {
                        var b = this;
                        if (a) {
                            if (Object.keys(u.data.Ph).length) for (var c in u.data.Ph) u.data.Ph.hasOwnProperty(c) && !q.ea(x, c) && delete u.data.Ph[c];
                            p.He ? r.count(function (a, c) {
                                a || (c !== u.data.keys.length ? (r.clear(function (a) {
                                    !a &&
                                    b.Cx()
                                }), u.data.keys = []) : b.Cx())
                            }) : b.Cx();
                            a = !1
                        } else b.Cx()
                    }
                }(), Cx: function () {
                    var a = {}, b = [], d = Object.keys(u.dm), g = [];
                    d.length ? (d.forEach(function (c) {
                        var d = u.dm[c];
                        c.split("|").pop().split(",").every(function (a) {
                            return "limg" === a ? d && 3 === d.length : d && void 0 !== d[a]
                        }) ? (q.ea(u.data.keys, c) || (g.push(c), b.push({
                            tileKey: c,
                            data: d
                        })), q.ea(x, c) && void 0 === u.data.Ph[c] && (u.data.Ph[c] = m(d))) : a[c] = d
                    }), b.length && (p.He ? r.add(b, function (a) {
                        a ? 3 !== a.code ? e() : p.He = !1 : (u.data.keys = u.data.keys.concat(g), w.setItem(u.key, u.data,
                            !0), c())
                    }) : w.setItem(u.key, u.data, !0)), u.dm = a) : (w.setItem(u.key, u.data, !0), c())
                }
            };
            g()
        }
    })();
    f.W = f.Z.extend({
        C: function (a, b, c) {
            var d = parseFloat(b), e = parseFloat(a);
            if (isNaN(a) || isNaN(b)) throw"Invalid Object: LngLat(" + e + ", " + d + ")";
            !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
            this.O = d;
            this.M = e
        }, OG: function () {
            return f.a.Dd(this.M, 6)
        }, LG: function () {
            return f.a.Dd(this.O, 6)
        }, add: function (a, b) {
            return new f.W(this.M + a.M, this.O + a.O, b)
        }, Sa: function (a, b) {
            return new f.W(this.M - a.M, this.O - a.O, b)
        }, cc: function (a, b) {
            return new f.W(this.M / a, this.O / a, b)
        }, ed: function (a, b) {
            return new f.W(this.M *
                a, this.O * a, b)
        }, ef: function (a) {
            return f.NB.distance(this, a)
        }, offset: function (a, b) {
            if (isNaN(a) || isNaN(b)) return !1;
            var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.O * Math.PI / 180)),
                c = this.M + 180 * c / Math.PI, d = 2 * Math.asin(Math.round(b) / 12756274);
            return new f.W(c, this.O + 180 * d / Math.PI)
        }, yb: function (a) {
            a = f.a.ra(a);
            return a instanceof f.W ? 1E-9 >= Math.max(Math.abs(this.O - a.O), Math.abs(this.M - a.M)) : !1
        }, toString: function () {
            return f.a.Dd(this.M, 6) + "," + f.a.Dd(this.O, 6)
        }, Qi: function () {
            return [this.M,
                this.O]
        }, Db: function () {
            var a = this.controlPoints, b = new f.W(this.M, this.O);
            a && (b.controlPoints = [].concat(a));
            return b
        }
    });
    f.W.y9 = function (a, b, c) {
        c = c + 1 || Math.round(Math.abs(a.M - b.M));
        if (!c || 0.001 > Math.abs(a.M - b.M)) return [];
        var d = [], e = f.Xi.Wo, g = f.Xi.Eba, h = Math.asin, k = Math.sqrt, l = Math.sin, m = Math.pow, n = Math.cos,
            p = Math.atan2, q = a.O * e;
        a = a.M * e;
        var r = b.O * e;
        b = b.M * e;
        for (var h = 2 * h(k(m(l((q - r) / 2), 2) + n(q) * n(r) * m(l((a - b) / 2), 2))), t, u, x, w, e = 1; e < c; e += 1) t = 1 / c * e, u = l((1 - t) * h) / l(h), x = l(t * h) / l(h), t = u * n(q) * n(a) + x * n(r) * n(b), w = u * n(q) * l(a) + x * n(r) * l(b), u = u * l(q) + x * l(r), u = p(u, k(m(t, 2) + m(w, 2))), t = p(w, t), d.push(new f.W(t * g, u * g));
        return d
    };
    f.W.en({
        OG: "getLng",
        LG: "getLat",
        add: "add",
        Sa: "subtract",
        cc: "divideBy",
        ed: "multiplyBy",
        ef: "distance",
        offset: "offset",
        yb: "equals",
        toString: "toString"
    });
    f.zd = f.Z.extend({
        C: function () {
            var a = null, b = null;
            if (2 === arguments.length) a = f.a.ra(arguments[0]), b = f.a.ra(arguments[1]); else if (4 === arguments.length) a = new f.W(arguments[0], arguments[1]), b = new f.W(arguments[2], arguments[3]); else throw"Invalid Object: Bounds(" + arguments.join(",") + ")";
            this.Eb = a;
            this.Cb = b
        }, kv: function () {
            return this.Eb
        }, iv: function () {
            return this.Cb
        }, zi: function () {
            return new f.W(this.Eb.M, this.Cb.O, !0)
        }, kn: function () {
            return new f.W(this.Cb.M, this.Eb.O, !0)
        }, contains: function (a) {
            var b = this.Eb,
                c = this.Cb, d;
            a instanceof f.zd ? (d = a.Eb, a = a.Cb) : d = a = f.a.ra(a);
            var e = d.M, g = b.M, h = a.M, k = c.M;
            g > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
            return d.O >= b.O && a.O <= c.O && e >= g && h <= k
        }, Qe: function (a) {
            var b = this.Eb, c = this.Cb, d = a.Eb;
            a = a.Cb;
            var e = a.M >= b.M && d.M <= c.M;
            return a.O >= b.O && d.O <= c.O && e
        }, Jg: function () {
            return new f.W(this.Eb.M > this.Cb.M ? (this.Eb.M + this.Cb.M + 360) / 2 % 360 : (this.Eb.M + this.Cb.M) / 2, (this.Eb.O + this.Cb.O) / 2)
        }, extend: function (a) {
            this.Eb.M = Math.min(this.Eb.M, a.M);
            this.Eb.O = Math.min(this.Eb.O, a.O);
            this.Cb.M =
                Math.max(this.Cb.M, a.M);
            this.Cb.O = Math.max(this.Cb.O, a.O);
            return this
        }, aea: function (a) {
            return this.extend(a.Eb).extend(a.Cb)
        }, toString: function () {
            return this.Eb.toString() + ";" + this.Cb.toString()
        }, Db: function () {
            return new f.zd(this.Eb.Db(), this.Cb.Db())
        }, yb: function (a) {
            return a instanceof f.zd ? this.Eb.yb(a.Eb) && this.Cb.yb(a.Cb) : !1
        }, jg: function () {
            return Math.abs(this.Cb.M - this.Eb.M)
        }, hg: function () {
            return Math.abs(this.Eb.O - this.Cb.O)
        }
    });
    f.zd.en({
        kv: "getSouthWest",
        iv: "getNorthEast",
        zi: "getNorthWest",
        kn: "getSouthEast",
        contains: "contains",
        Qe: "intersects",
        Jg: "getCenter"
    });
    f.I = f.Z.extend({
        C: function (a, b, c) {
            if (isNaN(a) || isNaN(b)) throw"Invalid Object: Pixel(" + a + ", " + b + ")";
            this.x = c ? Math.round(a) : Number(a);
            this.y = c ? Math.round(b) : Number(b)
        }, Wd: function () {
            return this.x
        }, ld: function () {
            return this.y
        }, add: function (a, b) {
            return new f.I(this.x + a.x, this.y + a.y, b)
        }, Sa: function (a, b) {
            return new f.I(this.x - a.x, this.y - a.y, b)
        }, cc: function (a, b) {
            return new f.I(this.x / a, this.y / a, b)
        }, ed: function (a, b) {
            return new f.I(this.x * a, this.y * a, b)
        }, ef: function (a) {
            var b = a.x - this.x;
            a = a.y - this.y;
            return Math.sqrt(b *
                b + a * a)
        }, floor: function () {
            return new f.I(Math.floor(this.x), Math.floor(this.y))
        }, round: function () {
            return new f.I(this.x, this.y, !0)
        }, yb: function (a) {
            return a instanceof f.I && this.x === a.x && this.y === a.y
        }, Db: function (a) {
            return new f.I(this.x, this.y, a)
        }, toString: function () {
            return this.x + "," + this.y
        }, Qi: function () {
            return [this.x, this.y]
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, direction: function () {
            var a = this.x, b = this.y;
            if (0 === a && 0 === b) return null;
            if (0 === a) return 0 < b ? Math.PI / 2 : -Math.PI /
                2;
            var c = 180 * Math.atan(b / a) / Math.PI;
            return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
        }, To: function (a) {
            var b = this.length(), c = a.length();
            return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
        }, toFixed: function (a) {
            this.x = f.a.Dd(this.x, a);
            this.y = f.a.Dd(this.y, a);
            return this
        }
    });
    f.I.en({
        Wd: "getX",
        ld: "getY",
        add: "add",
        Sa: "subtract",
        cc: "divideBy",
        ed: "multiplyBy",
        ef: "distance",
        yb: "equals",
        toString: "toString"
    });
    f.tc = f.Z.extend({
        C: function (a, b, c) {
            if (isNaN(a) || isNaN(b)) throw"Invalid Object: Size(" + a + ", " + b + ")";
            this.width = c ? Math.round(a) : Number(a);
            this.height = c ? Math.round(b) : Number(b)
        }, jg: function () {
            return this.width
        }, hg: function () {
            return this.height
        }, Is: function () {
            return new f.I(this.jg(), this.hg())
        }, contains: function (a) {
            return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
        }, yb: function (a) {
            return a instanceof f.tc && this.width === a.width && this.height === a.height
        }, toString: function () {
            return this.jg() +
                "," + this.hg()
        }
    });
    f.tc.en({jg: "getWidth", hg: "getHeight", toString: "toString"});
    f.mK = f.Z.extend({
        C: function (a) {
            this.path = a;
            if (a[0] instanceof f.I) {
                this.path = [];
                for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
            } else if (a[0] instanceof f.W) for (this.path = [], b = 0; b < a.length; b += 1) this.path.push([a[b].M, a[b].O]);
            this.bounds = this.Uc = a
        }, contains: function (a, b) {
            a instanceof f.I ? a = [a.x, a.y] : a instanceof f.W && (a = [a.M, a.O]);
            return f.zc.Xc(a, this.path, b)
        }, toBounds: function () {
            for (var a = new f.zd(180, 90, -180, -90), b = this.Uc.length - 1; 0 <= b; b -= 1) a.extend(this.Uc[b]);
            return a
        }
    });
    f.xe = f.Z.extend({
        C: function () {
            if (2 === arguments.length) this.nb = arguments[0], this.vc = arguments[1]; else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
                var a = arguments[0] instanceof Array ? arguments[0] : arguments;
                this.nb = new f.I(a[0], a[1]);
                this.vc = new f.I(a[2], a[3])
            } else throw"Invalid Object: PixelBounds(" + arguments.join(",") + ")";
        }, Jg: function (a) {
            return new f.I((this.nb.x + this.vc.x) / 2, (this.nb.y + this.vc.y) / 2, a)
        }, contains: function (a) {
            var b;
            a instanceof f.xe ? (b = a.nb, a = a.vc) : b =
                a;
            return b.x > this.nb.x && a.x < this.vc.x && b.y > this.nb.y && a.y < this.vc.y
        }, jg: function () {
            return this.vc.x - this.nb.x
        }, hg: function () {
            return this.vc.y - this.nb.y
        }, Qe: function (a, b) {
            b || 0 === b || (b = 20);
            var c = this.nb, d = this.vc, e = a.nb, g = a.vc, h = g.y >= c.y - b && e.y <= d.y + b;
            return g.x >= c.x - b && e.x <= d.x + b && h
        }, toString: function () {
            return this.nb + ";" + this.vc
        }, Db: function () {
            return new f.xe(this.nb.Db(), this.vc.Db())
        }
    });
    f.G = {};
    f.G.yF = function (a) {
        for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) f.G.Fz(b, a[c]);
        return b
    };
    f.G.xQ = function (a, b, c) {
        var d = Math.min.apply(null, a);
        a = Math.max.apply(null, a);
        var e = Math.min.apply(null, b);
        b = Math.max.apply(null, b);
        return f.G.K7(d, a, e, b, c)
    };
    f.G.buffer = function (a, b) {
        a[0] -= b;
        a[1] -= b;
        a[2] += b;
        a[3] += b
    };
    f.G.Db = function (a) {
        return a.slice()
    };
    f.G.Xc = function (a, b) {
        return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
    };
    f.G.aR = function (a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    };
    f.G.tga = function () {
        return [Infinity, Infinity, -Infinity, -Infinity]
    };
    f.G.K7 = function (a, b, c, d, e) {
        return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
    };
    f.G.empty = function (a) {
        a[0] = a[1] = Infinity;
        a[2] = a[3] = -Infinity;
        return a
    };
    f.G.yb = function (a, b) {
        return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
    };
    f.G.extend = function (a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3])
    };
    f.G.Fz = function (a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    };
    f.G.Oga = function (a) {
        return [a[0], a[1]]
    };
    f.G.Pga = function (a) {
        return [a[2], a[1]]
    };
    f.G.Jg = function (a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    };
    f.G.Xga = function (a, b, c, d, e) {
        var g = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        c = Math.sin(c);
        g = [-g, -g, g, g];
        d = [-d, d, -d, d];
        var h, k, l;
        for (h = 0; 4 > h; h += 1) k = g[h], l = d[h], g[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
        return f.G.xQ(g, d, e)
    };
    f.G.hg = function (a) {
        return a[3] - a[1]
    };
    f.G.iha = function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    };
    f.G.mha = function (a) {
        return [a[0], a[3]]
    };
    f.G.nha = function (a) {
        return [a[2], a[3]]
    };
    f.G.jg = function (a) {
        return a[2] - a[0]
    };
    f.G.Qe = function (a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    };
    f.G.zp = function (a) {
        return a[2] < a[0] || a[3] < a[1]
    };
    f.G.normalize = function (a, b) {
        return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
    };
    f.G.Zia = function (a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= d;
        a[3] += d
    };
    f.G.touches = function (a, b) {
        return f.G.Qe(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
    };
    f.G.transform = function (a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        return f.G.xQ([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
    };
    f.zd.gb({
        C: function () {
            var a = f.zd.prototype.C;
            return function () {
                a.apply(this, arguments);
                this.southwest = this.Eb;
                this.northeast = this.Cb
            }
        }(), extend: function () {
            var a = f.zd.prototype.extend;
            return function () {
                a.apply(this, arguments);
                this.Eb.lng = this.Eb.M;
                this.Eb.lat = this.Eb.O;
                this.Cb.lng = this.Cb.M;
                this.Cb.lat = this.Cb.O;
                return this
            }
        }()
    });
    f.W.gb({
        C: function () {
            var a = f.W.prototype.C;
            return function () {
                a.apply(this, arguments);
                this.lng = parseFloat(this.M.toFixed(6));
                this.lat = parseFloat(this.O.toFixed(6))
            }
        }()
    });
    f.ax = f.Z.extend({
        C: function (a, b, c, d) {
            this.kL = a;
            this.xL = b;
            this.KL = c;
            this.eM = d
        }, transform: function (a, b) {
            return this.RP(a.Db(), b)
        }, RP: function (a, b) {
            b = b || 1;
            a.x = b * (this.kL * a.x + this.xL);
            a.y = b * (this.KL * a.y + this.eM);
            return a
        }, cea: function (a, b) {
            b = b || 1;
            return new f.I((a.x / b - this.xL) / this.kL, (a.y / b - this.eM) / this.KL)
        }
    });
    f.Vk = f.Z.extend({
        C: function (a) {
            this.VB = a.MAX_LATITUDE || 85.0511287798;
            a.project && a.unproject && (this.Lb = a.project, this.Nf = a.unproject)
        }
    });
    f.Vk.KK = {
        Lb: function (a) {
            return new f.I(a.M, a.O)
        }, Nf: function (a, b) {
            return new f.W(a.x, a.y, b)
        }
    };
    f.Vk.IX = new f.Vk({
        MAX_LATITUDE: 85.0511287798, project: function (a) {
            var b = Math.PI / 180, c = this.VB, c = Math.max(Math.min(c, a.O), -c);
            a = a.M * b;
            b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
            return new f.I(a, b, !1)
        }, unproject: function (a, b) {
            var c = 180 / Math.PI;
            return new f.W(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
        }
    });
    f.Vk.LK = {
        VB: 85.0840591556, aC: 6356752.3142, $B: 6378137, Lb: function (a) {
            var b = Math.PI / 180, c = this.VB, d = Math.max(Math.min(c, a.O), -c), e = this.$B, c = this.aC;
            a = a.M * b * e;
            b *= d;
            e = c / e;
            e = Math.sqrt(1 - e * e);
            d = e * Math.sin(b);
            d = Math.pow((1 - d) / (1 + d), 0.5 * e);
            b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
            b = -c * Math.log(b);
            return new f.I(a, b)
        }, Nf: function (a, b) {
            for (var c = 180 / Math.PI, d = this.$B, e = this.aC, g = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
                l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
            return new f.W(g, h * c, b)
        }
    };
    f.Of = {};
    f.Of.Mw = {
        Fv: function (a, b) {
            var c = this.be.Lb(a), d = this.scale(b);
            return this.ww.RP(c, d)
        }, Wv: function (a, b, c) {
            b = this.scale(b);
            a = this.ww.cea(a, b);
            return this.be.Nf(a, c)
        }, Lb: function (a) {
            return this.be.Lb(a)
        }, scale: function (a) {
            return 256 << a
        }, XG: function (a) {
            return 12756274 * Math.PI / (256 * Math.pow(2, a))
        }
    };
    f.Of.MB = f.extend({}, f.Of.Mw, {
        code: "EPSG:3857",
        be: f.Vk.IX,
        ww: new f.ax(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
        Lb: function (a) {
            return this.be.Lb(a).ed(6378137)
        }
    });
    f.Of.tK = f.extend({}, f.Of.Mw, {
        code: "EPSG:3395", be: f.Vk.LK, ww: function () {
            var a = f.Vk.LK;
            return new f.ax(0.5 / (Math.PI * a.$B), 0.5, -0.5 / (Math.PI * a.aC), 0.5)
        }()
    });
    f.Of.uK = f.extend({}, f.Of.Mw, {code: "EPSG:4326", be: f.Vk.KK, ww: new f.ax(1 / 360, 0.5, -1 / 360, 0.25)});
    f.Of.cfa = f.extend({}, f.Of.Mw, {be: f.Vk.KK, ww: new f.ax(1, 0, 1, 0)});
    f.lA = {
        Lb: function (a, b) {
            a = f.a.ra(a);
            return this.tl.Fv(a, b || this.get("zoom"))
        }, Nf: function (a, b, c) {
            return this.tl.Wv(a, b || this.get("zoom"), c)
        }, Lha: function (a, b) {
            return this.Lb(a, b)
        }, Nga: function (a, b) {
            return this.Nf(a, b)
        }, Tm: function (a, b) {
            var c = this.get("size").Is().cc(2);
            if (a.yb(c)) return this.get("center");
            c = this.Ae(a, b);
            return this.Fd(c)
        }, Il: function (a) {
            a = this.Qb(a);
            return this.ve(a)
        }, cR: function (a) {
            return this.Fd(a.cc(this.get("resolution", 20)))
        }, Qb: function (a) {
            a = f.a.ra(a);
            return this.Lb(a, 20)
        }, Fd: function (a) {
            return a ?
                this.Nf(a, 20) : a
        }, K$: function (a) {
            a = f.a.ra(a);
            return this.Lb(a, 20).Sa(f.a.Mc)
        }, X8: function (a) {
            return this.Nf(a.add(f.a.Mc), 20)
        }, J$: function (a, b, c) {
            a = f.a.ra(a);
            return this.Qb(a).ed(c || this.get("resolution", 20))
        }, Sga: function (a) {
            return a ? this.Lb(this.get("center"), a) : this.get("centerPixel")
        }, lfa: function (a) {
            return (new f.I(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).cc(0.14929107086948487)
        }, eU: function (a) {
            return new f.I(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 *
                a.y)
        }, kfa: function (a) {
            return this.cR(new f.I(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y), 20)
        }, Mha: function (a) {
            a = this.J$(f.a.ra(a), 20);
            return new f.I(a.x - 2.0037508342789244E7, 2.0037508342789244E7 - a.y)
        }
    };
    v.hC = f.Z.extend({
        ea: [f.ja, f.de],
        F: {center: new f.W(116.397128, 39.916527), zoom: 13, rotation: 0, crs: "EPSG3857"},
        C: function (a) {
            this.CLASS_NAME = "AMap.View2D";
            f.e.ab("AMap.View2D", a);
            a = a || {};
            a.center && (a.center = f.a.ra(a.center));
            this.F = a
        }
    });
    v.Sb = f.Z.extend({
        ea: [f.ja, f.de, f.lA], F: {
            features: "all",
            dragEnable: !0,
            showIndoorMap: f.l.Y ? !1 : !0,
            lang: "zh_cn",
            keyboardEnable: !0,
            doubleClickZoom: !0,
            gridMapForeign: !1,
            scrollWheel: !0,
            zoomEnable: !0,
            jogEnable: !0,
            continuousZoomEnable: !0,
            resizeEnable: !1,
            animateEnable: !0,
            rotateEnable: !1,
            labelzIndex: 99,
            showFog: !0,
            touchZoom: !0,
            zooms: [3, f.l.Y ? f.l.md ? 19 : 20 : 18],
            defaultCursor: "url(" + f.w.eb + "/theme/v1.3/openhand.cur),default",
            limitBounds: null,
            logoUrl: f.w.eb + "/theme/v1.3/logo@1x.png",
            logoUrlRetina: f.w.eb + "/theme/v1.3/logo@2x.png",
            copyright: "\x3c!--v1.4.3--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
            isHotspot: !f.l.Y,
            baseRender: f.l.A6,
            overlayRender: f.l.Saa,
            mapStyle: "normal",
            showBuildingBlock: f.l.Ef,
            crs: "EPSG3857",
            rotation: 0,
            pitch: 0,
            yaw: 0,
            scale: 1,
            center: new f.W(116.397128, 39.916527),
            zoom: 13,
            detectRetina: !0,
            pitchEnable: !1,
            buildingAnimation: !f.l.Y,
            maxPitch: 83,
            turboMode: !0
        }, poiOnAMAP: function (a) {
            f.e.add(this.CLASS_NAME, "poiOnAMAP");
            var b = {}, c = f.a.ra(a.location);
            b.id = a.id;
            c && (b.y = c.O, b.x = c.M);
            b.name = a.name;
            b.address = a.address;
            f.Pf.Sn(f.Pf.gS(b))
        }, detailOnAMAP: function (a) {
            f.e.add(this.CLASS_NAME, "detailOnAMAP");
            var b = {}, c = f.a.ra(a.location);
            b.id = a.id;
            c && (b.y = c.O, b.x = c.M);
            b.name = a.name;
            f.Pf.Sn(f.Pf.eS(b))
        }, setLabelzIndex: function (a) {
            return this.set("labelzIndex", a)
        }, getLabelzIndex: function () {
            return this.get("labelzIndex", null, !0)
        }, setMapStyle: function (a) {
            f.e.add(this.CLASS_NAME, "setMapStyle", a);
            -1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0), this.set("mapStyle", a)) : this.set("styleUrl", a);
            this.RH()
        }, getMapStyle: function () {
            f.e.add(this.CLASS_NAME,
                "getMapStyle");
            return this.get("styleUrl") || this.get("mapStyle", null, !0)
        }, getFeatures: function () {
            f.e.add(this.CLASS_NAME, "getFeatures");
            return this.get("features", null, !0)
        }, setFeatures: function (a) {
            f.e.add(this.CLASS_NAME, "setFeatures");
            this.set("features", a)
        }, setLang: function (a) {
            f.e.add(this.CLASS_NAME, "setLang", a);
            "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.getLang() || (this.set("lang", a), this.xk && this.xk.aV(this))
        }, getLang: function () {
            f.e.add(this.CLASS_NAME, "getLang");
            return this.get("lang", null,
                !0)
        }, setCity: function (a, b) {
            f.e.add(this.CLASS_NAME, "setCity");
            var c = this;
            (new f.Ka.Xa(f.w.Yc + "/v3/config/district?subdistrict=0&extensions=all&key=" + f.w.key + "&s=rsv3&output=json&keywords=" + a, {callback: "callback"})).h("complete", function (a) {
                if ((a = a.districts) && a.length) try {
                    var e = a[0].center.split(","), g;
                    switch (a[0].level) {
                        case "city":
                            g = 10;
                            break;
                        case "province":
                            g = 7;
                            break;
                        case "district":
                            g = 12;
                            break;
                        case "country":
                            g = 4;
                            break;
                        default:
                            g = 12
                    }
                    -1 !== a[0].name.indexOf("\u5e02") && (g = 10);
                    c.setZoomAndCenter(g, new f.W(e[0],
                        e[1]), !0);
                    b && b.call(c, e, g)
                } catch (h) {
                }
            }, this)
        }, getScreenShot: function (a, b) {
            return this.map && f.l.qn ? this.map.lS(a, b) : ""
        }, getCity: function (a, b) {
            f.e.add(this.CLASS_NAME, "getCity");
            var c = f.w.Yc + "/v3/geocode/regeo?&extensions=&&key=" + f.w.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
            (new f.Ka.Xa(c, {callback: "callback", kr: !0, yd: "REGEO"})).h("complete", function (b) {
                b = b.regeocode.addressComponent;
                a({
                    province: b.province, city: b.city instanceof Array ? "" : b.city, citycode: b.citycode instanceof
                    Array ? "" : b.citycode, district: b.district instanceof Array ? "" : b.district
                })
            }, this)
        }, C: function (a, b) {
            this.id = f.a.Fb(this);
            this.CLASS_NAME = "AMap.Map";
            f.e.ab("AMap.Map", b);
            b = b || {};
            b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") && (b.styleUrl = b.mapStyle, delete b.mapStyle);
            b.bgColor && f.extend(f.w.Id, b.bgColor);
            b.maxPitch && (b.maxPitch = Math.min(this.F.maxPitch, Math.max(b.maxPitch, 0)));
            b.pitch && (b.pitch = Math.min(b.maxPitch || this.F.maxPitch, Math.max(b.pitch, 0)));
            f.w.iz = b.buildingColor || null;
            b.mobile && (f.l.Y =
                !0);
            b.noPoi && (f.w.qaa = !0);
            b.editEnable && (b.nolimg = 1, b.showIndoorMap = !1);
            "3D" === b.viewMode && f.l.$l && (b.showIndoorMap = !1, void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock);
            this.un = b.disableSocket ? !1 : f.l.un;
            b.server && (f.w.Yc = b.server);
            b.vdataUrl && (f.w.Gw = b.vdataUrl);
            if ("string" === typeof a) {
                if (a = this.J = document.getElementById(a), !a) return
            } else "DIV" === a.tagName && (this.J = a);
            this.J.uC && this.J.uC.destroy();
            f.od.Hd.start({id: this.id, J: this.J});
            this.J.uC = this;
            var c = this.F.zooms[1], d = this.F.zooms[0];
            b.zooms ?
                (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = f.l.Y ? f.l.md ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
            b.forceZooms && (b.zooms = b.forceZooms);
            b = this.U6(b);
            c = this.getSize();
            b.center && (b.center = f.a.ra(b.center));
            this.tl = this.L7(b.crs || this.F.crs, b.center || this.F.center);
            this.v6(c, b);
            d = b.lang;
            "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
            f.l.Ld && (b.rotateEnable = !1);
            f.a.rb(this, b);
            this.Lf(this.F);
            "rotateEnable" in b || "3D" !== b.viewMode || !f.l.$l || this.set("rotateEnable",
                !0);
            "pitchEnable" in b || "3D" !== b.viewMode || !f.l.$l || this.set("pitchEnable", !0);
            b.forceVector && (f.l.Ef ? this.set("baseRender", "vw") : this.set("baseRender", "v"));
            b.disableVector && this.set("baseRender", "d");
            "dom" === b.renderer && (this.set("baseRender", "d"), this.set("overlayRender", "d"));
            b.baseRender && this.set("baseRender", b.baseRender);
            c = Math.max(c.width, c.height);
            f.l.ga && (c *= Math.min(2, window.devicePixelRatio || 1));
            "vw" === this.get("baseRender") && c > f.l.Z$ && this.set("baseRender", "dv");
            c = this.get("zoom", null,
                !0);
            d = this.get("zooms");
            c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
            this.set("zoom", c);
            this.F.zoom = c;
            this.M7(this.F);
            this.IF();
            f.l.qn && this.Y5();
            var e = this;
            this.Lf({overlays: [], infos: {}, controls: {}});
            c = [];
            b.gridMapForeign && c.push("gridmap");
            b.forceVector && (c.push("vectorlayer"), c.push("overlay"));
            "3D" === b.viewMode && f.l.$l && c.push("Map3D");
            b.editEnable && (c.push("edit"), c.push("labelDir"));
            this.ga = f.l.ga && this.get("detectRetina");
            this.vW(b);
            f.jb.kg(c, function () {
                if (!e.get("destroy")) {
                    var b = new f.Sb(a, e);
                    b.Ud("zoom center centerCoords rotation yaw pitch resolution".split(" "),
                        e.view, !0);
                    b.h("complete", function () {
                        this.r("complete")
                    }, e, !0);
                    b.tl = e.tl;
                    e.Ud(["zoomSlow", "panTo", "targetLevel", "render"], b);
                    b.Ud(["size", "bounds"], e);
                    e.loaded = !0;
                    e.r("coreMapCreated")
                }
            })
        }, getViewMode_: function () {
            return this.view.type
        }, b9: function (a, b, c) {
            var d = new f.W(a[4], a[5]);
            if ((a = new f.zd(a[0], a[1], a[2], a[3])) && b && d) {
                for (var e = c[1]; e > c[0]; e -= 1) {
                    var g = this.Lb(a.Eb, e), h = this.Lb(a.Cb, e);
                    if (Math.abs(h.x - g.x) < b.width && Math.abs(g.y - h.y) < b.height) break
                }
                return [d, Math.min(e + 1, c[1])]
            }
            return null
        }, v6: function (a,
                         b) {
            if (!(b && b.center && b.zoom)) {
                var c = this.b9(f.w.Uc, a, b.zooms);
                b.center = b.center || c && c[0];
                "number" !== typeof b.zoom && (b.zoom = c && c[1])
            }
        }, L7: function (a, b) {
            if (b instanceof f.W) {
                if ("string" === typeof a) {
                    switch (a) {
                        case "EPSG3395":
                            return f.Of.tK;
                        case "EPSG4326":
                            return f.Of.uK
                    }
                    return f.Of.MB
                }
                if (a.pointToLngLat && a.lngLatToPoint) return {
                    Wv: a.pointToLngLat,
                    Fv: a.lngLatToPoint,
                    XG: a.getResolution
                };
                throw"illegal projection";
            }
            var c = this.get("zoom", null, !0);
            return {
                XG: function (a) {
                    return Math.pow(2, c - a)
                }, Fv: function () {
                },
                Wv: function () {
                }
            }
        }, Vca: function (a, b) {
            var c = ["pitch", "rotation", "zoom", "center"], d = {}, e = !1, g;
            for (g in a) if (a.hasOwnProperty(g) && -1 !== f.a.indexOf(c, g)) {
                var h = this.get(g);
                void 0 === h || h === a[g] || h.yb && h.yb(a[g]) || (d[g] = this.get(g), e = !0)
            }
            e && (this.bx = new f.wh(d, a, null, 0), this.bx.transition = function (a, c, e) {
                e /= b || 300;
                if (1 <= e) return c;
                var g = {}, h;
                for (h in d) d.hasOwnProperty(h) && (g[h] = "center" === h ? a[h].add(c[h].Sa(a[h]).ed(e)) : a[h] + (c[h] - a[h]) * e);
                return g
            }, this.bx.Ql = function (b) {
                b === a && (this.bx.stop(), this.yc =
                    null);
                for (var c in b) b.hasOwnProperty(c) && ("center" === c ? this.setCenter(b[c], !0) : this.set(c, b[c]))
            }, this.bx.Qj(this))
        }, M7: function (a) {
            "3D" === this.get("viewMode") && f.l.$l ? (this.set("baseRender", "vw"), this.view = new f.VX(this, a)) : this.view = new f.hC(this, a);
            this.HS()
        }, HS: function () {
            this.mh = "d" < this.get("baseRender") || "3D" === this.view.type
        }, featuresChanged: function () {
            this.IF()
        }, RH: function () {
            this.IF();
            this.lJ()
        }, lJ: function () {
            if (this.Fj && "3D" !== this.view.type) {
                var a = !0, b = this.getMapStyle();
                if (!1 === this.get("showIndoorMap") ||
                    "normal" !== b && "amap://styles/normal" !== b) a = !1;
                var b = this.getLayers(), c;
                for (c in b) "AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.Fj && (a = !1);
                this.Fj.getMap() !== this && this.Fj.setMap(this);
                this.Fj.set("visible", a)
            }
        }, IF: function () {
            this.vW();
            if (this.view && "3D" !== this.view.type) {
                var a = this.get("baseRender");
                if (a && !("dv" < a)) {
                    var b = this.get("features", null, !0), c = this.getMapStyle(), d = this.get("editEnable");
                    b && c && (f.l.kz && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"),
                        this.pI = a) : this.pI && (this.set("baseRender", this.pI), this.pI = null));
                    this.HS()
                }
            }
        }, Y5: function () {
            var a = this;
            AMap.plugin(["AMap.IndoorMap"], function () {
                !a.Fj && a.J && (a.indoorMap = a.Fj = new AMap.IndoorMap({innerLayer: !0}), a.lJ(), f.a.ec(function () {
                    a.r("indoor_create", {target: a});
                    a.set("display")
                }))
            })
        }, layersChanged: function () {
            var a = this.getLayers();
            this.sA = !1;
            for (var b = 0; b < a.length; b += 1) a[b].getMap() !== this && a[b].setMap(this), a[b].sA && (this.sA = !0);
            this.lJ()
        }, getMapNumber: function () {
            if (this.map) return this.map.aw()
        },
        getAdcode: function () {
            f.e.add(this.CLASS_NAME, "getAdcode");
            return f.w.W5
        }, vW: function () {
            if (!this.NT) {
                var a = f.l.Y || f.a.ea(["d", "dv"], this.get("baseRender")) || !f.a.ea(["normal"], this.get("mapStyle", "amap://styles/normal")) || "3D" === this.get("viewMode") || "all" !== this.get("features") || this.F.defaultLayer || this.get("editEnable") || !this.get("turboMode") ? !1 : !0,
                    b = this.get("wpoLayer");
                b && !a ? (this.Li(b), this.set("wpoLayer", void 0)) : !b && a && this.get("layers") && (b = new v.B.Za({
                    Zv: !0,
                    zIndex: 100
                }), b.b1 = !0, this.set("wpoLayer",
                    b, !0), this.get("layers").push(b))
            }
        }, U6: function (a) {
            a || (a = {});
            if (a.hasOwnProperty("defaultLayer")) {
                a.layers = [a.defaultLayer];
                var b = a.defaultLayer;
                b.oF = !0;
                this.set("defaultLayer", b, !0)
            }
            a.layers && 0 !== a.layers.length ? this.NT = !0 : (b = new v.B.Za, a.layers = [b], b.oF = !0, this.set("defaultLayer", b, !0));
            if (b = a.view) b.F.rotation && (a.rotation = b.F.rotation), b.F.center && (a.center = b.F.center), b.F.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.F.zoom))), b.F.crs && (a.crs = b.F.crs);
            a.level && !a.zoom && (a.zoom = a.level);
            return a
        }, setLimitBounds: function (a) {
            f.e.add(this.CLASS_NAME, "setLimitBounds");
            a instanceof f.zd || (a = null);
            this.set("limitBounds", a)
        }, clearLimitBounds: function () {
            f.e.add(this.CLASS_NAME, "clearLimitBounds");
            this.set("limitBounds", null)
        }, getLimitBounds: function () {
            f.e.add(this.CLASS_NAME, "getLimitBounds");
            return this.get("limitBounds", null, !0)
        }, Uy: function (a) {
            var b = this.get("layers");
            0 <= f.a.indexOf(b, a) || (b.push(a), this.set("layers", b))
        }, Gu: function (a) {
            var b = this.get("overlays");
            0 <= f.a.indexOf(b, a) ||
            (a instanceof v.D.Xj ? (this.get("overlays").push(a), this.rz instanceof v.D.Xj && this.rz.close(), this.rz = a, this.set("contextmenu", a, !0)) : (a instanceof v.D.Qd && (this.yk instanceof v.D.Qd && this.os(this.yk), this.yk = a), this.get("overlays").push(a)), this.r("overlays"))
        }, Li: function (a) {
            var b = this.get("layers");
            a = f.a.indexOf(b, a);
            -1 !== a && this.set("layers", f.a.pk(b, a))
        }, os: function (a) {
            var b = this.get("overlays");
            this.set("overlays", f.a.pk(b, f.a.indexOf(b, a)))
        }, setZoom: function (a, b) {
            f.e.add(this.CLASS_NAME, "setZoom");
            a = this.zG(a);
            var c = this.get("zooms");
            a > c[1] && (a = c[1]);
            a < c[0] && (a = c[0]);
            this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.r("zoomstart"), this.r("zoomchange"), this.r("zoomend")) : this.set("zoomSlow", a))
        }, getZoom: function () {
            f.e.add(this.CLASS_NAME, "getZoom");
            return this.zG(this.get("targetLevel") || this.get("zoom", null, !0))
        }, getCenter: function () {
            f.e.add(this.CLASS_NAME, "getCenter");
            return this.get("center", null, !0)
        }, setCenter: function (a, b) {
            f.e.add(this.CLASS_NAME, "setCenter");
            a = f.a.ra(a);
            b || !this.loaded ? (this.r("movestart"), this.set("center", a), this.r("mapmove"), this.map ? this.map.r("moveend") : this.r("moveend")) : this.panTo(a)
        }, getCoordsBound: function () {
            return this.view.Bj()
        }, setRotation: function (a) {
            f.e.add(this.CLASS_NAME, "setRotation");
            !f.l.Ld && this.get("rotateEnable") && this.set("rotation", a)
        }, getRotation: function () {
            f.e.add(this.CLASS_NAME, "getRotation");
            return this.get("rotateEnable") && this.get("rotation") || 0
        }, setPitch: function (a) {
            a = Math.min(this.get("maxPitch"), Math.max(a, 0));
            f.e.add(this.CLASS_NAME,
                "setRotation");
            !f.l.Ld && this.get("pitchEnable") && this.set("pitch", a)
        }, getPitch: function () {
            f.e.add(this.CLASS_NAME, "getRotation");
            return this.get("pitchEnable") && this.get("pitch") || 0
        }, getBounds: function (a) {
            f.e.add(this.CLASS_NAME, "getBounds");
            var b = this.view.Hc();
            return a && b.toBounds ? b.toBounds() : b
        }, getStatus: function () {
            f.e.add(this.CLASS_NAME, "getStatus");
            for (var a = "isHotspot dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "),
                     b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
            return b
        }, setStatus: function (a) {
            f.e.add(this.CLASS_NAME, "setStatus");
            for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
        }, getResolution: function (a, b) {
            f.e.add(this.CLASS_NAME, "getResolution");
            var c = (a = f.a.ra(a)) ? a.O : this.get("center", null, !0).O;
            return this.get("resolution",
                b) * Math.cos(c * Math.PI / 180)
        }, getScale: function (a) {
            f.e.add(this.CLASS_NAME, "getScale");
            return this.getResolution() * (a || 96) / 0.0254
        }, getDefaultCursor: function () {
            f.e.add(this.CLASS_NAME, "getDefaultCursor");
            return this.get("defaultCursor", null, !0)
        }, setDefaultCursor: function (a) {
            f.e.add(this.CLASS_NAME, "setDefaultCursor");
            return this.set("defaultCursor", a, !0)
        }, zoomIn: function (a) {
            f.e.add(this.CLASS_NAME, "zoomIn");
            this.setZoom(this.getZoom() + 1, a)
        }, zoomOut: function (a) {
            f.e.add(this.CLASS_NAME, "zoomOut");
            this.setZoom(this.getZoom() -
                1, a)
        }, zG: function (a) {
            return this.view && "3D" === this.view.type ? f.a.Dd(a, 4) : Math.round(a)
        }, setZoomAndCenter: function (a, b, c) {
            f.e.add(this.CLASS_NAME, "setZoomAndCenter");
            b = f.a.ra(b);
            a = this.zG(a);
            var d = this.get("zooms");
            a > d[1] && (a = d[1]);
            a < d[0] && (a = d[0]);
            this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0))
        }, clearMap: function () {
            f.e.add(this.CLASS_NAME, "clearMap");
            for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
            this.set("overlays", []);
            if (this.map &&
                this.map.Wa) for (var a = this.map.Wa, c = a.length, b = 0; b < c; b += 1) a[b].oa instanceof v.B.OB && a[b].oa.setMap(null)
        }, destroy: function () {
            f.e.add(this.CLASS_NAME, "destroy");
            this.Fj && (this.Fj.setMap(), this.indoorMap = this.Fj = null);
            this.set("overlays", []);
            this.set("layers", []);
            var a = this.get("controls");
            a.remove = [];
            for (var b in a.Sc) a.Sc.hasOwnProperty(b) && a.remove.push(a.Sc[b]);
            a.Sc = [];
            a.add = [];
            this.set("controls", a);
            this.set("destroy", !0);
            this.Aa = !1;
            this.Vn();
            this.J = null
        }, addControl: function (a) {
            f.e.add(this.CLASS_NAME,
                "addControl");
            var b = f.a.Fb(a), c = this.get("controls") || {};
            c.Sc = c.Sc || {};
            c.Sc[b] || (c.Sc[b] = a);
            c.add = c.add || [];
            c.add.push(a);
            this.set("controls", c)
        }, removeControl: function (a) {
            f.e.add(this.CLASS_NAME, "removeControl");
            var b = f.a.Fb(a), c = this.get("controls") || {};
            c.Sc = c.Sc || {};
            c.Sc[b] && delete c.Sc[b];
            c.remove = c.remove || [];
            c.remove.push(a);
            this.set("controls", c)
        }, clearControl: function () {
            f.e.add(this.CLASS_NAME, "clearControl");
            var a = this.get("controls") || {};
            a.remove = a.remove || [];
            a.Sc = a.Sc || {};
            for (var b in a.Sc) a.Sc.hasOwnProperty(b) &&
            (a.remove.push(a.Sc[b]), delete a.Sc[b]);
            this.set("controls", a)
        }, plugin: function (a, b) {
            "string" === typeof a && (a = [a]);
            for (var c = 0; c < a.length; c += 1) {
                var d = a[c].split(".");
                "function" === typeof window[d[0]][d[1]] && (a.splice(c, 1), c -= 1)
            }
            if (0 === a.length) return b(), this;
            for (var e = a.length, c = 0; c < a.length; c += 1) f.jb.load(a[c], function () {
                e -= 1;
                0 === e && b()
            });
            return this
        }, clearInfoWindow: function () {
            f.e.add(this.CLASS_NAME, "clearInfoWindow");
            var a = this.get("overlays");
            a && 0 !== a.length && this.yk && this.yk.close()
        }, remove: function (a) {
            f.e.add(this.CLASS_NAME,
                "remove");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null))
            }
        }, add: function (a) {
            f.e.add(this.CLASS_NAME, "add");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.getMap && c.getMap() !== this && !c.open && c.setMap && c.setMap(this)
            }
        }, getAllOverlays: function (a, b) {
            f.e.add(this.CLASS_NAME, "getAllOverlays");
            var c = this.get("overlays");
            if (a) {
                for (var d = "amap." + a.toLowerCase(), e = [], g = 0; g < c.length; g += 1) d !==
                c[g].CLASS_NAME.toLowerCase() || !b && (c[g].qa || c[g].isOfficial) || e.push(c[g]);
                return e
            }
            if (!b) {
                e = [];
                for (g = 0; g < c.length; g += 1) c[g].qa || c[g].isOfficial || e.push(c[g]);
                c = e
            }
            d = this.get("layers");
            e = [];
            if (d) for (var g = 0, h = d.length; g < h; g += 1) d[g] instanceof v.B.OB && e.push(d[g]);
            return c.concat(e)
        }, triggerResize: function () {
            this.map && this.map.EE()
        }, refreshSize: function () {
            this.ox = this.f9()
        }, f9: function () {
            return f.g.MR(this.J)
        }, getSize: function () {
            f.e.add(this.CLASS_NAME, "getSize");
            (!this.ox || 10 > this.ox.width * this.ox.height) &&
            this.refreshSize();
            return this.ox
        }, getContainer: function () {
            f.e.add(this.CLASS_NAME, "getContainer");
            return this.J
        }, panTo: function (a) {
            f.e.add(this.CLASS_NAME, "panTo");
            a = f.a.ra(a);
            this.loaded ? this.set("panTo", a) : this.setCenter(a)
        }, panBy: function (a, b, c) {
            f.e.add(this.CLASS_NAME, "panBy");
            var d = this.get("rotation") * Math.PI / 180, e = a * Math.cos(d) + Math.sin(d) * b;
            a = -Math.sin(d) * a + Math.cos(d) * b;
            b = this.loaded && this.map && this.map.yc ? this.map.yc.UV : this.get("centerCoords");
            d = Math.pow(2, 20 - this.getZoom());
            e = b.add(new f.I(-e *
                d, -a * d));
            e = this.Fd(e);
            !this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e)
        }, setFitView: function (a, b, c, d) {
            f.e.add(this.CLASS_NAME, "setFitView");
            if (a = this.bS(a)) {
                if (c = this.Mz(a, 0, new f.I(40, 40), c, d)) b = b || !this.getBounds().contains(a.Jg()) || f.l.Y && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
                return a
            }
        }, bS: function (a) {
            if (a) if (a instanceof v.D.Sf) a = [a]; else {
                if (!(a instanceof Array)) return null
            } else a = this.getAllOverlays();
            if (a) {
                for (var b, c = 0; c < a.length; c += 1) {
                    var d = a[c];
                    !d.get("visible") || d instanceof v.D.Qd || d instanceof v.D.Xj || (d = d.getBounds()) && (b = b ? d.aea(b) : d)
                }
                return b
            }
        }, setBounds: function (a, b, c, d, e, g) {
            f.e.add(this.CLASS_NAME, "setBounds");
            c = this.Mz(a, b, c, e, g);
            d = d || !this.getBounds().contains(a.Jg()) || f.l.Y && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
            this.setZoomAndCenter(c[0], c[1], d);
            return a
        }, RR: function (a, b, c, d, e) {
            a = this.bS(a);
            return this.Mz(a, b, c, d, e)
        }, Mz: function (a, b, c, d, e) {
            b = b ? Number(b) : 0;
            var g = this.bU || this.get("zooms")[1];
            e = this.getSize().Is();
            var h =
                0, k = 0;
            if (d) {
                var k = d[0], l = d[1], h = d[2];
                d = d[3];
                e.x -= h + d;
                e.y -= k + l;
                h = (h - d) / 2;
                k = (k - l) / 2
            }
            d = this.get("zooms");
            for (c && (e = e.Sa(c)); g > d[0] && !(c = this.Lb(a.Eb, g), l = this.Lb(a.Cb, g), a.Eb.M > a.Cb.M && (l.x += this.Lb(new f.W(180, 0), g).x), Math.abs(l.x - c.x) < e.x && Math.abs(c.y - l.y) < e.y); g -= 1) ;
            e = f.l.Y ? 17 : 18;
            b = Math.min(d[1], e, Math.max(d[0], g + b));
            a = this.Nf(this.Lb(a.Jg(), b).Sa(new f.I(h, k)), b);
            return [b, a]
        }, setLayers: function (a) {
            f.e.add(this.CLASS_NAME, "setLayers");
            for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
            this.set("layers",
                a)
        }, getLayers: function () {
            f.e.add(this.CLASS_NAME, "getLayers");
            return this.get("layers", null, !0)
        }, getDefaultLayer: function () {
            f.e.add(this.CLASS_NAME, "getDefaultLayer");
            return this.get("defaultLayer", null, !0)
        }, setDefaultLayer: function (a) {
            f.e.add(this.CLASS_NAME, "setDefaultLayer");
            a.oF = !0;
            var b = this.get("defaultLayer"), c = this.get("layers");
            if (b) {
                if (a === b) return;
                b.oF = !1;
                c = f.a.pk(c, f.a.indexOf(c, b))
            }
            this.set("defaultLayer", a, !0);
            c.push(a);
            this.setLayers(c)
        }, pixelToLngLat: function (a, b) {
            f.e.add(this.CLASS_NAME,
                "pixelToLngLat");
            return this.Nf(a, b)
        }, lnglatToPixel: function (a, b) {
            f.e.add(this.CLASS_NAME, "lnglatToPixel");
            return this.Lb(a, b)
        }, drawPolyline: function (a) {
            f.e.add(this.CLASS_NAME, "drawPolyline");
            this.set("draw", "polyline");
            this.set("drawStyle", a || {strokeColor: "#006600", Va: 0.9})
        }, drawPolygon: function (a) {
            f.e.add(this.CLASS_NAME, "drawPolygon");
            this.set("draw", "polygon");
            this.set("drawStyle", a || {strokeColor: "#006600", Va: 0.9, fillColor: "#FFAA00", cd: 0.9})
        }, drawCircle: function (a) {
            f.e.add(this.CLASS_NAME, "drawCircle");
            this.set("draw", "circle");
            this.set("drawStyle", a || {strokeColor: "#006600", Va: 0.9, fillColor: "#006600", cd: 0.9})
        }, Sz: function () {
            return this.view.Sz()
        }, endDraw: function () {
            this.set("draw", null)
        }, isGoogleTileVisible: function () {
            return this.map && this.map.FD()
        }, ve: function (a, b) {
            return this.view.ve(a, b)
        }, Ae: function (a, b) {
            return this.view.Ae(a, b)
        }
    });
    v.Sb.en({
        K$: "lngLatToGeodeticCoord",
        X8: "geodeticCoordToLngLat",
        Mz: "getFitZoomAndCenterByBounds",
        RR: "getFitZoomAndCenterByOverlays",
        Il: "lnglatTocontainer",
        lnglatTocontainer: "lngLatToContainer",
        Tm: "containTolnglat",
        containTolnglat: "containerToLngLat",
        Qb: "lngLatToP20",
        Fd: "p20ToLngLat",
        ve: "p20ToContainer",
        Ae: "containerToP20",
        Lb: "project",
        Nf: "unproject"
    });
    v.Sb.gb({
        isHotspotChanged: function () {
            if ("undefined" !== typeof this.nv && (this.n7(), this.get("isHotspot"))) {
                var a = this.get("layers", null, !0);
                a && a.length && !this.nv && this.sA && this.Laa()
            }
        }, Laa: function () {
            if (this.xk) this.ES(); else {
                var a = this;
                this.plugin("AMap.HotSpot", function () {
                    if (!a.nv) {
                        if (!a.xk) {
                            var b = new f.Rf;
                            new v.D.Qd;
                            a.xk = b
                        }
                        a.ES()
                    }
                })
            }
        }, n7: function () {
            this.xk && this.Y9()
        }, ZT: function (a) {
            a.type = "hotspotover";
            a.isIndoorPOI = !1;
            this.r("hotspotover", a)
        }, XT: function (a) {
            a.type = "hotspotclick";
            a.isIndoorPOI =
                !1;
            this.r("hotspotclick", a)
        }, YT: function (a) {
            a.type = "hotspotout";
            a.isIndoorPOI = !1;
            this.r("hotspotout", a)
        }, ES: function () {
            var a = this.xk;
            this.xk.setMap(this);
            a.h("mouseover", this.ZT, this);
            a.h("click", this.XT, this);
            a.h("mouseout", this.YT, this)
        }, Y9: function () {
            var a = this.xk;
            a.H("mouseover", this.ZT, this);
            a.H("click", this.XT, this);
            a.H("mouseout", this.YT, this);
            this.xk.setMap(null);
            this.xk = null
        }
    });
    v.event = {
        V: function (a, b, c, d) {
            f.e.add("AMap.event", "addDomListener");
            f.A.h(a, b, c, d);
            return new f.Ow(0, a, b, c, d)
        }, Z5: function () {
        }, addListener: function (a, b, c, d) {
            f.e.add("AMap.event", "addListener");
            f.a.Bk(a.addListener) ? a.addListener(b, c, d) : (a.Lg || (a.Lg = f.ja.Lg), f.ja.h.call(a, b, c, d));
            return new f.Ow(1, a, b, c, d)
        }, Fu: function (a, b, c, d) {
            f.e.add("AMap.event", "addListenerOnce");
            f.a.Bk(a.Fu) ? a.Fu(b, c, d) : (a.Lg || (a.Lg = f.ja.Lg), f.ja.h.call(a, b, c, d, !0));
            return new f.Ow(1, a, b, c, d)
        }, mz: function (a) {
            f.a.Bk(a.mz) ? a.mz() :
                f.ja.uj.call(a)
        }, rr: function (a, b) {
            f.a.Bk(a.rr) ? a.rr(b) : f.ja.uj.call(a, b)
        }, removeListener: function (a) {
            f.e.add("AMap.event", "removeListener");
            a instanceof f.Ow && (f.a.Bk(a.Ak.removeListener) ? a.Ak.removeListener(a) : 0 === a.type ? f.A.H(a.Ak, a.rG, a.iH, a.Bf) : 1 === a.type && (a.Ak.Lg || (a.Ak.Lg = f.ja.Lg), f.ja.H.call(a.Ak, a.rG, a.iH, a.Bf)))
        }, N: function (a, b) {
            f.e.add("AMap.event", "trigger");
            var c = Array.prototype.slice.call(arguments, 1);
            f.a.Bk(a.N) ? a.N.apply(a, c) : (a.Lg || (a.Lg = f.ja.Lg), f.ja.r.apply(a, c))
        }
    };
    f.Ow = f.Z.extend({
        C: function (a, b, c, d, e) {
            this.type = a;
            this.Ak = b;
            this.rG = c;
            this.iH = d;
            this.Bf = e
        }
    });
    var pc = {
        V: "addDomListener",
        Z5: "addDomListenerOnce",
        addListener: "addListener",
        Fu: "addListenerOnce",
        mz: "clearInstanceListeners",
        rr: "clearListeners",
        removeListener: "removeListener",
        N: "trigger"
    }, qc;
    for (qc in pc) pc.hasOwnProperty(qc) && (v.event[pc[qc]] = v.event[qc]);
    f.event = v.event;
    f.event.V(window, "beforeunload", f.e.send);
    v.B.kc = f.Z.extend({
        ea: [f.ja, f.de], C: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
            f.a.rb(this, a);
            this.Lf(this.F)
        }, getContainer: function () {
            if (this.B && this.B.R) return this.B.R.Kg()
        }, getZooms: function () {
            f.e.add(this.CLASS_NAME, "getZooms");
            return this.get("zooms", null, !0)
        }, setOpacity: function (a) {
            f.e.add(this.CLASS_NAME, "setOpacity");
            a !== this.get("opacity", null, !0) && this.set("opacity", a)
        }, getOpacity: function () {
            return this.get("opacity", null, !0)
        }, show: function () {
            f.e.add(this.CLASS_NAME, "show");
            this.set("visible", !0);
            this.Gn && this.B.j.layersChanged()
        }, hide: function () {
            f.e.add(this.CLASS_NAME, "hide");
            this.set("visible", !1);
            this.Gn && this.B.j.layersChanged()
        }, setMap: function (a) {
            f.e.add(this.CLASS_NAME, "setMap");
            var b = this.get("map");
            a ? (b && a !== b && b.Li(this), this.set("map", a)) : b && (b.Li(this), this.set("map", null, !0), this.Jh = !1, this.nf && this.nf())
        }, getMap: function () {
            f.e.add(this.CLASS_NAME, "getMap");
            return this.get("map", null, !0)
        }, mapChanged: function () {
            var a = this.get("map");
            a && a.Uy(this)
        }, setzIndex: function (a) {
            f.e.add(this.CLASS_NAME,
                "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            return this.get("zIndex", null, !0)
        }
    });
    v.B.Za = v.B.kc.extend({
        F: {
            tileSize: 256,
            visible: !0,
            opacity: 1,
            zIndex: 0,
            noLimg: 1,
            zooms: [3, 20],
            getTileUrl: f.l.Y ? f.w.vw : f.w.Jv,
            errorUrl: f.a.C8,
            detectRetina: !0,
            className: "amap-layer",
            mapNumber: "",
            cacheSize: f.l.size
        }, C: function (a) {
            f.e.ab("AMap.TileLayer", a);
            (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
            (new Date).getTime();
            this.a7(a);
            var b = a.zooms;
            b && b[1] >= this.Vh[0] ? (b[0] < this.Vh[0] && (b[0] = this.Vh[0]), b[1] > this.Vh[1] && (b[1] = this.Vh[1])) : a.zooms = [this.Vh[0], this.Vh[1]];
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
            arguments.callee.ma.call(this, a);
            a.Zv && (this.Zv = !0)
        }, setTextIndex: function (a) {
            f.e.add(this.CLASS_NAME, "setTextIndex");
            this.set("textIndex", a)
        }, zH: function () {
            if (this.get("createTile")) return !1;
            var a = this.get("getTileUrl");
            return a !== f.w.Jv && a !== f.w.vw ? !1 : !0
        }, PQ: function () {
            if (!this.zH()) return !1;
            var a = this.get("map");
            return a && a.mh && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
        }, hh: function (a) {
            var b = this.PQ(), c = this.get("map");
            this.zH() && (b ? this.set("mapNumber", "GS(2018)1709") : this.set("mapNumber", "GS(2018)1709"));
            if (this.Zv) return new f.B.Za(this, a, null, this.F.maxDataZoom);
            if (b) if (this.Gn = !0, f.B.Zi) {
                if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                    var d = f.w.mA;
                    f.l.ga && this.get("detectRetina") && (d = f.w.mA.replace("scl=1", "scl=2"));
                    (b = c.get("showBuildingBlock")) || (d = d.replace("ltype=3", "ltype=11"));
                    d = new f.B.Za(this, a, this.Lt(d), void 0, !0);
                    b && (d.$h = new f.B.Ac(new v.B.Za({
                        zooms: [16, 20],
                        innerLayer: "true"
                    }), a, ["building"]), d.$h.type = "\u697c\u5757\u56fe\u5c42", d.$h.Ud(["visible", "opacity", "zIndex"], d, !0), d.$h.Ku(c.get("mapStyle") ||
                        "normal"));
                    d.type = "\u6805\u683c\u5e95\u56fe";
                    return d
                }
                if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.K.view.type ? (c = new f.B.Ac(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", c.$h = new f.B.Ac(new v.B.Za({
                    zooms: [16, 20],
                    zIndex: 50,
                    innerLayer: "true"
                }), a, ["building"]), c.$h.Yd = 17, c.$h.type = "\u697c\u5757\u56fe\u5c42", c.$h.Ud(["visible", "opacity"], c, !0), c.$h.Ku("normal")) : (c = new f.B.Ac(this, a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), c
            } else return ["vectorlayer",
                "overlay"]; else return this.Gn = !1, new f.B.Za(this, a, null, this.F.maxDataZoom)
        }, getTileUrlChanged: function () {
            var a = this.get("getTileUrl");
            if (a === f.w.Jv || a === f.w.vw || a === f.w.TA) this.sA = !0;
            "string" === typeof a && (a = this.Lt(a));
            this.set("tileFun", a)
        }, a7: function (a) {
            this.Vh || (this.Vh = [this.F.zooms[0], this.F.zooms[1]]);
            var b;
            a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
            f.l.Y && f.l.ga && this.F.detectRetina && !b && (this.Vh[1] -= 1)
        }, getTiles: function () {
            f.e.add(this.CLASS_NAME, "getTiles");
            var a = this.get("tiles",
                null, !0);
            if (a && a.length) a = a[0]; else return [];
            for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
            return b
        }, reload: function () {
            f.e.add(this.CLASS_NAME, "reload");
            this.set("reload", 1)
        }, Nn: function () {
            var a = this.get("map", null, !0);
            this.setMap(null);
            this.Jh = !1;
            this.setMap(a)
        }, setTileUrl: function (a) {
            f.e.add(this.CLASS_NAME, "setTileUrl");
            this.PQ() ? (this.set("getTileUrl", a), this.Nn()) : this.set("getTileUrl", a)
        }, Lt: function (a) {
            var b = this, c, d, e;
            return function (g, h, k) {
                g =
                    (g + Math.pow(2, k)) % Math.pow(2, k);
                if ("number" !== typeof (g + h + k)) return null;
                var l = b.get("map"), m = "zh_cn";
                l && (m = l.get("lang") || "zh_cn");
                k = a.replace("[x]", g).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
                if (!c) {
                    if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
                    c = !0
                }
                e && e.length && (k = k.replace(d, e[Math.abs(g + h) % e.length]));
                return k
            }
        }, getTileUrl: function (a, b, c) {
            f.e.add(this.CLASS_NAME, "getTileUrl");
            return this.get("tileFun", null, !0)(a, b, c)
        }, getZooms: function () {
            f.e.add(this.CLASS_NAME,
                "getZooms");
            return this.get("zooms", null, !0)
        }
    });
    v.B.Za.QK = v.B.Za.extend({
        F: {
            getTileUrl: f.w.aJ,
            zooms: [3, 20],
            zIndex: 2,
            maxDataZoom: 18,
            detectRetina: !1,
            mapNumber: "GS(2019)3913",
            className: "amap-layer amap-satellite",
            cacheSize: f.l.size
        }, C: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.Satellite";
            this.Vh = [3, 20];
            arguments.callee.ma.apply(this, arguments);
            f.e.ab(this.CLASS_NAME, a)
        }
    });
    v.B.Za.OK = v.B.Za.extend({
        F: {
            getTileUrl: f.w.TA,
            zooms: [3, 20],
            zIndex: 3,
            type: "overlayer",
            maxDataZoom: 18,
            className: "amap-layer amap-roadnet",
            cacheSize: f.l.size
        }, C: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.RoadNet";
            this.Vh = [3, 20];
            arguments.callee.ma.apply(this, arguments);
            f.e.ab(this.CLASS_NAME, a)
        }, hh: function (a) {
            if (this.get("map").mh) {
                this.Gn = !0;
                var b = f.w.VA;
                f.l.ga && this.get("detectRetina") && (b = f.w.VA.replace("scl=1", "scl=2"));
                a = new f.B.Za(this, a, this.Lt(b), this.F.maxDataZoom)
            } else this.Gn = !1, a = new f.B.Za(this,
                a);
            return a
        }
    });
    v.B.Za.UK = v.B.Za.extend({
        F: {
            getTileUrl: function (a, b, c) {
                return f.w.ac + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
            },
            zooms: [6, 20],
            zIndex: 4,
            type: "overlayer",
            autoRefresh: !1,
            interval: 180,
            maxDataZoom: 17,
            alwaysRender: !f.l.jG,
            className: "amap-layer amap-traffic",
            cacheSize: f.l.size
        }, C: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.Traffic";
            this.Vh = [6, 20];
            arguments.callee.ma.apply(this, arguments);
            this.startRefresh();
            f.e.ab(this.CLASS_NAME, a)
        }, stopRefresh: function () {
            f.e.add(this.CLASS_NAME, "stopRefresh");
            this.LA && (clearInterval(this.LA), this.LA = null)
        }, startRefresh: function () {
            f.e.add(this.CLASS_NAME, "startRefresh");
            if (this.get("autoRefresh") && !this.LA) {
                var a = this;
                this.LA = setInterval(function () {
                    a.reload();
                    a.r("refresh")
                }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
            }
        }, reload: function () {
            f.e.add(this.CLASS_NAME, "reload");
            f.a.ec(function () {
                this.set("reload")
            }, this)
        }, nf: function () {
            this.stopRefresh();
            this.get("map") && this.get("map").H("zoomstart", this.reload, this)
        }, hh: function (a) {
            var b = this.get("map"),
                b = a.K;
            b.h("zoomstart", this.reload, this);
            return "d" !== b.get("baseRender") ? f.B.tq ? a = new f.B.tq(this, a) : ["vt"] : a = new f.B.Za(this, a, null, this.F.maxDataZoom)
        }
    });
    v.B.Za.Pw = v.B.Za.extend({
        F: {
            zooms: [3, 20],
            zIndex: 12,
            className: "amap-layer amap-flexible",
            cacheSize: f.l.size
        }, C: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
            this.u$ = !0;
            arguments.callee.ma.call(this, a)
        }, setCreateTile: function (a) {
            "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
        }, getCreateTile: function () {
            return this.get("createTile", null, !0)
        }
    });
    v.B.Za.WX = v.B.Za.Pw.extend({
        F: {
            zooms: [3, 20],
            zIndex: 12,
            tileSize: 512,
            className: "amap-layer amap-wms",
            cacheSize: f.l.size,
            url: "",
            params: ""
        }, C: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.WMS";
            arguments.callee.ma.call(this, a);
            this.fq();
            var b = this, c = this.get("tileSize");
            this.set("createTile", function (a, e, g, h, k) {
                var l = Math.pow(2, 20 - g) * c;
                g = new f.I(l * a, l * (e + 1));
                a = new f.I(l * (a + 1), l * e);
                e = f.lA.eU(g);
                a = f.lA.eU(a);
                var m = document.createElement("img");
                "3D" === b.cK && (m.crossOrigin = "anonymous");
                m.src = this.url + "&BBOX=" +
                    e + "," + a;
                f.A.h(m, "load", function () {
                    h(m)
                });
                f.A.h(m, "error", function () {
                    k(m)
                })
            })
        }, fq: function () {
            var a = this.get("url", null, !0), b = this.get("params", null, !0), c = this.get("tileSize");
            b.WIDTH = c;
            b.HEIGHT = c;
            b.CRS = b.CRS || "EPSG:3857";
            b.REQUEST = "GetMap";
            b.SERVICE = "WMS";
            b.FORMAT = b.FORMAT || "image/png";
            b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
            delete b.BBOX;
            this.url = a + "?" + f.a.join(b, "&");
            this.reload()
        }, setUrl: function (a) {
            this.set("url", a, !0);
            this.fq()
        }, getUrl: function () {
            return this.get("url", null, !0)
        },
        setParams: function (a) {
            f.extend(this.get("params", null, !0), a || {});
            this.fq()
        }, getParams: function () {
            return this.get("params", null, !0)
        }
    });
    v.B.Za.XX = v.B.Za.Pw.extend({
        F: {zooms: [3, 20], tileSize: 256, zIndex: 12, className: "amap-layer amap-wmts", cacheSize: f.l.size},
        C: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.WMTS";
            arguments.callee.ma.call(this, a);
            this.fq();
            var b = this;
            this.get("tileSize");
            this.set("createTile", function (a, d, e, g, h) {
                var k = document.createElement("img");
                "3D" === b.cK && (k.crossOrigin = "anonymous");
                k.src = this.url + "&TileMatrix=" + e + "&TileRow=" + d + "&TileCol=" + a;
                f.A.h(k, "load", function () {
                    g(k)
                });
                f.A.h(k, "error", function () {
                    h(k)
                })
            })
        },
        fq: function () {
            var a =
                this.get("url", null, !0), b = this.get("params", null, !0);
            this.get("tileSize");
            b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
            b.Request = "GetTile";
            b.Service = "WMTS";
            b.Format = b.Format || "image/png";
            this.url = a + "?" + f.a.join(b, "&");
            this.reload()
        },
        setUrl: function (a) {
            this.set("url", a, !0);
            this.fq()
        },
        getUrl: function () {
            return this.get("url", null, !0)
        },
        setParams: function (a) {
            f.extend(this.get("params", null, !0), a || {});
            this.fq()
        },
        getParams: function () {
            return this.get("params", null, !0)
        }
    });
    v.B.Za.at = v.B.Za.Pw.extend({
        F: {zooms: [10, 18], zIndex: 2}, C: function (a) {
            arguments.callee.ma.apply(this, arguments);
            var b = this;
            this.set("createTile", function (a, d, e, g, h) {
                function k(a, c, d) {
                    var e = "zh_cn";
                    b && b.get && l && (e = l.get("lang") || "zh_cn");
                    return f.w.ac + "://grid.amap.com/grid/" + d + "/" + a + "/" + c + "?src=jsapi&key=" + f.w.key + "&lang=" + e + "&dpiType=" + (f.l.md ? "wprd" : "webrd")
                }

                var l = b.j || b.get("map");
                l.sm || (l.sm = new f.Sb.at(l.map));
                if (l.sm.rw(a, d, e)) h(); else {
                    var m = document.createElement("img");
                    "3D" === b.cK && (m.crossOrigin =
                        "anonymous");
                    m.src = k(a, d, e);
                    f.A.h(m, "load", function () {
                        g(m)
                    });
                    f.A.h(m, "error", function () {
                        h(m)
                    })
                }
            })
        }
    });
    v.B.lc = v.B.kc.extend({
        F: {visible: !0, zooms: [3, 25], type: "overlay", zIndex: 5, alwaysRender: !0},
        C: function (a) {
            arguments.callee.ma.apply(this, arguments)
        },
        hh: function (a) {
            return new f.B.lc(this, a)
        }
    });
    v.B.co = v.B.kc.extend({
        F: {
            zooms: [16, 20],
            zIndex: 8,
            url: f.w.Hw + "/vector/buildings",
            wallColor: [200, 190, 180],
            strokeColor: [145, 140, 135],
            CAM_Z: 400,
            lineCap: "round",
            lineJoin: "round",
            lineWidth: 1,
            fadeFactor: 1,
            visible: !0
        }, C: function () {
            arguments.callee.ma.apply(this, arguments);
            this.CLASS_NAME = "AMap.Buildings"
        }, hh: function (a) {
            if (f.B.co) return "3D" === a.K.view.type ? (a = new f.B.Ac(this, a, ["building"]), a.Yd = 17, a) : new f.B.co(this, a);
            if (f.l.qn) return ["building", "overlay"]
        }
    });
    v.B.KB = v.B.kc.extend({
        F: {visible: !0, zooms: [3, f.l.Y ? 20 : 18], opacity: 1, type: "overlay", zIndex: 6}, C: function (a) {
            arguments.callee.ma.apply(this, arguments)
        }, hh: function (a) {
            return f.B.dt ? new f.B.dt(this, a) : ["imagelayer"]
        }, getMap: function () {
            f.e.add(this.CLASS_NAME, "getMap");
            return this.yh.map
        }, show: function () {
            f.e.add(this.CLASS_NAME, "show");
            this.set("visible", !0);
            this.r("options")
        }, getOpacity: function () {
            f.e.add(this.CLASS_NAME, "getOpacity");
            return this.get("opacity", null, !0)
        }, setOpacity: function (a) {
            f.e.add(this.CLASS_NAME,
                "setOpacity");
            this.set("opacity", a)
        }, getBounds: function () {
            f.e.add(this.CLASS_NAME, "getBounds");
            return this.get("bounds", null, !0).Db()
        }, setBounds: function (a) {
            f.e.add(this.CLASS_NAME, "setBounds");
            this.r("bounds", a);
            this.setOptions({bounds: a})
        }, hide: function () {
            f.e.add(this.CLASS_NAME, "hide");
            this.set("visible", !1);
            this.r("options")
        }, setOptions: function (a) {
            f.e.add(this.CLASS_NAME ? this.CLASS_NAME : "AMap.ImageLayer", "setOptions");
            this.Lf(a);
            this.r("options")
        }, getOptions: function () {
            f.e.add(this.CLASS_NAME,
                "getOptions");
            var a = {}, b;
            for (b in this.F) this.F.hasOwnProperty(b) && (a[b] = this.get(b));
            return a
        }, getElement: function () {
            return this.B.R ? this.B.R.zb : this.B.Mk ? this.B.Mk.zb : null
        }
    });
    v.B.dt = v.B.KB.extend({
        C: function (a) {
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments);
            this.CLASS_NAME = "AMap.ImageLayer"
        }, getImageUrl: function () {
            f.e.add(this.CLASS_NAME, "getImageUrl");
            return this.get("__source__")
        }, setImageUrl: function (a) {
            f.e.add(this.CLASS_NAME, "setImageUrl");
            return this.set("__source__", a)
        }
    });
    v.B.UX = v.B.KB.extend({
        C: function (a) {
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments);
            this.CLASS_NAME = "AMap.VideoLayer"
        }, getVideoUrl: function () {
            f.e.add(this.CLASS_NAME, "getVideoUrl");
            return this.get("__source__")
        }, setVideoUrl: function (a) {
            f.e.add(this.CLASS_NAME, "setVideoUrl");
            return this.set("__source__", a)
        }
    });
    v.B.SW = v.B.KB.extend({
        C: function (a) {
            a && a.canvas && (a.__source__ = a.canvas);
            arguments.callee.ma.apply(this, arguments);
            this.CLASS_NAME = "AMap.CanvasLayer"
        }, getCanvas: function () {
            f.e.add(this.CLASS_NAME, "getCanvas");
            return this.get("__source__")
        }, setCanvas: function (a) {
            f.e.add(this.CLASS_NAME, "setCanvas");
            return this.set("__source__", a)
        }, reFresh: function () {
            this.B && (this.B.pw = !0, this.B.set("display"))
        }
    });
    v.B.qX = v.B.kc.extend({
        F: {
            visible: !0,
            zooms: [3, f.l.Y ? 20 : 18],
            type: "overlay",
            zIndex: 5,
            cursor: "pointer",
            alwaysRender: !0,
            stable: !0,
            bubble: !0,
            className: "amap-mass"
        }, C: function (a, b) {
            this.CLASS_NAME = "AMap.MassMarks";
            f.e.ab(this.CLASS_NAME, b);
            f.l.qn && (this.Ng = !0, b.size && (b.size = f.a.Sl(b.size)), this.setData(a), f.a.rb(this, b), b.style ? (this.Lf(this.F, !0), this.setStyle(b.style)) : this.setStyle(this.F))
        }, clear: function () {
            this.set("dataSources", "")
        }, getStyle: function () {
            f.e.add(this.CLASS_NAME, "getStyle");
            return this.Ni
        },
        setStyle: function (a) {
            f.e.add(this.CLASS_NAME, "setStyle");
            if (a instanceof Array) {
                for (var b = 0; b < a.length; b += 1) a[b].size = f.a.Sl(a[b].size), a.ae = Math.max(a.ae || 0, a[b].size.width + a[b].anchor.x), a.we = Math.max(a.ae || 0, a[b].size.height + a[b].anchor.y);
                this.Ni = a
            } else a.size && (a.size = f.a.Sl(a.size)), this.Lf(a, !0), this.Ni = {
                anchor: this.get("anchor"),
                url: this.get("url"),
                size: this.get("size")
            }, this.Ni.ae = this.Ni.size.width + this.Ni.anchor.x, this.Ni.we = this.Ni.size.height + this.Ni.anchor.y;
            this.r("style")
        }, setData: function (a) {
            f.e.add(this.CLASS_NAME,
                "setData");
            this.set("dataSources", a)
        }, getData: function () {
            f.e.add(this.CLASS_NAME, "getData");
            return this.get("datas") || this.get("dataSources")
        }, setMap: function (a) {
            f.e.add(this.CLASS_NAME, "setMap");
            f.l.qn && (a ? (this.get("map") && this.get("map").Li(this), this.set("map", a)) : this.get("map") && (this.get("map").Li(this), this.set("map", null, !0), this.Jh = !1, this.nf && this.nf()))
        }, hh: function (a) {
            return f.jb.Av(["cvector"]) ? (a = new f.B.lc(this, a), this.X("datas", a), a) : ["cvector"]
        }
    });
    v.B.OB = v.B.dt.extend({
        C: function (a, b, c) {
            f.e.ab("AMap.GroundImage", c);
            c = c || {};
            this.Se = !0;
            var d = parseFloat(c.opacity);
            isNaN(d) && (d = 1);
            arguments.callee.ma.call(this, {
                url: a,
                bounds: b,
                clickable: c.clickable,
                opacity: d,
                map: c.map,
                zooms: c.zooms || [3, 20]
            });
            this.CLASS_NAME = "AMap.GroundImage"
        }, Baa: function (a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.r("click", a))
        }, Caa: function (a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.r("dblclick", a))
        }, setMap: function (a) {
            f.e.add(this.CLASS_NAME,
                "setMap");
            a ? (this.get("map") && (this.get("map").Li(this), this.WQ && v.event.removeListener(this.WQ), this.kR && v.event.removeListener(this.kR)), this.set("map", a)) : this.get("map") && (this.get("map").Li(this), this.yh.map = null)
        }, mapChanged: function () {
            this.get("map") && (this.get("map").Uy(this), this.get("clickable") && (this.WQ = v.event.addListener(this.get("map"), "click", this.Baa, this), this.kR = v.event.addListener(this.get("map"), "dblclick", this.Caa, this)))
        }
    });
    v.D.Sf = f.Z.extend({
        ea: [f.ja, f.de, {ra: f.a.ra}], F: {extData: {}, bubble: !1, clickable: !0, draggable: !1}, C: function () {
            this.Vx = f.a.Fb(this)
        }, aha: function () {
            return this.Vx
        }, jga: function () {
            this.get("map", null, !0) && this.setMap(this.get("map"))
        }, mapChanged: function () {
            this.get("map", null, !0) && this.get("map", null, !0).Gu(this)
        }, show: function () {
            f.e.add(this.CLASS_NAME, "show");
            this.set("visible", !0)
        }, hide: function () {
            f.e.add(this.CLASS_NAME, "hide");
            this.set("visible", !1)
        }, setMap: function (a) {
            f.e.add(this.CLASS_NAME,
                "setMap");
            a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).os(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).os(this), this.set("map", null, !0)))
        }, getMap: function () {
            f.e.add(this.CLASS_NAME, "getMap");
            return this.get("map", null, !0)
        }, setExtData: function (a) {
            f.e.add(this.CLASS_NAME, "setExtData");
            this.set("extData", a)
        }, getExtData: function () {
            f.e.add(this.CLASS_NAME, "getExtData");
            return this.get("extData", null, !0)
        }
    });
    v.D.lc = v.D.Sf.extend({
        C: function (a) {
            v.D.lc.Bc.C.apply(this, arguments)
        }, show: function () {
            this.set("visible", !0);
            this.r("show", {type: "show", target: this})
        }, hide: function () {
            this.set("visible", !1);
            this.r("hide", {type: "hide", target: this})
        }, getVisible: function () {
            return this.get("visible", null, !0)
        }, getOptions: function () {
            var a = {},
                b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
                c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir".split(" "),
                d = ["fillColor", "fillOpacity", "path", "lineJoin"], e = ["center", "radius"], g = ["bounds"], h = [];
            this instanceof v.D.Ob && (h = b.concat(c));
            this instanceof v.D.Rb && (h = b.concat(d));
            this instanceof v.D.Xe && (h = b.concat(e).concat(d));
            this instanceof v.D.eo && (h = b.concat(e).concat(d));
            this instanceof v.D.jo && (h = b.concat(d).concat(g));
            for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null, !0);
            return a
        }, setOptions: function (a) {
            a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.ra(a.path));
            a.center &&
            (a.center = this.ra(a.center));
            var b;
            a.hasOwnProperty("map") && (b = a.map, delete a.map);
            this.Lf(a);
            void 0 !== b && (this.setMap(b), a.map = b);
            this.r("options");
            this.r("change", {type: "change", target: this})
        }, setDraggable: function (a) {
            this.set("draggable", a)
        }
    });
    v.D.Yw = v.D.lc.extend({
        F: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            lineJoin: "miter",
            path: []
        }, C: function (a) {
            v.D.Yw.Bc.C.apply(this, arguments)
        }, setPath: function (a, b) {
            f.e.add(this.CLASS_NAME, "setPath");
            a && a.length || (a = []);
            a = this.ra(a);
            this.set("path", a);
            this.r("change", {type: "change", target: this});
            b || this.r("setPath")
        }, getPath: function () {
            f.e.add(this.CLASS_NAME, "getPath");
            return this.get("path", null, !0)
        }, Hc: function () {
            var a =
                this.get("path");
            if (!a || !a.length) return null;
            a[0] instanceof f.W && (a = [a]);
            for (var b = new f.zd(180, 90, -180, -90), c = 0; c < a.length; c += 1) for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1) b.extend(d[e]);
            return b
        }
    });
    v.D.Yw.en({Hc: "getBounds"});
    v.D.Ye = f.Z.extend({
        ea: [f.ja, f.de],
        F: {
            size: new f.tc(36, 36),
            imageOffset: new f.I(0, 0),
            image: f.w.eb + "/theme/v1.3/markers/0.png",
            imageSize: null
        },
        C: function (a) {
            this.CLASS_NAME = "AMap.Icon";
            f.e.ab(this.CLASS_NAME, a);
            a = a || {};
            a.size && (a.size = f.a.Sl(a.size));
            a.imageSize && (a.imageSize = f.a.Sl(a.imageSize));
            f.a.rb(this, a);
            this.Lf(this.F)
        },
        setImageSize: function (a) {
            f.e.add(this.CLASS_NAME, "setImageSize");
            a = f.a.Sl(a);
            this.set("imageSize", a)
        },
        getImageSize: function () {
            f.e.add(this.CLASS_NAME, "getImageSize");
            return this.get("imageSize",
                null, !0)
        }
    });
    v.D.pX = f.Z.extend({
        ea: [f.ja, f.de], F: {coords: [], type: ""}, C: function (a) {
            this.CLASS_NAME = "AMap.MarkerShape";
            f.e.ab(this.CLASS_NAME, a);
            f.a.rb(this, a);
            this.Lf(this.F)
        }
    });
    v.D.fb = v.D.Sf.extend({
        F: {
            cursor: "pointer",
            visible: !0,
            zIndex: 100,
            angle: 0,
            textAlign: "left",
            verticalAlign: "top",
            autoRotation: !1,
            opacity: 1,
            offset: new f.I(-9, -31),
            size: new f.I(19, 33),
            raiseOnDrag: !1,
            topWhenClick: !1,
            topWhenMouseOver: !1,
            animation: "AMAP_ANIMATION_NONE"
        }, C: function (a) {
            this.CLASS_NAME = "AMap.Marker";
            f.e.ab(this.CLASS_NAME, a);
            a = a || {};
            this.Se = !0;
            this.v1 = f.a.Fb(this);
            a.position && (a.position = this.ra(a.position));
            f.a.rb(this, a);
            f.l.Ld && (this.F.angle = 0);
            this.Lf(this.F, !0);
            this.mapChanged()
        }, getId: function () {
            return this.v1
        },
        setRaiseOnDrag: function (a) {
            f.e.add(this.CLASS_NAME, "setRaiseOnDrag");
            this.set("raiseOnDrag", a)
        }, setPosition: function (a) {
            f.e.add(this.CLASS_NAME, "setPosition");
            a = this.ra(a);
            this.set("position", a)
        }, getBounds: function () {
            var a = this.getPosition().Db();
            return new f.zd(a, a.Db())
        }, mapChanged: function () {
            this.get("map", null, !0) && (this.get("position", null, !0) || this.set("position", this.get("map").get("center")), this.get("map", null, !0).Gu(this))
        }, getPosition: function () {
            f.e.add(this.CLASS_NAME, "getPosition");
            return this.get("position",
                null, !0)
        }, setIcon: function (a) {
            f.e.add(this.CLASS_NAME, "setIcon");
            this.set("icon", a)
        }, getIcon: function () {
            f.e.add(this.CLASS_NAME, "getIcon");
            return this.get("icon", null, !0)
        }, setContent: function (a) {
            f.e.add(this.CLASS_NAME, "setContent");
            this.set("content", a)
        }, getContent: function () {
            f.e.add(this.CLASS_NAME, "getContent");
            return this.get("content", null, !0)
        }, getContentDom: function () {
            return this.get("contentDom", null, !0)
        }, hide: function () {
            f.e.add(this.CLASS_NAME, "hide");
            this.set("visible", !1)
        }, show: function () {
            f.e.add(this.CLASS_NAME,
                "show");
            this.set("visible", !0)
        }, setCursor: function (a) {
            f.e.add(this.CLASS_NAME, "setCursor");
            this.set("cursor", a)
        }, setRotation: function (a) {
            f.e.add(this.CLASS_NAME, "setRotation");
            f.l.Ld || this.set("angle", a)
        }, setAngle: function (a) {
            f.e.add(this.CLASS_NAME, "setAngle");
            f.l.Ld || "number" !== typeof a || this.set("angle", a)
        }, getAngle: function () {
            f.e.add(this.CLASS_NAME, "getAngle");
            return this.get("angle", null, !0)
        }, setOffset: function (a) {
            f.e.add(this.CLASS_NAME, "setOffset");
            this.set("offset", a)
        }, getOffset: function () {
            f.e.add(this.CLASS_NAME,
                "getOffset");
            return this.get("offset", null, !0)
        }, setTextAlign: function (a) {
            f.e.add(this.CLASS_NAME, "setTextAlign");
            this.set("textAlign", a)
        }, getTextAlign: function () {
            f.e.add(this.CLASS_NAME, "getTextAlign");
            return this.get("textAlign", null, !0)
        }, setVerticalAlign: function (a) {
            f.e.add(this.CLASS_NAME, "setVerticalAlign");
            this.set("verticalAlign", a)
        }, getVerticalAlign: function () {
            f.e.add(this.CLASS_NAME, "getVerticalAlign");
            return this.get("verticalAlign", null, !0)
        }, setzIndex: function (a) {
            f.e.add(this.CLASS_NAME,
                "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            f.e.add(this.CLASS_NAME, "getzIndex");
            return this.get("zIndex", null, !0)
        }, setOpacity: function (a) {
            f.e.add(this.CLASS_NAME, "setOpacity");
            this.set("opacity", a)
        }, setDraggable: function (a) {
            f.e.add(this.CLASS_NAME, "setDraggable");
            this.set("draggable", a)
        }, getDraggable: function () {
            f.e.add(this.CLASS_NAME, "getDraggable");
            return this.get("draggable", null, !0)
        }, moveTo: function (a, b, c) {
            f.e.add(this.CLASS_NAME, "moveTo");
            a = this.ra(a);
            this.set("move", {
                De: a, speed: b,
                mb: c
            })
        }, moveAlong: function (a, b, c, d) {
            f.e.add(this.CLASS_NAME, "moveAlong");
            this.set("move", {De: a, speed: b, mb: c, d7: d})
        }, stopMove: function () {
            f.e.add(this.CLASS_NAME, "stopMove");
            this.set("move", !1)
        }, pauseMove: function () {
            f.e.add(this.CLASS_NAME, "pauseMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "pause";
            this.set("move", a);
            return !0
        }, resumeMove: function () {
            f.e.add(this.CLASS_NAME, "resumeMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "resume";
            this.set("move", a);
            return !0
        }, setShadow: function (a) {
            f.e.add(this.CLASS_NAME,
                "setShadow");
            this.set("shadow", a)
        }, getShadow: function () {
            f.e.add(this.CLASS_NAME, "getShadow");
            return this.get("shadow", null, !0)
        }, setClickable: function (a) {
            f.e.add(this.CLASS_NAME, "setClickable");
            a !== this.getClickable() && this.set("clickable", a)
        }, getClickable: function () {
            f.e.add(this.CLASS_NAME, "getClickable");
            return this.get("clickable", null, !0)
        }, setTitle: function (a, b) {
            f.e.add(this.CLASS_NAME, "setTitle");
            "string" === typeof a && this.set("title", a, b)
        }, getTitle: function () {
            f.e.add(this.CLASS_NAME, "getTitle");
            return this.get("title", null, !0)
        }, setLabel: function (a) {
            f.e.add(this.CLASS_NAME, "setLabel");
            a && (a.hasOwnProperty("content") || a.hasOwnProperty("offSet")) || (a = {content: ""});
            a = f.extend({}, this.get("label"), a);
            this.set("label", a)
        }, getLabel: function () {
            f.e.add(this.CLASS_NAME, "getLabel");
            return this.get("label", null, !0)
        }, setTop: function (a, b) {
            f.e.add(this.CLASS_NAME, "setTop");
            this.set("isTop", a, b)
        }, getTop: function () {
            f.e.add(this.CLASS_NAME, "getTop");
            return this.get("isTop", null, !0)
        }, setShape: function (a, b) {
            f.e.add(this.CLASS_NAME,
                "setShape");
            this.set("shape", a, b)
        }, getShape: function () {
            f.e.add(this.CLASS_NAME, "getShape");
            return this.get("shape", null, !0)
        }, setAnimation: function (a, b) {
            f.e.add(this.CLASS_NAME, "setAnimation");
            this.set("animation", a, b)
        }, getAnimation: function () {
            f.e.add(this.CLASS_NAME, "getAnimation");
            return this.get("animation", null, !0)
        }, getMap: function () {
            f.e.add(this.CLASS_NAME, "getMap");
            return this.get("map", null, !0)
        }, markOnAMAP: function (a) {
            f.e.add(this.CLASS_NAME, "markOnAMAP");
            a = a || {};
            var b = {};
            b.name = a.name || this.get("name",
                null, !0) || "";
            a = this.ra(a.position) || this.get("position", null, !0);
            b.y = a.O;
            b.x = a.M;
            f.Pf.Sn(f.Pf.J9(b))
        }
    });
    f.Xt = {
        FU: 12, sfa: function () {
        }, ZO: function () {
            if (f.Ra && f.Ra.length) {
                var a = f.Xt.bv(JSON.stringify({mks: f.Ra, from: f.w.U8, key: f.w.key}));
                new f.Ka.XMLHttpRequest(f.w.eb + "/count", {C7: "data=" + a, yd: "POST"});
                f.Ra = []
            }
        }, bv: function (a) {
            for (var b = "", c = 0, d = a.length; c < d; c++) b += String.fromCharCode((a.charCodeAt(c) + 256) % 65535);
            return b
        }, ih: function (a) {
            for (var b = "", c = 0, d = a.length; c < d; c++) b += String.fromCharCode((a.charCodeAt(c) - 256 + 65535) % 65535);
            return b
        }
    };
    if (f.l.kz && !f.l.Y && (new Date).getHours() === f.Xt.FU) {
        var rc = setInterval(function () {
            (new Date).getHours() !== f.Xt.FU ? clearInterval(rc) : f.Xt.ZO()
        }, 6E3);
        f.event.V(window, "beforeunload", f.Xt.ZO)
    }
    ;v.D.Xj = v.D.Sf.extend({
        F: {visible: !1, items: []}, C: function (a) {
            this.CLASS_NAME = "AMap.ContextMenu";
            f.e.ab(this.CLASS_NAME, a);
            this.Se = !0;
            f.a.rb(this, a);
            this.F.items = [];
            this.Lf(this.F)
        }, addItem: function (a, b, c) {
            f.e.add(this.CLASS_NAME, "addItem");
            this.get("items").push({lW: a, mb: b, AA: c});
            this.r("items")
        }, removeItem: function (a, b) {
            f.e.add(this.CLASS_NAME, "removeItem");
            var c = this.get("items"), d, e;
            for (e = 0; e < c.length; e += 1) if (d = c[e], d.lW === a && d.mb === b) {
                c.splice(e, 1);
                break
            }
            this.r("items")
        }, open: function (a, b) {
            f.e.add(this.CLASS_NAME,
                "open");
            b = f.a.ra(b);
            this.set("position", b);
            this.map ? this.map && this.map !== a && (this.map.os(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
            this.r("open", {type: "open", target: this})
        }, close: function () {
            f.e.add(this.CLASS_NAME, "close");
            this.setMap(null);
            this.map && (this.map = this.map.rz = null, this.r("close", {type: "close", target: this}))
        }
    });
    v.D.Qd = v.D.Sf.extend({
        F: {
            visible: !0,
            offset: new f.I(0, 0),
            showShadow: !1,
            closeWhenClickMap: !1,
            retainWhenClose: !0,
            autoMove: !0
        }, C: function (a) {
            this.CLASS_NAME = "AMap.InfoWindow";
            f.e.ab(this.CLASS_NAME, a);
            a = a || {};
            this.Se = !0;
            a && a.size && (a.size = f.a.Sl(a.size));
            f.a.rb(this, a);
            this.Lf(this.F);
            a.position && this.set("position", f.a.ra(a.position), !0)
        }, open: function (a, b) {
            f.e.add(this.CLASS_NAME, "open");
            b = f.a.ra(b);
            if (a && !this.qB && (b = b || this.get("position", null, !0))) {
                this.r("change", {type: "change", target: this});
                var c =
                    this.get("map", null, !0);
                c && c === a ? this.set("position", b) : (this.map = a, a.yk && a.yk.close(), this.set("position", b, !0), this.setMap(a));
                this.r("open", {type: "open", target: this})
            }
        }, close: function () {
            f.e.add(this.CLASS_NAME, "close");
            this.setMap(null);
            this.map = null;
            this.r("change", {type: "change", target: this})
        }, setContent: function (a) {
            f.e.add(this.CLASS_NAME, "setContent");
            this.set("content", a);
            this.r("change", {type: "change", target: this})
        }, getContentU: function () {
            f.e.add(this.CLASS_NAME, "getContentU");
            return this.get("content",
                null, !0)
        }, getContentDom: function () {
            return this.get("contentDom", null, !0)
        }, getContent: function () {
            f.e.add(this.CLASS_NAME, "getContent");
            return this.get("content", null, !0)
        }, setPosition: function (a) {
            f.e.add(this.CLASS_NAME, "setPosition");
            a = f.a.ra(a);
            this.set("position", a);
            this.r("change", {type: "change", target: this})
        }, setOffset: function (a) {
            f.e.add(this.CLASS_NAME, "setOffset");
            this.set("offset", a);
            this.r("change", {type: "change", target: this})
        }, getPosition: function () {
            f.e.add(this.CLASS_NAME, "getPosition");
            return this.get("position", null, !0)
        }, setSize: function (a) {
            f.e.add(this.CLASS_NAME, "setSize");
            a = f.a.Sl(a);
            this.set("size", a);
            this.r("change", {type: "change", target: this})
        }, getSize: function (a) {
            f.e.add(this.CLASS_NAME, "getSize");
            var b = this.get("size", null, !0);
            if (b) return b;
            if (this.D && !a) return new f.tc(this.D.eg.offsetWidth, this.D.eg.offsetHeight)
        }, getIsOpen: function () {
            f.e.add(this.CLASS_NAME, "getIsOpen");
            return !!this.get("map")
        }
    });
    v.D.Ob = v.D.Yw.extend({
        F: {isOutline: !1, outlineColor: "#000000", geodesic: !1, borderWeight: 1},
        C: function (a) {
            v.D.Ob.Bc.C.apply(this, arguments);
            this.CLASS_NAME = "AMap.Polyline";
            f.e.ab(this.CLASS_NAME, a);
            this.Se = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
            a.path && (a.path = this.ra(a.path));
            f.a.rb(this, a);
            this.setOptions(this.F)
        },
        getLength: function () {
            f.e.add(this.CLASS_NAME, "getLength");
            for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].ef(a[c + 1]);
            return parseFloat(b.toFixed(2))
        }
    });
    (function (a) {
        function b(a, b, c, d) {
            if (1 <= a) return d;
            var e = 1 - a;
            return e * e * b + 2 * e * a * c + a * a * d
        }

        function c(a, b, c, d, e) {
            if (1 <= a) return e;
            var g = 3 * (c[0] - b[0]), h = 3 * (d[0] - c[0]) - g, t = 3 * (c[1] - b[1]);
            c = 3 * (d[1] - c[1]) - t;
            return [(e[0] - b[0] - g - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + g * a + b[0], (e[1] - b[1] - t - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + t * a + b[1]]
        }

        function d(a, c, d, e) {
            return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
        }

        function e(b, c) {
            c = a.a.ra(c);
            return b.Fv(c, 20).Qi()
        }

        function g(b, c) {
            a.a.isArray(c) && (c = new a.I(c[0], c[1]));
            return b.Wv(c,
                20)
        }

        function h(b, g, h, n, p, q) {
            var r = null;
            if (b && h && h.length) {
                b = [b];
                b.push.apply(b, h);
                b.push(g);
                h = 0;
                for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
                h = a.extend({tolerance: 4, interpolateNumLimit: [3, 300]}, q);
                q = h.tolerance;
                h = h.interpolateNumLimit;
                q = Math.max(2, q);
                for (var t = r = 0, u = 0, x = b.length; u < x - 1; u++) var w = b[u], s = b[u + 1], r = r + Math.abs(s[0] - w[0]), t = t + Math.abs(s[1] - w[1]);
                a:{
                    p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, t) / p / q)));
                    q = null;
                    switch (b.length) {
                        case 3:
                            q = d;
                            break;
                        case 4:
                            q = c;
                            break;
                        default:
                            r = null;
                            break a
                    }
                    h = [];
                    r = [0].concat(b);
                    for (t = 1; t < p - 2; t++) r[0] = t / p, h.push(q.apply(null, r));
                    h.push(b[b.length - 1]);
                    r = h
                }
            }
            return r || [e(n, g)]
        }

        a.oK = {
            Bia: d, vga: c, WR: function (a, b, c, d) {
                var e, g, r = [];
                e = 0;
                for (g = a.length; e < g; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
                return r
            }, A9: function (a, b, c, d) {
                a = this.WR(a, b, c, d);
                c = [];
                d = 0;
                for (var e = a.length; d < e; d++) c.push(g(b, a[d]));
                return c
            }
        }
    })(f);
    v.D.Xs = v.D.Ob.extend({
        F: {tolerance: 4, interpolateNumLimit: [3, 300]}, C: function (a) {
            v.D.Xs.Bc.C.apply(this, arguments);
            this.CLASS_NAME = "AMap.BezierCurve";
            f.e.ab(this.CLASS_NAME, a)
        }, getLength: function () {
            f.e.add(this.CLASS_NAME, "getLength");
            this.get("map");
            var a = this.getInterpolateLngLats();
            return f.NB.distanceOfLine(a)
        }, getInterpolateLngLats: function () {
            var a = this.get("map");
            return f.oK.A9(this.get("path"), a && a.tl || f.Of.MB, Math.pow(2, 2), this.F)
        }, getSerializedPath: function () {
            f.e.add(this.CLASS_NAME, "getSerializedPath");
            for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (e instanceof f.W) {
                    var g = [];
                    if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++) g.push(e.controlPoints[h].OG()), g.push(e.controlPoints[h].LG());
                    g.push(e.OG());
                    g.push(e.LG());
                    b.push(g)
                } else b.push(e)
            }
            return b
        }, ra: function (a) {
            var b = typeof a[0];
            if (f.a.isArray(a) && "object" === b) {
                for (b = 0; b < a.length; b += 1) a[b] = this.U3(a[b]);
                return a
            }
            return [this.jia(a)]
        }, U3: function (a) {
            var b;
            if (a instanceof f.W) b = a; else {
                b = typeof a[0];
                var c, d, e = [];
                if ("string" === b || "number" === b) {
                    d = a.length;
                    if (d % 2) throw Error("LngLat number should be even, now it's " + d);
                    b = new f.W(a[d - 2], a[d - 1]);
                    c = 0;
                    for (d -= 2; c < d; c += 2) e.push(new f.W(a[c], a[c + 1]))
                } else if (f.a.isArray(a[0])) for (d = a.length, b = new f.W(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new f.W(a[c][0], a[c][1])); else throw Error("AMap.LngLat expected, now it's " + a);
                b && e.length && (b.controlPoints = f.a.ra(e))
            }
            if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
            return b
        }
    });
    v.D.Rb = v.D.Yw.extend({
        C: function (a) {
            v.D.Rb.Bc.C.apply(this, arguments);
            this.CLASS_NAME = "AMap.Polygon";
            f.e.ab(this.CLASS_NAME, a);
            this.Se = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            a.path && (a.path = this.ra(a.path));
            f.a.rb(this, f.extend({fillColor: "#FFAA00", fillOpacity: 0.9}, a));
            this.setOptions(this.F)
        }, VG: function (a) {
            var b = 6378137 * Math.PI / 180, c = 0, d = a.length;
            if (3 > d) return 0;
            for (var e = 0; e < d - 1; e += 1) var g = a[e], h = a[e + 1], k = g.M * b * Math.cos(g.O * Math.PI / 180), g = g.O * b, l = h.M * b * Math.cos(h.O * Math.PI /
                180), c = c + (k * h.O * b - l * g);
            e = a[e];
            a = a[0];
            d = e.M * b * Math.cos(e.O * Math.PI / 180);
            e = e.O * b;
            h = a.M * b * Math.cos(a.O * Math.PI / 180);
            c += d * a.O * b - h * e;
            return 0.5 * Math.abs(c)
        }, getArea: function () {
            f.e.add(this.CLASS_NAME, "getArea");
            var a = this.get("path", null, !0), b;
            if (!a.length || a[0] instanceof f.W) b = this.VG(a); else {
                b = this.VG(a[0]);
                for (var c = 1; c < a.length; c += 1) b -= this.VG(a[c])
            }
            return Number(b.toFixed(2))
        }, toString: function () {
            f.e.add(this.CLASS_NAME, "toString");
            return this.get("path").join(";")
        }, contains: function (a) {
            f.e.add(this.CLASS_NAME,
                "contains");
            a = f.a.ra(a);
            var b = this.get("path");
            b.length && b[0] instanceof f.W && (b = [b]);
            a = [a.M, a.O];
            for (var c, d = 0, e = b.length; d < e && (c = this.T6(b[d]), f.zc.rn(c) || c.reverse(), c = f.zc.Xc(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1) ;
            return c
        }, T6: function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].M, a[c].O]);
            return b
        }
    });
    v.D.Xe = v.D.lc.extend({
        F: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: 1E3,
            fillColor: "#006600",
            fillOpacity: 0.9,
            unit: "miter"
        }, C: function (a) {
            v.D.Xe.Bc.C.apply(this, arguments);
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
            f.e.ab(this.CLASS_NAME, a);
            a = a || {};
            a.center && (a.center = f.a.ra(a.center));
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            f.a.rb(this, a);
            this.Se = this.F.center ? !0 : !1;
            this.setOptions(this.F)
        }, setCenter: function (a,
                                b) {
            f.e.add(this.CLASS_NAME, "setCenter");
            (a = f.a.ra(a)) && a instanceof f.W && (this.set("center", a), this.r("change", {
                type: "change",
                target: this
            }), this.Se || (this.Se = !0, this.get("map") && this.get("map").r("overlays")), b || this.r("setCenter"))
        }, getCenter: function () {
            f.e.add(this.CLASS_NAME, "getCenter");
            return this.get("center", null, !0)
        }, setRadius: function (a, b) {
            f.e.add(this.CLASS_NAME, "setRadius");
            this.set("radius", a);
            this.r("change", {type: "change", target: this});
            b || this.r("setRadius")
        }, getRadius: function () {
            f.e.add(this.CLASS_NAME,
                "getRadius");
            return this.get("radius", null, !0)
        }, getBounds: function () {
            var a = this.get("center"), b = this.get("radius");
            if (!a) return null;
            var c = a.offset(-b, -b), a = a.offset(b, b);
            return new f.zd(c, a)
        }, contains: function (a) {
            f.e.add(this.CLASS_NAME, "contains");
            return this.get("center").ef(a) <= this.get("radius") ? !0 : !1
        }
    });
    v.D.qK = v.D.Xe.extend({
        C: function (a) {
            a = a || {};
            a.unit = "px";
            void 0 === a.radius && (a.radius = 20);
            this.CLASS_NAME = "AMap.CircleMarker";
            v.D.qK.Bc.C.apply(this, arguments)
        }, getBounds: function () {
            var a = this.getCenter();
            return new f.zd(a, a.Db())
        }, contains: function (a) {
            f.e.add(this.CLASS_NAME, "contains");
            var b = this.getMap();
            if (!b) return !1;
            var c = this.get("center");
            return c.ef(a) <= this.get("radius") * b.getResolution(c) ? !0 : !1
        }
    });
    var sc = f.Z.extend({
        C: function (a) {
            var b = Array(3), c;
            c = a instanceof Array ? a : a instanceof f.lm || a instanceof f.Rd ? a.elements : arguments;
            b[0] = c[0] || 0;
            b[1] = c[1] || 0;
            b[2] = c[2] || 0;
            this.elements = b
        }, length: function () {
            var a = this.elements;
            return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
        }, normalize: function () {
            var a = this.elements, b = a[0], c = a[1], d = a[2], e = Math.sqrt(b * b + c * c + d * d);
            if (e) {
                if (1 === e) return this
            } else return a[0] = 0, a[1] = 0, a[2] = 0, this;
            e = 1 / e;
            a[0] = b * e;
            a[1] = c * e;
            a[2] = d * e;
            return this
        }, Db: function () {
            return new f.Rd(this)
        },
        copy: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            return this
        }, set: function (a, b, c) {
            var d = this.elements;
            d[0] = a;
            d[1] = b;
            d[2] = c
        }, yb: function (a) {
            var b = this.elements;
            a = a.elements;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
        }, laa: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            return this
        }, add: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] += a[0];
            b[1] += a[1];
            b[2] += a[2];
            return this
        }, Zfa: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements;
            e[0] = c[0] + d[0];
            e[1] =
                c[1] + d[1];
            e[2] = c[2] + d[2];
            return this
        }, sub: function (a) {
            a = a.elements;
            var b = this.elements;
            b[0] -= a[0];
            b[1] -= a[1];
            b[2] -= a[2];
            return this
        }, kB: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements;
            e[0] = c[0] - d[0];
            e[1] = c[1] - d[1];
            e[2] = c[2] - d[2];
            return this
        }, TF: function (a) {
            a = a.elements;
            var b = this.elements;
            b[0] = b[1] * a[2] - b[2] * a[1];
            b[1] = b[2] * a[0] - b[0] * a[2];
            b[2] = b[0] * a[1] - b[1] * a[0];
            return this
        }, iR: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements;
            e[0] = c[1] * d[2] - c[2] * d[1];
            e[1] = c[2] * d[0] - c[0] * d[2];
            e[2] = c[0] * d[1] - c[1] * d[0];
            return this
        }, Br: function (a) {
            a = a.elements;
            var b = this.elements;
            return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
        }
    });
    f.Rd = sc;
    var tc = f.Z.extend({
        C: function (a) {
            var b = Array(4), c;
            c = a instanceof Array ? a : arguments;
            b[0] = c[0];
            b[1] = c[1];
            b[2] = c[2];
            b[3] = c[3];
            this.elements = b
        }, multiply: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            b[3] *= a
        }
    });
    f.lm = tc;
    (function (a) {
        function b(a) {
            this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }

        b.prototype.set = function (a) {
            var b, e;
            b = a.elements;
            e = this.elements;
            if (b !== e) {
                for (a = 0; 16 > a; ++a) e[a] = b[a];
                return this
            }
        };
        b.prototype.toFixed = function (b) {
            for (var d = this.elements, e = 0; 16 > e; ++e) d[e] = a.a.Dd(d[e], b);
            return this
        };
        b.prototype.concat = function (a) {
            var b, e, g, h, k, l, m;
            e = b = this.elements;
            g = a.elements;
            if (b === g) for (g = Array(16), a = 0; 16 > a; ++a) g[a] = b[a];
            for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * g[0] + k * g[1] + l * g[2] +
                m * g[3], b[a + 4] = h * g[4] + k * g[5] + l * g[6] + m * g[7], b[a + 8] = h * g[8] + k * g[9] + l * g[10] + m * g[11], b[a + 12] = h * g[12] + k * g[13] + l * g[14] + m * g[15];
            return this
        };
        b.prototype.multiply = b.prototype.concat;
        b.prototype.Oj = function (b) {
            var d = this.elements;
            b = b.elements;
            var e = new a.lm, g = e.elements;
            g[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
            g[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] * d[13];
            g[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
            g[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
            return e
        };
        b.prototype.Lca = function (a) {
            var b, e, g;
            b = a.elements;
            a = this.elements;
            e = Array(16);
            e[0] = b[5] * b[10] * b[15] - b[5] * b[11] * b[14] - b[9] * b[6] * b[15] + b[9] * b[7] * b[14] + b[13] * b[6] * b[11] - b[13] * b[7] * b[10];
            e[4] = -b[4] * b[10] * b[15] + b[4] * b[11] * b[14] + b[8] * b[6] * b[15] - b[8] * b[7] * b[14] - b[12] * b[6] * b[11] + b[12] * b[7] * b[10];
            e[8] = b[4] * b[9] * b[15] - b[4] * b[11] * b[13] - b[8] * b[5] * b[15] + b[8] * b[7] * b[13] + b[12] * b[5] * b[11] - b[12] * b[7] * b[9];
            e[12] = -b[4] * b[9] * b[14] + b[4] * b[10] * b[13] + b[8] * b[5] * b[14] - b[8] * b[6] * b[13] - b[12] * b[5] * b[10] + b[12] * b[6] * b[9];
            e[1] = -b[1] * b[10] * b[15] + b[1] * b[11] * b[14] + b[9] * b[2] * b[15] -
                b[9] * b[3] * b[14] - b[13] * b[2] * b[11] + b[13] * b[3] * b[10];
            e[5] = b[0] * b[10] * b[15] - b[0] * b[11] * b[14] - b[8] * b[2] * b[15] + b[8] * b[3] * b[14] + b[12] * b[2] * b[11] - b[12] * b[3] * b[10];
            e[9] = -b[0] * b[9] * b[15] + b[0] * b[11] * b[13] + b[8] * b[1] * b[15] - b[8] * b[3] * b[13] - b[12] * b[1] * b[11] + b[12] * b[3] * b[9];
            e[13] = b[0] * b[9] * b[14] - b[0] * b[10] * b[13] - b[8] * b[1] * b[14] + b[8] * b[2] * b[13] + b[12] * b[1] * b[10] - b[12] * b[2] * b[9];
            e[2] = b[1] * b[6] * b[15] - b[1] * b[7] * b[14] - b[5] * b[2] * b[15] + b[5] * b[3] * b[14] + b[13] * b[2] * b[7] - b[13] * b[3] * b[6];
            e[6] = -b[0] * b[6] * b[15] + b[0] * b[7] * b[14] +
                b[4] * b[2] * b[15] - b[4] * b[3] * b[14] - b[12] * b[2] * b[7] + b[12] * b[3] * b[6];
            e[10] = b[0] * b[5] * b[15] - b[0] * b[7] * b[13] - b[4] * b[1] * b[15] + b[4] * b[3] * b[13] + b[12] * b[1] * b[7] - b[12] * b[3] * b[5];
            e[14] = -b[0] * b[5] * b[14] + b[0] * b[6] * b[13] + b[4] * b[1] * b[14] - b[4] * b[2] * b[13] - b[12] * b[1] * b[6] + b[12] * b[2] * b[5];
            e[3] = -b[1] * b[6] * b[11] + b[1] * b[7] * b[10] + b[5] * b[2] * b[11] - b[5] * b[3] * b[10] - b[9] * b[2] * b[7] + b[9] * b[3] * b[6];
            e[7] = b[0] * b[6] * b[11] - b[0] * b[7] * b[10] - b[4] * b[2] * b[11] + b[4] * b[3] * b[10] + b[8] * b[2] * b[7] - b[8] * b[3] * b[6];
            e[11] = -b[0] * b[5] * b[11] + b[0] * b[7] *
                b[9] + b[4] * b[1] * b[11] - b[4] * b[3] * b[9] - b[8] * b[1] * b[7] + b[8] * b[3] * b[5];
            e[15] = b[0] * b[5] * b[10] - b[0] * b[6] * b[9] - b[4] * b[1] * b[10] + b[4] * b[2] * b[9] + b[8] * b[1] * b[6] - b[8] * b[2] * b[5];
            g = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
            if (0 === g) return this;
            g = 1 / g;
            for (b = 0; 16 > b; b++) a[b] = e[b] * g;
            return this
        };
        b.prototype.xv = function () {
            return (new b).Lca(this)
        };
        b.prototype.vV = function (a, b, e, g, h) {
            var k, l, m, n;
            if (a === b || e === g || 1 === h) throw"null frustum";
            l = 1 / (b - a);
            m = 1 / (g - e);
            n = 1 / (1 - h);
            k = this.elements;
            k[0] = 2 * l;
            k[1] = 0;
            k[2] = 0;
            k[3] = 0;
            k[4] = 0;
            k[5] =
                2 * m;
            k[6] = 0;
            k[7] = 0;
            k[8] = 0;
            k[9] = 0;
            k[10] = -2 * n;
            k[11] = 0;
            k[12] = -(b + a) * l;
            k[13] = -(g + e) * m;
            k[14] = -(1 + h) * n;
            k[15] = 1;
            return this
        };
        b.prototype.Pca = function (a, b, e, g) {
            var h, k;
            if (e === g || 0 === b) throw"null frustum";
            if (0 >= e) throw"near <= 0";
            if (0 >= g) throw"far <= 0";
            a /= 2;
            k = Math.sin(a);
            if (0 === k) throw"null frustum";
            h = 1 / (g - e);
            k = Math.cos(a) / k;
            a = this.elements;
            a[0] = k / b;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = k;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = -(g + e) * h;
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] = -2 * e * g * h;
            a[15] = 0
        };
        b.prototype.cB = function (a, b, e) {
            var g =
                this.elements;
            g[0] = a;
            g[4] = 0;
            g[8] = 0;
            g[12] = 0;
            g[1] = 0;
            g[5] = b;
            g[9] = 0;
            g[13] = 0;
            g[2] = 0;
            g[6] = 0;
            g[10] = e;
            g[14] = 0;
            g[3] = 0;
            g[7] = 0;
            g[11] = 0;
            g[15] = 1;
            return this
        };
        b.prototype.scale = function (a, b, e) {
            var g = this.elements;
            g[0] *= a;
            g[4] *= b;
            g[8] *= e;
            g[1] *= a;
            g[5] *= b;
            g[9] *= e;
            g[2] *= a;
            g[6] *= b;
            g[10] *= e;
            g[3] *= a;
            g[7] *= b;
            g[11] *= e;
            return this
        };
        b.prototype.yV = function (a, b, e) {
            var g = this.elements;
            g[12] = a;
            g[13] = b;
            g[14] = e;
            return this
        };
        b.prototype.translate = function (a, b, e) {
            var g = this.elements;
            g[12] += g[0] * a + g[4] * b + g[8] * e;
            g[13] += g[1] * a + g[5] *
                b + g[9] * e;
            g[14] += g[2] * a + g[6] * b + g[10] * e;
            g[15] += g[3] * a + g[7] * b + g[11] * e;
            return this
        };
        b.prototype.hJ = function (a, b, e, g) {
            var h, k, l, m, n, p, q, r;
            a = Math.PI * a / 180;
            h = this.elements;
            k = Math.sin(a);
            a = Math.cos(a);
            0 !== b && 0 === e && 0 === g ? (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === g ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !==
            g ? (0 > g && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + g * g), 1 !== l && (l = 1 / l, b *= l, e *= l, g *= l), l = 1 - a, m = b * e, n = e * g, p = g * b, q = b * k, r = e * k, k *= g, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = g * g * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
            h[15] = 1;
            return this
        };
        b.prototype.rotate = function (a, d, e, g) {
            return this.concat((new b).hJ(a, d, e, g))
        };
        a.qf = b
    })(f);
    v.D.eo = v.D.Rb.extend({
        F: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: [1E3, 1E3],
            fillColor: "#006600",
            fillOpacity: 0.9
        }, C: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                b = f.extend(this.F, b), c = this.Mm(b);
            b.path = c;
            v.D.eo.Bc.C.call(this, b);
            this.set("path", c);
            this.get("center") && this.get("map") || (this.Se = !1);
            this.CLASS_NAME = "AMap.Ellipse";
            f.e.ab(this.CLASS_NAME, b);
            this.on("movepoly", function (b) {
                var c =
                    a.get("map");
                b = c.Fd(c.Qb(a.get("center")).add(b.ls));
                "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                a.set("center", b)
            })
        }, Mm: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = [],
                c = a.center || this.get("center"), d = a.map || this.get("map");
            if (c && d) for (var c = f.a.ra(c), e = a.radius || this.get("radius"), g = d.Qb(c), a = g.x, g = g.y, h = f.a.map(e, function (a) {
                return a / (d.view.getResolution(20) * Math.cos(c.O * Math.PI / 180))
            }), e = h[0], h = h[1], k = f.l.Y, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                var n =
                    m * l, n = {x: a + e * Math.cos(n), y: g + h * Math.sin(n)};
                b.push(d.Fd(n))
            }
            return b
        }, mapChanged: function () {
            f.a.Bk(v.D.eo.Bc.mapChanged) && v.D.eo.Bc.mapChanged.apply(this);
            this.setPath(this.Mm());
            !this.Se && this.get("map") && (this.Se = !0, this.get("map").r("overlays"))
        }, setCenter: function (a, b) {
            f.e.add(this.CLASS_NAME, "setCenter");
            (a = f.a.ra(a)) && a instanceof f.W && (this.set("center", a), this.set("path", this.Mm()), this.r("change", {
                type: "change",
                target: this
            }), this.Se || (this.Se = !0, this.get("map") && this.get("map").r("overlays")),
            b || this.r("setCenter"))
        }, setRadius: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            f.e.add(this.CLASS_NAME, "setRadius");
            a && 2 === a.length && (this.set("radius", a), this.set("path", this.Mm()), b || (this.r("change", {
                type: "change",
                target: this
            }), this.r("setPath")))
        }, setOptions: function (a) {
            v.D.eo.Bc.setOptions.call(this, a);
            a.radius && this.setRadius(a.radius, !0);
            a.center && this.setCenter(a.center, !0)
        }, getRadius: function () {
            f.e.add(this.CLASS_NAME, "getRadius");
            return this.get("radius",
                null, !0)
        }, getCenter: function () {
            f.e.add(this.CLASS_NAME, "getCenter");
            return this.get("center", null, !0)
        }
    });
    v.D.jo = v.D.Rb.extend({
        F: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            fillColor: "#006600",
            fillOpacity: 0.9
        }, C: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                b = f.extend(this.F, b), c = this.Mm(b);
            b.path = c;
            v.D.jo.Bc.C.call(this, b);
            this.setPath(c);
            this.F.bounds && this.get("map") || (this.Se = !1);
            this.CLASS_NAME = "AMap.Rectangle";
            f.e.ab(this.CLASS_NAME, b);
            this.on("movepoly", function (b) {
                var c = a.get("map"),
                    g = a.get("bounds"), h = c.Fd(c.Qb(g.Eb).add(b.ls));
                b = c.Fd(c.Qb(g.Cb).add(b.ls));
                "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                a.set("bounds", new f.zd(h, b))
            })
        }, Mm: function () {
            var a = [],
                b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
            if (b) {
                var c = b.getSouthWest(), b = b.getNorthEast();
                f.a.gf([new f.W(c.M, c.O), new f.W(b.M, c.O), new f.W(b.M, b.O), new f.W(c.M, b.O)], function (b) {
                    return a.push(b)
                })
            }
            return a
        }, mapChanged: function () {
            f.a.Bk(v.D.jo.Bc.mapChanged) && v.D.jo.Bc.mapChanged.apply(this);
            this.setPath(this.Mm());
            !this.Se && this.get("map") && (this.Se = !0, this.get("map").r("overlays"))
        }, setOptions: function (a) {
            v.D.jo.Bc.setOptions.call(this, a);
            a.bounds && this.setBounds(a.bounds, !0)
        }, setBounds: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            f.e.add(this.CLASS_NAME, "setBounds");
            a && a instanceof f.zd && (this.set("bounds", a), this.set("path", this.Mm()), this.Se || (this.Se = !0, this.get("map") && this.get("map").r("overlays")), b || (this.r("change", {
                type: "change",
                target: this
            }),
                this.r("setBounds")))
        }, getBounds: function () {
            f.e.add(this.CLASS_NAME, "getCenter");
            return this.get("bounds", null, !0)
        }
    });
    v.D.TK = v.D.fb.extend({
        F: {text: "", textAlign: "center", verticalAlign: "middle", offset: new f.I(0, 0)}, C: function (a) {
            v.D.TK.Bc.C.apply(this, arguments);
            this.CLASS_NAME = "AMap.Text";
            f.e.ab(this.CLASS_NAME, a);
            this.K0();
            this.setText(this.get("text"));
            this.setStyle(this.get("style"))
        }, K0: function () {
            if (!this.yu) {
                var a = document.createElement("div");
                a.className = "amap-overlay-text-container";
                this.yu = a
            }
        }, getText: function () {
            f.e.add(this.CLASS_NAME, "getText");
            return this.get("text", null, !0)
        }, setText: function (a) {
            f.e.add(this.CLASS_NAME,
                "setText");
            a || 0 === a || (a = "");
            f.g.Ada(this.yu, "amap-overlay-text-empty", !a);
            f.e.add(this.CLASS_NAME, "setText");
            this.set("text", a);
            this.yu.innerHTML = a;
            this.GU()
        }, setStyle: function (a) {
            f.e.add(this.CLASS_NAME, "setStyle");
            f.extend(this.yu.style, a);
            this.GU()
        }, GU: function () {
            this.setContent(this.yu);
            this.setShadow(this.getShadow())
        }
    });
    f.BK = {
        find: function (a) {
            return f.a.find(this.uq || [], a)
        }, Kz: function () {
            return this.uq || []
        }, Sc: function (a) {
            return null !== this.find(a)
        }, add: function (a) {
            var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.Pv,
                d = this.uq || (this.uq = []);
            f.a.isArray(a) ? f.a.gf(a, function (a) {
                b.add(a, c)
            }) : null === this.find(a) && (d.push(a), c(a));
            return this
        }, remove: function (a) {
            var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.Pv, d = this.uq;
            if (d) if (f.a.isArray(a)) f.a.gf(a, function (a) {
                b.remove(a,
                    c)
            }); else {
                var e = f.a.indexOf(d, a);
                -1 !== e && (c(d[e]), d.splice(e, 1))
            }
            return this
        }, clear: function () {
            this.gf(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a.Pv);
            this.uq = [];
            return this
        }, gf: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a.Pv,
                b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            f.a.gf(this.uq || [], function () {
                for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                c = d[0];
                f.a.Bk(c.gf) ? c.gf(a, b) : a.apply(b || c, d)
            });
            return this
        }, Gl: function (a) {
            for (var b =
                arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.gf(function (b) {
                b && f.a.Bk(b[a]) && b[a].apply(b, c)
            });
            return this
        }, h: function (a) {
            var b = arguments;
            this.gf(function (a) {
                a.on.apply(a, b)
            });
            return this
        }, H: function (a) {
            var b = arguments;
            this.gf(function (a) {
                a.off.apply(a, b)
            });
            return this
        }, addListener: function () {
            this.h.apply(this, arguments)
        }, Fu: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.Pv,
                c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            this.gf(function (d) {
                d.on.call(d,
                    event, function () {
                        b();
                        d.off(a)
                    }, c)
            })
        }, removeListener: function (a) {
            this.H(a.rG, a.iH, a.Bf)
        }, N: function (a, b) {
            this.gf(function (c) {
                c.emit(a, b)
            })
        }
    };
    v.D.Yj = v.D.Sf.extend({
        ea: [f.BK], C: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            v.D.Yj.Bc.C.apply(this);
            this.CLASS_NAME = "AMap.OverlayGroup";
            this.map = null;
            this.add(a)
        }, fc: function (a) {
            this.Gl("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        }, mapChanged: function () {
        }, Gu: function (a) {
            var b = this;
            this.add(a, function (a) {
                b.map && a.setMap(b.map)
            });
            return this
        }, os: function (a) {
            var b = this;
            this.remove(a, function (a) {
                a.getMap() === b.map && a.setMap(null)
            });
            return this
        }, Wc: function () {
            var a =
                this;
            this.clear(function (b) {
                b.getMap() === a.map && b.setMap(null)
            });
            return this
        }, lH: function () {
            this.Gl("hide");
            return this
        }, show: function () {
            this.Gl("show");
            return this
        }, rb: function () {
            this.Gl("setOptions", 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
            return this
        }
    });
    v.D.Yj.en({
        find: "getOverlay",
        Kz: "getOverlays",
        Gu: ["addOverlay", "addOverlays"],
        Sc: "hasOverlay",
        os: ["removeOverlay", "removeOverlays"],
        Wc: "clearOverlays",
        gf: "eachOverlay",
        fc: "setMap",
        rb: "setOptions",
        show: "show",
        lH: "hide",
        h: "on",
        H: "off"
    });
    (function (a, b) {
        function c(a, b) {
            if (!a.length) return !1;
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1
            }
            return !0
        }

        function d(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
            return b
        }

        function e(a) {
            if (!a) return [];
            a = b.a.ra(a);
            for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].Qi();
            return c
        }

        a.D.yK = a.D.Yj.extend({
            C: function (c) {
                a.D.yK.Bc.C.call(this, []);
                this.CLASS_NAME = "AMap.GeoJSON";
                b.e.ab(this.CLASS_NAME,
                    c);
                this.F = b.extend({
                    getMarker: function (b, c) {
                        return new a.D.fb({position: c})
                    }, getPolyline: function (b, c) {
                        return new a.D.Ob({path: c})
                    }, getPolygon: function (b, c) {
                        return new a.D.Rb({path: c})
                    }, coordsToLatLng: function (a) {
                        return a
                    }
                }, c);
                if (!this.F.coordsToLatLngs) {
                    var d = this.F.coordsToLatLng;
                    this.F.coordsToLatLngs = function (a) {
                        for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
                        return b
                    }
                }
                this.importData(this.F.geoJSON)
            }, importData: function (a) {
                if (a && (a = this.H0(a), a.length)) {
                    this.Gu(a);
                    var b = this.F.map;
                    if (b) for (var c = 0, d = a.length; c < d; c++) a[c].setMap(b)
                }
            }, toGeoJSON: function () {
                for (var a = this.Kz(), b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c].toGeoJSON();
                return b
            }, H0: function (a) {
                if (a) {
                    b.a.isArray(a) || (a = [a]);
                    for (var c = [], d = 0, e = a.length; d < e; d++) {
                        var m = this.I0(a[d]);
                        m && c.push(m)
                    }
                    return c
                }
            }, FL: function (a) {
                var b = "Feature" === a.type ? a.geometry : a, b = this.F.coordsToLatLng(b ? b.coordinates : null),
                    b = this.F.getMarker(a, b);
                this.Im(a, b);
                return b
            }, eZ: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates :
                    null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.FL(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _pointIndex: l, _parentProperities: c.properties},
                    geometry: {type: "Point", coordinates: d[l]}
                })));
                d = new a.D.Yj(e);
                this.Im(c, d);
                return d
            }, EL: function (a) {
                var b = "Feature" === a.type ? a.geometry : a, b = this.F.coordsToLatLngs(b ? b.coordinates : null),
                    b = this.F.getPolyline(a, b);
                this.Im(a, b);
                return b
            }, dZ: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.EL(b.extend({},
                    c, {
                        type: "Feature",
                        properties: {_isAmap: !0, _lineStringIndex: l, _parentProperities: c.properties},
                        geometry: {type: "LineString", coordinates: d[l]}
                    })));
                d = new a.D.Yj(e);
                this.Im(c, d);
                return d
            }, GL: function (a) {
                for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.F.coordsToLatLngs(b[d]));
                b = this.F.getPolygon(a, c);
                this.Im(a, b);
                return b
            }, fZ: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.GL(b.extend({},
                    c, {
                        type: "Feature",
                        properties: {_isAmap: !0, _polygonIndex: l, _parentProperities: c.properties},
                        geometry: {type: "Polygon", coordinates: d[l]}
                    })));
                d = new a.D.Yj(e);
                this.Im(c, d);
                return d
            }, XY: function (c) {
                for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++) e.push(this.AD(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _geometryIndex: l, _parentProperities: c.properties},
                    geometry: d[l]
                })));
                d = new a.D.Yj(e);
                this.Im(c, d);
                return d
            }, I0: function (b) {
                if (b) switch (b.type) {
                    case "Feature":
                        return this.AD(b);
                    case "FeatureCollection":
                        for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) {
                            var n = this.AD(c[e]);
                            n && d.push(n)
                        }
                        c = new a.D.Yj(d);
                        this.Im(b, c);
                        return c;
                    default:
                        throw Error("Invalid GeoJSON object." + b.type);
                }
            }, Im: function (a, c) {
                c && a.properties && c.setExtData && c.setExtData(b.extend({}, c.getExtData() || {}, {_geoJsonProperties: a.properties}))
            }, AD: function (a) {
                var b = "Feature" === a.type ? a.geometry : a;
                if (!(b && b.coordinates || b)) return null;
                switch (b.type) {
                    case "Point":
                        return this.FL(a);
                    case "MultiPoint":
                        return this.eZ(a);
                    case "LineString":
                        return this.EL(a);
                    case "MultiLineString":
                        return this.dZ(a);
                    case "Polygon":
                        return this.GL(a);
                    case "MultiPolygon":
                        return this.fZ(a);
                    case "GeometryCollection":
                        return this.XY(a);
                    default:
                        throw Error("Invalid GeoJSON geometry." + b.type);
                }
            }
        });
        a.D.Yj.gb({
            toGeoJSON: function (a) {
                a = a || this.Kz();
                for (var b = [], e = 0, l = a.length; e < l; e++) a[e].toGeoJSON && (b[e] = a[e].toGeoJSON());
                a = this.getExtData() || {};
                if (c(b, "Point")) b = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiPoint", coordinates: d(b)}
                };
                else if (c(b, "LineString")) b = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiLineString", coordinates: d(b)}
                }; else if (c(b, "Polygon")) b = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiPolygon", coordinates: d(b)}
                }; else if (c(b, "*")) {
                    a = a._geoJsonProperties || {};
                    for (var e = [], l = 0, m = b.length; l < m; l++) e.push(b[l].geometry);
                    b = {type: "Feature", properties: a, geometry: {type: "GeometryCollection", geometries: e}}
                } else b = {
                    type: "FeatureCollection", properties: a._geoJsonProperties ||
                        {}, features: b
                };
                return b
            }
        });
        a.D.fb.gb({
            toGeoJSON: function () {
                return {
                    type: "Feature",
                    properties: (this.getExtData() || {})._geoJsonProperties || {},
                    geometry: {type: "Point", coordinates: this.getPosition().Qi()}
                }
            }
        });
        a.D.Ob.gb({
            toGeoJSON: function () {
                return {
                    type: "Feature",
                    properties: (this.getExtData() || {})._geoJsonProperties || {},
                    geometry: {type: "LineString", coordinates: e(this.getPath())}
                }
            }
        });
        a.D.Rb.gb({
            toGeoJSON: function () {
                var a = (this.getExtData() || {})._geoJsonProperties || {}, c;
                if (c = this.getPath()) {
                    c = b.a.ra(c);
                    b.a.isArray(c[0]) ||
                    (c = [c]);
                    for (var d = [], l = 0, m = c.length; l < m; l++) d[l] = e(c[l]);
                    c = d
                } else c = [];
                return {type: "Feature", properties: a, geometry: {type: "Polygon", coordinates: c}}
            }
        })
    })(v, f);
    v.B.UB = v.B.kc.extend({
        ea: [f.BK], C: function (a) {
            v.B.UB.Bc.C.call(this, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
            this.CLASS_NAME = "AMap.LayerGroup";
            this.map = null;
            this.add(a)
        }, fc: function (a) {
            this.Gl("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        }, mapChanged: function () {
        }, Uy: function (a) {
            var b = this;
            this.add(a, function (a) {
                b.map && a.setMap(b.map)
            });
            return this
        }, Li: function (a) {
            var b = this;
            this.remove(a, function (a) {
                a.getMap() === b.map && a.setMap(null)
            });
            return this
        }, i7: function () {
            var a = this;
            this.clear(function (b) {
                b.getMap() === a.map && b.setMap(null)
            });
            return this
        }, lH: function () {
            this.Gl("hide");
            return this
        }, show: function () {
            this.Gl("show");
            return this
        }, reload: function () {
            this.Gl("reload");
            return this
        }, rb: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, c = f.a.keys(b);
            f.a.gf(c, function (c) {
                a.Gl("set", c, b[c])
            });
            return this
        }
    });
    v.B.UB.en({
        find: "getLayer",
        Kz: "getLayers",
        Uy: ["addLayer", "addLayers"],
        Sc: "hasLayer",
        Li: ["removeLayer", "removeLayers"],
        i7: "clearLayers",
        gf: "eachLayer",
        fc: "setMap",
        rb: "setOptions",
        show: "show",
        lH: "hide",
        reload: "reload",
        h: "on",
        H: "off"
    });
    f.uX = v.Sb.extend({
        C: function (a, b) {
            b && (b.center = b.position, b.zoom = 11);
            arguments.callee.ma.apply(this, arguments);
            window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
        }
    });
    f.vX = v.D.fb.extend({
        C: function (a) {
            arguments.callee.ma.apply(this, arguments)
        }
    });
    f.zc = {
        Xm: function (a, b) {
            for (var c = Infinity, d = 0, e = 1, g = b.length; e < g; d = e, e += 1) c = Math.min(c, f.zc.dda(a, [b[d], b[e]]));
            return Math.sqrt(c)
        }, dda: function (a, b) {
            return this.cda(a, this.XQ(a, b))
        }, cda: function (a, b) {
            var c = a[0] - b[0], d = a[1] - b[1];
            return c * c + d * d
        }, xia: function (a, b, c, d) {
            d = d || 1E-6;
            if (c[0] === b[0]) {
                var e = Math.min(b[1], c[1]);
                b = Math.max(b[1], c[1]);
                return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
            }
            var e = Math.min(b[0], c[0]), g = Math.max(b[0], c[0]);
            return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
                a[0] >= e && a[0] <= g
        }, XQ: function (a, b) {
            var c = a[0], d = a[1], e = b[0], g = b[1], h = e[0], e = e[1], k = g[0], g = g[1], l = k - h, m = g - e,
                c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
            0 >= c || (1 <= c ? (h = k, e = g) : (h += c * l, e += c * m));
            return [h, e]
        }, rn: function (a) {
            for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], g, h, k = 0; k < b; k += 1) h = a[k], g = h[0], h = h[1], c += (g - e) * (h + d), e = g, d = h;
            return 0 < c
        }, Xc: function (a, b, c) {
            var d = a[0];
            a = a[1];
            var e = !1, g, h, k, l, m = b.length, n = 0;
            for (l = m - 1; n < m; l = n, n += 1) {
                var p = !1;
                g = b[n][0];
                h = b[n][1];
                k = b[l][0];
                l = b[l][1];
                if (g === d && h === a || k ===
                    d && l === a) return c ? !0 : !1;
                if (h < a === l >= a) {
                    g = (k - g) * (a - h) / (l - h) + g;
                    if (d === g) return c ? !0 : !1;
                    p = d < g
                }
                p && (e = !e)
            }
            return e
        }, vU: function (a, b) {
            function c(a, b, c, d) {
                var e = [a[0] - b[0], a[1] - b[1]], g = [c[0] - d[0], c[1] - d[1]];
                a = a[0] * b[1] - a[1] * b[0];
                c = c[0] * d[1] - c[1] * d[0];
                d = 1 / (e[0] * g[1] - e[1] * g[0]);
                return [(a * g[0] - c * e[0]) * d, (a * g[1] - c * e[1]) * d]
            }

            function d(a, b, c) {
                return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
            }

            var e, g, h, k, l = a;
            e = b[b.length - 2];
            for (var m = 0, n = b.length - 1; m < n; m++) {
                g = b[m];
                var p = l, l = [];
                h = p[p.length - 1];
                for (var q = 0, r =
                    p.length; q < r; q++) k = p[q], d(k, e, g) ? (d(h, e, g) || l.push(c(e, g, h, k)), l.push(k)) : d(h, e, g) && l.push(c(e, g, h, k)), h = k;
                e = g
            }
            if (3 > l.length) return [];
            l.push(l[0]);
            return l
        }
    };
    (function (a) {
        function b(b, c) {
            var d;
            a:{
                switch (b) {
                    case "EPSG3395":
                        d = a.Of.tK;
                        break a;
                    case "EPSG4326":
                        d = a.Of.uK;
                        break a
                }
                d = a.Of.MB
            }
            return {
                project: function (b) {
                    a.a.isArray(b) && (b = new a.W(b[0], b[1]));
                    return d.Fv(b, c).Qi()
                }, unproject: function (b) {
                    a.a.isArray(b) && (b = new a.I(b[0], b[1]));
                    return d.Wv(b, c).Qi()
                }, normalizePoint: function (b) {
                    return a.a.ra(b)
                }, distance: function (b, c) {
                    a.e.add(this.CLASS_NAME, "distance");
                    c = this.normalizePoint(c);
                    if (a.a.isArray(c)) return this.distanceToLine(b, c);
                    b = this.normalizePoint(b);
                    var d = a.Xi.Wo, e = Math.cos, g = b.O * d, h = c.O * d, k = 2 * a.Xi.mG, d = c.M * d - b.M * d,
                        e = (1 - e(h - g) + (1 - e(d)) * e(g) * e(h)) / 2;
                    return k * Math.asin(Math.sqrt(e))
                }, ringArea: function (b) {
                    a.e.add(this.CLASS_NAME, "ringArea");
                    b = this.normalizeLine(b);
                    var c = a.Xi.mG * a.Xi.Wo, d = 0, e = b.length;
                    if (3 > e) return 0;
                    for (var g = 0; g < e - 1; g += 1) var h = b[g], k = b[g + 1], u = h.M * c * Math.cos(h.O * a.Xi.Wo), h = h.O * c, x = k.M * c * Math.cos(k.O * a.Xi.Wo), d = d + (u * k.O * c - x * h);
                    g = b[g];
                    b = b[0];
                    e = g.M * c * Math.cos(g.O * a.Xi.Wo);
                    g = g.O * c;
                    k = b.M * c * Math.cos(b.O * a.Xi.Wo);
                    d += e * b.O * c - k * g;
                    return 0.5 *
                        Math.abs(d)
                }, sphericalCalotteArea: function (b) {
                    a.e.add(this.CLASS_NAME, "sphericalCalotteArea");
                    var c = a.Xi.mG;
                    b = c - c * Math.cos(b / c);
                    return 2 * Math.PI * c * b
                }
            }
        }

        function c() {
            return {
                normalizePoint: function (a) {
                    return a && a.x && a.y ? [a.x, a.y] : a
                }, distance: function (a, b) {
                    var c = a[0] - b[0], d = a[1] - b[1];
                    return Math.sqrt(c * c + d * d)
                }, project: function (a) {
                    return a
                }, unproject: function (a) {
                    return a
                }, ringArea: function (a) {
                    for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
                        var q = a[p - 1], r = a[p];
                        b[0] = e[0] - r[0];
                        b[1] = e[1] - r[1];
                        c[0] =
                            e[0] - q[0];
                        c[1] = e[1] - q[1];
                        d += b[0] * c[1] - b[1] * c[0]
                    }
                    return d / 2
                }
            }
        }

        function d(a) {
            for (var b = 0, c = 0; c < a.length - 1; c++) var d = a[c], e = a[c + 1], b = b + (e[0] - d[0]) * (e[1] + d[1]);
            return 0 >= b
        }

        function e(b) {
            this.CLASS_NAME = "AMap.GeometryUtil";
            this.Bb = a.extend({onSegmentTolerance: 5, crs: "EPSG3857", maxZoom: 20}, b);
            this.setCrs(this.Bb.crs)
        }

        a.extend(e.prototype, {
            clone: function (b) {
                return new e(a.extend({}, this.Bb, b))
            }, isPoint: function (b) {
                return b && (b instanceof a.W || a.a.isArray(b) && !isNaN(b[0]))
            }, normalizePoint: function (a) {
                return a
            },
            normalizeLine: function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
                return b
            }, normalizeMultiLines: function (b) {
                a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
                for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
                return c
            }, setCrs: function (d) {
                a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Bb.maxZoom))
            }, distance: function () {
                throw Error("distance Not implemented!");
            }, Pq: function (a, b) {
                a = this.normalizeLine(a);
                this.isPoint(a[0]) || (a = a[0]);
                for (var c =
                    [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
                !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
                return c
            }, u4: function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
                return b
            }, closestOnSegment: function (b, c, d) {
                a.e.add(this.CLASS_NAME, "closestOnSegment");
                b = a.zc.XQ(this.project(b), this.Pq([c, d]));
                return this.unproject(b)
            }, closestOnLine: function (a, b) {
                b = this.normalizeLine(b);
                for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
                    var p = this.closestOnSegment(a,
                        b[e], b[e + 1]), q = this.distance(a, p);
                    q < c && (c = q, d = p)
                }
                return d
            }, distanceToSegment: function (a, b, c) {
                return this.distanceToLine(a, [b, c])
            }, distanceToLine: function (a, b) {
                b = this.normalizeLine(b);
                this.isPoint(b[0]) || (b = b[0]);
                for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]), c = Math.min(c, this.distance(a, n));
                return c
            }, isPointOnSegment: function (b, c, d, e) {
                a.e.add(this.CLASS_NAME, "isPointOnSegment");
                if (!e && 0 !== e || 0 > e) e = this.Bb.onSegmentTolerance;
                return this.distanceToSegment(b, c,
                    d) <= e
            }, isPointOnLine: function (a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e - 1; d++) if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
                return !1
            }, isPointOnRing: function (a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
                return !1
            }, isPointOnPolygon: function (a, b, c) {
                b = this.normalizeMultiLines(b);
                for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnRing(a, b[d], c)) return !0;
                return !1
            }, makesureClockwise: function (a) {
                d(a) || (a = [].concat(a),
                    a.reverse());
                return a
            }, makesureAntiClockwise: function (a) {
                d(a) && (a = [].concat(a), a.reverse());
                return a
            }, isPointInRing: function (b, c) {
                a.e.add(this.CLASS_NAME, "isPointInRing");
                c = this.normalizeLine(c);
                var d = this.Pq(c, !0);
                return a.zc.Xc(this.project(b), d, !1)
            }, isRingInRing: function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) if (!this.isPointInRing(a[c], b)) return !1;
                return !0
            }, isPointInPolygon: function (a, b) {
                b = this.normalizeMultiLines(b);
                for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1) ;
                return c
            }, doesSegmentsIntersect: function (b, c, d, e) {
                a.e.add(this.CLASS_NAME, "doesSegmentsIntersect");
                var m = this.Pq([b, c, d, e]);
                b = m[0];
                c = m[1];
                d = m[2];
                e = m[3];
                var m = !1, n = (e[0] - d[0]) * (b[1] - d[1]) - (e[1] - d[1]) * (b[0] - d[0]),
                    p = (c[0] - b[0]) * (b[1] - d[1]) - (c[1] - b[1]) * (b[0] - d[0]);
                b = (e[1] - d[1]) * (c[0] - b[0]) - (e[0] - d[0]) * (c[1] - b[1]);
                0 !== b && (c = n / b, p /= b, 0 <= c && 1 >= c && 0 <= p && 1 >= p && (m = !0));
                return m
            }, doesSegmentLineIntersect: function (a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e - 1; d++) if (this.doesSegmentsIntersect(a,
                    b, c[d], c[d + 1])) return !0;
                return !1
            }, doesSegmentRingIntersect: function (a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0;
                return !1
            }, doesSegmentPolygonIntersect: function (a, b, c) {
                c = this.normalizeMultiLines(c);
                for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
                return !1
            }, doesLineLineIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentLineIntersect(a[c],
                    a[c + 1], b)) return !0;
                return !1
            }, doesLineRingIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            }, doesRingRingIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d; c++) if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0;
                return !1
            }, CZ: function (a, b) {
                function c() {
                    var a = [e[0] - n[0], e[1] - n[1]], b = [p[0] - q[0], p[1] - q[1]], d = e[0] * n[1] - e[1] * n[0],
                        g = p[0] * q[1] - p[1] * q[0], h = 1 / (a[0] * b[1] - a[1] *
                        b[0]);
                    return [(d * b[0] - g * a[0]) * h, (d * b[1] - g * a[1]) * h]
                }

                function d(a) {
                    return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
                }

                a = this.makesureAntiClockwise(a);
                b = this.makesureClockwise(b);
                var e, n, p, q, r = a;
                e = b[b.length - 1];
                for (var t = 0, u = b.length; t < u; t++) {
                    n = b[t];
                    var x = r, r = [];
                    p = x[x.length - 1];
                    for (var w = 0, s = x.length; w < s; w++) q = x[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q;
                    e = n
                }
                return r
            }, ringRingClip: function (b, c) {
                a.e.add(this.CLASS_NAME, "ringRingClip");
                b = this.Pq(b);
                c = this.Pq(c);
                var d = this.CZ(b, c);
                return this.u4(d)
            },
            ringArea: function () {
                throw Error("distance Not implemented!");
            }, distanceOfLine: function (a) {
                a = this.normalizeLine(a);
                for (var b = 0, c = 0, d = a.length; c < d - 1; c++) b += this.distance(a[c], a[c + 1]);
                return b
            }, isClockwise: function (a) {
                a = this.Pq(a);
                return d(a)
            }
        });
        a.NB = new e
    })(f);
    var uc = {
        Pixel: f.I,
        LngLat: f.W,
        Size: f.tc,
        Bounds: f.zd,
        PixelBounds: f.xe,
        event: v.event,
        Panorama: f.uX,
        PanoramaMarker: f.vX,
        Map: v.Sb,
        View2D: v.hC,
        GroundImage: v.B.OB,
        Marker: v.D.fb,
        ImageMarker: v.D.Wea,
        Text: v.D.TK,
        Icon: v.D.Ye,
        MarkerShape: v.D.pX,
        Polyline: v.D.Ob,
        BezierCurve: v.D.Xs,
        Polygon: v.D.Rb,
        Circle: v.D.Xe,
        CircleMarker: v.D.qK,
        Ellipse: v.D.eo,
        Rectangle: v.D.jo,
        ContextMenu: v.D.Xj,
        InfoWindow: v.D.Qd,
        Buildings: v.B.co,
        TileLayer: v.B.Za,
        ImageLayer: v.B.dt,
        CanvasLayer: v.B.SW,
        VideoLayer: v.B.UX,
        VectorLayer: v.B.lc,
        MassMarks: v.B.qX,
        LayerGroup: v.B.UB,
        OverlayGroup: v.D.Yj,
        GeoJSON: v.D.yK,
        CANVAS: "canvas",
        DOM: "dom",
        GeometryUtil: f.NB
    };
    uc.plugin = uc.service = v.Sb.prototype.plugin;
    uc.TileLayer.Satellite = v.B.Za.QK;
    uc.TileLayer.RoadNet = v.B.Za.OK;
    uc.TileLayer.google = v.B.Za.at;
    uc.TileLayer.Flexible = v.B.Za.Pw;
    uc.TileLayer.WMS = v.B.Za.WX;
    uc.TileLayer.WMTS = v.B.Za.XX;
    uc.TileLayer.Traffic = v.B.Za.UK;
    uc.Panorama.Events = v.event;
    uc.TileLayer.PanoramaLayer = v.B.Za.Yea;
    uc.UA = {ie: f.l.pn, ielt9: f.l.Ld, ielt11: f.l.f$, mobile: f.l.Y, android: f.l.gh, ios: f.l.cA};
    uc.Browser = {
        ua: navigator.userAgent,
        mobile: f.l.Y,
        plat: f.l.Kp,
        mac: f.l.Iv,
        windows: f.l.Cea,
        ios: f.l.cA,
        iPad: f.l.Z9,
        iPhone: f.l.a$,
        android: f.l.gh,
        android23: f.l.l6,
        chrome: f.l.chrome,
        firefox: f.l.xG,
        safari: f.l.$I,
        wechat: f.l.GW,
        uc: f.l.$da,
        qq: f.l.Dba,
        ie: f.l.pn,
        ie6: f.l.Mg,
        ie7: f.l.up,
        ie8: f.l.Ld && !f.l.up && !f.l.Mg,
        ie9: f.l.e$,
        ie10: f.l.FS,
        ie11: f.l.b$,
        edge: f.l.y8,
        ielt9: f.l.Ld,
        baidu: f.l.az,
        isLocalStorage: f.l.Kj,
        isGeolocation: !!navigator.geolocation,
        mobileWebkit: f.l.faa,
        mobileWebkit3d: f.l.FT,
        mobileOpera: !!f.l.eaa,
        retina: f.l.md,
        touch: !!f.l.ke,
        msPointer: !!f.l.HT,
        pointer: !!f.l.BI,
        webkit: f.l.EW,
        ie3d: f.l.c$,
        webkit3d: f.l.FW,
        gecko3d: f.l.W8,
        opera3d: f.l.Qaa,
        any3d: f.l.Zy,
        isCanvas: f.l.qn,
        isSvg: f.l.Ck,
        isVML: f.l.pn,
        isWorker: !!window.Worker,
        isWebsocket: !!window.WebSocket,
        isWebGL: function () {
            for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
                try {
                    c = a.getContext(b[d])
                } catch (e) {
                }
                if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break; else return !0
            }
            return !1
        }
    };
    uc.Util = {
        colorNameToHex: f.a.ZQ,
        rgbHex2Rgba: f.a.cV,
        argbHex2Rgba: f.a.Af,
        isEmpty: f.a.zp,
        deleteItemFromArray: f.a.XF,
        deleteItemFromArrayByIndex: f.a.pk,
        indexOf: f.a.indexOf,
        format: f.a.Dd,
        isArray: f.a.isArray,
        isDOM: f.a.eA,
        includes: f.a.ea,
        requestIdleCallback: f.a.YU,
        cancelIdleCallback: f.a.LQ,
        requestAnimFrame: f.a.ec,
        cancelAnimFrame: f.a.cg
    };
    uc.DomUtil = {
        getViewport: f.g.Tz,
        getViewportOffset: f.g.aH,
        create: f.g.create,
        setClass: f.g.Eca,
        hasClass: f.g.vk,
        addClass: f.g.za,
        removeClass: f.g.Ha,
        setOpacity: f.g.Zl,
        rotate: f.g.rotate,
        setCss: f.g.Da,
        empty: f.g.bw,
        remove: f.g.remove,
        TRANSFORM: f.g.Ke,
        TRANSITION: f.g.$w
    };
    var vc = f.w;
    uc.User = {key: vc.key};
    window.AMap = uc;
    window.AMap.BuryPoint = f.BuryPoint;
    window.AMap.Class = f.Z;
    if (!vc.Gv && "undefined" !== typeof arguments && arguments.callee) try {
        if (f.l.Kj && window.localStorage) {
            var wc = window.localStorage["_AMap_" + f.rA];
            wc && JSON.parse(wc).version === vc.Vg || window.localStorage.setItem("_AMap_" + f.rA, JSON.stringify({
                version: vc.Vg,
                script: "(" + arguments.callee + ")(config)"
            }));
            var xc = new Image;
            xc.src = vc.eb + "/maps/cookie?key=amap_ver&value=" + vc.Vg;
            document.body.appendChild(xc);
            xc.onload = xc.onerror = xc.onabort = function () {
                document.body.removeChild(xc)
            }
        }
    } catch (yc) {
    }
    ;window.AMap.convertFrom = function (a, b, c) {
        f.e.add("AMap", "convertFrom", b);
        var d = f.w.Yc + "/v3/assistant/coordinate/convert";
        a = f.a.ra(a);
        var e = [];
        if (a instanceof Array) {
            for (var g = 0, h = a.length; g < h; g += 1) e.push(a[g] + "");
            e = e.join(";")
        } else e = a + "";
        b = ["key=" + f.w.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
        d += 0 < b.length ? "?" + b.join("&") : "";
        d = new f.Ka.Xa(d, {callback: "callback"});
        d.h("complete", function (a) {
            if ("1" === a.status) {
                a = a.locations.split(";");
                for (var b = 0; b < a.length; b += 1) {
                    var d = a[b].split(",");
                    a[b] =
                        new AMap.LngLat(d[0], d[1])
                }
                c && "function" === typeof c && c("complete", {info: "ok", locations: a})
            } else c && "function" === typeof c && c("error", a.info)
        }, this);
        d.h("error", function (a) {
            c && "function" === typeof c && c("error", a.info)
        }, this)
    };
    f.Ka = f.Ka || {};
    f.Ka.cC = f.Z.extend({
        ea: [f.ja], C: function (a, b) {
            this.F = {callback: "cbk", type: "json", charset: "utf-8"};
            b = b || {};
            f.a.rb(this, b);
            this.url = a;
            this.send(a, b.yd, b.C7)
        }, send: function (a) {
            var b = f.g.create("script");
            b.type = "text/javascript";
            b.charset = this.F.charset;
            var c = this;
            f.l.Ld ? b.onreadystatechange = function () {
                "loaded" !== this.readyState && "complete" !== this.readyState || c.r("complete")
            } : (b.onload = function () {
                c.r("complete")
            }, b.onerror = function () {
                c.r("error", {status: 0, info: "service error", url: a})
            });
            b.src = a;
            document.getElementsByTagName("head")[0].appendChild(b)
        }
    });
    f.Ka.Xa = f.Ka.cC.extend({
        V6: function () {
            if (f.a.oV) return f.a.lB.push(this), !0
        }, pca: function () {
            this.r("error", {info: "TIME_OUT_A"})
        }, send: function (a, b, c, d) {
            function e() {
                window[g] = null;
                try {
                    window[g] = null
                } catch (a) {
                }
                h.onerror = null;
                h.parentNode && h.parentNode.removeChild(h)
            }

            if (!this.F.kr || !this.V6()) {
                a = encodeURI(a);
                var g = this.F.fun;
                if (!g || window[g]) g = f.a.TR("jsonp_", 6) + "_";
                var h = document.createElement("script");
                h.type = "text/javascript";
                h.charset = "utf-8";
                h.async = !0;
                var k = this;
                f.l.Ld || (h.onerror = function () {
                    e();
                    k.r("error", {info: "REQUEST_FAILED", url: a})
                });
                window[g] = function (a) {
                    e();
                    if (k.F.callbackFunction) k.F.callbackFunction.call(k.F.context, a); else if (3E4 === a.errcode && a.data) f.a.oV = !0, f.jb.load("AMap.AntiCrabFrame", function () {
                        f.a.kr || (f.a.kr = new f.OW);
                        f.a.lB.push(k);
                        f.a.kr.open(k.F.yd, a.data.host, k.wI || "", k.url)
                    }); else {
                        if (a instanceof Array || "string" === typeof a) a = {data: a};
                        a.Mga = g;
                        k.r("complete", a)
                    }
                };
                b = "?";
                -1 !== a.indexOf("?") && (b = "&");
                b = a + b + this.F.callback + "=" + g;
                if (-1 !== a.indexOf(f.w.Yc + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch")) b +=
                    "&platform=JS&logversion=2.0&sdkversion=" + f.w.Bu, b += "&appname=" + f.w.Lm;
                b += "&csid=" + this.pea();
                if (c = this.F.Dz) {
                    var l = [], m;
                    for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
                    k.wI = l.join("&")
                }
                h.src = d ? b + "&rereq=true" : b;
                f.Ka.Xa.kM || (f.Ka.Xa.kM = document.getElementsByTagName("head")[0]);
                f.Ka.Xa.kM.appendChild(h)
            }
        }, pea: function () {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            return function (b, c) {
                var d = [], e;
                c = c || a.length;
                if (b) for (e =
                                0; e < b; e++) d[e] = a[0 | Math.random() * c]; else {
                    var g;
                    d[8] = d[13] = d[18] = d[23] = "-";
                    d[14] = "4";
                    for (e = 0; 36 > e; e++) d[e] || (g = 0 | 16 * Math.random(), d[e] = a[19 === e ? g & 3 | 8 : g])
                }
                return d.join("")
            }
        }()
    });
    window.AMap.Http = {};
    window.AMap.Http.JSONP = f.Ka.Xa;
    f.Ka.XMLHttpRequest = f.Ka.cC.extend({
        send: function (a, b, c) {
            var d = this.Gea = new XMLHttpRequest, e = this;
            d.onreadystatechange = function () {
                4 === d.readyState && 200 === d.status ? e.r("complete", {
                    url: a,
                    data: d.responseText
                }) : 404 === d.status && (d.abort(), e.r("error", {url: a, data: "404"}))
            };
            d.open(b || "GET", a);
            "POST" === b && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            d.send(c || void 0)
        }, abort: function () {
            this.Gea.abort()
        }
    });
    f.wh = f.Z.extend({
        C: function (a, b, c, d) {
            this.start = a;
            this.end = b;
            this.transition = c;
            this.precision = d || 0;
            this.Qp = !1;
            return this
        }, Qj: function (a) {
            this.bf = +new Date;
            this.frames = 0;
            this.Bf = a;
            this.startTime = +new Date;
            this.Qp = !0;
            this.mQ = f.a.ec(this.update, this, !1)
        }, update: function () {
            this.mQ = f.a.ec(this.update, this, !1);
            this.frames += 1;
            var a = +new Date, b = a - this.startTime,
                b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.bf) : null;
            "number" === typeof b && Math.abs(b - this.end) < this.precision && (this.stop(),
                b = this.end);
            this.bf = a;
            this.Ql.call(this.Bf || this, b)
        }, stop: function (a) {
            f.a.cg(this.mQ);
            a && this.update();
            this.Qp = !1
        }
    });
    f.wh.Easing = {
        Linear: {
            None: function (a) {
                return a
            }
        }, Bounce: {
            In: function (a) {
                return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
            }, Out: function (a) {
                return f.wh.Easing.Bounce.In(1 - a)
            }
        }, Cubic: {
            In: function (a) {
                return 1 - a * a * a
            }, Out: function (a) {
                a = 1 - a;
                return 1 - a * a * a
            }
        }
    };
    f.Sb = f.Z.extend({
        ea: [f.ja, f.de, f.lA], C: function (a, b) {
            this.K = b;
            this.tl = b.tl;
            this.Mi = "";
            this.vg = this.fh = this.Gh = !1;
            this.J = a;
            this.m1();
            this.n$();
            this.X("zooms", b, !0);
            this.X("size", b, !0);
            this.X("limitBounds", b);
            this.X("view", b);
            this.X("nolimg", b, !0);
            this.X("mapNumber", b, !0);
            this.X("lang", b, !0);
            this.X("features", b, !0);
            this.X("styleID", b, !0);
            this.X("forceBig", b, !0);
            this.X("mode", b, !0);
            this.X("showBuildingBlock", b, !0);
            this.X("mapStyle", b);
            var c = this.get("mapStyle");
            this.Id = f.w.Id[c] || f.w.Id["default"];
            this.Qy =
                "#a3ccff";
            this.ru = b.get("skyColor") || "#cce0ff";
            this.X("editEnable", b);
            this.Ub && this.X("style", b, !0);
            this.X("styleUrl", b);
            this.X("hightlight", b, !0);
            this.X("labelzIndex", b, !0);
            f.l.ow && (this.sd = new f.B.Xg(new v.B.Za({
                zIndex: b.get("labelzIndex"),
                visible: !1
            }), this), this.sd.type = "\u77e2\u91cf\u6807\u6ce8", b.labelsLayer = this.sd.oa, this.sd.oa.h("complete", this.vm, this, !0), this.sd.oa.h("renderComplete", this.vm, this), this.sd.St = this.sd.tn = !0);
            this.X("isHotspot", b, !0);
            this.X("layers", b);
            this.X("overlays", b);
            this.X("infos", b, !0);
            this.X("contextmenus", b, !0);
            this.X("controls", b);
            this.X("bounds", b);
            this.X("draw", b);
            this.Ud("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign".split(" "), b);
            this.Ud("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "), b, !0);
            this.get("jogEnable") ? this.xp = !0 : this.xp = !1;
            this.J0();
            this.P0();
            this.lN && this.lN();
            this.X("resizeEnable", b);
            this.K.map = this;
            c = this.get("size");
            c =
                c.width * c.height / 65536;
            f.l.md && 3 < c && (this.vQ = !0);
            this.ZU()
        }, editEnableChanged: function () {
            location.hostname.match(/.amap.com/) && (this.Ub = this.get("editEnable"))
        }, labelzIndexChanged: function () {
            this.sd && this.sd.set("zIndex", this.get("labelzIndex"))
        }, styleChanged: function () {
            this.Ji = !0
        }, mapStyleChanged: function () {
            if (this.K.mh) {
                this.Mi && (this.set("style", ""), this.vz = this.Mi = "");
                var a = this.get("mapStyle");
                this.Ji = !0;
                this.Id = f.w.Id[a] || f.w.Id["default"];
                this.aw()
            }
        }, styleUrlChanged: function () {
            if (this.K.mh) {
                var a =
                    this.get("styleUrl") || "";
                if (a !== this.Mi) {
                    var b = -1 !== a.indexOf("?isPublic=true"), a = a.substr(0, 46), c = a.split("amap://styles/")[1];
                    "normal" === c ? (this.Mi = "", this.set("nolimg", !1), this.set("style", ""), this.vz = "") : (this.Dw = !0, this.set("nolimg", !0), b = new f.Ka.Xa(32 > c.length ? f.w.ac + "://webapi.amap.com/style?name=" + c + "&key=" + f.w.key : f.w.ac + "://webapi.amap.com/v4/map/styles?styleid=" + c + "&s=rsv3&key=" + f.w.key + (b ? "&ispublic=1" : ""), {callback: "callback"}), b.h("complete", function (a) {
                        a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) :
                            this.set("style", "");
                        this.Dw = !1
                    }, this), b.h("error", function () {
                        this.Dw = !1
                    }, this), this.Mi = a, this.aw())
                }
            }
        }, pV: function (a) {
            this.J.style.background = a
        }, resizeEnableChanged: function () {
        }, X6: function () {
            var a = this.get("limitBounds"), b = this.get("bounds");
            b.Eb.M > b.Cb.M && (b.Cb.M += 360);
            if (!a.contains(b)) {
                var c = this.get("center").Db();
                a.jg() < b.jg() ? c.M = a.Jg().M : (a.Eb.M > b.Eb.M && (c.M += a.Eb.M - b.Eb.M), a.Cb.M < b.Cb.M && (c.M += a.Cb.M - b.Cb.M));
                a.hg() < b.hg() ? c.O = a.Jg().O : (a.Eb.O > b.Eb.O && (c.O += a.Eb.O - b.Eb.O), a.Cb.O < b.Cb.O &&
                (c.O += a.Cb.O - b.Cb.O));
                return c
            }
        }, EE: function () {
            var a = this.nJ;
            this.K.refreshSize();
            var b = this.get("size");
            b && a && !b.yb(a) && (this.nJ = b, this.Up = !0, this.set("display"), this.$U(b), this.get("resizeEnable") && this.da("resize", {
                vaa: a,
                MT: b
            }))
        }, VO: function () {
            var a = this;
            a.EE();
            a.zE = setTimeout(function () {
                a.VO()
            }, 200)
        }, wZ: function () {
            this.zE && (clearTimeout(this.zE), this.zE = null)
        }, m1: function () {
            this.nJ = this.K.getSize();
            if (f.l.Ld || f.l.GW && f.l.cA || f.l.$$) this.VO(); else {
                var a = this;
                f.A.i6(this.J, function (b) {
                    a.EE(b)
                })
            }
        },
        n$: function () {
            var a = this.J;
            f.g.za(a, "amap-container");
            var b = {};
            b.qc = f.g.create("div", a, "amap-maps");
            this.ji = f.g.create("div", a);
            this.ji.style.display = "none";
            b.Pm = f.g.create("div", b.qc, "amap-drags");
            b.B = f.g.create("div", b.Pm, "amap-layers");
            b.D = f.g.create("div", b.Pm, "amap-overlays");
            b.controls = f.g.create("div", a, "amap-controls");
            b.Hv = f.g.create("a", a, "amap-logo");
            var c = window.location.host;
            -1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.Hv.href = f.l.Y ? "http://m.amap.com" : "http://gaode.com",
                b.Hv.target = "_blank");
            f.g.create("img", b.Hv).src = f.l.md ? this.K.F.logoUrlRetina : this.K.F.logoUrl;
            b.ui = f.g.create("div", a, "amap-copyright");
            b.ui.style.display = "none";
            350 < f.g.Tz(this.J).width && (b.ui.innerHTML = this.K.F.copyright, b.ui.wT = f.g.create("span", b.ui, "amap-mcode"), this.aw());
            this.Ia = b
        }, aw: function () {
            var a = this.get("layers");
            if (a) {
                for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
                    var e = a[d].get("mapNumber"), g = a[d].getzIndex();
                    e && g > b && a[d].get("visible") && (c = e, b = g)
                }
                this.set("mapNumber", c);
                a = this.K.getMapStyle();
                "GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Ia.ui.style.visibility = "hidden", this.Ia.Hv.style.display = "none");
                c && this.Ia.ui.wT && (this.Ia.ui.wT.innerHTML = "- " + c + "\u53f7", this.Ia.ui.style.visibility = "visible", this.Ia.Hv.style.display = "block");
                return c
            }
        }, wM: function () {
            f.l.Kj && f.ko && f.ko.flush()
        }, vm: function () {
            function a() {
                for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
                    var e = a[c].get("zooms");
                    if (!(a[c].b1 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].B &&
                        a[c].B.Oa && 0 === a[c].B.Oa.length || a[c].B && a[c].B.$H || a[c].B && a[c].B.Aa)) return !1
                }
                return d.sd && d.sd.get("visible") && !d.sd.Aa ? !1 : !0
            }

            function b() {
                var a = {id: d.K.id};
                f.od.Hd.end(f.extend(a, {key: "rds"}));
                f.od.Hd.send(f.extend(a, {
                    params: {
                        rs: d.get("baseRender"),
                        viewmode: d.K.getViewMode_(),
                        fd: 0 === d.kA ? 1 : 0,
                        raster: d.K.Zv ? 1 : 0
                    }
                }));
                d.K && d.K.Fj && d.K.Fj.BE();
                d.wM();
                d.set("display");
                d.HH = !0
            }

            function c() {
                f.od.Hd.end({id: d.K.id, key: "rd"});
                f.a.ec(function () {
                    this.r("complete")
                }, d);
                d.K.Aa = !0;
                d.set("display")
            }

            if (!this.YF) if (this.HH) 1 ===
            this.po && 13 === this.get("zoom") && (f.a.ev.stop(this.Ex), f.od.Hd.send({
                id: this.K.id,
                params: {fps: this.Ex.ev, type: "fps", rs: this.get("baseRender")}
            }), this.po = 2), this.wM(); else {
                var d = this, e = this.K.get("wpoLayer"), g = a();
                e ? (e.B && e.B.Aa && (this.K.Aa || c()), g && (this.K.Aa || c(), d.K.Li(e), d.K.set("wpoLayer", void 0), d.K.Zv = d.K.NT = !0, b())) : g && (this.K.Aa || c(), b())
            }
        }, layersChanged: function () {
            this.Wa = this.Wa || [];
            for (var a = this.get("layers"), b = this.Wa.length - 1; 0 <= b; b -= 1) this.Wa[b] === this.Ic || this.Wa[b] === this.Mn || this.Wa[b].St ||
            this.Wa[b].oa.St || -1 !== f.a.indexOf(a, this.Wa[b].oa) || (this.Wa[b].nf(), this.Wa[b].$h && this.Wa[b].$h.nf(), this.Wa[b].oa.H("complete", this.vm, this), this.Wa[b].oa.H("renderComplete", this.vm, this), this.Wa = f.a.pk(this.Wa, b));
            for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1) {
                if (a[b].Jh) -1 === f.a.indexOf(this.Wa, a[b].B) && this.Wa.push(a[b].B); else {
                    var g = this.hh(a[b]);
                    g && (this.Wa.push(g), a[b].Jh = !0, a[b].B = g);
                    a[b].h("complete", this.vm, this, !0);
                    a[b].h("renderComplete", this.vm, this)
                }
                a[b].Gn && a[b].get("visible") &&
                (c = !0, !1 === a[b].get("detectRetina") && (d = !1), e = a[b].get("textIndex") || e)
            }
            a = f.a.indexOf(this.Wa, this.sd);
            c ? (-1 === a && this.Wa.push(this.sd), this.sd.ga = d && f.l.ga, this.sd.Ku(this.get("mapStyle") || "normal"), this.sd.set("zIndex", e), this.sd.set("visible", !0), this.K.nv = !0, this.K.get("isHotspot") ? this.sd.Jaa() : this.sd.NF()) : (this.sd && (this.sd.set("visible", !1), this.K.nv = !1, this.sd.NF()), this.K.nv = !1);
            this.K.isHotspotChanged();
            this.set("display", 0);
            this.aw()
        }, isHotspotChanged: function () {
            this.layersChanged()
        },
        controlsChanged: function () {
            var a = this.get("controls"), b, c;
            if (a.add && 0 < a.add.length) for (; 0 < a.add.length;) b = a.add.shift(), (c = b.Lo || b.addTo) && c.call(b, this.K, this.Ia.controls); else if (a.remove && a.remove.length) for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.Np || b.removeFrom) && c.call(b, this.K, this.Ia.controls)
        }, ZP: function () {
            if (!this.YF) {
                var a = this;
                this.cQ = !1;
                a.Ic || (a.Ic = new f.B.lc(new v.B.lc, a), a.Ic.ae = 36, a.Ic.we = 36, a.Ic.set("zIndex", 120), a.Wa.push(a.Ic), a.Ic.Vu = !0);
                for (var b = a.get("overlays"), c = [],
                         d = 0; d < a.$b.length; d += 1) -1 === f.a.indexOf(b, a.$b[d].Qc) && (a.$b[d].Qc instanceof v.D.Qd || a.$b[d].Qc instanceof v.D.Xj ? a.$b[d].nf() : (a.Ic && a.$b[d] instanceof f.D.fb ? (a.Ic.Ue = f.a.XF(a.Ic.Ue, a.$b[d].L), a.Ic.IU([a.$b[d].L])) : a.Mn && a.Mn.IU([a.$b[d].L]), a.$b[d].L.aa ? (f.g.remove(a.$b[d].L.aa), a.$b[d].L.aa = null) : a.$b[d].L.Fa && (f.g.remove(a.$b[d].L.Fa.se), f.g.remove(a.$b[d].L.Fa.Jb), a.$b[d].L.Fa = null), a.$b[d].Lj && a.$b[d].Lj.stop(), a.$b[d].Qc.Jh = !1, a.$b[d].Qc.yh.map = null, a.$b[d].Qc.D = null, a.$b[d].Qc = null, a.$b[d].L.c8(),
                    a.$b[d].L = null, a.$b[d].Vn(), a.$b[d].yh = null, a.$b[d].uj(), a.$b[d].map = null), c.push(a.$b[d]));
                for (d = 0; d < c.length; d += 1) a.$b = f.a.pk(a.$b, f.a.indexOf(a.$b, c[d]));
                var e = [], g = [];
                f.a.Bca(function (b) {
                    if (!b.Jh && b.Se) {
                        var c = b.D || a.L6(b);
                        c && (a.$b.push(c), c instanceof f.D.Qd || c instanceof f.D.Xj ? c.QT(a) : c instanceof f.D.fb ? e.push(c.L) : g.push(c.L), b.Jh = !0)
                    }
                }, b);
                e.length && a.Ic.Ko(e);
                g.length && (a.Mn || (a.Mn = new f.B.lc(new v.B.lc, a), a.Mn.set("zIndex", 110), a.Wa.push(a.Mn)), a.Mn.Ko(g));
                a.set("display", 0)
            }
        }, overlaysChanged: function () {
            this.$b =
                this.$b || [];
            this.$b.length && this.$b.length !== this.get("overlays").length ? this.ZP() : this.cQ || (f.a.ec(this.ZP, this), this.cQ = !0)
        }, contextmenusChanged: function () {
            var a = this.get("contextmenu");
            if (a) {
                var b = this;
                f.jb.load("overlay", function () {
                    b.rz = new f.D.Xj(a, b);
                    b.set("display", 0)
                })
            }
        }, infosChanged: function () {
            var a = this.get("infos");
            if (a) {
                this.yk = this.yk || {};
                var b, c = this;
                f.jb.load("overlay", function () {
                    for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.yk[d] = c.yk[d] || new f.D.Qd(b, c))
                })
            }
        }, L6: function (a) {
            var b =
                null;
            if (a instanceof v.D.fb) b = new f.D.fb(a, this); else if (a instanceof v.D.Xj) b = new f.D.Xj(a, this); else if (a instanceof v.D.Qd) b = new f.D.Qd(a, this); else {
                var c = ["overlay"];
                "d" === this.get("overlayRender") ? (c.push("dvector"), f.l.Ck ? c.push("svg") : c.push("vml")) : c.push("cvector");
                if (!this.sea && !f.jb.Av(c)) {
                    var d = this;
                    f.jb.kg(c, function () {
                        this.sea = !0;
                        d.overlaysChanged()
                    });
                    return
                }
                a instanceof v.D.Rb ? b = new f.D.Rb(a, this) : a instanceof v.D.Xs ? b = new f.D.Xs(a, this) : a instanceof v.D.Ob ? b = new f.D.Ob(a, this) : a instanceof
                v.D.Xe ? b = new f.D.Xe(a, this) : a instanceof v.D.eo ? b = new f.D.Rb(a, this) : a instanceof v.D.jo && (b = new f.D.Rb(a, this))
            }
            return b
        }, Yfa: function () {
            function a() {
            }

            var b = new f.B.lc, c = [], d = new f.W(116.405467, 39.907761);
            new f.style.Je.Ye;
            for (var e = 0; 100 > e; e += 1) for (var g = 0; 100 > g; g += 1) {
                var h = new f.W(d.M + 0.02 * g, d.O + 0.02 * e),
                    h = new f.of({name: "point" + (100 * e + g), map: this, Ba: new f.ka.Ze(this.Qb(h))});
                c[100 * e + g] = h;
                h.h("hover", a, h)
            }
            b.Ko(c);
            this.Wa.push(b)
        }, Ab: function () {
        }, Xfa: function (a) {
            var b = new f.B.lc, c = [], c = (new f.bX({map: this})).JA(a);
            b.Ko(c);
            this.Wa.push(b);
            this.set("display", 0)
        }, hh: function (a) {
            a = a.hh(this);
            if (!a) return null;
            if (a.length && "string" == typeof a[0]) {
                var b = this;
                f.jb.kg(a, function () {
                    b.layersChanged()
                })
            } else return a;
            return null
        }, eha: function () {
            return this.Ia
        }, Gia: function () {
            this.set("display", 0)
        }, displayChanged: function (a) {
            this.ZU(a)
        }, ZU: function (a) {
            if (a) if (f.a.cg(this.QA), f.l.gh) {
                var b = this;
                setTimeout(function () {
                    b.Xb()
                }, 0)
            } else this.Xb(); else this.Ss || (this.QA = f.a.ec(this.Xb, this), this.Ss = !0)
        }, Xb: function () {
            if (!this.YF) {
                this.r("render");
                this.Ss = !1;
                var a = {};
                if (this.Wa) {
                    for (var b = [], c = 0, d = this.Wa.length; c < d; c += 1) b.push(this.Wa[c]), this.Wa[c].$h && b.push(this.Wa[c].$h);
                    b.sort(function (a, b) {
                        var c = a.get("zIndex"), d = b.get("zIndex");
                        return c > d ? 1 : c === d ? a.nC > b.nC ? 1 : -1 : -1
                    });
                    a.Wa = b;
                    a.size = this.get("size");
                    if (a.size.width && a.size.height) {
                        b = f.l.ga ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                        a.C6 = 15E5 < a.size.width * a.size.height * b * b;
                        a.Y = f.l.Y;
                        a.U = this.K.Sz();
                        a.P = this.K.view.get("resolution");
                        a.Bn = this.get("mapStyle");
                        a.Ji = this.Ji;
                        a.Fc = this.vg;
                        a.me =
                            this.Gh;
                        a.Te = this.fh;
                        a.GJ = this.fh && f.l.Y;
                        a.gW = f.l.Y && this.Gh;
                        a.sB = f.l.Y && this.vg;
                        this.sB = a.sB;
                        a.Vi = a.U.zoom > this.get("targetLevel");
                        a.maa = !0;
                        a.vQ = this.vQ;
                        for (var b = !1, e, c = !1, d = 0; d < this.Wa.length; d += 1) this.Wa[d].Og && this.Wa[d].get("visible") && a.U.zoom <= this.Wa[d].get("zooms")[1] && (a.UI = !0), this.Wa[d].Cl().md && (b = !0);
                        for (d = 0; d < this.Wa.length; d += 1) this.Wa[d].oa.tQ && a.UI && (!this.Gh && this.Wa[d].oa.get("visible") && (e = this.Wa[d].oa.tQ(), e.yha = 1, e.zoom = a.U.zoom), c = !0);
                        c ? e && this.hc !== e && (this.hc = e) : this.hc =
                            [];
                        a.hc = this.hc;
                        a.md = b;
                        a.scale = Math.pow(2, a.U.zoom - a.U.wc);
                        this.fv = a;
                        if (e = this.Nz()) e.Xb(a), this.Ji = this.ER = !1
                    }
                }
            }
        }, Nz: function () {
            if (!this.T || this.T.type !== this.K.view.type) if (this.T = null, "3D" == this.K.view.type) {
                var a = this;
                f.jb.load("Map3D", function () {
                    a.T || (a.T = new f.Ma.Vw(a), a.set("display"))
                })
            } else this.T = new f.R.canvas.Sb(this);
            return this.T
        }, g9: function () {
            var a = [], b = this.get("controls").Sc, c;
            for (c in b) b[c].Lr && b[c].Lr() && a.push(b[c].Lr());
            return a
        }, destroyChanged: function () {
            this.YF = 1;
            this.Q = {};
            this.sd && (this.sd.oa.H("complete", this.vm, this), this.sd.nf(), this.Wa = f.a.pk(this.Wa, f.a.indexOf(this.Wa, this.sd)));
            this.c5 && clearTimeout(this.c5);
            this.I4();
            this.J1();
            this.iE && this.iE();
            this.M5();
            this.Vn();
            this.K = this.K.map = null;
            this.J = this.J.uC = null;
            this.qd && (this.qd.stop(), this.qd = null);
            this.le && (this.le.stop(), this.le = null);
            this.yc && (this.yc.stop(), this.yc = null)
        }, M5: function () {
            var a = this.J;
            this.wZ();
            f.A.k7(a);
            f.g.bw(a);
            this.ji = null;
            f.g.Ha(a, "amap-container");
            this.Ia = null
        }, jogEnableChanged: function () {
            this.get("jogEnable") ?
                this.xp = !0 : this.xp = !1
        }, drawChanged: function () {
            var a = this, b, c, d = this.get("draw");
            if (d) {
                this.Fl || (this.Fl = []);
                b = 0;
                for (c = this.Fl.length; b < c; b += 1) this.Fl[b].Mba();
                f.jb.load("interaction", function () {
                    var b = new f.Xea({type: d, B: a.Mn}, a);
                    a.Fl.push(b);
                    a.loaded = !0
                })
            } else if (this.Fl) for (b = 0, c = this.Fl.length; b < c; b += 1) this.Fl[b].Mba(), this.Fl[b].mga(), this.H("click", this.Fl[b].qha, this)
        }, ve: function (a, b) {
            return this.K.view.ve(a, b)
        }, Ae: function (a, b) {
            return this.K.view.Ae(a, b)
        }, lS: function (a, b) {
            var c = this.get("size"),
                d = document.createElement("canvas");
            a = a || c.width;
            b = b || c.height;
            d.width = a;
            d.height = b;
            for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, g = d.getContext("2d"), h = this.Ia.B.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
            k.sort(function (a, b) {
                return a.style.zIndex - b.style.zIndex
            });
            for (l = 0; l < k.length; l += 1) {
                var m = k[l];
                if (f.g.vk(m, "amap-layer") || f.g.vk(m, "amap-e") || f.g.vk(m, "amap-labels")) if ("CANVAS" === m.tagName) {
                    var h = c, n = e, p = parseFloat(m.style.width) || m.width,
                        q = parseFloat(m.style.height) || m.height, r = 1;
                    m.style.transform &&
                    (r = parseFloat(m.style.transform.split("(")[1]));
                    g.drawImage(m, n, h, p * r, q * r)
                } else if ("DIV" === m.tagName) for (var r = m.childNodes, t = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                    var x = r[u];
                    if ("CANVAS" === x.tagName || "IMG" === x.tagName) h = parseFloat(x.style.top) || 0, n = parseFloat(x.style.left) || 0, p = parseFloat(x.style.width) || x.width, q = parseFloat(x.style.height) || x.height, g.drawImage(x, n + m, h + t, p, q)
                }
            }
            return d.toDataURL()
        }
    });
    f.Sb.gb({
        J0: function () {
            this.Wt = !1;
            f.l.ke && ("3D" === this.K.view.type ? this.OY() : this.MY());
            f.l.Y || this.JY()
        }, I4: function () {
            f.l.ke && ("3D" === this.K.view.type ? this.P1() : this.O1());
            f.l.Y || this.K1()
        }, rotateEnableChanged: function () {
            this.XA = this.get("rotateEnable");
            f.l.ke && this.wQ && "3D" !== this.K.view.type && (this.XA ? this.wQ() : this.uaa());
            this.rotation = this.XA ? this.get("rotation") : 0;
            this.set("rotation", this.rotation);
            this.set("display")
        }, zoomEnableChanged: function () {
            this.get("zoomEnable") ? (f.l.ke && this.xF && "3D" !==
            this.K.view.type && this.xF(), f.l.Y || this.LY()) : (f.l.ke && this.cI && this.cI(), f.l.Y || this.N1())
        }, mousewheelChanged: function () {
        }, PH: function (a) {
            a && this.U$(a.Ho)
        }, U$: function (a) {
            this.Wt = a
        }, cq: function () {
            this.Wt = !1
        }, Hf: function (a, b, c) {
            var d, e = {};
            a || (a = window.event);
            var g = f.A.yi(a, this.Ia.qc);
            f.l.ke && ("touchend" !== a.type ? this.Q.HN = g : g = this.Q.HN);
            e.ub = g;
            e.wd = this.Ae(g);
            e.wd && (e.wd = e.wd.toFixed(3));
            e.De = this.Fd(e.wd);
            c || (c = this.Wt ? this.Wt ? [this.Wt] : null : this.J_(e.wd)) && 0 < c.length && c[0].Fm && (d = c[0].Fm, e.Ho =
                c[0]);
            d || (d = this);
            e.Pc = d;
            e.mfa = a.altKey;
            e.ctrlKey = a.ctrlKey;
            e.button = void 0 === a.button ? 0 : a.button;
            !b && a.preventDefault && a.preventDefault();
            return e
        }, HD: function (a) {
            return a && a !== this && a !== document
        }, AE: function () {
            if (this.Q.xl && this.Q && this.Q.Re) {
                var a = this.Q.xl.ub.Sa(this.Q.Re);
                a.x || a.y ? (this.Q.fh = !0, this.Q.bl || (this.Q.yl.r("dragstart", this.Q.wl), this.Q.bl = !0), this.Q.yl.r("dragging", this.Q.xl), this.Q.Re = this.Q.xl.ub) : this.Q.fh = !1
            }
        }, ada: function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
            return b
        }, Jp: function (a, b, c) {
            return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
        }, J_: function (a) {
            var b = this.Nz();
            if (!b) return null;
            var c, d = this;
            this.Wa.sort(function (a, b) {
                return a.get("zIndex") > b.get("zIndex") ? -1 : 1
            });
            b.jp(a, this.Wa, function (a) {
                c = a;
                c = d.ada(c)
            }, function () {
                c = []
            });
            return c
        }
    });
    f.Sb.gb({
        P0: function () {
            this.h("moveend", this.VT, this);
            f.l.gh && (f.l.zB || f.l.az) && this.h("zoomend", this.fK, this);
            this.h("movestart", this.WT, this);
            this.h("zoomstart", this.aU, this);
            this.h("zoomend", this.$T, this);
            this.AC();
            this.po = 0;
            this.Ex = {};
            "undefined" === typeof window.requestAnimationFrame && (this.po = 2)
        }, aU: function () {
            2 !== this.po && 12 === this.get("zoom") && (this.po = 1, f.a.ev.start(this.Ex));
            this.Gh = !0
        }, $T: function () {
            1 === this.po && 13 !== this.get("zoom") && (this.po = 0, f.a.ev.cancel(this.Ex));
            this.Gh = !1;
            this.set("display")
        },
        J1: function () {
            this.H("moveend", this.VT, this);
            f.l.gh && (f.l.zB || f.l.az) && this.H("zoomend", this.fK, this);
            this.H("movestart", this.WT, this);
            this.H("zoomstart", this.aU, this);
            this.H("zoomend", this.$T, this);
            this.L1()
        }, VT: function (a) {
            this.fh = !1;
            this.$U();
            !a.bT && this.get("limitBounds") ? (a = this.X6()) && !a.yb(this.get("center")) ? this.dB(this.get("zoom"), a, !1, !0) : this.da("moveend") : this.da("moveend");
            this.set("display")
        }, WT: function () {
            this.fh = !0
        }, dragEnableChanged: function () {
            (this.Wu = this.get("dragEnable")) ? this.zC() :
                this.hE()
        }, da: function (a, b) {
            var c;
            b && (c = b.MT ? {type: a, newsize: b.MT, oldsize: b.vaa} : {
                type: a,
                pixel: b.ub,
                target: this.K,
                lnglat: b.De
            });
            this.K.r(a, c)
        }, AC: function () {
            this.h("click", this.gO);
            this.h("dblclick", this.kO);
            f.l.ke && this.yL();
            f.l.Y || this.KY()
        }, L1: function () {
            this.H("click", this.gO);
            this.H("dblclick", this.kO);
            f.l.ke && this.YN();
            f.l.Y || this.M1()
        }, ky: function (a, b) {
            var c = this.get("targetLevel") || this.get("zoom"), c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
                c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
            c === this.get("zoom") || this.le && this.le.Qp && c === this.le.end || this.Ws(c, !1, a)
        }, gO: function (a) {
            this.da("click", a)
        }, kO: function (a) {
            this.get("doubleClickZoom") && this.get("zoomEnable") && this.ky(a.wd, 1);
            this.da("dblclick", a)
        }, Lfa: function (a) {
            this.ky(a.mja, a.nja);
            this.da("touchend", a)
        }, zC: function () {
            this.Wu && ("3D" === this.K.view.type ? (this.h("dragstart", this.qO), this.h("dragging", this.mO), this.h("dragend", this.oO)) : (this.h("dragstart", this.pO), this.h("dragging", this.lO), this.h("dragend", this.nO)))
        }, hE: function () {
            this.Wu ||
            ("3D" === this.K.view.type ? (this.H("dragstart", this.qO), this.H("dragging", this.mO), this.H("dragend", this.oO)) : (this.H("dragstart", this.pO), this.H("dragging", this.lO), this.H("dragend", this.nO)))
        }, pO: function (a) {
            this.PH(a);
            this.vg = !0;
            this.Q.Cr = a.ub.x;
            this.Q.Xu = a.ub.y;
            this.qd && (this.qd.stop(), this.cn(!0));
            this.da("dragstart");
            this.da("movestart");
            this.r("movestart", a);
            this.hda()
        }, lO: function (a) {
            var b = this.Q, c = a.ub.x - b.Cr, d = a.ub.y - b.Xu;
            if (d || c) {
                this.Q.fh = !0;
                b.Cr = a.ub.x;
                b.Xu = a.ub.y;
                a = c;
                var b = d, e = this.XA ?
                    this.rotation : 0;
                e && (e *= Math.PI / 180, a = c * Math.cos(e) + Math.sin(e) * d, b = -Math.sin(e) * c + Math.cos(e) * d);
                a = this.get("centerCoords").Sa((new f.I(a, b)).ed(this.P));
                (b = this.QQ(a)) && (d = Math.round(this.ve(b).Sa(this.ve(a)).y));
                this.En(this.Ia.Pm, c, d);
                a.x = (a.x + f.a.Ya) % f.a.Ya;
                this.set("centerCoords", a, !0);
                this.set("center", this.Fd(a), !0);
                this.xp && (this.bf ? (a = new Date, this.to = 100 < a - this.bf ? new f.I(0, 0) : new f.I(c, d), this.bf = a) : this.bf = new Date);
                this.da("dragging");
                this.da("mapmove")
            } else this.Q.fh = !1, this.to = null
        },
        En: function (a, b, c) {
            if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
                var d = parseFloat(a.style.top) || 0, e = parseFloat(a.style.left) || 0, g = "";
                this.rotation && (g = f.g.Tn[f.g.Ke] + ":rotate(" + this.rotation + "deg);overflow:visible;");
                a.style.cssText = "position:absolute;top:" + (d + c) + "px;left:" + (e + b) + "px;" + g
            }
        }, QQ: function (a) {
            var b = this.K.view.eL(), c = this.nJ.height * this.P / 2;
            return a.y < b.vd + c ? (a.y = b.vd + c, a) : a.y > b.ud - c ? (a.y = b.ud - c, a) : null
        }, nO: function () {
            this.cq();
            100 < new Date - this.bf && (this.to = null);
            this.Q.Re = null;
            this.vg = !1;
            this.da("dragend");
            if (this.xp && this.to) if (this.Q.fh) {
                var a = this.to, b = new f.I(0, 0);
                this.qd = new f.wh(a, b, function (a, b, e) {
                    return 600 <= e ? b : a.ed(1 - Math.pow(e / 600, 2)).floor()
                }, 1);
                this.qd.Ql = function (a) {
                    if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.qd.stop(), this.r("moveend"), this.cn(), this.to = this.bf = null; else {
                        var b = a.x, e = a.y, g = this.XA ? this.rotation : 0;
                        g && (g *= Math.PI / 180, b = a.x * Math.cos(g) + Math.sin(g) * a.y, e = -Math.sin(g) * a.x + Math.cos(g) * a.y);
                        b = this.get("centerCoords").Sa((new f.I(b, e)).ed(this.P));
                        e = this.QQ(b);
                        g = a.y;
                        e && (g = Math.round(this.ve(e).Sa(this.ve(b)).y));
                        this.En(this.Ia.Pm, a.x, g);
                        b.x = (b.x + f.a.Ya) % f.a.Ya;
                        this.set("centerCoords", b, !0);
                        this.set("center", this.Fd(b), !0);
                        this.da("mapmove")
                    }
                };
                this.qd.Qj(this)
            } else this.r("moveend"), this.cn(!0), this.to = this.bf = null; else this.r("moveend"), this.cn(), this.to = this.bf = null
        }, hda: function () {
            if (!this.Q.refresh) {
                var a = this;
                this.Q.refresh = setInterval(function () {
                    a.set("display", 0)
                }, f.l.Y ? 400 : 100)
            }
        }, fK: function () {
            if (f.l.gh && (f.l.zB || f.l.az)) {
                for (var a = this.Ia.B.childNodes, b = 0; b < a.length; b += 1) {
                    var c = a[b];
                    c instanceof
                    HTMLCanvasElement && (c.width = 0);
                    "amap-e" === c.className && (c.style.height = "0")
                }
                for (b = 0; b < this.Wa.length; b += 1) c = this.Wa[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap && (c.Io && (c.Io.width = 0), c.gr && (c.gr.width = 0))
            }
        }, cn: function (a) {
            this.Q.refresh && (clearInterval(this.Q.refresh), this.Q.refresh = null);
            a || (this.fK(), this.set("display", 0))
        }, $U: function (a) {
            this.set("refresh", a)
        }
    });
    f.Sb.gb({
        setZoomSlow: function (a) {
            this.dB(a, null, !this.get("animateEnable"))
        }, setPanTo: function (a) {
            this.dB(null, a, !this.get("animateEnable"))
        }, zoomAndCenterChanged: function (a) {
            var b = a[0];
            b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
            b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
            this.dB(b, a[1], a[2] || !this.get("animateEnable"))
        }, zoomChanged: function () {
            this.P = Math.pow(2, 20 - this.get("zoom"));
            this.r("closeOverlays");
            this.set("display", 0)
        }, rotationChanged: function (a) {
            this.rotation = this.get("rotateEnable") ?
                this.get("rotation") : 0;
            this.K.r("rotate", {rotation: this.rotation || 0});
            !0 !== a && this.set("display", 0)
        }, pitchChanged: function () {
            this.pitch = this.get("pitchEnable") ? this.get("pitch") : 0;
            this.K.r("pitch", {pitch: this.pitch || 0});
            this.set("display", 0)
        }, centerCoordsChanged: function () {
            this.r("closeOverlays");
            this.set("display", 0)
        }
    });
    f.XK = f.Z.extend({
        ea: [f.ja, f.de], C: function (a, b) {
            this.type = "2D";
            this.map = a;
            this.Lf(b, !0);
            this.centerChanged();
            a.Ud("zoom center centerCoords scale rotation pitch resolution".split(" "), this);
            this.Ud(["crs", "refresh"], a)
        }, getResolution: function (a) {
            return this.map.tl.XG(a || this.get("zoom"))
        }, eL: function () {
            this.pC || this.w7();
            return this.pC
        }, w7: function () {
            var a;
            if (this.get("center") instanceof f.W) {
                a = new f.zd(-180, -85, 180, 85);
                var b = this.map.Qb(a.zi());
                a = this.map.Qb(a.kn());
                this.pC = {
                    he: b.x, vd: b.y, Md: a.x,
                    ud: a.y
                }
            } else a = this.map.get("limitBounds"), this.pC = {he: a[0], vd: a[1], Md: a[2], ud: a[3]}
        }, Sz: function () {
            var a = this.map, b = this.get("zoom");
            return {
                zoom: b,
                Cg: this.get("center"),
                pa: this.Bj(),
                Ua: this.get("centerCoords"),
                rotation: a.get("rotateEnable") && parseInt(this.get("rotation")) || 0,
                be: a.get("crs"),
                P: Math.pow(2, 20 - b),
                wc: Math.round(b),
                Zd: Math.pow(2, 20 - Math.round(this.get("zoom")))
            }
        }, centerChanged: function () {
            this.set("centerCoords", this.map.Qb(this.get("center")).toFixed(0), !0)
        }, centerCoordsChanged: function () {
            var a =
                    this.map, b = this.eL(), c = this.get("centerCoords"), d = a.getSize(), e = this.get("zoom", null, !0),
                a = this.get("center", null, !0), d = d.height * Math.pow(2, 20 - e) / 2;
            a instanceof f.W ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Md && (c.x = b.Md);
            c.y < b.vd + d ? c.y = b.vd + d : c.y > b.ud - d && (c.y = b.ud - d);
            this.set("center", this.map.Fd(c), !0)
        }
    });
    f.hC = f.XK.extend({
        Bj: function () {
            var a = this.map.get("size"), b = this.get("centerCoords"),
                c = (this.map.get("rotateEnable") && parseInt(this.get("rotation"))) % 360 || 0,
                d = this.get("zoom", null, !0), e = Math.pow(2, 20 - d), c = Math.PI * c / 180,
                a = new f.I((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
                e = new f.xe(b.Sa(a.ed(e)), b.add(a.ed(e))), c = this.map.get("targetLevel");
            if (c > d - 1) {
                var g = Math.pow(2, 20 - c);
                e.JB = new f.xe(b.Sa(a.ed(g)), b.add(a.ed(g)))
            }
            e.xJ =
                c || d;
            e.Hb = a;
            return e
        }, Hc: function () {
            var a = this.Bj(), b = a.vc.x, c = a.nb.y, a = new f.I(a.nb.x, a.vc.y), b = new f.I(b, c);
            return new f.zd(this.map.Fd(a), this.map.Fd(b))
        }, zoomChanged: function () {
        }, ve: function (a, b) {
            this.map.get("size");
            var c = a.Db(), d = this.get("centerCoords"), e = c.Sa(d);
            e.x < -f.a.Ya / 2 ? e.x += f.a.Ya : e.x > f.a.Ya / 2 && (e.x -= f.a.Ya);
            var c = this.map.get("size").Is().cc(2),
                g = (this.map.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180,
                d = e.x * Math.cos(g) - Math.sin(g) * e.y, e = Math.sin(g) * e.x + Math.cos(g) * e.y;
            return c.add((new f.I(d,
                e)).ed(Math.pow(2, (b || this.get("zoom")) - 20)))
        }, Ae: function (a, b) {
            var c = this.map.get("size").Is().cc(2), d = a.Sa(c),
                e = (this.map.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180,
                c = d.x * Math.cos(e) + Math.sin(e) * d.y, d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
                c = this.get("centerCoords").add((new f.I(c, d)).ed(Math.pow(2, 20 - (b || this.get("zoom")))));
            c.x = (c.x + 268435456) % 268435456;
            return c
        }
    });
    f.VX = f.XK.extend({
        C: function (a, b) {
            this.Ik = new f.qf;
            this.Qg = new f.qf([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
            arguments.callee.ma.apply(this, arguments);
            this.scale = 1;
            this.type = "3D";
            this.Yt = !0;
            this.SH = f.a.bind(this.SH, this)
        }, refreshChanged: function () {
            this.eq()
        }, zoomChanged: function () {
            this.eq()
        }, centerChanged: function () {
            arguments.callee.ma.apply(this, arguments);
            this.eq()
        }, centerCoordsChanged: function () {
            arguments.callee.ma.apply(this, arguments);
            this.eq()
        }, rotationChanged: function () {
            this.eq()
        }, pitchChanged: function (a) {
            this.yh.pitch =
                Math.min(this.map.get("maxPitch"), Math.max(a, 0));
            this.eq()
        }, eq: function () {
            this.lea() || (this.jea(), this.d8())
        }, d8: function () {
            f.a.Bi();
            this.Yt = !1;
            this.YD && clearTimeout(this.YD);
            this.YD = setTimeout(this.SH, 150)
        }, SH: function () {
            this.YD = null;
            this.Yt = !0
        }, zha: function () {
            return this.Yt
        }, jea: function () {
            var a = this.get("centerCoords"), b = this.get("pitch"), c = this.get("rotation");
            this.map.get("rotateEnable") || (c = 0);
            this.map.get("pitchEnable") || (b = 0);
            a = (new f.qf).yV(-a.x + f.a.Mc.x, -a.y + f.a.Mc.y, 0);
            b = (new f.qf).hJ(180 -
                b, 1, 0, 0);
            c = (new f.qf).hJ(c, 0, 0, 1);
            this.T8 = a.xv();
            this.Qg = (new f.qf).yV(0, 0, -this.ml).multiply(b.multiply(c.multiply(a))).toFixed(8);
            this.Qg.Hj = this.Qg.xv()
        }, lea: function (a) {
            a = a || this.get("zoom");
            var b = this.map.get("size"), c = b.width, b = b.height;
            if (!c || !b) return !0;
            this.$y = c /= b;
            b = b / 2 * Math.pow(2, 20 - a);
            a = f.a.Dd((56 - a) * Math.PI / 180, 2);
            var d = f.a.Dd(b / Math.tan(a / 2), 0);
            2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
            this.ml = d;
            this.Ov = this.ml / 10;
            this.wG = 50 * this.ml;
            this.R7 = (this.ml - this.Ov) / (this.wG - this.Ov);
            this.Ik.Pca(a,
                c, this.Ov, this.wG);
            this.Ik.Hj = this.Ik.xv()
        }, Sz: function () {
            var a = this.map, b = this.get("zoom");
            a.map.Up && this.eq();
            return {
                zoom: b,
                $y: this.$y,
                top: this.top,
                Cg: this.get("center"),
                pa: this.Bj(),
                Ua: this.get("centerCoords"),
                rotation: a.get("rotateEnable") && parseInt(this.get("rotation")) || 0,
                pitch: a.get("rotateEnable") && this.get("pitch") || 0,
                Qja: this.get("yaw"),
                be: a.get("crs"),
                P: Math.pow(2, 20 - b),
                wc: Math.round(b),
                Zd: Math.pow(2, 20 - Math.round(this.get("zoom"))),
                Ik: this.Ik,
                Qg: this.Qg
            }
        }, Bj: function () {
            var a = this.map.get("size"),
                b = a.width, a = a.height, c = this.Ae(new f.I(0, 0), !0), d;
            d = 0;
            c = this.Ae(new f.I(0, d), !0);
            if (55 < this.yh.pitch || !c) for (; !c;) d += b / 96, c = this.Ae(new f.I(0, d), !0);
            this.top = d / a;
            d = this.Ae(new f.I(b, d), !0);
            var e = 0, g = this.yh.zoom;
            50 <= this.yh.pitch && 18 <= g && (e = 0);
            g = this.Ae(new f.I(b, a + e), !0);
            e = this.Ae(new f.I(0, a + e), !0);
            c = [c.Qi(), d.Qi(), g.Qi(), e.Qi(), c.Qi()];
            c = new f.mK(c);
            c.FF = this.Ae(new f.I(b / 2, a + 256), !0);
            g = this.get("zoom", null, !0);
            b = this.map.get("targetLevel");
            c.xJ = b || g;
            return c
        }, Hc: function () {
            for (var a = this.Bj(),
                     b = [], c = 0; c < a.path.length; c += 1) {
                var d = this.map.Fd(new f.I(a.path[c][0], a.path[c][1]));
                b.push(d)
            }
            return new f.mK(b)
        }, ve: function (a) {
            a = this.IT([a]);
            a = a[0];
            return new f.I(a.x, a.y)
        }, e9: function (a) {
            var b = this.map.get("size");
            a = new f.lm([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
            a.multiply(this.Ov);
            return this.Ik.Hj.Oj(a)
        }, Ae: function (a, b) {
            var c = this.map.get("size"), d = a.x / c.width * 2 - 1, e = 1 - a.y / c.height * 2,
                c = new f.lm([d, e, -1, 1]);
            c.multiply(this.Ov);
            c = this.Ik.Hj.Oj(c);
            d = new f.lm([d, e, 1, 1]);
            d.multiply(this.wG);
            d = this.Ik.Hj.Oj(d);
            e = this.Qg.Hj;
            c = e.Oj(c).elements;
            d = e.Oj(d).elements;
            e = c[2] / (c[2] - d[2]);
            return 0 > d[2] || 0 > e || b && e > 2.5 * this.R7 ? null : (new f.I(c[0] - e * (c[0] - d[0]), c[1] - e * (c[1] - d[1]))).add(f.a.Mc)
        }, IT: function (a) {
            for (var b = this.get("center"), c = this.map, d = f.a.Mc.x, e = f.a.Mc.y, g = this.map.get("size"), h = [], k = new f.lm([0, 0, 0, 1]), l = k.elements, m = new f.I(0, 0), n = 0, p = a.length; n < p; n++) {
                m.x = a[n].x;
                m.y = a[n].y;
                var q = c.Fd(m);
                -180 > b.M - q.M ? m.x -= 268435456 : 180 < b.M - q.M && (m.x += 268435456);
                l[0] = m.x - d;
                l[1] = m.y - e;
                l[2] = 0;
                l[3] = 1;
                q = this.Ik.Oj(this.Qg.Oj(k));
                q.multiply(1 / q.elements[3]);
                h.push({x: (q.elements[0] + 1) / 2 * g.width, y: (-q.elements[1] + 1) / 2 * g.height, z: q.elements[2]})
            }
            return h
        }
    });
    f.a.Mc = new f.I(215440491, 106744817);
    f.Sb.gb({
        NQ: function (a, b, c) {
            var d = this;
            d.FB ? (clearTimeout(d.FB), d.FB = null) : (d.da("zoomstart", {zoom: a}), d.r("zoomstart"));
            d.FB = setTimeout(function () {
                d.FB = null;
                d.da("zoomend", {zoom: a});
                d.da("zoomchange", {zoom: a});
                d.r("zoomend")
            }, 150);
            a = f.a.Dd(a, 2);
            d.Ws(a, !0, b, c)
        }, Ws: function (a, b, c, d) {
            function e(b) {
                b = f.a.Dd(b, 2);
                var c = this.Ae(k);
                this.set("zoom", b);
                var d = this.Ae(k), c = d && d ? d.Sa(c) : new f.I(0, 0);
                this.set("centerCoords", this.get("centerCoords").Sa(c).toFixed(4));
                c.x && c.y && this.da("mapmove");
                b === a && Math.floor(a) ===
                a && (this.set("targetLevel", null), g && (this.da("zoomchange"), this.da("zoomend")), h && this.r("moveend"), this.r("zoomend"), this.le = null)
            }

            "3D" !== this.K.view.type && (f.l.Y || f.l.Ld) && (b = !0);
            a = a || this.get("zoom");
            a = Math.min(Math.max(a, this.get("zooms")[0]), this.get("zooms")[1]);
            var g = a !== this.get("zoom"), h = !!c;
            this.qd && (this.qd.stop(), this.qd = null);
            c = c || this.get("centerCoords");
            var k = this.ve(c), l;
            this.yc && this.yc.Qp && (this.yc.stop(), this.yc.jH && (d = !0), this.yc.mv && (l = !0), this.yc = null, this.set("targetLevel",
                null));
            this.le && this.le.Qp && (this.le.stop(), d = !0, this.le.mv && (l = !0), this.le = null, this.set("targetLevel", null));
            g && !d && this.da("zoomstart");
            h && !l && this.da("movestart");
            this.r("zoomstart");
            b ? e.call(this, a) : (this.le = new f.wh(this.get("zoom"), a, null, 0.02), this.le.jH = g, this.le.mv = h, this.le.transition = function (a, b, c) {
                return c >= f.w.Yy ? b : (b - a) * (1 - Math.pow(1 - c / f.w.Yy, 4)) + a
            }, this.le.Ql = e, this.le.Qj(this), this.set("targetLevel", a))
        }, dB: function (a, b, c, d) {
            var e = null;
            a || (a = this.yc ? this.yc.oda : this.get("targetLevel") ||
                this.get("zoom"));
            var e = b ? this.Qb(b).toFixed(3) : this.yc ? this.yc.UV : this.get("centerCoords"),
                g = a !== this.get("zoom"), h = !e.yb(this.get("centerCoords")), k = b = !1;
            this.le && this.le.Qp && (this.le.stop(), b = !0, this.le.mv && (k = !0), this.le = null, this.set("targetLevel", null));
            this.yc && this.yc.Qp && (this.yc.stop(), this.yc.jH && (b = !0), this.yc.mv && (k = !0), this.yc = null, this.set("targetLevel", null));
            this.qd && (this.qd.stop(), this.qd = null);
            if (g || h) {
                if (!this.K.view.Bj().contains(e) || g && "3D" !== this.K.view.type && (f.l.Y || f.l.Ld)) c =
                    !0;
                if (c) g && (b || (this.r("zoomstart"), this.da("zoomstart")), this.set("zoom", a), this.da("zoomchange"), this.da("zoomend"), this.r("zoomend")), h && (k || d || (this.da("movestart"), this.r("movestart")), this.set("centerCoords", e), this.da("mapmove"), this.r("moveend", {bT: d})), this.set("targetLevel", null); else {
                    this.set("targetLevel", a);
                    var l = a - this.get("zoom"), m = e.Sa(this.get("centerCoords")).toFixed(3);
                    this.yc = new f.wh(1, 0, null, 0.001);
                    this.yc.jH = g;
                    this.yc.mv = h;
                    this.yc.UV = e;
                    this.yc.oda = a;
                    this.yc.transition = function (a,
                                                   b, c) {
                        return Math.pow(1 - Math.min(f.w.Yy, c) / f.w.Yy, 2)
                    };
                    this.yc.Ql = function (b) {
                        0.02 > b ? (this.yc && (this.yc.stop(), this.yc = null), g && (this.set("zoom", a), this.da("zoomchange"), this.da("zoomend"), g = !1, this.r("zoomend")), h && (this.set("centerCoords", e), this.r("mapmove"), this.r("moveend", {bT: d})), this.set("targetLevel", null)) : (g && this.set("zoom", a - l * b), h && (b = e.Sa(m.ed(b)).toFixed(3), this.set("centerCoords", b), this.da("mapmove")));
                        this.set("display", 1)
                    };
                    this.yc.Qj(this);
                    g && !b && (this.r("zoomstart"), this.da("zoomstart"));
                    !h || k || d || (this.r("movestart"), this.da("movestart"))
                }
            }
        }
    });
    f.B = {};
    f.B.kc = f.Z.extend({
        ea: [f.ja, f.de], C: function (a, b) {
            this.oa = a;
            this.$c = [3, 18];
            this.nC = f.a.Fb(this);
            a && this.Ud(["opacity", "visible", "zIndex", "zooms"], a);
            a.cK = b.K.getViewMode_();
            this.j = b;
            this.X("display", b)
        }, nf: function () {
            this.Og && this.NF();
            if (f.Pa && f.Pa.Yn && f.Pa.Yn.length) {
                var a = f.a.indexOf(f.Pa.Yn, this);
                -1 !== a && (f.Pa.Yn = f.a.pk(f.Pa.Yn, a))
            }
            if (a = this.pb) {
                if (a.length) for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]); else a.parentNode && a.parentNode.removeChild(a);
                this.pb = null
            }
            this.oa.nf &&
            this.oa.nf();
            this.oa.Jh = !1;
            this.oa.B = null;
            this.Vn();
            this.R && (this.R.yr(), this.R = null);
            this.Mk && (this.Mk.yr(), this.Mk = null)
        }, da: function (a, b) {
            this.oa.r(a, b)
        }, visibleChanged: function () {
            this.set("display", 0)
        }, zIndexChanged: function () {
            this.set("display", 0)
        }, gJ: function (a) {
            f.g.Zl(a, this.opacity)
        }, opacityChanged: function () {
            var a = this.get("opacity");
            this.opacity = Math.min(Math.max(0, a), 1);
            if (a = this.pb) if (a.length) for (var b = 0; b < a.length; b += 1) this.gJ(a[b]); else this.gJ(a)
        }, JG: function () {
            var a = this.get("bounds");
            if (a) {
                if (a instanceof f.zd) {
                    var b = a.zi(), c = a.kn(), d = this.j.Qb(new f.W(180, 0)).x, e = this.j.Qb(b), g = this.j.Qb(c),
                        h = this.j.get("center");
                    b.M > c.M && (0 < h.M ? g.x += d : e.x -= d);
                    this.G = [e.x, e.y, g.x, g.y]
                }
                a instanceof f.xe && (this.G = [a.nb.x, a.nb.y, a.vc.x, a.vc.y]);
                return this.G
            }
            return null
        }
    });
    var zc = function () {
        function a(a) {
            this.jC[f.a.Fb(a)] = a;
            return this
        }

        function b(a) {
            this.jC[f.a.Fb(a)] = null;
            return this
        }

        return function () {
            function c() {
                var a = c.jC, b, g = [], h;
                for (h in a) Object.prototype.hasOwnProperty.call(a, h) && g.push(a[h]);
                for (a = g.length - 1; 0 <= a; a -= 1) h = g[a].apply(this, arguments), void 0 !== h && (b = h);
                return b
            }

            c.jC = {};
            c.jQ = a;
            c.Eia = b;
            return c
        }
    }();
    f.ne = f.Z.extend({
        ea: [f.ja], C: function (a, b) {
            this.wm = a | 0;
            this.ex = !!b;
            this.count = 0;
            this.fI = zc();
            this.clear();
            this.Zx = []
        }, zp: function () {
            return !this.count
        }, xha: function () {
            return this.count >= this.wm
        }, dja: function (a) {
            this.wm !== a && (this.wm = a | 0) && this.TP(this.wm)
        }, Sc: function (a) {
            return !!this.j[a]
        }, get: function (a, b) {
            var c = this.uM(a);
            return c ? c.value : b
        }, set: function (a, b) {
            var c = this.uM(a);
            c ? c.value = b : (c = new f.ne.ho(a, b), this.j[a] = c, this.oN(c), this.count += 1)
        }, fm: function (a) {
            this.remove(a)
        }, remove: function (a) {
            return Object.prototype.hasOwnProperty.call(this.j,
                a) ? (this.lu(this.j[a]), !0) : !1
        }, forEach: function (a, b) {
            for (var c = this.bc.next; c !== this.bc; c = c.next) a.call(b, c.value, c.key, this)
        }, Jn: function (a, b) {
            return Object.prototype.hasOwnProperty.call(this.j, a) ? this.j[a].value : b
        }, lia: function () {
            return this.bc.next.value
        }, mia: function () {
            return this.bc.ob.value
        }, shift: function () {
            return this.WO(this.bc.next)
        }, TQ: function () {
            this.Zx.length = 0
        }, uT: function (a) {
            this.Zx.push(a)
        }, push: function (a) {
            a = new f.ne.ho("", a);
            0 === this.count ? (this.bc.ob = null, a.ob = this.bc, this.bc.next =
                a) : (this.wu.next = a, a.ob = this.wu);
            this.count += 1;
            this.wu = a
        }, AB: function (a) {
            a = new f.ne.ho("", a);
            0 === this.count ? (this.bc.ob = null, a.ob = this.bc, this.wu = this.bc.next = a) : (this.bc.next.ob = a, a.next = this.bc.next, a.ob = this.bc, this.bc.next = a);
            this.count += 1
        }, paa: function () {
            if (this.count) {
                this.count -= 1;
                var a = this.bc.next;
                a.next ? (a.next.ob = this.bc, this.bc.next = a.next) : (this.bc.next = null, this.wu = this.bc.ob = null);
                a.next = null;
                a.ob = null;
                return a.value
            }
            return null
        }, pop: function () {
            return this.WO(this.bc.ob)
        }, uM: function (a) {
            if (Object.prototype.hasOwnProperty.call(this.j,
                a)) return a = this.j[a], this.ex && (a.remove(), this.oN(a)), a
        }, oN: function (a) {
            this.ex ? (a.next = this.bc.next, a.ob = this.bc, this.bc.next = a, a.next.ob = a) : (a.ob = this.bc.ob, a.next = this.bc, this.bc.ob = a, a.ob.next = a);
            this.wm && this.h5(this.wm)
        }, h5: function () {
            var a = this;
            a.zu || (a.zu = setTimeout(function () {
                a.zu = null;
                a.TP(a.wm)
            }, 0))
        }, TP: function (a) {
            this.zu && (clearTimeout(this.zu), this.zu = null);
            for (var b = this.ex ? this.bc.ob : this.bc.next, c = {}, d = 0, e = this.Zx.length; d < e; d++) c[this.Zx[d]] = !0;
            for (; b && this.count > a && (d = this.ex ?
                b.ob : b.next, b.key && !c[b.key] && (this.lu(b), this.fI(b.value)), b = d, b !== this.bc && b !== this.wu);) ;
        }, lu: function (a) {
            a.remove();
            delete this.j[a.key];
            this.count -= 1
        }, WO: function (a) {
            this.bc !== a && this.lu(a);
            return a.value
        }, clear: function () {
            this.j = {};
            this.bc = new f.ne.ho("", null);
            this.bc.ob = this.bc.next = this.bc;
            this.count = 0
        }
    });
    f.ne.ho = function (a, b) {
        this.key = a;
        this.value = b
    };
    f.ne.ho.prototype.ob = null;
    f.ne.ho.prototype.next = null;
    f.ne.ho.prototype.remove = function () {
        this.ob.next = this.next;
        this.next.ob = this.ob;
        this.next = this.ob = null
    };

    function Ac(a, b, c) {
        this.url = a;
        this.Vc = b;
        this.DG = c;
        this.tj = this.RA = !1
    }

    function Bc(a, b, c) {
        var d = Cc;
        return function () {
            return d.call(this, a, b, c)
        }
    }

    function Cc(a, b, c) {
        a.Jga = +new Date;
        a.loaded = b;
        clearTimeout(a.yda);
        var d = a.R$;
        d.Pj.remove(a.url) && d.j1();
        d = a.x$ ? a.Oa : a.ta;
        a.Oa = null;
        (c || b || a.DG) && a.Vc(b ? d : null, a);
        a.hT ? (a.hT.uj(), a.hT = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.ta = null)
    }

    f.Sw = f.Z.extend({
        ofa: "assets/image/blank.gif", C: function (a, b, c) {
            this.timeout = b || 15E3;
            this.Vl = new f.ne(1024);
            this.Pj = new f.ne(1024);
            this.$Q = a;
            this.qG = c
        }, GC: function (a) {
            a && this.Pj.count >= this.$Q && (a = this.Pj.bc.ob.value, a.tj && (this.Pj.remove(a.url), this.lL(a)));
            for (; this.Vl.count && !(this.Pj.count >= this.$Q);) this.$Z(this.Vl.shift())
        }, j1: function () {
            if (!this.PL) {
                this.PL = !0;
                var a = this;
                setTimeout(function () {
                    a.PL = !1;
                    a.GC()
                }, 0)
            }
        }, $Z: function (a) {
            var b = document.createElement("img");
            a.V8 && (b.crossOrigin = "anonymous");
            b.src = a.url;
            a.ta = b;
            a.R$ = this;
            a.startTime = +new Date;
            a.RA = !0;
            b.complete ? Cc(a, !0) : (this.Pj.set(a.url, a), b.onload = Bc(a, !0), b.onerror = Bc(a, !1, !0), b.onabort = Bc(a, !1), a.yda = setTimeout(Bc(a, !1, !0), this.timeout))
        }, lL: function (a) {
            a.RA && (Cc(a, !1), a.tj = !0, a.Wfa = !0)
        }, Nha: function (a, b, c) {
            return this.jA(a.url, b, c, !0, a.ha.z + "_" + a.ha.x + "_" + a.ha.y)
        }, jA: function (a, b, c, d, e) {
            var g = this.Pj.get(a);
            if (g && g.tj) g.tj = !1, g.Vc = b, g.DG = c; else {
                g = new Ac(a, b, c);
                g.x$ = d;
                g.key = e;
                if (this.Vl.get(f.a.Fb(g))) return;
                this.Vl.set(f.a.Fb(g),
                    g);
                this.GC(!0)
            }
            return g
        }, L$: function (a, b, c) {
            var d = this.Pj.get(a);
            if (d && d.tj) d.tj = !1, d.Vc = b, d.DG = c; else {
                d = new Ac(a, b, c);
                d.V8 = !0;
                if (this.Vl.get(f.a.Fb(d))) return;
                this.Vl.set(f.a.Fb(d), d);
                this.GC(!0)
            }
            return d
        }, MQ: function (a) {
            a.tj || (a.tj = !0, this.Vl.remove(f.a.Fb(a)))
        }, clear: function (a) {
            this.Vl.forEach(function (a) {
                a.tj = !0
            });
            this.Vl.clear();
            if (a) for (; 0 < this.Pj.length;) a = this.Pj.pop(), this.lL(a); else this.Pj.forEach(function (a) {
                a.tj = !0
            })
        }
    });

    function Dc(a, b, c) {
        this.z = a;
        this.x = b;
        this.y = c
    }

    Dc.prototype.Db = function () {
        return new Dc(this.z, this.x, this.y)
    };
    Dc.prototype.toString = function () {
        return [this.z, this.x, this.y].join("/")
    };
    f.Za = function (a) {
        this.ha = a;
        this.key = a.toString()
    };
    f.ei = Dc;
    f.B.Za = f.B.kc.extend({
        C: function (a, b, c, d, e) {
            arguments.callee.ma.apply(this, arguments);
            this.X("tileSize", a);
            this.X("tiles", a);
            this.Ud(["zooms", "type", "detectRetina", "errorUrl"], a);
            this.X("lang", b, !0);
            this.X("mapStyle", b, !0);
            this.X("style", b, !0);
            this.X("features", b, !0);
            var g = "overlayer" === a.get("type") || !1 === a.get("blend");
            this.hi = !g && !f.l.Y;
            if (f.l.Ld || f.l.Nja) this.hi = !1;
            var h = b.get("size"), h = h.width * h.height / 65536;
            this.ga = f.l.Y && f.l.ga && this.get("detectRetina");
            f.l.md && f.l.Y && 9 < h && (this.hi = !1);
            this.bh =
                !g;
            this.dh = !g;
            this.aW = c;
            this.X("reload", a);
            a.u$ ? this.X("createTile", a) : this.X("tileFun", a);
            this.Yd = d;
            this.GS = e
        }, langChanged: function () {
            this.set("reload");
            this.oa.Nn()
        }, mapStyleChanged: function () {
            this.set("reload");
            this.oa.Nn()
        }, styleChanged: function () {
            this.j.Ub || (this.set("reload"), this.oa.Nn())
        }, featuresChanged: function () {
            this.set("reload");
            this.oa.Nn()
        }, reloadChanged: function () {
            this.set("display", 0)
        }, tileFunChanged: function () {
            var a = this.aW || this.get("tileFun");
            this.ur = function (b, c, d) {
                var e = a(b.ha.x,
                    b.ha.y, b.ha.z);
                if (!b.vn || b.vn.tj) b.loaded = !1, b.vn = ("3D" === this.j.K.view.type ? f.Fi.L$ : f.Fi.jA).call(f.Fi, e, function (a) {
                    b.vn = null;
                    a ? c(a) : d()
                }, !1)
            }
        }, createTileChanged: function () {
            var a = this.oa.getCreateTile();
            this.ur = function (b, c, d) {
                a.call(this.q.oa, b.ha.x, b.ha.y, b.ha.z, c, d)
            };
            this.set("reload")
        }, Cl: function () {
            return {
                Kc: this.get("tileSize"),
                visible: this.get("visible"),
                G: this.JG(),
                $c: this.get("zooms"),
                ez: this.hi,
                bh: this.bh,
                dh: this.dh,
                opacity: this.get("opacity"),
                ur: this.oa.get("createTile"),
                Ai: this.aW ||
                    this.get("tileFun"),
                md: this.oa.Gn ? !1 : this.get("detectRetina") && f.l.ga && f.l.Y
            }
        }, zj: function (a) {
            if (f.R.kd.xh) return new f.R.kd.xh(this, a)
        }
    });
    f.Fi = new f.Sw(6, null);
    f.B.lc = f.B.kc.extend({
        C: function (a, b) {
            this.hb = Math.min(2, window.devicePixelRatio || 1);
            this.md = f.l.ga && !a.Ng;
            this.map = b;
            this.bm = 0;
            this.Ej = !1;
            this.we = this.ae = 0;
            this.Ue = [];
            arguments.callee.ma.apply(this, arguments);
            this.Ep = [];
            this.Df = new f.B.vK;
            a && (this.X("style", a), this.X("cursor", a, !0), this.eda = a.get("stable") || !1, this.X("dataSources", a), this.X("bubble", a));
            this.X("display", b);
            this.GY()
        }, Cl: function () {
            return {
                visible: this.get("visible"),
                $c: this.get("zooms"),
                opacity: this.get("opacity"),
                zIndex: this.get("zIndex"),
                Iu: this.oa.get("alwaysRender") || !1
            }
        }, dataSourcesChanged: function () {
            var a = this.get("dataSources");
            a && a.length ? "string" === typeof a ? (new f.Ka.Xa(a)).h("complete", function (a) {
                this.iU(a.data);
                this.Wm = a.data;
                this.Ej = !0;
                this.set("display");
                this.Aa = !0;
                this.oa.r("complete")
            }, this) : a.length && (this.iU(a), this.Wm = a, this.Ej = !0, this.set("display"), this.Aa = !0, this.oa.r("complete")) : this.clear()
        }, getDatas: function () {
            return this.Wm
        }, fea: function () {
            if (this.oa.Ng) {
                var a = this.Ni;
                this.ae = a.ae;
                this.we = a.we
            }
        }, da: function (a,
                         b) {
            var c = {type: a, data: "mouseout" === a ? this.i1 || null : b.Ho.Qa, target: this.oa};
            this.i1 = "mouseout" === a ? null : b.Ho.Qa;
            this.oa.r(a, c)
        }, Pb: function (a) {
            this.da(a.type, a)
        }, GY: function () {
            this.h("click", this.Pb);
            this.h("dblclick", this.Pb);
            this.h("mousedown", this.Pb);
            this.h("mouseup", this.Pb);
            this.h("mouseover", this.Pb);
            this.h("mouseout", this.Pb);
            this.h("touchstart", this.Pb);
            this.h("touchend", this.Pb)
        }, Tfa: function () {
            this.H("click", this.Pb);
            this.H("dblclick", this.Pb);
            this.H("mousedown", this.Pb);
            this.H("mouseup",
                this.Pb);
            this.H("mouseover", this.Pb);
            this.H("mouseout", this.Pb);
            this.H("touchstart", this.Pb);
            this.H("touchend", this.Pb)
        }, styleChanged: function () {
            this.Ni = this.get("style");
            this.fea();
            this.set("display", 0)
        }, iU: function (a) {
            if (a) {
                this.clear();
                for (var b = 0; b < a.length; b += 1) {
                    var c = a[b].lnglat;
                    a[b].lnglat = f.a.ra(c);
                    c = this.map.Qb(c);
                    c = new f.of({name: "point-" + f.a.Fb(this), Ba: new f.ka.Ze([c.x, c.y], !0)});
                    c.Fm = this;
                    c.Qa = a[b];
                    this.Ty(c)
                }
            }
        }, dS: function (a) {
            if ("geojson" === a) return new f.bX({map: this.map});
            if ("topjson" ===
                a) return new f.ffa({map: this.map});
            if ("subway" === a) return new f.dfa({map: this.map})
        }, iba: function (a) {
            if (a) {
                var b = [], b = [], c = {};
                if (a.rules) {
                    for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
                        for (var g = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (g[k] = new f.style.Je.wK(h[k].fill)), h[k].stroke && (g[k] = new f.style.Je.SK(h[k].stroke));
                        h = g;
                        b[d].mB = h;
                        b[d] = new f.style.DX(b[d])
                    }
                    c.rules = b
                }
                if (a.symbolizers) {
                    b = a.symbolizers;
                    a = 0;
                    for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new f.style.Je.wK(b[a].fill)), b[a].stroke &&
                    (b[a] = new f.style.Je.SK(b[a].stroke));
                    c.mB = b
                }
                a = new f.eC(c)
            } else a = new f.eC({});
            this.set("style", a);
            return a
        }, Rfa: function (a, b) {
            if (-1 === f.a.indexOf(a, f.w.eb)) {
                var c = new f.Ka.Xa(a);
                c.h("complete", function (c) {
                    c = this.Oa[a] = this.dS(b).JA(c);
                    this.Ko(c);
                    this.da("complete")
                }, this);
                c.h("error", this.Ab, this)
            } else (new f.Ka.XMLHttpRequest(a)).h("complete", function (c) {
                c = eval("(" + c.data + ")");
                c = this.Oa[a] = this.dS(b).JA(c);
                this.Ko(c)
            }, this)
        }, Fba: function (a) {
            "px" === a.target.get("unit") ? (this.ae = Math.max(a.Sg, this.ae),
                this.we = Math.max(a.Sg, this.we)) : a.Sg > this.Dn && (this.Dn = a.Sg, this.as = this.Dn / this.map.get("resolution", 20))
        }, Ty: function (a) {
            this.Df.add(a);
            if (!this.Vu && !this.oa.Ng) {
                if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
                    a.h("rad", this.Fba, this);
                    var b = a.get("radius");
                    b.length && (b = Math.max.apply(null, b));
                    "px" === a.get("unit") ? (this.ae = Math.max(b, this.ae), this.we = Math.max(b, this.we)) : this.Dn ? b > this.Dn && (this.Dn = b, this.as = this.Dn / this.map.get("resolution", 20)) : (this.Dn = b, this.as = this.Dn / this.map.get("resolution",
                        20))
                }
                b = a.get("strokeWeight") || 0;
                if (!this.bs || b > this.bs) this.bs = b
            }
            this.eda || a.X("feature", this, !0)
        }, Ko: function (a) {
            this.Ej = !0;
            for (var b = 0, c = a.length; b < c; b += 1) this.Ty(a[b])
        }, clear: function () {
            this.Ej = !0;
            this.Wm = [];
            this.Df.clear();
            this.set("display", 0)
        }, kh: function (a) {
            var b;
            return 0 > a[0] ? (b = [a[0] + f.a.Ya, a[1], f.a.Ya, a[3]], a = [0, a[1], a[2], a[3]], b = this.Df.kh(b), a = this.Df.kh(a), f.extend(b, a)) : a[2] > f.a.Ya ? (b = [a[0], a[1], f.a.Ya, a[3]], a = [0, a[1], a[2] - f.a.Ya, a[3]], b = this.Df.kh(b), a = this.Df.kh(a), f.extend(b, a)) :
                this.Df.kh(a)
        }, bha: function (a) {
            var b, c = this.get("style"), d = a.ai;
            c instanceof f.eC || (c = this.iba(c));
            if (d && 0 < d.length) b = c.fR(d, a); else {
                if (c.jV.length || c.ai.length) b = c.J7(a);
                b || (b = a.o9())
            }
            return b
        }, dH: function (a) {
            function b(a, b) {
                return a.rk - b.rk
            }

            var c = [], d, e, g, h, k, l = {};
            for (d in a) if (a.hasOwnProperty(d)) {
                g = a[d];
                h = g.get("zIndex");
                for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
                "undefined" === typeof l[h] && (c.push([[], [], h]), l[h] = c.length - 1);
                h = c[l[h]];
                h[0].push(g)
            }
            c.sort(this.$ca);
            a = 0;
            for (d =
                     c.length; a < d; a += 1) c[a][0].sort(b);
            return c
        }, featureChanged: function (a) {
            this.Ej = !0;
            var b = a.target, c = b.Ba;
            0 !== this.Df.t9([f.a.Fb(b)]).length && (this.Df.remove(b, a.Gp), c && !a.Y7 && this.Df.add(b))
        }, IU: function (a) {
            this.Ej = !0;
            for (var b, c = 0, d = a.length; c < d; c += 1) b = a[c], b.Ba.Gp = null, b.bn(!0), b.ci("feature")
        }, hja: function (a, b) {
            return a[1].zIndex === b[1].zIndex ? f.a.Fb(a[1]) - f.a.Fb(b[1]) : a[1].zIndex - b[1].zIndex
        }, $ca: function (a, b) {
            return a[2] - b[2]
        }, $ia: function (a) {
            return a.fha() === f.B.ifa.bfa
        }, zj: function (a) {
            return this.Vu ?
                new f.R.td.fi(this, a) : "c" === this.map.get("overlayRender") && f.R.canvas.fi ? new f.R.canvas.fi(this, a) : f.R.kd.fi && "d" === this.map.get("overlayRender") ? new f.R.kd.fi(this, a) : null
        }
    });
    f.B.lc.gb({
        sl: function (a) {
            return this.Vu ? new f.Ma.td.fi(this, a) : this.oa.Ng ? new f.Ma.rX(this, a) : new f.Ma.fi(this, a)
        }
    });
    f.B.vK = f.Z.extend({
        C: function () {
            this.clear()
        }, clear: function () {
            this.El = [];
            this.KI = new f.Wg
        }, add: function (a) {
            var b = f.a.Fb(a), c = a.Ba;
            this.El[b] || (this.count += 1, this.El[b] = a, c && !f.G.yb(c.Hc(), [Infinity, Infinity, -Infinity, -Infinity]) && this.KI.vv(c.Hc(), a))
        }, Wga: function () {
            return this.El
        }, kh: function (a) {
            return this.KI.wca(a)
        }, t9: function (a) {
            var b = a.length, c = [], d;
            for (d = 0; d < b; d += 1) this.El[a[d]] && c.push(this.El[a[d]]);
            return c
        }, remove: function (a, b) {
            var c = f.a.Fb(a).toString(), d = a.Ba;
            this.El[c] && (this.El[c] =
                null, d && (c = "undefined" !== typeof b ? b : d.Hc(), this.KI.remove(c, a)))
        }
    });
    f.Wg = f.Z.extend({
        C: function (a) {
            this.zT = "undefined" !== typeof a ? a : 6;
            this.pA = Math.floor(this.zT / 2);
            this.jw = {G: [Infinity, Infinity, -Infinity, -Infinity], ib: []};
            this.count = 0
        }, b7: function (a, b) {
            var c = -1, d = [], e;
            d.push(b);
            var g = b.ib;
            do {
                -1 !== c && (d.push(g[c]), g = g[c].ib, c = -1);
                for (var h = g.length - 1; 0 <= h; h -= 1) {
                    var k = g[h];
                    if ("undefined" !== typeof k.Bp) {
                        c = -1;
                        break
                    }
                    var l = f.Wg.Cs(k.G[2] - k.G[0], k.G[3] - k.G[1], k.ib.length + 1),
                        k = f.Wg.Cs((k.G[2] > a.G[2] ? k.G[2] : a.G[2]) - (k.G[0] < a.G[0] ? k.G[0] : a.G[0]), (k.G[3] > a.G[3] ? k.G[3] : a.G[3]) -
                            (k.G[1] < a.G[1] ? k.G[1] : a.G[1]), k.ib.length + 2);
                    if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
                }
            } while (-1 !== c);
            return d
        }, vv: function (a, b, c) {
            a = {G: a, Bp: b};
            "undefined" !== typeof c && (a.type = c);
            this.OS(a, this.jw);
            this.count += 1
        }, OS: function (a, b) {
            var c;
            if (0 === b.ib.length) b.G = f.G.Db(a.G), b.ib.push(a); else {
                var d = this.b7(a, b), e = a;
                do {
                    if (c && "undefined" !== typeof c.ib && 0 === c.ib.length) {
                        var g = c;
                        c = d.pop();
                        for (var h = 0, k = c.ib.length; h < k; h += 1) if (c.ib[h] === g || 0 === c.ib[h].ib.length) {
                            c.ib.splice(h, 1);
                            break
                        }
                    } else c = d.pop();
                    g = e instanceof
                        Array;
                    if ("undefined" !== typeof e.Bp || "undefined" !== typeof e.ib || g) {
                        if (g) {
                            g = 0;
                            for (h = e.length; g < h; g += 1) f.G.extend(c.G, e[g].G);
                            c.ib = c.ib.concat(e)
                        } else f.G.extend(c.G, e.G), c.ib.push(e);
                        c.ib.length <= this.zT ? e = {G: f.G.Db(c.G)} : (e = g = this.H$(c.ib), 1 > d.length && (c.ib.push(g[0]), d.push(c), e = g[1]))
                    } else f.G.extend(c.G, e.G), e = {G: f.G.Db(c.G)}
                } while (0 < d.length)
            }
        }, H$: function (a) {
            for (var b = this.lba(a); 0 < a.length;) this.mba(a, b[0], b[1]);
            return b
        }, lba: function (a) {
            for (var b = a.length - 1, c = 0, d = a.length - 1, e = 0, g = a.length - 2; 0 <=
            g; g -= 1) {
                var h = a[g];
                h.G[0] > a[c].G[0] ? c = g : h.G[2] < a[b].G[1] && (b = g);
                h.G[1] > a[e].G[1] ? e = g : h.G[3] < a[d].G[3] && (d = g)
            }
            Math.abs(a[b].G[2] - a[c].G[0]) > Math.abs(a[d].G[3] - a[e].G[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
            return [{G: f.G.Db(b.G), ib: [b]}, {G: f.G.Db(c.G), ib: [c]}]
        }, mba: function (a, b, c) {
            for (var d = f.Wg.Cs(b.G[2] - b.G[0], b.G[3] - b.G[1], b.ib.length + 1), e = f.Wg.Cs(c.G[2] - c.G[0], c.G[3] -
                c.G[1], c.ib.length + 1), g, h, k, l = a.length - 1; 0 <= l; l -= 1) {
                var m = a[l],
                    n = [b.G[0] < m.G[0] ? b.G[0] : m.G[0], b.G[2] > m.G[2] ? b.G[2] : m.G[2], b.G[1] < m.G[1] ? b.G[1] : m.G[1], b.G[3] > m.G[3] ? b.G[3] : m.G[3]],
                    n = Math.abs(f.Wg.Cs(n[1] - n[0], n[3] - n[2], b.ib.length + 2) - d),
                    m = [c.G[0] < m.G[0] ? c.G[0] : m.G[0], c.G[2] > m.G[2] ? c.G[2] : m.G[2], c.G[1] < m.G[1] ? c.G[1] : m.G[1], c.G[3] > m.G[3] ? c.G[3] : m.G[3]],
                    m = Math.abs(f.Wg.Cs(m[1] - m[0], m[3] - m[2], c.ib.length + 2) - e), p = Math.abs(m - n);
                if (!h || !g || p < g) h = l, g = p, k = m < n ? c : b
            }
            d = a.splice(h, 1)[0];
            b.ib.length + a.length + 1 <=
            this.pA ? (b.ib.push(d), f.G.extend(b.G, d.G)) : c.ib.length + a.length + 1 <= this.pA ? (c.ib.push(d), f.G.extend(c.G, d.G)) : (k.ib.push(d), f.G.extend(k.G, d.G))
        }, remove: function (a, b) {
            var c = [];
            c[0] = {G: a};
            (c[1] = b) || (c[1] = !1);
            c[2] = this.jw;
            this.count -= 1;
            if (!1 === c[1]) {
                var d = 0, e = [];
                do d = e.length, e = e.concat(this.LU.apply(this, c)); while (d !== e.length);
                return e
            }
            return this.LU.apply(this, c)
        }, LU: function (a, b, c) {
            var d = [], e = [], g = [];
            if (!a || !f.G.Qe(a.G, c.G)) return g;
            a = f.G.Db(a.G);
            var h;
            e.push(c.ib.length);
            d.push(c);
            do {
                c = d.pop();
                var k = e.pop() - 1;
                if ("undefined" !== typeof b) for (; 0 <= k;) {
                    var l = c.ib[k];
                    if (f.G.Qe(a, l.G)) if (b && "undefined" !== typeof l.Bp && l.Bp === b || !b && ("undefined" !== typeof l.Bp || f.G.aR(a, l.G))) {
                        "undefined" !== typeof l.ib ? (g = this.ys(l, !0, [], l), c.ib.splice(k, 1)) : g = c.ib.splice(k, 1);
                        f.Wg.NI(c);
                        b = void 0;
                        c.ib.length < this.pA && (h = this.ys(c, !0, [], c));
                        break
                    } else "undefined" !== typeof l.ib && (e.push(k), d.push(c), c = l, k = l.ib.length);
                    k -= 1
                } else if ("undefined" !== typeof h) {
                    c.ib.splice(k + 1, 1);
                    0 < c.ib.length && f.Wg.NI(c);
                    k = 0;
                    for (l = h.length; k <
                    l; k += 1) this.OS(h[k], c);
                    h.length = 0;
                    0 === d.length && 1 >= c.ib.length ? (h = this.ys(c, !0, h, c), c.ib.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.ib.length < this.pA ? (h = this.ys(c, !0, h, c), c.ib.length = 0) : h = void 0
                } else f.Wg.NI(c)
            } while (0 < d.length);
            return g
        }, search: function (a, b) {
            return this.ys({G: a}, !1, [], this.jw, b)
        }, wca: function (a, b) {
            return this.ys({G: a}, !1, [], this.jw, b, !0)
        }, ys: function (a, b, c, d, e, g) {
            var h = {}, k = [];
            if (!f.G.Qe(a.G, d.G)) return c;
            k.push(d.ib);
            do {
                d = k.pop();
                for (var l = d.length - 1; 0 <= l; l -= 1) {
                    var m = d[l];
                    if (f.G.Qe(a.G,
                        m.G)) if ("undefined" !== typeof m.ib) k.push(m.ib); else if ("undefined" !== typeof m.Bp) if (b) c.push(m); else if ("undefined" === typeof e || m.type === e) m = m.Bp, "undefined" !== typeof g ? h[f.a.Fb(m)] = m : c.push(m)
                }
            } while (0 < k.length);
            return "undefined" !== typeof g ? h : c
        }
    });
    f.Wg.NI = function (a) {
        var b = a.ib.length, c = a.G;
        if (0 === b) f.G.empty(c); else {
            var d = a.ib[0].G;
            c[0] = d[0];
            c[2] = d[2];
            c[1] = d[1];
            c[3] = d[3];
            for (d = 1; d < b; d += 1) f.G.extend(c, a.ib[d].G)
        }
    };
    f.Wg.Cs = function (a, b, c) {
        var d = (a + b) / 2;
        a *= b;
        return a * c / (a / (d * d))
    };
    f.D = f.D || {};
    f.D.Sf = f.Z.extend({
        ea: [f.ja, f.de], Xaa: ["position", "visible", "clickable", "bubble"], C: function (a, b) {
            this.map = b;
            this.Ud(this.Xaa, a);
            this.X("zIndex", a);
            this.X("draggable", a);
            f.l.ke && this.NY();
            f.l.Y || this.AC();
            this.Qc = a;
            this.Qc.D = this
        }, draggableChanged: function () {
            this.get("draggable") ? this.zC() : this.hE()
        }, da: function (a, b) {
            var c;
            c = b ? {type: a, pixel: b.ub, target: this.Qc, lnglat: b.De} : {type: a};
            this.Qc && this.Qc.r(a, c)
        }, Pb: function (a) {
            ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type && "longclick" !== a.type ||
                this.get("clickable")) && this.da(a.type, a)
        }, yC: function () {
            this.h("click", this.Pb);
            this.h("rightclick", this.Pb);
            this.h("longclick", this.Pb);
            this.h("longpress", this.Pb);
            this.h("dblclick", this.Pb)
        }, VP: function () {
            this.H("click", this.Pb);
            this.H("rightclick", this.Pb);
            this.H("longclick", this.Pb);
            this.H("longpress", this.Pb);
            this.H("dblclick", this.Pb)
        }, AC: function () {
            this.get("clickable") && this.yC();
            this.h("mousemove", this.Pb);
            this.h("mouseout", this.Pb);
            this.h("mouseover", this.Pb);
            this.h("mousedown", this.Pb);
            this.h("mouseup", this.Pb)
        }, Ufa: function () {
            this.VP();
            this.H("mousemove", this.Pb);
            this.H("mouseout", this.Pb);
            this.H("mouseover", this.Pb);
            this.H("mousedown", this.Pb);
            this.H("mouseup", this.Pb)
        }, clickableChanged: function () {
            this.get("clickable") ? this.yC() : this.VP()
        }, NY: function () {
            this.get("clickable") && this.yC();
            this.h("touchstart", this.Pb, this);
            this.h("touchmove", this.Pb, this);
            this.h("touchend", this.Pb, this)
        }, zC: function () {
            this.h("dragstart", this.Ao);
            this.h("dragging", this.yo);
            this.h("dragend", this.zo)
        },
        Ao: function (a) {
            this.map.PH(a);
            this.Re = a.ub;
            this.kT = a.wd;
            this.jT = a.De;
            this.da("dragstart", a)
        }, yo: function (a) {
            var b = this.map.K.view.type;
            if ("2D" == b) {
                var c = a.ub.Sa(this.Re), b = c.x, c = c.y;
                this.Re = a.ub;
                var d = this.map.get("rotation") * Math.PI / 180, e = b * Math.cos(d) + Math.sin(d) * c,
                    b = -Math.sin(d) * b + Math.cos(d) * c;
                this.En(new f.I(e, b));
                this.da("dragging", a)
            } else "3D" == b && a.wd && (c = a.ub.Sa(this.Re), b = c.x, c = c.y, e = a.wd.Sa(this.kT), a.De.Sa(this.jT), this.Re = a.ub, "function" === typeof this.Lv && this.Lv(b, c, e), this.kT = a.wd, this.jT =
                a.De, this.da("dragging", a))
        }, zo: function (a) {
            this.map.cq();
            this.da("dragend", a)
        }, hE: function () {
            this.H("dragstart", this.Ao);
            this.H("dragging", this.yo);
            this.H("dragend", this.zo)
        }, kD: function (a) {
            var b, c, d = [];
            if (a) for (b = 0, c = a.length; b < c; b += 1) d.push(this.lD(a[b]));
            return d
        }, lD: function (a) {
            a = this.map.Qb(a);
            return [a.x, a.y]
        }, ue: function (a) {
            var b = this.L.$a || this.map.get("centerCoords"), c = Math.pow(2, 20 - this.map.get("zoom"));
            return [(a[0] - b.x) / c, (a[1] - b.y) / c]
        }
    });
    f.D.fb = f.D.Sf.extend({
        wI: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect".split(" "),
        m6: {
            AMAP_ANIMATION_NONE: !1,
            AMAP_ANIMATION_DROP: f.wh.Easing.Bounce,
            AMAP_ANIMATION_BOUNCE: f.wh.Easing.Cubic
        },
        C: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Ud(this.wI, a);
            this.X("move", a);
            this.N6();
            this.No();
            this.set("AnimationOffset", new f.I(0, 0), !0);
            this.X("raiseOnDrag", a);
            this.X("animation", a)
        },
        DD: function (a, b, c) {
            if (this.get("animation") && "AMAP_ANIMATION_NONE" !== this.get("animation")) {
                var d = this;
                this.Lj = new f.wh;
                this.Lj.transition = function (c, g, h) {
                    if ("AMAP_ANIMATION_NONE" === d.get("animation")) return 0;
                    if (a && 600 <= h) return d.Lj.stop(), 0;
                    c = 0 === Math.floor(h / 600) % 2 ? "Out" : "In";
                    "out" === b ? c = "Out" : "in" === b && (c = "In");
                    return d.m6[d.get("animation")][c](h % 600 / 600)
                };
                c = c || 40;
                this.Lj.Ql = function (a) {
                    d.set("AnimationOffset", d.jE.add(new f.I(0, -1 * c * a)))
                };
                this.jE = new f.I(0, 0);
                this.Lj.Qj()
            }
        },
        AnimationOffsetChanged: function () {
            this.positionChanged()
        },
        dP: function () {
            this.Lj && (this.Lj.stop(), this.set("AnimationOffset", this.jE));
            this.set("AnimationOffset", new f.I(0, -40));
            if (this.Us) this.Us.set("position", this.get("position")); else {
                var a = new v.D.fb({
                    zIndex: this.get("zIndex") - 1,
                    icon: new v.D.Ye({image: f.w.eb + "/theme/v1.3/dragCross.png", size: new f.tc(14, 11)}),
                    offset: new f.I(-4, -5),
                    position: this.get("position")
                });
                a.qa = !0;
                this.Us = a
            }
            this.Us.setMap(this.map.K)
        },
        lM: function () {
            this.set("animation", "AMAP_ANIMATION_DROP", !0);
            this.DD(!0, "in");
            this.Us.setMap(null)
        },
        animationChanged: function () {
            this.Lj && (this.Lj.stop(), this.set("AnimationOffset", this.jE), this.Lj = null);
            var a = this.get("animation");
            a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.DD(!0, "in", 100) : this.DD())
        },
        vg: function () {
            this.Us && this.Us.set("position", this.get("position"))
        },
        raiseOnDragChanged: function () {
            this.get("raiseOnDrag") ? (this.h("dragstart", this.dP, this), this.h("dragging", this.vg, this), this.h("dragend", this.lM, this)) : (this.H("dragstart", this.dP, this), this.H("dragging", this.vg,
                this), this.H("dragend", this.lM, this))
        },
        En: function (a) {
            var b = this.get("position");
            a = this.map.Qb(b).add(a.ed(Math.pow(2, 20 - this.map.get("zoom"))));
            b instanceof f.W ? this.set("position", this.map.Fd(a)) : this.set("position", a)
        },
        Lv: function (a, b) {
            var c = this.get("position"), c = this.map.Il(c), c = this.map.Tm(new f.I(c.x + a, c.y + b));
            this.set("position", c)
        },
        N6: function () {
            var a = this.get("content"), b = this.get("shadow"), c = this.get("offset"), d = this.get("label"),
                a = a ? this.AQ(a, c) : this.CF(this.get("icon"), c);
            this.set("contentDom",
                a, !0);
            b && (b = this.FQ(b, c), this.set("shadowDom", b, !0));
            d && d.content && this.set("labelDom", this.CQ(d.content), !0)
        },
        CQ: function (a) {
            var b = document.createElement("div");
            b.className = "amap-marker-label";
            b.innerHTML = a;
            return b
        },
        No: function () {
            var a = this.get("position");
            if (this.map && a && !this.L) {
                var b = this.map, a = this.map.Qb(a),
                    a = this.L = new f.of({name: "marker-" + f.a.Fb(this), map: b, Ba: new f.ka.Ze([a.x, a.y])});
                a.Fm = this;
                this.X("coords", a, !0);
                a.Ud("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "),
                    this)
            }
        },
        getParams: function () {
            return {
                zIndex: this.get("zIndex"),
                Xy: this.get("angle"),
                fg: this.get("contentDom"),
                iT: this.get("labelDom"),
                AV: this.get("shadowDom"),
                opacity: this.get("opacity"),
                title: this.get("title"),
                label: this.get("label"),
                kK: this.get("AnimationOffset"),
                verticalAlign: this.get("verticalAlign"),
                textAlign: this.get("textAlign"),
                offset: this.get("offset"),
                eT: this.get("isTop"),
                shape: this.get("shape"),
                visible: this.get("visible")
            }
        },
        offsetChanged: function () {
            if (this.L && this.L.aa) {
                var a = this.map.K.view.type;
                "2D" == a ? (a = this.map.Qb(this.get("position")), a = a.Sa(this.L.la).cc(Math.pow(2, 20 - this.map.get("zoom"))), this.L.aa && (this.L.aa.eu && this.L.aa.parentNode !== this.L.aa.eu ? this.map.set("display") : (this.L.aa.style.left = Math.round(a.x) + this.get("offset").x + this.get("AnimationOffset").x + "px", this.L.aa.style.top = Math.round(a.y) + this.get("offset").y + this.get("AnimationOffset").y + "px"))) : "3D" == a && (a = this.get("position"), a = this.map.Il(a), this.L.aa && (this.L.aa.eu && this.L.aa.parentNode !== this.L.aa.eu ? this.map.set("display") :
                    (this.L.aa.style.left = Math.round(a.x) + this.get("offset").x + this.get("AnimationOffset").x + "px", this.L.aa.style.top = Math.round(a.y) + this.get("offset").y + this.get("AnimationOffset").y + "px")))
            } else this.map.set("display")
        },
        positionChanged: function () {
            if (this.L) {
                var a = this.map.Qb(this.get("position"));
                this.set("coords", [a.x, a.y]);
                this.map && (this.L.yX = !0, this.offsetChanged())
            }
        },
        textAlignChanged: function () {
            this.rL()
        },
        verticalAlignChanged: function () {
            this.rL()
        },
        rL: function () {
            this.L && (this.L.gg = !0, this.map &&
            (this.map.Ic.Dj = !0, this.map.set("display")))
        },
        contentChanged: function () {
            if (this.L) {
                this.map.Ic.Dj = !0;
                -1 === f.a.indexOf(this.map.Ic.Ue, this.L) && this.map.Ic.Ue.push(this.L);
                this.L.aa && this.L.aa.removeChild(this.get("contentDom"));
                var a = this.get("content"), b = this.get("offset"), a = this.AQ(a, b);
                this.set("contentDom", a);
                this.L.aa && (f.l.Mg && f.a.iepngFix(a), this.L.aa.appendChild(a), this.L.fg = a);
                this.map && this.map.set("display")
            }
        },
        iconChanged: function () {
            if (this.L && this.L.aa && !this.get("content")) {
                this.map.Ic.Dj =
                    !0;
                -1 === f.a.indexOf(this.map.Ic.Ue, this.L) && this.map.Ic.Ue.push(this.L);
                this.L.aa && this.get("contentDom") && this.L.aa.removeChild(this.get("contentDom"));
                var a = this.get("icon"), b = this.get("offset"), a = this.CF(a, b);
                this.set("contentDom", a);
                this.L.aa ? (f.l.Mg && f.a.iepngFix(a), this.L.aa.appendChild(a), this.L.fg = a) : this.map && this.map.set("display")
            }
        },
        shadowChanged: function () {
            if (this.L && this.L.aa) {
                var a = this.get("shadowDom");
                this.L.aa && a && a.parentNode === this.L.aa && this.L.aa.removeChild(a);
                if (a = this.get("shadow")) {
                    var b =
                        this.get("offset"), a = this.FQ(a, b);
                    this.set("shadowDom", a);
                    this.L.aa && this.L.aa.appendChild(a)
                }
            }
        },
        titleChanged: function () {
            this.L && this.L.fg && "string" === typeof this.get("title") && this.L.fg && this.get("title") && (this.L.fg.title = this.get("title"))
        },
        labelChanged: function () {
            if (this.L && this.L.aa) {
                var a = this.get("label"), b = this.L.aa;
                if (b && a && a.hasOwnProperty("content")) {
                    this.get("labelDom") && b.removeChild(this.get("labelDom"));
                    var c = "";
                    if (a.content) {
                        var c = this.CQ(a.content), d = 0, e = 0;
                        a.offset && (d = a.offset.y +
                            "px", e = a.offset.x + "px");
                        c.style.top = d;
                        c.style.left = e;
                        b.appendChild(c)
                    }
                    this.set("labelDom", c)
                }
            }
        },
        isTopChanged: function () {
            var a = this.map.Ic.rB, b = this.get("isTop"), c = this.get("zIndex");
            a ? a === this ? this.L && this.L.aa && (this.L.aa.style.zIndex = b ? this.map.Ic.bm + 10 : c, this.map.Ic.rB = b ? this : null) : (a.L && a.L.aa && (a.L.aa.style.zIndex = b ? a.get("zIndex") : this.map.Ic.bm + 10), this.L && this.L.aa && (this.L.aa.style.zIndex = b ? this.map.Ic.bm + 10 : c), this.map.Ic.rB = b ? this : a) : (this.map.Ic.rB = this, this.L && this.L.aa && (this.L.aa.style.zIndex =
                b ? this.map.Ic.bm + 10 : c))
        },
        visibleChanged: function () {
            this.L && this.L.aa && (this.get("visible") ? this.L.aa.style.display = "block" : this.L.aa.style.display = "none")
        },
        angleChanged: function () {
            if (this.L && this.L.aa) {
                var a = {x: -1 * this.get("offset").x, y: -1 * this.get("offset").y};
                f.g.rotate(this.L.aa, this.get("angle") || 0, a)
            }
        },
        zIndexChanged: function () {
            var a = this.get("zIndex");
            if (a > this.map.Ic.bm) {
                this.map.Ic.bm = a;
                var b = this.map.Ic.rB;
                b && b.L && b.L.aa && (b.L.aa.style.zIndex = a + 10)
            }
            this.L && this.L.aa && (this.L.aa.style.zIndex =
                this.get("isTop") ? this.map.Ic.bm + 10 : this.get("zIndex"))
        },
        opacityChanged: function () {
            var a = this.get("contentDom"), b = this.get("shadowDom");
            a && f.g.Zl(a, this.get("opacity"));
            b && f.g.Zl(b, this.get("opacity"))
        },
        AQ: function (a) {
            var b;
            b = document.createElement("div");
            b.className = "amap-marker-content";
            "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
            f.g.Zl(b, this.get("opacity"));
            return b
        },
        CF: function (a) {
            var b, c = 0, d = 0, e, g, h, k;
            a ? ("string" ===
            typeof a ? (b = a, k = !0) : (b = a.get("image"), d = a.get("size"), e = a.get("imageSize"), c = d.width, d = d.height, e && (g = e.width, h = e.height)), c || (c = 0), d || (d = 0), a = "string" !== typeof a ? a.get("imageOffset") : {
                x: 0,
                y: 0
            }) : (b = f.w.lg + "/mark_bs.png", a = {x: 0, y: 0}, c = 19, d = 33, g = 19, h = 33);
            e = document.createElement("div");
            e.className = "amap-icon";
            e.style.position = "absolute";
            k && !f.l.Ld && (e.style.overflow = "inherit");
            c && (e.style.width = c + "px");
            d && (e.style.height = d + "px");
            c = document.createElement("img");
            c.src = b;
            g && h && (c.style.width = g + "px", c.style.height =
                h + "px");
            c.style.top = a.y + "px";
            c.style.left = a.x + "px";
            f.l.Ld && k || e.appendChild(c);
            f.g.Zl(f.l.Ld && k ? c : e, this.get("opacity"));
            return f.l.Ld && k ? c : e
        },
        FQ: function (a, b) {
            var c = this.CF(a, b);
            c.style.zIndex = -1;
            return c
        },
        moveChanged: function () {
            var a = this.get("move");
            if (!1 === a) return this.jda();
            void 0 !== a && ("pause" === a.action ? this.kba() : "[object Array]" === Object.prototype.toString.call(a.De) ? a.De && ("resume" === a.action && this.Wx ? this.moveTo(a.De[a.De.fl || 0], a.speed, a.mb) : (this.Wx && this.r("movestop"), a.De.fl = 0, this.set("position",
                a.De[0]), this.jaa(a.De, a.speed, a.mb, a.d7))) : this.moveTo(a.De, a.speed, a.mb, !0))
        },
        moveTo: function (a, b, c, d) {
            var e = this.get("position");
            a.Sa(e);
            var g = Math.round(a.ef(e) / 1E3 / b * 36E5);
            if (0 === g) return this.r("moveend");
            this.mg && (this.mg.stop(), this.mg = null);
            this.mg = new f.wh(e, a);
            c = c || function (a) {
                return a
            };
            this.mg.transition = function (a, b, d) {
                if (d >= g) return b;
                var e = (b.M - a.M) * c(d / g) + a.M;
                a = (b.O - a.O) * c(d / g) + a.O;
                return new f.W(e, a)
            };
            this.mg.Ql = function (b) {
                this.set("position", b);
                d && this.Qc.r("moving", {
                    passedPath: [this.mg.start,
                        this.get("position")]
                });
                this.r("moving");
                b.yb(a) && (this.mg && (this.mg.stop(), this.mg = null), this.Qc.r("moveend"), this.r("moveend"))
            };
            this.get("autoRotation") && !f.l.Ld && (b = "2D" == (this.map.K.view.type || "2D") ? this.H_(e, a) : this.I_(e, a), this.set("angle", b));
            this.mg.Qj(this)
        },
        jda: function () {
            this.mg && (this.mg.stop(), this.mg = null, this.r("movestop"))
        },
        kba: function () {
            this.mg && (this.mg.stop(), this.mg = null, this.r("movepause"))
        },
        jaa: function (a, b, c, d) {
            function e() {
                var b = a.slice(0, a.fl || 0);
                b.push(this.get("position"));
                this.Qc.r("moving", {passedPath: b})
            }

            function g() {
                a.fl < a.length - 1 ? (a.fl += 1, this.moveTo(a[a.fl], b, c)) : (this.da("movealong"), d ? (a.fl = 0, this.set("position", a[0]), this.moveTo(a[a.fl], b, c)) : this.r("movestop"))
            }

            var h = Math.min(a.fl || 0, a.length - 1);
            this.Wx || (this.Wx = !0, this.h("moving", e, this), this.h("moveend", g, this), this.h("movestop", function l() {
                this.Wx = !1;
                this.H("moveend", g, this);
                this.H("moving", e, this);
                this.H("movestop", l, this)
            }, this));
            this.moveTo(a[h], b, c)
        },
        I_: function (a, b) {
            var c = this.map, d = c.Il(a), c = c.Il(b),
                e = 0;
            c.ef(d);
            var g = c.y - d.y, h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= g && 0 > h ? e = Math.PI + e : 0 > g && 0 >= h ? e = Math.PI + e : 0 > g && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return f.a.Dd(180 * e / Math.PI, 1)
        },
        H_: function (a, b) {
            var c = this.map, d = c.Qb(a), c = c.Qb(b), e = 0;
            c.ef(d);
            var g = c.y - d.y, h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= g && 0 > h ? e = Math.PI + e : 0 > g && 0 >= h ? e = Math.PI + e : 0 > g && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return f.a.Dd(180 * e / Math.PI, 1)
        }
    });
    f.D.Xj = f.D.Sf.extend({
        C: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.X("items", a, !0);
            this.X("content", a, !0);
            this.X("resolution", b);
            this.X("centerCoords", b);
            this.Ju = a
        }, QT: function (a) {
            this.Pe();
            this.Ms();
            this.Wj();
            this.ci("resolution");
            this.ci("centerCoords");
            this.ci("render");
            this.X("resolution", a);
            this.X("centerCoords", a);
            this.X("render", a);
            this.map.h("movestart", this.gj, this);
            this.map.h("mapmove", this.gj, this);
            this.map.h("zoomstart", this.gj, this);
            this.map.h("click", this.gj, this);
            this.map.h("closeOverlays", this.gj, this);
            this.map.h("rotate", this.gj, this)
        }, gj: function () {
            this.Ju.map && this.Ju.close()
        }, mapChanged: function () {
        }, positionChanged: function () {
            this.Wj()
        }, renderChanged: function () {
            this.Wj()
        }, Pe: function () {
            this.J && (this.J.parentNode && this.J.parentNode.removeChild(this.J), this.J = null);
            var a = f.g.create("div", null, "amap-menu");
            f.A.h(a, "mousedown", function (a) {
                f.A.stopPropagation(a)
            }, this);
            this.J = a;
            this.map.Ia.D.appendChild(this.J)
        }, Ms: function () {
            var a = this, b = this.J;
            b.innerHTML =
                "";
            var c = this.get("content");
            if ("object" === typeof c) b.appendChild(c); else if ("string" === typeof c) b.innerHTML = c; else if ((c = this.get("items")) && c.length) {
                var d = f.g.create("ul", b, "amap-menu-outer");
                c.sort(function (a, b) {
                    return isNaN(a.AA) || isNaN(b.AA) ? 0 : a.AA - b.AA
                });
                for (b = 0; b < c.length; b += 1) (function (b) {
                    var c = b.lW, h = b.mb, k = f.g.create("li", d);
                    k.innerHTML = c;
                    f.A.h(k, "click", function () {
                        h.call(k);
                        a.Ju.close()
                    }, k)
                })(c[b])
            } else this.J.innerHTML = ""
        }, Wj: function () {
            var a = this.map, b = this.J;
            a && b && (this.map.get("zoom"),
                b = this.get("position"), b = a.Il(b), a = b.y, b = b.x, this.J.style.right = "", this.J.style.bottom = "", this.J.style.left = b + "px", this.J.style.top = a + "px")
        }, nf: function () {
            this.J && (this.map.H("click", this.rfa, this), this.map.Ia.D.removeChild(this.J), this.Ju.Jh = !1, this.J = this.Ju.yh.map = null, this.map.H("movestart", this.gj, this), this.map.H("zoomstart", this.gj, this), this.map.H("click", this.gj, this), this.map.H("closeOverlays", this.gj, this), this.map.H("rotate", this.gj, this))
        }, visibleChanged: function () {
            this.J && (this.get("visible") ?
                this.J.style.display = "block" : this.J.style.display = "none")
        }, itemsChanged: function () {
            this.J && this.Ms()
        }
    });
    f.D.Qd = f.D.Sf.extend({
        C: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Ud("content contentDom position contentU isCustom autoMove showShadow closeWhenClickMap size offset".split(" "), a);
            this.X("retainWhenClose", a, !0);
            a.X("toBeClose", this);
            this.Hh = a
        }, QT: function (a) {
            this.A7 || (this.Pe(), this.Ms());
            this.ci("resolution");
            this.ci("centerCoords");
            this.ci("render");
            this.X("resolution", a);
            this.X("centerCoords", a);
            this.X("render", a);
            this.map = a;
            a.Ia.D.appendChild(this.Jb);
            this.ZJ();
            this.Wj();
            this.qL();
            this.A7 = !0;
            this.s7();
            this.Qc.r("onAdd", {type: "onAdd", target: this.Qc})
        }, Pe: function () {
            var a = f.g.create("div");
            a.className = "amap-info";
            var b = f.g.create("div", a, "amap-info-shadowContainer"), c = f.g.create("div", a),
                d = f.g.create("div", c, "amap-info-contentContainer");
            a.style.position = "absolute";
            c.style.position = "absolute";
            c.style.bottom = "0px";
            c.style.left = "0px";
            b.style.position = "absolute";
            this.Jb = a;
            this.se = c;
            this.kJ = b;
            this.eg = d;
            this.set("contentDom", this.eg, !0)
        }, Ms: function () {
            var a = this.get("contentU");
            if (a) {
                var b =
                    this.get("isCustom"), c = this.eg, d = this.kJ;
                c.innerHTML = "";
                var e = null;
                if (b) {
                    if ("string" === typeof a) c.innerHTML = a; else if (a instanceof Array) for (e = 0; e < a.length; e += 1) c.appendChild(a[e]); else c.appendChild(a);
                    e = c;
                    d.parentNode && d.parentNode.removeChild(d)
                } else {
                    e = d = f.g.create("div", c, "amap-info-content amap-info-outer");
                    "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                    this.B7 = d;
                    a = f.g.create("a", this.eg, "amap-info-close");
                    a.innerHTML = "\u00d7";
                    this.MF = a;
                    a.href = "javascript: void(0)";
                    f.l.ke && (f.A.h(a, "touchstart",
                        function (a) {
                            f.A.stop(a)
                        }, this), f.A.h(a, "touchend", function (a) {
                        f.A.stop(a);
                        this.Hh.close()
                    }, this), f.A.h(a, "click", function (a) {
                        f.A.stop(a);
                        this.Hh.close()
                    }, this));
                    f.l.Y || (f.A.h(a, "mousedown", function (a) {
                        f.A.stop(a)
                    }, this), f.A.h(a, "click", function (a) {
                        f.A.stop(a);
                        this.Hh.close()
                    }, this));
                    if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px");
                    a = f.g.create("div", c, "amap-info-sharp");
                    a.style.height = "23px";
                    if (f.l.Mg || f.l.up) a.style.marginLeft = c.childNodes[0].offsetWidth /
                        2 - 5;
                    this.kJ.style.display = "block"
                }
                f.A.ida(e)
            }
        }, ZJ: function () {
            var a = this.get("isCustom"), b = this.get("showShadow");
            if (!a && b) {
                var a = this.kJ, b = f.g.Tz(this.eg), c = b.height - 23, d = b.width;
                if (f.l.Mg || f.l.up) c = this.eg.childNodes[0].offsetHeight, d = this.eg.childNodes[0].offsetWidth + 26;
                b = "background-image:url(" + f.w.eb + (f.l.Mg ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
                a.innerHTML = "";
                var e = [], g;
                g = e[1] = {};
                g.height = 0.5 * c + 4;
                g.width = d;
                g.offsetX = 400;
                g.offsetY = 16;
                g.top = -g.height - 10 - 15;
                g.left = 23;
                g = e[2] = {};
                g.height =
                    e[1].height;
                g.width = e[1].height;
                g.offsetX = 1075 - g.width;
                g.offsetY = e[1].offsetY;
                g.top = e[1].top;
                g.left = 23 + e[1].width;
                g = e[3] = {};
                g.height = 10;
                g.width = 22;
                g.offsetX = 30;
                g.offsetY = 445;
                g.top = -25;
                g.left = 23 + (f.l.up || f.l.Mg ? 5 : 0);
                g = e[4] = {};
                g.height = 10;
                g.width = d / 2 - 15 - e[3].left - e[3].width;
                g.offsetX = 132;
                g.offsetY = 445;
                g.top = -25;
                g.left = e[3].left + e[3].width;
                g = e[5] = {};
                g.height = 10;
                g.width = 70;
                g.offsetX = 80;
                g.offsetY = 445;
                g.top = -25;
                g.left = e[4].left + e[4].width;
                g = e[6] = {};
                g.height = 10;
                g.width = d - e[5].left - e[5].width;
                g.offsetX = 132;
                g.offsetY = 445;
                g.top = -25;
                g.left = e[5].left + e[5].width;
                g = e[7] = {};
                g.height = 10;
                g.width = 30;
                g.offsetX = 621;
                g.offsetY = 445;
                g.top = -25;
                g.left = d;
                g = e[8] = {};
                g.height = 15;
                g.width = 70;
                g.offsetX = 47;
                g.offsetY = 470;
                g.top = -15;
                g.left = d / 2 - 15;
                for (c = 1; 8 >= c; c += 1) d = f.g.create("div", a), g = [], g.push("position:absolute;"), g.push(b), g.push("top:" + e[c].top + "px;"), g.push("left:" + e[c].left + "px;"), g.push("width:" + e[c].width + "px;"), g.push("height:" + e[c].height + "px;"), g.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"),
                    d.style.cssText = g.join("")
            }
        }, wja: function () {
        }, Wj: function () {
            var a = this.map, b = this.Jb, c = this.get("position");
            if (a && b && c) {
                b = a.Il(c);
                a.get("size");
                c = f.g.Tz(this.eg);
                if (f.l.Mg || f.l.up) c.width = this.eg.childNodes[0].offsetWidth + 14;
                a = this.get("offset");
                c = this.get("isCustom") ? c.width / 2 : (c.width - 30) / 2;
                this.Jb.style.left = Math.round(b.x - c + (a.x || 0)) + "px";
                this.Jb.style.top = Math.round(b.y + (a.y || 0)) + "px";
                b = this.B7;
                if (this.MF && b.childNodes[0]) {
                    for (c = a = 0; c < b.childNodes.length; c += 1) a += b.childNodes[0].clientHeight ||
                        0;
                    a > (this.get("size").height || b.clientHeight) ? this.MF.style.right = "20px" : this.MF.style.right = "5px"
                }
            }
        }, EZ: function () {
            var a = new f.I(2 - this.eg.offsetWidth / 2, 2 - this.eg.offsetHeight),
                b = this.get("offset") || new f.I(0, 0);
            this.get("isCustom") || (a = a.add(new f.I(0, -23)));
            return a.add(b)
        }, qL: function () {
            if (this.get("position") && this.get("autoMove") && this.eg) {
                var a = this.map, b = new f.tc(this.eg.offsetWidth, this.eg.offsetHeight);
                a.Il(this.get("position"));
                for (var c = a.Il(this.get("position")).add(this.EZ()), d = c.add(b.Is()),
                         e = a.get("size"), g = a.g9(), h = 0, k = 0, l = 0; l < g.length; l += 1) {
                    var m = g[l], n = 0, p = 0;
                    0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.jg() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.jg() - m[1] - (d.x + h), p = e.hg() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.hg() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
                }
                c = c.add(new f.I(h,
                    k));
                d = d.add(new f.I(h, k));
                l = g = 0;
                0 > c.x || b.jg() > e.jg() ? g = 20 - c.x : e.jg() < d.x && (g = e.jg() - d.x - 25);
                0 > c.y || b.hg() > e.hg() ? l = 5 - c.y : e.hg() < d.y && (l = e.hg() - d.y - 15);
                g += h;
                l += k;
                (g || l) && a.K.panBy(g, l)
            }
        }, s7: function () {
            this.get("closeWhenClickMap") && (this.map.h("clickstart", this.iO, this, !1), this.map.h("clickend", this.hO, this, !1))
        }, iO: function () {
            this.Hh.Jh && this.Hh.getIsOpen() && (this.Hh.qB = !0)
        }, hO: function () {
            this.Hh.Jh && (this.Hh.qB && this.Hh.close(), this.Hh.qB = !1)
        }, nf: function () {
            this.Jb && (this.Hh.qB = !1, this.get("closeWhenClickMap") &&
            (this.map.H("clickstart", this.iO, this), this.map.H("clickend", this.hO, this)), this.get("retainWhenClose") ? this.map.ji.appendChild(this.Jb) : (this.Jb.parentNode === this.map.Ia.D && this.map.Ia.D.removeChild(this.Jb), this.Hh.D = null), this.map = null, this.Hh.Jh = !1, this.Qc.r("close", {
                type: "close",
                target: this.Qc
            }))
        }, Afa: function () {
            if (!this.get("isCustom")) return this.eg.offsetWidth;
            for (var a = this.Uf, b = a.firstChild, c = a.lastChild; b && c && b.style && c.style && b === c;) a = b, b = a.firstChild, c = a.lastChild;
            a = f.g.Kd(a, "width");
            return a = parseInt(a.replace("px", ""), 10)
        }, renderChanged: function () {
            this.Wj()
        }, positionChanged: function () {
            this.map && this.Jb && (this.Wj(), this.qL())
        }, offsetChanged: function () {
            this.positionChanged()
        }, contentChanged: function () {
            this.Ms();
            this.ZJ();
            this.Wj()
        }, sizeChanged: function () {
            this.Ms();
            this.ZJ();
            this.Wj()
        }
    });
    f.ka = {};
    f.ka.fo = f.Z.extend({
        ea: [f.ja, f.de], C: function () {
        }, Db: function () {
            return new this.C(this.Na)
        }, HG: function () {
            return this.Na
        }, setCoords: function (a) {
            this.Gca(a)
        }, Gca: function (a) {
            this.Gp = this.Hc();
            this.Oe = null;
            if (f.ka.Rb && this instanceof f.ka.Rb) {
                var b = a.length;
                this.ng = Array(b);
                for (var c, d, e = 0; e < b; e += 1) if (c = a[e], d = new f.ka.JK(c), this.ng[e] = d, 0 === e) {
                    if (0 === c.length) break;
                    d.rn(c) || c.reverse()
                } else 0 !== c.length && d.rn(c) && c.reverse()
            } else this.Na = a
        }
    });
    f.ka.Ad = f.extend({}, {
        rq: "point",
        RB: "linestring",
        HK: "linearring",
        Ww: "polygon",
        YB: "multipoint",
        XB: "multilinestring",
        Uw: "multipolygon",
        Uea: "geometrycollection"
    });
    f.of = f.Z.extend({
        ea: [f.ja, f.de], C: function (a) {
            a = a || {};
            a.Qt && (this.Qt = a.Qt);
            a.ED && (this.ED = a.ED);
            a.wN && (this.wN = a.wN);
            this.map = a.map;
            this.rk = a.gD || f.a.Fb(this);
            this.name = a.name || "";
            this.gg = !1;
            this.set("visible", !0, !0);
            this.eJ(a.Ba);
            this.ai = a.mB;
            this.style = a.style
        }, c8: function () {
            this.style = this.ai = this.Fm = this.pT = this.Ba = this.name = this.map = null;
            this.Vn();
            this.uj()
        }, P9: function () {
            return this.ai
        }, Rca: function (a) {
            this.ai = a;
            this.zIndex = this.ai[0].vh || this.zIndex
        }, Yga: function () {
            return this.Ba
        }, eJ: function (a) {
            a &&
            (this.Ba = a, this.X("coords", a, !0), this.Qt || this.ED) && (a.X("radius", this), a.X("center", this), a.X("resolution", this), a.X("strokeWeight", this))
        }, setStyle: function (a) {
            this.Rca(a);
            this.bn()
        }, coordsChanged: function () {
            this.bn()
        }, radiusChanged: function () {
            this.Ba.Gp = this.Ba.Hc();
            this.Ba.Oe = null;
            this.bn()
        }, bn: function (a) {
            this.set("feature", {target: this, Y7: a, Gp: this.Ba.Gp || this.Ba.Hc(), naa: this.Ba.Hc()});
            this.Ba.Gp = this.Ba.Hc()
        }, visibleChanged: function () {
            this.bn()
        }, kha: function (a) {
            for (var b = 0; b < this.ai.length; b +=
                1) {
                var c = this.ai[b];
                if (a.yb(c.sr(this))) return c
            }
        }, o9: function () {
            var a = this.Ba, b = [];
            a.ig() === f.ka.Ad.Ww || a.ig() === f.ka.Ad.Uw ? b.push(new f.style.nd.Rb({
                fillColor: "#78cdd1",
                cd: 0.2,
                strokeColor: "#122e29",
                Va: 0.5,
                Mb: 1
            })) : a.ig() === f.ka.Ad.RB || a.ig() === f.ka.Ad.HK || a.ig() === f.ka.Ad.XB ? b.push(new f.style.nd.IK({
                color: "#888888",
                width: 1,
                zIndex: 10
            })) : a.ig() !== f.ka.Ad.rq && a.ig() !== f.ka.Ad.YB || b.push(new f.style.nd.Ye({
                url: f.w.eb + "/theme/v1.3/markers/0.png",
                width: 36,
                height: 36,
                rotation: 0,
                Oja: -12,
                Pja: -36,
                zIndex: 100
            }));
            return b
        }
    });
    f.of.Pea = "geometry";
    f.ka.Ze = f.ka.fo.extend({
        C: function (a, b) {
            this.Na = a;
            this.Ng = b;
            this.Oe = null
        }, Hc: function () {
            if (!this.Oe) {
                var a = this.Na[0], b = this.Na[1];
                if (this.Ng) this.Oe = [a, b, a, b]; else {
                    var c = this.get("radius"), d = this.get("resolution") * this.get("strokeWeight") || 0,
                        c = c ? c / Math.cos(Math.PI * this.get("center").O / 180) : 0;
                    this.Oe = [a - c - d, b - c - d, a + c + d, b + c + d]
                }
            }
            return this.Oe
        }, ig: function () {
            return f.ka.Ad.rq
        }
    });
    f.R = {canvas: {}, kd: {}, Ie: {}, td: {}};
    f.R.kc = f.Z.extend({
        ea: [f.ja, f.de], C: function (a, b) {
            this.q = a;
            this.Ng = a.oa.Ng;
            this.T = b;
            this.j = b.j;
            this.X("display", b)
        }, yr: function () {
            this.gs && this.gs();
            this.Vn();
            this.j = this.T = this.q = null
        }, jp: function (a, b) {
            var c = this.zoom, d = [], e = this.q;
            if (Math.floor(c) !== c) b(d, e); else {
                c = [a.x, a.y];
                if (e.Dj) {
                    for (var g = e.Ue, h = !0, k = [], l = 0; l < g.length; l += 1) {
                        var m = g[l].fg;
                        if (m) if (m.parentNode && m.parentNode.parentNode && this.T && m.parentNode.parentNode !== this.T.ji && "none" !== m.parentNode.style.display) {
                            var n = f.g.Lz(m), m = n[0], n =
                                n[1];
                            if (m && n) {
                                var p = Math.max(Math.abs(g[l].get("offset").x), Math.abs(g[l].get("offset").y)) + Math.max(m, n);
                                e.ae = Math.max(e.ae, p);
                                e.we = Math.max(e.we, p);
                                g[l].width = m;
                                g[l].height = n
                            } else h = !1, k.push(g[l])
                        } else h = !1, k.push(g[l])
                    }
                    h ? (e.Dj = !1, e.Ue = []) : e.Ue = k
                }
                g = Math.max(e.ae, e.bs || 0) * this.P;
                h = Math.max(e.we, e.bs || 0) * this.P;
                k = 0;
                e.as && (k = e.as / Math.cos(Math.PI * this.j.get("center").O / 180));
                h = Math.max(h, k || 0);
                g = Math.max(g, k || 0);
                if (g = e.kh([c[0] - g, c[1] - h, c[0] + g, c[1] + h])) {
                    for (var q in g) if (g.hasOwnProperty(q) && (h = g[q],
                    h.get("visible") && !h.get("noSelect"))) if (l = h.Ba, l instanceof f.ka.Ze) if (this.Ng) {
                        k = this.q.Ni;
                        k instanceof Array && (k = "number" === typeof h.Qa.style && k[h.Qa.style] ? k[h.Qa.style] : k[0]);
                        var n = k.size.width * this.P, p = k.size.height * this.P, r = k.anchor.x * this.P,
                            t = k.anchor.y * this.P, n = f.G.yF([[c[0] - n + r, c[1] - p + t], [c[0] + r, c[1] + t]]);
                        f.G.Xc(n, l.Na) && d.push(h)
                    } else if ("undefined" !== typeof l.get("radius")) k = l.Na, k = new f.I(k[0], k[1]), m = new f.I(c[0], c[1]), l = l.get("radius"), "px" === h.get("unit") ? m.ef(k) / Math.pow(2, 20 - this.zoom) <
                        l && d.push(h) : m.ef(k) * Math.cos(h.get("center").O * Math.PI / 180) <= l / this.Ol * Math.pow(2, 20 - this.zoom) && d.push(h); else {
                        if (k = h.get("params"), k.visible) {
                            l = l.Na;
                            r = k.Xy % 360;
                            m = [c[0], c[1]];
                            if (r) {
                                var n = (c[0] - l[0]) / this.P, p = (c[1] - l[1]) / this.P, t = Math.PI * r / 180,
                                    r = Math.cos(-t), t = Math.sin(-t), u = n * t + p * r;
                                m[0] = l[0] + (n * r - p * t) * this.P;
                                m[1] = l[1] + u * this.P
                            }
                            n = h.width * this.P;
                            p = h.height * this.P;
                            r = k.offset.x * this.P;
                            t = k.offset.y * this.P;
                            n = f.G.yF([[m[0] - n - r, m[1] - p - t], [m[0] - r, m[1] - t]]);
                            l[0] instanceof Array || (l = [l]);
                            for (p = l.length - 1; 0 <=
                            p; p -= 1) if (f.G.Xc(n, l[p])) {
                                k.shape ? this.yv(h, m, l) && d.push(h) : d.push(h);
                                break
                            }
                        }
                    } else l.Xc ? l.Xc(c) && d.push(h) : l.Ar && 1.8 * l.Ar(c) <= h.get("strokeWeight") * this.P && d.push(h);
                    this.Ng ? d.sort(function (a, b) {
                        return a.rk > b.rk ? -1 : 1
                    }) : d.sort(function (a, b) {
                        return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.rk > b.rk ? -1 : 1
                    });
                    b(d, e)
                } else b([], e)
            }
        }, yv: function (a, b, c) {
            var d = (b[0] - c[0][0]) / this.P;
            b = (b[1] - c[0][1]) / this.P;
            a = a.get("params");
            c = a.offset;
            var d = [d - c.x,
                b - c.y], e;
            a = a.shape;
            if ("circle" === a.F.type) {
                if (b = a.F.coords[0], c = a.F.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.F.coords[2]) return !0
            } else {
                if ("poly" === a.F.type) return e = a.F.coords, e = this.lz(e), f.zc.Xc(d, e);
                if ("rect" === a.F.type) return e = a.F.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [[a, b], [c, b], [c, e], [a, e]], f.zc.Xc(d, e)
            }
            return !1
        }, lz: function (a) {
            for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
            return b
        }, UR: function (a, b, c, d, e, g, h) {
            var k = ["position:absolute;"];
            k.push("top:" + Math.round(c) +
                "px;");
            k.push("left:" + Math.round(b) + "px;");
            k.push("width:" + Math.round(d) + "px;");
            k.push("height:" + Math.round(e) + "px;");
            1 > g && ("opacity" in a.style ? (k.push("opacity"), k.push(":"), k.push(g), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * g)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * g)), k.push(");")));
            k.push("z-index:" + h + ";");
            k.join("");
            f.g.qV(a, k.join(""))
        }
    });
    f.R.Sb = f.Z.extend({
        ea: [f.ja, f.de], C: function (a) {
            this.j = a;
            this.ji = a.ji;
            this.J = a.Ia.B;
            this.X("display", a);
            this.X("rotateEnable", a);
            this.X("style", a);
            this.X("hightlight", a)
        }, eI: function (a) {
            this.Id = a || f.a.lr("ff" + this.j.Id.slice(1))
        }, jp: function (a, b, c, d) {
            function e(a, d) {
                a.length && (h[f.a.indexOf(b, d)] = a);
                k -= 1;
                0 >= k && (c(h), k = 0)
            }

            for (var g = b.length, h = [], k = 0, l, m = [], n = 0; n < g; n += 1) l = b[n], l instanceof f.B.lc && l.get("visible") && (m.push(this.mp(l)), k += 1);
            for (g = 0; g < m.length; g += 1) m[g].jp(a, e, d)
        }
    });
    f.jR = {
        Af: function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d += 2) {
                var g = 0,
                    g = "str" === b ? f.a.Dd(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : f.a.Dd(parseInt(a.substr(d, 2), 16) / 255, 3);
                c.push(g)
            }
            c.push(c.shift());
            return "str" === b ? "rgba(" + c.join(",") + ")" : c
        }, jU: function (a, b, c) {
            if (b[c]) console.log("customType repeat!!", c); else {
                var d = {};
                d.visible = void 0 === a.visible ? !0 : a.visible;
                d.Yca = void 0 === a.showLabel ? !0 : a.showLabel;
                d.Pk = void 0 === a.showIcon ? !0 : a.showIcon;
                if (void 0 !== a.color) {
                    var e = "", g = "";
                    a.color && (e = this.Af(a.color,
                        "str"), g = this.Af(a.color));
                    d.color = {canvas: e, Ie: g}
                } else d.opacity = a.opacity;
                void 0 !== a.fillColor ? (g = e = "", a.fillColor && (e = this.Af(a.fillColor, "str"), g = this.Af(a.fillColor)), d.fillColor = {
                    canvas: e,
                    Ie: g
                }) : d.cd = a.fillOpacity;
                void 0 !== a.strokeColor ? (g = e = "", a.strokeColor && (e = this.Af(a.strokeColor, "str"), g = this.Af(a.strokeColor)), d.strokeColor = {
                    canvas: e,
                    Ie: g
                }) : d.Va = a.strokeOpacity;
                void 0 !== a.textFillColor ? (g = e = "", a.textFillColor && (e = this.Af(a.textFillColor, "str"), g = this.Af(a.textFillColor)), d.rda = {
                    canvas: e,
                    Ie: g
                }) : d.sda = a.textFillOpacity;
                void 0 !== a.textStrokeColor ? (g = e = "", a.textStrokeColor && (e = this.Af(a.textStrokeColor, "str"), g = this.Af(a.textStrokeColor)), d.tda = {
                    canvas: e,
                    Ie: g
                }) : d.uda = a.textStrokeOpacity;
                void 0 !== a.backgroundColor ? (g = e = "", a.backgroundColor && (e = this.Af(a.backgroundColor, "str"), g = this.Af(a.backgroundColor)), d.backgroundColor = {
                    canvas: e,
                    Ie: g
                }) : d.x6 = a.backgroundOpacity;
                a.texture && (d.rc = f.w.ac + "://" + a.texture);
                b[c] = d
            }
        }, zI: function (a, b, c, d) {
            if (a) for (var e in a) if (a.hasOwnProperty(e)) {
                var g =
                    a[e], h = e;
                c && (h = c + ":" + e);
                if (g.detailedType) this.jU(g, b, h), this.zI(g.detailedType, b, h, g); else if (g.subType) this.zI(g.subType, b, h); else {
                    if (void 0 !== g.code) {
                        for (var k in d) d.hasOwnProperty(k) && void 0 === g[k] && void 0 !== d[k] && "isDetailed" !== k && "detailedType" !== k && (g[k] = d[k]);
                        h = c + ":" + g.code
                    }
                    this.jU(g, b, h)
                }
            }
        }, styleChanged: function () {
            if (this.j.K.mh) {
                var a = {};
                this.zI(this.j.get("style"), a);
                this.vr = a;
                var a = this.vr["regions:land"], b = this.vr.water, c = this.vr.sky, d, e, g;
                if (a) {
                    var h = "rgba(0,0,0,0)";
                    if (a.visible) {
                        var k =
                            this.ip(f.a.cV(this.j.Id.substr(1)), a.opacity, a.color);
                        k && (h = k, d = this.Ir(f.a.vs(this.j.Id.substr(1)), a.opacity, a.color))
                    }
                    this.j.vz = h
                }
                b && b.visible && (e = this.Ir(f.a.vs(this.j.Qy.substr(1)), b.opacity, b.color));
                c && c.visible && (g = this.Ir(f.a.vs(this.j.ru.substr(1)), void 0, c.color));
                this.eI && this.eI(d, e, g);
                this.tW ? this.tW(this.vr) : this.set("display")
            }
        }, ip: function (a, b, c) {
            if (a) {
                if (void 0 !== b) return a = a.split(","), a[3] = f.a.Dd(parseFloat(b), 3) + ")", a.join(",");
                if (c) return c.canvas
            }
            return a
        }, Ir: function (a, b, c) {
            if (a) {
                if (void 0 !==
                    b) return [a[0], a[1], a[2], f.a.Dd(parseFloat(b), 3)];
                if (c) return c.Ie
            }
            return a
        }, Pz: function (a, b) {
            if (void 0 !== b) {
                var c = this.vr[a + ":" + b];
                if (c) return c
            }
            return this.vr[a]
        }, xi: function (a, b, c, d) {
            var e = null, g = a;
            d = d ? this.ip : this.Ir;
            if (e = this.Pz(b)) if (e.visible) {
                var g = 1, h = "";
                if (c) if (e.fillColor || e.cd) g = e.cd, h = e.fillColor; else {
                    if (e.color || e.opacity) g = e.opacity, h = e.color
                } else if (e.strokeColor || e.Va) g = e.Va, h = e.strokeColor; else if (e.color || e.opacity) g = e.opacity, h = e.color;
                g = d(a, g, h)
            } else g = "";
            this.nn === b && (g = this.lp(g ||
                a));
            return g
        }, hn: function (a, b, c) {
            c = c ? this.ip : this.Ir;
            var d = null, e = a;
            (d = this.Pz(b)) && (e = d.visible ? c(a, d.opacity, d.color) : "");
            this.nn === b && (e = this.lp(e || a));
            return e
        }, Hr: function (a, b, c, d, e) {
            var g = a, h = b, k = c, l = !0, m = !0, n = 1, p = this.Pz(d, e);
            p && (p.visible && p.Yca ? (g = this.ip(a, p.sda, p.rda), h = this.ip(b, p.uda, p.tda), k = this.ip(c, p.x6, p.backgroundColor), l = p.Pk) : (m = l = !1, g = h = k = ""));
            p = !1;
            this.nn === d ? p = !0 : void 0 !== e && this.nn === d + "-" + e && (p = !0);
            p && (g = this.lp(g || a), h = this.lp(h || b), k = this.lp(k || c), n = 1 - 1.6 * this.Pr, m = l = !0);
            return [g, h, k, l, m, n]
        }, gp: function (a, b, c, d) {
            var e = null, g = a, h = b;
            d = d ? this.ip : this.Ir;
            if (e = this.Pz(c)) e.visible ? (g = d(a, e.cd, e.fillColor), h = d(b, e.Va, e.strokeColor)) : g = h = "";
            this.nn === c && (b = h || b, g = this.lp(g || a), h = this.lp(b));
            return [g, h]
        }
    };
    f.R.Sb.gb(f.jR);
    f.R.canvas.Sb = f.R.Sb.extend({
        C: function (a) {
            arguments.callee.ma.apply(this, arguments);
            this.type = "2D"
        }, mp: function (a) {
            if (!a.R) {
                var b = a.zj(this);
                b && !b.H7 && (a.R = b)
            }
            return a.R
        }, Xb: function (a) {
            var b = this.j.vz || this.j.Id;
            this.MI !== b && this.j.K.mh && (this.j.pV(b), this.MI = b);
            this.j.Ia.Pm.style.cssText = "";
            for (var c = a.Wa, b = a.U, d = a.size.width, e = a.size.height, g = 0; g < c.length; g += 1) {
                var h = c[g], k = this.mp(h), l = c[g].Cl();
                if (k && k.q) if (!l.visible || l.$c[0] > b.zoom || l.$c[1] < b.zoom || h.Oa && 0 === h.Oa.length) {
                    if (k = k.Kg()) if (k.length) for (l =
                                                           0; l < k.length; l += 1) k[l].parentNode === this.J && this.J.removeChild(k[l]); else k.parentNode === this.J && this.J.removeChild(k)
                } else {
                    k.Xb(a, l);
                    var h = k.Kg(), m, n, p = k.transform;
                    if (!p || !h || k.tn && !this.j.K.Aa) c[g].Gi && (h.parentNode !== this.J || f.l.gh) && (this.J.appendChild(h), c[g].pb = h); else {
                        c[g].pb = h;
                        h.length || (h = [h], p = [p]);
                        for (var q = 0; q < h.length; q += 1) {
                            m = h[q];
                            n = p[q];
                            var r = n.translate.x, t = n.translate.y;
                            c[g].fA || (r = f.a.Dd(r, 2), t = f.a.Dd(t, 2));
                            var u = n.scale;
                            1E-5 > Math.abs(r) && (r = 0);
                            1E-5 > Math.abs(t) && (t = 0);
                            var x = [];
                            x.push("position:absolute");
                            x.push("z-index:" + (n.vh || c[g].get("zIndex")));
                            c[g].Vu ? (x.push("top:" + Math.floor(e / 2 + t) + "px"), x.push("left:" + Math.floor(d / 2 + r) + "px")) : m.$S ? (x.push("height:" + m.height * u + "px"), x.push("width:" + m.width * u + "px"), x.push("top:" + (e / 2 - t * u) + "px"), x.push("left:" + (d / 2 - r * u) + "px")) : (1 !== u && (x.push(f.g.Tn[f.g.Ke] + "-origin:" + r + "px " + t + "px"), x.push(f.g.Tn[f.g.Ke] + ":scale3d(" + u + "," + u + ",1)")), x.push("top:" + Math.floor(e / 2 - t) + "px"), x.push("left:" + Math.floor(d / 2 - r) + "px"), k.Sh && (x.push("height:" + m.height + "px"), x.push("width:" +
                                m.width + "px")));
                            k.fA || 1 === l.opacity || "number" !== typeof l.opacity || x.push(f.g.aS(m, l.opacity));
                            (m.parentNode !== this.J || f.l.gh) && this.J.appendChild(m);
                            f.g.qV(m, x.join(";"))
                        }
                    }
                }
            }
            a = this.j.Ia.Pm;
            h = this.j.Ia.B;
            c = this.j.Ia.D;
            f.g.Ke && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[f.g.Ke + "Origin"] = d / 2 + "px " + e / 2 + "px", a.style[f.g.Ke] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", h.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", h.style.cssText = "-webkit-transform: translateZ(0);",
                c.style.cssText = "");
            this.j.Up = !1
        }
    });
    f.R.xh = f.R.kc.extend({
        C: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.X("reload", a, !0);
            var c = a.oa.get("cacheSize");
            if (this.j && this.j.K) {
                var d = this.j.K.get("tileCacheSize");
                d && 0 < d && (c = d)
            }
            this.wa = new f.ne(c);
            var e = this;
            this.wa.fI.jQ(function (a) {
                e.zt(a)
            });
            this.Wb = 1;
            this.Zk = 50;
            this.sL = !0;
            this.q.wa = this.wa;
            this.Fi = new f.Sw(6, null, a.qG);
            new f.Sw(5, null, a.qG)
        }, gs: function () {
            this.clear();
            this.wa.clear();
            this.Yb && (this.Yb.H("tiles", this.UT, this), this.Yb.H("ack", this.TT, this), this.Yb.H("disable",
                this.ST, this), this.Yb = null);
            this.Sh && f.A.H(this.sa, "webglcontextlost", this.Qv, this);
            this.j.H("zoomend", this.Nh, this);
            this.j.H("moveend", this.Nh, this)
        }, reloadChanged: function () {
            this.q && (this.q.Aa = !1);
            this.wa.clear();
            this.reload = !0;
            this.set("display")
        }, An: function (a, b, c) {
            function d(b) {
                a.loaded = !0;
                e.q && (a.status = "loaded", a.ta = !0, a.nc = b, e.set("display", 0), "function" === typeof c && c())
            }

            var e = this;
            a.status = "loading";
            e.wa.set(a.key, a);
            this.q.ur && this.q.ur.call(this, a, d, function () {
                a.loaded = !0;
                e.q && (a.status =
                    "loaded", a.ta = !0, "function" === typeof c && c())
            })
        }, hW: function (a, b, c, d) {
            var e = [];
            c = c || 18;
            b = Math.pow(2, b - c);
            for (var g = 0; g < a.length; g += 1) {
                var h = a[g].ha, k = Math.floor(h.x / b), h = Math.floor(h.y / b);
                d ? (k = c + "/" + k + "/" + h, h = this.wa.get(k)) : (h = new f.ei(c, k, h), k = h + "", h = new f.Za(h));
                !e[k] && h && (e.push(h), e[k] = 1)
            }
            return e
        }, Kl: function (a) {
            for (var b = a.length - 1; 0 <= b; b -= 1) {
                var c = a[b];
                if (c.length) {
                    if (this.q.xu) {
                        for (var d = [], e = c.length - 1; 0 <= e; e -= 1) {
                            var g = c[e], h = g.ha;
                            this.q.j.sm.rw(h.x, h.y, h.z) ? d.push(c[e]) : (this.wa.set(g.key,
                                g), g.loaded = !0, g.status = "loaded", g.ta = !0, g.Ja = {})
                        }
                        c = d;
                        a[b] = d;
                        if (0 == d.length) continue
                    }
                    if (this.Og) {
                        if (this.j.Dw) break;
                        d = c[0].ha.z;
                        18 < d && (c = this.hW(c, d));
                        this.Vp(c, this.Sh ? 1 : 0);
                        for (g = e = 0; e < c.length;) this.OH(c.slice(50 * g, 50 * g + 50), d), e += 50, g += 1
                    } else {
                        var k = this, d = function () {
                            var a = c.length;
                            return function () {
                                if (0 === --a) {
                                    var b = {id: k.j.K.id, key: "rb", index: 0};
                                    f.od.Hd.end(b);
                                    f.od.Hd.end(f.extend(b, {index: 1}))
                                }
                            }
                        }();
                        this.Vp(c);
                        this.Ll += c.length;
                        for (e = c.length - 1; 0 <= e; e -= 1) this.An(c[e], this.Fi, d)
                    }
                }
            }
        }, ln: function (a,
                         b) {
            var c = this.wa.get(a + "");
            c || b || (c = new f.Za(a.Db()));
            return c
        }, Bs: function (a, b) {
            return this.Kc * Math.pow(2, a - b)
        }, zt: function (a) {
            a.vn && this.Fi.MQ(a.vn);
            a.RA = !1;
            a.loaded = !1
        }, Qo: function (a, b) {
            var c = this.lb, d = a.vc.x, e = a.vc.y, g = a.nb.x, h = a.nb.y;
            new f.I(0, 0);
            var k = this.Bs(20, c);
            b && (g = Math.max(b[0], g) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new f.I(Math.floor(b[0] / k), Math.floor(b[1] / k)));
            d /= k;
            e /= k;
            d = {
                Md: 0 === d % 1 ? d - 1 : Math.floor(d), ud: 0 === e % 1 ? e - 1 : Math.floor(e), he: Math.floor(g /
                    k), vd: Math.floor(h / k)
            };
            d.LI = d.Md - d.he + 1;
            d.CU = d.ud - d.vd + 1;
            d.z = c;
            d.P = this.P * Math.pow(2, this.zoom - c);
            d.eH = Math.ceil(d.LI / 2);
            return d
        }, vp: function (a, b, c) {
            return b < a.he || b > a.Md || c < a.vd || c > a.ud ? !1 : !0
        }, Vp: function (a, b) {
            if (a.length) {
                var c = this.Ua.cc(this.Kc << 20 - a[0].ha.z), d = Math.floor(c.x), e = Math.floor(c.y);
                a.sort(function (a, c) {
                    var k = a.ha, l = c.ha, m = k.x - d, k = k.y - e, n = l.x - d, l = l.y - e;
                    return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
                })
            }
        }, clear: function () {
            this.Fi.clear()
        }, Kk: function (a, b) {
            this.yf = !1;
            this.clear();
            this.dh = b.dh;
            this.bh =
                b.bh;
            this.Kc = b.Kc;
            var c = a.U;
            this.be = b.be || a.U.be;
            this.Cg = c.Cg;
            this.size = a.size;
            this.rotation = c.rotation;
            this.Ua = c.Ua;
            this.pa = a.U.pa;
            this.zoom && (this.zA = c.zoom > this.zoom ? "in" : c.zoom < this.zoom ? "out" : !1);
            this.me = a.me;
            this.Te = a.Te;
            this.zoom = c.zoom;
            this.wc = c.wc;
            this.lb = !1 === this.Og && !this.q.GS && this.q.ga ? this.wc + 1 : this.wc;
            this.Yd && this.lb > this.Yd && (this.lb = this.Yd);
            this.P = c.P;
            this.Zd = c.Zd;
            c = a.U.pa;
            this.Ee = this.Qo(c, b.G);
            this.Sk = c.JB ? this.Qo(c.JB, b.G) : null;
            var d = this.Ee, e = this.pa.xJ, g = null, g = e < this.zoom &&
                this.Sk ? this.Sk : d, h = [], k = [], l, m = [], n = [], p = [], q = new f.ei(0, 0, 0), r, t = this.zoom,
                n = this.qm || "", u = {}, x = {}, w, s, B, z, y, X;
            this.sc = 1E6 * Math.random() << 0;
            for (r = n.length - 1; 0 <= r; r -= 1) if (l = n[r], !(l.wq < b.opacity)) if (q.z = l.ha.z, q.x = l.ha.x, q.y = l.ha.y, q.z === this.lb) u[q + ""] |= 16; else if (q.z < this.lb) {
                if (u[q + ""] |= 64, this.dh) for (z = this.lb - q.z, w = Math.max(d.he, q.x << z), t = Math.min(d.Md, (q.x + 1 << z) - 1), s = Math.max(d.vd, q.y << z), B = Math.min(d.ud, (q.y + 1 << z) - 1), q.z = this.lb, z = w; z <= t; z += 1) for (q.x = z, y = s; y <= B; y += 1) q.y = y, X = q + "", u[X] |= 32,
                    x[X] = x[X] ? Math.max(l.ha.z, x[X]) : l.ha.z
            } else if (this.bh) for (w = 1; q.z >= this.lb;) {
                u[q + ""] |= w;
                w = q.x >> 1;
                s = q.y >> 1;
                t = w << 1;
                B = s << 1;
                l = 0;
                for (z = 2; 0 < z; z -= 1) for (q.x = t + z, y = 2; 0 < y; y -= 1) q.y = B + y, u[q + ""] & 5 && (l += 1);
                q.z -= 1;
                q.x = w;
                q.y = s;
                w = 4 === l ? 4 : 2
            }
            n = [];
            q.z = this.lb;
            r = !0;
            this.wa.TQ();
            for (z = g.he; z <= g.Md; z += 1) for (q.x = z, y = g.vd; y <= g.ud; y += 1) q.y = y, this.wa.uT("" + q), l = this.ln(q), w = !1, l.ta ? (l.sc = this.sc, this.vp(d, z, y) && (n.push(l), this.hi && (l.Wb !== this.Wb || 1 > l.wq) && (w = !0))) : (r = !1, this.vp(d, z, y) && (w = !0), l.status || this.wc !== e || this.Sk &&
            !this.vp(this.Sk, z, y) || m.push(l)), w && p.push(l);
            r ? (this.dv || (this.dv = !0), this.q.Aa || (l = {
                key: "rb",
                index: 1,
                id: this.j.K.id
            }, this.q.tn && (l.key = "rl"), f.od.Hd.end(l), f.od.Hd.push({
                key: "ftc",
                gm: n.length,
                id: this.j.K.id
            }))) : this.q.Aa = !1;
            this.yf = r;
            n.length && this.dv && (h.push(n), n.yf = r);
            k.push(m);
            e = !1;
            if (this.bh) {
                p = p.slice(0);
                g = [];
                for (r = p.length - 1; 0 <= r; r -= 1) l = p[r], u[l.key] & 4 || g.push(l);
                l = b.$c[1];
                for (t = this.lb + 1; p.length && t <= l; t += 1) {
                    n = [];
                    m = p;
                    p = [];
                    q.z = t;
                    for (r = m.length - 1; 0 <= r; r -= 1) if (z = m[r], w = u[z.key], w & 7) for (w =
                                                                                                       z.ha.x << 1, s = z.ha.y << 1, z = 1; 0 <= z; z -= 1) for (q.x = w + z, y = 1; 0 <= y; y -= 1) q.y = s + y, X = q + "", B = this.wa.Jn(X), u[X] & 5 && B && B.ta ? (B.au = !0, B.sc = this.sc, n.push(B)) : p.push(new f.Za(q.Db(), ""));
                    n.length && (e = !0, h.push(n))
                }
                p = g
            }
            if (!e && this.dh) for (z = !h.length || this.Sh ? b.$c[0] : Math.max(b.$c[0], this.lb - 2), Math.max(z, this.lb - this.r1), t = this.lb - 1; p.length && t >= z; t -= 1) {
                n = [];
                y = {};
                m = p;
                p = [];
                for (r = m.length - 1; 0 <= r; r -= 1) l = m[r], q.z = t, q.x = l.ha.x >> 1, q.y = l.ha.y >> 1, l = this.ln(q), y[l.key] || (y[l.key] = 1, w = !1, l.ta && (!this.z3 || u[l.key] & 64) ? (q.x = Math.min(d.Md,
                    Math.max(d.he, q.x << this.lb - t)), q.y = Math.min(d.ud, Math.max(d.vd, q.y << this.lb - t)), q.z = this.lb, X = q + "", "number" === typeof x[X] && l.ha.z > x[X] ? w = !0 : l.au = !0, l.sc = this.sc, n.push(l)) : w = !0, w && p.push(l));
                n.length && h.push(n)
            }
            this.Cp = this.Ll = 0;
            this.Kl(k, c);
            this.bi = h;
            this.q.set("tiles", h)
        }, wba: function () {
            if (!this.Og) {
                for (var a = this.Ee.Md + 1, b = this.Ee.ud + 1, c = this.Ee.he - 1, d = this.Ee.vd - 1, e, g = [], h = c; h <= a; h += 1) for (var k = d; k <= b; k += 1) if (h === c || h === a || k === d || k === b) e = new f.ei(this.wc, h, k), this.wa.Jn(void 0) || (e = this.ln(e),
                    g.push(e));
                this.Kl([g])
            }
        }
    });
    f.R.kd.xh = f.R.xh.extend({
        C: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Zk = 120;
            this.Og = !1;
            this.Pe();
            this.Yd = a.Yd
        }, Kg: function () {
            return this.pb
        }, Pe: function () {
            this.pb = document.createElement("div");
            this.pb.className = this.q.oa.get("className") || "amap-layer";
            this.ep = document.createDocumentFragment()
        }, Pp: function (a) {
            var b = Math.pow(2, a.U.zoom - this.Od), c = a.U.Ua.Sa(this.wn).cc(this.qh);
            this.transform = {translate: this.transform.translate.add(c), scale: b, rotate: 0};
            this.Ua = a.U.Ua
        }, vF: function (a,
                         b) {
            if (!this.la || 3E4 < Math.abs(this.Ua.x - this.la.x) / this.P || 3E4 < Math.abs(this.Ua.y - this.la.y) / this.P) this.la = this.Ua;
            this.Od = this.wc;
            this.qh = this.Zd;
            this.ph = !1;
            this.currentTime = +new Date;
            this.aK = b.aK;
            var c = this.Ee;
            this.hi = this.Zk && b.ez;
            var d = this.bi, e = 256 * c.LI, c = 256 * c.CU;
            this.me = this.zoom << 0 !== this.zoom;
            var g = this.Ua.Sa(this.la);
            g.x < -f.a.Ya / 2 && (g.x += f.a.Ya);
            g.x > f.a.Ya / 2 && (g.x -= f.a.Ya);
            this.GF = g.cc(this.Zd);
            return [d, e, c, b]
        }, ss: function (a, b) {
            var c = this.vF(a, b);
            this.On.apply(this, c);
            this.Gd(a);
            this.yf &&
            !this.q.Aa && (c = this.q, f.od.Hd.end({
                id: this.j.K.id,
                key: "rb",
                index: 2
            }), c.Aa = !0, c.Gc ? c.da("renderComplete") : (c.Gc = !0, c.da("complete")))
        }, Xb: function (a, b) {
            this.Vi = a.Vi;
            this.Te = a.Te;
            this.Kk(a, b);
            this.wn && f.l.gh && (a.me || a.Te) ? this.Pp(a, b) : this.ss(a, b);
            this.wn = this.Ua;
            this.ph && this.set("display", 0)
        }, Op: function () {
            for (var a = this.pb.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].Wb !== this.Wb && this.pb.removeChild(a[b])
        }, IA: function (a, b) {
            return a.vd === b.vd && a.he === b.he && a.ud === b.ud && a.Md === b.Md
        }, On: function (a) {
            var b =
                this.Wb;
            this.Wb += 1;
            var c = !1, d, e, g;
            e = !1;
            var h = [];
            this.la.x - this.Ua.x < -f.a.Ya / 2 ? this.la = new f.I(this.la.x + f.a.Ya, this.la.y) : this.la.x - this.Ua.x > f.a.Ya / 2 && (this.la = new f.I(this.la.x - f.a.Ya, this.la.y));
            for (d = a.length - 1; 0 <= d; d -= 1) if (g = a[d], g.length) {
                e = g[0].ha.z;
                for (var k, l, m = this.Bs(this.wc, e), n = g.length - 1; 0 <= n; n -= 1) {
                    l = g[n];
                    this.WU(l);
                    if (!l.Lc && this.la === l.la && l.Od === this.Od) {
                        var p = l.nc;
                        if (p && p.parentNode === this.pb && 1 === l.wq) {
                            h.push(l);
                            p.Wb = this.Wb;
                            l.Wb = this.Wb;
                            continue
                        }
                    }
                    l.la = this.la;
                    l.Od = this.Od;
                    k = l.ha;
                    var c = !0, q = (new f.I((k.x << 20 - e) * this.Kc, (k.y << 20 - e) * this.Kc)).Sa(this.la),
                        q = q.cc(this.Zd);
                    q.x = Math.floor(q.x);
                    q.y = Math.floor(q.y);
                    var r = 1;
                    if (!l.mM || this.sL && l.Wb !== b) l.mM = this.currentTime;
                    this.hi && !l.au ? (p = Math.max(0, Math.abs(k.z - this.zoom) - 1), r = Math.min(1, (this.currentTime - l.mM) / (1 / Math.pow(1.32, p) * this.Zk)), 1 !== r && (this.ph = !0)) : l.au = !1;
                    l.Wb = this.Wb;
                    l.wq = r;
                    l.ta ? (p = l.nc, !p && l.Lc && l.Lc.nc && (p = l.Lc.nc), 0 !== r && p && (this.UR(p, q.x, q.y, m, m, r, k.z), p.parentNode !== this.pb && (f.l.Mg && "overlayer" === this.q.get("type") &&
                    (p.style.display = "none"), this.ep.appendChild(p)), p.Wb = this.Wb, l.wc = this.wc, h.push(l))) : l.sc = null
                }
                e = !0
            }
            1 < a.length && (this.ph = !0);
            this.qm = h;
            this.Op();
            this.pb.appendChild(this.ep);
            return c || !e
        }, WU: function () {
        }, Gd: function () {
            this.transform = {translate: this.GF, scale: Math.pow(2, this.zoom - this.wc), rotate: 0}
        }
    });
    window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.WF = function (a, b, c, d, e) {
        "undefined" === typeof e && (e = [10, 10]);
        this.moveTo(a, b);
        var g = c - a, h = d - b, k = Math.floor(Math.sqrt(g * g + h * h));
        d = g / k;
        c = h / k;
        e.IH = 0;
        for (var l = [], g = this.wz, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.IH += e[q], l[q] = {
            kG: e[q] * d,
            lG: e[q] * c,
            Pg: h += e[q]
        }, g -= e[q], 0 > g && !p && (m = q, n = -g, p = !0);
        for (p = 0; n + p <= k;) n < e[m] ? (g = n * d, h = n * c) : (g = l[m].kG, h = l[m].lG), a += g, b += h, this.nw ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.nw = !this.nw, n = e[(m + 1) %
        e.length], m = (m + 1) % e.length;
        k -= p;
        a += k * d;
        b += k * c;
        this.nw ? this.moveTo(a, b) : this.lineTo(a, b);
        this.wz = (this.wz + p + k) % e.IH
    }, window.CanvasRenderingContext2D.prototype.O7 = function (a, b, c, d) {
        "undefined" === typeof d && (d = [10, 10]);
        var e = 2 * Math.PI * c, g = 0 >= d ? e : Math.round(e / (d[0] + d[1])), h = (d[0] + d[1]) / e * 2 * Math.PI;
        d = d[0] / e * 2 * Math.PI;
        for (e = 0; e < g; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
    });
    f.R.td.fi = f.R.xh.extend({
        C: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Pe()
        }, $G: function () {
            return this.cb.wJ
        }, Kg: function () {
            return this.pb
        }, Pe: function () {
            this.pb = document.createElement("div");
            this.pb.className = "amap-markers";
            this.cb = new f.R.td.lc(this.pb);
            this.cb.q = this.q;
            this.T.J.appendChild(this.pb)
        }, Wn: function (a, b) {
            this.ep = b.ep;
            this.Xr = b;
            this.be = a.U.be;
            this.P = a.U.P;
            this.zoom = a.U.zoom;
            this.size = a.size;
            this.pa = a.U.pa;
            this.Ol = a.P;
            this.$a = a.U.Ua;
            this.Cg = a.U.Cg;
            var c = !1;
            if (!this.la ||
                3E4 < Math.abs(this.$a.x - this.la.x) / this.P || 3E4 < Math.abs(this.$a.y - this.la.y) / this.P) c = !0;
            if (c || this.zoom << 0 !== this.zoom || this.Od !== this.zoom) this.la = this.$a, this.Od = this.zoom
        }, pp: function (a) {
            var b = a.U.pa.Hb.y * this.P;
            a = a.U.pa.Hb.x * this.P;
            return [this.$a.x - a, this.$a.y - b, this.$a.x + a, this.$a.y + b]
        }, Op: function () {
            if (this.Jf && this.Jf) for (var a in this.Jf) if (this.Jf.hasOwnProperty(a)) {
                var b = this.Jf[a];
                b.sc !== this.sc && b.aa && this.T.ji.appendChild(b.aa)
            }
        }, Xb: function (a, b) {
            this.sc = 1E6 * Math.random() << 0;
            this.Wn(a,
                b);
            this.U = a.U;
            this.size = a.size;
            var c = this.q;
            this.Kc = 256;
            var d, e;
            e = this.pp(a);
            var g = 0;
            c.Dj && (g = 50 * this.P);
            e[0] -= this.q.ae * this.P + g;
            e[1] -= this.q.we * this.P + g;
            e[2] += this.q.ae * this.P + g;
            e[3] += this.q.we * this.P + g;
            c = c.kh(e);
            for (d in c) c.hasOwnProperty(d) && (c[d].sc = this.sc, c[d].pT = this);
            this.Op(c);
            this.Wn.call(this.cb, a, b);
            this.cb.fw(c);
            this.Jf = c;
            this.Gd(a)
        }, Gd: function () {
            var a = Math.pow(2, this.zoom - this.wc);
            this.transform = {translate: this.la.Sa(this.$a).cc(this.P), scale: a, rotate: 0}
        }
    });
    f.R.td.lc = f.Z.extend({
        C: function (a) {
            this.Wh = a
        }, fw: function (a, b) {
            var c = document.createDocumentFragment(), d = b && b.vH ? null : {}, e = !0, g;
            for (g in a) if (a.hasOwnProperty(g)) {
                var h = a[g], k, l = h.get("params");
                if (h.aa) k = h.aa; else {
                    k = f.g.create("div");
                    k.className = "amap-marker";
                    var m = l.fg, n = l.AV;
                    m && k.appendChild(m);
                    n && k.appendChild(n);
                    h.aa = k;
                    h.fg = m;
                    if (n = l.title) m.title = n;
                    this.q.Dj = !0;
                    -1 === f.a.indexOf(this.q.Ue, h) && this.q.Ue.push(h);
                    h.gg = !0
                }
                var m = l.offset, n = m.x, p = m.y, q = l.textAlign, r = l.verticalAlign, m = !1;
                if ("left" !==
                    q || "top" !== r) if (k.parentNode !== this.Wh && d && (m = !0, d[g] = h, e = !1), !m) {
                    var t = f.g.Lz(h.fg), u = t[0], t = t[1];
                    switch (q) {
                        case "center":
                            n -= u / 2;
                            break;
                        case "right":
                            n -= u
                    }
                    switch (r) {
                        case "middle":
                            p -= t / 2;
                            break;
                        case "bottom":
                            p -= t
                    }
                }
                if (h.gg) u = [], r = this.Lh(h.Ba.Na), h.la = this.la, t = l.kK, q = Math.round(r[1] + p + t.y), r = Math.round(r[0] + n + t.x), u.push("top:" + q + "px"), u.push("left:" + r + "px"), u.push("z-index:" + (l.eT ? this.q.bm + 10 : l.zIndex)), f.l.Ld || u.push(f.g.kS(k, l.Xy, {
                    x: -n,
                    y: -p
                })), u.push("display:" + (l.visible ? "block" : "none") + ";"), k.style.cssText =
                    u.join(";"), (n = l.label) && n.content && (l = l.iT, r = q = 0, n.offset && (q = n.offset.y + "px", r = n.offset.x + "px"), l.style.top = q, l.style.left = r, k.appendChild(l)); else if (h.yX || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.Wh || h.la !== this.la) r = this.Lh(h.Ba.Na), h.la = this.la, t = l.kK, q = Math.round(r[1] + p + t.y), r = Math.round(r[0] + n + t.x), k.style.top = q + "px", k.style.left = r + "px";
                h.zoom = this.zoom;
                k.parentNode !== this.Wh && (f.l.Mg && f.a.iepngFix(k), c.appendChild(k), h.gg = m);
                k.eu = this.Wh
            }
            this.Wh.appendChild(c);
            e ||
            this.fw(d, {vH: !0})
        }, Lh: function (a) {
            return [(a[0] - this.la.x) / this.P, (a[1] - this.la.y) / this.P]
        }
    });
    var vc = f.w, Ec = f.l, Vb = f.Z.Yo, Fc = f.oba, ea = document, Gc = !0, Hc = [];
    Ec.ke && Hc.push("touch");
    Ec.Y || Hc.push("mouse");
    Ec.ow && (Hc.push("vectorlayer", "overlay"), Ec.$l ? Hc.push("wgl") : Hc.push("cmng", "cgl"));
    if (Fc) {
        var Ic = [], Jc = Fc.split(",");
        for (oc = 0; oc < Jc.length; oc += 1) {
            var Kc = Jc[oc];
            Vb[Kc] && Ic.push.apply(Ic, Vb[Kc]);
            Ic.push(Kc)
        }
        Hc = Hc.concat(Ic)
    }
    Hc.push("sync");
    if (Ec.Kj) {
        var Lc = !0, Mc = [], Nc = [];
        try {
            oc = 0;
            for (var Oc = Hc.length; oc < Oc; oc++) {
                var Pc = JSON.parse(localStorage.getItem("_AMap_" + Hc[oc]));
                if (Pc.version === vc.Vg) Mc.push(Pc.script), Pc.css && Nc.push(Pc.css); else {
                    Mc = void 0;
                    Lc = !1;
                    break
                }
            }
        } catch (Qc) {
            Mc = Nc = void 0, Lc = !1
        }
        if (Lc) try {
            Nc.length && Rc();
            var Sc = Mc.join(";");
            eval(Sc)
        } catch (Tc) {
            Gc = !1
        } else Gc = !1
    } else Gc = !1;
    Gc || (vc.Gv = !1, Uc());

    function Uc() {
        for (var a = vc.eb + "/maps/modules?v=" + vc.Bu + "&key=" + vc.key + "&vrs=" + vc.Vg + "&m=" + Hc.join(","), b = ea.getElementsByTagName("script"), c, d = 0; d < b.length; d += 1) if (0 === b[d].src.indexOf(vc.eb + "/maps?")) {
            c = b[d];
            break
        }
        vc.Vc || c && c.async ? Vc(a) : (ea.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function () {
            ea.getElementById("amap_plus_js") || Vc(a)
        }, 1))
    }

    function Vc(a) {
        var b = ea.createElement("script");
        b.charset = "utf-8";
        b.src = a;
        (a = ea.head || ea.getElementsByTagName("head")[0] || ea.body) && a.appendChild(b)
    }

    function Rc() {
        var a = Nc.join("\n"), b = ea.createElement("style");
        b.type = "text/css";
        -1 === vc.eb.indexOf("webapi.amap.com") && (a = a.replace(eval("/webapi.amap.com/gi"), vc.eb.split("://")[1]));
        "https" === vc.ac && (a = a.replace(eval("/http:/gi"), "https:"));
        if (b.styleSheet) {
            var c = function () {
                try {
                    b.styleSheet.cssText = a
                } catch (c) {
                }
            };
            b.styleSheet.disabled ? setTimeout(c, 10) : c()
        } else b.appendChild(ea.createTextNode(a));
        c = ea.head || ea.getElementsByTagName("head")[0];
        2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b,
            c.childNodes[1])
    };
    (typeof _cssload_ == "function") && _cssload_("logo", ".amap-logo{display:block!important;pointer-events:none;}", true)
})(["f8ffe058b8e6f5b05e8ff43ca4207393", [119.51966, 31.108647, 120.605759, 31.99082, 120.301663, 31.574729], "http://webapi.amap.com", 1, "1.4.3", null, "320200", "", true, false, false, true, "1592936021-20200522-1", false, "D", "3_20_07_07_00"])