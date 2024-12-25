import { Box } from '@mui/material';
import React, { useMemo } from 'react';

export default function SectionContainer({ mlOnly, mrOnly, mxNone, children , pxOnly }) {
    const marginScreen = { xs: 3, sm: 5, md: 15, lg: 15, xl: 30 };
    const margins = useMemo(() => {
        if (mxNone) return { mx: marginScreen };
        if (mrOnly) return { mr: marginScreen };
        if (mlOnly) return { ml: marginScreen };
        return { mx: marginScreen };
    }, [mrOnly, mlOnly, mxNone]);
    
    
    const paddingScreen = {xs:20 }
    const padding = useMemo(() => {
        if (pxOnly) return { px: paddingScreen  };
        return { px: paddingScreen };
    }, [pxOnly]);

    return (
        <Box 
        sx={{overflowx:"hidden"}}
            {...margins}
            {...padding}
        >
            {children}
        </Box>
    );
}
