import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import { ClerkProvider } from "@clerk/clerk-react";


if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <div className="bg-black text-white text-xl h-screen w-screen overflow-auto">
      <ClerkProvider publishableKey={clerkPubKey}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </div>
  )
}

export default App
