import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import AdventureCard from '../../Components/AdventureCard'

function AllCards() {
  const [cardCount, setCardCount] = useState(6)
    const [data] = useOutletContext()
  return (
    <>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 min-h-screen">
            {
                data?.slice(0,cardCount).map((cardInfo)=><AdventureCard key={cardInfo.id} card={cardInfo}/>)
            }
        </section>
        <section className="my-10 flex justify-between items-center w-full">
          {cardCount > 6 ? <button onClick={()=>setCardCount(prev=>prev - 6)} className="px-8 py-2 border-[1px] border-[var(--primary-color)] font-semibold text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white btn_anim rounded-s-full self-start">See Less</button>:""}
          <div className="flex-1"></div>
          {cardCount < data.length ? <button onClick={()=>setCardCount(prev=>prev + 6)} className="px-8 py-2 border-[1px] border-[var(--primary-color)] font-semibold text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white btn_anim rounded-e-full self-end">See More</button>:""}
        </section>
    </>
  )
}

export default AllCards