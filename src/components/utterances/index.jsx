import React, { useEffect } from 'react'

// 작업 예정
export default ({ repo, theme }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo,
      theme: `github-${theme}`,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterances" ref={rootElm} />
}
