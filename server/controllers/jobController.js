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

module.exports = { getJobList, getJobEditPage };
