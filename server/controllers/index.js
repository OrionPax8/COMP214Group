exports.getHomePage = function (req, res, next) {
    res.render('index', { title: 'Home', component: 'home' });
};

exports.getHirePage = function (req, res, next) {
    res.render('index', { title: 'Hire Employee', component: 'hire' });
};

exports.getlistPage = function (req, res, next) {
    res.render('index', { title: 'Employee List', component: 'employees' });
};

exports.getjobDescPage = function (req, res, next) {
    res.render('index', {title: 'View Job', component: 'getjob'});
};

exports.getJobEditPage = function (req, res, next) {
    res.render('index', {title: 'Edit Jobs', component: 'editjobs'});
};

exports.getCreateJobPage = function (req, res, next) {
    res.render('index', {title: 'Create Job', component: 'createjob'});
};

