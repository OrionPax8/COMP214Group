exports.getHomePage = function (req, res, next) {
    res.render('index', { title: 'Home', component: 'home' });
};

exports.getHirePage = function (req, res, next) {
    res.render('hire', { title: 'Hire Employee', component: 'hire' });
};

exports.getlistPage = function (req, res, next) {
    res.render('list', { title: 'Employee List', component: 'list' });
};

