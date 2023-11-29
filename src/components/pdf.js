// import React from 'react';
// import { Document, Page, Image, View, StyleSheet } from 'react-pdf/renderer';

// // Styles for the PDF document
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   image: {
//     width: 200,
//     height: 100,
//   },
// });

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Image src={`${process.env.PUBLIC_URL}/house.jpg`} style={styles.image} />
//       </View>
//       <View style={styles.section}>
//         <Image src={`${process.env.PUBLIC_URL}/home.jpg`} style={styles.image} />
//       </View>
//       <View style={styles.section}>
//         <Image src={`${process.env.PUBLIC_URL}/nature.jpg`} style={styles.image} />
//       </View>
//     </Page>
//   </Document>
// );

// export default MyDocument;



// // MyDocument.js
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// import image1 from '../public/';
// import image2 from './images/image2.jpg';

// //pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// // Create Document Component
// const MyDocument = () => (
//     <Document>
//       <Page>
//         <img src={image1} alt="Image 1" style={{ width: '100%' }} />
//       </Page>
//       <Page>
//         <img src={image2} alt="Image 2" style={{ width: '100%' }} />
//       </Page>
//     </Document>
//   );
// // const MyDocument = () => (
// //   <Document>
// //     <Page size="A4" style={styles.page}>
// //       <View style={styles.section}>
// //         <Text>Section #1</Text>
// //       </View>
// //       <View style={styles.section}>
// //         <Text>Section #2</Text>
// //       </View>
// //     </Page>
// //   </Document>
// // );

// export default MyDocument;
