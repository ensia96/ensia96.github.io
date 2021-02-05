import React from 'react'

import * as data from './data/index'

export default ({ type }) => (
  <svg
    style={{ width: '20px', height: '20px' }}
    viewBox="-5 -7 30 30"
    preserveAspectRatio="none"
    children={<path fillRule="evenodd" clipRule="evenodd" d={data[type]} />}
  />
)
