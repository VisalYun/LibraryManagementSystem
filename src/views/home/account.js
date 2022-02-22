import * as React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, ScrollView, } from 'react-native'
import globalStyle from '../../style/globalStyle';

const AccountScreen = () => {
    return (
        <View horizontal={true} style={{flex: 1}}>
        <ScrollView style={globalStyle.container}>
            {/* ***************************** This is the profile bar **************************************************** */}
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity>
                  <Image style={globalStyle.profile} source={{uri: 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'}}/>
                </TouchableOpacity>
                <Text style={globalStyle.textStyle}>
                  <Text style={{fontWeight:"bold", marginBottom:20}}>Username</Text>{"\n"}
                  <Text style={{marginTop:20}}>user@email.com</Text>
                </Text>
              </View>
            {/************************************ Body each cards *******************************************************/}
              <View style={globalStyle.body}>
                  <Text style={{fontWeight:"bold", fontSize:20}}>Borrow List</Text>
                  <View style={StyleSheet.wrapbutton}>

                    <TouchableOpacity style={globalStyle.buttonContainer}>
                      <Image style={globalStyle.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
                      <Text style={{fontWeight:'bold',marginLeft:10}}>Paper Towns {"\n"}
                        <Text></Text>{"\n"}
                        <Text style={{fontWeight:'100'}}>Borrowed Date: </Text><Text>Feb 1,2022</Text> {'\n'}
                        <Text style={{fontWeight:'100'}}>Return Date: <Text style={{fontWeight:'bold'}}>Feb 7,2022</Text></Text>
                      </Text>
                    </TouchableOpacity>           
                    <TouchableOpacity style={globalStyle.buttonContainer}>
                      <Image style={globalStyle.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
                      <Text style={{fontWeight:'bold',marginLeft:10}}>Paper Towns {"\n"}
                        <Text></Text>{"\n"}
                        <Text style={{fontWeight:'100'}}>Borrowed Date: </Text><Text>Feb 1,2022</Text> {'\n'}
                        <Text style={{fontWeight:'100'}}>Return Date: <Text style={{fontWeight:'bold'}}>Feb 7,2022</Text></Text>
                      </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={globalStyle.buttonContainer}>
                      <Image style={globalStyle.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
                      <Text style={{fontWeight:'bold',marginLeft:10}}>Paper Towns {"\n"}
                        <Text></Text>{"\n"}
                        <Text style={{fontWeight:'100'}}>Borrowed Date: </Text><Text>Feb 1,2022</Text> {'\n'}
                        <Text style={{fontWeight:'100'}}>Return Date: <Text style={{fontWeight:'bold'}}>Feb 7,2022</Text></Text>
                      </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={globalStyle.buttonContainer}>
                      <Image style={globalStyle.book} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81WBJQUEFsL.jpg'}} />   
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

export default AccountScreen;