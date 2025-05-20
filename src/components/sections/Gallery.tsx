// Gallery.tsx

import { ImageCard } from "../shared/ImageCard";

const images = [
  {
    image: "/assets/icon-blacklist.svg",
    title: "Create blacklist",
    description: "Ensure sensitive information never make its way to your clipboard by excluding certain sources.",
  },
  {
    image: "/assets/icon-text.svg",
    title: "Plain text snippets",
    description: "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    image: "/assets/icon-preview.svg",
    title: "Sneak preview",
    description: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

const logos = [
  "google",
  "ibm",
  "microsoft",
  "hp",
  "graphic"
]
export const Gallery = () => {
  return (
    <div className="grid grid-cols-1 text-start sm:grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {images.map((img, index) => (
        <ImageCard key={index} {...img} />
      ))}
    </div>
  );
}

export const Brand = () => {
  return (
    <div className="w-full  justify-center">
    <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6 p-5">
      {logos.map((logo, key) => (
        <div key={key} className="flex justify-center gap-x-6">
          <img
            src={`assets/logos/${logo}.png`}
            alt="Brand Logo"
            width="100"
            height="60"
            className="transition-transform hover:scale-105"
          />
        </div>
      ))}
      </div>
      </div>
  )

}