import Hero from "@/components/hero"
import home_bg from "@/public/home_bg.jpg"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <Hero
      imgUrl={home_bg}
      altTxt={"hero"}
      content={"Professional Cloud Hosting"}
    />
  )
}
