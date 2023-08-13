exports.getHomePage = function (req, res, next) {
    res.render('index', { title: 'Home', component: 'home' });
};

exports.getjobDescPage = function (req, res, next) {
    res.render('index', {title: 'View Job', component: 'job'});
};

exports.getJobEditPage = function (req, res, next) {
    res.render('index', {title: 'Edit Jobs', component: 'editjobs'});
};

exports.getCreateJobPage = function (req, res, next) {
    res.render('index', {title: 'Create Job', component: 'createjob'});
};

