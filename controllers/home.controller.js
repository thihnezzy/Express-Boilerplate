// point to the home/index.js view
const getHome = (req, res) => {
  res.render('pages/home', { 
    title: 'Home',
    message: 'Welcome to the home page',
    data: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ] 
  });
};


module.exports = {
  getHome,
};
