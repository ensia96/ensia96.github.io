import { useMemo } from 'react'

export default posts =>
  useMemo(
    () =>
      [
        ...new Set(
          posts.map(({ node }) => {
            const pathArray = node.fields.slug.split('/').filter(data => data)

            pathArray.pop()

            return pathArray.join('/')
          })
        ),
      ].reduce((object, path) => {
        let hierarchy = object

        path.split('/').forEach(item => {
          !hierarchy[item] && (hierarchy[item] = {})
          hierarchy = hierarchy[item]
        })

        hierarchy.path = path

        return object
      }, {}),
    []
  )
