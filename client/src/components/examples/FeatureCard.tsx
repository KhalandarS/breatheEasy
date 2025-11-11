import FeatureCard from '../FeatureCard'
import { MapPin } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <FeatureCard 
        icon={MapPin}
        title="Enter Locations"
        description="Simply enter your start and end points to get started"
      />
    </div>
  )
}
