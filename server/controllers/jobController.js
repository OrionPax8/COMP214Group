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

module.exports = { getJobList };
