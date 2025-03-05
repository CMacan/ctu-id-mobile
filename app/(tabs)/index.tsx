import { Image, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function StudentIDCard() {
  return (
    <LinearGradient colors={['white', 'yellow', 'green']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.smallText}>Republic of the Philippines</Text>
        <Text style={styles.largeText}>CEBU TECHNOLOGICAL</Text>
        <Text style={styles.largeText}>UNIVERSITY</Text>
        <Text style={styles.mediumText}>Main Campus: M.J. Cuenco Ave., Cebu City</Text>
      </View>
      
      <View style={styles.photoContainer}>
        <Text style={styles.photoText}>Photo</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>CHARLES JAYSON M. MACAN</Text>
        <Text style={styles.courseText}>BSIT</Text>
        <View style={styles.divider}></View>
        <Text style={styles.labelText}>COURSE</Text>
        <Text style={styles.idText}>ID No.: 1314960</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 12,
    fontWeight: '500',
  },
  largeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mediumText: {
    fontSize: 10,
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  logoOuter: {
    width: 48,
    height: 48,
    backgroundColor: 'red',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInner: {
    width: 32,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 6,
    textAlign: 'center',
  },
  logoYellow: {
    width: 32,
    height: 32,
    backgroundColor: 'yellow',
    borderRadius: 16,
  },
  photoContainer: {
    width: 128,
    height: 160,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  photoText: {
    color: 'gray',
    fontSize: 10,
  },
  signatureContainer: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: 120,
    alignItems: 'center',
    marginBottom: 5,
  },
  signature: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'black',
    width: 120,
    marginVertical: 5,
  },
  labelText: {
    fontSize: 10,
  },
  idText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    marginTop: 10,
  },
});