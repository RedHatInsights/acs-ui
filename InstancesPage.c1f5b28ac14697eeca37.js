(self.webpackChunkacs = self.webpackChunkacs || []).push([
  [996],
  {
    68577: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => p });
      var r = n(28416),
        a = n.n(r),
        l = n(45518),
        i = n(91921),
        o = n(58844),
        c = n(10550),
        u = n(3025),
        s = n(58791),
        d = n(63129),
        f = n(1148);
      const p = function (e) {
        var t = e.instance;
        return a().createElement(
          i.o,
          { isHorizontal: !0 },
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "Cloud provider"),
            a().createElement(u.b, null, (0, d.mt)(t.cloud_provider))
          ),
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "Region"),
            a().createElement(
              u.b,
              null,
              a().createElement(f.Z, { id: t.region })
            )
          ),
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "ID"),
            a().createElement(
              u.b,
              null,
              a().createElement(
                l.M5,
                {
                  hoverTip: "Copy",
                  clickTip: "Copied",
                  variant: "inline-compact",
                },
                t.id
              )
            )
          ),
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "Owner"),
            a().createElement(u.b, null, t.owner)
          ),
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "Time created"),
            a().createElement(u.b, null, (0, s.F)(t.created_at))
          ),
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "Time updated"),
            a().createElement(u.b, null, (0, s.F)(t.updated_at))
          ),
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "Central API endpoint (Sensor mTLS)"),
            a().createElement(
              u.b,
              null,
              a().createElement(
                l.M5,
                {
                  hoverTip: "Copy",
                  clickTip: "Copied",
                  variant: "inline-compact",
                },
                t.centralDataURL || "-"
              )
            )
          ),
          a().createElement(
            o.g,
            null,
            a().createElement(c.M, null, "Central instance (UI, roxctl)"),
            a().createElement(
              u.b,
              null,
              a().createElement(
                l.M5,
                {
                  hoverTip: "Copy",
                  clickTip: "Copied",
                  variant: "inline-compact",
                },
                t.centralUIURL || "-"
              )
            )
          )
        );
      };
    },
    1148: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => c });
      var r = n(28416),
        a = n.n(r),
        l = n(37067),
        i = n(63129),
        o = n(98709);
      function c(e) {
        var t = e.id,
          n = (0, l.y)({ provider: i.Zz }).data,
          c = (0, r.useMemo)(
            function () {
              return null == n
                ? void 0
                : n.items.find(function (e) {
                    return e.id === t;
                  });
            },
            [n, t]
          );
        return a().createElement("span", null, c ? (0, o.M)(c) : t);
      }
    },
    37545: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => f });
      var r = n(55140),
        a = n(9669),
        l = n.n(a),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        o = function (e, t, n, r) {
          return new (n || (n = Promise))(function (a, l) {
            function i(e) {
              try {
                c(r.next(e));
              } catch (e) {
                l(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        c = function (e, t) {
          var n,
            r,
            a,
            l,
            i = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (l = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (l[Symbol.iterator] = function () {
                return this;
              }),
            l
          );
          function o(o) {
            return function (c) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; l && ((l = 0), o[0] && (i = 0)), i; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((a = r.return) && a.call(r), 0)
                            : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (a = (a = i.trys).length > 0 && a[a.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!a || (o[1] > a[0] && o[1] < a[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < a[1]) {
                          (i.label = a[1]), (a = o);
                          break;
                        }
                        if (a && i.label < a[2]) {
                          (i.label = a[2]), i.ops.push(o);
                          break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = t.call(e, i);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, c]);
            };
          }
        },
        u = "https://api.openshift.com",
        s = "https://api.stage.openshift.com",
        d = "https://api.integration.openshift.com";
      function f() {
        var e,
          t = this,
          n = (0, r.Z)(),
          a = n.isProd,
          f = n.isBeta,
          p = s;
        return (
          a() ? (p = u) : f() && (p = d),
          (e = l().create()).interceptors.request.use(function (e) {
            return o(t, void 0, void 0, function () {
              var t, n, r;
              return c(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, insights.chrome.auth.getUser()];
                  case 1:
                    return a.sent(), [4, insights.chrome.auth.getToken()];
                  case 2:
                    return (
                      (t = a.sent()),
                      (n = e.baseURL || p),
                      (r = i(i({}, e), { url: "".concat(n).concat(e.url) })),
                      t &&
                        (r.headers = i(i({}, r.headers), {
                          Authorization: "Bearer ".concat(t),
                        })),
                      delete r.customHost,
                      [2, r]
                    );
                }
              });
            });
          }),
          e
        );
      }
    },
    37067: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => o });
      var r = n(88767),
        a = n(40489),
        l = n(37545),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        o = function (e, t) {
          var n = (0, l.Z)();
          return (0, r.useQuery)(
            (function (e) {
              return ["cloud_regions", e];
            })(e),
            function () {
              return (function (e, t) {
                var n,
                  r,
                  l,
                  i,
                  o = t.provider,
                  c = t.instanceType;
                return (
                  (n = void 0),
                  (r = void 0),
                  (i = function () {
                    var t;
                    return (function (e, t) {
                      var n,
                        r,
                        a,
                        l,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & a[0]) throw a[1];
                            return a[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (l = { next: o(0), throw: o(1), return: o(2) }),
                        "function" == typeof Symbol &&
                          (l[Symbol.iterator] = function () {
                            return this;
                          }),
                        l
                      );
                      function o(o) {
                        return function (c) {
                          return (function (o) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing."
                              );
                            for (; l && ((l = 0), o[0] && (i = 0)), i; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (a =
                                      2 & o[0]
                                        ? r.return
                                        : o[0]
                                        ? r.throw ||
                                          ((a = r.return) && a.call(r), 0)
                                        : r.next) &&
                                    !(a = a.call(r, o[1])).done)
                                )
                                  return a;
                                switch (
                                  ((r = 0),
                                  a && (o = [2 & o[0], a.value]),
                                  o[0])
                                ) {
                                  case 0:
                                  case 1:
                                    a = o;
                                    break;
                                  case 4:
                                    return i.label++, { value: o[1], done: !1 };
                                  case 5:
                                    i.label++, (r = o[1]), (o = [0]);
                                    continue;
                                  case 7:
                                    (o = i.ops.pop()), i.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (a =
                                          (a = i.trys).length > 0 &&
                                          a[a.length - 1]) ||
                                        (6 !== o[0] && 2 !== o[0])
                                      )
                                    ) {
                                      i = 0;
                                      continue;
                                    }
                                    if (
                                      3 === o[0] &&
                                      (!a || (o[1] > a[0] && o[1] < a[3]))
                                    ) {
                                      i.label = o[1];
                                      break;
                                    }
                                    if (6 === o[0] && i.label < a[1]) {
                                      (i.label = a[1]), (a = o);
                                      break;
                                    }
                                    if (a && i.label < a[2]) {
                                      (i.label = a[2]), i.ops.push(o);
                                      break;
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                o = t.call(e, i);
                              } catch (e) {
                                (o = [6, e]), (r = 0);
                              } finally {
                                n = a = 0;
                              }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                          })([o, c]);
                        };
                      }
                    })(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (t = (0, a.W)({ instance_type: c })),
                            [
                              4,
                              e.get(
                                "/api/rhacs/v1/cloud_providers/"
                                  .concat(o, "/regions?")
                                  .concat(t)
                              ),
                            ]
                          );
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  }),
                  new ((l = void 0) || (l = Promise))(function (e, t) {
                    function a(e) {
                      try {
                        c(i.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function o(e) {
                      try {
                        c(i.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function c(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof l
                            ? n
                            : new l(function (e) {
                                e(n);
                              })).then(a, o);
                    }
                    c((i = i.apply(n, r || [])).next());
                  })
                );
              })(n, e);
            },
            i({ staleTime: 1 / 0 }, t)
          );
        };
    },
    95562: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Qe });
      var r = n(28416),
        a = n.n(r),
        l = n(51663),
        i = n(99087),
        o = n(63456),
        c = n(39173),
        u = n(52643),
        s = n(32588),
        d = n(32203),
        f = n(9947),
        p = n(67880),
        m = n(38424),
        v = n(75106),
        h = n(80315),
        b = n(7065),
        y = n(61494),
        g = n(37619),
        E = n(84812),
        w = n(39841),
        S = n(1595),
        k = n(73337),
        C = n(51630),
        x = n(4576),
        T = n(81196),
        P = n(75521),
        O = n(46684),
        _ = n(59010),
        Z = n(76473),
        R = n(80810);
      var N = n(88767),
        A = n(40489),
        I = n(37545),
        D = function (e, t) {
          var n,
            r,
            a,
            l,
            i = t.query;
          return (
            (n = void 0),
            (r = void 0),
            (l = function () {
              var t;
              return (function (e, t) {
                var n,
                  r,
                  a,
                  l,
                  i = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (l = { next: o(0), throw: o(1), return: o(2) }),
                  "function" == typeof Symbol &&
                    (l[Symbol.iterator] = function () {
                      return this;
                    }),
                  l
                );
                function o(o) {
                  return function (c) {
                    return (function (o) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; l && ((l = 0), o[0] && (i = 0)), i; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & o[0]
                                  ? r.return
                                  : o[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, o[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                          ) {
                            case 0:
                            case 1:
                              a = o;
                              break;
                            case 4:
                              return i.label++, { value: o[1], done: !1 };
                            case 5:
                              i.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = i.ops.pop()), i.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = i.trys).length > 0 &&
                                    a[a.length - 1]) ||
                                  (6 !== o[0] && 2 !== o[0])
                                )
                              ) {
                                i = 0;
                                continue;
                              }
                              if (
                                3 === o[0] &&
                                (!a || (o[1] > a[0] && o[1] < a[3]))
                              ) {
                                i.label = o[1];
                                break;
                              }
                              if (6 === o[0] && i.label < a[1]) {
                                (i.label = a[1]), (a = o);
                                break;
                              }
                              if (a && i.label < a[2]) {
                                (i.label = a[2]), i.ops.push(o);
                                break;
                              }
                              a[2] && i.ops.pop(), i.trys.pop();
                              continue;
                          }
                          o = t.call(e, i);
                        } catch (e) {
                          (o = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, c]);
                  };
                }
              })(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = (0, A.W)(i)),
                      [4, e.get("/api/rhacs/v1/centrals?".concat(t))]
                    );
                  case 1:
                    return [2, n.sent().data];
                }
              });
            }),
            new ((a = void 0) || (a = Promise))(function (e, t) {
              function i(e) {
                try {
                  c(l.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  c(l.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function c(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof a
                      ? n
                      : new a(function (e) {
                          e(n);
                        })).then(i, o);
              }
              c((l = l.apply(n, r || [])).next());
            })
          );
        },
        M = function (e) {
          return (
            (t = void 0),
            (n = void 0),
            (a = function () {
              return (function (e, t) {
                var n,
                  r,
                  a,
                  l,
                  i = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (l = { next: o(0), throw: o(1), return: o(2) }),
                  "function" == typeof Symbol &&
                    (l[Symbol.iterator] = function () {
                      return this;
                    }),
                  l
                );
                function o(o) {
                  return function (c) {
                    return (function (o) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; l && ((l = 0), o[0] && (i = 0)), i; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & o[0]
                                  ? r.return
                                  : o[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, o[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                          ) {
                            case 0:
                            case 1:
                              a = o;
                              break;
                            case 4:
                              return i.label++, { value: o[1], done: !1 };
                            case 5:
                              i.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = i.ops.pop()), i.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = i.trys).length > 0 &&
                                    a[a.length - 1]) ||
                                  (6 !== o[0] && 2 !== o[0])
                                )
                              ) {
                                i = 0;
                                continue;
                              }
                              if (
                                3 === o[0] &&
                                (!a || (o[1] > a[0] && o[1] < a[3]))
                              ) {
                                i.label = o[1];
                                break;
                              }
                              if (6 === o[0] && i.label < a[1]) {
                                (i.label = a[1]), (a = o);
                                break;
                              }
                              if (a && i.label < a[2]) {
                                (i.label = a[2]), i.ops.push(o);
                                break;
                              }
                              a[2] && i.ops.pop(), i.trys.pop();
                              continue;
                          }
                          o = t.call(e, i);
                        } catch (e) {
                          (o = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, c]);
                  };
                }
              })(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, e.get("/api/rhacs/v1/cloud_accounts")];
                  case 1:
                    return [2, t.sent().data];
                }
              });
            }),
            new ((r = void 0) || (r = Promise))(function (e, l) {
              function i(e) {
                try {
                  c(a.next(e));
                } catch (e) {
                  l(e);
                }
              }
              function o(e) {
                try {
                  c(a.throw(e));
                } catch (e) {
                  l(e);
                }
              }
              function c(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof r
                      ? n
                      : new r(function (e) {
                          e(n);
                        })).then(i, o);
              }
              c((a = a.apply(t, n || [])).next());
            })
          );
        },
        z = n(55140),
        q = n(34155);
      const L = function () {
        var e = (0, z.Z)().analytics;
        return {
          analyticsTrack: function (t) {
            localStorage.getItem("chrome:analytics:dev"),
              console.log("DEBUG"),
              console.log("process.env", q.env),
              e.track(t);
          },
        };
      };
      var F = n(41448),
        j = n(83115),
        G = n(59775),
        $ = n(87828),
        B = n(36621),
        Q = n(2628),
        U = n(7713),
        W = n(92607),
        H = n(27730),
        X = n(47189),
        V = n(15790);
      const J = function (e) {
        var t = e.toggleIcon,
          n = e.id,
          l = e.value,
          i = e.handleSelect,
          o = e.isDisabled,
          c = void 0 !== o && o,
          u = e.children,
          s = e.direction,
          d = void 0 === s ? "down" : s,
          f = e.isCreatable,
          p = void 0 !== f && f,
          m = e.variant,
          v = void 0 === m ? null : m,
          h = e.placeholderText,
          b = void 0 === h ? "" : h,
          y = e.menuAppendTo,
          g = void 0 === y ? void 0 : y,
          E = (0, r.useState)(!1),
          w = E[0],
          S = E[1],
          k = "typeahead" === v ? X.TM.typeahead : X.TM.single;
        return a().createElement(
          V.P,
          {
            variant: k,
            toggleIcon: t,
            id: n,
            isDisabled: c,
            isOpen: w,
            onSelect: function (e, t) {
              S(!1), i(n, t);
            },
            onToggle: function (e, t) {
              return S(t);
            },
            selections: l,
            direction: d,
            isCreatable: p,
            placeholderText: b,
            toggleId: n,
            menuAppendTo: g,
          },
          u
        );
      };
      var K = n(37067),
        Y = n(63129),
        ee = n(98709),
        te = function () {
          return (
            (te =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            te.apply(this, arguments)
          );
        },
        ne = {
          name: "",
          cloud_provider: Y.Zz,
          region: Y.LX,
          availabilityZones: "multi",
          cloud_account_id: "",
        };
      const re = function (e) {
        var t = e.isOpen,
          n = e.onClose,
          l = e.onRequestCreate,
          i = e.cloudAccountIds,
          o = (0, r.useState)(null),
          c = o[0],
          u = o[1],
          d = (0, r.useState)(ne),
          f = d[0],
          p = d[1],
          m = (0, r.useState)(!1),
          v = m[0],
          h = m[1],
          b = L().analyticsTrack;
        (0, r.useEffect)(
          function () {
            "" === f.cloud_account_id &&
              1 === i.length &&
              p(function (e) {
                return te(te({}, e), { cloud_account_id: i[0] });
              });
          },
          [i]
        );
        var y = (0, K.y)({ provider: Y.Zz }),
          g = y.data,
          E = y.isFetching,
          w = (0, r.useMemo)(
            function () {
              return (null == g ? void 0 : g.items) || [];
            },
            [g]
          ),
          S = (0, r.useMemo)(
            function () {
              return w.filter(function (e) {
                return e.enabled;
              });
            },
            [w]
          );
        function k() {
          u(null), p(ne), h(!1), n();
        }
        return a().createElement(
          U.u,
          {
            variant: U.v.small,
            title: "Create ACS instance",
            isOpen: t,
            onClose: k,
            actions: [
              a().createElement(
                s.zx,
                {
                  key: "createInstance",
                  variant: "primary",
                  onClick: function () {
                    return (
                      (e = this),
                      (t = void 0),
                      (a = function () {
                        var e, t;
                        return (function (e, t) {
                          var n,
                            r,
                            a,
                            l,
                            i = {
                              label: 0,
                              sent: function () {
                                if (1 & a[0]) throw a[1];
                                return a[1];
                              },
                              trys: [],
                              ops: [],
                            };
                          return (
                            (l = { next: o(0), throw: o(1), return: o(2) }),
                            "function" == typeof Symbol &&
                              (l[Symbol.iterator] = function () {
                                return this;
                              }),
                            l
                          );
                          function o(o) {
                            return function (c) {
                              return (function (o) {
                                if (n)
                                  throw new TypeError(
                                    "Generator is already executing."
                                  );
                                for (; l && ((l = 0), o[0] && (i = 0)), i; )
                                  try {
                                    if (
                                      ((n = 1),
                                      r &&
                                        (a =
                                          2 & o[0]
                                            ? r.return
                                            : o[0]
                                            ? r.throw ||
                                              ((a = r.return) && a.call(r), 0)
                                            : r.next) &&
                                        !(a = a.call(r, o[1])).done)
                                    )
                                      return a;
                                    switch (
                                      ((r = 0),
                                      a && (o = [2 & o[0], a.value]),
                                      o[0])
                                    ) {
                                      case 0:
                                      case 1:
                                        a = o;
                                        break;
                                      case 4:
                                        return (
                                          i.label++, { value: o[1], done: !1 }
                                        );
                                      case 5:
                                        i.label++, (r = o[1]), (o = [0]);
                                        continue;
                                      case 7:
                                        (o = i.ops.pop()), i.trys.pop();
                                        continue;
                                      default:
                                        if (
                                          !(
                                            (a =
                                              (a = i.trys).length > 0 &&
                                              a[a.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0])
                                          )
                                        ) {
                                          i = 0;
                                          continue;
                                        }
                                        if (
                                          3 === o[0] &&
                                          (!a || (o[1] > a[0] && o[1] < a[3]))
                                        ) {
                                          i.label = o[1];
                                          break;
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                          (i.label = a[1]), (a = o);
                                          break;
                                        }
                                        if (a && i.label < a[2]) {
                                          (i.label = a[2]), i.ops.push(o);
                                          break;
                                        }
                                        a[2] && i.ops.pop(), i.trys.pop();
                                        continue;
                                    }
                                    o = t.call(e, i);
                                  } catch (e) {
                                    (o = [6, e]), (r = 0);
                                  } finally {
                                    n = a = 0;
                                  }
                                if (5 & o[0]) throw o[1];
                                return {
                                  value: o[0] ? o[1] : void 0,
                                  done: !0,
                                };
                              })([o, c]);
                            };
                          }
                        })(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (
                                b("create-instance-form-submitted"),
                                h(!0),
                                [4, l(f)]
                              );
                            case 1:
                              return (
                                (e = r.sent()),
                                h(!1),
                                e instanceof Error
                                  ? ((t = e.response.data.reason), u(t))
                                  : (p(ne), n()),
                                [2]
                              );
                          }
                        });
                      }),
                      new ((r = void 0) || (r = Promise))(function (n, l) {
                        function i(e) {
                          try {
                            c(a.next(e));
                          } catch (e) {
                            l(e);
                          }
                        }
                        function o(e) {
                          try {
                            c(a.throw(e));
                          } catch (e) {
                            l(e);
                          }
                        }
                        function c(e) {
                          var t;
                          e.done
                            ? n(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(i, o);
                        }
                        c((a = a.apply(e, t || [])).next());
                      })
                    );
                  },
                  isLoading: v,
                  isDisabled:
                    v ||
                    !(null == f ? void 0 : f.name) ||
                    (i.length > 1 &&
                      !(null == f ? void 0 : f.cloud_account_id)),
                },
                "Create instance"
              ),
              a().createElement(
                s.zx,
                { key: "cancel", variant: "link", onClick: k, isDisabled: v },
                "Cancel"
              ),
            ],
          },
          c &&
            a().createElement(
              "div",
              { className: "pf-v5-u-mb-md" },
              a().createElement(F.b, { variant: "danger", title: c })
            ),
          a().createElement(
            j.l,
            null,
            a().createElement(
              G.c,
              { label: "Name", isRequired: !0, fieldId: "name" },
              a().createElement(W.oi, {
                isRequired: !0,
                type: "text",
                id: "name",
                name: "name",
                value: f.name,
                onChange: function (e, t) {
                  return (function (e) {
                    p(function (t) {
                      return te(te({}, t), { name: e });
                    });
                  })(t);
                },
              }),
              a().createElement(
                $.Q,
                null,
                a().createElement(
                  B.p,
                  null,
                  a().createElement(
                    Q.u,
                    null,
                    "Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."
                  )
                )
              )
            ),
            a().createElement(
              G.c,
              {
                label: "AWS account number",
                isRequired: i.length > 1,
                fieldId: "cloud_account_id",
              },
              a().createElement(
                J,
                {
                  id: "cloud_account_id",
                  value: f.cloud_account_id,
                  handleSelect: function (e, t) {
                    p(function (e) {
                      return te(te({}, e), { cloud_account_id: t });
                    });
                  },
                  placeholderText: "Select an AWS Account",
                  menuAppendTo: "parent",
                  isDisabled: i.length <= 1,
                },
                i.map(function (e) {
                  return a().createElement(H.$, { key: e, value: e }, e);
                })
              ),
              a().createElement(
                $.Q,
                null,
                a().createElement(
                  B.p,
                  null,
                  a().createElement(
                    Q.u,
                    null,
                    0 === i.length
                      ? "This will be attributed to your Red Hat subscription."
                      : 1 === i.length
                      ? "The AWS account indicated, which is linked to your Red Hat organization, will be used for billing purposes."
                      : i.length > 1
                      ? "Please select one of the AWS accounts for billing purposes."
                      : void 0
                  )
                )
              )
            ),
            a().createElement(
              G.c,
              { label: "Cloud region", isRequired: !0, fieldId: "region" },
              a().createElement(
                J,
                {
                  id: "region",
                  isDisabled: E,
                  value: f.region,
                  handleSelect: function (e, t) {
                    p(function (e) {
                      return te(te({}, e), { region: t });
                    });
                  },
                  menuAppendTo: function () {
                    return document.body;
                  },
                },
                a().createElement(
                  H.$,
                  { value: "", isPlaceholder: !0, isDisabled: !0 },
                  "Choose a region"
                ),
                S.map(function (e) {
                  return a().createElement(
                    H.$,
                    { key: e.id, value: e.id },
                    (0, ee.M)(e)
                  );
                })
              )
            )
          )
        );
      };
      const ae = function (e) {
        var t = e.isOpen,
          n = e.instance,
          l = e.onRequestDelete,
          i = e.onClose,
          o = (0, r.useState)(""),
          c = o[0],
          u = o[1],
          d = (0, r.useState)(!1),
          f = d[0],
          p = d[1],
          m = (0, r.useState)(""),
          v = m[0],
          h = m[1],
          b = L().analyticsTrack;
        function y() {
          return (
            (e = this),
            (t = void 0),
            (a = function () {
              var e;
              return (function (e, t) {
                var n,
                  r,
                  a,
                  l,
                  i = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (l = { next: o(0), throw: o(1), return: o(2) }),
                  "function" == typeof Symbol &&
                    (l[Symbol.iterator] = function () {
                      return this;
                    }),
                  l
                );
                function o(o) {
                  return function (c) {
                    return (function (o) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; l && ((l = 0), o[0] && (i = 0)), i; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & o[0]
                                  ? r.return
                                  : o[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, o[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                          ) {
                            case 0:
                            case 1:
                              a = o;
                              break;
                            case 4:
                              return i.label++, { value: o[1], done: !1 };
                            case 5:
                              i.label++, (r = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = i.ops.pop()), i.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = i.trys).length > 0 &&
                                    a[a.length - 1]) ||
                                  (6 !== o[0] && 2 !== o[0])
                                )
                              ) {
                                i = 0;
                                continue;
                              }
                              if (
                                3 === o[0] &&
                                (!a || (o[1] > a[0] && o[1] < a[3]))
                              ) {
                                i.label = o[1];
                                break;
                              }
                              if (6 === o[0] && i.label < a[1]) {
                                (i.label = a[1]), (a = o);
                                break;
                              }
                              if (a && i.label < a[2]) {
                                (i.label = a[2]), i.ops.push(o);
                                break;
                              }
                              a[2] && i.ops.pop(), i.trys.pop();
                              continue;
                          }
                          o = t.call(e, i);
                        } catch (e) {
                          (o = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return { value: o[0] ? o[1] : void 0, done: !0 };
                    })([o, c]);
                  };
                }
              })(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      p(!0),
                      h(""),
                      b("delete-instance-form-submitted"),
                      [4, l(n.id)]
                    );
                  case 1:
                    return (
                      (e = t.sent()),
                      p(!1),
                      e.isAxiosError
                        ? h(
                            e.message ||
                              "An unanticipated error occurred. Please try again. If this error persists, please contact support."
                          )
                        : (u(""), i()),
                      [2]
                    );
                }
              });
            }),
            new ((r = void 0) || (r = Promise))(function (n, l) {
              function i(e) {
                try {
                  c(a.next(e));
                } catch (e) {
                  l(e);
                }
              }
              function o(e) {
                try {
                  c(a.throw(e));
                } catch (e) {
                  l(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(i, o);
              }
              c((a = a.apply(e, t || [])).next());
            })
          );
        }
        function g() {
          return n.name === c;
        }
        return n
          ? a().createElement(
              U.u,
              {
                variant: U.v.small,
                title: "Delete instance?",
                isOpen: t,
                onClose: i,
                actions: [
                  a().createElement(
                    s.zx,
                    {
                      key: "createInstance",
                      variant: "danger",
                      onClick: y,
                      isLoading: f,
                      isDisabled: f || !g(),
                    },
                    "Delete instance"
                  ),
                  a().createElement(
                    s.zx,
                    {
                      key: "cancel",
                      variant: "link",
                      onClick: i,
                      isDisabled: f,
                    },
                    "Cancel"
                  ),
                ],
              },
              a().createElement(
                "div",
                { className: "pf-v5-u-pb-md" },
                a().createElement(
                  "div",
                  null,
                  "This will permanently delete",
                  " ",
                  a().createElement(
                    "span",
                    { className: "pf-v5-u-font-weight-bold" },
                    n.name
                  ),
                  "."
                ),
                a().createElement("div", null, "This action cannot be undone.")
              ),
              a().createElement(
                j.l,
                {
                  onSubmit: function (e) {
                    e.preventDefault(), g() && y();
                  },
                },
                a().createElement(
                  G.c,
                  {
                    label: "Confirmation",
                    isRequired: !0,
                    fieldId: "confirmationInstanceName",
                  },
                  a().createElement(W.oi, {
                    isRequired: !0,
                    type: "text",
                    id: "confirmationInstanceName",
                    name: "confirmationInstanceName",
                    value: c,
                    onChange: function (e, t) {
                      return u(t);
                    },
                  })
                ),
                a().createElement(
                  B.p,
                  null,
                  a().createElement(
                    Q.u,
                    null,
                    "Type",
                    " ",
                    a().createElement(
                      "span",
                      { className: "pf-v5-u-font-weight-bold" },
                      n.name
                    ),
                    " to confirm."
                  )
                ),
                v.length > 0 &&
                  a().createElement(F.b, {
                    isInline: !0,
                    variant: F.U.danger,
                    title: v,
                  })
              )
            )
          : null;
      };
      var le = n(15627),
        ie = n(5436),
        oe = n(34241),
        ce = n(16941),
        ue = n(49323),
        se = n(76770),
        de = n(28985),
        fe = n(16537),
        pe = n(68774),
        me = n(68340),
        ve = n(68577);
      const he = function (e) {
        var t = e.isExpanded,
          n = e.onClose,
          r = e.instance,
          l = e.children;
        return a().createElement(
          ie.dy,
          { isExpanded: t },
          a().createElement(
            oe.s,
            {
              panelContent: a().createElement(
                ce.S,
                null,
                a().createElement(
                  ue.h,
                  null,
                  a().createElement(
                    "div",
                    null,
                    a().createElement(
                      pe.D,
                      null,
                      a().createElement(me.x, { component: me.q.small }, "Name")
                    ),
                    a().createElement(
                      pe.D,
                      null,
                      a().createElement(
                        me.x,
                        { component: me.q.h2 },
                        null == r ? void 0 : r.name
                      )
                    )
                  ),
                  a().createElement(
                    se.x,
                    null,
                    a().createElement(de.c, { onClick: n })
                  )
                ),
                a().createElement(le.i, { component: "div" }),
                a().createElement(
                  fe.s,
                  null,
                  r && a().createElement(ve.Z, { instance: r })
                )
              ),
            },
            l
          )
        );
      };
      var be = n(58791),
        ye = n(68778),
        ge = n(43047),
        Ee = n(43957),
        we = n(28191),
        Se = n(92298),
        ke = {
          accepted: "Request accepted",
          preparing: "Creation pending",
          provisioning: "Creation in progress",
          ready: "Ready",
          failed: "Failed",
          deprovision: "Deprovisioning",
          deleting: "Deleting",
        },
        Ce = Object.keys(ke).map(function (e) {
          return { value: e, label: ke[e] };
        }),
        xe = {
          accepted: {
            message: ke.accepted,
            component: a().createElement(Ee.ZP, null),
          },
          preparing: {
            message: ke.preparing,
            component: a().createElement(Ee.ZP, null),
          },
          provisioning: {
            message: ke.provisioning,
            component: a().createElement(g.$, { size: "md" }),
          },
          ready: {
            message: ke.ready,
            component: a().createElement(ye.ZP, {
              className: "pf-v5-u-success-color-100",
            }),
          },
          failed: {
            message: ke.failed,
            component: a().createElement(ge.ZP, {
              className: "pf-v5-u-danger-color-100",
            }),
          },
          deprovision: {
            message: ke.deprovision,
            component: a().createElement(g.$, { size: "md" }),
          },
          deleting: {
            message: ke.deleting,
            component: a().createElement(g.$, { size: "md" }),
          },
        };
      const Te = function (e) {
        var t = e.status,
          n = xe[t] || { message: "N/A", component: null },
          r = n.message,
          l = n.component;
        return a().createElement(
          we.k,
          null,
          a().createElement(Se.B, null, l),
          a().createElement(Se.B, null, r)
        );
      };
      var Pe = n(45697),
        Oe = n.n(Pe),
        _e = n(89852),
        Ze = n(43446),
        Re = n(53988),
        Ne = n(33109),
        Ae = n(35248),
        Ie = n(76889),
        De = function () {
          return (
            (De =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            De.apply(this, arguments)
          );
        },
        Me = function (e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, a = 0, l = t.length; a < l; a++)
              (!r && a in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
          return e.concat(r || Array.prototype.slice.call(t));
        };
      function ze(e) {
        var t = e.filters,
          n = e.setFilters,
          l = (0, r.useState)("Name"),
          i = l[0],
          o = l[1],
          c = (0, r.useState)(""),
          u = c[0],
          d = c[1],
          f = (0, r.useState)(""),
          p = f[0],
          m = f[1],
          v = (0, r.useState)(!1),
          h = v[0],
          b = v[1],
          y = (0, r.useState)(!1),
          g = y[0],
          E = y[1],
          w = (0, K.y)({ provider: Y.Zz }).data,
          k = (0, r.useMemo)(
            function () {
              return (null == w ? void 0 : w.items) || [];
            },
            [w]
          );
        function C(e, t) {
          void 0 === e && (e = ""),
            void 0 === t && (t = ""),
            n(function (n) {
              var r = De({}, n),
                a = r[e.toLowerCase()].filter(function (e) {
                  return e !== t;
                });
              return (
                0 === (null == a ? void 0 : a.length)
                  ? delete r[e.toLowerCase()]
                  : (r[e.toLowerCase()] = a),
                r
              );
            });
        }
        function x(e) {
          n(function (t) {
            var n = De({}, t);
            return delete n[e.toLowerCase()], n;
          });
        }
        function T(e, t, r) {
          var a = t.target.checked;
          n(function (t) {
            var n = De({}, t),
              l = t[e] || [],
              i = a
                ? Me(Me([], l, !0), [r], !1)
                : l.filter(function (e) {
                    return e !== r;
                  });
            return 0 === i.length ? delete n[e] : (n[e] = i), n;
          });
        }
        return a().createElement(
          Re.R,
          { toggleIcon: a().createElement(Ie.ZP, null), breakpoint: "xl" },
          a().createElement(
            Ne.k,
            { variant: "filter-group" },
            a().createElement(
              S.E,
              null,
              a().createElement(
                J,
                {
                  id: "region",
                  value: i,
                  handleSelect: function (e, t) {
                    o(t);
                  },
                },
                a().createElement(H.$, { value: "Name" }, "Name"),
                a().createElement(H.$, { value: "Region" }, "Region"),
                a().createElement(H.$, { value: "Owner" }, "Owner"),
                a().createElement(H.$, { value: "Status" }, "Status")
              )
            ),
            a().createElement(
              Ae.p,
              {
                chips: t.name,
                deleteChip: C,
                deleteChipGroup: x,
                categoryName: "Name",
                className: "Name" !== i && "pf-v5-u-hidden",
              },
              a().createElement(
                S.E,
                null,
                a().createElement(
                  _e.B,
                  null,
                  a().createElement(
                    Ze.o,
                    { isFill: !0 },
                    a().createElement(W.oi, {
                      id: "filterName",
                      type: "text",
                      "aria-label": "Name",
                      placeholder: "Filter by name",
                      value: u,
                      onChange: function (e, t) {
                        return d(t);
                      },
                    })
                  ),
                  a().createElement(
                    Ze.o,
                    null,
                    a().createElement(
                      s.zx,
                      {
                        variant: "control",
                        "aria-label": "Search Name",
                        onClick: function () {
                          u &&
                            n(function (e) {
                              var t = De({}, e);
                              return (t.name = [u]), t;
                            });
                        },
                      },
                      a().createElement(R.ZP, null)
                    )
                  )
                )
              )
            ),
            a().createElement(
              Ae.p,
              {
                chips: t.region,
                deleteChip: C,
                deleteChipGroup: x,
                categoryName: "Region",
                className: "Region" !== i && "pf-v5-u-hidden",
              },
              a().createElement(
                S.E,
                null,
                a().createElement(
                  V.P,
                  {
                    variant: X.TM.checkbox,
                    "aria-label": "Region",
                    onToggle: function (e, t) {
                      return b(t);
                    },
                    onSelect: function (e, t) {
                      T("region", e, t);
                    },
                    selections: t.region,
                    isOpen: h,
                    placeholderText: "Filter by region",
                  },
                  k.map(function (e) {
                    return a().createElement(
                      H.$,
                      { key: e.id, value: e.id },
                      (0, ee.M)(e)
                    );
                  })
                )
              )
            ),
            a().createElement(
              Ae.p,
              {
                chips: t.owner,
                deleteChip: C,
                deleteChipGroup: x,
                categoryName: "Owner",
                className: "Owner" !== i && "pf-v5-u-hidden",
              },
              a().createElement(
                S.E,
                null,
                a().createElement(
                  _e.B,
                  null,
                  a().createElement(
                    Ze.o,
                    { isFill: !0 },
                    a().createElement(W.oi, {
                      id: "filterOwner",
                      type: "text",
                      "aria-label": "Owner",
                      placeholder: "Filter by owner",
                      value: p,
                      onChange: function (e, t) {
                        return m(t);
                      },
                    })
                  ),
                  a().createElement(
                    Ze.o,
                    null,
                    a().createElement(
                      s.zx,
                      {
                        variant: "control",
                        "aria-label": "Search Owner",
                        onClick: function () {
                          p &&
                            n(function (e) {
                              var t = De({}, e);
                              return (t.owner = [p]), t;
                            });
                        },
                      },
                      a().createElement(R.ZP, null)
                    )
                  )
                )
              )
            ),
            a().createElement(
              Ae.p,
              {
                chips: t.status,
                deleteChip: C,
                deleteChipGroup: x,
                categoryName: "Status",
                className: "Status" !== i && "pf-v5-u-hidden",
              },
              a().createElement(
                S.E,
                null,
                a().createElement(
                  V.P,
                  {
                    variant: X.TM.checkbox,
                    "aria-label": "Status",
                    onToggle: function (e, t) {
                      return E(t);
                    },
                    onSelect: function (e, t) {
                      T("status", e, t);
                    },
                    selections: t.status,
                    isOpen: g,
                    placeholderText: "Filter by status",
                  },
                  Ce.map(function (e) {
                    return a().createElement(
                      H.$,
                      { key: e.label, value: e.label },
                      e.label
                    );
                  })
                )
              )
            )
          )
        );
      }
      ze.propTypes = {
        filters: Oe().shape({
          name: Oe().string.isRequired,
          region: Oe().string.isRequired,
          owner: Oe().string.isRequired,
          status: Oe().string.isRequired,
        }),
        setFilters: Oe().func.isRequired,
      };
      const qe = ze;
      function Le(e, t) {
        return (
          Object.keys(e)
            .filter(function (t) {
              return e[t].length;
            })
            .map(function (n) {
              var r = e[n]
                .map(function (e) {
                  var r,
                    a,
                    l = e;
                  return (
                    "cloud_provider" === n
                      ? (l = (0, Y.xp)(e))
                      : "region" === n
                      ? (l = (0, ee.n)(e, t))
                      : "status" === n &&
                        ((r = e),
                        (l =
                          null ==
                          (a = Ce.find(function (e) {
                            return e.label === r;
                          }))
                            ? void 0
                            : a.value)),
                    "".concat(n, " = ").concat(l)
                  );
                })
                .join(" or ");
              return "(".concat(r, ")");
            })
            .join(" and ") || ""
        );
      }
      var Fe = n(56318),
        je = n(1148),
        Ge = function () {
          return (
            (Ge =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            Ge.apply(this, arguments)
          );
        },
        $e = [
          "name",
          "cloud_provider",
          "region",
          "owner",
          "status",
          "created_at",
        ],
        Be = { field: "name", direction: "asc" };
      const Qe = function () {
        var e,
          t,
          n,
          A,
          z = (0, l.useNavigate)(),
          q = L().analyticsTrack,
          F = (function () {
            var e = (0, r.useState)(1),
              t = e[0],
              n = e[1],
              a = (0, r.useState)(20),
              l = a[0],
              i = a[1];
            return {
              page: t,
              perPage: l,
              onSetPage: function (e, t) {
                n(t);
              },
              onPerPageSelect: function (e, t) {
                i(t);
              },
            };
          })(),
          j = F.page,
          G = F.perPage,
          $ = F.onSetPage,
          B = F.onPerPageSelect,
          Q = (function (e) {
            var t = e.sortFields,
              n = e.defaultSortOption,
              a = (0, r.useState)(),
              l = a[0],
              i = a[1],
              o = (null == l ? void 0 : l.field) || n.field,
              c = (null == l ? void 0 : l.direction) || n.direction,
              u = (0, r.useState)({}),
              s = u[0],
              d = u[1];
            return (
              (0, r.useEffect)(
                function () {
                  var e = t.reduce(function (e, t, n) {
                    return (e[t] = n), e;
                  }, {});
                  d(e);
                },
                [t]
              ),
              {
                sortOption: { field: o, direction: c },
                getSortParams: function (e) {
                  var t = s[e];
                  return {
                    sortBy: {
                      index: o ? s[o] : void 0,
                      direction: c,
                      defaultDirection: "desc",
                    },
                    onSort: function (t, n, r) {
                      i({ field: e, direction: r });
                    },
                    columnIndex: t,
                  };
                },
              }
            );
          })({ sortFields: $e, defaultSortOption: Be }),
          U = Q.sortOption,
          W = Q.getSortParams,
          H = (0, r.useState)({}),
          X = H[0],
          V = H[1],
          J = ((n = (0, I.Z)()),
          (0, N.useQuery)(["cloud_accounts"], function () {
            return M(n);
          })).data,
          ee =
            (null === (e = null == J ? void 0 : J.cloudAccounts) || void 0 === e
              ? void 0
              : e.map(function (e) {
                  return e.cloudAccountId;
                })) || [],
          te = (0, K.y)({ provider: Y.Zz }),
          ne = te.data,
          le = te.isFetching,
          ie = (0, r.useMemo)(
            function () {
              return (null == ne ? void 0 : ne.items) || [];
            },
            [ne]
          ),
          oe = (function (e) {
            var t = e.refetchInterval,
              n = (0, I.Z)();
            return (0, N.useQuery)(
              ["instances", e],
              function () {
                return D(n, e);
              },
              { refetchInterval: t }
            );
          })({
            query: {
              page: j,
              size: G,
              orderBy: "".concat(U.field, " ").concat(U.direction),
              search: Le(X, ie),
            },
            refetchInterval: 1e4,
          }),
          ce = oe.data,
          ue = oe.isFetching,
          se = (function () {
            var e = this,
              t = (0, N.useQueryClient)(),
              n = (0, I.Z)();
            return (0, N.useMutation)(
              function (t) {
                return (
                  (r = e),
                  (a = void 0),
                  (i = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        a,
                        l,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & a[0]) throw a[1];
                            return a[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (l = { next: o(0), throw: o(1), return: o(2) }),
                        "function" == typeof Symbol &&
                          (l[Symbol.iterator] = function () {
                            return this;
                          }),
                        l
                      );
                      function o(o) {
                        return function (c) {
                          return (function (o) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing."
                              );
                            for (; l && ((l = 0), o[0] && (i = 0)), i; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (a =
                                      2 & o[0]
                                        ? r.return
                                        : o[0]
                                        ? r.throw ||
                                          ((a = r.return) && a.call(r), 0)
                                        : r.next) &&
                                    !(a = a.call(r, o[1])).done)
                                )
                                  return a;
                                switch (
                                  ((r = 0),
                                  a && (o = [2 & o[0], a.value]),
                                  o[0])
                                ) {
                                  case 0:
                                  case 1:
                                    a = o;
                                    break;
                                  case 4:
                                    return i.label++, { value: o[1], done: !1 };
                                  case 5:
                                    i.label++, (r = o[1]), (o = [0]);
                                    continue;
                                  case 7:
                                    (o = i.ops.pop()), i.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (a =
                                          (a = i.trys).length > 0 &&
                                          a[a.length - 1]) ||
                                        (6 !== o[0] && 2 !== o[0])
                                      )
                                    ) {
                                      i = 0;
                                      continue;
                                    }
                                    if (
                                      3 === o[0] &&
                                      (!a || (o[1] > a[0] && o[1] < a[3]))
                                    ) {
                                      i.label = o[1];
                                      break;
                                    }
                                    if (6 === o[0] && i.label < a[1]) {
                                      (i.label = a[1]), (a = o);
                                      break;
                                    }
                                    if (a && i.label < a[2]) {
                                      (i.label = a[2]), i.ops.push(o);
                                      break;
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                o = t.call(e, i);
                              } catch (e) {
                                (o = [6, e]), (r = 0);
                              } finally {
                                n = a = 0;
                              }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                          })([o, c]);
                        };
                      }
                    })(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            n.post("/api/rhacs/v1/centrals?async=true", t),
                          ];
                        case 1:
                          return [2, e.sent().data];
                      }
                    });
                  }),
                  new ((l = void 0) || (l = Promise))(function (e, t) {
                    function n(e) {
                      try {
                        c(i.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function o(e) {
                      try {
                        c(i.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function c(t) {
                      var r;
                      t.done
                        ? e(t.value)
                        : ((r = t.value),
                          r instanceof l
                            ? r
                            : new l(function (e) {
                                e(r);
                              })).then(n, o);
                    }
                    c((i = i.apply(r, a || [])).next());
                  })
                );
              },
              {
                onSuccess: function () {
                  t.invalidateQueries("instances");
                },
              }
            );
          })(),
          de = (function () {
            var e = this,
              t = (0, N.useQueryClient)(),
              n = (0, I.Z)();
            return (0, N.useMutation)(
              function (t) {
                return (
                  (r = e),
                  (a = void 0),
                  (i = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        a,
                        l,
                        i = {
                          label: 0,
                          sent: function () {
                            if (1 & a[0]) throw a[1];
                            return a[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (l = { next: o(0), throw: o(1), return: o(2) }),
                        "function" == typeof Symbol &&
                          (l[Symbol.iterator] = function () {
                            return this;
                          }),
                        l
                      );
                      function o(o) {
                        return function (c) {
                          return (function (o) {
                            if (n)
                              throw new TypeError(
                                "Generator is already executing."
                              );
                            for (; l && ((l = 0), o[0] && (i = 0)), i; )
                              try {
                                if (
                                  ((n = 1),
                                  r &&
                                    (a =
                                      2 & o[0]
                                        ? r.return
                                        : o[0]
                                        ? r.throw ||
                                          ((a = r.return) && a.call(r), 0)
                                        : r.next) &&
                                    !(a = a.call(r, o[1])).done)
                                )
                                  return a;
                                switch (
                                  ((r = 0),
                                  a && (o = [2 & o[0], a.value]),
                                  o[0])
                                ) {
                                  case 0:
                                  case 1:
                                    a = o;
                                    break;
                                  case 4:
                                    return i.label++, { value: o[1], done: !1 };
                                  case 5:
                                    i.label++, (r = o[1]), (o = [0]);
                                    continue;
                                  case 7:
                                    (o = i.ops.pop()), i.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (a =
                                          (a = i.trys).length > 0 &&
                                          a[a.length - 1]) ||
                                        (6 !== o[0] && 2 !== o[0])
                                      )
                                    ) {
                                      i = 0;
                                      continue;
                                    }
                                    if (
                                      3 === o[0] &&
                                      (!a || (o[1] > a[0] && o[1] < a[3]))
                                    ) {
                                      i.label = o[1];
                                      break;
                                    }
                                    if (6 === o[0] && i.label < a[1]) {
                                      (i.label = a[1]), (a = o);
                                      break;
                                    }
                                    if (a && i.label < a[2]) {
                                      (i.label = a[2]), i.ops.push(o);
                                      break;
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                o = t.call(e, i);
                              } catch (e) {
                                (o = [6, e]), (r = 0);
                              } finally {
                                n = a = 0;
                              }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                          })([o, c]);
                        };
                      }
                    })(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            n.delete(
                              "/api/rhacs/v1/centrals/".concat(t, "?async=true")
                            ),
                          ];
                        case 1:
                          return [2, e.sent().data];
                      }
                    });
                  }),
                  new ((l = void 0) || (l = Promise))(function (e, t) {
                    function n(e) {
                      try {
                        c(i.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function o(e) {
                      try {
                        c(i.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function c(t) {
                      var r;
                      t.done
                        ? e(t.value)
                        : ((r = t.value),
                          r instanceof l
                            ? r
                            : new l(function (e) {
                                e(r);
                              })).then(n, o);
                    }
                    c((i = i.apply(r, a || [])).next());
                  })
                );
              },
              {
                onSuccess: function () {
                  t.invalidateQueries("instances");
                },
              }
            );
          })(),
          fe = (0, r.useState)(null),
          pe = fe[0],
          me = fe[1],
          ve = (0, r.useState)(null),
          ye = ve[0],
          ge = ve[1],
          Ee = (0, r.useState)(null),
          we = Ee[0],
          Se = Ee[1],
          ke = (null == ce ? void 0 : ce.items) || [],
          Ce = (ue || le) && !ce,
          xe =
            null !== (t = null == ce ? void 0 : ce.total) && void 0 !== t
              ? t
              : 0;
        function Pe() {
          q("start-create-instance-form"), me({});
        }
        function Oe() {
          V({});
        }
        return (
          (0, r.useEffect)(function () {
            var e, t;
            null ===
              (t =
                null ===
                  (e =
                    null === insights || void 0 === insights
                      ? void 0
                      : insights.chrome) || void 0 === e
                  ? void 0
                  : e.appAction) ||
              void 0 === t ||
              t.call(e, "instances-page");
          }, []),
          (A =
            0 === ke.length && 0 === Object.keys(X).length
              ? a().createElement(
                  f.u,
                  null,
                  a().createElement(p.t, {
                    titleText: "No ACS instances.",
                    icon: a().createElement(m.k, { icon: Z.ZP }),
                    headingLevel: "h4",
                  }),
                  a().createElement(v.B, null, "Create one to get started."),
                  a().createElement(
                    h.O,
                    null,
                    a().createElement(
                      b.U,
                      null,
                      a().createElement(
                        s.zx,
                        {
                          variant: "primary",
                          onClick: function () {
                            return Pe();
                          },
                        },
                        "Create ACS instance"
                      )
                    )
                  )
                )
              : a().createElement(
                  a().Fragment,
                  null,
                  a().createElement(
                    E.o,
                    { clearAllFilters: Oe },
                    a().createElement(
                      w.c,
                      null,
                      a().createElement(qe, { filters: X, setFilters: V }),
                      a().createElement(
                        S.E,
                        null,
                        a().createElement(
                          s.zx,
                          {
                            variant: "primary",
                            onClick: function () {
                              return Pe();
                            },
                          },
                          "Create ACS instance"
                        )
                      ),
                      0 !== ke.length &&
                        a().createElement(
                          S.E,
                          {
                            variant: "pagination",
                            align: { default: "alignRight" },
                          },
                          a().createElement(y.t, {
                            itemCount: xe,
                            perPage: G,
                            page: j,
                            onSetPage: $,
                            widgetId: "acs-instances-top-pagination",
                            onPerPageSelect: B,
                            isCompact: !0,
                          })
                        )
                    )
                  ),
                  a().createElement(
                    k.i,
                    { "aria-label": "ACS instances table" },
                    a().createElement(
                      C.h,
                      null,
                      a().createElement(
                        x.Tr,
                        null,
                        a().createElement(T.Th, { sort: W("name") }, "Name"),
                        a().createElement(
                          T.Th,
                          { sort: W("cloud_provider") },
                          "Cloud provider"
                        ),
                        a().createElement(
                          T.Th,
                          { sort: W("region") },
                          "Region"
                        ),
                        a().createElement(T.Th, { sort: W("owner") }, "Owner"),
                        a().createElement(
                          T.Th,
                          { sort: W("status") },
                          "Status"
                        ),
                        a().createElement(
                          T.Th,
                          { sort: W("created_at") },
                          "Time created"
                        ),
                        a().createElement(T.Th, null)
                      )
                    ),
                    a().createElement(
                      P.p,
                      null,
                      Ce &&
                        a().createElement(
                          x.Tr,
                          null,
                          a().createElement(
                            O.Td,
                            { colSpan: 8 },
                            a().createElement(
                              u.b,
                              null,
                              a().createElement(g.$, null)
                            )
                          )
                        ),
                      !Ce &&
                        0 === ke.length &&
                        a().createElement(
                          x.Tr,
                          null,
                          a().createElement(
                            O.Td,
                            { colSpan: 8 },
                            a().createElement(
                              u.b,
                              null,
                              a().createElement(
                                f.u,
                                { variant: f.I.sm },
                                a().createElement(p.t, {
                                  titleText: "No results found",
                                  icon: a().createElement(m.k, { icon: R.ZP }),
                                  headingLevel: "h2",
                                }),
                                a().createElement(
                                  v.B,
                                  null,
                                  "Clear all filters and try again."
                                ),
                                a().createElement(
                                  h.O,
                                  null,
                                  a().createElement(
                                    s.zx,
                                    { variant: "link", onClick: Oe },
                                    "Clear all filters"
                                  )
                                )
                              )
                            )
                          )
                        ),
                      !Ce &&
                        0 !== ke.length &&
                        ke.map(function (e) {
                          var t = (0, Fe.n)(
                            "instances/instance/".concat(e.id),
                            Fe.d
                          );
                          return a().createElement(
                            x.Tr,
                            {
                              key: e.name,
                              onRowClick: function (t) {
                                "TD" === t.target.tagName &&
                                  "ready" === e.status &&
                                  Se(e);
                              },
                              isRowSelected:
                                (null == we ? void 0 : we.name) ===
                                (null == e ? void 0 : e.name),
                              isClickable: !0,
                            },
                            a().createElement(
                              O.Td,
                              { dataLabel: "Name" },
                              a().createElement(
                                s.zx,
                                {
                                  variant: "link",
                                  isInline: !0,
                                  isDisabled: "ready" !== e.status,
                                  component: function (e) {
                                    return a().createElement(
                                      l.Link,
                                      Ge({}, e, { to: t })
                                    );
                                  },
                                },
                                e.name
                              )
                            ),
                            a().createElement(
                              O.Td,
                              { dataLabel: "Cloud provider" },
                              (0, Y.mt)(e.cloud_provider)
                            ),
                            a().createElement(
                              O.Td,
                              { dataLabel: "Region" },
                              a().createElement(je.Z, { id: e.region })
                            ),
                            a().createElement(
                              O.Td,
                              { dataLabel: "Owner" },
                              e.owner
                            ),
                            a().createElement(
                              O.Td,
                              { dataLabel: "Status" },
                              a().createElement(Te, { status: e.status })
                            ),
                            a().createElement(
                              O.Td,
                              { dataLabel: "Time created" },
                              (0, be.c)(e.created_at)
                            ),
                            a().createElement(
                              O.Td,
                              { isActionCell: !0 },
                              a().createElement(_.k, {
                                items: [
                                  {
                                    title: "Details",
                                    onClick: function (e) {
                                      e.preventDefault(), z(t);
                                    },
                                  },
                                  {
                                    title: "Delete",
                                    onClick: function (t) {
                                      t.preventDefault(), ge(e);
                                    },
                                  },
                                ],
                              })
                            )
                          );
                        })
                    )
                  ),
                  0 !== ke.length &&
                    a().createElement(
                      E.o,
                      null,
                      a().createElement(
                        w.c,
                        null,
                        a().createElement(
                          S.E,
                          {
                            variant: "pagination",
                            align: { default: "alignRight" },
                          },
                          a().createElement(y.t, {
                            itemCount: xe,
                            perPage: G,
                            page: j,
                            onSetPage: $,
                            widgetId: "acs-instances-bottom-pagination",
                            onPerPageSelect: B,
                          })
                        )
                      )
                    )
                )),
          a().createElement(
            he,
            {
              isExpanded: !!we,
              instance: we,
              onClose: function () {
                Se(null);
              },
            },
            a().createElement(
              o.Z,
              null,
              a().createElement(c.Z, { title: "ACS Instances" })
            ),
            a().createElement(
              i.ZP,
              null,
              a().createElement(d.Z, null, A),
              a().createElement(re, {
                isOpen: !!pe,
                onClose: function () {
                  me(null);
                },
                onRequestCreate: function (e) {
                  return se
                    .mutateAsync({
                      region: e.region,
                      cloud_provider: e.cloud_provider,
                      name: e.name,
                      multi_az: "multi" === e.availabilityZones,
                      cloud_account_id: e.cloud_account_id,
                    })
                    .catch(function (e) {
                      return e;
                    });
                },
                cloudAccountIds: ee,
              }),
              a().createElement(ae, {
                instance: ye,
                isOpen: !!ye,
                onClose: function () {
                  ge(null);
                },
                onRequestDelete: function (e) {
                  return de.mutateAsync(e).catch(function (e) {
                    return e;
                  });
                },
              })
            )
          )
        );
      };
    },
    63129: (e, t, n) => {
      "use strict";
      var r, a;
      n.d(t, { LX: () => i, Zz: () => l, mt: () => s, xp: () => d });
      var l = "aws",
        i = "us-east-1",
        o = (((r = {})[l] = "Amazon Web Services"), r),
        c = (((a = {})[l] = "AWS"), a),
        u = Object.keys(o).map(function (e) {
          return { value: e, label: o[e] };
        });
      function s(e) {
        return c[e]
          ? "Hosted by Red Hat (on ".concat(c[e], ")")
          : "Hosted by Red Hat";
      }
      function d(e) {
        var t = u.find(function (t) {
          return t.label === e;
        });
        return null == t ? void 0 : t.value;
      }
    },
    58791: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => c, c: () => o });
      var r = n(53651),
        a = n(12902),
        l = n(5480),
        i = "MM/dd/yyyy | h:mm:ss a";
      function o(e) {
        return (0, r.Z)((0, a.Z)(e), new Date(), { addSuffix: !0 });
      }
      function c(e) {
        return (0, l.Z)((0, a.Z)(e), i);
      }
    },
    40489: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => l });
      var r = n(80129),
        a = n.n(r);
      function l(e) {
        return a().stringify(e, { encode: !1 });
      }
    },
    98709: (e, t, n) => {
      "use strict";
      function r(e, t) {
        var n =
          null == t
            ? void 0
            : t.find(function (t) {
                return t.id === e;
              });
        return null == n ? void 0 : n.id;
      }
      function a(e) {
        return e ? e.display_name || e.id : "";
      }
      n.d(t, { M: () => a, n: () => r });
    },
    70347: () => {},
    1580: () => {},
    94498: () => {},
    37625: () => {},
    27567: () => {},
    28992: () => {},
    80897: () => {},
    30187: () => {},
    78752: () => {},
    71338: () => {},
    21626: () => {},
    74282: () => {},
    25238: () => {},
    91993: () => {},
    36974: () => {},
    54994: () => {},
    44690: () => {},
    37494: () => {},
    67761: () => {},
    97236: () => {},
    38299: () => {},
    24654: () => {},
  },
]);
//# sourceMappingURL=../sourcemaps/InstancesPage.868821a9cd03f7e40303ec91a8723baf.js.map
