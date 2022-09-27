import React, { Component } from 'react'
import DanhSachSV from './DanhSachSV'
import FromDangKy from './FromDangKy'

export default class BTFrom extends Component {
    render() {
        return (
            <div className='max-w-7xl m-auto'>
                <FromDangKy />
                <DanhSachSV />
            </div>
        )
    }
}
