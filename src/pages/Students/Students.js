import React, { useState, useEffect } from 'react'
import DashboardTop from '../../components/DashboardTop';
import ReactTable from '../../components/ReactTable';
import { AddData, DeleteData, getStudentsData, SearchData } from '../../redux/action/students';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpineer } from '../../redux/action/Spineer';
import CustomizedDialogs from './CustomizedDialogs';
import Form from './Form';
import { GetBoard, GetClass, GetMedium, GetSubject } from '../../redux/action/appsetting';


function Students() {

    const Columns = [
        {
            Header: "Food Name",
            accessor: 'name'
        },
        {
            Header: "Carbohydrates",
            accessor: 'carbohydrates'
        },
        {
            Header: "Protein",
            accessor: 'protein'
        },
        {
            Header: "Calories",
            accessor: 'calories'
        },
        {
            Header: "Fat",
            accessor: 'fat',
        },
        {
            Header: "Sugar",
            accessor: 'sugar'
        },
        {
            Header: "",
            accessor: 'Edit',
            Cell: (row) => (<><img src="/image/delete.png" alt="edit icon" onClick={() => handleDelete(row.row.original)} /><img src="/image/edit.png" alt="edit icon" onClick={() => handleUpdate(row.row.original)} /></>)
        },

    ]
    const dispatch = useDispatch();
    const myState = useSelector((state) => state.students.payload);
    console.log("M",myState);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({});

    const handleAdd = (e) => {
        setInput(values => ({
            ...values,
            type: "Add",
            name: "",
            carbohydrates: "",
            protein: "",
            calories: "",
            fat: "",
            sugar: "",
        }))

        setOpen(true);

    }
    const handleUpdate = (e) => {
        setInput(values => ({
            ...values,
            type: "Update",
            name: e.name,
            carbohydrates: e.carbohydrates,
            protein: e.protein,
            calories: e.calories,
            fat: e.fat,
            sugar: e.sugar,

        }))
        setOpen(true);

    }
    const handleSearch = (e) =>{
        setInput(values => ({
            ...values,
            type: "Search",
        }))
    }
    const handleDelete = (e) => {
        setInput(values => ({
            ...values,
            type: "Delete",
        }))

        dispatch(DeleteData(e));

    }
    useEffect(() => {
        dispatch(getStudentsData());
    }, [myState])
    return (
        <>
            <CustomizedDialogs name="Student Profile" input={input} open={open} setOpen={setOpen}>
                <Form input={input} setInput={setInput}/>
            </CustomizedDialogs>
            <DashboardTop Heading="Patient Data" subHeading="Basic Info" />
            <div className='container students'>
                <div className="row">
                    <div><button variant="contained" className='btn m-2 ' style={{ float: "right" }} onClick={handleAdd}>Add New</button></div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ReactTable column={Columns} data={myState} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Students