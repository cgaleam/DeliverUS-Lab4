/*
La pantalla RestaurantsScreen debería renderizar una lista de restaurantes que pertenecen al propietario. 
Cada elemento debería renderizar al menos el nombre del restaurante, 
y si se hace clic o se toca en un elemento, debería navegar a la pantalla de detalles del restaurante de ese restaurante.
*/

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'    //para usar hooks necesarios
import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import TextRegular from '../../components/TextRegular'
import { getAll } from '../../api/RestaurantEndpoints'
import * as GlobalStyles from '../../styles/GlobalStyles'

export default function RestaurantsScreen({ navigation }) {

  const [restaurants, setRestaurants] = useState([]) //array donde almacenar lista de restaurantes

  useEffect(() => { //para cargar restaurantes en el estado
    console.log('Loading restaurants, please wait 2 seconds')
    setTimeout(() => {
      setRestaurants(getAll) // getAll function has to be imported
      console.log('Restaurants loaded')
    }, 2000)
  }, [])

  const renderRestaurant = ({ item }) => { //renderiza el restautante
    return (
      <Pressable
        style={styles.row}
        onPress={() => {
          navigation.navigate('RestaurantDetailScreen', { id: item.id }) //al clicar muestra el id
        }}>
          <TextRegular>
              {item.name}
          </TextRegular>
      </Pressable>
    )
  }

  return (
  <FlatList //lista con restaurantes mostrada
    style={styles.container}
    data={restaurants}
    renderItem={renderRestaurant}
    keyExtractor={item => item.id.toString()}
  />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actionButton: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    margin: '1%',
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'column',
    width: '50%'
  },
  text: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 5
  }
})