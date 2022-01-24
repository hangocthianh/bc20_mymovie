import React from 'react';
import '../style.css';


export default function InfoTicket() {
    return (
        <div className="shadow p-3 mb-5 bg-white rounded mt-4">
            <table className="table" >
                <thead className="h4 thead-dark">
                    <tr >
                        <th>Tên phim</th>
                        <th>HẬU HIAMA</th>
                    </tr>
                </thead>
                <tbody className="text-warning">
                <tr>
                        <th>Rạp</th>
                        <td></td>
                    </tr>
                    <tr>

                        <th>Suất chiếu</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Số ghế</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Giá vé</th>
                        <td></td>
                    </tr>
                </tbody>
                <tfoot className="h4">
                    <tr>
                        <td>Tổng tiền</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
