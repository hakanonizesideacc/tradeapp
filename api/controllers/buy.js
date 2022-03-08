const Portfolio = require('../../models').Portfolio;
const User = require('../../models').User;
const Share = require('../../models').Share;
const Transaction = require('../../models').Transaction;
const PortfolioShare = require('../../models').PortfolioShare;

module.exports = async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  }).catch((err) => {
    return res.status(400).json({ err });
  });

  if (!user)
    return res.status(400).json({
      resultMessage: 'There is no user with provided id',
    });

  const portfolio = await Portfolio.findOne({
    where: {
      user_id: user.id,
    },
  }).catch((err) => {
    return res.status(400).json({ err });
  });
  if (!portfolio)
    return res.status(400).json({
      resultMessage: 'There is no Portfolio with provided id',
    });

  const share = await Share.findOne({
    where: {
      symbol: req.body.share,
    },
  }).catch((err) => {
    return res.status(400).json({ err });
  });
  if (!share)
    return res.status(400).json({
      resultMessage: 'There is no Share with provided id',
    });

  const transaction = await Transaction.create({
    portfolio_id: portfolio.id,
    share_id: share.id,
    price: share.rate,
    amounth: req.body.amounth,
  }).catch((err) => {
    return res.status(400).json({ err });
  });

  if (transaction) {
    const usersShare = await PortfolioShare.findOne({
      where: {
        portfolio_id: portfolio.id,
        share_id: share.id,
      },
    }).catch((err) => {
      return res.status(400).json({ err });
    });

    if (usersShare) {
      usersShare
        .update({
          amounth: req.body.amount + usersShare.amounth,
        })
        .catch((err) => {
          return res.status(400).json({ err });
        });

      return res.status(200).json({
        resultMessage: 'Successfully purchased',
      });
    } else {
      await PortfolioShare.create({
        portfolio_id: portfolio.id,
        share_id: share.id,
        amounth: req.body.amounth,
      }).catch((err) => {
        return res.status(400).json({ err });
      });

      return res.status(200).json({
        resultMessage: 'Successfully purchased',
      });
    }
  }
};
