import { CheckCircle, Users, Video, Mic } from "lucide-react"
import GradientButton from "./ui/GradientButton"

export default function AiProofHero() {
    return (
        <section className="relative pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-[1600px] mx-auto">
            <div className="container mx-auto max-w-6xl">
                {/* Main Headline */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="tracking-tight mb-6">
                        Future-Proof Yourself Against AI
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-gray-300">
                        <p>AI will outpace every technical skill you have.</p>
                        <p>
                            Code, design, analytics — the machines will do it faster, cheaper, better. But one thing they can't do is
                            be human.
                        </p>
                    </div>
                </div>

                {/* Key Message */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        <p className="text-xl md:text-2xl font-semibold mb-6">
                            In the age of AI, your real competitive edge is not what you can execute… it's how you can influence.
                        </p>
                    </div>

                    {/* Key Questions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <Users className="h-8 w-8 !text-[#fefe00] mx-auto mb-4" />
                            <p className="text-lg font-medium">Can you get people to trust you?</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <Mic className="h-8 w-8 !text-[#fefe00] mx-auto mb-4" />
                            <p className="text-lg font-medium">Can you lead a room, online or offline?</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <CheckCircle className="h-8 w-8 !text-[#fefe00] mx-auto mb-4" />
                            <p className="text-lg font-medium">Can you pitch an idea so well it gets funded, approved, or bought?</p>
                        </div>
                    </div>
                </div>

                {/* YC Cohort Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">The YC Cohort exists for this exact reason.</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        We'll turn your communication into an asset so sharp, no algorithm can replace it:
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-left rounded-lg border border-gray-700 p-4">
                            <div className="bg-yellow-400/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <Mic className="h-8 w-8 text-[#fefe00]" />
                            </div>
                            <p className="size-diff !font-extrabold mb-3 text-center md:text-left">High-stakes speaking</p>
                            <p className="text-gray-300 text-center md:text-left">Own every meeting, pitch, and negotiation.</p>
                        </div>

                        <div className="text-left rounded-lg border border-gray-700 p-4">
                            <div className="bg-yellow-400/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <Users className="h-8 w-8 text-[#fefe00]" />
                            </div>
                            <p className="size-diff !font-extrabold mb-3 text-center md:text-left">Influence without authority</p>
                            <p className="text-gray-300 text-center md:text-left">
                                Get buy-in from clients, bosses, or teams who don't "have to" listen to you.
                            </p>
                        </div>

                        <div className="text-left rounded-lg border border-gray-700 p-4">
                            <div className="bg-yellow-400/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <Video className="h-8 w-8 text-[#fefe00]" />
                            </div>
                            <p className="size-diff !font-extrabold mb-3 text-center md:text-left">On-camera & online presence</p>
                            <p className="text-gray-300 text-center md:text-left">Lead in the platforms where AI is just noise.</p>
                        </div>
                    </div>
                </div>

                {/* Closing Message & CTA */}
                <div className="text-center">
                    <div className="mb-8">
                        <p className="text-2xl md:text-3xl font-bold mb-4">
                            The future belongs to the ones who can move people, not just manage tasks.
                        </p>
                        <p className="text-xl text-yellow-400 font-semibold">YC will get you there.</p>
                    </div>

                    <div className="pt-8 p-4 sm:p-0 rounded-2xl max-w-2xl mx-auto border border-gray-700">
                        <h3 className="mb-4">Applications are open.</h3>
                        <p className="mb-6">Don't wait until AI makes your current skillset obsolete.</p>

                        <GradientButton
                            onClick={() => {
                                const el = document.getElementById("program-details");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            JOIN WAITLIST
                        </GradientButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
