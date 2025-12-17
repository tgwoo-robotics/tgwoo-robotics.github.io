function Education() {
  const education = [
    {
      degree: 'Ph.D. in Computer Science',
      school: '서울대학교',
      location: '서울, 대한민국',
      period: '2021 - Present',
      advisor: 'Advisor: Prof. [교수명]',
      gpa: 'GPA: 4.0/4.0',
    },
    {
      degree: 'M.S. in Computer Science',
      school: '서울대학교',
      location: '서울, 대한민국',
      period: '2019 - 2021',
      thesis: 'Thesis: [논문 제목]',
      gpa: 'GPA: 4.0/4.0',
    },
    {
      degree: 'B.S. in Computer Science',
      school: '서울대학교',
      location: '서울, 대한민국',
      period: '2015 - 2019',
      honors: 'Summa Cum Laude',
      gpa: 'GPA: 4.0/4.0',
    },
  ]

  return (
    <section className="animate-fade-in animate-delay-100">
      <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-5 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <span className="text-sm text-gray-400 font-medium">{edu.period}</span>
            </div>
            <p className="text-gray-300 font-medium mb-1">{edu.school}, {edu.location}</p>
            {edu.advisor && <p className="text-sm text-gray-400 mt-2">{edu.advisor}</p>}
            {edu.thesis && <p className="text-sm text-gray-400 mt-2 italic">{edu.thesis}</p>}
            <div className="flex gap-4 text-sm mt-2">
              {edu.gpa && <span className="bg-gray-600 text-gray-200 px-3 py-1 rounded">{edu.gpa}</span>}
              {edu.honors && <span className="bg-blue-500 text-white px-3 py-1 rounded">{edu.honors}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
