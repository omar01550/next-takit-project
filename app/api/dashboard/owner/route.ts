import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        "Date": "2024-06-01",
        "Service": "Train",
        "TicketsSold": 120,
        "TotalTickets": 300,
        "LocalUsers": 180,
        "ForeignUsers": 120
    },
    {
        "Date": "2024-06-01",
        "Service": "Bus",
        "TicketsSold": 150,
        "TotalTickets": 300,
        "LocalUsers": 210,
        "ForeignUsers": 90
    },
    {
        "Date": "2024-06-01",
        "Service": "Metro",
        "TicketsSold": 200,
        "TotalTickets": 300,
        "LocalUsers": 220,
        "ForeignUsers": 80
    },
    {
        "Date": "2024-06-02",
        "Service": "Train",
        "TicketsSold": 130,
        "TotalTickets": 310,
        "LocalUsers": 190,
        "ForeignUsers": 120
    },
    {
        "Date": "2024-06-02",
        "Service": "Bus",
        "TicketsSold": 160,
        "TotalTickets": 310,
        "LocalUsers": 220,
        "ForeignUsers": 90
    },
    {
        "Date": "2024-06-02",
        "Service": "Metro",
        "TicketsSold": 210,
        "TotalTickets": 310,
        "LocalUsers": 230,
        "ForeignUsers": 80
    },
    {
        "Date": "2024-06-03",
        "Service": "Train",
        "TicketsSold": 140,
        "TotalTickets": 320,
        "LocalUsers": 200,
        "ForeignUsers": 120
    },
    {
        "Date": "2024-06-03",
        "Service": "Bus",
        "TicketsSold": 170,
        "TotalTickets": 320,
        "LocalUsers": 230,
        "ForeignUsers": 90
    },
    {
        "Date": "2024-06-03",
        "Service": "Metro",
        "TicketsSold": 220,
        "TotalTickets": 320,
        "LocalUsers": 240,
        "ForeignUsers": 80
    },
    {
        "Date": "2024-06-04",
        "Service": "Train",
        "TicketsSold": 150,
        "TotalTickets": 330,
        "LocalUsers": 210,
        "ForeignUsers": 120
    },
    {
        "Date": "2024-06-04",
        "Service": "Bus",
        "TicketsSold": 180,
        "TotalTickets": 330,
        "LocalUsers": 240,
        "ForeignUsers": 90
    },
    {
        "Date": "2024-06-04",
        "Service": "Metro",
        "TicketsSold": 230,
        "TotalTickets": 330,
        "LocalUsers": 250,
        "ForeignUsers": 80
    },
    {
        "Date": "2024-06-05",
        "Service": "Train",
        "TicketsSold": 160,
        "TotalTickets": 340,
        "LocalUsers": 220,
        "ForeignUsers": 120
    },
]

export const GET = async (request:NextRequest) => {
      let date =request.nextUrl.searchParams.get("date");
       
      let result = data.filter((item) => {
         return new Date(item.Date) == new Date(date);
      })

    
    
      


      return NextResponse.json({
         data:result.length == 0 ?"not found": result,
         
      },{status:result.length == 0 ?404: 200})
}