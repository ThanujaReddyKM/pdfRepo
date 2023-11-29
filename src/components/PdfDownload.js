import React from 'react'
import { Document,Text,View, Page, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body :{
        backgroundColor: '#07575B',
    },
    // body :{
    //     paddingTop: 10,
    //     paddingBottom: 10,
    //     paddingHorizontal: 35,
    //     backgroundColor: '#07575B',
    // },
    size :{
        height:320,
        width:620,
    },
    // body: {
        // display: 'flex',
        // flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     paddingTop: 35,
    //     paddingBottom: 65,
    //     backgroundColor: '#07575B',
    //     paddingHorizontal: 35,
    //   },
    title:{
        fontSize: 24,
        textAlign:"center",
    },
    text:{
        margin:12,
        fontSize:14,
        textAlign:"justify",
        fontFamily:"Times-Roman",
        display: 'flex',
        flexDirection: 'column',
    },
    image:{
       // marginVertical:15,
       // marginHorizontal:100,
        height: '100%', // Set the height to 100% of the page
        width: '100%', // Set the width to 100% of the page
        objectFit: 'cover',
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
     centeredText: {
    color: 'white',
    fontSize: 28,
    lineHeight: 1.5,
    display:'flex',
  },

  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  column: {
    flex: 1,
    marginVertical: 5,
  },

  columnHeader: {
    backgroundColor: '#333',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  columnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  columnRowText: {
    color: 'black',
  },

  centerLine: {
    borderRightColor: '#666',
    borderRightWidth: 2,
    height: '100%',
    marginHorizontal: 10,
  },

//   twoColumnContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 1,
//     paddingVertical: 1,
//   },

//   column: {
//     flex: 1,
//     marginVertical: 5,
//   },

//   columnHeader: {
//     backgroundColor: '#333',
//     color: 'white',
//     fontWeight: 'bold',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },

//   columnRow: {
//     backgroundColor:'#FFF59D',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomColor: '#666',
//     borderBottomWidth: 1,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },

//   columnRowText: {
//     color: 'black',
//     fontSize:14
//   },

//   centerLine: {
//     borderRightColor: '#666',
//     borderRightWidth: 2,
//     height: '100%',
//     marginHorizontal: 10,
//   },
  
});

console.log('Background color:', styles.body.backgroundColor);
const PdfDownload = () => {
    return (


  <Document>
{/* <Page size={styles.size} style={styles.body}> */}
<Page size={styles.size} style={{ ...styles.body, flexDirection: 'row', }}>
<View style={{ flex: 7 , alignItems:'center',paddingTop:10, }}>
  <Text style={styles.centeredText}>Proposed Option</Text>
  <Text style={styles.centeredText}>For</Text>
  <Text style={styles.centeredText}>Retail Space</Text>
    <Text style={{ ...styles.centeredText, height: 10 }}></Text>

  <Text style={{...styles.centeredText, fontSize: 14 }}>Amarapali Marg, Vaishali Nagar</Text>
  <Text style={{...styles.centeredText,fontSize: 14}}>21st Nov 2023</Text>
  </View>
  <View style={{ flex: 5 }}>
    <Image style={{...styles.image}} src="curl1.jpg" />
  </View>

    {/* Footer */}
    <View style={{ position: 'absolute',fontSize:12,color:'white', bottom: 1, left: 1, right: 265, flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text>By Sthapatya Leasing & Consultant</Text>
    <Text>21st Nov 2023</Text>
  </View>
</Page>

<Page size={styles.size} style={styles.body}>
  <View style={styles.twoColumnContainer}>
    <View style={styles.column}>
      <View style={styles.columnRow}>
        <Text style={styles.columnHeader}>Details</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>State</Text>
        <View style={styles.centerLine} />
        <Text style={styles.columnRowText}>Rajasthan</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>City</Text>
        <Text style={styles.columnRowText}>Jaipur</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Area</Text>
        <Text style={styles.columnRowText}>467 km2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population (2023)</Text>
        <Text style={styles.columnRowText}>9,210,388</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Growth</Text>
        <Text style={styles.columnRowText}>2.43%</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Density (2023)</Text>
        <Text style={styles.columnRowText}>27,613/KM2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Average literacy rate</Text>
        <Text style={styles.columnRowText}>83.33%</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Annual Per Capita Income(District)</Text>
        <Text style={styles.columnRowText}>Rs 1,56,150</Text>
      </View>
    </View>

    <View style={styles.column}>
      {/* Add more rows as needed */}
    </View>
  </View>
</Page>

<Page size={styles.size} style={styles.body}>
  <View style={styles.twoColumnContainer}>
    <View style={styles.column}>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Details</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>State</Text>
        <Text style={styles.columnRowText}>Rajasthan</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>City</Text>
        <Text style={styles.columnRowText}>Jaipur</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Area</Text>
        <Text style={styles.columnRowText}>467 km2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population (2023) - City</Text>
        <Text style={styles.columnRowText}>9,210,388</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Growth</Text>
        <Text style={styles.columnRowText}>2.43%</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Density (2023)</Text>
        <Text style={styles.columnRowText}>27,613/KM2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Average literacy rate</Text>
        <Text style={styles.columnRowText}>83.33%</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Annual Per Capita</Text>
        <Text style={styles.columnRowText}> Income(District)</Text>

        <Text style={styles.columnRowText}>Rs 1,56,150</Text>
      </View>
    </View>

    <View style={styles.centerLine} />

    <View style={styles.column}>
      {/* Add more rows as needed */}
    </View>
  </View>
</Page>


{/* <Page size={styles.size} style={styles.body}>
  <View style={styles.twoColumnContainer}>
    <View style={styles.column}>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>State</Text>
        <Text style={styles.columnRowText}>Rajasthan</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>City</Text>
        <Text style={styles.columnRowText}>Jaipur</Text>
      </View>
      <View style={styles.centerLine} />
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Area</Text>
        <Text style={styles.columnRowText}>467 km2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population (2023)</Text>
        <Text style={styles.columnRowText}>9,210,388</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Growth</Text>
        <Text style={styles.columnRowText}>2.43%</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Density (2023)</Text>
        <Text style={styles.columnRowText}>27,613/KM2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Average literacy rate</Text>
        <Text style={styles.columnRowText}>83.33%</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Annual Per Capita Income(District)</Text>
        <Text style={styles.columnRowText}>Rs 1,56,150</Text>
      </View>
    </View>

    <View style={styles.column}>
      <Text style={styles.columnHeader}>Details</Text>
  
    </View>
  </View>
</Page> */}

{/* <Page size={styles.size} style={styles.body}>
  <View style={styles.twoColumnContainer}>
    <View style={styles.column}>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>State</Text>
        <Text style={styles.columnRowText}>Rajasthan</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>City</Text>
        <Text style={styles.columnRowText}>Jaipur</Text>
      </View>
    </View>

    <View style={styles.column}>
      <Text style={styles.columnHeader}>Details</Text>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Area</Text>
        <Text style={styles.columnRowText}>467 km2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population (2023)</Text>
        <Text style={styles.columnRowText}>9,210,388</Text>
      </View>
    </View>
  </View>
</Page> */}

{/* <Page size={styles.size} style={styles.body}>
  <View style={styles.twoColumnContainer}>
    <View style={styles.column}>
      <Text style={[styles.columnHeader, { borderBottomColor: '#666', borderBottomWidth: 1 }]}>City Overview</Text>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>State</Text>
        <Text style={styles.columnRowText}>Rajasthan</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>City</Text>
        <Text style={styles.columnRowText}>Jaipur</Text>
      </View>
      {/* Add more rows as needed */}
    {/* </View>

    <View style={styles.column}>
      <Text style={styles.columnHeader}>Details</Text>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Area</Text>
        <Text style={styles.columnRowText}>467 km2</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population (2023)</Text>
        <Text style={styles.columnRowText}>9,210,388</Text>
      </View>
      {/* Add more rows as needed */}
    {/* </View>
  </View>
</Page> */} 

{/* <Page size={styles.size} style={styles.body}>
  <View style={styles.twoColumnContainer}>
    <View style={styles.column}>
      <Text style={styles.header}>City Overview</Text>
      <Text>Details</Text>
      <Text>State</Text>
      <Text>City</Text>
      <Text>Area</Text>
      <Text>Population (2023)</Text>
      <Text>Population Growth</Text>
      <Text>Population Density (2023)</Text>
      <Text>Average literacy rate</Text>
      <Text>Annual Per Capita Income (District)</Text>
    </View>

    <View style={styles.column}>
      <Text style={styles.header}>-</Text>
      <Text>Rajasthan</Text>
      <Text>Jaipur</Text>
      <Text>467 km2</Text>
      <Text>9,210,388</Text>
      <Text>2.43%</Text>
      <Text>27,613/KM2</Text>
      <Text>83.33%</Text>
      <Text>Rs 1,56,150</Text>
    </View>
  </View>
</Page>


<Page size={styles.size} style={styles.body}>
      <View style={styles.tableContainer}>
        <View style={styles.column}>
          <Text style={styles.header}>Details</Text>
          <Text>State</Text>
          <Text>City</Text>
          <Text>Area</Text>
          <Text>Population (2023)</Text>
          <Text>Population Growth</Text>
          <Text>Population Density (2023)</Text>
          <Text>Average literacy rate</Text>
          <Text>Annual Per Capita Income (District)</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.header}>-</Text>
          <Text>Rajasthan</Text>
          <Text>Jaipur</Text>
          <Text>467 km2</Text>
          <Text>9,210,388</Text>
          <Text>2.43%</Text>
          <Text>27,613/KM2</Text>
          <Text>83.33%</Text>
          <Text>Rs 1,56,150</Text>
        </View>
      </View>
    </Page> */}

      {/* <Page size={styles.size} style={styles.body}>
        <Text style={{textAlign:'center',display: 'flex', alignItems:'center', marginTop:'400px',
         flexDirection: 'column', color:'white',fontSize:46,justifyContent:'center'}}>Thank you</Text>
        </Page> */}

      <Page size={styles.size}  style={styles.body} >
      </Page>

      <Page size={styles.size}  style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page> 

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

       <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

       <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page> 
      
      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body} >
      </Page>

      <Page size={styles.size} style={styles.body}>
      </Page>

      <Page size={styles.size} style={styles.body}>
      <Text style={{textAlign:'center',display: 'flex',marginTop:'120px',alignItems:'center',color:'white',fontSize:54,justifyContent:'center'}}>Thank you</Text>
      </Page>
    


    
  </Document>
    );
};

export default PdfDownload