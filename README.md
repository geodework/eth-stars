# EthStars.xyz

A visually engaging website that lists ETHx meetup communities as interactive cards and displays them on a map. Users can browse, search, and view details and key metrics about each community.

## Features & Upcoming Development

### MVP (v1)

- Responsive grid of community cards
- Community detail pages
- Data storage with Postgres
- Basic search and filter

### v2

- Map view with interactive community info
- Event listings per community
- User accounts & community submissions
- Notification feature via SNS or email
- Dashboard for internal members
- Enhanced credibility of events and communities
- Visualize grant → event → impact chains
- Admin panel for managing communities

## Tech Stack

- **Frontend:** React with Next.js
- **Backend:** Supabase (Postgres)
- **Image Storage:** S3 or IPFS in future.
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (preferred package manager)

### Installation

```bash
pnpm install
```

### Running Locally

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Contributing

We welcome contributions from the community! Whether you want to fix a bug, add a feature, or improve documentation, your help is appreciated.

- Check out the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
- Look for issues labeled `good first issue` or `help wanted`.
- Open an issue or pull request if you have suggestions or improvements.

## License

[Apache 2.0](LICENSE)
