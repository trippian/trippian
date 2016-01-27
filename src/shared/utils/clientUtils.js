/*
process the url, so we can get the exact route
e.g. '#/become-a-trippian?_k=ys8iin' will return '/become-a-trippian'
w
 */

export function getPathNameFromHash(hash) {
  if (hash[0] !== '#' || hash.length < 2) return
  let pathName = ''
  for (let i = 1; i < hash.length; i++) {
    if (hash[i] === '?') return pathName
    pathName += hash[i]
  }
}

export function getLocaleFromQueryString(queryString) {
  if (typeof (queryString) !== 'string') return 'en-US'
  const locale = getParamFromQueryStringByName(queryString, 'locale')
  return locale !== '' ? locale : 'en-US'
}
//input: ?locale=en-US
//output: en-US
export function getParamFromQueryStringByName(search, name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

// load different translated language files based on local 
export function getMessagesByLocale(locale = 'en-US') {
  return require(`../../../translate/lang/${locale}.json`)
}
