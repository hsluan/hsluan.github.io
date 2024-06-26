(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  var globalThis = root;
  (function () {
    !function (t) {
      // const self = globalThis;
      // const window = globalThis;
      // const global = globalThis;
      // console.log("[FUCKYEAH]");
      // console.log(t);
      // console.log(window);
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.gestrec = t();
        console.log("YAHOO");
        console.log(e);
        console.log(e.gestrec);
      }
    }(function () {
      return function t(e, n, r) {
        function o(s, a) {
          if (!n[s]) {
            if (!e[s]) {
              var u = "function" == typeof require && require;
              if (!a && u) return u(s, !0);
              if (i) return i(s, !0);
              var h = new Error("Cannot find module '" + s + "'");
              throw h.code = "MODULE_NOT_FOUND", h;
            }

            var c = n[s] = {
              exports: {}
            };
            e[s][0].call(c.exports, function (t) {
              var n = e[s][1][t];
              return o(n ? n : t);
            }, c, c.exports, t, e, n, r);
          }

          return n[s].exports;
        }

        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);

        return o;
      }({
        1: [function (t, e, n) {
          e.exports = {
            Constants: t("./Constants"),
            Gesture: t("./Gesture"),
            GestureStore: t("./GestureStore"),
            Instance: t("./Instance"),
            InstanceLearner: t("./InstanceLearner"),
            Learner: t("./Learner"),
            OrientedBoundingBox: t("./OrientedBoundingBox"),
            Point: t("./Point"),
            Prediction: t("./Prediction"),
            Rect: t("./Rect"),
            Stroke: t("./Stroke"),
            Utils: t("./Utils")
          };
        }, {
          "./Constants": 2,
          "./Gesture": 3,
          "./GestureStore": 4,
          "./Instance": 5,
          "./InstanceLearner": 6,
          "./Learner": 7,
          "./OrientedBoundingBox": 8,
          "./Point": 9,
          "./Prediction": 10,
          "./Rect": 11,
          "./Stroke": 12,
          "./Utils": 13
        }],
        2: [function (t, e, n) {
          e.exports = {
            SEQUENCE_INVARIANT: 1,
            SEQUENCE_SENSITIVE: 2,
            ORIENTATION_INVARIANT: 1,
            ORIENTATION_SENSITIVE: 2,
            ORIENTATION_SENSITIVE_4: 4,
            ORIENTATION_SENSITIVE_8: 8,
            SEQUENCE_SAMPLE_SIZE: 16,
            PATCH_SAMPLE_SIZE: 16,
            ORIENTATIONS: [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4, Math.PI, -0, -Math.PI / 4, -Math.PI / 2, 3 * -Math.PI / 4, -Math.PI]
          };
        }, {}],
        3: [function (t, e, n) {
          function r(t) {
            if (this.mBoundingBox = new o(), this.mGestureID = r.GESTURE_ID_BASE + ++r.GESTURE_COUNT, this.mStrokes = [], t) for (var e = 0; e < t.length; ++e) this.addStroke(t[e]);
          }

          var o = t("./Rect"),
              i = t("./Stroke");
          r.GESTURE_ID_BASE = Date.now(), r.GESTURE_COUNT = 0, r.prototype.clone = function () {
            var t = new r();
            t.mBoundingBox.set(this.mBoundingBox.left, this.mBoundingBox.top, this.mBoundingBox.right, this.mBoundingBox.bottom);

            for (var e = this.mStrokes.length, n = 0; e > n; ++n) {
              var o = this.mStrokes[n];
              t.mStrokes.push(o.clone());
            }

            return t;
          }, r.prototype.getStrokes = function () {
            return this.mStrokes;
          }, r.prototype.getStrokesCount = function () {
            return this.mStrokes.length;
          }, r.prototype.addStroke = function (t) {
            this.mStrokes.push(t), this.mBoundingBox.union(t.boundingBox);
          }, r.prototype.getLength = function () {
            for (var t = 0, e = this.mStrokes, n = e.length, r = 0; n > r; ++r) t += e[r].length;

            return t;
          }, r.prototype.getBoundingBox = function () {
            return this.mBoundingBox;
          }, r.prototype.setID = function (t) {
            this.mGestureID = t;
          }, r.prototype.getID = function () {
            return this.mGestureID;
          }, r.prototype.toJSON = function () {
            for (var t = [], e = this.mStrokes.length, n = 0; e > n; ++n) t.push(this.mStrokes[n].toJSON());

            return t;
          }, r.fromJSON = function (t) {
            for (var e = new r(), n = 0; n < t.length; ++n) e.addStroke(i.fromJSON(t[n]));

            return e;
          }, e.exports = r;
        }, {
          "./Rect": 11,
          "./Stroke": 12
        }],
        4: [function (t, e, n) {
          function r() {
            this.mSequenceType = o.SEQUENCE_SENSITIVE, this.mOrientationStyle = o.ORIENTATION_SENSITIVE_4, this.mClassifier = new a(), this.mChanged = !1, this.mNamedGestures = {};
          }

          var o = t("./Constants"),
              i = t("./Gesture"),
              s = t("./Instance"),
              a = t("./InstanceLearner");
          r.prototype.setOrientationStyle = function (t) {
            this.mOrientationStyle = t;
          }, r.prototype.getOrientationStyle = function () {
            return this.mOrientationStyle;
          }, r.prototype.setSequenceType = function (t) {
            this.mSequenceType = t;
          }, r.prototype.getSequenceType = function () {
            return this.mSequenceType;
          }, r.prototype.getGestureEntries = function () {
            var t = [];

            for (var e in this.mNamedGestures) t.push(e);

            return t;
          }, r.prototype.recognize = function (t) {
            var e = s.createInstance(this.mSequenceType, this.mOrientationStyle, t, null);
            return this.mClassifier.classify(this.mSequenceType, this.mOrientationStyle, e.vector);
          }, r.prototype.addGesture = function (t, e) {
            var gestures;
            null != t && 0 !== t.length && (gestures = this.mNamedGestures[t], null == gestures && (gestures = [], this.mNamedGestures[t] = gestures), gestures.push(e), this.mClassifier.addInstance(s.createInstance(this.mSequenceType, this.mOrientationStyle, e, t)), this.mChanged = !0);
          }, r.prototype.removeGesture = function (t, e) {
            var n = this.mNamedGestures[t];

            if (null != n) {
              var r = n.indexOf(e);
              n.splice(r, 1), 0 === n.length && delete this.mNamedGestures[t], this.mClassifier.removeInstance(e.getID()), this.mChanged = !0;
            }
          }, r.prototype.removeEntry = function (t) {
            delete this.mNamedGestures[t], this.mClassifier.removeInstances(t), this.mChanged = !0;
          }, r.prototype.getGestures = function (t) {
            var e = this.mNamedGestures[t];
            return null != e ? e.slice() : [];
          }, r.prototype.hasChanged = function () {
            return this.mChanged;
          }, r.prototype.getLearner = function () {
            return this.mClassifier;
          }, r.prototype.toJSON = function () {
            var t = {};
            t.sequence = this.mSequenceType, t.orientation = this.mOrientationStyle, t.gestures = {};

            for (var e in this.mNamedGestures) {
              var n = this.mNamedGestures[e];
              t.gestures[e] = n.map(function (t) {
                return t.toJSON();
              });
            }

            return t;
          }, r.fromJSON = function (t) {
            var e = new r();
            e.setSequenceType(t.sequence), e.setOrientationStyle(t.orientation);

            for (var n in t.gestures) {
              var o = t.gestures[n];
              o.forEach(function (t) {
                e.addGesture(n, i.fromJSON(t));
              });
            }

            return e;
          }, e.exports = r;
        }, {
          "./Constants": 2,
          "./Gesture": 3,
          "./Instance": 5,
          "./InstanceLearner": 6
        }],
        5: [function (t, e, n) {
          function r(t, e, n) {
            this.id = t, this.vector = e, this.label = n;
          }

          var o = t("./Constants"),
              i = t("./Utils");
          r.prototype.normalize = function () {
            for (var t = this.vector, e = 0, n = t.length, r = 0; n > r; r++) e += t[r] * t[r];

            for (var o = Math.sqrt(e), r = 0; n > r; r++) t[r] /= o;
          }, r.createInstance = function (t, e, n, i) {
            var s, a;
            return t === o.SEQUENCE_SENSITIVE ? (s = r.temporalSampler(e, n), a = new r(n.getID(), s, i), a.normalize()) : (s = r.spatialSampler(n), a = new r(n.getID(), s, i)), a;
          }, r.spatialSampler = function (t) {
            return i.spatialSampling(t, o.PATCH_SAMPLE_SIZE, !1);
          }, r.temporalSampler = function (t, e) {
            var n = i.temporalSampling(e.getStrokes()[0], o.SEQUENCE_SAMPLE_SIZE),
                r = i.computeCentroid(n),
                s = Math.atan2(n[1] - r[1], n[0] - r[0]),
                a = -s;
            if (t != o.ORIENTATION_INVARIANT) for (var u = o.ORIENTATIONS.length, h = 0; u > h; h++) {
              var c = o.ORIENTATIONS[h] - s;
              Math.abs(c) < Math.abs(a) && (a = c);
            }
            return i.translate(n, -r[0], -r[1]), i.rotate(n, a), n;
          }, e.exports = r;
        }, {
          "./Constants": 2,
          "./Utils": 13
        }],
        6: [function (t, e, n) {
          function r() {
            s.call(this);
          }

          var o = t("./Prediction"),
              i = t("./Constants"),
              s = t("./Learner"),
              a = t("./Utils");
          r.prototype = new s(), r.compare = function (t, e) {
            var n = t.score,
                r = e.score;
            return n > r ? -1 : r > n ? 1 : 0;
          }, r.prototype.classify = function (t, e, n) {
            for (var s = [], u = this.getInstances(), h = u.length, c = {}, f = 0; h > f; ++f) {
              var p = u[f];

              if (p.vector.length == n.length) {
                var l;
                l = t == i.SEQUENCE_SENSITIVE ? a.minimumCosineDistance(p.vector, n, e) : a.squaredEuclideanDistance(p.vector, n);
                var m;
                m = 0 == l ? Number.MAX_VALUE : 1 / l;
                var g = c[p.label];
                (null == g || m > g) && (c[p.label] = m);
              }
            }

            for (var v in c) {
              var g = c[v];
              s.push(new o(v, g));
            }

            return s.sort(r.compare);
          }, e.exports = r;
        }, {
          "./Constants": 2,
          "./Learner": 7,
          "./Prediction": 10,
          "./Utils": 13
        }],
        7: [function (t, e, n) {
          function r() {
            this.mInstances = [];
          }

          r.prototype.addInstance = function (t) {
            this.mInstances.push(t);
          }, r.prototype.getInstances = function () {
            return this.mInstances;
          }, r.prototype.removeInstance = function (t) {
            instances = this.mInstances;

            for (var e = instances.length, n = 0; e > n; n++) {
              var r = instances[n];
              if (t === r.id) return void instances.splice(n, 1);
            }
          }, r.prototype.removeInstances = function (t) {
            for (var e = [], n = this.mInstances, r = n.length, o = 0; r > o; ++o) {
              var i = n[o];
              (null == i.label && null == t || null != i.label && i.label === t) && e.push(o);
            }

            for (o = e.length - 1; o >= 0; --o) n.splice(e[o], 1);
          }, r.prototype.classify = function (t, e, n) {}, e.exports = r;
        }, {}],
        8: [function (t, e, n) {
          e.exports = function (t, e, n, r, o) {
            this.orientation = t, this.width = r, this.height = o, this.centerX = e, this.centerY = n;
            var i = r / o;
            this.squareness = i > 1 ? 1 / i : i;
          };
        }, {}],
        9: [function (t, e, n) {
          e.exports = function (t, e, n) {
            if (t instanceof Object) {
              var r = t;
              this.x = r.x, this.y = r.y, this.timestamp = r.t;
            } else this.x = t, this.y = e, this.timestamp = n;
          };
        }, {}],
        10: [function (t, e, n) {
          function r(t, e) {
            this.name = t, this.score = e;
          }

          r.prototype.toString = function () {
            return this.name;
          }, e.exports = r;
        }, {}],
        11: [function (t, e, n) {
          function r(t, e, n, r) {
            this.set(t, e, n, r);
          }

          r.prototype.clone = function () {
            return new r(this.left, this.top, this.right, this.bottom);
          }, r.prototype.centerX = function () {
            return (this.left + this.right) / 2;
          }, r.prototype.centerY = function () {
            return (this.top + this.bottom) / 2;
          }, r.prototype.width = function () {
            return this.right - this.left;
          }, r.prototype.height = function () {
            return this.bottom - this.top;
          }, r.prototype.set = function (t, e, n, r) {
            this.top = e, this.left = t, this.bottom = r, this.right = n;
          }, r.prototype.unionPoint = function (t, e) {
            t < this.left && (this.left = t), t > this.right && (this.right = t), e < this.top && (this.top = e), e > this.bottom && (this.bottom = e);
          }, r.prototype.union = function (t) {
            t.left < this.left && (this.left = t.left), t.right > this.right && (this.right = t.right), t.top < this.top && (this.top = t.top), t.bottom > this.bottom && (this.bottom = t.bottom);
          }, e.exports = r;
        }, {}],
        12: [function (t, e, n) {
          function r(t) {
            if (null != t) {
              for (var e = t.length, n = Array(2 * e), r = Array(e), i = null, s = 0, a = 0, u = 0; e > u; ++u) {
                var h = t[u];
                if (n[2 * u] = h.x, n[2 * u + 1] = h.y, r[a] = h.timestamp, null == i) i = new o(h.x, h.y, h.x, h.y), s = 0;else {
                  var c = h.x - n[2 * (u - 1)],
                      f = h.y - n[2 * (u - 1) + 1];
                  s += Math.sqrt(c * c + f * f), i.unionPoint(h.x, h.y);
                }
                a++;
              }

              this.timestamps = r, this.points = n, this.boundingBox = i, this.length = s;
            }
          }

          var o = t("./Rect"),
              i = t("./Point");
          r.prototype.clone = function () {
            var t = new r();
            return t.boundingBox = this.boundingBox.clone(), t.length = this.length, t.points = this.points.slice(), t.timestamps = this.timestamps.slice(), t;
          }, r.prototype.toJSON = function () {
            for (var t = [], e = this.points.length, n = 0; e > n; n += 2) t.push({
              x: this.points[n],
              y: this.points[n + 1],
              t: this.timestamps[n >> 1]
            });

            return t;
          }, r.fromJSON = function (t) {
            for (var e = [], n = 0; n < t.length; ++n) e.push(new i(t[n]));

            return new r(e);
          }, e.exports = r;
        }, {
          "./Point": 9,
          "./Rect": 11
        }],
        13: [function (t, e, n) {
          var r = t("./OrientedBoundingBox"),
              o = {};
          o.SCALING_THRESHOLD = 0.26, o.NONUNIFORM_SCALE = Math.sqrt(2), o.zeroes = function (t) {
            for (var e = Array(t), n = 0; t > n; ++n) e[n] = 0;

            return e;
          }, o.spatialSampling = function (t, e, n) {
            var r,
                i = e - 1,
                s = o.zeroes(e * e),
                a = t.getBoundingBox(),
                u = a.width(),
                h = a.height(),
                c = i / u,
                f = i / h;
            if (n) r = f > c ? c : f, c = r, f = r;else {
              var p = u / h;
              p > 1 && (aspectRation = 1 / p), p < o.SCALING_THRESHOLD ? (r = f > c ? c : f, c = r, f = r) : c > f ? (r = f * o.NONUNIFORM_SCALE, c > r && (c = r)) : (r = c * o.NONUNIFORM_SCALE, f > r && (f = r));
            }

            for (var l, m, g, v = -a.centerX(), S = -a.centerY(), d = i / 2, I = i / 2, N = t.getStrokes(), y = N.length, E = 0; y > E; E++) {
              var M = N[E],
                  O = M.points;
              l = O.length;

              for (var x = Array(l), T = 0; l > T; T += 2) x[T] = (O[T] + v) * c + d, x[T + 1] = (O[T + 1] + S) * f + I;

              for (var A = -1, C = -1, T = 0; l > T; T += 2) {
                var B = x[T] < 0 ? 0 : x[T],
                    _ = x[T + 1] < 0 ? 0 : x[T + 1];

                if (B > i && (B = i), _ > i && (_ = i), o.plot(B, _, s, e), -1 != A) {
                  if (A > B) {
                    m = Math.ceil(B);

                    for (var b = (C - _) / (A - B); A > m;) g = b * (m - B) + _, plot(m, g, s, e), m++;
                  } else if (B > A) {
                    m = Math.ceil(A);

                    for (var b = (C - _) / (A - B); B > m;) g = b * (m - B) + _, plot(m, g, s, e), m++;
                  }

                  if (C > _) {
                    g = Math.ceil(_);

                    for (var L = (A - B) / (C - _); C > g;) m = L * (g - _) + B, plot(m, g, s, e), g++;
                  } else if (_ > C) {
                    g = Math.ceil(C);

                    for (var L = (A - B) / (C - _); _ > g;) m = L * (g - _) + B, plot(m, g, s, e), g++;
                  }
                }

                A = B, C = _;
              }
            }

            return s;
          }, o.plot = function (t, e, n, r) {
            t = 0 > t ? 0 : t, e = 0 > e ? 0 : e;
            var o = Math.floor(t),
                i = Math.ceil(t),
                s = Math.floor(e),
                a = Math.ceil(e);

            if (t === o && e === s) {
              var u = a * r + i;
              n[u] < 1 && (n[u] = 1);
            } else {
              var h = Math.pow(o - t, 2),
                  c = Math.pow(s - e, 2),
                  f = Math.pow(i - t, 2),
                  p = Math.pow(a - e, 2),
                  l = Math.sqrt(h + c),
                  m = Math.sqrt(f + c),
                  g = Math.sqrt(h + p),
                  v = Math.sqrt(f + p),
                  S = l + m + g + v,
                  d = l / S,
                  u = s * r + o;
              d > n[u] && (n[u] = d), d = m / S, u = s * r + i, d > n[u] && (n[u] = d), d = g / S, u = a * r + o, d > n[u] && (n[u] = d), d = v / S, u = a * r + i, d > n[u] && (n[u] = d);
            }
          }, o.temporalSampling = function (t, e) {
            var n = t.length / (e - 1),
                r = 2 * e,
                o = Array(r),
                i = 0,
                s = t.points,
                a = s[0],
                u = s[1],
                h = 0,
                c = Number.MIN_VALUE,
                f = Number.MIN_VALUE;
            o[h] = a, h++, o[h] = u, h++;

            for (var p = 0, l = s.length / 2; l > p;) {
              if (c == Number.MIN_VALUE) {
                if (p++, p >= l) break;
                c = s[2 * p], f = s[2 * p + 1];
              }

              var m = c - a,
                  g = f - u,
                  v = Math.sqrt(m * m + g * g);

              if (i + v >= n) {
                var S = (n - i) / v,
                    d = a + S * m,
                    I = u + S * g;
                o[h] = d, h++, o[h] = I, h++, a = d, u = I, i = 0;
              } else a = c, u = f, c = Number.MIN_VALUE, f = Number.MIN_VALUE, i += v;
            }

            for (p = h; r > p; p += 2) o[p] = a, o[p + 1] = u;

            return o;
          }, o.computeCentroid = function (t) {
            for (var e = 0, n = 0, r = t.length, o = 0; r > o; ++o) e += t[o], o++, n += t[o];

            return [2 * e / r, 2 * n / r];
          }, o.computeCoVariance = function (t) {
            for (var e = [[0, 0], [0, 0]], n = t.length, r = 0; n > r; ++r) {
              var o = t[r];
              r++;
              var i = t[r];
              e[0][0] += o * o, e[0][1] += o * i, e[1][0] = e[0][1], e[1][1] += i * i;
            }

            return e[0][0] /= n / 2, e[0][1] /= n / 2, e[1][0] /= n / 2, e[1][1] /= n / 2, e;
          }, o.computeTotalLength = function (t) {
            for (var e = 0, n = t.length - 4, r = 0; n > r; r += 2) {
              var o = t[r + 2] - t[r],
                  i = t[r + 3] - t[r + 1];
              e += Math.sqrt(o * o + i * i);
            }

            return e;
          }, o.computeStraightness = function (t) {
            var e = o.computeTotalLength(t),
                n = t[2] - t[0],
                r = t[3] - t[1];
            return Math.sqrt(n * n + r * r) / e;
          }, o.computeStraightness = function (t, e) {
            var n = t[2] - t[0],
                r = t[3] - t[1];
            return Math.sqrt(n * n + r * r) / e;
          }, o.squaredEuclideanDistance = function (t, e) {
            for (var n = 0, r = t.length, o = 0; r > o; ++o) {
              var i = t[o] - e[o];
              n += i * i;
            }

            return n / r;
          }, o.cosineDistance = function (t, e) {
            for (var n = 0, r = t.length, o = 0; r > o; ++o) n += t[o] * e[o];

            return Math.acos(n);
          }, o.minimumCosineDistance = function (t, e, n) {
            for (var r = t.length, o = 0, i = 0, s = 0; r > s; s += 2) o += t[s] * e[s] + t[s + 1] * e[s + 1], i += t[s] * e[s + 1] - t[s + 1] * e[s];

            if (0 != o) {
              var a = i / o,
                  u = Math.atan(a);
              if (n > 2 && Math.abs(u) >= Math.PI / n) return Math.acos(o);
              var h = Math.cos(u),
                  c = h * a;
              return Math.acos(o * h + i * c);
            }

            return Math.PI / 2;
          }, o.computeOrientedBoundingBoxPoints = function (t) {
            for (var e = t.length, n = Array(2 * e), r = 0; e > r; r++) {
              var i = t[r],
                  s = 2 * r;
              n[s] = i.x, n[s + 1] = i.y;
            }

            var a = o.computeCentroid(n);
            return o.computeOrientedBoundingBoxFull(n, a);
          }, o.computeOrientedBoundingBox = function (t) {
            for (var e = t.length, n = Array(e), r = 0; e > r; r++) n[r] = t[r];

            var i = o.computeCentroid(n);
            return o.computeOrientedBoundingBoxFull(n, i);
          }, o.computeOrientedBoundingBoxFull = function (t, e) {
            o.translate(t, -e[0], -e[1]);
            var n,
                i = o.computeCoVariance(t),
                s = o.computeOrientation(i);
            0 == s[0] && 0 == s[1] ? n = -Math.PI / 2 : (n = Math.atan2(s[1], s[0]), o.rotate(t, -n));

            for (var a = Number.MAX_VALUE, u = Number.MAX_VALUE, h = Number.MIN_VALUE, c = Number.MIN_VALUE, f = t.length, p = 0; f > p; p++) t[p] < a && (a = t[p]), t[p] > h && (h = t[p]), p++, t[p] < u && (u = t[p]), t[p] > c && (c = t[p]);

            return new r(180 * n / Math.PI, e[0], e[1], h - a, c - u);
          }, o.computeOrientation = function (t) {
            var e = [0, 0];
            (0 == t[0][1] || 0 == t[1][0]) && (e[0] = 1, e[1] = 0);
            var n = -t[0][0] - t[1][1],
                r = t[0][0] * t[1][1] - t[0][1] * t[1][0],
                o = n / 2,
                i = Math.sqrt(Math.pow(o, 2) - r),
                s = -o + i,
                a = -o - i;
            if (s == a) e[0] = 0, e[1] = 0;else {
              var u = s > a ? s : a;
              e[0] = 1, e[1] = (u - t[0][0]) / t[0][1];
            }
            return e;
          }, o.rotate = function (t, e) {
            for (var n = Math.cos(e), r = Math.sin(e), o = t.length, i = 0; o > i; i += 2) {
              var s = t[i] * n - t[i + 1] * r,
                  a = t[i] * r + t[i + 1] * n;
              t[i] = s, t[i + 1] = a;
            }

            return t;
          }, o.translate = function (t, e, n) {
            for (var r = t.length, o = 0; r > o; o += 2) t[o] += e, t[o + 1] += n;

            return t;
          }, o.scale = function (t, e, n) {
            for (var r = t.length, o = 0; r > o; o += 2) t[o] *= e, t[o + 1] *= n;

            return t;
          }, e.exports = o;
        }, {
          "./OrientedBoundingBox": 8
        }]
      }, {}, [1])(1);
    });
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));