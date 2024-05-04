import React from 'react'
import { Slot } from 'expo-router'
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva';

export default function HomeLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
        <Slot/>
    </ApplicationProvider>
  )
}