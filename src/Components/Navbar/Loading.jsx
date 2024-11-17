import React from 'react'

function Loading() {
  return (
    <section className="grid place-items-center h-screen w-full bg-green-100/15">
        <figure>
      <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
    </figure>
    </section>
  )
}

export default Loading