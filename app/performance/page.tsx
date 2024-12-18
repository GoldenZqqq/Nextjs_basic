import Hero from "@/components/hero"
import performance_bg from "@/public/performance_bg.jpg"

export default function Performace() {
  return (
    <Hero
      imgUrl={performance_bg}
      altTxt={"Performance"}
      content={"Performance~~~~~"}
    />
  )
}
