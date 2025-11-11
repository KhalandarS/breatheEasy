import { useState } from 'react'
import LocationInput from '../LocationInput'

export default function LocationInputExample() {
  const [value, setValue] = useState('')
  
  return (
    <div className="p-4 max-w-md">
      <LocationInput
        label="Start Location"
        placeholder="Enter starting point..."
        value={value}
        onChange={setValue}
        onUseCurrentLocation={() => console.log('Use current location')}
      />
    </div>
  )
}
