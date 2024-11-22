import { View, Text, Image, StyleSheet } from 'react-native';

export default ({ title, expirience, imageSrc }) => {
  return (
    <View style={{
        padding: 30,
        alignItems: 'center'
      }}
    >
      <Image
        style={styles.logo}
        source={
          imageSrc
        }
      />
      <Text style={{ fontWeight: 'bold', padding: 10, fontSize: 16 }}>{title}</Text>
      <Text>Expirience: {expirience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    borderRadius: 50,
    width: 66,
    height: 58,
  },
});