function Experience() {
  const experiences = [
    {
      title: 'Research Intern',
      organization: '[회사명 또는 연구소]',
      location: '서울, 대한민국',
      period: 'Summer 2023',
      description: '인턴십 동안 수행한 주요 업무와 성과에 대한 설명을 작성합니다.',
    },
    {
      title: 'Teaching Assistant',
      organization: '서울대학교 컴퓨터공학과',
      location: '서울, 대한민국',
      period: '2022 - 2023',
      description: 'Assisted in CS101: Introduction to Computer Science. Conducted weekly lab sessions and graded assignments.',
    },
  ]

  return (
    <section className="animate-fade-in animate-delay-100">
      <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-gray-600 rounded-lg p-5 hover:border-blue-500 transition-all duration-300 bg-gray-700 hover:shadow-xl">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-semibold text-white text-lg">{exp.title}</h3>
              <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-2 font-medium">{exp.organization}, {exp.location}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
