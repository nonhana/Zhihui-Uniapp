!(function (t, i) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = i())
    : 'function' == typeof define && define.amd
      ? define(i)
      : ((t = 'undefined' != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i())
})(this, function () {
  'use strict'
  var t = 'minute',
    i = /[+-]\d\d(?::?\d\d)?/g,
    e = /([+-]|\d\d)/g
  return function (s, f, n) {
    var u = f.prototype
    ;(n.utc = function (t) {
      var i = { date: t, utc: !0, args: arguments }
      return new f(i)
    }),
      (u.utc = function (i) {
        var e = n(this.toDate(), { locale: this.$L, utc: !0 })
        return i ? e.add(this.utcOffset(), t) : e
      }),
      (u.local = function () {
        return n(this.toDate(), { locale: this.$L, utc: !1 })
      })
    var o = u.parse
    u.parse = function (t) {
      t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), o.call(this, t)
    }
    var r = u.init
    u.init = function () {
      if (this.$u) {
        var t = this.$d
        ;(this.$y = t.getUTCFullYear()),
          (this.$M = t.getUTCMonth()),
          (this.$D = t.getUTCDate()),
          (this.$W = t.getUTCDay()),
          (this.$H = t.getUTCHours()),
          (this.$m = t.getUTCMinutes()),
          (this.$s = t.getUTCSeconds()),
          (this.$ms = t.getUTCMilliseconds())
      } else r.call(this)
    }
    var a = u.utcOffset
    u.utcOffset = function (s, f) {
      var n = this.$utils().u
      if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset
      if (
        'string' == typeof s &&
        ((s = (function (t) {
          void 0 === t && (t = '')
          var s = t.match(i)
          if (!s) return null
          var f = ('' + s[0]).match(e) || ['-', 0, 0],
            n = f[0],
            u = 60 * +f[1] + +f[2]
          return 0 === u ? 0 : '+' === n ? u : -u
        })(s)),
        null === s)
      )
        return this
      var u = Math.abs(s) <= 16 ? 60 * s : s,
        o = this
      if (f) return (o.$offset = u), (o.$u = 0 === s), o
      if (0 !== s) {
        var r = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset()
        ;((o = this.local().add(u + r, t)).$offset = u), (o.$x.$localOffset = r)
      } else o = this.utc()
      return o
    }
    var h = u.format
    ;(u.format = function (t) {
      var i = t || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '')
      return h.call(this, i)
    }),
      (u.valueOf = function () {
        var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset())
        return this.$d.valueOf() - 6e4 * t
      }),
      (u.isUTC = function () {
        return !!this.$u
      }),
      (u.toISOString = function () {
        return this.toDate().toISOString()
      }),
      (u.toString = function () {
        return this.toDate().toUTCString()
      })
    var l = u.toDate
    u.toDate = function (t) {
      return 's' === t && this.$offset ? n(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate() : l.call(this)
    }
    var c = u.diff
    u.diff = function (t, i, e) {
      if (t && this.$u === t.$u) return c.call(this, t, i, e)
      var s = this.local(),
        f = n(t).local()
      return c.call(s, f, i, e)
    }
  }
})
