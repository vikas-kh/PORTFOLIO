import { useEffect, useState } from 'react'

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience')
      if (!element) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much of the section is visible
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const visibleHeight = Math.min(windowHeight - sectionTop, sectionHeight)
      const progress = Math.max(0, Math.min(1, visibleHeight / sectionHeight))
      
      setScrollProgress(progress)
      setIsVisible(progress > 0.1)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const experiences = [
    {
      title: 'Internship - Test Automation',
      company: 'Sasken Technologies Ltd',
      period: 'June 2025 – July 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Completed an 8-week internship focusing on test automation using Robot Framework and Selenium.',
      achievements: [
        'Developed and executed automated test scripts to validate web applications, improving accuracy and reducing effort',
        'Gained exposure to the software testing life cycle (STLC) and collaborated with mentors to improve debugging and reporting',
        'Worked with Robot Framework and Selenium for comprehensive test automation'
      ],
      technologies: ['Robot Framework', 'Selenium', 'Python', 'Test Automation', 'STLC'],
      icon: '🔧'
    },
    {
      title: 'IEEE Webmaster',
      company: 'IEEE Student Branch',
      period: 'February 2025 – June 2026',
      location: 'Vivekananda College of Engineering',
      type: 'Leadership',
      description: 'Leading technical initiatives and web development for IEEE student branch activities.',
      achievements: [
        'Developing an online registration system for IEEE events, ensuring reliability and seamless user experience',
        'Supporting event preparations by resolving technical issues and building website features',
        'Managing web presence and digital infrastructure for student branch'
      ],
      technologies: ['Web Development', 'Event Management', 'Technical Leadership', 'System Design'],
      icon: '🌐'
    },
    {
      title: 'NSS Leader',
      company: 'Pre-University College (PUC)',
      period: 'June 2020 – March 2022',
      location: 'Kerala, India',
      type: 'Community Service',
      description: 'Led community service initiatives and volunteer coordination for social welfare programs.',
      achievements: [
        'Led a team of volunteers in organizing blood donation camps, cleanliness drives, and social service events',
        'Encouraged student participation in community initiatives, strengthening local engagement',
        'Coordinated multiple community outreach programs and awareness campaigns'
      ],
      technologies: ['Leadership', 'Community Outreach', 'Event Organization', 'Volunteer Management'],
      icon: '🤝'
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Leadership':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Community Service':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A journey of growth through internships, leadership roles, and community service
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-1 bg-gray-200 dark:bg-gray-700 h-full rounded-full">
              <div 
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-100 ease-out"
                style={{
                  height: `${scrollProgress * 100}%`,
                  boxShadow: scrollProgress > 0 ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                }}
              ></div>
            </div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-lg transition-all duration-300 ease-out"
                    style={{
                      opacity: scrollProgress > (0.2 + index * 0.2) ? 1 : 0,
                      transform: `translateX(-50%) ${scrollProgress > (0.2 + index * 0.2) ? 'scale(1)' : 'scale(0)'}`,
                      boxShadow: scrollProgress > (0.2 + index * 0.2) ? '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(147, 51, 234, 0.4)' : 'none'
                    }}
                  ></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5 transform translate-x-10 -translate-y-10"></div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{exp.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center mb-1 sm:mb-0">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
