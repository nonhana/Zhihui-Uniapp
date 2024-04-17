!(function (_, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e(require('dayjs')))
    : 'function' == typeof define && define.amd
      ? define(['dayjs'], e)
      : ((_ = 'undefined' != typeof globalThis ? globalThis : _ || self).dayjs_locale_sd = e(_.dayjs))
})(this, function (_) {
  'use strict'
  function e(_) {
    return _ && 'object' == typeof _ && 'default' in _ ? _ : { default: _ }
  }
  var t = e(_),
    d = {
      name: 'sd',
      weekdays: 'آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر'.split('_'),
      months: 'جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر'.split('_'),
      weekStart: 1,
      weekdaysShort: 'آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر'.split('_'),
      monthsShort: 'جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر'.split('_'),
      weekdaysMin: 'آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر'.split('_'),
      ordinal: function (_) {
        return _
      },
      formats: { LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd، D MMMM YYYY HH:mm' },
      relativeTime: {
        future: '%s پوء',
        past: '%s اڳ',
        s: 'چند سيڪنڊ',
        m: 'هڪ منٽ',
        mm: '%d منٽ',
        h: 'هڪ ڪلاڪ',
        hh: '%d ڪلاڪ',
        d: 'هڪ ڏينهن',
        dd: '%d ڏينهن',
        M: 'هڪ مهينو',
        MM: '%d مهينا',
        y: 'هڪ سال',
        yy: '%d سال',
      },
    }
  return t.default.locale(d, null, !0), d
})
