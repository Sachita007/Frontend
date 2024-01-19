

function Header() {
  return (
      <div className="flex p-[2rem] ml-auto mr-auto  max-w-[72rem] text-white justify-between">
        <div>
            <div className="bg-green-600 h-7 w-7"></div>
        </div>
        <div className="flex">
            <div className="pr-4 pt-[0.5rem]">
                <p>Sign In</p>
            </div>
              <div className="bg-[#6366f1] pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-md">
                  <button className="bg-[##6366f1]">Get Started <span className="ml-[0.25rem] text-[#7dd3fc]">&#8594;</span></button>
            </div>
        </div>
    </div>
  )
}

export default Header