const Share = require('../../models').Share;

const addShare = async (req, res) => {
  const share = await Share.create({
    symbol: req.body.symbol,
    rate: req.body.rate,
  }).catch((err) => {
    return res.status(400).json({
      err,
    });
  });

  return res.status(200).json({
    resultMessage: 'Successfully Created Share',
    share,
  });
};

const fetchAllShares = async (req, res) => {
  const shares = await Share.findAll({
    order: [['id', 'ASC']],
  }).catch((err) => {
    return res.status(400).json({
      err,
    });
  });
  if (!shares)
    return res.status(400).json({
      resultMessage: 'Could not find any record',
    });

  return res.status(200).json({
    shares,
  });
};

const getShare = async (req, res) => {
  const share = await Share.findByPk(req.params.id).catch((err) => {
    return res.status(400).json({ err });
  });
  if (!share)
    return res.status(400).json({
      resultMessage: 'There is no Share with provided id',
    });

  return res.status(200).json({
    share,
  });
};

const updateShare = async (req, res) => {
  const share = await Share.findByPk(req.params.id).catch((err) => {
    return res.status(400).json(err);
  });

  if (!share)
    return res.status(400).json({
      resultMessage: 'There is no Share with provided id',
    });

  const updatedShare = await share
    .update({
      symbol: req.body.symbol || share.symbol,
      rate: req.body.rate || share.rate,
    })
    .catch((err) => {
      return res.status(400).json({
        err,
      });
    });

  return res.status(200).json({
    resultMessage: 'Successfully Updated Share',
    updatedShare,
  });
};

const deleteShare = async (req, res) => {
  const share = await Share.findByPk(req.params.id).catch((err) => {
    return res.status(400).json(err);
  });

  if (!share)
    return res.status(400).json({
      resultMessage: 'There is no Share with provided id',
    });

  await share.destroy().catch((err) => {
    return res.status(400).json({
      err,
    });
  });

  return res.status(200).json({
    resultMessage: 'Successfully Deleted Share',
    share,
  });
};
module.exports = {
  addShare,
  fetchAllShares,
  getShare,
  updateShare,
  deleteShare,
};
