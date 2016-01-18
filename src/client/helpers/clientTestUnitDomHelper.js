import jsdom from 'jsdom'
export default () => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
  const win = doc.defaultView

  global.document = doc
  global.window = win

  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key]
      }
  })

  console.log('finishing setting up dom helper')
}()