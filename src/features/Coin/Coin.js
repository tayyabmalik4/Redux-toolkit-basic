import React from 'react'
import { useSelector } from 'react-redux'

export default function Coin() {
  const value = useSelector((state)=>state.counter.value)
  const themeColor = useSelector((state)=>state.theme.color)
  return (
    <>
    <div className="value" style={{color: themeColor}}>Coins: {value}</div>
    </>
  )
}
