/* eslint-disable @typescript-eslint/no-explicit-any */
import {FC} from 'react'

type Props = {
    children:any;
}

const SplitToFour:FC<Props> = ({children}) => {
  return (
    <div className='splitToFour'>{children}</div>
  )
}

export default SplitToFour