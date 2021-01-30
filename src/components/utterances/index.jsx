import React, { useEffect } from 'react'

import * as Dom from '../../utils/dom'
import { THEME } from '../../constants'

const src = 'https://utteranc.es/client.js'
const branch = 'master'
const DARK_THEME = 'photon-dark'
const LIGHT_THEME = 'github-light'

// 작업 예정
export default ({ repo, theme }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const isDarkTheme = theme === 'dark'
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: isDarkTheme ? DARK_THEME : LIGHT_THEME,
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
