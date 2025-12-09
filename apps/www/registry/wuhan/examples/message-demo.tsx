import { Message } from "@/registry/wuhan/ui/message"

export default function MessageDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm p-4 border rounded-lg">
      <Message variant="received">Hello, how are you?</Message>
      <Message variant="sent">I'm doing great, thanks for asking!</Message>
      <Message variant="received">
        That's good to hear. Have you tried the new update?
      </Message>
    </div>
  )
}
