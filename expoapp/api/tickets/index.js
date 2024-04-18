import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../lib/supabase";

export const fetchTickets = (session) => {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: async () => {
      const {data, error} = await supabase.from('tickets').select('*').eq('user', session.user.id)
      if (error) {
        throw new Error(error)
      }
      return data
    },
  })
}

export const useTicket = (id) => {
  return useQuery({
    queryKey: ['tickets', id],
    queryFn: async () => {
      const {data, error} = await supabase.from('tickets').select('*').eq('id', id).single();
      if (error) {
        throw new Error(error)
      }
      return data
    },
  })
}

export const createTicket = (session) => {
  return useQuery({
    queryKey: ['newTicket'],
    queryFn: async () => {
      //create ticket logic
    },
  })
}

