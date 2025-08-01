// import { Card, CardContent } from "@/components/ui/card"
// import { Instagram } from "lucide-react"

export default function SocialLinks() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-8">Social Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Founder Page Link */}
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Instagram className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Founder Page</h3>
              <p className="text-muted-foreground mb-4">Connect with the founder on Instagram.</p>
              <a
                href="https://www.instagram.com/yapcapitalist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline font-medium"
              >
                @yapcapitalist
              </a>
            </CardContent>
          </Card>

          {/* Cohort Page Link */}
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Instagram className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cohort Page</h3>
              <p className="text-muted-foreground mb-4">Explore the cohort's journey on Instagram.</p>
              <a
                href="https://www.instagram.com/gurmeet__oberoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline font-medium"
              >
                @gurmeet__oberoi
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
