import {observer} from 'mobx-react-lite'
import 'uno.css'
import {BarComp} from '~/components/bar/bar'
import {TableComp} from '~/components/table/table'

export const App = observer(({}) => {
  return (
    <div className='wh-100vw-100vh bd-1-red'>
      <TableComp />
      <BarComp />
    </div>
  )
})
