import { FormEvent } from 'react'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function InvitationForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="my-1">Select a user to send a span email to</h1>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Email" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="m@example.com">m@example.com</SelectItem>
          <SelectItem value="m@google.com">m@google.com</SelectItem>
          <SelectItem value="m@support.com">m@support.com</SelectItem>
        </SelectContent>
      </Select>
      <Button size="sm" className="my-3" type="submit">
        Submit
      </Button>
    </form>
  )
}
