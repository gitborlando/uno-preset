import {observer} from 'mobx-react-lite'
import {FC} from 'react'

export const BarComp: FC<{}> = observer(({}) => {
  return (
    <div
      className='wh-100%-48 bg-gray/10 abs-0-0-lb pointer'
      style={{backdropFilter: `blur(10px)`}}></div>
  )
})
