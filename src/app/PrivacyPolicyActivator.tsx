import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PrivacyPolicyActivatorProps {
  children: React.ReactNode;
}

export default function PrivacyPolicyActivator({ children }: PrivacyPolicyActivatorProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="px-0 pb-2">
        <DialogHeader className="px-4">
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-scroll p-4 flex flex-col gap-12">
            <p>At <strong>Polaris</strong> we value your privacy. This Privacy Policy outlines how we handle and protect your information when you provide your email address on our landing page.</p>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">1. Information We Collect</h2>
              <p>We only collect the email address you voluntarily provide when signing up to be notified about our app's release.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
              <p>We will use your email address solely to notify you about the app's release and provide occasional updates about the app, if relevant.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">3. How We Protect Your Information</h2>
              <p>We take appropriate security measures to safeguard your email address from unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">4. Third-Party Sharing</h2>
              <p>We do not sell, rent, or share your email address with third parties, except as necessary to operate our services (e.g., using a trusted email service provider to send notifications).</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">6. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy as needed. The latest version will always be available on this page.</p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}