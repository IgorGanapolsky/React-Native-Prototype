import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import { useWindowDimensions } from 'react-native';
import { Colors } from "../constants/Colors";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      {
        name: "Hummus",
        description: "Creamy chickpea dip",
        price: '$8.99'
      },
      {
        name: "Falafel",
        description: "Crispy fried chickpea balls",
        price: '$7.99'
      },
      {
        name: "Eggplant Salad",
        description: "Grilled eggplant with fresh herbs",
        price: '$9.99'
      }
    ]
  },
  {
    title: "Main Dishes",
    data: [
      {
        name: "Chicken Shawarma",
        description: "Marinated grilled chicken wrapped in pita",
        price: '$12.99'
      },
      {
        name: "Beef Kebab",
        description: "Grilled skewered beef with spices",
        price: '$14.99'
      },
      {
        name: "Lamb Chops",
        description: "Grilled tender lamb chops",
        price: '$16.99'
      }
    ]
  },
  {
    title: "Sides",
    data: [
      {
        name: "Rice Pilaf",
        description: "Fluffy seasoned rice",
        price: '$4.99'
      },
      {
        name: "Greek Salad",
        description: "Fresh salad with feta cheese and olives",
        price: '$6.99'
      },
      {
        name: "Grilled Vegetables",
        description: "Assorted grilled vegetables",
        price: '$5.99'
      }
    ]
  },
  {
    title: "Desserts",
    data: [
      {
        name: "Baklava",
        description: "Sweet pastry with nuts and honey",
        price: '$3.99'
      },
      {
        name: "Kunafa",
        description: "Cheese-filled pastry soaked in sweet syrup",
        price: '$4.99'
      },
      {
        name: "Turkish Delight",
        description: "Assorted flavored gelatin squares",
        price: '$2.99'
      },
      {
        name: "Tiramisu",
        description: "Delicious tiramisu made with ladyfingers",
        price: '$5.99'
      },
      {
        name: "Panna Kota",
        description: "Rich panna kota with nuts and honey",
        price: '$6.99'
      }
    ]
  }
];

const ItemSeparator = () => <View style={menuStyles.separator} />
const PageHeader = () => <Text style={menuStyles.pageHeaderText}>Menu</Text>

const Item = ({ name, price, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
    <View style={menuStyles.innerContainer} >
      <Text style={menuStyles.itemText} onPress={onPress}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  </TouchableOpacity>
);

const MenuItems = () => {
  const window = useWindowDimensions();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <Item name={item.name} description={item.description} price={item.price} onPress={() => { alert(item.name) }} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader} onPress={() => setSelectedCategory(title)}>
      {title}
    </Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        alignItems="center"
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => index + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={menuStyles.listContainer}
        windowSize={21} />
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100vh', // This ensures the container does not grow beyond the viewport height
    ...(Platform.OS === 'web' && { overflowY: 'auto' }),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,

  },
  listContainer: {
    paddingBottom: 16,
  },
  pageHeaderText: {
    alignSelf: "center",
    fontSize: 40,
    flexGrow: 1,
    flexWrap: "wrap",
    color: '#FFD700',
    marginBottom: 20,
    marginTop: 20,
    fontFamily: 'Arial, sans-serif', // A sans-serif font for better readability
  },
  sectionHeader: {
    fontSize: 20,
    color: '#444444', // A slightly lighter color for headers
    marginBottom: 10,
    backgroundColor: '#F0F0F0', // A flat, light background color for section headers
    padding: 10, // Padding for better touch interaction
    borderRadius: 5, // Rounded corners for a modern look
  },
  itemText: {
    padding: 10,
    fontSize: 20,
    color: '#444444', // A color that's easy on the eyes
    marginBottom: 10,
    fontFamily: 'Arial, sans-serif',
    maxWidth: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0', // A light separator color
    width: '100%', // Corrected width property
    marginBottom: 10, // Added space below the separator
  },
});
