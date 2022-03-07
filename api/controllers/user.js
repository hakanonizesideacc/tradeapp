const User = require('../../models').User;

const addUser = async (req, res) => {
  const user = await User.create({
    username: req.body.username,
  }).catch((err) => {
    return res.status(400).json({
      err,
    });
  });
  return res.status(200).json({
    resultMessage: 'Successfully Created User',
    user,
  });
};

const fetchAllUsers = async (req, res) => {
  const users = await User.findAll({
    order: [['id', 'ASC']],
  }).catch((err) => {
    return res.status(400).json({
      err,
    });
  });
  if (!users)
    return res.status(400).json({
      resultMessage: 'Could not find any record',
    });

  return res.status(200).json({
    users,
  });
};

const getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id).catch((err) => {
    return res.status(400).json({ err });
  });
  if (!user)
    return res.status(400).json({
      resultMessage: 'There is no user with provided id',
    });

  return res.status(200).json({
    user,
  });
};

const updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id).catch((err) => {
    return res.status(400).json(err);
  });

  if (!user)
    return res.status(400).json({
      resultMessage: 'There is no user with provided id',
    });

  const updatedUser = await user
    .update({
      username: req.body.username || user.username,
    })
    .catch((err) => {
      return res.status(400).json({
        err,
      });
    });

  return res.status(200).json({
    resultMessage: 'Successfully Updated User',
    updatedUser,
  });
};

const deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id).catch((err) => {
    return res.status(400).json(err);
  });

  if (!user)
    return res.status(400).json({
      resultMessage: 'There is no user with provided id',
    });

  await user.destroy().catch((err) => {
    return res.status(400).json({
      err,
    });
  });

  return res.status(200).json({
    resultMessage: 'Successfully Deleted User',
    user,
  });
};
module.exports = {
  addUser,
  fetchAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
