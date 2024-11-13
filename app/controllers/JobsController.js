import { AppState } from "../AppState.js";
import { jobsService } from "../services/JobsService.js";
import { Pop } from "../utils/Pop.js";





export class JobsController {
  constructor() {
    this.fetchJobs()
    AppState.on('jobs', this.drawJobs)
  }

  drawJobs() {
    console.log('drawing jobs');
    const jobsListingElm = document.getElementById('job-listings')
    jobsListingElm.innerHTML = ''
    AppState.jobs.forEach(job => jobsListingElm.innerHTML += job.jobCard)
  }

  async fetchJobs() {
    try {
      await jobsService.fetchJobs()
    } catch (error) {
      console.log(error);
    }
  }

  async postJob() {
    try {
      event.preventDefault()
      const formElm = event.target
      console.log('prevent default', formElm);
      await jobsService.postJob(formData)
      Pop.toast("Job Listing Created", 'success', 'top')
      formElm.reset()
    } catch (error) {
      console.log('oh no', error)
      const errorMessage = `😱Oh no! ${error.message} \n ${error.response.data.error}`
      Pop.toast(errorMessage, 'error', 'top', 8000, true)
      console.error(error)
    }
  }

}