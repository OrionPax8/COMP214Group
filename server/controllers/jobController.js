const {getAllJobs} = require('../services/db');

const getJobList = async (req, res, next) => {
    let jobList = await getAllJobs();
    try {      
      res.render('index', {
        jobList
        ,title: 'Job Description'
        ,component: 'job' })
  
    } catch (err){
      console.log(err);
  
    }
  
  }

  const getJobEditPage = async (req, res, next) => {
    let jobList = await getAllJobs();
    try {      
      res.render('index', {
        jobList
        ,title: 'Edit Jobs'
        ,component: 'editjobs' })
  
    } catch (err){
      console.log(err);
  
    }
  
  }

  const getCreateJobPage = async (req, res, next) => {
      res.render('index', {title: 'Create Job', component: 'createjob'});
  };

  const postCreateJobPage = async (req, res, next) =>{

    let newJob = new Job({
      JOB_ID: req.body.jobID,
      JOB_TITLE: req.body.jobTitle,
      MIN_SALARY: req.body.minSal,
      MAX_SALARY: req.body.maxSal,      
    });
  
    
    createJob(newJob);
  }

  const getViewJobPage = async (req, res, next) => {
    let jobList = await getAllJobs();
    try {      
      res.render('index', {
        jobList
        ,title: 'View Job'
        ,component: 'viewjob' })
  
    } catch (err){
      console.log(err);
  
    }
  }

module.exports = { getJobList, getJobEditPage, getCreateJobPage, postCreateJobPage, getViewJobPage };
