import { StyleSheet, View, StatusBar } from 'react-native'
import { CustomText } from '../../components/atoms/text'
import { Logo } from '../../components/atoms/logo'

export const LogoScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <CustomText>Starwars - Wiki </CustomText>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
