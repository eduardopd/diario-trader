
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#898989",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#018dd2",
  },
  h1: {
    fontSize:35,
    fontWeight:"bold",
    color: "white",
    textAlign: "center",
  },
  h2: {
    fontSize:25,
    fontWeight:"bold",
    color: "black",
    textAlign: "center",
  },
  h3: {
    fontSize:20,
    fontWeight:"bold",
    color: "black",
    textAlign: "center",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionContainerOne: {
      marginTop: 32,
      paddingHorizontal: 24,
      backgroundColor: "#fecc00",
      height: 100,
  },
  sectionContainerTwo: {
      marginTop: 32,
      paddingHorizontal: 24,
      backgroundColor: "#959595",
  },
  sectionContainerThree: {
      marginTop: 32,
      paddingHorizontal: 24,
      backgroundColor: "#018dd2",
  },
  sectionContainerFour: {
      marginTop: 15,
      paddingHorizontal: 24,
      backgroundColor: "#018dd2",
      height: 150,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "#018dd2",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "#018dd2",
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: "#018dd2",
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default styles;