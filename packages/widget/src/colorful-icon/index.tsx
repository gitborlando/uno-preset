import cx from 'classix'
import {ComponentPropsWithRef, forwardRef} from 'react'
import './index.css'

export type IColorfulIcon = ComponentPropsWithRef<'div'> & {
  url: string
}

export const ColorfulIcon = forwardRef<HTMLDivElement, IColorfulIcon>(
  ({url, className, style, ...rest}, ref) => {
    return (
      <div
        className={cx('colorful-icon', className)}
        style={{
          ...style,
          mask: `url(${url}) no-repeat center / contain`,
          WebkitMask: `url(${url}) no-repeat center / contain`,
        }}
        {...rest}
        ref={ref}></div>
    )
  },
)
