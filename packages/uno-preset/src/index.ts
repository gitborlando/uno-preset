import {definePreset, UserShortcuts} from 'unocss'

const unoPresetGitborlando = definePreset(() => {
  const shortcuts: UserShortcuts = [
    [/^pointer$/, () => 'cursor-pointer'],
    [/^gap(?:-(\d+))(?:-(\d+))$/, ([_, x, y]) => `gap-x-${x} gap-y-${y}`],
    [/^p(?:-(\d+))(?:-(\d+))$/, ([_, x, y]) => `px-${x} py-${y}`],
    [
      /^text-([^-]+)-?([^-]+)?-?([^-]+)?$/,
      ([_, size, color, weight]) => {
        return `text-${size}${color ? ` text-${color}` : ''}${weight ? ` fw-${weight}` : ''}`
      },
    ],
    [
      /^abs-([^-]+)-([^-]+)-?(lt|lb|rt|rb)?$/,
      ([_, x, y, direction]) => {
        if (!direction) return `absolute left-${x} top-${y}`
        if (direction === 'lt') return `absolute left-${x} top-${y}`
        if (direction === 'lb') return `absolute left-${x} bottom-${y}`
        if (direction === 'rt') return `absolute right-${x} top-${y}`
        if (direction === 'rb') return `absolute right-${x} bottom-${y}`
      },
    ],
    [
      /^fixed-([^-]+)-([^-]+)-?(lt|lb|rt|rb)?$/,
      ([_, x, y, direction]) => {
        if (!direction) return `fixed left-${x} top-${y}`
        if (direction === 'lt') return `fixed left-${x} top-${y}`
        if (direction === 'lb') return `fixed left-${x} bottom-${y}`
        if (direction === 'rt') return `fixed right-${x} top-${y}`
        if (direction === 'rb') return `fixed right-${x} bottom-${y}`
      },
    ],
    [
      /^lay-(h|v|c)-?([^-]+)?$/,
      ([_, direction, justify]) => {
        if (direction === 'h')
          return `flex items-center${justify ? ` justify-${justify}` : ''}`
        if (direction === 'v')
          return `flex flex-col items-${justify ? justify : 'center'}`
        if (direction === 'c') return `flex items-center justify-center`
      },
    ],
    [
      /^fit-([^-]+)-([^-]+)$/,
      ([_, x, y]) => {
        return `w-fit h-fit px-${x} py-${y}`
      },
    ],
    [
      /^r-([^-]+)-?([^-]+)?$/,
      ([_, r, direction]) => {
        if (direction) return `rounded-${direction}-${r}`
        return `rounded-${r}`
      },
    ],
    [
      /^wh-([^-]+)-?([^-]+)?$/,
      ([_, w, h]) => {
        return h !== undefined ? `w-${w} h-${h}` : `w-${w} h-${w}`
      },
    ],
    [
      /^bd(?:-(\d+))?(?:-([^-]+))?(?:-([trbl]+))?$/,
      ([_, width = 1, color, directions]) => {
        if (!directions) return `b-${width} b-${color} b-solid`
        return [...directions].reduce((acc, direction) => {
          return `${acc}b-${direction}-${width} b-${direction}-${color} b-${direction}-solid `
        }, '')
      },
    ],
    [
      /^shadow-(-?\d+)-(-?\d+)-(-?\d+)-(-?\d+)-([^-]+)-?(inset)?$/,
      ([_, x, y, blur, spread, color, inset]) =>
        `shadow-[${inset ? 'inset_' : ''}${x}px_${y}px_${blur}px_${spread}px] shadow-${color}`,
    ],
  ]

  return {
    name: 'uno-preset-gitborlando',
    shortcuts,
  }
})

export default unoPresetGitborlando
