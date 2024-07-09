import React, {useEffect, useState} from "react";
import ProductListFilter from "../components/productListFilter/ProductListFilter";
import PriceCalculator from "../components/priceCalculator/priceCalculator";
import { Grid } from '@mui/material';
import Item from "../components/item/Item";
import Papa from 'papaparse';


const QuotationPage = (props) => {
    const [productData, setProductData] = useState([]);
    useEffect(()=>{
        Papa.parse("/costSheet.csv",{
            header: true,
              download: true,
              skipEmptyLines: true,
              delimiter: ",",
              complete: (results) => {
                setProductData(results.data);
              }
        })
    },[])
    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <Item>
                    <ProductListFilter productList={productData} />
                </Item>
            </Grid>
            <Grid item md={4}>
                <Item>
                    <PriceCalculator />
                </Item>
            </Grid>
        </Grid>

    )
}

export default QuotationPage;