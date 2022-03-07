const Portfolio = require('../../models').Portfolio;

const addPortfolio = async (req, res) => {
  const portfolio = await Portfolio.create({
    user_id: req.body.user_id,
  }).catch((err) => {
    return res.status(400).json({
      err,
    });
  });
  return res.status(200).json({
    resultMessage: 'Successfully Created Portfolio',
    portfolio,
  });
};

const fetchAllPortfolios = async (req, res) => {
  const portfolios = await Portfolio.findAll({
    order: [['id', 'ASC']],
  }).catch((err) => {
    return res.status(400).json({
      err,
    });
  });
  if (!portfolios)
    return res.status(400).json({
      resultMessage: 'Could not find any record',
    });

  return res.status(200).json({
    portfolios,
  });
};

const getPortfolio = async (req, res) => {
  const portfolio = await Portfolio.findByPk(req.params.id).catch((err) => {
    return res.status(400).json({ err });
  });
  if (!portfolio)
    return res.status(400).json({
      resultMessage: 'There is no Portfolio with provided id',
    });

  return res.status(200).json({
    portfolio,
  });
};

const updatePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findByPk(req.params.id).catch((err) => {
    return res.status(400).json(err);
  });

  if (!portfolio)
    return res.status(400).json({
      resultMessage: 'There is no Portfolio with provided id',
    });

  const updatedPortfolio = await portfolio
    .update({
      user_id: req.body.user_id || portfolio.user_id,
    })
    .catch((err) => {
      return res.status(400).json({
        err,
      });
    });

  return res.status(200).json({
    resultMessage: 'Successfully Updated Portfolio',
    updatedPortfolio,
  });
};

const deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findByPk(req.params.id).catch((err) => {
    return res.status(400).json(err);
  });

  if (!portfolio)
    return res.status(400).json({
      resultMessage: 'There is no Portfolio with provided id',
    });

  await portfolio.destroy().catch((err) => {
    return res.status(400).json({
      err,
    });
  });

  return res.status(200).json({
    resultMessage: 'Successfully Deleted Portfolio',
    portfolio,
  });
};

module.exports = {
  addPortfolio,
  fetchAllPortfolios,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
};
