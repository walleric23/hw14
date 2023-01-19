const router = require('express').Router();
const { Posting } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPosting = await Posting.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPosting);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postingData = await Posting.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postingData) {
      res.status(404).json({ message: 'No posting found with this id!' });
      return;
    }

    res.status(200).json(postingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
