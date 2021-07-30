import Ripple from "react-waves-effect/lib";

import SearchBar from "./SearchBar"

const PageBoard = ({ children }) => {
  return (
    <div className="flex flex-col bg-white w-full items-start h-screen overflow-y-auto">
      <div className="flex justify-between items-center py-3 px-16 bg-[#cbcbcb] w-full  sticky top-0 z-10">
        <div className=" w-2/3">
          <SearchBar />
        </div>
        <div>
          <Ripple pointer onClick={() =>{}}>
            <div className=" rounded-lg px-5 py-3 bg-[#58CEA1] text-white flex items-center">
              <span className="text-white p-1 border rounded mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
              Create Case</div>
          </Ripple>
        </div>
      </div>
      <div className=" px-16 py-4 w-full">
        {children}
      </div>
    </div>)
}

export default PageBoard 