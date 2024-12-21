import Image from "next/image"
import React from "react"
import { photos } from "@/data"

export default function Page({ params }: { params: { id: string } }) {
  const photo = photos.find(item => item.id === params.id)!
  return (
    <div className="container mx-auto pt-8">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={300}
        height={300}
        className="rounded-lg block mx-auto"
      />
      <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6 leading-8">
        <p>
          <strong>Title: </strong> {photo.alt}
        </p>
        <p>
          <strong>Price: </strong> {photo.price}
        </p>
        <p>
          <strong>Desc: </strong> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aperiam corporis, placeat sint labore omnis non
          inventore velit odit vitae facilis saepe vel, in quisquam. Tempore
          aliquam iusto est repellat recusandae.Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Earum culpa cum atque voluptates nisi
          maiores itaque aperiam eaque. Mollitia et illo odio! Adipisci
          voluptate ratione, voluptatibus ex quod incidunt recusandae?
        </p>
      </div>
    </div>
  )
}
