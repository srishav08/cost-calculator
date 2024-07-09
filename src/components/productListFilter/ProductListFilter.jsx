import React, {useState} from "react";
import {
    Typography,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Stack,
    Select,
    MenuItem,
    Button
} from '@mui/material';
import Item from "../item/Item";
import useStore from "../../store";
import DeleteIcon from '@mui/icons-material/Delete';

const ProductListFilter = (props) => {
    const { productList } = props;
    const [selectedQty, setSelectedQty] = useState([]);
    const {totalPrice, setTotalPrice, itemsCount, setItemsCount} = useStore();
    const [itemsData, setItemsData] = useState(new Map());
    

    const options = ["none"].concat(Array.from({ length: 50 }, (_,i) => i+1));

    const handleChange = (event, index) => {
        let {row, val, id, unitPrice} = event.target.value;
        if(val === "none") {
            val = 0;
        }
        const newSelectedQuantVal = [...selectedQty];
        newSelectedQuantVal[row] = val;
        setSelectedQty(newSelectedQuantVal);
        const itemMap = new Map(itemsData);
        itemMap.set( id, val*unitPrice );
        setItemsData(itemMap);

        let priceTotal = 0;
        for(const itemPrice of itemMap) {
            priceTotal += itemPrice[1];
        }
        setTotalPrice(priceTotal);
        setItemsCount(itemMap.size);
    };
    return (
        <>
            {/* <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}> */}
            {/* <Typography variant="h4" gutterBottom>
                Add products and quantity
            </Typography> */}
            <List
                subheader={<ListSubheader>
                    <Stack direction="row" spacing={2}>
                        <Item sx={{ width: '25%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <Typography variant="body1" >
                                Item name
                            </Typography>
                        </Item>
                        <Item sx={{ width: '25%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <Typography variant="body1" >
                                Item category
                            </Typography>
                        </Item>
                        <Item sx={{ width: '25%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <Typography variant="body1" >
                                Unit price
                            </Typography>
                        </Item>
                        <Item sx={{ width: '25%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <Typography variant="body1" >
                                Qty
                            </Typography>
                        </Item>
                    </Stack>
                </ListSubheader>}
            >
                {
                    productList.map((product, row) => {
                        const labelId = `checkbox-list-secondary-label-${product.id}`;
                        return <ListItem
                            key={product.id}
                            secondaryAction={
                                <>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedQty[row]}
                                    label="Qty"
                                    displayEmpty={true}
                                    variant='standard'
                                    renderValue={(selected) => {
                                        if (!selectedQty[row]) {
                                          return <em>Qty.</em>;
                                        }
                                        console.log(selectedQty[row])
                            
                                        return selectedQty[row];
                                      }}
                                    onChange={handleChange}
                                >
                                    {options.map(val => (
                                        val && <MenuItem key={val} value={{row, val, ...product}}>{val}</MenuItem>
                                    ))}
                                </Select>
                                </>
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText
                                    sx={{ width: '25%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                    id={labelId}
                                    primary={product.itemName}
                                />
                                <ListItemText
                                    sx={{ width: '25%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                    id={labelId}
                                    primary={product.itemCategory}
                                />
                                <ListItemText
                                    sx={{ width: '25%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                    id={labelId}
                                    primary={product.unitPrice}
                                />
                            </ListItemButton>
                        </ListItem>
                    })
                }
            </List>
            {/* </Box> */}
        </>
    )
}

export default ProductListFilter;