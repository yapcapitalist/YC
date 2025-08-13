// import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import lines from '../assets/lines.svg'

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-[#1a1a1a]/10 rounded-xl border border-gray-600 backdrop-blur-sm shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export default function SocialLinks() {
  return (
    <section className="relative pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-8xl mx-auto w-full">
      
            <div className="absolute top-0 right-[0px] !z-0 w-[140px] sm:w-auto">
              <img src={lines} alt="" width="" height="" />
            </div>
      <div className="container relative mx-auto max-w-6xl z-1">
        <h2 className="mb-12 tracking-tight text-center">Social Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Founder Page Link */}
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Instagram className="h-10 w-10 text-pink-600 mb-4" />
              <h2 className="!text-white sm:!text-[28px] font-semibold mb-2">Founder Page</h2>
              <p className="text-muted-foreground mb-4">Connect with the founder on Instagram.</p>
              <a
                href="https://www.instagram.com/gurmeet__oberoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fefe00] hover:underline font-medium"
              >
                @gurmeet__oberoi
              </a>
            </CardContent>
          </Card>

          {/* Cohort Page Link */}
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Instagram className="h-10 w-10 text-pink-600 mb-4" />
              <h2 className="!text-white sm:!text-[28px] font-semibold mb-2">Cohort Page</h2>
              <p className="text-muted-foreground mb-4">Explore the cohort's journey on Instagram.</p>
              <a
                href="https://www.instagram.com/yapcapitalist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fefe00] hover:underline font-medium"
              >
                @yapcapitalist
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
