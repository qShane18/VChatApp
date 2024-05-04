import { styles } from '@/assets/global_styles';
import { Link } from 'expo-router';
import React from 'react'
import { SafeAreaView, Text, View} from 'react-native';


export default function ABOUT() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>ABOUT</Text>
      <Link href={'./login'}>Go to login</Link>
    </View>
  )
}