import React from 'react';
import { AppWrapper } from '@ui/components';
import { Box } from '@mui/material';
import { GridMenu } from '@ui/components/GridMenu';
import { useApps } from '@os/apps/hooks/useApps';
import { useExternalApps } from '@common/hooks/useExternalApps';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { Fragment } from 'react';
import { barAPPS } from '@os/apps/config/apps';


export const HomeApp: React.FC = () => {
  const { apps,barapps } = useApps();
  const externalApps = useExternalApps();
  const [today, setDate] = React.useState(new Date());

  React.useEffect(() => {
      const timer = setInterval(() => { 
      setDate(new Date());
     const timeText = document.getElementById('time_update')
     const dataText = document.getElementById('data_update')
     var time = today.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"  });
     dataText.innerHTML = dayjs(today).format("MM/DD/YYYY");
     timeText.innerHTML = time;
    }, 5 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);
  
  var time = today.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"  });

  return (
  <AppWrapper>
                <div className='phone_time' id='time_update'>{time}</div>
                    <div className='phone_date' id='data_update'>{dayjs(today).format("MM/DD/YYYY")}</div>
      <Box component="div" mt={6} px={1}>
        {apps && <GridMenu xs={3} items={[...apps, ...externalApps]} />}
      </Box>

    {<div className="absolute bottom-5 left-8 right-8">
       <div className="h-20 w-full rounded-full bg-gray-300/40 backdrop-blur" >
       {apps && <GridMenu xs={4} items={[...apps]} bottomBar={true}   />}

        </div>
      </div>}
    </AppWrapper>
  );
};
