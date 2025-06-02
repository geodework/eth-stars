## Product Spec: EthStars.xyz

## Overview

A simple, visually engaging website that lists ETHx meetup communities as interactive cards and displayed on a map. Users can browse, search, and view details and key metrics about each community. Inspired by [community.mozilla.org](https://community.mozilla.org/en/), [superteam.fun](https://superteam.fun/), and [nomadlist.com](https://nomadlist.com/).

---

## Core Features

## 1. Homepage: Community Cards Grid & Map View

- Responsive grid of cards/squares, each representing a local community chapter.
- Each card displays:
  - Community name
  - City/region
  - Short tagline or description
  - Thumbnail/logo
  - Url to ETH meetup website
- Clicking a card opens the community’s detail page.
- **High-level community metrics**
  - Community data
  - Number of meetups, devs, events
    • Total number of attendees
    ◦ Conference attendees; hackathon teams formed + project submitted; workshop attendees; startups formed; 
    • Opportunties increased quantitatively: onboard someone onchain; help someone get a sponsorship/grant/bounty/internship/job;
- A map below the cards where, as a user, you can hover over a given country and see basic the same card information on the meetup communities in that country

## 2. Community Detail Page

- Community name, logo, and cover image
- Description
- Location (map or city/region)
- Contact/join links (e.g., website, Discord, email)
- Organizer(s)
- Upcoming events (optional, MVP can skip)

## 3. Search & Filter

- Simple search bar (by name, city, or keyword)
- Filter by region/country (dropdown or tags)

## 4. Add/Edit Community (Admin) - v2

- Simple admin panel to add, edit, or remove communities (for internal use; not public)
- Fields: name, description, location, logo, contact links

---

## Design & Style

- Clean, modern UI (inspired by superteam.fun and nomadlist.com)
- Card-based layout with hover effects
- Mobile-friendly/responsive

---

## Tech Stack

- Frontend: React with NextJS
- Backend
  - short-run: No need. Supabase covers it.
  - long-run: Migrate to Cloud Service like AWS
- Database: Postgres - Same DB that we use for Ethereum Events
- Hosting: Vercel

---

## User Roles

- Visitor: Browse, search, view communities (v1)
- Admin: Add/edit/delete communities (v2)

---

## MVP Scope

- Homepage with card grid
- Community detail pages
- Basic search/filter
- Admin add/edit interface

---

## Stretch Goals

- User accounts & community submissions
- Event listings per community
- Map view of communities
- Event notification to users via Email or SNS
- Enhance credibility of the events and community
  - POAP API, GitHub API, social trust score
- Enhance public funding transparancy - if the community is publicly funded.
  - Visualize **grant → event → impact** chains

---

## Timeline

- Design: 1 week
- Development: ?
- Testing & launch: 1 week

---

**Goal:** Launch a simple, beautiful local communities directory that’s easy to browse and manage.
