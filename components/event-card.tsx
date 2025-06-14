import React from "react"
import { Calendar, Flag, Globe, MapPin, Thermometer } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { TEventWithRelations } from "@/entities"
import { CATEGORY_META, VENUE_TYPE_NAMES } from "@/lib/filter"
import { TVenueType } from "@/entities"
import { type VariantProps } from "class-variance-authority"
import { EventTypeBadge, badgeVariants } from "./event-type-badge"
import { IconChip } from "./icon-chip"

export function getVenueTypeBadgeVariant(
  venueType: TVenueType
): VariantProps<typeof badgeVariants>["variant"] {
  switch (venueType) {
    case "in_person":
      return "in_person"
    case "virtual":
      return "virtual"
    case "hybrid":
      return "hybrid"
    default:
      return "in_person"
  }
}

interface EventCardProps {
  event: TEventWithRelations
}

export function EventCard({ event }: EventCardProps) {
  const formatDateRange = (start: Date, end: Date) => {
    const startMonth = start.toLocaleString("default", { month: "short" })
    const endMonth = end.toLocaleString("default", { month: "short" })

    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${end.getFullYear()}`
    } else {
      return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${end.getFullYear()}`
    }
  }

  return (
    <Card className="group h-full overflow-hidden border-secondary-200 transition-all hover:shadow-md">
      <CardHeader className="bg-gradient-to-r from-primary-light to-secondary-50 pb-2 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-primary group-hover:text-primary-light-600">
              {event.name}
            </h3>
          </div>
          <EventTypeBadge
            variant={getVenueTypeBadgeVariant(event.venueType)}
            // className={cn(VENUE_TYPE_COLORS[event.venueType])}
          >
            {VENUE_TYPE_NAMES[event.venueType]}
          </EventTypeBadge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pb-2">
        <div className="flex flex-wrap gap-1 -mt-7 pb-1">
          {event.categories.map((cat) => {
            const Icon = CATEGORY_META[cat]?.icon || Flag
            return <IconChip key={cat} icon={Icon} label={cat} />
          })}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">{event.location} 🇺🇸</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            {formatDateRange(event.startDateTime, event.endDateTime)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            Avg. Temp: {event?.weatherMetrics?.temp}°C
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {event.domains?.map((domain) => {
            return (
              <span
                key={domain}
                className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-2 py-1 font-normal text-secondary-500 mr-2 mb-1"
                style={{ fontSize: "15px" }}
              >
                #{domain}
              </span>
            )
          })}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-secondary-100 bg-secondary-50 p-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-secondary-200 bg-white text-secondary-700 hover:bg-primary-light-50 hover:text-primary"
        >
          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-secondary-200 bg-white text-secondary-700 hover:bg-primary-light-50 hover:text-primary"
          onClick={() => {
            window.open(event.links[0], "_blank")
          }}
        >
          <Globe className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
