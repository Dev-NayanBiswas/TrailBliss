import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import AdventureCard from '../../Components/AdventureCard';

function CategoryWiseCards() {
    const [similarCards, setSimilarCards] = useState([])
    const {category} = useParams();
    const [data] = useOutletContext();
    console.log(data)
    console.log(category)
    useEffect(()=>{
        const selectedCategory = data?.filter(sameCategory =>sameCategory.categoryName === category);
        console.log(selectedCategory);
        setSimilarCards(selectedCategory)
    },[category]);


  return (
    <>
        CategoryWiseCards <p>{similarCards?.length}</p>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
            {
                similarCards?.map((cardInfo)=><AdventureCard key={cardInfo.id} card={cardInfo}/>)
            }
        </section>
    </>
  )
}

export default CategoryWiseCards