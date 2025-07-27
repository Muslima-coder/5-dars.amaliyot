const OverwiewLastCards = ({title, content, group, extraClass, children}) => {
  return (
     <div className=' w-[546px] border-[1px] border-[#DFE0EB] rounded-[8px] '>
    <div className={`px-[32px] pt-[32px] pb-[16px] ${extraClass}`}>
    <div className='flex items-center justify-between '>
      <p className='font-bold text-[19px] text-[#252733] '>{title}</p>
      <p className='font-semibold text-[14px] leading-[20px] text-[#3751FF] '>{content}</p>
    </div>
    <p className='font-semibold text-[12px] text-[#9FA2B4]'>{group}</p>
    </div>
    <div>
        {children}
    </div>
    </div>
  )
}

export default OverwiewLastCards