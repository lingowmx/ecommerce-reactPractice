import { useState } from "react"

export const Card = (data) => {
  //Create a state for images with error
  const [imageError, setImageError] = useState(false)
  const handleImageError = () => {
    setImageError(true)
  }
  return (
    <section className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-4 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg px-2 m-1 text-xs">{data.data?.category?.name}</span>
            <img className="w-full h-full object-cover rounded-lg" src={!imageError ? data.data.images[0] : "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=800"} alt="headphones" onError={handleImageError}/>
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-4">+</div>
        </figure>
        <p className="flex place-content-between items-center">
            <span className="text-sm font-light">{data.data?.title}</span>
            <span className="text-lg font-medium">${data.data?.price}</span>
        </p>
    </section>
  )
}
