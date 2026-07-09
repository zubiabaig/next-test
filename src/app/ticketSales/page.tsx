'use client'

import { useActionState } from "react"
import { buyTicketAction } from "./ticketSalesAction"

export default function TicketSales(){
  const [formState, formAction]= useActionState(buyTicketAction, '')

  return(
    <main style={{fontSize: "36px"}}>
      <form action={formAction} >
        <label htmlFor="ticket-type" aria-label="ticket-type">
          Ticket Type
        </label>
        <input type="text" name="ticketType" id="ticket-type" required placeholder="are you buying a regular, VIP, or VVIP ticket?" style={{
          border: '1px solid black',
          display: 'block',
          fontSize: '16px',
          width: '500px',
          margin: '20px 0',
          padding: '5px'
        }}/>

        <button type="submit"
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '20px',
          padding: '5px'
        }}
        >Buy Ticket</button>
      </form>

      <div>
        <h1>Congratulations! You are rewarded with {' '} <span style={{backgroundColor: 'thistle', padding: '2px'}}>{formState}</span>. Enjoy the games and have fun </h1>
      </div>

    </main>
  )
}
