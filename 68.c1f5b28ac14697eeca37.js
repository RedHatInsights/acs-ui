(self.webpackChunkacs = self.webpackChunkacs || []).push([
  [68],
  {
    34155: (t) => {
      var e,
        n,
        r = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          e = o;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (t) {
          n = i;
        }
      })();
      var c,
        a = [],
        l = !1,
        f = -1;
      function s() {
        l &&
          c &&
          ((l = !1), c.length ? (a = c.concat(a)) : (f = -1), a.length && p());
      }
      function p() {
        if (!l) {
          var t = u(s);
          l = !0;
          for (var e = a.length; e; ) {
            for (c = a, a = []; ++f < e; ) c && c[f].run();
            (f = -1), (e = a.length);
          }
          (c = null),
            (l = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                return n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function y(t, e) {
        (this.fun = t), (this.array = e);
      }
      function d() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new y(t, e)), 1 !== a.length || l || u(p);
      }),
        (y.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = d),
        (r.addListener = d),
        (r.once = d),
        (r.off = d),
        (r.removeListener = d),
        (r.removeAllListeners = d),
        (r.emit = d),
        (r.prependListener = d),
        (r.prependOnceListener = d),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    5068: (t, e, n) => {
      "use strict";
      n.r(e),
        n.d(e, {
          ActionType: () => a,
          createPromise: () => l,
          default: () => f,
        });
      var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
      function o(t) {
        return (
          null !== t &&
          "object" === (void 0 === t ? "undefined" : r(t)) &&
          t &&
          "function" == typeof t.then
        );
      }
      var i = n(34155),
        u = function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function (t, e) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var u, c = t[Symbol.iterator]();
                  !(r = (u = c.next()).done) &&
                  (n.push(u.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (o = !0), (i = t);
              } finally {
                try {
                  !r && c.return && c.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(t, e);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        a = {
          Pending: "PENDING",
          Fulfilled: "FULFILLED",
          Rejected: "REJECTED",
        };
      function l() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = [a.Pending, a.Fulfilled, a.Rejected],
          n = t.promiseTypeSuffixes || e,
          r = t.promiseTypeDelimiter || "_";
        return function (t) {
          var e = t.dispatch;
          return function (t) {
            return function (i) {
              var a = void 0,
                l = void 0;
              if (!i.payload) return t(i);
              var f = i.payload;
              if (o(f)) a = f;
              else if (o(f.promise)) (a = f.promise), (l = f.data);
              else {
                if ("function" != typeof f && "function" != typeof f.promise)
                  return t(i);
                if (
                  ((a = f.promise ? f.promise() : f()),
                  (l = f.promise ? f.data : void 0),
                  !o(a))
                )
                  return t(c({}, i, { payload: a }));
              }
              var s = i.type,
                p = i.meta,
                y = u(n, 3),
                d = y[0],
                h = y[1],
                m = y[2],
                v = function (t, e) {
                  return c(
                    { type: [s, e ? m : h].join(r) },
                    null == t ? {} : { payload: t },
                    void 0 !== p ? { meta: p } : {},
                    e ? { error: !0 } : {}
                  );
                };
              return (
                t(
                  c(
                    { type: [s, d].join(r) },
                    void 0 !== l ? { payload: l } : {},
                    void 0 !== p ? { meta: p } : {}
                  )
                ),
                a.then(
                  function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n = v(t, !1);
                    return e(n), { value: t, action: n };
                  },
                  function (t) {
                    var n = v(t, !0);
                    throw (e(n), t);
                  }
                )
              );
            };
          };
        };
      }
      function f() {
        var t = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).dispatch;
        return "function" == typeof t
          ? l()({ dispatch: t })
          : (i && i.env, null);
      }
    },
  },
]);
//# sourceMappingURL=../sourcemaps/68.45886c289c2b28d6285c915977d8e7bf.js.map
