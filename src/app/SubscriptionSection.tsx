import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubscriptionSection() {
    // <div className="flex flex-col lg:flex-row justify-center items-center gap-12 px-5 lg:px-4 py-[96]">
    return (
        <section className="bg-blue-800  text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-5 lg:px-4 py-[96]">
                <div className="flex flex-col items-center gap-4 lg:gap-5">
                    <h2 className="text-3xl">Be the first to know when we launch!</h2>
                    <p className="text-xl">We’re still building. Subscribe for updates. No spam, we promise!</p>
                </div>
                <form className="flex justify-center items-center gap-4">
                    <Input className="flex-grow max-w-72" placeholder="Enter your email"/>
                    <Button className="bg-blue-600">Subscribe</Button>
                </form>
            </div>
        </section>
    )
}