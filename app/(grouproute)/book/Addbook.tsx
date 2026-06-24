"use client"
import React, {useState} from 'react'
import { useMutation } from '@apollo/client/react'
import gql from 'graphql-tag'
import { GET_BOOKS } from '.'

const CREATE_BOOK = gql`
 mutation createbook($input:BookInput) {
  addBook(input:$input){
    id,
    title,
    author
  }
 }
`




const Addbook = () => {
    const [bookdetail , setbookdetail] = useState(
        {
            title:"",
            author:"",
            year:""
        }
    )
    const [createbook,{loading}] = useMutation(CREATE_BOOK,{refetchQueries:[GET_BOOKS]})
    
    const handlenewbook = async()=>{
        console.log(bookdetail);

        const {data} = await createbook({
            variables:{input:{
                ...bookdetail,
                year:parseInt(bookdetail.year)
            }},
        })
        console.log(data);
        
    } 
  return (
    <div>
        <input placeholder='Title' onChange={(e)=>setbookdetail({...bookdetail, title:e.target.value})} type="text" />
        <input placeholder='Author' onChange={(e)=>setbookdetail({...bookdetail, author:e.target.value})} type="text" />
        <input placeholder='Year' onChange={(e)=>setbookdetail({...bookdetail, year:e.target.value})} type="text" />
        <button  disabled={loading} onClick={handlenewbook}>{loading ? "loading ..." : "Add Book"} </button>
    </div>
  )
}

export default Addbook