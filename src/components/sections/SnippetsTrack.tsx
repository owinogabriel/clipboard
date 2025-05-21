import { useEffect, useState } from "react";
import Mac from "/assets/image-computer.png"
import { v4 as uuidv4 } from 'uuid';

// Defines an interface for the snippet item
interface SnippetItem {
  id: string;
  title: string;
  Description: string;
}

const SnippetsTrack = () => {
  const [items, setItems] = useState<SnippetItem[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const jsonFilePath = '/items.json';

    fetch(jsonFilePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const itemsWithUniqueIds = data.map(item => ({
            ...item,
            id: uuidv4() // Assigns a unique ID using uuid
          }));
          setItems(itemsWithUniqueIds);
          setError(null);
        } else {
          throw new Error("Fetched data is not an array. Check your JSON file.");
        }
      })
      .catch(err => {
        console.error("Error fetching items:", err);
        setError(err.message);
        setItems([]);
      });
  }, []);

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
      Error loading content: {error}. Please check your `items.json` file and path.
    </div>;
  }

  return (
    <div className="flex  flex-col mt-10 items-center">
      <h1 className="mt-6">Keep track of your snippets</h1>
      <p className="max-w-[35ch] lg:max-w-[70ch] mt-5 mb-10 text-center">Clipboard instantly stores any item you copy in the cloud, meaning you can access
        your snippets immediately on all your devices. Our Mac and Ios apps will help you organize everything.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 p-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img src={Mac} alt="Mac Image" className="max-w-full h-auto rounded" />
        </div>

        {/* Items Section */}
        {items.length > 0 ? (
          <ul className="space-y-6  md:text-left">
            {items.map(item => (
              <li key={item.id} className="p-2 text-justify">
                <h3 className="text-2xl text-gray-700 font-semibold">{item.title}</h3>
                <p className="max-w-[40ch] text-gray-500 mt-2 mx-auto md:mx-0">{item.Description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No features to display.</p>
        )}
      </div>

    </div>
  )
}

export default SnippetsTrack