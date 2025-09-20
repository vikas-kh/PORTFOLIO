import { useEffect, useState } from 'react'

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('certifications')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const certifications = [
    {
      title: 'Learn Bug Bounty Hunting & Web Security Testing from Scratch',
      provider: 'Udemy',
      year: '2025',
      credentialId: 'UC-eae739fc-790e-4507-8d68-9ccdd42f385b',
      description: 'Mastered exploiting OWASP Top 10 vulnerabilities using industry-standard tools like Burp Suite and Nmap.',
      skills: [
        'OWASP Top 10 Vulnerabilities',
        'Burp Suite',
        'Nmap',
        'Web Security Testing',
        'Bug Bounty Hunting',
        'Ethical Hacking',
        'Penetration Testing'
      ],
      icon: '🛡️',
      color: 'from-red-500 to-orange-500',
      link: 'https://www.udemy.com/certificate/UC-eae739fc-790e-4507-8d68-9ccdd42f385b/',
      status: 'Completed'
    },
    {
      title: 'The Complete 2024 Web Development Bootcamp',
      provider: 'Udemy',
      year: '2024',
      credentialId: 'UC-16dd0c83-16a7-4506-8b81-bec2be4effe9',
      description: 'Completed a comprehensive course in full-stack development, building and deploying multiple real-world projects using the MERN stack.',
      skills: [
        'MERN Stack',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JavaScript ES6+',
        'HTML5 & CSS3',
        'RESTful APIs',
        'Git & GitHub',
        'Deployment'
      ],
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      link: 'https://www.udemy.com/certificate/UC-16dd0c83-16a7-4506-8b81-bec2be4effe9/',
      status: 'Completed'
    }
  ]

  const achievements = [
    {
      title: 'A Grade Recognition',
      description: 'State Kalolsavam - Tabla Performance',
      year: '2023',
      icon: '🏆',
      category: 'Music'
    },
    {
      title: 'IEEE Webmaster',
      description: 'Technical Leadership Role',
      year: '2025-2026',
      icon: '🌐',
      category: 'Leadership'
    },
    {
      title: 'NSS Leader',
      description: 'Community Service Leadership',
      year: '2020-2022',
      icon: '🤝',
      category: 'Community'
    }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Music':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'Leadership':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Community':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Continuous learning and recognition of my skills and contributions
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover-lift border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Header with gradient */}
                    <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                    
                    <div className="p-6">
                      {/* Icon and Title */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="text-3xl">{cert.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {cert.title}
                          </h4>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {cert.provider}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {cert.year}
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-medium">
                              {cert.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills Learned */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Skills Gained:</h5>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Credential ID */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Credential ID: {cert.credentialId}
                        </p>
                      </div>

                      {/* View Certificate Button */}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Notable Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover-lift p-6 border border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
                I believe in the power of continuous learning and professional development. Each certification represents 
                not just a credential, but a commitment to staying current with industry best practices and emerging technologies. 
                My learning journey spans from technical skills to leadership and community service, reflecting my holistic 
                approach to personal and professional growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Verified Skills</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Industry Recognition</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Practical Application</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

