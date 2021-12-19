import { FC } from 'react'
import { AppBar, Button, Divider, Stack, Toolbar } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'

const Header: FC = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar variant='dense'>
        <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={2}>
          <DarkModeToggle />
          <Button color='inherit' onClick={() => window.open('https://github.com/kinabalu/sincebirth')}>
            GitHub
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
