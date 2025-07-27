import { PlusIcon } from '../assets/icons'
import { LastCard, LastCardContent1, LastCardContent2, NumberCard } from '../components'

const Overview = () => {
  return (
    <div className='pt-[54px] pb-[30px] px-[30px]'>
     <div className='flex items-center gap-[30px] mb-[30px]'>
      <NumberCard title={"Unresolved"} number={60}/>
      <NumberCard title={"Overdue"} number={16}/>
      <NumberCard title={"Open"} number={43}/>
      <NumberCard title={"On hold"} number={64}/>
     </div>
    <div className='flex justify-between border-[1px] border-[#DFE0EB] rounded-[8px]'>
      <div className='p-[32px] w-[780px] '>
        <strong className='font-bold text-[19px] text-[#252733] mb-[8px] '>Today’s trends</strong>
        <div  className='flex justify-between'>
          <p className='font-normal text-[12px] leading-[16px] text-[#9FA2B4] '>as of 25 May 2019, 09:41 PM</p>
          <div className='flex items-center justify-end gap-[40px]'>
          <span className='w-[16px] h-[1px] bg-[#3751FF] '></span>
            <p className='font-semibold text-[12px] text-[#9FA2B4] '>Today</p>
            <p className='font-semibold text-[12px] text-[#9FA2B4] '>Yesterday</p>
          </div>
        </div>
      </div>
      <div>
        <NumberCard title={"Resolved"} number={449} extraClass={"w-[342px] rounded-0"}/>
        <NumberCard title={"Resolved"} number={426} extraClass={"w-[342px] rounded-0"}/>
        <NumberCard title={"Average first response time"} number={"33m"} extraClass={"w-[342px] rounded-0"}/>
        <NumberCard title={"Average first response time"} number={"3h 8m"} extraClass={"w-[342px] rounded-0"}/>
        <NumberCard title={"Average first response time"} number={"94%"} extraClass={"w-[342px] rounded-0"}/>
      </div>
    </div>

    <div className='p-[30px] px-0 flex items-center gap-[30px]'>
    <LastCard title={"Unresolved tickets"} content={"View details"} group={"Group: Support"}>
    <LastCardContent1 content={"Waiting on Feature Request"} number={4238}/>
    <LastCardContent1 content={"Awaiting Customer Response"} number={1005}/>
    <LastCardContent1 content={"Awaiting Developer Fix"} number={914}/>
    <LastCardContent1 content={"Pending"} number={201}/>
    </LastCard>
    <LastCard title={"Tasks"} content={"View all"} group={"Today"} extraClass={"!pt-[8px]"}>
     <div className='px-[32px] py-[19px] flex items-center border-b-[1px] justify-between border-b-[#DFE0EB] '>
    <p className="font-semibold text-[14px] leading-[20px] text-[#C5C7CD] ">Create new task</p>
    <button className='cursor-pointer'><PlusIcon/></button>
    </div>
    <LastCardContent2 content={"Finish ticket update"} btnContent={"Urgent"} extraClass={"bg-[#FEC400]"}/>
    <LastCardContent2 content={"Create new ticket example"} btnContent={"New"} extraClass={"bg-[#29CC97]"}/>
    <LastCardContent2 content={"Update ticket report"} btnContent={"Default"} extraClass={"text-[#9FA2B4] bg-[#F0F1F7]"}/>
    </LastCard>
    </div>


    </div>
  )
}

export default Overview
