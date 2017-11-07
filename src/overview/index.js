import React from 'react'

import { Logo } from '../components'
import { Grid, Column } from '../components/_helpers/grid'

import Overview from './src/overview'

import Colors from './src/colors'
import Icons from './src/icons'
import Spacing from './src/spacing'
import Forms from './src/forms'

import Typography from './src/typography'

export default () => (
  <Overview>
    <Logo />
    <Grid>
      <Column>
        <Colors />
        <Icons />
        <Spacing />
        <Forms />
      </Column>
      <Column>
        <Typography />
      </Column>
    </Grid>
  </Overview>
)