import React from "react";
import ProductListFilter from "../components/productListFilter/ProductListFilter";
import PriceCalculator from "../components/priceCalculator/priceCalculator";
import { productChart } from "../mock/priceData";
import { Grid, Paper } from '@mui/material';
import Item from "../components/item/Item";




const QuotationPage = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Item>
                    <ProductListFilter productList={productChart} />
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <PriceCalculator />
                </Item>
            </Grid>
        </Grid>

    )
}

export default QuotationPage;