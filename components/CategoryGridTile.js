import { Pressable, View, Text, StyleSheet, Platform , Image} from 'react-native';

function CategoryGridTile({ title, imageURL , onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#e8dddd' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}

        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor:'#e985d2'}]}>
          <Image style={styles.image}
          source={{uri:imageURL}}/>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  image:{
    height:'90%',
    width:'100%',
    paddingTop:5
  }
});