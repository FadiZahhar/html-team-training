import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { closeSidebar, isSideBarOpen } = useGlobalContext()
  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeSidebar()}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((socialLink) => {
          const { id, url, text, icon } = socialLink
          return (
            <li key={id}>
              <a href={url}>
                {' '}
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((socialLink) => {
          const { id, url, icon } = socialLink
          return (
            <li key={id}>
              <a href={url}> {icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
