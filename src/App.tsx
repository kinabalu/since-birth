import * as React from 'react'
import { Stack, styled } from '@mui/material'
import { RadioGroup } from '@mui/material'
import { FormControl, FormControlLabel, FormLabel } from '@mui/material'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterDayjs'
import DateTimePicker from '@mui/lab/DateTimePicker'

import Header from '@/header'
import dayjs from 'dayjs'
import numeral from 'numeral'

const App: React.FC = () => {
  const [value, setValue] = React.useState<Date | null>(new Date())
  const [timeSince, setTimeSince] = React.useState<number | null>(null)

  const [unit, setUnit] = React.useState<string>('minute')

  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      setValue(newValue)
    }
  }

  const unitToHuman = (unitKey: string) => {
    if (unitKey === 'minute') {
      return 'minutes'
    }
    if (unitKey === 'second') {
      return 'seconds'
    }
  }

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value)
  }

  React.useEffect(() => {
    const now = dayjs()

    if (unit === 'minute') {
      setTimeSince(now.diff(dayjs(value), 'minute'))
    } else if (unit === 'second') {
      setTimeSince(now.diff(dayjs(value), 'second'))
    }
  }, [value, unit])

  return (
    <Root>
      <Header />
      <Stack spacing={5}>
        <div>
          <h2>How long have I been here</h2>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
              label='Enter your birth date and time'
              value={value}
              onChange={handleChange}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <FormControl component='fieldset'>
          <FormLabel component='legend'>By Unit</FormLabel>
          <RadioGroup aria-label='unit' value={unit} onChange={handleUnitChange} name='units-group'>
            <FormControlLabel value='minute' control={<Radio />} label='Minutes' />
            <FormControlLabel value='second' control={<Radio />} label='Seconds' />
          </RadioGroup>
        </FormControl>

        {value && (
          <div>
            <h2>
              You've been here for: {numeral(timeSince).format('0,0')} {unitToHuman(unit)}
            </h2>
          </div>
        )}
      </Stack>
    </Root>
  )
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
