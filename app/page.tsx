import Hero from "@/components/hero"
import home_bg from "@/public/home_bg.jpg"

export default function Home() {
  return (
    <Hero
      imgUrl={home_bg}
      altTxt={"hero"}
      content={"Professional Cloud Hosting"}
    />
  )
}
