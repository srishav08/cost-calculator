import React from "react";
import { Box, Typography } from '@mui/material';
import useStore from "../../store";

const PriceCalculator = () => {

    const {itemsCount, totalPrice} = useStore();
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <Typography variant="h6">
                Total items: {itemsCount}
            </Typography>
            <Typography variant="h4">
                Amount total: {totalPrice}
            </Typography>
        </Box>
    )
}
export default PriceCalculator;