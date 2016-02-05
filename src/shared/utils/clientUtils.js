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

export function getCanVote(currentNetVote, vote) {
  // options: (-1, 1) = > 0, (1, -1) => 0,  (0, -1) => -1, (0, 1) => 1
  if (currentNetVote === 0) return true
  if ((currentNetVote === 1 && vote === -1) || (currentNetVote === -1 && vote === 1)) return true
  return false
}

// export function getCanSave(isSaved) {
//   if (isSaved) return false
//   return true
// }

export function getCookieByName(name) {
  const re = new RegExp(name + "=([^;]+)")
  const value = re.exec(document.cookie)
  return (value != null) ? unescape(value[1]) : null
}
//TODO: check if the returned data is consistent and map to 
//username: '',
// displayName: '',
// email: '',
// id: 32, //TODO
// facebookId: 0,
// picture: 'http://lorempixel.com/200/200/people/',
// trippian: false
export function parseCookieStringToUser(string) {
  return JSON.parse(string.substr(2))
}

export function clearTrippianCookieByName(name = 'trippianPass') {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
