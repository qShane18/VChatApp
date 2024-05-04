import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/assets/global_styles'
import { Link } from 'expo-router'

export default function login() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>LOGIN</Text>
      <Link href={'./signup'}>Go to signup</Link>
    </View>
  )
}