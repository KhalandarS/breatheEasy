import { useState } from 'react'
import RouteOptions from '../RouteOptions'

export default function RouteOptionsExample() {
  const [mode, setMode] = useState('walking')
  
  return (
    <div className="p-4 max-w-md">
      <RouteOptions mode={mode} onModeChange={setMode} />
    </div>
  )
}
