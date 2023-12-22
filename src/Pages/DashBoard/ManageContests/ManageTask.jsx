import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link,} from "react-router-dom";
import { useEffect, useState } from "react";
import Dnd from "./Dnd";




const ManageTask = () => {
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
       {/* <Dnd></Dnd> */}
      <div className="grid grid-cols-3">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                {/* <th>#</th> */}
                {/* <th>Image</th> */}
                <th>ToDo</th>
                {/* <th>Deadline</th>
                <th>Priority</th>
                <th>Description</th> */}
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {newTasks.map((item, index) => (
                <tr key={item._id}>
                  {/* <td>{index + 1}</td> */}
                 
                  <td>{item.name}</td>
                  {/* <td className="text-right">{item.date}</td>
                  <td>
                  
                {item.tags}
          
            
               </td> */}
                  {/* <td>
                    <Link to={`/dashboard/UpdateContest/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit className="text-white"></FaEdit>
                      </button>
                    </Link>
                  </td> */}
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
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
                <th>Ongoing</th>
                {/* <th>Deadline</th>
                <th>Priority</th>
                <th>Description</th> */}
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {newTasks.map((item, index) => (
                <tr key={item._id}>
                  {/* <td>{index + 1}</td> */}
                 
                  <td>{item.name}</td>
                  {/* <td className="text-right">{item.date}</td>
                  <td>
                  
                {item.tags}
          
            
               </td> */}
                  {/* <td>
                    <Link to={`/dashboard/UpdateContest/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit className="text-white"></FaEdit>
                      </button>
                    </Link>
                  </td> */}
                  {/* <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td> */}
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
                  {/* <td>{index + 1}</td> */}
                 
                  <td>{item.name}</td>
                  {/* <td className="text-right">{item.date}</td>
                  <td>
                  
                {item.tags}
          
            
               </td> */}
                  {/* <td>
                    <Link to={`/dashboard/UpdateContest/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit className="text-white"></FaEdit>
                      </button>
                    </Link>
                  </td> */}
                  {/* <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </div>
  );
};

export default ManageTask;
