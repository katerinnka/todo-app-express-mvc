// controllers/aboutController.js
exports.getAbout = (req, res) => {
  res.render('about', { title: 'О нас' });
};
