import presetRemToPx from '@unocss/preset-rem-to-px'
import {
	Rule,
	UserShortcuts,
	defineConfig,
	presetUno,
	transformerCompileClass,
	transformerVariantGroup,
} from 'unocss'

const ifExist = (val: string) => {
	return val !== undefined ? `-${val}` : ''
}

const shortcuts: UserShortcuts = [
	[
		/^text-([^-]+)-?([^-]+)?-?([^-]+)?/,
		([_, size, color, weight]) => {
			return `text-${size}${color ? ` text-${color}` : ''}${weight ? ` fw-${weight}` : ''}`
		},
	],
	[
		/^abs-([^-]+)-([^-]+)-?(lt|lb|rt|rb)?/,
		([_, x, y, direction]) => {
			if (!direction) return `absolute left-${x} top-${y}`
			if (direction === 'lt') return `absolute left-${x} top-${y}`
			if (direction === 'lb') return `absolute left-${x} bottom-${y}`
			if (direction === 'rt') return `absolute right-${x} top-${y}`
			if (direction === 'rb') return `absolute right-${x} bottom-${y}`
		},
	],
	[
		/^fix-([^-]+)-([^-]+)-?(lt|lb|rt|rb)?/,
		([_, x, y, direction]) => {
			if (!direction) return `fixed left-${x} top-${y}`
			if (direction === 'lt') return `fixed left-${x} top-${y}`
			if (direction === 'lb') return `fixed left-${x} bottom-${y}`
			if (direction === 'rt') return `fixed right-${x} top-${y}`
			if (direction === 'rb') return `fixed right-${x} bottom-${y}`
		},
	],
	[
		/^lay-(h|v|c)-?([^-]+)?/,
		([_, direction, justify]) => {
			if (direction === 'h') return `flex items-center${justify ? ` justify-${justify}` : ''}`
			if (direction === 'v')
				return `flex items-center flex-col${justify ? ` items-${justify}` : ''}`
			if (direction === 'c') return `flex items-center justify-center`
		},
	],
	[
		/fit-([^-]+)-([^-]+)/,
		([_, x, y]) => {
			return `w-fit h-fit px-${x} py-${y}`
		},
	],
	[
		/radius-([^-]+)-?([^-]+)?/,
		([_, r, direction]) => {
			if (direction) return `rounded-${direction}-${r}`
			return `rounded-${r}`
		},
	],
	[
		/wh-([^-]+)-?([^-]+)?/,
		([_, w, h]) => {
			return h !== undefined ? `w-${w} h-${h}` : `w-${w} h-${w}`
		},
	],
]

const border: Rule<object> = [
	/b-(\d+)-([^-]+)(?:-([trbl](?:,[trbl])*))?/,
	([_, width, color, directions]) => {
		if (!directions) {
			return {
				border: `${width}px solid ${normalColor(color)}`,
			}
		}

		return directions.split(',').reduce(
			(acc, direction) => ({
				...acc,
				[`border-${normal(direction)}`]: `${width}px solid ${normalColor(color)}`,
			}),
			{}
		)
	},
]

const boxShadow: Rule<object> = [
	/shadow-(\d+)-(\d+)-(\d+)-(\d+)-([^-]+)-?(inset)?/,
	([_, x, y, blur, spread, color, inset]) => ({
		'box-shadow': `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${normalColor(
			color
		)}`,
	}),
]

export default defineConfig({
	presets: [presetUno(), presetRemToPx({ baseFontSize: 4 })],
	transformers: [transformerCompileClass(), transformerVariantGroup()],
	shortcuts,
	rules: [border, boxShadow],
})

function normal(val: string) {
	if (val === 'r') return 'right'
	if (val === 'l') return 'left'
	if (val === 't') return 'top'
	if (val === 'b') return 'bottom'
	if (val === 'fit') return 'fit-content'
	if (!/\D/.test(val)) return val + 'px'
	return val
}

function normalColor(val: string) {
	return val
}
