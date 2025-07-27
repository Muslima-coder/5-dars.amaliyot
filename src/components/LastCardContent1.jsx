const LastCardContent1 = ({content, number}) => {
  return (
    <div className=' px-[32px] py-[19px] flex items-center border-b-[1px] justify-between border-b-[#DFE0EB] '>
    <p className="font-semibold text-[14px] leading-[20px] text-[#252733] ">{content}</p>
    <span  className="font-semibold text-[14px] leading-[20px] text-[#9FA2B4] ">{number}</span>
    </div>
  )
}

export default LastCardContent1