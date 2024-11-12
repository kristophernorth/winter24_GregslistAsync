


export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.createdAt)
    this.imgUrl = data.imgUrl
    this.creator = data.creator
  }

  get jobCard() {
    return `
      <div class="col-md-4 card">
        <h5>${this.jobTitle}</h5>
        <p>${this.company}</p>
        <p>${this.hours}</p>
        <p>${this.rate}</p>
        <p>${this.description}</p>
        <p>${this.imgUrl}</p>
        <div class="d-flex justify-content-between">
          <p>${this.creator.name}</p>
          <img src="${this.creator.picture} " alt="" class="profile - picture - sm">
        </div >
      </div >
      `
  }

  get CreatedAtFormatted() {
    return this.createdAt.toLocaleDateString('en-us', { month: '2-digit', day: '2-digit', year: 'numeric' })
  }

}