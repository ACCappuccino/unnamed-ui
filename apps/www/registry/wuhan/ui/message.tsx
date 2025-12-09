import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const messageVariants = cva(
  "inline-block max-w-[70%] rounded-2xl px-4 py-2 text-sm leading-relaxed",
  {
    variants: {
      variant: {
        sent: "bg-black text-white self-end",
        received: "bg-gray-200 text-gray-900 self-start",
      },
    },
    defaultVariants: {
      variant: "received",
    },
  }
)

export interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(messageVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Message.displayName = "Message"

export { Message, messageVariants }

