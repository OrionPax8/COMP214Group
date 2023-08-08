exports.getHomePage = function (req, res, next) {
    res.render('index', { title: 'Home', component: 'home' });
};

exports.getHirePage = function (req, res, next) {
    res.render('hire', { title: 'Hire Employee', component: 'hire' });
};

exports.getlistPage = function (req, res, next) {
    res.render('list', { title: 'Employee List', component: 'list' });
};

exports.getjobDescPage = function (req, res, next) {
    res.render('getjob', {title: 'View Job', component: 'desc'});
};

exports.getJobEditPage = function (req, res, next) {
    res.render('editjobs', {title: 'Edit Jobs', component: 'editjob'});
};

exports.getCreateJobPage = function (req, res, next) {
    res.render('createjob', {title: 'Create Job', component: 'create'});
};

