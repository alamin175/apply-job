const job = async ()=>{
    const jobList = await fetch('job.json')
    const featuredJob = await jobList.json();
    return featuredJob
}
export default job