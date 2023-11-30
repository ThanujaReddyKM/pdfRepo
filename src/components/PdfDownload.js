import React from 'react'
import { Document,Text,Link,View, Page, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body :{
        // backgroundColor: '#07575B',
        backgroundColor: '#132925',
    },
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
    // paddingHorizontal: 1,
    // paddingVertical: 1,
  },

  column: {
    // backgroundColor:'#FFF59D',
    backgroundColor:'#B7A292',
    flex: 1,
    // backgroundColor:'white',
     //marginVertical: 5,
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
    height:260,
     marginTop:30,
     marginBottom:30,

    marginLeft:10,
    marginRight:10
},

  dataBox: {
    border: '0.6pt solid #A27C4B',
    borderRadius: 0.5,
    // marginVertical: 5,
  },
  googleView :{
    color: 'black', 
    fontSize: 34, 
    lineHeight: 1.5, 
    display: 'flex',
     marginLeft:180
  },
  logoImage:{ 
     height: 42, 
     width: 110,
     marginRight:10,
      marginBottom:5,
     marginLeft:220
    },
    googleImage:{
  height: 230, 
  width:550, 
  marginTop: 10, 
  marginBottom: 10, 
//   marginLeft: 20, 
//   marginRight: 20 
},

detailsProperty:{
    fontSize:12,
    color:'white',
    fontWeight:'bold',
    // marginLeft:90
  },

  propertyColumnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     alignItems: 'center', 
    borderBottomColor: '#A27C4B',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  propertyColumnRowText: {
     alignItems:'center',
     justifyContent:'center',
    display:'flex',
    color: 'black',
    fontSize:8
  },
  propertyRow1Colour:{
    backgroundColor:'#C8CABE'
  },
  propertyRow2Colour:{
    backgroundColor:'#F7F7F7'
  }
    
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
    </View>
    </View>
    </View>
        <View style={{ flex: 6 }}>
            <Image style={styles.cityOverviewImage} src="image1.jpg" />

        </View>
  </View>
</Page>

<Page size={styles.size}  style={styles.body}>
<View style={{flexDirection: 'row',  alignItems: 'center', paddingTop: 10, backgroundColor: '#B7A292' }}>
    <Text style={styles.googleView}>Google View</Text>
    <Image style={{...styles.size ,...styles.logoImage}} src="logo.jpg" />
  </View>
  <View style={{ flex: 5, alignItems: 'center' }}>
    <Image style={{...styles.size , ...styles.googleImage }} src="google.jpg" />
  </View>
      </Page>

      <Page size={styles.size}  style={styles.body}>
<View style={{flexDirection: 'row',  alignItems: 'center', paddingTop: 10, backgroundColor: '#B7A292' }}>
    <Text style={styles.googleView}>Property Images</Text>
    <Image style={{...styles.size ,...styles.logoImage}} src="logo.jpg" />
  </View>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <View style={{ flex: 2, marginTop: 12, marginLeft: 8, marginRight: 6, flexDirection: 'column', justifyContent: 'space-between' }}>
  <View style={{ ...styles.dataBox, backgroundColor: '#B7A292', height: 246 }}>
      <View style={{...styles.propertyColumnRow,backgroundColor:'#A27C4B'}}>
      <Text style={{...styles.detailsProperty,marginLeft:15}}>Parameters</Text>
      <Text style={{...styles.detailsProperty,marginRight:55}}>Details</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25  }}>Floor Plate</Text>
        <Text style={{...styles.propertyColumnRowText ,marginTop:-20, marginLeft:120}}>Basement - 2020 sq.ft</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:1 , marginLeft:-15 }}>Ground Floor - 2245 sq. ft</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:24,marginRight:105 }}>1st Floor - 3170 sq. ft</Text>


      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:-5 }}>Expected Date of K=HOTP</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:50 }}>4 Months</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Rental</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:35 }}>To be discussed</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Frontage </Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:55 }}>41.3ft.</Text>
      </View>
            <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Location</Text>
        <Link src="https://maps.app.goo.gl/oCeBr58yKe38Qp1F9">
            <Text style={{...styles.propertyColumnRowText, color: 'blue' , marginRight:-15}}>
            https://maps.app.goo.gl/oCeBr58yKe38Qp1F9
            </Text>
        </Link>
        </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Tenure</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:55 }}>12 yrs</Text>
      </View>
    </View>
    </View>

      <View style={{ flex: 2, marginTop: 12, marginLeft: 6, marginRight: 8, flexDirection: 'column', justifyContent: 'space-between' }}>
      <View style={{ ...styles.dataBox, backgroundColor: '#B7A292', height: 246 }}>
      <View style={{...styles.propertyColumnRow,backgroundColor:'#A27C4B'}}>
      <Text style={{...styles.detailsProperty,marginLeft:15}}>Parameters</Text>
      <Text style={{...styles.detailsProperty,marginRight:55}}>Details</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:10  }}>Rent Excalation</Text>
        <Text style={{...styles.propertyColumnRowText , marginLeft:30}}>15% after every three years of last paid rent</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText, }}>Maintenance Charges</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:50 }}>As per actual</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText, }}>Electric Connection</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:35 }}>Available as per requirement</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:15 }}>Taxes </Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:-12, marginLeft:80}}>Any Taxes on th property are to be borne by the</Text>
         <Text style={{...styles.propertyColumnRowText,marginTop:10 , marginRight:51}}>landlord. Any taxes on rental like GST. are to be</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:28,marginRight:105 }}>paid by the company</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginTop:-5,marginLeft:-14}}>Stamp Duty and Registration</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:12 ,marginRight:95}}>Cos</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:100 }}>50:50</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>status</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:55 }}>Commercial approved</Text>
      </View>
    
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText, }}>Neighbouring Brands</Text>
        <Text style={{...styles.propertyColumnRowText, marginLeft:90}}>Nike,Puma,Adida,Starbucks,NikemCanabil,Us</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:105,marginTop:18 }}>polo,Titan,Iconic,Levi's etc..</Text>

      </View>
    </View>
    
  </View>
  </View>
      </Page>
{/* 
      <Page size={styles.size}  style={styles.body}>
      <Text style={{ color: 'black', fontSize: 34, lineHeight: 1.5, display: 'flex', marginLeft:180 }}>Checking 2</Text>
      </Page> */}

     

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
