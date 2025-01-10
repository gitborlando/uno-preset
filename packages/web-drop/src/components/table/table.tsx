import {observer} from 'mobx-react-lite'
import {FC} from 'react'

export const TableComp: FC<{}> = observer(({}) => {
  return (
    <div
      className='wh-100%'
      style={{background: `url(./table.webp) center center / cover no-repeat`}}></div>
  )
})
