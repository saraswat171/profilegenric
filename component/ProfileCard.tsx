import React, { useState } from 'react';
import { Box,Button, ButtonOwnProps, ButtonProps, Stack, StackProps, SxProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import image23 from '../public/images/gjhgjh.jpg'
import Image from 'next/image';
interface Containerprops extends StackProps {
   
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; 
}
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
interface ProfileCardProps {
  containerProps?:Containerprops;
  backimageStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  contentStyle?: StackProps;
  userDetails?: {
    name: string;
    role: string;
  };
  buttonprops?:ButtonOwnProps;
  onFileChange?:(file:File)=>void;
}
const ProfileCard: React.FC<ProfileCardProps> = ({
  containerProps,
  backimageStyle,
  imageStyle,
  contentStyle,
  userDetails,
  buttonprops,
  onFileChange,
}) => {

   const [filess , setFile] = useState<File | null>(null)
 
   const handleFileChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files &&
     e.target.files[0];
    if (file)
 {   setFile(file);
        if(onFileChange){
            onFileChange(file);
          }  }
    
   };
  return (
    <Stack flexDirection={'column'} {...containerProps}>
      <Stack flexDirection={'column'}>
        <Box>
          <img  alt='' style={{ ...backimageStyle }} />
        </Box>
        <Box sx={{ display: 'flex', ml: '78.5px', mt: '-38px', mb: '12px' }}>
          <img alt=''  style={{ ...imageStyle }} src={filess ? URL.createObjectURL(filess) : "/images/gjhgjh.jpg"}  />
          <img alt=''  style={{ ...imageStyle }} src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"/>
          <Image alt='' width={50} height={50} src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"/>
          </Box>
      </Stack>
      <Stack flexDirection={'column'} { ...contentStyle }>
        <Typography fontSize={'12px'}>{userDetails?.name}</Typography>
        <Typography fontSize={'12px'}>{userDetails?.role}</Typography>

       {buttonprops &&  <Button {...buttonprops}  component="label" >Upload   <VisuallyHiddenInput type="file"  onChange={handleFileChange} /></Button>}
      </Stack>
    </Stack>
  );
}
export default ProfileCard;