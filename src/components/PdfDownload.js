import React from 'react'
import { Document,Text,Link,View, Page, Image, StyleSheet } from '@react-pdf/renderer';
import Data from "./data";


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

console.log('data *==>',Data)
//console.log('Background color:', styles.body.backgroundColor);
const PdfDownload = ({propertyData}) => {
// console.log('propertyData *==>',propertyData)
// console.log('propertyData.firstpage *==>',propertyData.firstpage)
// console.log('propertyData.firstpage.PropertyType *==>',propertyData.firstpage.PropertyType)



    return (
      
  <Document>

{/*--------------------------- Main Page----------------------------- */}

       <Page size={styles.size} style={{ ...styles.body, flexDirection: 'row', }}>
        
<View style={{ flex: 7 , alignItems:'center',paddingTop:10, }}>
  <Text style={styles.centeredText}>Proposed Option</Text>
  <Text style={styles.centeredText}>For</Text>
  <Text style={styles.centeredText}>{propertyData.firstpage.PropertyType}</Text>
    <Text style={{ ...styles.centeredText, height: 10 }}></Text>

  <Text style={{...styles.centeredText, fontSize: 14 }}>{propertyData.firstpage.Street}, {propertyData.firstpage.City}</Text>
  <Text style={{...styles.centeredText,fontSize: 14}}>{propertyData.firstpage.proposalDate}</Text>
  </View>
  <View style={{ flex: 5 }}>
    <Image style={{...styles.image}} src={propertyData.firstpage.imagelink} />
  </View>

     <View style={{ position: 'absolute',fontSize:12,color:'white', bottom: 1, left: 1, right: 265, flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text>By Sthapatya Leasing & Consultant</Text>
    <Text>{propertyData.firstpage.proposalDate}</Text>
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
        <Text style={styles.columnRowText}>{propertyData.secondpage.State}</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>City</Text>
        <Text style={styles.columnRowText}>{propertyData.secondpage.City }</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Area</Text>
        <Text style={styles.columnRowText}>{propertyData.secondpage.Area }</Text>

        {/* <Text style={styles.columnRowText}>467 km{String.fromCharCode(0x00B2)}</Text> */}
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population (2023) - </Text>
        <Text style={{...styles.columnRowText,marginLeft:-180,marginTop:12}}> City</Text>

        <Text style={styles.columnRowText}>{propertyData.secondpage.Population}</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Growth</Text>
        <Text style={styles.columnRowText}>{propertyData.secondpage.PopulationGrowth}</Text>
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Population Density </Text>
        <Text style={{...styles.columnRowText,marginLeft:-150,marginTop:12}}> (2023)</Text>
        <Text style={styles.columnRowText}>{propertyData.secondpage.PopulationDensity}</Text>

        {/* <Text style={styles.columnRowText}>27,613/KM{String.fromCharCode(0x00B2)}</Text> */}
      </View>
      <View style={styles.columnRow}>
        <Text style={styles.columnRowText}>Average literacy rate</Text>
        <Text style={styles.columnRowText}>{propertyData.secondpage.LiteracyRate}</Text>
      </View>
      <View style={styles.columnRow}>
    <Text style={styles.columnRowText}>Annual Per Capita</Text>
    <Text style={{...styles.columnRowText,marginLeft:-150,marginTop:12}}>Income(District)</Text>
    <Text style={styles.columnRowText}>{propertyData.secondpage.AnnualPerCapita}</Text>
    </View>
    </View>
    </View>
    </View>
        <View style={{ flex: 6 }}>
            <Image style={styles.cityOverviewImage} src={propertyData.secondpage.imagelink} />

        </View>
  </View>
</Page>

{/*--------------------------- Google  View Page----------------------------- */}


<Page size={styles.size}  style={styles.body}>
<View style={{flexDirection: 'row',  alignItems: 'center', paddingTop: 10, backgroundColor: '#B7A292' }}>
    <Text style={styles.googleView}>Google View</Text>
    <Image style={{...styles.size ,...styles.logoImage}} src={propertyData.thirdpage.logo} />
  </View>
  <View style={{ flex: 5, alignItems: 'center' }}>
    <Image style={{...styles.size , ...styles.googleImage }} src={propertyData.thirdpage.imagelink} />
  </View>
      </Page>

{/*--------------------------- Property  Images Page----------------------------- */}


      <Page size={styles.size}  style={styles.body}>
<View style={{flexDirection: 'row',  alignItems: 'center', paddingTop: 10, backgroundColor: '#B7A292' }}>
    <Text style={styles.googleView}>Property Images</Text>
    <Image style={{...styles.size ,...styles.logoImage}} src={propertyData.fourthpage.logo} />
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
        <Text style={{...styles.propertyColumnRowText ,marginTop:-20, marginLeft:120}}>{propertyData.fourthpage.FloorPlate1}</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:1 , marginLeft:-15 }}>{propertyData.fourthpage.FloorPlate2}</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:24,marginRight:105 }}>{propertyData.fourthpage.FloorPlate3}</Text>


      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:-5 }}>Expected Date of K=HOTP</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:50 }}>{propertyData.fourthpage.ExpectedDate}</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Rental</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:35 }}>{propertyData.fourthpage.Rental}</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Frontage </Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:55 }}>{propertyData.fourthpage.Frontage}</Text>
      </View>
            <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Location</Text>
        <Link src={propertyData.fourthpage.Location}>
            <Text style={{...styles.propertyColumnRowText, color: 'blue' , marginRight:-15}}>
            {propertyData.fourthpage.Location}
            </Text>
        </Link>
        </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>Tenure</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:55 }}>{propertyData.fourthpage.Tenure}</Text>
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
        <Text style={{...styles.propertyColumnRowText , marginLeft:30}}>{propertyData.fourthpage.RentExcalation}</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText, }}>Maintenance Charges</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:50 }}>{propertyData.fourthpage.MaintenanceCharges}</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText, }}>Electric Connection</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:35 }}>{propertyData.fourthpage.ElectricConnection}</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:15 }}>Taxes </Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:-12, marginLeft:80}}>{propertyData.fourthpage.Taxes1}</Text>
         <Text style={{...styles.propertyColumnRowText,marginTop:10 , marginRight:51}}>{propertyData.fourthpage.Taxes2}</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:28,marginRight:105 }}>{propertyData.fourthpage.Taxes3}</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginTop:-5,marginLeft:-14}}>Stamp Duty and Registration</Text>
        <Text style={{...styles.propertyColumnRowText,marginTop:12 ,marginRight:95}}>Cos</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:100 }}>{propertyData.fourthpage.StampDuty}</Text>
      </View>
      <View style={{...styles.propertyColumnRow,...styles.propertyRow2Colour}}>
        <Text style={{...styles.propertyColumnRowText,marginLeft:25 }}>status</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:55 }}>{propertyData.fourthpage.status}</Text>
      </View>
    
      <View style={{...styles.propertyColumnRow,...styles.propertyRow1Colour}}>
        <Text style={{...styles.propertyColumnRowText, }}>Neighbouring Brands</Text>
        <Text style={{...styles.propertyColumnRowText, marginLeft:90}}>{propertyData.fourthpage.NeighbouringBrands1}</Text>
        <Text style={{...styles.propertyColumnRowText,marginRight:105,marginTop:18 }}>{propertyData.fourthpage.NeighbouringBrands2}</Text>

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
      <Image style={{ height: 248, width: 248, marginTop: 10 }} src= {propertyData.fifthpage.imagelink} />
    </View>
    <View style={{ flex: 6 ,marginTop:40,}}>
      <Text style={styles.facilityPoint}>• {propertyData.fifthpage.vaastu}</Text>
      <Text style={styles.facilityPoint}>• {propertyData.fifthpage.ROWater}</Text>
      <Text style={styles.facilityPoint}>• {propertyData.fifthpage.HighSpeed}</Text>
      <Text style={styles.facilityPoint}>• {propertyData.fifthpage.wheelChair}</Text>
      <Text style={styles.facilityPoint}>• {propertyData.fifthpage.maintenanceStaff}</Text>
      <Text style={styles.facilityPoint}>•{propertyData.fifthpage.powerBackup}</Text>
      <Text style={styles.facilityPoint}>•{propertyData.fifthpage.DedicatedParking}</Text>
    </View>
  </View>
