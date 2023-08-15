const Job = require('../models/job');
const jobModel = require('../models/job');
const job = jobModel.Job;
const {getAllJobs, createJob} = require('../services/db');


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
    try {      
      res.render('index', {
        jobList
        ,title: 'Edit Jobs'
        ,component: 'createjob' })
  
    } catch (err){
      console.log(err);
  
    }
  }

  const postCreateJobPage = async (req, res, next) =>{

    let newJob = new Job({
      JOB_ID: req.body.jobID,
      JOB_TITLE: req.body.jobTitle,
      MIN_SALARY: req.body.minSal,
      MAX_SALARY: req.body.maxSal,      
    });
  
    
    createJob(newJob);
  }

module.exports = { getJobList, getJobEditPage, getCreateJobPage, postCreateJobPage };
