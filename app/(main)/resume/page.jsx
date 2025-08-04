import { getResume } from "@/actions/resume";

const ResumePage = async() => {
    const resume = await getResume()

  return (
    <div className="container mx-auto py-6">
        <ResumeBuilder initialContent={resume?.content}/>
      </div> 
  )
}

export default ResumePage;
