import { Box, Stack} from '@mui/material';

const item = ['tomato', 'potato', 'onion', 'garlic', 'ginger', 'carrot', 'lettuce', 'kale', 'cucumber']

export default function Home() {
  return (
    <Box 
      width="100vw" 
      height="100vh"
      display={'flex'}
      justifyContent="center"
      alignItems="center"
    >
      <Stack width="800px" height="600px" spacing={2} ove>
        {item.map((i) => (
          <Box 
            key={i}
            width="100vw" 
            height="100vh"
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'#f0f0f0'}>
              {i}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

