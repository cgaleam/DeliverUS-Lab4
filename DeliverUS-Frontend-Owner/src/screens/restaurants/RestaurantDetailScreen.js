/* RestaurantDetailScreen para que consulte todos los detalles de un restaurante, incluidos sus productos,
 y renderice su nombre, descripción y la lista de productos. Para ello, seguiremos el mismo enfoque: definir el objeto de estado,
definir un useEffect para que recupere los detalles del restaurante de la API simulada, y renderizar el componente FlatList.
*/

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import { getDetail } from '../../api/RestaurantEndpoints'
import TextRegular from '../../components/TextRegular'

import * as GlobalStyles from '../../styles/GlobalStyles'

export default function RestaurantDetailScreen ({ route }) {

  const [restaurant, setRestaurant] = useState({}) //array donde almacenar lista de restaurantes

  useEffect(() => {
    console.log('Loading restaurant details, please wait 1 second')
    setTimeout(() => {
      console.log('Restaurant details loaded')
    }, 1000)
  }, [])

  const renderProduct = ({ item }) => { //renderiza el producto
    return (
      <Pressable
        style={styles.row}
        onPress={() => { }}>
          <TextRegular>
              {item.name}
          </TextRegular>
      </Pressable>
    )
  }

  const { id } = route.params
  return (//devuelve la vista poniendo el texto shippingcost
    <View style={styles.container}> 
    <TextRegular style={styles.textTitle}>{restaurant.name}</TextRegular>
    <TextRegular style={styles.text}>{restaurant.description}</TextRegular>
    <TextRegular style={styles.text}>shippingCosts: {restaurant.shippingCosts}</TextRegular>
    <FlatList
      style={styles.container}
      data={restaurant.products}
      renderItem={renderProduct}
      keyExtractor={item => item.id.toString()}
    />
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: GlobalStyles.brandSecondary
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
})
