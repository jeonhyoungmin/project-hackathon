import { View, StyleSheet, Pressable, TextInput } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'

const SearchIconBarTextInput = () => {

  const  [search, setSearch] = React.useState(false)
  const searchButtonChange = () => {
    setSearch(!search);
  }

  return (
    <View style={styles.searchButton}>
      {search && <View>
          <TextInput style={styles.searchBar} />
        </View>}
      <Pressable onPress={searchButtonChange}  >
        <Icons name="md-search-circle-outline" size={32} color="#333" />
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
  searchButton: {
    flex: 3,
    // backgroundColor: 'yellowgreen',
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "2%",
  },
  searchBar: {
    marginRight: "5%",
    width: 250,
    height: 30,
    borderRadius: 5,
  },
})

export default SearchIconBarTextInput