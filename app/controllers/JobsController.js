import { AppState } from "../AppState.js";
import { jobsService } from "../services/JobsService.js";





export class JobsController {
  constructor() {
    this.fetchJobs()
    AppState.on('jobs', this.drawJobs)
  }

  async fetchJobs() {
    try {
      await jobsService.fetchJobs()
    } catch (error) {
      console.log(error);
    }
  }

  drawJobs() {
    console.log('drawing jobs');
    const jobsListingElm = document.getElementById('job-listings')
    jobsListingElm.innerHTML = ''
    AppState.jobs.forEach(job => jobsListingElm.innerHTML += job.jobCard)
  }

}