import { NextRequest, NextResponse } from "next/server"

const tickets =[
    {
         price:50,
         count:1,
         number:23434,
         grade:3,
         stations:[
             {
                 name:'almansourah',
                 time:"1:00",
             },
             {
                name:'talkha',
                time:"1:05",
             },
             {
                name:'samanoud',
                time:"1:15",
             },
             {
                name:'almahalah',
                time:"1:25",
             },
             {
                name:'mahalat rouh',
                time:"1:35",
             },
             {
                name:'tanta',
                time:"1:45",
             },
             {
                name:'berkat alsabe',
                time:"1:55",
             },
             {
                name:'quwesna',
                time:"2:15",
             },
             {
                name:'banha',
                time:"2:35",
             },
             {
                name:'shoubrah',
                time:"2:45",
             },
             {
                name:'cairo',
                time:"3:00",
             }
         ]

    },
    {
        price:100,
        count:234423,
         number:1,
        grade:1,
        stations:[
            {
                name:'almansourah',
                time:"3:00",
            },
            {
               name:'talkha',
               time:"3:05",
            },
            {
               name:'samanoud',
               time:"3:15",
            },
            {
               name:'almahalah',
               time:"3:25",
            },
            
            {
               name:'banha',
               time:"4:20",
            },
            {
               name:'cairo',
               time:"4:40",
            }
        ]
    }
]




export const GET = async (request:NextRequest) => {
    
    
     
     
    
    
    
    return NextResponse.json(
         tickets
    )
}