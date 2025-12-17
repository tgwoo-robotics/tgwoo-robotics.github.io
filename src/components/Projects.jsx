import { useState } from 'react'

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: '프로젝트 1 - 로컬 비디오 예시',
      shortDesc: '프로젝트에 대한 간단한 한 줄 설명',
      fullDesc: '프로젝트에 대한 상세한 설명입니다. 어떤 문제를 해결하기 위해 만들었는지, 어떤 기술을 사용했는지, 어떤 결과를 얻었는지 등을 자세히 작성할 수 있습니다.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400/1f2937/60a5fa?text=Project+1',
      // 로컬 비디오 사용 방법:
      // 1. public 폴더에 videos 폴더 생성 (public/videos/)
      // 2. 비디오 파일을 넣기 (예: public/videos/demo.mp4)
      // 3. 아래처럼 경로 지정
      video: '/videos/demo.mp4',  // 👈 로컬 비디오 경로
      youtubeId: null,  // YouTube 사용 안 함
      features: [
        '주요 기능 1: 실시간 데이터 처리',
        '주요 기능 2: 사용자 인증 시스템',
        '주요 기능 3: 대시보드 분석 도구',
      ],
      links: [
        { type: 'Demo', url: '#' },
        { type: 'GitHub', url: '#' },
        { type: 'Paper', url: '#' },
      ],
    },
    {
      id: 2,
      title: '프로젝트 2 - YouTube 비디오 예시',
      shortDesc: '머신러닝 기반 이미지 분류 시스템',
      fullDesc: 'PyTorch를 활용한 딥러닝 이미지 분류 모델입니다. 대규모 데이터셋을 학습하여 높은 정확도를 달성했습니다.',
      tech: ['Python', 'PyTorch', 'TensorFlow'],
      image: null,  // 이미지 없이 비디오만 표시
      video: null,  // 로컬 비디오 사용 안 함
      // YouTube 사용 방법:
      // YouTube URL에서 video ID만 추출
      // 예: https://www.youtube.com/watch?v=dQw4w9WgXcQ
      //     ↓ 이 부분만 복사: dQw4w9WgXcQ
      youtubeId: 'dQw4w9WgXcQ',  // 👈 YouTube 비디오 ID (예시)
      features: [
        '정확도 95% 이상 달성',
        '실시간 추론 가능',
        'Transfer Learning 적용',
      ],
      links: [
        { type: 'Paper', url: '#' },
        { type: 'Code', url: '#' },
      ],
    },
    {
      id: 3,
      title: '프로젝트 3 - 이미지만 표시',
      shortDesc: '자연어 처리 챗봇 개발',
      fullDesc: 'Transformer 기반의 대화형 AI 챗봇입니다. 다양한 도메인의 질문에 대해 적절한 답변을 생성할 수 있습니다.',
      tech: ['Python', 'Transformers', 'FastAPI'],
      image: 'https://via.placeholder.com/600x400/1f2937/f59e0b?text=Project+3',
      video: null,
      youtubeId: null,
      features: [
        '멀티턴 대화 지원',
        '컨텍스트 이해 능력',
        'REST API 제공',
      ],
      links: [
        { type: 'Demo', url: '#' },
        { type: 'GitHub', url: '#' },
      ],
    },
  ]

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-gray-700 rounded-lg border border-gray-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500 animate-fade-in ${
              index === 0 ? '' : index === 1 ? 'animate-delay-100' : 'animate-delay-200'
            }`}
          >
            <div
              className="p-5 cursor-pointer"
              onClick={() => toggleProject(project.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    expandedProject === project.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <p className="text-gray-300 text-sm mb-3">{project.shortDesc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-600 text-gray-200 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {expandedProject === project.id && (
              <div className="px-5 pb-5 border-t border-gray-600 pt-5 animate-fade-in">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg mb-4 shadow-lg"
                  />
                )}

                {/* 로컬 비디오 */}
                {project.video && (
                  <video
                    src={project.video}
                    controls
                    className="w-full rounded-lg mb-4 shadow-lg"
                  />
                )}

                {/* YouTube 비디오 */}
                {project.youtubeId && (
                  <div className="relative w-full rounded-lg mb-4 shadow-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">상세 설명</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.fullDesc}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">주요 기능</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      {link.type}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
