"use client"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { CardView } from "@/components/card-view"
import { CommunityFilterBar } from "@/components/community-filter-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      <div className="container py-8">
        <div className="mb-8 text-center">
          <p className="mt-2 text-lg text-secondary-600 text-tealpop">
            Discover, filter, and track Ethereum communities worldwide.
          </p>
        </div>
      </div>

      <CommunityFilterBar />

      <Tabs defaultValue="list" className="w-full">
        <TabsContent value="list" className="mt-0 bg-white">
          <CardView />
        </TabsContent>
      </Tabs>
    </div>
  )
}
