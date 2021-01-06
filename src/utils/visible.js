import * as Dom from './dom'

const ROOT_ID = '#___gatsby'
export const TARGET_CLASS = 'observed'
const VISIBLE_RECOGNIZE_CLASS = 'visible'
const INTERSECTION_OBSERVER_ROOT_MARGIN = '20px'
const INTERSECTION_OBSERVER_THRESHOLD = 0.8

let observer

const observeCallback = entries =>
  entries
    .filter(({ isIntersecting }) => isIntersecting)
    .forEach(({ target }) => Dom.addClass(target, VISIBLE_RECOGNIZE_CLASS))

const observerTargeting = () =>
  Dom.getElements(`.${TARGET_CLASS}`).forEach(el => observer.observe(el))

const disconnect = () => {
  if (!observer) {
    throw Error('Not found IntersectionObserver instance')
  }
  return Promise.resolve(observer.disconnect())
}

export const init = () => {
  observer = new IntersectionObserver(observeCallback, {
    root: Dom.getElement(ROOT_ID),
    rootMargin: INTERSECTION_OBSERVER_ROOT_MARGIN,
    threshold: INTERSECTION_OBSERVER_THRESHOLD,
  })

  return observerTargeting()
}

export const destroy = () => disconnect().then(() => (observer = null))

export const refreshObserver = () => disconnect().then(observerTargeting)
