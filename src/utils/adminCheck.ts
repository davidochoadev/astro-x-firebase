import { app } from "../firebase/server";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import type { AstroCookies } from "astro";

interface Admin {
   id: string;
   email: string;
   assigned_at: Date;
   allowed: boolean;
 }

export async function AdminCheck(cookies: AstroCookies) {
  const db = getFirestore(app);
  const adminsRef = db.collection("Admin");
  const adminSnapShot = await adminsRef.get();
  const admins = adminSnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Admin[];
  const auth = getAuth(app);
  const sessionCookie = cookies.get("session")?.value;
   try {
      const decodedCookie = await auth.verifySessionCookie(sessionCookie!);
      const user = await auth.getUser(decodedCookie.uid);
      const checkAdmin = admins.filter((element) => element.email === user.email);
      let isAdmin = false;
      if(checkAdmin.length > 0 || checkAdmin[0]?.allowed === true){
         isAdmin = true;
      };
      return {
         email: user.email,
         isAdmin: isAdmin,
         checkAdmin: checkAdmin[0]?.allowed
      }
   } catch (error) {
      return {
        error: "Errore nella verifica dei cookies: " + error,
      };
    }
}
