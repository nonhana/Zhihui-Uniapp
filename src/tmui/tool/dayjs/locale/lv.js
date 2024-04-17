!(function (e, s) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = s(require('dayjs')))
    : 'function' == typeof define && define.amd
      ? define(['dayjs'], s)
      : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_locale_lv = s(e.dayjs))
})(this, function (e) {
  'use strict'
  function s(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e }
  }
  var t = s(e),
    d = {
      name: 'lv',
      weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
      months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
      weekStart: 1,
      weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
      weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
      ordinal: function (e) {
        return e
      },
      formats: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY.',
        LL: 'YYYY. [gada] D. MMMM',
        LLL: 'YYYY. [gada] D. MMMM, HH:mm',
        LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
      },
      relativeTime: {
        future: 'pēc %s',
        past: 'pirms %s',
        s: 'dažām sekundēm',
        m: 'minūtes',
        mm: '%d minūtēm',
        h: 'stundas',
        hh: '%d stundām',
        d: 'dienas',
        dd: '%d dienām',
        M: 'mēneša',
        MM: '%d mēnešiem',
        y: 'gada',
        yy: '%d gadiem',
      },
    }
  return t.default.locale(d, null, !0), d
})
