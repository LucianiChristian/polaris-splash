import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrivacyPolicyActivator from "./PrivacyPolicyActivator";

export default function SubscriptionSection() {
    return (
        <section className="bg-blue-800  text-white" id="subscription-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-5 lg:px-4 py-[96px]">
                <div className="flex flex-col items-center gap-4 lg:gap-5">
                    <h2 className="text-3xl">Be the first to know when we launch!</h2>
                    <p className="text-xl">We’re still building. Subscribe for updates. No spam, we promise!</p>
                </div>
                <form className="flex justify-center  gap-4">
                    <div>
                        <Input className="flex-grow max-w-72" placeholder="Enter your email"/>
                        <PrivacyPolicyActivator>
                            <small>We care about your data in our <button type="button"><u>privacy policy</u></button>.</small>
                        </PrivacyPolicyActivator>
                    </div>
                    <Button className="bg-blue-600">Subscribe</Button>
                </form>
            </div>
        </section>
    )
}