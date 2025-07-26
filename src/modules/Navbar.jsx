import { Link, NavLink } from 'react-router-dom'
import { AgentsLogo, ArticlesLogo, ContactsLogo, IdeasLogo, MainLogoIcon, OverviewIcon, SettingsLogo, SubscriptionLogo, TicketsLogo } from "../assets/icons"
import { NavItem } from '../components'
const Navbar = () => {
  return (
    <div className='w-[20%] h-[100vh] bg-[#363740]'>
     <Link className={'py-[18px]  text-[#DDE2FF] pl-[32px] flex items-center gap-[12px] '}>
      <MainLogoIcon/>
     <span>{"Dashboard Kit"}</span>
      </Link>
     <nav className='flex flex-col'>
    <NavItem icon={<OverviewIcon/>} title={"Overview"} path={'/'}/>
    <NavItem icon={<TicketsLogo/>} title={"Tickets"} path={'/tickets'}/>
    <NavItem icon={<IdeasLogo/>} title={"Ideas"} path={'/ideas'}/>
    <NavItem icon={<ContactsLogo/>} title={"Contacts"} path={'/contacts'}/>
    <NavItem icon={<AgentsLogo/>} title={"Agents"} path={'/agents'}/>
    <NavItem icon={<ArticlesLogo/>} title={"Articles"} path={'/articles'}/>
    <NavItem icon={<SettingsLogo/>} title={"Settings"} path={'/settings'}/>
    <NavItem icon={<SubscriptionLogo/>} title={"Subscription"} path={'/subscription'}/>
     </nav>
    </div>
  )
}

export default Navbar
