import React, { useState, useEffect } from 'react'
import DashboardTop from '../../components/DashboardTop';
import ReactTable from '../../components/ReactTable';
import { AddData, DeleteData, replace, SearchData } from '../../redux/action/students';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpineer } from '../../redux/action/Spineer';
import CustomizedDialogs from './CustomizedDialogs';

function Students() {

    const Columns1 = [
        {
            Header: "Food Name",
            accessor: 'name'
        },
        {
            Header: "Carbohydrates",
            accessor: 'nutritions.carbohydrates'
        },
        {
            Header: "Protein",
            accessor: 'nutritions.protein'
        },
        {
            Header: "Calories",
            accessor: 'nutritions.calories'
        },
        {
            Header: "Fat",
            accessor: 'nutritions.fat',
        },
        {
            Header: "Sugar",
            accessor: 'nutritions.sugar'
        },
        {
            Header: "",
            accessor: 'Action',
            Cell: (row) => (<><button className='btn btn-primary mx-3' onClick={()=>handleSearch(row.row.original)}><i className="fa fa-exchange mx-4" aria-hidden="true" ></i></button><button className='btn btn-primary' onClick={()=>handleDelete(row.row.original)}><i className="fa fa-trash mx-4" aria-hidden="true" ></i></button></>)
        },

    ]
    const Columns2 = [
        {
            Header: "Food Name",
            accessor: 'name'
        },
        {
            Header: "Carbohydrates",
            accessor: 'nutritions.carbohydrates'
        },
        {
            Header: "Protein",
            accessor: 'nutritions.protein'
        },
        {
            Header: "",
            accessor: 'Edit',
            Cell: (row) => (<button className='btn btn-secondary' onClick={()=>handleAdd(row.row.original)}><i className="fa fa-add" aria-hidden="true" ></i></button>)
            
        },

    ]
    const Columns3 = [
        {
            Header: "Food Name",
            accessor: 'name'
        },
        {
            Header: "Carbohydrates",
            accessor: 'nutritions.carbohydrates'
        },
        {
            Header: "Protein",
            accessor: 'nutritions.protein'
        },
        {
            Header: "",
            accessor: 'Edit',
            Cell: (row) => (<button className='btn btn-secondary' onClick={()=>handleReplace(row.row.original)}><i className="fa fa-exchange" aria-hidden="true" ></i></button>)
            
        },

    ]
    const dispatch = useDispatch();
    const currentDiets = useSelector((state) => state.students.currentDiets);
    const allDiets = useSelector((state) => state.students.allDiets);
    const swapfood = useSelector((state) => state.students.swapfood);
    console.log("Swapfood",swapfood);

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({});


    const handleSearch = (e) =>{
        setOpen(true);
        setInput(values => ({
            ...values,
            type: "search",
            food:e,
        }))
        dispatch(SearchData(e))
    }

    const handleReplace = (e) =>{
        setInput(values => ({
            ...values,
            type: "replace",
        }))
        handleDelete(input.food);
        handleAdd(e);
        setOpen(false);
    }

    const handleDelete = (e) =>{
        setInput(values => ({
            ...values,
            type: "delete",
        }))
        dispatch(DeleteData(e))
        setOpen(false);
    }
    const handleAddPopup = (e) =>{
        setInput(values => ({
            ...values,
            type: "add",
        }))
        setOpen(true);
    }
    const handleAdd = (e) =>{
        setInput(values => ({
            ...values,
            type: "add",
        }))
        dispatch(AddData(e));
    }
 
    return (
        <>
            <CustomizedDialogs name="Student Profile" input={input} open={open} setOpen={setOpen}>
                {
                    input.type==="add"?   <ReactTable column={Columns2} data={allDiets} />: <ReactTable column={Columns3} data={swapfood} />
                }
             
            </CustomizedDialogs>
            <DashboardTop Heading="Patient Diet" subHeading="Basic Info" />
            <div className='container students'>
                <div className="row">
                    <div className="col-12">
                    <button variant="contained" className='btn m-2 ' style={{ float: "right", background: "#FF7E07", color: "white" }} onClick={handleAddPopup}>Add New</button>
                        <ReactTable column={Columns1} data={currentDiets} />
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Students