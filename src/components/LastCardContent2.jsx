const LastCardContent2 = ({content, btnContent, extraClass}) => {
  return (
    <div className='px-[32px] py-[19px] flex items-center border-b-[1px] justify-between border-b-[#DFE0EB] '>
   <div className="flex gap-[16px] items-center">
   <label className="cursor-pointer relative w-[20px] h-[20px] border-[2px] border-[#C5C7CD] rounded-full ">
     <input type="checkbox" className="absolute right-0 left-0 bottom-0 top-0 outline-none rounded-full"/>
   </label>
    <p className="font-semibold text-[14px] leading-[20px] text-[#252733] ">{content}</p>
   </div>
   <button className={`font-bold text-[11px] rounded-[8px] text-white px-[12px] cursor-pointer duration-300 hover:opacity-[70%] py-[5px] ${extraClass} `}>{btnContent}</button>
    </div>
  )
}

export default LastCardContent2