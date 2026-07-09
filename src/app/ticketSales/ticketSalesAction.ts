'use server'

export async function buyTicketAction(prevState: string, formData: FormData){
  const ticketSalesData = {
    ticketType: formData.get('ticketType')
  }

  const newTicketType = await ticketSalesData.ticketType

  //data mutation

  if(newTicketType === 'regular' || newTicketType === 'vip' || newTicketType === 'vvip'){
    return `an exquisite ${newTicketType} ticket`
  }

  return 'an invalid ticket'
}
