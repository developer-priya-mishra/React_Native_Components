import React from "react";
import { SectionList, Text, View } from "react-native";

const App=()=>{
    const users = [
        {
          id: 1,
          name: 'John',
          data: ['JavaScript', 'Python', 'Java']
        },
        {
          id: 2,
          name: 'Jane',
          data: ['C++', 'Swift', 'Ruby']
        },
        {
          id: 3,
          name: 'Alice',
          data: ['HTML', 'CSS', 'TypeScript']
        },
        {
          id: 4,
          name: 'Bob',
          data: ['Go', 'Rust', 'PHP']
        }
      ];
      
    return(
        <View>
            <Text style={{fontSize:31}}>Section List in React Native</Text>
            <SectionList
            sections={users}
            renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
            renderSectionHeader={({section:{name}})=><Text style={{fontSize:24,color:'red'}}>{name}</Text>}
            />
        </View>
    )
}

export default App;