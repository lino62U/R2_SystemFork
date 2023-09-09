import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useRef ,useState} from "react";

export default function Footer({logout}) {
  const [user, setUser] = useState({
    username: "aldechi",
  });
  const ref = useRef(true);
  /*
  useEffect(() => {
    if (ref.current) {
      const cookie = () => {
        const token = Cookies.get("token");
        const payolad = jwtDecode(token);
        setUser({
          username: payolad.sub,
          roles: payolad.roles,
        });
      };
      
      cookie();
      return () => (ref.current = false);
    }
  }, []);
  */

  return (
    <div className="fixed top-8 bg-blue-800 right-3 p-3 rounded-md w-64">
      <div className="text-white">Username: <span className="text-white pl-1">{user.username}</span></div>   
      
      <div onClick={logout} className="flex">
        <button className="w-full px-4  text-black flex-1 rounded-md border-2 border-black hover:bg-slate-300">
          Logout
        </button>
      </div>
    </div>
  );
  
}
