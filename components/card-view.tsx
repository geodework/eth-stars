"use client"
import { communities } from "@/lib/community-data"

// Helper to get country flag emoji from country name
const countryFlag = (country: string) => {
  const flags: Record<string, string> = {
    Japan: "🇯🇵",
    "Czech Republic": "🇨🇿",
    Argentina: "🇦🇷",
    Poland: "🇵🇱",
    Colombia: "🇨🇴",
    Portugal: "🇵🇹",
    Georgia: "🇬🇪",
    "South Africa": "🇿🇦",
    Philippines: "🇵🇭",
    Canada: "🇨🇦",
    India: "🇮🇳",
    Austria: "🇦🇹",
    Bulgaria: "🇧🇬",
    Brazil: "🇧🇷",
    Ireland: "🇮🇪",
    USA: "🇺🇸",
    Lithuania: "🇱🇹",
    "New Zealand": "🇳🇿",
  }
  return flags[country] || ""
}

export function CardView() {
  return (
    <div className="container py-6">
      <h2 className="mb-6 text-2xl font-bold text-primary">
        Local Ethereum Communities
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => (
          <div
            key={community.id}
            className="border rounded-lg p-4 bg-white shadow-sm flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="flex gap-2 w-full justify-end mb-2">
              {community.isVerified && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
                  <svg
                    className="w-3 h-3 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </span>
              )}
              {community.receivesGrants && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold border border-green-200">
                  <svg
                    className="w-3 h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  Receives Grants
                </span>
              )}
            </div>
            <img
              src={community.logoUrl}
              alt={community.name + " logo"}
              className="mb-3 w-20 h-20 rounded-full object-cover border"
            />
            <h3 className="text-lg font-semibold text-primary mb-1 text-center">
              {community.name}
            </h3>
            <div className="text-sm text-secondary-700 mb-2 text-center">
              {community.city}, {community.region}, {community.country}{" "}
              {countryFlag(community.country)}
            </div>
            <div className="text-secondary-600 text-center mb-2">
              {community.description}
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              <span className="bg-secondary-100 text-secondary-700 rounded-full px-3 py-1 text-xs">
                {community.memberCount} members
              </span>
              <span className="bg-secondary-100 text-secondary-700 rounded-full px-3 py-1 text-xs">
                {community.meetupCount} meetups
              </span>
            </div>
            <div className="text-xs text-secondary-500 mb-2 text-center">
              Organizers: {community.organizerNames.join(", ")}
            </div>
            <div className="flex gap-2 mb-2">
              {community.contactLinks.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline text-xs"
                >
                  {link.type}
                </a>
              ))}
            </div>
            <a
              href={community.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-primary font-medium underline text-sm"
            >
              Visit Website
            </a>
            <a
              href="/events"
              className="mt-3 inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition text-sm font-semibold"
            >
              View Events
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
