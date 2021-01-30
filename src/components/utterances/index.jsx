import React, { useEffect } from 'react'

// 작업 예정
export default ({ repo, theme }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const utterances = document.createElement('script')

    const config = {
      src: 'https://utteranc.es/client.js',
      repo,
      theme: `github-${theme}`,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.entries(config).forEach(([key, value]) =>
      utterances.setAttribute(key, value)
    )

    rootElm.current.innerHTML = ''
    rootElm.current.appendChild(utterances)
  }, [theme])

  return <div className="utterances" ref={rootElm} />
}
