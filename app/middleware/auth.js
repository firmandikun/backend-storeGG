
module.exports = {
  isLoginAdmin: (req, res, next) => {
    if (req.session.user === null || req.session.user === undefined) {
      req.flash('alertMessage', `Mohon maaf session anda telah habis silahkan login kembali`)
      req.flash('alertStatus', 'danger')
      res.redirect('/')
    } else {
      next()
    }
  }
}