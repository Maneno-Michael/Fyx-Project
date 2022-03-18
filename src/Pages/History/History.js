    import React from 'react';
    import Sidebar from '../../components/Sidebar'
    import ProfileNav from '../../components/profileNav';
    import Table from 'react-bootstrap/Table'
    import * as fa from "react-icons/fa";

    function History() {
        return ( 
            <div className=''>        
                <Sidebar/> 
                <div className='container'>
                    <ProfileNav profile="Nicole"/>
                
                    <Table borderless hover variant="outline-light">
                    <thead>
                    <tr>
                            <th>Date</th>
                            <th>Order No</th>
                            <th>Service</th>
                            <th>Technician</th>
                            <th>Invoice</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className='border shadow p-3 mb-5 bg-body rounded'>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> <fa.FaFileAlt/></td>
                        <td> <fa.FaReceipt/></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td> <fa.FaFileAlt/></td>
                        <td> <fa.FaReceipt/></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>
        );
    }

export default History;