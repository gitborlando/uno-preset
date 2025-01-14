import {configure} from 'mobx'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from '~/app'

configure({enforceActions: 'never'})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
