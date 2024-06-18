import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import {users} from '../users/users'
  
  export function TableDemo() {
    return (
      <Table className="text-secondary-100 font-semibold py-10 mt-10">
        <TableCaption>A list of users in takit.</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-secondary-100">Id User</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead className="">Srtvice Type</TableHead>

            <TableHead className="">Ticket Id</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((invoice,i) => (
            <TableRow key={invoice.uid} className={i%2!=0&&"bg-[#f0fbf9]"}>
              <TableCell className="font-medium">{invoice.uid}</TableCell>
              <TableCell>{invoice.uname}</TableCell>
              <TableCell>{invoice.umobile}</TableCell>
              <TableCell className="">{invoice.service}</TableCell>
              <TableCell>{invoice.ticket}</TableCell>
              {/* <td className="flex justify-end items-center gap-3"> */}
                  
              <TableCell className="flex justify-end">
                   <button className="text-lg px-6 py-2 rounded-md bg-[#9F6A3D ] text-white border-none outline-none hover:opacity-70 font-semibold">
                      Details
                   </button>
              </TableCell>
              <TableCell className="">
              {/* <button className="text-lg px-6 py-2 rounded-md bg-primary-100 text-white border-none outline-none hover:opacity-70 font-semibold">
                      Delete
                   </button> */}

              </TableCell>
              {/* </td> */}

            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  