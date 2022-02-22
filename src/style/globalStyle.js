import {Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default {
    container: {
        paddingVertical: 30,
        paddingHorizontal: 25,
        color: '#fff'
    },
    btn: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#00C2FF'
    },
    //  ***************** Style account.js *****************
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

    //  ***************** Style account.js *****************
}