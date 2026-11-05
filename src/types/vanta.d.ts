declare module 'vanta/dist/vanta.clouds.min' {
  interface VantaEffect {
    destroy: () => void
    resize: () => void
    setOptions: (options: Partial<VantaCloudsOptions>) => void
  }
  interface VantaCloudsOptions {
    el: HTMLElement
    THREE: unknown
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    backgroundColor?: number
    skyColor?: number
    cloudColor?: number
    cloudShadowColor?: number
    sunColor?: number
    sunGlareColor?: number
    sunlightColor?: number
    speed?: number
  }
  /**
   * Default export = factory `(options) => effect`
   * (di dalam bundle UMD, nilai ini adalah hasil `register("CLOUDS", ...)`).
   */
  const CLOUDS: (options: VantaCloudsOptions) => VantaEffect
  export default CLOUDS
}
