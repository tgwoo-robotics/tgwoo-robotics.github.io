function Research() {
  const interests = [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Artificial Intelligence',
  ]

  const projects = [
    {
      title: '[연구 프로젝트 제목]',
      role: 'Lead Researcher',
      period: '2023 - Present',
      description: '프로젝트에 대한 간단한 설명. 연구 목표와 주요 기여 내용을 작성합니다.',
      funding: 'Funded by [연구재단/기관]',
    },
    {
      title: '[연구 프로젝트 제목]',
      role: 'Research Assistant',
      period: '2022 - 2023',
      description: '프로젝트에 대한 간단한 설명. 연구 목표와 주요 기여 내용을 작성합니다.',
    },
  ]

  return (
    <section className="animate-fade-in animate-delay-200">
      <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">Research</h2>

      <div className="mb-6 bg-gray-700 border border-gray-600 rounded-lg p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Research Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span key={index} className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm shadow-sm hover:bg-blue-600 transition-colors">
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Research Projects</h3>
        <div className="space-y-5">
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-gray-600 pl-5 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-semibold text-white">{project.title}</h4>
                <span className="text-sm text-gray-400 font-medium">{project.period}</span>
              </div>
              <p className="text-sm text-blue-400 mb-2 font-medium">{project.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">{project.description}</p>
              {project.funding && <p className="text-sm text-gray-400 italic bg-gray-700 border border-gray-600 inline-block px-2 py-1 rounded">{project.funding}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research
