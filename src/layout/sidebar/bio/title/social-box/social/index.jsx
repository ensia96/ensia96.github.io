import React from 'react'

import href from './href'
import * as icon from './icon'

import Link from './link'
import Image from './image'

export default ({ size, type, value }) => (
  <div>
    <Link href={href[type] + value} target="_blank">
      <Image width={size} src={icon[type]} />
    </Link>
  </div>
)
