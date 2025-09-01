
import MidList from './MidList'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function BreadsCrumbs({className,page}) {

    let crumbs=useSelector((state)=>(state.breadCrumbs))
    
  return (
    <div className={` ${className}`}>
        <MidList className='text-5xl font-bold pb-4' text={page}/>
        <div className='pb-20'>
          <p><Link to={crumbs.previousValue=='Home'
          ?
          '/'
          :
          `/${crumbs.previousValue}`}>
          {
          crumbs.previousValue==0
          ?
          page
          :
          crumbs.previousValue
          }</Link> {'>'}{page}</p>
        </div>
    </div>
  )
}

export default BreadsCrumbs