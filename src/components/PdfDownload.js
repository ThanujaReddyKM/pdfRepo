import React from 'react'
import { Document,Text,Link,View, Page, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body :{
        // backgroundColor: '#07575B',
        backgroundColor: '#132925',
        display:'none'
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
  },
  facilityPoint:{
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:4,
    paddingHorizontal:40,
    marginLeft:45,
    marginTop:6,
    fontSize:16,
  },
  logoActualImage:{ 
    height: 42, 
    width: 80,
    marginTop:-43,
    marginRight:10,
    //  marginBottom:5,
     marginLeft:537
   },
  
   actualViewImage:{
    marginTop:20,
     marginLeft: 40,
      marginRight: 20,
       marginBottom: 10,
        height: 240
   },
   actualView3Images:{
    marginTop:27,
     marginLeft: 10,
       marginBottom: 10,
        height: 235,
        width:295
   },
   logoActualView3Image:{ 
    height: 42, 
    width: 80,
    marginTop:-37,
    marginRight:10,
    //  marginBottom:5,
     marginLeft:537
   },
   vicinityColour:{
    backgroundColor:'#FBE9E7',
    display:'none'
   },
   vicinityView3Images:{
    marginTop:27,
     marginLeft: 30,
       marginBottom: 10,
        height: 180,
        width:150
   },
   logoVicinityView3Image:{ 
    height: 42, 
    width: 80,
    marginTop:-37,
    marginRight:10,
    //  marginBottom:5,
     marginLeft:515
   },
   brandMappingImages:{
    marginTop:18,
     marginLeft: 60,
       marginBottom: 10,
        height: 240,
        width:490
   },
   logoBrandMappingImages:{ 
    height: 42, 
    width: 80,
    marginTop:-54,
    marginRight:10,
    //  marginBottom:5,
     marginLeft:534
   },
   floorPlanBackgroundColour:{
    backgroundColor:'#C6B397',
    display:'none'
   },
   floorPlanImages:{
    marginTop:-45,
     marginLeft: 190,
       marginBottom: 5,
        height: 308,
        width:260
   },
   logoFloorPlanImages:{ 
    height: 42, 
    width: 80,
    marginTop:-53,
    marginRight:10,
    //  marginBottom:5,
     marginLeft:534
   },
   floorPlanColour:{ 
    color: '#0C231F', 
    fontSize: 34,
     marginTop: 5, 
     marginLeft: 5 ,
     display:'flex'
    },
    floorColour:{ 
        color: '#0C231F', 
        fontSize: 16, 
        marginLeft: 20 ,
        display:'flex'
    },
    logoContactDetailsmages:{ 
        height: 50, 
        width: 85,
        marginTop:-72,
        marginRight:10,
        //  marginBottom:5,
         marginLeft:530
       },
});

console.log('Background color:', styles.body.backgroundColor);
const PdfDownload = () => {
    return (
  <Document>

{/*--------------------------- Main Page----------------------------- */}

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

{/*--------------------------- City  Overview Page----------------------------- */}


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

{/*--------------------------- Google  View Page----------------------------- */}


<Page size={styles.size}  style={styles.body}>
<View style={{flexDirection: 'row',  alignItems: 'center', paddingTop: 10, backgroundColor: '#B7A292' }}>
    <Text style={styles.googleView}>Google View</Text>
    <Image style={{...styles.size ,...styles.logoImage}} src="logo.jpg" />
  </View>
  <View style={{ flex: 5, alignItems: 'center' }}>
    <Image style={{...styles.size , ...styles.googleImage }} src="google.jpg" />
  </View>
      </Page>

{/*--------------------------- Property  Images Page----------------------------- */}


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

{/*--------------------------- Modern  Facilities Page----------------------------- */}


      <Page size={styles.size} style={styles.body}>
  <View style={styles.twoColumnContainer}>
    <View style={{ ...styles.column, flex: 4 }}>
      <Text style={styles.cityOverview}>
        Modern Facilities
      </Text>
      <Image style={{ height: 248, width: 248, marginTop: 10 }} src="image6.jpg" />
    </View>
    <View style={{ flex: 6 ,marginTop:40,}}>
      <Text style={styles.facilityPoint}>• Vaastu Compliant</Text>
      <Text style={styles.facilityPoint}>• RO Water System</Text>
      <Text style={styles.facilityPoint}>• High-Speed Internet</Text>
      <Text style={styles.facilityPoint}>• Wheelchair Accessibility</Text>
      <Text style={styles.facilityPoint}>• Maintenance Staff</Text>
      <Text style={styles.facilityPoint}>• Power Backup</Text>
      <Text style={styles.facilityPoint}>• Dedicated Parking</Text>
    </View>
  </View>
</Page>

{/*--------------------------- Actual  View Page----------------------------- */}


<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 10, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualImage}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualViewImage ,width:260}} src="image3.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualViewImage,width:200 }} src="image2.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src="logo.jpg" />
  </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,width:450,marginLeft:85,height:225, }} src="construction6.jpg" />
    </View>
