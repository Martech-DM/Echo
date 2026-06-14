import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Echo",
  description: "Privacy Policy for Echo by Martech DM",
}

const sections = [
  {
    title: "Information we collect",
    body: [
      "Echo collects account information you provide, such as your name, email address, workspace details, and connected channel settings.",
      "When you connect Meta Messenger, Echo processes Page identifiers, access tokens, webhook events, sender identifiers, message content, attachments, and related conversation metadata needed to provide inbox, automation, and support features.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use information to operate Echo, deliver messages, manage conversations, connect integrations, secure accounts, troubleshoot issues, and improve service reliability.",
      "We do not sell personal information. We do not use Messenger message content for unrelated advertising or tracking.",
    ],
  },
  {
    title: "Sharing and subprocessors",
    body: [
      "We share information only when needed to provide the service, comply with law, protect rights and security, or work with infrastructure providers that help us host, store, process, or deliver Echo.",
      "Messenger data is exchanged with Meta only as required to authenticate the Page, receive webhook events, and send or manage Page messages through Meta APIs.",
    ],
  },
  {
    title: "Data retention and deletion",
    body: [
      "We retain account, workspace, integration, and message data while your workspace uses Echo, unless a shorter period is required by law or requested by an authorized account owner.",
      "To request deletion of your data or revoke Messenger access, contact us at william@martechdm.com. You can also remove Echo from your Meta Business integrations or Page settings.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable technical and organizational controls to protect information, including encrypted transport, access controls, and restricted handling of integration credentials.",
      "No internet service is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions, data requests, or app review inquiries, contact Martech DM at william@martechdm.com.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-8 px-6 py-12 text-foreground">
      <header className="space-y-3">
        <p className="font-medium text-muted-foreground text-sm">Echo</p>
        <h1 className="font-semibold text-3xl tracking-normal">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm">
          Effective date: June 14, 2026
        </p>
      </header>

      <section className="space-y-4 text-base leading-7">
        <p>
          Echo is operated by Martech DM. This Privacy Policy explains how we
          collect, use, disclose, and protect information when you use Echo,
          including when you connect Meta Messenger.
        </p>
      </section>

      {sections.map((section) => (
        <section className="space-y-3" key={section.title}>
          <h2 className="font-semibold text-xl tracking-normal">
            {section.title}
          </h2>
          <div className="space-y-3 text-base leading-7 text-muted-foreground">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
