'use client'
import React, { useState, useEffect } from 'react'
//import LoadingPage from '../loading'
import Courses from '@/components/Courses'

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className="text-2xl-bold mb-4">Courses</h1>
      <Courses courses={courses} />
    </div>
  )
}
