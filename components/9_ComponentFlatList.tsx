import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const App=()=>{

    const users = [
        { name: 'John', email: 'john@test.com' },
        { name: 'Jane', email: 'jane@test.com' },
        { name: 'Alice', email: 'alice@test.com' },
        { name: 'Bob', email: 'bob@test.com' }
      ];
      
    return(
        <View>
            <Text style={{fontSize:27}}>Component in Loop with FlatList</Text>
            <FlatList
            data={users}
            renderItem={
                ({item}) =>
                <UserData item={item} age={24}/>
            }
            />
        </View>
    )
}

const UserData=(props:any)=>{
    const item=props.item;
    const age=props.age;
    return(
        <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
            <Text style={styles.item}>{age}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    box:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'orange',
        marginBottom:10,
        marginHorizontal:10
    },
    item:{
        fontSize:24,
        color:'orange',
        flex:1,
        margin:2,
        textAlign:'center'
    }
})

export default App;