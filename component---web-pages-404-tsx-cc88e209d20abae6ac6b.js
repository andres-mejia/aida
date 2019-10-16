(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        185: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n(237),
                i = n(238),
                r = n(67),
                c = n.n(r);
            t.default = function(e) {
                var t = e.location;
                return a.createElement(i.a, {
                    location: t,
                    addPadding: !0
                }, a.createElement(o.a, null), a.createElement("div", null, a.createElement("h1", null, "404: Page not found."), a.createElement("p", null, "You've hit the void. ", a.createElement(c.a, {
                    to: "/"
                }, "Go back."))))
            }
        },
        222: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            });
            n(223);
            var a = n(210),
                o = a.default.div.withConfig({
                    displayName: "Logo__ColoredText",
                    componentId: "sc-13c6gol-0"
                })(["font-weight:bold;color:#1890ff;display:inline-block;text-decoration:none;background-image:linear-gradient(to right,#1890ff 25%,#c4ce35 50%,#ac24e2 75%,#1890ff 100%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;background-size:300% auto;&.static{background-position:-215% center;}&.animated{@keyframes text-gradient{to{background-position:-300% center;}}animation:text-gradient 16s ease-in-out infinite;}"]),
                i = Object(a.default)(o).withConfig({
                    displayName: "Logo",
                    componentId: "sc-13c6gol-1"
                })(["text-align:center;font-size:19px;"])
        },
        237: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n(0),
                o = n(270),
                i = n.n(o);

            function r() {
                return a.createElement(i.a, {
                    key: "helmet",
                    title: "ChatBot Demo",
                    meta: [{
                        name: "description",
                        content: "Build amazing conversational experiences"
                    }, {
                        content: "aida, chatito, chatbots, ai chatbots, nlu, nlp, natural language processing, tensorflowjs, keras, named entity recognition, text classification",
                        name: "keywords"
                    }]
                }, a.createElement("link", {
                    rel: "shortcut icon",
                    href: "/favicon.ico"
                }), a.createElement("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png"
                }), a.createElement("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png"
                }), a.createElement("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png"
                }), a.createElement("link", {
                    rel: "manifest",
                    href: "/site.webmanifest"
                }), a.createElement("link", {
                    rel: "mask-icon",
                    href: "/safari-pinned-tab.svg",
                    color: "#5bbad5"
                }), a.createElement("meta", {
                    name: "msapplication-TileColor",
                    content: "#da532c"
                }), a.createElement("meta", {
                    name: "theme-color",
                    content: "#fcfcfc"
                }), a.createElement("meta", {
                    name: "viewport",
                    content: "initial-scale=1.0, width=device-width"
                }))
            }
        },
        238: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return C
            });
            n(271);
            var a = n(279),
                o = n.n(a),
                i = (n(250), n(206)),
                r = n.n(i),
                c = (n(272), n(277)),
                l = n.n(c),
                s = (n(223), n(67)),
                p = n.n(s),
                u = n(0),
                f = n(210),
                m = n(222);

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function g(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var E = l.a.Content,
                v = l.a.Footer,
                k = /^\/demo(\/.*)?$/i,
                w = /^\/overview(\/.*)?$/i,
                x = /^\/demo(\/.*)?$/i,
                j = /^\/train(\/.*)?$/i,
                O = Object(f.default)(E).withConfig({
                    displayName: "Layout__InnerContent",
                    componentId: "isjp7u-0"
                })(["> p{text-align:justify;}background:#fcfcfc;min-height:'95vh';"]),
                _ = Object(f.default)(O).withConfig({
                    displayName: "Layout__InnerPaddedContent",
                    componentId: "isjp7u-1"
                })(["padding:28px 28px 28px 52px;"]),
                C = function(e) {
                    function t() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), g(this, y(t).apply(this, arguments))
                    }
                    var n, a, i;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && b(e, t)
                    }(t, u["Component"]), n = t, (a = [{
                        key: "render",
                        value: function() {
                            var e = "-1";
                            k.test(this.props.location.pathname) ? e = "0" : j.test(this.props.location.pathname) ? e = "1" : x.test(this.props.location.pathname) ? e = "2" : w.test(this.props.location.pathname) && (e = "3");
                            var t = this.props.addPadding ? _ : O;
                            return u.createElement(l.a, {
                                style: {
                                    minHeight: "100vh"
                                }
                            }, u.createElement(l.a, {
                                style: {
                                    flexDirection: "row"
                                }
                            }, u.createElement(l.a.Sider, {
                                width: 200,
                                breakpoint: "lg",
                                collapsedWidth: "0",
                                theme: "light",
                                style: {
                                    backgroundColor: "#fcfcfc"
                                }
                            }, u.createElement(m.b, {
                                style: {
                                    textAlign: "center",
                                    width: 200,
                                    padding: 24
                                },
                                className: "static"
                            }, u.createElement(p.a, {
                                to: "/demo"
                            }, "ChatBot Demo")), u.createElement(o.a, {
                                theme: "light",
                                mode: "inline",
                                defaultSelectedKeys: [e],
                                style: {
                                    background: "#fcfcfc"
                                }
                            }, u.createElement(o.a.Item, {
                                key: "0"
                            }, /*u.createElement(p.a, {
                                to: "/demo"
                            }, u.createElement(r.a, {
                                type: "right-circle-o"
                            }), "Getting started")), u.createElement(o.a.Item, {
                                key: "1"
                            }, u.createElement(p.a, {
                                to: "/train"
                            }, u.createElement(r.a, {
                                type: "right-circle-o"
                            }), "Train assistant")), u.createElement(o.a.Item, {
                                key: "2"
                            },*/ u.createElement(p.a, {
                                to: "/demo"
                            }, u.createElement(r.a, {
                                type: "right-circle-o"
                            }), "Demo")), /*u.createElement(o.a.Item, {
                                key: "3"
                            }, u.createElement(p.a, {
                                to: "/overview"
                            }, u.createElement(r.a, {
                                type: "right-circle-o"
                            }), "Technical Overview"))), u.createElement("div", {
                                style: {
                                    padding: "24px",
                                    textAlign: "center"
                                }
                            },*/ u.createElement("a", {
                                href: "/demo",
                                title: "ChatBot Demo",
                                style: {
                                    fontSize: 26
                                }
                            }/*, u.createElement(r.a, {
                                type: "github"
                            })*/))), u.createElement(l.a, {
                                style: {
                                    padding: "24px 0 0 24px"
                                }
                            }, u.createElement(t, null, this.props.children), u.createElement(v, {
                                style: {
                                    textAlign: "center"
                                }
                            }, "@PFS Tech"))))
                        }
                    }]) && h(n.prototype, a), i && h(n, i), t
                }()
        }
    }
]);
//# sourceMappingURL=component---web-pages-404-tsx-cc88e209d20abae6ac6b.js.map