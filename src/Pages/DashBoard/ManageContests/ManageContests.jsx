import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link,} from "react-router-dom";
import useContests from "../../../Hooks/UseContests";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ManageContests = () => {
  const [contests, loading, refetch] = useContests();
  console.log(contests);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  // const {id} = useParams()

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
        const res = await axiosSecure.delete(`/contests/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
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
    axiosPublic.put(`/contests/approve/${item._id}`)
    .then(res=>{
     
        console.log(res.data);
        if(res.data){
          refetch();
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
      <Sectiontitle
        heading="Mange Contest"
        subHeading="Hurry Up"
      ></Sectiontitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contests.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.contestName}</td>
                  <td className="text-right">${item.price}</td>
                  <td>
                  {
                  item.statu === 'Pending' ? 'pending' :                 
                 <button
                 onClick={() => handleApprove(item)}
                 className="btn btn-lg bg-orange-500"
               >
                {item.statu}
               </button>
               
               }
               </td>
                  <td>
                    <Link to={`/dashboard/UpdateContest/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit className="text-white"></FaEdit>
                      </button>
                    </Link>
                  </td>
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
      </div>
    </div>
  );
};

export default ManageContests;
