import { useEffect, useState } from 'react'

const About = () => {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    { label: 'Years Learning', value: '3+' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Certifications', value: '2' }
  ]

  const interests = [
    {
      icon: '🎵',
      title: 'Music',
      description: 'Trained Tabla player with A Grade recognition at State Kalolsavam, also skilled keyboard player'
    },
    {
      icon: '🎮',
      title: 'Gaming',
      description: 'Competitive team-based mobile games, focusing on squad strategy and communication'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Passionate about web security, bug bounty hunting, and ethical hacking'
    },
    {
      icon: '💻',
      title: 'Development',
      description: 'Building full-stack applications with modern technologies and best practices'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A solutions-oriented developer with a strong foundation in full-stack web development and cybersecurity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a Computer Science Engineering student at Vivekananda College of Engineering and Technology, 
                    passionate about building secure, scalable applications and leveraging modern technologies to solve complex problems.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    With expertise in React.js, Node.js, Express.js, and MongoDB, I specialize in creating full-stack web applications. 
                    My cybersecurity background includes hands-on experience with tools like Burp Suite, Nmap, and Wireshark, 
                    making me uniquely positioned to build secure applications from the ground up.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    As an IEEE Webmaster and former NSS Leader, I've developed strong leadership and collaboration skills, 
                    leading teams in community initiatives and technical projects. I'm always eager to learn new technologies 
                    and contribute to meaningful projects that make a difference.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="group text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 dark:border-gray-600">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Interests */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Interests & Hobbies
                </h3>
                <div className="grid gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="group flex items-start space-x-4 p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-600">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl p-8 shadow-2xl border border-blue-100 dark:border-gray-600 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Education
                </h3>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Bachelor of Engineering in Computer Science
                  </h4>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    Vivekananda College of Engineering and Technology
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-lg">
                    Puttur, Karnataka
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    November 2022 – June 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
