import { DEFAULT_FILTERS } from "@/lib/filter"
import { getCategories } from "@/repositories/categories"
import { getDomains } from "@/repositories/domains"
import {
  getEventsWithRelations,
  TEventWithRelationsDTO,
} from "@/repositories/events"
import { getRegions } from "@/repositories/regions"
import { filterEventsDTO, normalizeEventData } from "./eventDataTransformers"

const eventDomains = await getDomains()
export const domains = [DEFAULT_FILTERS.domain, ...eventDomains]

const eventCategories = await getCategories()
export const categories = [DEFAULT_FILTERS.category, ...eventCategories]

const eventRegions = await getRegions()
export const regions = [DEFAULT_FILTERS.region, ...eventRegions]

const allEvents: TEventWithRelationsDTO[] = await getEventsWithRelations()

const filteredEvents = filterEventsDTO(allEvents)

const normalizedEvents = normalizeEventData(filteredEvents)
export const events = [
  {
    id: 1,
    name: "ETH Sapporo Monthly Meetup",
    location: "Sapporo",
    region: "Hokkaido",
    country: "Japan",
    categories: ["Meetup"],
    domains: ["DeFi", "Education"],
    venueType: "in_person",
    startDateTime: new Date("2024-07-12T18:00:00Z"),
    endDateTime: new Date("2024-07-12T20:00:00Z"),
    links: ["https://geodework.com/eth-sapporo-meetup"],
    socials: ["https://twitter.com/ethsapporo"],
    communities: ["ETH Sapporo House"],
    hasTimezone: true,
    weatherMetrics: {
      tempmax: 25,
      tempmin: 18,
      temp: 22,
      humidity: 65,
    },
  },
  {
    id: 2,
    name: "Brno Crypto Pub Night",
    location: "Brno",
    region: "South Moravia",
    country: "Czech Republic",
    categories: ["Meetup", "Workshop"],
    domains: ["Smart Contracts"],
    venueType: "in_person",
    startDateTime: new Date("2024-07-20T19:00:00Z"),
    endDateTime: new Date("2024-07-20T22:00:00Z"),
    links: ["https://geodework.com/brno-pub-night"],
    socials: ["https://t.me/ethbrno"],
    communities: ["ETH Brno Craft"],
    hasTimezone: true,
    weatherMetrics: {
      tempmax: 28,
      tempmin: 20,
      temp: 24,
      humidity: 55,
    },
  },
  {
    id: 3,
    name: "Rosario Ethereum Café",
    location: "Rosario",
    region: "Santa Fe",
    country: "Argentina",
    categories: ["Meetup"],
    domains: ["Community", "Education"],
    venueType: "in_person",
    startDateTime: new Date("2024-08-05T17:00:00Z"),
    endDateTime: new Date("2024-08-05T19:00:00Z"),
    links: ["https://geodework.com/rosario-cafe"],
    socials: ["https://twitter.com/ethrosario"],
    communities: ["ETH Rosario"],
    hasTimezone: true,
    weatherMetrics: {
      tempmax: 19,
      tempmin: 12,
      temp: 16,
      humidity: 70,
    },
  },
]