</Page>
<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src="logo.jpg" />
  </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,width:450,marginLeft:85,height:225, }} src="construction7.jpg" />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images }} src="construction1.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,marginLeft:0 }} src="construction2.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images }} src="constructin3.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,marginLeft:0 }} src="constructin4.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images }} src="constructin5.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,marginLeft:0 }} src="construction1.jpg" />
    </View>
  </View>
</Page>

{/*--------------------------- Brand  Mapping Page----------------------------- */}


<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'black', fontSize: 40, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Brand Mapping</Text>
    <Image style={{...styles.logoBrandMappingImages}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.brandMappingImages }} src="plan1.jpg" />
    </View>
  </View>
</Page>

{/*--------------------------- Floor Plan Pages----------------------------- */}


<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ ...styles.floorPlanColour}}>Floor Plan</Text>
    <Text style={{ ...styles.floorColour}}>Basement Floor</Text>
1
    <Image style={{...styles.logoFloorPlanImages}} src="logo.jpg" />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages }} src="plan1.jpg" />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ ...styles.floorPlanColour}}>Floor Plan</Text>
    <Text style={{ ...styles.floorColour}}>Ground Floor</Text>
1
    <Image style={{...styles.logoFloorPlanImages}} src="logo.jpg" />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages }} src="plan2.jpg" />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ ...styles.floorPlanColour}}>Floor Plan</Text>
    <Text style={{ ...styles.floorColour}}>1
    <Text style={{ fontSize: 12, verticalAlign: 'super', marginLeft: 2 }}>st</Text> Floor</Text>
1
    <Image style={{...styles.logoFloorPlanImages}} src="logo.jpg" />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages }} src="plan3.jpg" />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Image style={{...styles.logoFloorPlanImages, marginTop:5,}} src="logo.jpg" />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages, }} src="plan4.jpg" />
    </View>
</Page>

{/*--------------------------- Vicinity Images Pages----------------------------- */}


<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shoping1.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping2.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping3.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shopping4.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping5.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping6.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shopping7.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shopping8.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shopping9.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shoping1.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping2.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping3.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shopping4.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping5.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping6.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shopping7.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shopping8.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shopping9.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shoping1.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping2.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping3.jpg" />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src="logo.jpg" />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src="shopping4.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping5.jpg" />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src="shoping6.jpg" />
    </View>
  </View>
</Page>

{/*--------------------------- Contact Details Page----------------------------- */}

<Page size={styles.size}  style={styles.body}>
      <View>
      <Text style={{ color: '#D0CCBE', fontSize: 40, lineHeight: 1.5, display: 'flex', marginLeft:5,marginTop:15, }}>Contact Details</Text>
    <Image style={{...styles.logoContactDetailsmages}} src="logo.jpg" />
    <View style={{marginTop:35}}>
    <Text style={{marginLeft:15,fontSize:14, color:'#D0CCBE'}}>Arpit Yagnik</Text>
    <Text style={{marginLeft:15,fontSize:12,color:'#D0CCBE',marginTop:4}}>Mobile : +91-9636969646</Text>
    <Text style={{marginLeft:15,fontSize:14,color:'#D0CCBE',marginTop:14}}>Ritesh Agarwal</Text>
    <Text style={{marginLeft:15,fontSize:12,color:'#D0CCBE',marginTop:4}}>Mobile : +91-9829610077</Text>
    <Text style={{marginLeft:12,fontSize:10,color:'#D0CCBE',marginTop:14}}>Email : arpityagnik@sthapatyaleasing.com</Text>
    <Link src="www.sthapatyaleasing.com">
            <Text style={{marginLeft:12, fontSize:10 ,color:'#D0CCBE' ,marginTop:4}}>
         Website : www.sthapatyaleasing.com
            </Text>
        </Link>
    <Text style={{marginLeft:2,color:'#D0CCBE',fontSize:10,marginTop:40}}><Text style={{marginLeft:2,color:'#D0CCBE',fontSize:12,marginTop:30}}>Our Address -</Text> Sthapatya Leasing & Consultant E-143, 1st Floor, Nirman Nagar, Opp. Hotel Kiran Palace DCM, Ajmer Road, Jaipur</Text>

    </View>

    <View style={{marginTop:2,backgroundColor:'#FFFDE7'}}>
    <Text style={{marginLeft:2,color:'#1E2224',fontSize:8,marginTop:5}}><Text style={{marginLeft:2,color:'#9A6237',fontSize:12,marginTop:30}}>Disclaimer:</Text>  Details & Pictures mentioned in this presentation is for illustration purpose only & cannot be in any way treated as a legal document. All information, specifications, plans, materials, dates, & visual 
representations contained are subject to change from time to time by the Land Owner / Realtor / Company / Competent Authorities and shall not form part of any contract, offer or deal. Sizes, Rates, Specifications, and 
Availability of the project/property may change without any prior information and Land Owner / Realtor / Company shall not be held responsible in any manner whatsoever.</Text>

    </View>
    </View>
      </Page>

      <Page size={styles.size} style={styles.body}>
      <Text style={{textAlign:'center',display: 'flex',marginTop:'120px',alignItems:'center',color:'white',fontSize:54,justifyContent:'center'}}>Thank you</Text>
      </Page>   

  </Document>
    );
};

export default PdfDownload
