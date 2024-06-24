import React, { useState } from "react";
import { ActivityIndicator,  Button,  StyleSheet, View } from "react-native";

const App=()=>{
    const [showLoader,setShowLoader]=useState(false)
    
    const displayLoader=()=>{
        setShowLoader(true)

        setTimeout(()=>{
            setShowLoader(false)
        },3000);
    }

    return(
        <View style={styles.main}>
           <ActivityIndicator size={'large'} color='blue' animating={showLoader} />
           <View style={{marginBottom:10}}>
           <Button title="Show loader" onPress={displayLoader} />
           </View>
           <Button title="Hide loader" onPress={()=>setShowLoader(false)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
    },
  });

export default App;