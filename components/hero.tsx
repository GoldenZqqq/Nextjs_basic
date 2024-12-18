import Image, { StaticImageData } from "next/image"

interface IProps {
  imgUrl: StaticImageData
  altTxt: string
  content: string
}

export default function Hero(props: IProps) {
  return (
    <main className=" h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgUrl}
          fill
          alt={props.altTxt}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-60">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </main>
  )
}
