import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [testData,setTestData]=useState([])

    useEffect(()=>{
        axios.get('https://5d11b2ce84e906001457646a.mockapi.io/testdata')
            .then(res=>{
                console.log(res)
                setTestData(res.data)
            }).catch(err=>{
                console.log(err)
            })
    })
    return (
        <div>
            <ol>
                {
                    testData.map(test => <li key={test.id}>
                        <h1>Id:{test.id}</h1>
                        <h1>Name : {test.name}.</h1>
                        <img src={test.avatar} alt="Profile pic"/>
                        <h2>Created at : {test.createdAt}</h2>
                        <hr></hr>
                    </li>
                    )
                }
            </ol>
        </div>
    )
}

export default DataFetching
