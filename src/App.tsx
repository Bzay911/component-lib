import './App.css'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {WobbleCard} from './components/WobbleCard'

function App() {

  return (
    <>
    <h1>Shadcn Card</h1>
    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    <h1>My WobbleCard</h1>
  <div className="p-10 flex justify-center">
      <WobbleCard title="Hello!" description="This is my wobble card" />
    </div>
    </>
  )
}

export default App
