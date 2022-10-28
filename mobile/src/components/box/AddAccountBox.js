import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AddAccountBox = ({serviceName, regi_id,modalOnPress , deleteOnPress, iconSize, iconColor}) => {
  return (
    <Pressable onPress={modalOnPress} style={styles.container}>
      <View style={styles.serviceContainer}>
        <Text style={{marginLeft:"2%"}}>{serviceName}</Text>
      </View>
      <View style={styles.idContainer}>
        <Text>{regi_id}</Text>
      </View>
      <View style={styles.deleteContainer}>
        <Icon onPress={deleteOnPress} name="delete-outline" size={iconSize} color={iconColor}/>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: 'pink',
    marginTop: '2%',
  },
  serviceContainer: {
    flex:1,
    height: "100%",
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  idContainer: {
    flex:1.5,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    
  },
  deleteContainer: {
    flex:0.5,
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddAccountBox