import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import '../Styles/table.css'
function ReactTable(props) {
    const columns = useMemo(() => props.column, [props.column]);
    const data = React.useMemo(() => props.data, [props.data.length])


    const tableInstance = useTable({ columns, data }, usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        setPageSize,
        state,
        prepareRow,
    } = tableInstance

    const { pageSize } = state;

    return (
        <>
            <div id="table-box">
                {/* <div className="col px-4">
                    <label className='text-muted text2 px-2'>Show </label>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {[10,15,20].map((pageSize,index) => (<>show<option value={pageSize} key={index}> {pageSize}</option>Entries</>))}
                    </select>
                    <label className='text-muted text2 px-1'> Entries</label>
                </div> */}

                <TableContainer component={Paper} className="table-container my-3">
                    <table className='table' {...getTableProps()}>
                        <thead>
                            {
                                headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((columns) => (
                                                <th {...columns.getHeaderProps()} scope="col">{columns.render('Header')} </th>
                                            ))
                                        }
                                    </tr>
                                ))
                            }

                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {// Loop over the table rows
                                page.map(row => {
                                    // Prepare the row for display
                                    prepareRow(row)
                                    return (
                                        // Apply the row props
                                        <tr {...row.getRowProps()}>
                                            {// Loop over the rows cells
                                                row.cells.map(cell => {
                                                    // Apply the cell props
                                                    return (
                                                        <td {...cell.getCellProps()} scope="row">
                                                            {// Render the cell contents
                                                                cell.render('Cell')}
                                                        </td>
                                                    )
                                                })}
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                        <div className="table-button" >
                            <button className='btn m-2' onClick={() => previousPage()}>Previous</button>
                            <button className='btn m-2' onClick={() => nextPage()} style={{ float: "right", marginTop:"auto" }}>Next</button>
                        </div>

                </TableContainer>

            </div>
        </>
    )
}

export default ReactTable