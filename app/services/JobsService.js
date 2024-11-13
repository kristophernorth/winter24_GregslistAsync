import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"



class JobsService {

  async postJob(formData) {
    const response = await api.post('api/jobs', formData)
    const createdJob = new Job(response.data)
    AppState.jobs.unshift(createdJob)
  }

  async fetchJobs() {
    const response = await api.get('api/jobs')
    const jobs = response.data.map(jobData => new Job(jobData))
    AppState.jobs = jobs
  }

}



export const jobsService = new JobsService()