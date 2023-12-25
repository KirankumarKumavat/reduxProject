import Login from "../Src/Screens/Login/Login";
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';


it ("Call the data", async function(){
    global.fetch=jest.fn().mockImplementation(()=>{
        var p = new Promise((resolve,reject) => {
            resolve({
                JSON:function(){
                    return{ email:''}
                }

            })
        })
        return p;
    })

    const response=await Login.SignInAPI();
        expect(response.email).toBe('')
  
})