import { View, Text, Image } from 'react-native'
import React from 'react'

import {right} from '../constants/icons'

const skipButton = () => {
  return (
    <View className='bg-primary h-[45px] w-[45px] border-[5px] border-[#058C6A] flex items-center justify-center rounded-full'>
        <Image 
        source={right}
        />
    </View>
  )
}

export default skipButton