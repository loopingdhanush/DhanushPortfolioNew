import React from 'react'
import Psg from './assets/img/psg.png'
import { Badge } from "@/components/ui/badge"
const skills = ["HTML", "CSS", "JavaScript", "Nodejs", "Expressjs", "React", "Mongodb", "Postgresdb", "Python"]

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button'

const App = () => {
  return (
  
<div className="flex flex-col items-center font-sans">

  <div className="flex flex-col max-w-6xl p-4 px-6">

    <div className="flex sticky top-0 justify-center sm:justify-start" >
    
        <NavigationMenu >
        <NavigationMenuList className=" gap-3 py-1 px-2 rounded-xl w-fill backdrop-blur-md bg-white/20 border-2 mt-6">

          <NavigationMenuItem className="block">
            <NavigationMenuLink asChild className="bg-transparent font-semibold hover:bg-transparent"><a href='/'>Home</a></NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
        </NavigationMenu>
      
  </div>

    <div className="flex flex-col gap-2 mt-10 justify-center">
      
      <h1 className="text-3xl md:text-5xl font-semibold " >Hi, I'm Dhanush</h1>
      <p className="text-md md:text-2xl text-gray-600">
        Undergrad Student at Psg College Of Technology <br></br> Actively open to project collaborations</p>
        <a className='mt-6 w-8 h-8' href="https://www.linkedin.com/in/loopingdhanush/"> <img src="https://img.icons8.com/ios-glyphs/30/linkedin.png" className='w-full h-full' alt="linkedin"/> </a>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-md md:text-lg text-gray-600 mt-6">
          I’m a motivated frontend developer driven by curiosity and a passion for learning new web technologies. I enjoy experimenting with tools and frameworks, value feedback for continuous  improvement, and focus on turning ideas into user focused, real world projects.
          </p>
        </div>
    </div>

    <div className="mt-6">
      <h2 className="text-xl font-semibold">Education</h2>

      <div className="flex items-center gap-4  mt-6">
        <img src={Psg} className="h-12"/>
          <div>
              <h3 className="text-[17px] font-semibold">PSG College of Technology</h3>
              <p className="text-[15px] text-gray-800">Bachelor of Technology - Information Technology (2023 - 2027)</p>
          </div>
        </div>
    </div>

    
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-2 mt-6">
        
        {skills.map((item,index)=>(
          <Badge key={index} className="px-2 py-1" variant="default">{item}</Badge>
        ))}

      </ul>
    </div>

    <div className="mt-6">

      <h2 className="text-xl font-semibold mb-6">Projects</h2>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

        <Card className='gap-0 '>
          
          <CardHeader className="flex justify-between ">
            <CardTitle>Portfolio
              <div className='text-sm text-gray-400'>Personal Project (Under Development)</div>
              </CardTitle>
              <a href="http://new.dhanushdev.co.in"><Button variant="outline" size="icon" className=" group cursor-pointer" aria-label="Submit">
              <img width="20" height="20" className='group-hover:-rotate-45 transition' src="https://img.icons8.com/ios-filled/50/right--v1.png" />
            </Button></a>
          </CardHeader>
          
          <CardContent className="text-sm md:text-md mt-6">
           A sleek, responsive showcase built with React, Tailwind CSS, and Shadcn UI. Features a custom layout for maximum readability, a polished and accessible UI.
          </CardContent>          
        </Card>

        <Card className='gap-0 '>
          
          <CardHeader className="flex justify-between ">
            <CardTitle>Easy Exam Academy 
              <div className='text-sm text-gray-400'>Freelance Project</div>
              </CardTitle>
              <a href="http://www.easyexamacademy.com"><Button variant="outline" size="icon" className=" group cursor-pointer" aria-label="Submit">
              <img width="20" height="20" className='group-hover:-rotate-45 transition' src="https://img.icons8.com/ios-filled/50/right--v1.png" />
            </Button></a>
          </CardHeader>
          
          <CardContent className="text-sm md:text-md mt-6">
            Designed and developed the official website for Easy Exam Academy, focusing on clarity, responsiveness, and user experience.
          </CardContent>
          
        </Card>
        

        <Card className='gap-0 '>
          
          <CardHeader className="flex justify-between ">
            <CardTitle>Erode Runners Club
              <div className='text-sm text-gray-400'>Freelance Project</div>
              </CardTitle>
              <a href="http://www.eroderunnersclub.com"><Button variant="outline" size="icon" className=" group cursor-pointer" aria-label="Submit">
              <img width="20" height="20" className='group-hover:-rotate-45 transition' src="https://img.icons8.com/ios-filled/50/right--v1.png" />
            </Button></a>
          </CardHeader>
          
          <CardContent className="text-sm md:text-md mt-6">
            Designed and developed the official website for Erode Runners Club, focusing on clarity, responsiveness, and user experience.
          </CardContent>
        </Card>

      </div>

    </div>

  </div>

</div>
  

  )
}

export default App
