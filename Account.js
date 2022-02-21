import React, { Component } from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity, ScrollView, Dimensions } from 'react-native';
const {width} = Dimensions.get('window')


const Account = () => {
    return (
      <View horizontal={true} style={{flex: 1}}>
        <ScrollView style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.KIT}>KIT Library</Text>
            </View>
            {/* ***************************** This is the profile bar **************************************************** */}
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity>
                  <Image style={styles.profile} source={{uri: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'}}/>
                </TouchableOpacity>
                <Text style={styles.textStyle}>
                  <Text style={{fontWeight:"bold", marginBottom:20}}>Username</Text>{"\n"}
                  <Text style={{marginTop:20}}>user@email.com</Text>
                </Text>
              </View>
            {/************************************ Body each cards *******************************************************/}
              <View style={styles.body}>
                  <Text style={{fontWeight:"bold", fontSize:20}}>Borrow List</Text>
                  <View style={StyleSheet.wrapbutton}>

                    <TouchableOpacity style={styles.buttonContainer}>
                      <Image style={styles.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
                      <Text style={{fontWeight:'bold',marginLeft:10}}>Paper Towns {"\n"}
                        <Text></Text>{"\n"}
                        <Text style={{fontWeight:'100'}}>Borrowed Date: </Text><Text>Feb 1,2022</Text> {'\n'}
                        <Text style={{fontWeight:'100'}}>Return Date: <Text style={{fontWeight:'bold'}}>Feb 7,2022</Text></Text>
                      </Text>
                    </TouchableOpacity>           
                    <TouchableOpacity style={styles.buttonContainer}>
                      <Image style={styles.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
                      <Text style={{fontWeight:'bold',marginLeft:10}}>Paper Towns {"\n"}
                        <Text></Text>{"\n"}
                        <Text style={{fontWeight:'100'}}>Borrowed Date: </Text><Text>Feb 1,2022</Text> {'\n'}
                        <Text style={{fontWeight:'100'}}>Return Date: <Text style={{fontWeight:'bold'}}>Feb 7,2022</Text></Text>
                      </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.buttonContainer}>
                      <Image style={styles.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
                      <Text style={{fontWeight:'bold',marginLeft:10}}>Paper Towns {"\n"}
                        <Text></Text>{"\n"}
                        <Text style={{fontWeight:'100'}}>Borrowed Date: </Text><Text>Feb 1,2022</Text> {'\n'}
                        <Text style={{fontWeight:'100'}}>Return Date: <Text style={{fontWeight:'bold'}}>Feb 7,2022</Text></Text>
                      </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.buttonContainer}>
                      <Image style={styles.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
                      <Text style={{fontWeight:'bold',marginLeft:10}}>Paper Towns {"\n"}
                        <Text></Text>{"\n"}
                        <Text style={{fontWeight:'100'}}>Borrowed Date: </Text><Text>Feb 1,2022</Text> {'\n'}
                        <Text style={{fontWeight:'100'}}>Return Date: <Text style={{fontWeight:'bold'}}>Feb 7,2022</Text></Text>
                      </Text>
                    </TouchableOpacity>     
                  </View>
              </View>
            {/************************************ Footage *******************************************************/}
              <View>  
                {/**************** Line in the footage ******************/}
                {/* <Text style={{marginTop:10}}> ──────────────────────────</Text> */}
                <View style={{marginTop:50,flex: 1, height: 1, backgroundColor: 'black'}} />
                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                  <TouchableOpacity style={styles.row_library}>
                    <Image style={styles.library_icon} source={{uri: 'https://thumbs.dreamstime.com/b/beautiful-meticulously-designed-library-icon-perfect-use-designing-developing-websites-printed-materials-presentations-112019830.jpg'}}/>
                    <Text>Library</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.row_profile}>
                    <Image style={styles.profile_icon} source={{uri: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'}}/>
                    <Text>profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
        </ScrollView>
      </View>
    );
};
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:100,
    alignItems: 'center',
  },
  KIT:{
    fontWeight:"bold",
    fontSize:40,
    color:'white',
    marginTop:20
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textStyle:{
    marginTop:45,
    fontSize: 30,
    color:'black', 
    textAlign:'center',
    flex:1
  },
  profile: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop:20,
    marginLeft:20
  },
  body:{
    marginTop:40,
    marginLeft:20
  },
  wrapbutton:{
    flex:1,
  },
  buttonContainer: {
    flexDirection:'row',
    marginTop:10,
    height:105,
    width:width - 30,
    borderWidth:1,
    borderRadius:10,
  },
  book:{
    marginLeft:10,
    marginTop:2,
    width:80,
    height:99
  },
  profile_icon:{
    width: 50,
    height: 50,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop:20,
  },
  library_icon:{
    width: 50,
    height: 50,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop:20,
  },
});
export {
    Account
};