const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display
    let data = await Project.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    res.render('home', { data: data, user: req.session });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Dashboard', async (req, res) => {
  try {
    //verify we are logged in to access this screen
    if (!req.session.user_id) {
      res.redirect('/Login');
      return;
    }

    //we need to get the list of projects and their creators for display
    let data = await Project.findAll({
      raw: true,
      nest: true,
      where: { user_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    res.render('dashboard', { data: data, user: req.session });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/NewPost', async (req, res) => {
  try {
    //verify we are logged in to access this screen
    if (!req.session.user_id) {
      res.redirect('/Login');
      return;
    }

    res.render('newpost', { user: req.session });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/EditPost/:id', async (req, res) => {
  try {
    //verify we are logged in to access this screen
    if (!req.session.user_id) {
      res.redirect('/Login');
      return;
    }

    //we need to get the list of projects and their creators for display
    let data = await Project.findByPk(req.params.id, {
      raw: true,
      nest: true,
    });

    res.render('editpost', { data: data, user: req.session });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Register', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('register', { user: req.session });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Login', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('login', { user: req.session });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Logout', async (req, res) => {
  try {
    //we need to get the list of projects and their creators for display

    res.render('logout', { user: req.session });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
