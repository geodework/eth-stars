import { TEventWithRelations } from "@/entities"
import { IFilterState, DEFAULT_FILTERS } from "@/lib/filter"

export interface EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[]
}

export class RegionFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (filters.region === DEFAULT_FILTERS.region) return events
    return events.filter((event) => event.region === filters.region)
  }
}

export class MonthFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (filters.month === DEFAULT_FILTERS.month) return events

    // Year is not important, we just need to get the month index.
    const monthIndex = new Date(`${filters.month} 1, 9999`).getMonth()
    return events.filter((event) => {
      const eventStartMonth = event.startDateTime.getMonth()
      const eventEndMonth = event.endDateTime.getMonth()
      return (
        eventStartMonth === monthIndex ||
        eventEndMonth === monthIndex ||
        (eventStartMonth < monthIndex && eventEndMonth > monthIndex)
      )
    })
  }
}

export class CityFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (!filters.city) return events

    const cityLower = filters.city.toLowerCase()
    return events.filter(
      (event) =>
        event.location.toLowerCase().includes(cityLower) ||
        event.country.toLowerCase().includes(cityLower)
    )
  }
}

export class CategoryFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (
      filters.categories.length === 1 &&
      filters.categories[0] === DEFAULT_FILTERS.category
    )
      return events
    return events.filter((event) =>
      filters.categories.some((category) => event.categories.includes(category))
    )
  }
}

export class DomainFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (
      filters.domains.length === 1 &&
      filters.domains[0] === DEFAULT_FILTERS.domain
    )
      return events
    return events.filter((event) =>
      filters.domains.some((domain) => event.domains.includes(domain))
    )
  }
}

export class UpcomingOrOngoingFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (!filters.isUpcomingOrOngoing) return events
    const now = new Date()
    return events.filter((event) => event.endDateTime >= now)
  }
}

export class VenueTypeFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (filters.venueType === DEFAULT_FILTERS.venueType) return events
    return events.filter((event) => event.venueType === filters.venueType)
  }
}

export const allEventFilters: EventFilter[] = [
  new RegionFilter(),
  new MonthFilter(),
  new CityFilter(),
  new DomainFilter(),
  new CategoryFilter(),
  new UpcomingOrOngoingFilter(),
  new VenueTypeFilter(),
]

export function applyAllFilters(
  events: TEventWithRelations[],
  filters: IFilterState
): TEventWithRelations[] {
  return allEventFilters.reduce(
    (evts, filter) => filter.apply(evts, filters),
    events
  )
}
