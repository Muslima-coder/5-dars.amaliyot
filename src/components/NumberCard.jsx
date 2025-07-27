const NumberCard = ({title, number, extraClass}) => {
  return (
    <div className={`w-[238px] py-[24px] hover:border-[#3751FF] hover:text-[#3751FF]  text-[#9FA2B4] duration-300 border-[1px] border-[#DFE0EB] rounded-[8px] text-center ${extraClass}`}>
        <p className=" font-bold text-[19px]  mb-[12px] ">{title}</p>
        <p className=" hover:text-[#3751FF]  duration-300  font-bold text-[40px] text-[#252733] ">{number}</p>
    </div>
  )
}

export default NumberCard