import unoPresetGitborlando from '@gitborlando/uno-preset'
import presetRemToPx from '@unocss/preset-rem-to-px'
import {defineConfig, presetUno} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      red: 'rgb(205, 25, 0)',
    },
  },
  presets: [presetUno(), unoPresetGitborlando, presetRemToPx({baseFontSize: 4})],
})
