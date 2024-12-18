import Hero from "@/components/hero"
import scale_bg from "@/public/scale_bg.jpg"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scale",
}

export default function Scale() {
  return <Hero imgUrl={scale_bg} altTxt={"Scale"} content={"Scale~~~~~"} />
}
