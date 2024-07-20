import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LuR-XlsJ9uHlT0pRKP14aLwxWH9V4ESzzw&s",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink CIty,Jaipur</Text>
          <Text style={styles.cardDescription}>
            The hawa mahel is Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusantium explicabo molestiae blanditiis et eaque ratione
            atque aperiam ducimus laudantium, qui iure itaque officia dolore
            iste aut numquam doloremque voluptatum quidem?
          </Text>
          <Text style={styles.cardFooter} > 12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,

  },
  card: {
    height:350,
    width: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    
    
  },
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody:{},
  cardTitle:{},
  cardLabel:{},
  cardDescription:{},
  cardFooter:{},
});
