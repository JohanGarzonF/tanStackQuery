import { FiRefreshCcw } from 'react-icons/fi'

export const LoadingSpinner = () => {
  return (
    <div className='loading'>
        <div className='w-full flex justify-center h-52 items-center'>
            <FiRefreshCcw className="animate-spin" size={40}/>
        </div>
    </div>
  )
}