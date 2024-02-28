import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  listItem: {
    marginBottom: 5,
  },
});

const SummaryPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Why</Text>
        </View>
      </Page>
    </Document>
  );
};

export default SummaryPDF;

//  {
//    Object.entries(data.blocks).map(([key, value]) => (
//      <View key={key}>
//        <Text style={styles.title}>{key}</Text>
//        {value.map((item) => (
//          <Text key={item.id} style={styles.listItem}>
//            {item.title}
//          </Text>
//        ))}
//      </View>
//    ));
//  }
