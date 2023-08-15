

function Navbar() {
  return (
    <section className="absolute w-full my-[5px] px-[30px] py-[10px] z-2">
      <div className="flex mx-auto justify-between">
        <div className="w-[45%] flex">nav list</div>
        <div className="w-[9.6%]">logo</div>
        <div className="w-[45%]">
            <div className="flex justify-end">options</div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