</Page>

{/*--------------------------- Actual  View Page----------------------------- */}


<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 10, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualImage}} src={propertyData.sixthpage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualViewImage ,width:260}} src={propertyData.sixthpage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualViewImage,width:200 }} src={propertyData.sixthpage.imagelink2} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src={propertyData.seventhpage.logo} />
  </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,width:450,marginLeft:85,height:225, }} src={propertyData.seventhpage.imagelink} />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src={propertyData.eightpage.logo} />
  </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,width:450,marginLeft:85,height:225, }} src={propertyData.eightpage.imagelink} />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src={propertyData.ninthpage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images }} src={propertyData.ninthpage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,marginLeft:0 }} src={propertyData.ninthpage.imagelink2} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src={propertyData.tenthpage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images }} src={propertyData.tenthpage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,marginLeft:0 }} src={propertyData.tenthpage.imagelink2} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.body, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'white', fontSize: 34, marginTop: 5, marginLeft: 20 }}>Actual View</Text>
    <Image style={{...styles.logoActualView3Image}} src={propertyData.eleventhPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images }} src={propertyData.eleventhPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.actualView3Images,marginLeft:0 }} src={propertyData.eleventhPage.imagelink2} />
    </View>
  </View>
</Page>

{/*--------------------------- Brand  Mapping Page----------------------------- */}


<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: 'black', fontSize: 40, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Brand Mapping</Text>
    <Image style={{...styles.logoBrandMappingImages}} src={propertyData.twelvethPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.brandMappingImages }} src={propertyData.twelvethPage.imagelink} />
    </View>
  </View>
</Page>

{/*--------------------------- Floor Plan Pages----------------------------- */}


<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ ...styles.floorPlanColour}}>Floor Plan</Text>
    <Text style={{ ...styles.floorColour}}>Basement Floor</Text>
