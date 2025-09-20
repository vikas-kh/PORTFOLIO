import { useEffect, useState } from 'react'

const Skills = () => {
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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', color: 'bg-blue-500' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: 'bg-orange-500' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: 'bg-yellow-500' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: 'bg-green-500' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: 'bg-red-500' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: 'bg-blue-400' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: [
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: 'bg-cyan-500' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: 'bg-green-600' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', color: 'bg-gray-600' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: 'bg-teal-500' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: 'bg-green-700' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: 'bg-blue-600' }
      ]
    },
    {
      title: 'Developer Tools',
      icon: '🛠️',
      skills: [
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', color: 'bg-blue-500' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: 'bg-orange-600' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: 'bg-gray-800' },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', color: 'bg-orange-500' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: 'bg-blue-600' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', color: 'bg-yellow-600' }
      ]
    },
    {
      title: 'Security Tools',
      icon: '🔒',
      skills: [
        { name: 'Burp Suite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/burpsuite/burpsuite-original.svg', color: 'bg-red-600' },
        { name: 'Nmap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nmap/nmap-original.svg', color: 'bg-green-600' },
        { name: 'Wireshark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wireshark/wireshark-original.svg', color: 'bg-blue-600' },
        { name: 'Kali Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg', color: 'bg-purple-600' },
        { name: 'Nagios', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nagios/nagios-original.svg', color: 'bg-orange-600' },
        { name: 'OWASP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/owasp/owasp-original.svg', color: 'bg-red-500' }
      ]
    }
  ]

  const additionalSkills = [
    { name: 'Test Automation', icon: '🤖', logo: null },
    { name: 'Robot Framework', icon: '🔧', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/robotframework/robotframework-original.svg' },
    { name: 'Selenium', icon: '🌐', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
    { name: 'CNN & Deep Learning', icon: '🧠', logo: null },
    { name: 'Image Processing', icon: '🖼️', logo: null },
    { name: 'Web Security', icon: '🛡️', logo: null },
    { name: 'Bug Bounty', icon: '🐛', logo: null },
    { name: 'Leadership', icon: '👥', logo: null },
    { name: 'Project Management', icon: '📋', logo: null },
    { name: 'Community Service', icon: '🤝', logo: null }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 delay-${categoryIndex * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5 transform translate-x-8 -translate-y-8"></div>
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 group border border-gray-200 dark:border-gray-600">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div className={`w-6 h-6 rounded-full ${skill.color} hidden`}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Additional Skills & Expertise
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {additionalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group border border-gray-200 dark:border-gray-600"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-gray-900 shadow-sm group-hover:shadow-md transition-shadow duration-300 mb-3">
                      {skill.logo ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <div className={`text-2xl group-hover:scale-110 transition-transform duration-300 ${skill.logo ? 'hidden' : 'block'}`}>
                        {skill.icon}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                I'm passionate about staying up-to-date with the latest technologies and continuously expanding my skill set. 
                My approach combines hands-on project experience with formal learning through certifications and courses. 
                I believe in the power of practical application and enjoy tackling new challenges that push me to grow as a developer.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Always Learning</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Project-Focused</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Security-Minded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
