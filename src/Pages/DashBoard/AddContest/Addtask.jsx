import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Addtask = () => {
  const {user} = useAuth()
  const { register, handleSubmit, reset } = useForm();
  // const axiosPublic = useAxiosPublic();
  const axoiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    // const imgFile = { image: data.image[0] };
    // const res = await axoiosSecure.post(image_hosting_api, imgFile, {
    //   headers: {
    //     "content-Type": "multipart/form-data",
    //   },
    // });
    // if (res.data) {
      // now send the menu item data to the server with the image url
      const newTaskItem = {
        name: data.title,
        // email: user?.email,
        date: data.deadline,
        tags: data.tags,
        // contestPrice: parseFloat(data.price),
        // prizeMoney: data.pmoney,
        instruction: data.instruction,
        // participants: 0,
        // image: res.data.data.display_url,
      };
      const contestRes = await axoiosSecure.post("/newTask", newTaskItem);
      console.log(contestRes.data);
      if (contestRes.data) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the contest`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    // console.log("with img url", res.data);
  // };

  return (
    <div>
      
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex gap-4 ">
          <div className="form-control w-full my-6 col-span-8">
            <label className="label">
              <span className="label-text">Task Title*</span>
            </label>
            <input
              type="text"
              placeholder="Task Title"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control my-6 col-span-4">
            <label className="label">
              <span className="label-text">Deadline*</span>
            </label>
            <input
              type="date"
             
              {...register("deadline", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          </div>
          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Priority*</span>
              </label>
              <select
                defaultValue="default"
                {...register("tags", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Set Priority
                </option>
                <option value="Business Contest">Low</option>
                <option value="Medical Contest">Moderate</option>
                <option value="Article Writing">High</option>
              
              </select>
           
            </div>
          
            {/* Price */}

            {/* <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Contest Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div> */}
            {/* Price Money */}

            {/* <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Price Money*</span>
              </label>
              <input
                type="number"
                placeholder="Price money"
                {...register("pmoney", { required: true })}
                className="input input-bordered w-full"
              />
            </div> */}
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("instruction", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Description"
            ></textarea>
          </div>

          {/* <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div> */}

          <button className=" mt-4 btn">
            Add Task
          
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addtask;
