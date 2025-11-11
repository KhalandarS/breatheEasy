import RouteComparisonCard from '../RouteComparisonCard'

export default function RouteComparisonCardExample() {
  const mockRoute = {
    type: "cleanest" as const,
    distance: "2.8 km",
    duration: "35 min",
    avgAQI: 45,
    hotspotsCount: 1
  }
  
  return (
    <div className="p-4 max-w-sm">
      <RouteComparisonCard 
        route={mockRoute}
        onSelect={() => console.log('Route selected')}
      />
    </div>
  )
}
