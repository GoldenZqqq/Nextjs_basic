import Hero from "@/components/hero"
import reliability_bg from "@/public/reliability_bg.jpg"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reliability",
}

export default function Reliability() {
  return (
    <Hero
      imgUrl={reliability_bg}
      altTxt={"Reliability"}
      content={"Reliability~~~~~"}
    />
  )
}
