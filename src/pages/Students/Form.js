import React from 'react'
import { DialogContent, TextField, InputLabel, MenuItem, FormHelperText, FormControl, Select, OutlinedInput, ListItemText, Checkbox } from '@mui/material';
import { useSelector } from 'react-redux';
import Box from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function Form(props) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        props.setInput(values => ({ ...values, [name]: value }))
    }

    return (
        <>
            <DialogContent>
                <div className="row">
                    <div className="col">
                        <TextField
                            className="inputRounded "
                            variant="outlined"
                            size="small"
                            label={"Enter Food Name "}
                            name="name"
                            defaultValue={props.input.name || ""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                    <div className="col">
                        <TextField
                            className="inputRounded "
                            variant="outlined"
                            size="small"
                            label={"Enter Carbohydrate "}
                            name="carbohydrates"
                            defaultValue={props.input.carbohydrates}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col">
                        <TextField
                            className="inputRounded "
                            variant="outlined"
                            size="small"
                            label={"Enter Protein "}
                            name="protein"
                            defaultValue={props.input.protein}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                    <div className="col">
                        <TextField
                            className="inputRounded "
                            variant="outlined"
                            size="small"
                            label={"Enter Calories "}
                            name="calories"
                            defaultValue={props.input.calories}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col">
                        <TextField
                            className="inputRounded "
                            variant="outlined"
                            size="small"
                            label={"Enter Fat "}
                            name="fat"
                            defaultValue={props.input.fat}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                    <div className="col">
                        <TextField
                            className="inputRounded "
                            variant="outlined"
                            size="small"
                            label={"Enter Sugar "}
                            name="sugar"
                            defaultValue={props.input.sugar}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                </div>              
              
                
            </DialogContent>
        </>
    )
}

