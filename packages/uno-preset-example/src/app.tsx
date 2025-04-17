import {observer} from 'mobx-react-lite'
import 'uno.css'

export const App = observer(({}) => {
  return (
    <div className='wh-100vw-100vh'>
      <div className='main wh-300-400 shadow-0-0-3-0-gray abs-20-20-lt lay-v p-10 space-y-10'>
        <div className='wh-full-40 bg-blue/10 lay-h px-10 text-16-blue-600'>这是标题</div>
        <div className='wh-full-300 bd-gray-t px-10'>
          这是内容: 就是内容, 一段内容
          <div className='wh-full-40 lay-h-around text-16-blue-600'>
            <div className='wh-full-40 lay-h-around lay-c text-16-blue-600 bd-blue r-8-l'>
              取消
            </div>
            <div className='wh-full-40 lay-h-around lay-c text-16-white-600 bg-blue r-8-r'>
              确定
            </div>
          </div>
        </div>
        <div className='wh-60 lay-c-col gap-2 bg-gray/40'>
          <div className='fit-0-0 bg-red'>上</div>
          <div className='fit-0-0 bg-blue'>下</div>
        </div>
      </div>
    </div>
  )
})
