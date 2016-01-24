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

// load different translated language files based on local 
export function getMessagesByLocale(locale = 'en-US') {
  return require(`../../../translate/lang/${locale}.json`)
}
