import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/assets/global_styles'
import { Link } from 'expo-router'

export default function signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>SIGNUP</Text>
      <Link href={'./login'}>Go to login</Link>
    </View>
  )
}