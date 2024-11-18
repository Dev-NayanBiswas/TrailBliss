import React from 'react'
import { useOutletContext } from 'react-router-dom'
import AdventureCard from '../../Components/AdventureCard'

function AllCards() {
    const [data] = useOutletContext()
    console.log(data)
  return (
    <>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
            {
                data?.map((cardInfo)=><AdventureCard key={cardInfo.id} card={cardInfo}/>)
            }
        </section>
    </>
  )
}

export default AllCards