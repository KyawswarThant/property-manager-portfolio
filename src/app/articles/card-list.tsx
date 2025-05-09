// // src/app/articles/CardList.tsx
// import React from 'react';
// import Link from 'next/link';
// import { CardItem } from '../data/articles';

// interface CardListProps {
//   items: CardItem[];
// }

// const CardList: React.FC<CardListProps> = ({ items }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {items.map((item, i) => (
//         <Link href={`/article-contents/${i}`} key={i}>
//           <div
//             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               className="w-full h-48 object-cover"
//               src={item.image}
//               alt={`Card ${i + 1}`}
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-600 mb-4">{item.description}</p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                 {item.buttonText}
//               </button>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default CardList;
// components/CardList.tsx
import React from "react";
import Link from "next/link";
import { CardItem } from "../data/article-items";

interface CardListProps {
  items: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {items.map((item, i) => (
        <Link href={`/article-contents/${i}`} key={i}>
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.image}
              alt={`Card ${i + 1}`}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                {item.buttonText}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardList;