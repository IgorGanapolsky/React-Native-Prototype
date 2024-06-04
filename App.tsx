import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import MenuItems from "@/components/MenuItems";
import FeedbackForm from "@/components/FeedbackForm";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Little Lemon
        </Text>
      </View>
      <View style={styles.menuList}>
        <MenuItems />
      </View>
      <View style={styles.feedbackForm}>
        <FeedbackForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  header: {
    backgroundColor: '#F4A261',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F4A261',
    marginBottom: 20,
    textAlign: 'center',
  },
  menuList: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#F4A261',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  feedbackForm: {
    flex: .30,
  },
});
