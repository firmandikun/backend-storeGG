const Transaction = require('../transaction/model')
const Voucher = require('../vocher/model')
const Category = require('../category/model')
const Player = require('../player/model')



module.exports ={ index: async (req, res) => {
    try {

      const transaction = await Transaction.countDocuments()
      const voucher = await Voucher.countDocuments()
      const category = await Category.countDocuments()
      const player = await Player.countDocuments()
      res.render('admin/dashboard/view_dashboard', {
        name: req.session.user.name,
        title: 'Halaman Dashboard',
        count: {
          transaction,
          voucher,
          category,
          player
        }
      })
    } catch (err) {
      console.log(err)

    }
  }
}
