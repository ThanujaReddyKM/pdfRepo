import React from 'react'
import { Document,Text, Page, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body :{
        paddingTop :35,
        paddingBottom:65,
        backgroundColor: '#07575B',
        paddingHorizontal:35,
    },
    title:{
        fontSize: 24,
        textAlign:"center",
    },
    text:{
        margin:12,
        fontSize:14,
        textAlign:"justify",
        fontFamily:"Times-Roman",
    },
    image:{
        marginVertical:15,
        marginHorizontal:100,
    },
    header:{
        fontSize:12,
        marginBottom:20,
        textAlign:"center",
        color:"grey",
    },
    pageNumber:{
        position:"absolute",
        fontSize:12,
        bottom:30,
        left:0,
        textAlign:"center",
        color:"grey",
    },
});

console.log('Background color:', styles.body.backgroundColor);
const PDFFile = () => (


  <Document>
      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page> 

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

       <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

       <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page> 
      
      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      </Page>

      <Page style={styles.body}>
      </Page>

      <Page style={styles.body} >
      <Text style={styles.header} fixed></Text>
         <Text style={styles.text}>jhkljl</Text>

      </Page>

      <Page style={styles.body}>
      <Text style={styles.header} fixed></Text>
      <Text style={{textAlign:'center',color:'white',fontSize:32,justifyContent:'center'}}>Thank You</Text>
      </Page>
    
  </Document>
);

export default PDFFile







//const imageFilenames = ["image1.jpg", "image2.jpg", "image3.jpg","image1.jpg"];
// const PDFFile = () => (
//     <Document>
//       {/* {imageFilenames.map((filename, index) => ( */}
//         <Page style={{backgroundColor: 'pink'}} /* key={index} */>
  
//           {/* <Text>Proposed Option For Retail Space</Text>
//           <Text>Amarapali Marg, Vaishali Nagar 21st Nov 2023 JPR-R-VAI-18</Text> */}
//           {/* <Image style={styles.image} src={filename} /> */}
//           {/* <footer>By Sthapatya Leasing & Consultant </footer> */}
//           {/* <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed /> */}
//         </Page>
//         <Page>
  
//         </Page>
      
//     </Document>
//   );


// const PDFFile = () => (
//     <Document>
//         <Page>
//             <Text style={styles.header} fixed></Text>
//             <Image style={styles.image} src="image1.jpg" />
//             <Image style={styles.image} src="image2.jpg" />
//             <Image style={styles.image} src="image3.jpg" />
//             <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium ut, dolorem sequi ratione expedita maxime quam, cumque eius magni asperiores rerum at quidem, magnam vitae esse possimus rem? Nobis.</Text>
//             <Text style={styles.pageNumber}
//             render={({pageNumber, totalPages}) =>`${pageNumber} / ${totalPages}`}
//             fixed
//             />
//         </Page>
//     </Document>
// )

