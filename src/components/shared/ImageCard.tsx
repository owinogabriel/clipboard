
interface ImageProps {
  title: string;
  image: string;
  description: string
}

const ImageCard = ({ image, title, description }: ImageProps) => (
  <div className="flex flex-col  items-center transition-transform hover:scale-105">
    <img src={image} alt={title} className="w-10 h-10 " />
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 max-w-[35ch]">{description}</p>
    </div>
  </div>
);

export default ImageCard;