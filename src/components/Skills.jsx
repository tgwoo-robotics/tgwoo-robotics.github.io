function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C++', 'Java', 'JavaScript', 'R'],
    },
    {
      category: 'ML/DL Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Linux', 'CUDA', 'LaTeX'],
    },
  ]

  return (
    <section className="animate-fade-in animate-delay-200">
      <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">Technical Skills</h2>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div key={category.category} className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:border-blue-500 transition-colors">
            <span className="font-semibold text-white block mb-2">{category.category}</span>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <span key={index} className="bg-gray-600 text-gray-200 px-3 py-1.5 rounded text-sm shadow-sm hover:bg-gray-500 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
