import React from 'react'
import { WebView } from 'react-native-webview'

const Checkout = ({ navigation, route }) => {
  const { uri } = route.params
  const handleStateChange = (e) => {
    const checkoutStatus = {
      success: () => navigation.navigate('CheckoutSuccess'),
      failed: () => navigation.navigate('CheckoutFailure'),
      default: () => {}
    }
    const checkoutFunction = checkoutStatus[e.title] || checkoutStatus.default
    checkoutFunction()
  }
  return (
    <WebView
      onNavigationStateChange={handleStateChange}
      source={{ uri }}
    ></WebView>
  )
}
export default Checkout
