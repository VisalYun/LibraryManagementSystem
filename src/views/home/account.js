import * as React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, ScrollView, Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
import globalStyle from '../../style/globalStyle';

const AccountScreen = () => {
    return (
        <View horizontal={true} style={{flex: 1}}>
        <ScrollView style={styles.container}>
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
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textStyle:{
    marginTop:45,
    fontSize: 20,
    color:'black', 
    textAlign:'center',
    flex:1
  },
  profile: {
    width: 100,
    height: 100,
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
});
export default AccountScreen;