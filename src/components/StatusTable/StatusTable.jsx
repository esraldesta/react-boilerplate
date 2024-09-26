import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

const invoices = [
  {
    name: 'user one',
    email: 'userone@gmail.com',
    status: true
  },
  {
    name: 'user one',
    email: 'userone@gmail.com',
    status: true
  },
  {
    name: 'user one',
    email: 'userone@gmail.com',
    status: true
  },
  {
    name: 'user one',
    email: 'userone@gmail.com',
    status: true
  },
  {
    name: 'user one',
    email: 'userone@gmail.com',
    status: true
  }
]

export default function StatusTable() {
  return (
    <Card className="w-full md:w-[500px]">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead></TableHead>
            <TableHead className="text-right mr-5">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right mr-5">
                {invoice.status.toString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">5</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  )
}
