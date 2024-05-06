'use client'
import ProfileCard from '@/component/ProfileCard'
import React from 'react'

function Login() {
   const handleFileChange=(file:File)=>{
    console.log('file: ', file);
   
  }
  return (
    <div>
      <ProfileCard 
      
        containerProps={{ sx:{bgcolor:'#08c8c' }, className: 'container-class' ,style: {  width:'225px',height:'max-content' } } } 
        backimageStyle={{width:225 , height:56 ,borderRadius:10, borderBottomLeftRadius:0 ,
          borderBottomRightRadius:0 ,background:'skyblue'  }}
          imageStyle={{ width:68 , height:68 ,background:'black', borderRadius:'50%' }}  
          contentStyle={{  padding:0 , paddingTop:1.5 , paddingBottom:1.5 , alignItems:'center' ,width:'225px' }}
          userDetails={{ name: 'Chetan Saraswat', role: 'Software developer at Zenmonk' }}
          buttonprops={{sx:{color:'pink' }, variant:'contained'}}
          onFileChange={handleFileChange}
      />
    </div>
  )
}

export default Login



