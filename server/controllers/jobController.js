const Job = require('../models/job');
const {getAllJobs, createJob, updateJob} = require('../services/db');


  const getJobEditPage = async (req, res, next) => {
    let jobList = await getAllJobs();
    try {      
      res.render('index', {
        jobList
        ,messages: req.flash()
        ,title: 'Job List'
        ,component: 'editjobs' })
  
    } catch (err){
      console.log(err);
  
    }
  }

  const postJobEditPage = async (req, res, next) =>{
    let id = req.params.id;
    
    let jobToUpdate = new Job({
      JOB_ID: id,
      JOB_TITLE: req.body.jobTitleField,
      MIN_SALARY: req.body.minSalaryField,
      MAX_SALARY: req.body.maxSalaryField
    });
    try{
      await updateJob(jobToUpdate);
      req.flash('success', 'Update Sucessful!')
      res.redirect('/job/editjobs');
    }
    catch(error){
      console.log(error);
    }

    
  }

  const getCreateJobPage = async (req, res, next) => {

    let jobList = await getAllJobs();
    try {      
      res.render('index', {
        jobList
        ,messages: req.flash()
        ,title: 'Create Job'
        ,component: 'createjob' })
  
    } catch (err){
      console.log(err);
  
    }
  }

  const postCreateJobPage = async (req, res, next) =>{

    let newJob = new Job({
      JOB_ID: req.body.jobID,
      JOB_TITLE: req.body.jobTitle,
      MIN_SALARY: req.body.minSal      
    });
  
    try{
      await createJob(newJob);
      req.flash('success', 'Job Created')
      res.redirect('/job/createjob');
    }
    catch(error){
      console.log(error);
    }
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

module.exports = { getJobEditPage, getCreateJobPage, postCreateJobPage, getViewJobPage, postJobEditPage };
