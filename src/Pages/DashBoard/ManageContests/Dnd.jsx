import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link,} from "react-router-dom";
import { useEffect, useState } from "react";

import { Component } from 'react';
// import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const Dnd = () => {
    const [newTasks, setNewTasks] = useState([])
    console.log(newTasks);
      const axiosSecure = useAxiosSecure();
     useEffect(()=>{
     fetch('https://task-management-platform-server-iota.vercel.app/api/v1/newTask')
     .then(res=> res.json())
     .then(data=> setNewTasks(data))
     
     },[])
     
    
      const handleDeleteItem = (item) => {
        console.log(item);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/task/${item._id}`);
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              // refetch to update the ui
              // refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} has been deleted`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
          }
        });
      };
    
     
      
      const handleApprove = item =>{
        console.log(item._id);
       axiosSecure.put(`/task/${item._id}`)
        .then(res=>{
         
            console.log(res.data);
            if(res.data){
              // refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.statu} is an approved now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
      }
      return (
        <div>
           <DragDropContext>
            <Droppable droppableId="characters">
                {(provided)=> {

                
          <div className="grid grid-cols-3" {...provided.droppableProps} ref={provided.innerRef}>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                  
                    <th>ToDo</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {newTasks.map((item, index) => (
                    <Draggable key={item._id}>
                    <tr >
                 
                     
                      <td>{item.name}</td>
                      
                    </tr>
                    </Draggable>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                   
                    <th>Ongoing</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {newTasks.map((item, index) => (
                    <tr key={item._id}>
                      {/* <td>{index + 1}</td> */}
                     
                      <td>{item.name}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    {/* <th>Image</th> */}
                    <th>Complete</th>
                    {/* <th>Deadline</th>
                    <th>Priority</th>
                    <th>Description</th> */}
                    {/* <th>Delete</th> */}
                  </tr>
                </thead>
                <tbody>
                  {newTasks.map((item, index) => (
                    <tr key={item._id}>
                   
                     
                      <td>{item.name}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          }}
          </Droppable>
          </DragDropContext>
        </div>
      );
    };
    
    export default Dnd;
    