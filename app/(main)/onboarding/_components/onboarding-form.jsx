"use client"

import { onboardingSchema } from "@/app/lib/schema"
import { useForm } from "react-hook-form"
import { zodResolver} from "@hookform/resolvers/zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { 
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const OnboardingForm = ({industries}) => {

  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const router = useRouter()

   const{
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
   } = useForm ({
    resolver: zodResolver(onboardingSchema),
   })
  
  return (
  <div className="flex items-center justify-center bg-background">
    <Card className="w-full max-w-lg mt-11 mx-2">
  <CardHeader>
    <CardTitle className="gradient-title text-5xl">Complete Your Profile</CardTitle>
    <CardDescription className="w-full max-w-lg mt-2">Select your industry to get personalized career insights and recommendations</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      Card Content
    </form>
  </CardContent>
</Card>
    </div>
  )
}

export default OnboardingForm
