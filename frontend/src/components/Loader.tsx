// Local
import { ILoader } from './types'

export function Loader({ size = 'medium', children }: ILoader) {
  return (
    <div className='container_main_is_loading'>
      <div
        className='c_loader'
        style={{
          'width': `${size == 'small' ? '20px' : size == 'medium' ? '40px' : '100px'}`,
          'height': `${size == 'small' ? '20px' : size == 'medium' ? '40px' : '100px'}`
        }} />
      <p>{children}</p>
    </div>
  )
}