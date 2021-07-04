  
import React, { useEffect, useState } from 'react';
import {db} from "../../firebase"
import {v4 as uuidv4} from "uuid"
import {StyledButton,StyledError,StyledFormWrapper,StyledInput,StyledForm,StyledF,StyledFW,StyledOut,StyledUrl,StyledSho} from "./URl.elements"
import shrtcode from './shrtcode';
import { async } from 'q';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Url() {
 const [url, seturl] = useState('');
 const [short, setShort] = useState('');
 const [urls, setUrls] = useState([]);
 const [input, setInput] = useState(false);
 
 const handleSubmit =(e)=>{
 e.preventDefault();
 getLink();  
 let code=uuidv4();
console.log(short);
db.collection("ur").add({
  url:url,
  code:code,
  check:false,
  short:short,  
})
};
const getLink = async () => {
  await shrtcode
    .get(`shorten?url=${url}`)
    .then((response) => {
      setShort(response.data.result.short_link);
    })
    .catch((error) => {
      console.error(error);
    });
};

useEffect(() => { 
  db.collection('ur').onSnapshot(snapshot => {
    setUrls(snapshot.docs.map(doc => doc.data()))
  })

}, []);



  return (
    <>
     
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput 
            autoComplete="off" name="URL"
            value={url}
            onChange={(e)=>seturl(e.target.value)}
            placeholder="Enter url"
            
          />
          <StyledButton type="submit">Shorten IT</StyledButton>
        </StyledForm>
      
        </StyledFormWrapper>
    
   
    {urls.map( u=> (
       <StyledFW >
         <StyledF >
       <StyledOut>
         <StyledUrl>{u.url}</StyledUrl>
         <StyledSho>{u.short}</StyledSho>
       </StyledOut>
       <CopyToClipboard text ={u.short} >
       <StyledButton >Copy</StyledButton>
       </CopyToClipboard>
       </StyledF>
       </StyledFW>
      ))}
    


      

    </>
  );
}

export default Url;