1
    <Image style={{...styles.logoFloorPlanImages}} src={propertyData.thirteenthPage.logo} />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages }} src={propertyData.thirteenthPage.imagelink} />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ ...styles.floorPlanColour}}>Floor Plan</Text>
    <Text style={{ ...styles.floorColour}}>Ground Floor</Text>
1
    <Image style={{...styles.logoFloorPlanImages}} src={propertyData.fourteenthPage.logo} />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages }} src={propertyData.fourteenthPage.imagelink} />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ ...styles.floorPlanColour}}>Floor Plan</Text>
    <Text style={{ ...styles.floorColour}}>1
    <Text style={{ fontSize: 12, verticalAlign: 'super', marginLeft: 2 }}>st</Text> Floor</Text>
1
    <Image style={{...styles.logoFloorPlanImages}} src={propertyData.fiftenthPage.logo} />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages }} src={propertyData.fiftenthPage.imagelink} />
    </View>
</Page>

<Page size={styles.size} style={{ ...styles.floorPlanBackgroundColour, flexDirection: 'column' }}>
  <View>
    <Image style={{...styles.logoFloorPlanImages, marginTop:5,}} src={propertyData.sixteenthPage.logo} />
  </View>
   <View style={{ flex: 4 }}>
      <Image style={{...styles.floorPlanImages, }} src={propertyData.sixteenthPage.imagelink} />
    </View>
</Page>

{/*--------------------------- Vicinity Images Pages----------------------------- */}


<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.seventeenthPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.seventeenthPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.seventeenthPage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.seventeenthPage.imagelink3}  />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.eighteenthPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.eighteenthPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.eighteenthPage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.eighteenthPage.imagelink3} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.nineteenthpage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.nineteenthpage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.nineteenthpage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.nineteenthpage.imagelink3} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.twentythPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.twentythPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentythPage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentythPage.imagelink3} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.twentyfirstPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.twentyfirstPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentyfirstPage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentyfirstPage.imagelink3} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.twentysecondPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.twentysecondPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentysecondPage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentysecondPage.imagelink3} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.twentythirdPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.twentythirdPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentythirdPage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentythirdPage.imagelink3} />
    </View>
  </View>
</Page>

<Page size={styles.size} style={{ ...styles.vicinityColour, flexDirection: 'column' }}>
  <View>
    <Text style={{ color: '#5D4037', fontSize: 34, marginTop: 15, marginLeft: 180 ,display:'flex'}}>Vicinity Images</Text>
    <Image style={{...styles.logoVicinityView3Image}} src={propertyData.twentyfourthPage.logo} />
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images }} src={propertyData.twentyfourthPage.imagelink1} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentyfourthPage.imagelink2} />
    </View>
    <View style={{ flex: 4 }}>
      <Image style={{...styles.vicinityView3Images, }} src={propertyData.twentyfourthPage.imagelink3} />
    </View>
  </View>
</Page>

{/*--------------------------- Contact Details Page----------------------------- */}

<Page size={styles.size}  style={styles.body}>
      <View>
      <Text style={{ color: '#D0CCBE', fontSize: 40, lineHeight: 1.5, display: 'flex', marginLeft:5,marginTop:15, }}>Contact Details</Text>
    <Image style={{...styles.logoContactDetailsmages}} src={propertyData.twentyfifthpage.logo} />
    <View style={{marginTop:35}}>
    <Text style={{marginLeft:15,fontSize:14, color:'#D0CCBE'}}>{propertyData.twentyfifthpage.name}</Text>
    <Text style={{marginLeft:15,fontSize:12,color:'#D0CCBE',marginTop:4}}>Mobile : {propertyData.twentyfifthpage.mobile}</Text>
    <Text style={{marginLeft:15,fontSize:14,color:'#D0CCBE',marginTop:14}}>{propertyData.twentyfifthpage.name1}</Text>
    <Text style={{marginLeft:15,fontSize:12,color:'#D0CCBE',marginTop:4}}>Mobile : {propertyData.twentyfifthpage.mobile1}</Text>
    <Text style={{marginLeft:12,fontSize:10,color:'#D0CCBE',marginTop:14}}>Email : {propertyData.twentyfifthpage.Email}</Text>
    <Link src={propertyData.twentyfifthpage.Website}>
            <Text style={{marginLeft:12, fontSize:10 ,color:'#D0CCBE' ,marginTop:4}}>
            {propertyData.twentyfifthpage.Website}
            </Text>
        </Link>
    <Text style={{marginLeft:2,color:'#D0CCBE',fontSize:10,marginTop:40}}><Text style={{marginLeft:2,color:'#D0CCBE',fontSize:12,marginTop:30}}>Our Address -</Text> {propertyData.twentyfifthpage.Address}</Text>

    </View>

    <View style={{marginTop:2,backgroundColor:'#FFFDE7'}}>
    <Text style={{marginLeft:2,color:'#1E2224',fontSize:8,marginTop:5}}><Text style={{marginLeft:2,color:'#9A6237',fontSize:12,marginTop:30}}>Disclaimer:</Text> {propertyData.twentyfifthpage.Disclaimer}</Text>

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
