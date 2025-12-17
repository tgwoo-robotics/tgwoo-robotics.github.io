function Publications() {
  const publications = [
    {
      authors: 'Hong, Gildong*, Kim, Chulsoo, Lee, Younghee',
      title: 'A Novel Approach to Deep Learning for Computer Vision',
      venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
      year: '2024',
      note: '* denotes equal contribution',
      links: [
        { type: 'Paper', url: '#' },
        { type: 'Code', url: '#' },
      ],
    },
    {
      authors: 'Kim, Chulsoo, Hong, Gildong, Park, Minsoo',
      title: 'Efficient Training of Large Language Models',
      venue: 'International Conference on Machine Learning (ICML)',
      year: '2023',
      links: [
        { type: 'Paper', url: '#' },
        { type: 'arXiv', url: '#' },
      ],
    },
    {
      authors: 'Hong, Gildong, Lee, Younghee',
      title: 'Understanding Neural Network Architectures',
      venue: 'Neural Information Processing Systems (NeurIPS)',
      year: '2022',
      links: [
        { type: 'Paper', url: '#' },
      ],
    },
  ]

  return (
    <section className="animate-fade-in animate-delay-300">
      <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">Publications</h2>
      <div className="space-y-5">
        {publications.map((pub, index) => (
          <div key={index} className="leading-relaxed bg-gray-700 border border-gray-600 rounded-lg p-5 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <p className="text-gray-300 mb-2 text-sm">
              <span className="font-medium">{pub.authors}</span>
            </p>
            <p className="text-white mb-2 font-semibold">
              "{pub.title}"
            </p>
            <p className="text-gray-400 italic mb-2 text-sm">
              {pub.venue}, {pub.year}
            </p>
            {pub.note && (
              <p className="text-xs text-gray-500 mb-2">{pub.note}</p>
            )}
            <div className="flex gap-3 text-sm">
              {pub.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:scale-105"
                >
                  [{link.type}]
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publications
