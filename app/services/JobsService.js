import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"



class JobsService {

  async fetchJobs() {
    const response = await api.get('api/jobs')
    const jobs = response.data.map(jobData => new Job(jobData))
    AppState.jobs = jobs
  }

  async postJob() {

  }

}



export const jobsService = new JobsService()