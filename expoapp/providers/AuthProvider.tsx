import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";

type AuthData = {
  session: Session | null;
  loading: boolean;
  profile: any;
  isTechnician: boolean;
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: true,
  profile: null,
  isTechnician: false,
  
});

export default function AuthProvider({children}: PropsWithChildren)  {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    const fetchSession = async() => {
      const {data : {session}} = await supabase.auth.getSession()
      setSession(session)

      if(session){
        const {data} = await supabase.from('profiles').select('*').eq('id', session.user.id).single()
        setProfile(data || null)
      }
      setLoading(false)
    }

    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {  
      setSession(session)
    })
  }, [])
  


  return(
  <AuthContext.Provider value={{session, loading, profile, isTechnician: profile?.group === "TECH"}}>
    {children}
  </AuthContext.Provider>
  )
} 

export const useAuth = () => useContext(AuthContext)