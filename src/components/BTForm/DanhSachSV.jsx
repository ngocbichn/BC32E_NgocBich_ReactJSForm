import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BTForm } from '../../store/reducers'
class DanhSachSV extends Component {
    render() {
        const { mangSV } = this.props
        return (
            <div>
                <div className='mt-5 bg-black-500p-5 bg-gray-800 text-white text-2xl font-bold p-12'>Danh sách sinh viên</div>
                <div>
                    <table className='w-full p-6 text-xs text-left whitespace-nowrap mt-10'>
                        <thead className='bg-gray-500 p-5 text-white text-lg'>
                            <tr>
                                <th className='p-12'>Mã SV</th>
                                <th className='p-12'>Họ tên</th>
                                <th className='p-12'>SĐT</th>
                                <th className='p-12'>Email</th>
                                <th className='p-12'></th>
                            </tr>
                        </thead>
                        <tbody className="border-b text-lg">
                            {mangSV.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.maSV}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button
                                                className='mr-12 rounded-lg bg-green-500 text-white'
                                                onClick={() => {
                                                    this.props.dispatch({
                                                        type: 'EDIT_USER',
                                                        payload: item.id,
                                                    })
                                                }}>
                                                <i className="fa-solid fa-pen-to-square text-14 p-14"></i>
                                            </button>
                                            <button
                                                className='rounded-lg mr-4 bg-red-500 text-white'
                                                onClick={() => {
                                                    this.props.dispatch({
                                                        type: 'DELETE_USER',
                                                        payload: item.id
                                                    })
                                                }}>
                                                <i className="fa-solid fa-trash text-14 p-14"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSV: state.BTForm.mangSV,
    }
}

export default connect(mapStateToProps)(DanhSachSV)