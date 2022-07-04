import React from 'react'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { useIntl } from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
      <MenuItem title={intl.formatMessage({ id: 'MENU.REVISIONDASHBOARD' })} to='/builder' />
      <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        {/* PAGES */}
        <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>
    </>
  )
}
