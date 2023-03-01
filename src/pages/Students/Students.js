import React, { useState, useEffect } from 'react'
import DashboardTop from '../../components/DashboardTop';
import ReactTable from '../../components/ReactTable';
import { getStudentsData, SearchData } from '../../redux/action/students';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpineer } from '../../redux/action/Spineer';
import CustomizedDialogs from './CustomizedDialogs';

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
            Cell: (row) => (<><i class="fa fa-exchange mx-4" aria-hidden="true" onClick={()=>handleSearch(row.row.original)}></i></>)
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
        // {
        //     Header: "Calories",
        //     accessor: 'nutritions.calories'
        // },
        // {
        //     Header: "Fat",
        //     accessor: 'fat',
        // },
        // {
        //     Header: "Sugar",
        //     accessor: 'sugar'
        // },
        {
            Header: "",
            accessor: 'Edit',
            Cell: (row) => (<i class="fa fa-exchange" aria-hidden="true" ></i>)
        },

    ]
    const dispatch = useDispatch();
    const food = useSelector((state) => state.students.data);
    const swapfood = useSelector((state) => state.students.swapfood);


    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({});


    const handleSearch = (e) =>{
        setInput(values => ({
            ...values,
            type: "Search",
        }))
        setOpen(true);
        dispatch(SearchData(e))
    }

    useEffect(() => {
        dispatch(getStudentsData());
    }, [food])
    return (
        <>
            <CustomizedDialogs name="Student Profile" input={input} open={open} setOpen={setOpen}>
                <ReactTable column={Columns2} data={swapfood} />
            </CustomizedDialogs>
            <DashboardTop Heading="Patient Data" subHeading="Basic Info" />
            <div className='container students'>
                <div className="row">
                    <div className="col-12">
                        <ReactTable column={Columns} data={food} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Students