import { Box } from '@mui/material';
import React, { useMemo } from 'react';

export default function SectionContainer({ mlOnly, mrOnly, mxNone, children }) {
    const marginScreen = { xs: 3, sm: 5, md: 20, lg: 20, xl: 30 };

    const margins = useMemo(() => {
        if (mxNone) return { mx: 0 };
        if (mrOnly) return { mr: marginScreen };
        if (mlOnly) return { ml: marginScreen };
        return { mx: marginScreen };
    }, [mrOnly, mlOnly, mxNone]);

    return (
        <Box 
        sx={{overflowx:"hidden"}}
            {...margins}
        >
            {children}
        </Box>
    );
}
