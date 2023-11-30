import React from 'react'
import { Document,Text,View, Page, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body :{
        // backgroundColor: '#07575B',
        backgroundColor: '#132925',
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
    paddingHorizontal: 1,
    paddingVertical: 1,
  },

  column: {
    // backgroundColor:'#FFF59D',
    backgroundColor:'#B7A292',

    //flex: 1,
    // backgroundColor:'white',
     //marginVertical: 5,
  },
  columnLine:{
    flex: 1,
    marginVertical: 5,
    borderRightColor: '#666',
    borderRightWidth: 2,
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
    borderBottomColor: '#A27C4B',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  columnRowText: {
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    color: 'black',
    fontSize:10
  },
  details:{
    fontSize:12,
    color:'white',
    fontWeight:'bold',
    marginLeft:90
  },
  cityOverview:{
    fontSize: 28,
    lineHeight: 1.5,
    display:'flex',
    color:'#132925',
    marginLeft:25,
    marginTop:20
  },
  cityOverviewImage:{
    height:350,
    marginBottom:30,
    marginTop:30,
    marginLeft:10,
    marginRight:10
},
centerLine: {
    height: '200%',
    width: 1,
    backgroundColor: 'black',
  },
  dataBox: {
    border: '0.6pt solid #A27C4B',
    borderRadius: 0.5,
    // marginVertical: 5,
  },
});

console.log('Background color:', styles.body.backgroundColor);
const PdfDownload = () => {
    return (


  <Document>
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
    <View style={{...styles.column,flex:4}}>
   
    <Text style={styles.cityOverview}>City Overview</Text>
    <View style={{marginLeft:10,marginRight:10,marginTop:10}}>
    <View style={styles.dataBox}>
      <View style={{...styles.columnRow,backgroundColor:'#A27C4B'}}>
      <Text style={{...styles.details}}>Details</Text>
        {/* <Text style={{...styles.columnRowText,fontSize:12,color:'white',fontWeight:'bold',marginLeft:90}}>Details</Text> */}
      </View>
      {/* <View style={styles.columnLine}> */}
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
        <Text style={styles.columnRowText}>467 km{String.fromCharCode(0x00B2)}</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population (2023) - </Text>
        <Text style={{...styles.columnRowText,marginLeft:-180,marginTop:12}}> City</Text>

        <Text style={styles.columnRowText}>9,210,388</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Growth</Text>
        <Text style={styles.columnRowText}>2.43%</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Density </Text>
        <Text style={{...styles.columnRowText,marginLeft:-150,marginTop:12}}> (2023)</Text>
        <Text style={styles.columnRowText}>27,613/KM{String.fromCharCode(0x00B2)}</Text>
        {/* <Text style={styles.columnRowText}>27,613/KM2</Text> */}
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Average literacy rate</Text>
        <Text style={styles.columnRowText}>83.33%</Text>
      </View>
      <View style={styles.columnRow}>
    <Text style={styles.columnRowText}>Annual Per Capita</Text>
    <Text style={{...styles.columnRowText,marginLeft:-150,marginTop:12}}>Income(District)</Text>
    <Text style={styles.columnRowText}>Rs 1,56,150</Text>
    </View>
      {/* <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Annual Per Capita Income(District)</Text>
        <Text style={styles.columnRowText}>Rs 1,56,150</Text>
      </View> */}
      {/* </View> */}
    </View>
    </View>

    </View>
        <View style={{ flex: 6 }}>
            {/* <Image style={{...styles.image}} src="image5.jpg" /> */}
            <Image style={styles.cityOverviewImage} src="image1.jpg" />

        </View>
  </View>
</Page>


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
