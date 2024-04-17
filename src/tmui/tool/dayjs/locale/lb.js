!(function (e, _) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = _(require('dayjs')))
    : 'function' == typeof define && define.amd
      ? define(['dayjs'], _)
      : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_locale_lb = _(e.dayjs))
})(this, function (e) {
  'use strict'
  function _(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e }
  }
  var t = _(e),
    n = {
      name: 'lb',
      weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
      months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      weekStart: 1,
      weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
      monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
      ordinal: function (e) {
        return e
      },
      formats: {
        LT: 'H:mm [Auer]',
        LTS: 'H:mm:ss [Auer]',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm [Auer]',
        LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
      },
    }
  return t.default.locale(n, null, !0), n
})
