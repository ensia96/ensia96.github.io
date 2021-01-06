import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.min'
import smoothscroll from 'smoothscroll-polyfill'

let scroll

export const init = () => {
  smoothscroll.polyfill()
  scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
  })
  return scroll
}

export const destroy = () => {
  if (!scroll) throw Error('Not founded SmoothScroll instance')

  scroll.destroy()
  scroll = null

  return scroll
}

export const go = dest => {
  if (!scroll) throw Error('Not founded SmoothScroll instance')

  scroll.animateScroll(dest)

  return scroll
}
