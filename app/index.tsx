import { styles } from '@/assets/global_styles';
import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>HOME</Text>
      <View style={styles.rowContainer}>
        <TouchableHighlight>
          <Link href={'./about'}>Go to About</Link>
        </TouchableHighlight>
        <TouchableHighlight>
          <Link href={'./login'}>Go to Login</Link>
        </TouchableHighlight>
        <TouchableHighlight>
          <Link href={'./signup'}>Go to Signup</Link>
        </TouchableHighlight>
      </View>
    </View>
  )
}