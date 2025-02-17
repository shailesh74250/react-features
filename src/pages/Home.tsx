import Card from "../components/Card";
import { Phone as PhoneIcon } from "lucide-react";

function Home() {
  return (
    <Card 
      title="Crane US" 
      description='70000263'
    >
      <PhoneIcon size={24} color="blue" />
    </Card>
  )
}

export default Home
