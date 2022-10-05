import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './ThemeSlice'

const Theme = () => {
    const [color, setColor] = useState("White")
    const dispatch = useDispatch()
  return (
    <div>
      <input type="text" className='textbox' onChange={(e)=>setColor(e.target.value)}/>
      <button className='button' onClick={()=> { dispatch(changeTextColor(color)) }}>Change Text Color</button>
      {/* <h1>{color}</h1> */}
    </div>
  )
}

export default Theme
