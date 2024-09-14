import Lenis from 'lenis'

  if (typeof window !== 'undefined') {
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
})
const raf = (time:any) => {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
  }
