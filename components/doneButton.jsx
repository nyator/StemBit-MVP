import { View, Text, Image } from 'react-native'
import React from 'react'

import { done } from '../constants/icons'

const skipButton = () => {
  return (
    <View className='h-[45px] w-[45px]'>
        <Image 
        source={done}
        />
    </View>
  )
}

export default skipButton