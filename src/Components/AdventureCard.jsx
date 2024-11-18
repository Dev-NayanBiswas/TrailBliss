import { MdOutlineDoubleArrow } from "react-icons/md";

function AdventureCard({card}) {
    const {adventureTitle,ecoFriendlyFeatures} = card || {};
//   const card = {
//     id: "001",
//     adventureTitle: "Rainforest Canopy Walk",
//     image: "https://example.com/images/rainforest-canopy.jpg",
//     categoryName: "Hiking",
//     shortDescription:
//       "Explore the stunning views from the treetop canopy walk in a pristine rainforest.",
//     adventureCost: 120,
//     bookingAvailability: true,
//     location: "Amazon Rainforest, Brazil",
//     duration: "4 hours",
//     adventureLevel: "Intermediate",
//     includedItems: ["Guided tour", "Safety harness", "Snacks"],
//     ecoFriendlyFeatures: [
//       "Minimal impact pathways",
//       "Solar-powered facilities",
//       "Reusable water bottles provided",
//     ],
//     maxGroupSize: 10,
//     specialInstructions: [
//       "Wear comfortable hiking shoes.",
//       "Apply eco-friendly insect repellent.",
//       "Carry a reusable water bottle.",
//     ],
//   };


  return (
    <>
      <section className='rounded-b-lg shadow-md overflow-hidden'>
        <figure className='overflow-hidden'>
          <img
            src='https://via.placeholder.com/400x250'
            alt={adventureTitle}
            className='w-full h-48 object-cover hover:scale-110 duration-500 transition-all'
          />
        </figure>

        <section className='p-4 hover:text-white hover:bg-gray-600 transition-all duration-500'>
          <section className='flex items-center justify-between mb-4 relative'>
            <button className='bg-white/90 border-[2px] border-[var(--primary-color)] absolute right-4 -top-9 text-[var(--primary-color)] rounded-full shadow-md hover:shadow-lg hover:bg-[var(--primary-color)] font-semibold hover:text-white focus:outline-none transition-all  duration-300 px-6 py-2 flex items-center gap-4'>
              Explore Now <MdOutlineDoubleArrow className='' size={25} />
            </button>
          </section>

          <h2 className='text-2xl mb-3 font-semibold'>{adventureTitle}</h2>
          <p className='font-bold'>Eco Features</p>
          <div className='h-0.5 w-2/12 border-b-[1px] mb-2'></div>
          <ul className=''>
            {ecoFriendlyFeatures?.map((feature, index) => (
              <li key={index} className='text-sm tracking-wide font-medium'>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}

export default AdventureCard;
