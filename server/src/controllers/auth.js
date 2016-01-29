export default {

  logout: function(req, res) {
    console.log(req.session)
    // req.logout()
    req.session.destroy()
    res.clearCookie('trippian')
    res.redirect('/')
  },
  // function that validates whether the user is logged in
  
  validate: (req, res, next) => {
    console.log('hi')

    res.cookie('trippian', {
      id: req.user.id,
      name: req.user.name
    })
  }
}