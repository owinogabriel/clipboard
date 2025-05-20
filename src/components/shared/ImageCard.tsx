
interface ImageProps {
  title: string;
  image: string;
  description: string
}




export const ImageCard = ({ image, title, description }: ImageProps) => (
  <div className="flex flex-col  items-center transition-transform hover:scale-105">
    <img src={image} alt={title} className="w-10 h-10 " />
    <div className="p-4  flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 text-base max-w-[40ch]">{description}</p>
    </div>
  </div>
);
