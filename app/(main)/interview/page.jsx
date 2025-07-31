import { getAssessments } from '@/actions/interview'
import React from 'react'
import QuizList from './_component/quiz-list';
import PerformanceChart from './_component/performance-chart';
import StatsCard from './_component/stats-card';

const Interviewpage = async () => {  
  const assessments = await getAssessments();
  return (
    <div>
        <h1 className='text-6xl font-bold gradient-title mb-5'>
          Interview Preparation
        </h1>

        <div>
          <StatsCard assessments={assessments}/>
          <PerformanceChart assessments={assessments}/>
          <QuizList assessments={assessments}/>
        </div>
      </div> 
  )
}

export default Interviewpage
