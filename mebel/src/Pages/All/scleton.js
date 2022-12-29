import { Skeleton, Space } from 'antd'
import React from 'react'

export default function Scleton() {
    return (
        <div style={{padding:'15px'}}>
            <div className="scletonnav">
                <Skeleton.Input style={{ marginBottom: '20px', width: '100px', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '100px', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '100px', height: '60px' }} active={true} size={'default'} shape={'default'} />
            </div>
            <div className="scletonnav">
                <Skeleton.Input style={{ marginBottom: '20px', width: '300px', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '300px', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '300px', height: '60px' }} active={true} size={'default'} shape={'default'} />
            </div>
            <div className="scletonnavbtns">
                <Skeleton.Button style={{ marginBottom: '20px', width:'100%', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Button style={{ marginBottom: '20px', width:'100%', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Button style={{ marginBottom: '20px', width:'100%', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Button style={{ marginBottom: '20px', width:'100%', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Button style={{ marginBottom: '20px', width:'100%', height: '60px' }} active={true} size={'default'} shape={'default'} />
                <Skeleton.Button style={{ marginBottom: '20px', width:'100%', height: '60px' }} active={true} size={'default'} shape={'default'} />
            </div>
            <div >
                <Skeleton.Input style={{ marginBottom: '20px', width: '300px', height: '60px' }} active={true} size={'default'} shape={'default'} />
            </div>
            <div className='sclitonSec1'>
                <Skeleton.Input style={{ marginBottom: '20px', width: '100%', height: '60vh' }} active={true} size={'default'} shape={'default'} block={true} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '100%', height: '60vh' }} active={true} size={'default'} shape={'default'} block={true} />
            </div>
            <div className='sclitonSec2'>
                <Skeleton.Input style={{ marginBottom: '20px', width: '100%', height: '10vh' }} active={true} size={'default'} shape={'default'} block={true} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '100%', height: '10vh' }} active={true} size={'default'} shape={'default'} block={true} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '100%', height: '10vh' }} active={true} size={'default'} shape={'default'} block={true} />
                <Skeleton.Input style={{ marginBottom: '20px', width: '100%', height: '10vh' }} active={true} size={'default'} shape={'default'} block={true} />
            </div>
        </div>
    )
}
