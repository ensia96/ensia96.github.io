import React from 'react'

import './index.scss'

export default React.memo(({ children }) => (
  <div className="thumbnail-container">{children}</div>
))
