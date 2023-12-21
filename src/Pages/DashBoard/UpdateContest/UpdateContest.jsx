
import { useForm } from "react-hook-form";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrophy } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateContest = () => {
  const {user} = useAuth()
 const updateData = useLoaderData()
  console.log(updateData);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axoiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data) {
      
      const contestItem = {
        name: data.name,
        email: user?.email,
        date: data.date,
        tags: data.tags,
        contestPrice: parseFloat(data.price),
        prizeMoney: data.pmoney,
        instruction: data.instruction,
        participants: 0,
        image: res.data.data.display_url,
      };
    
      const contestRes = await axoiosSecure.put(`/contests/${updateData._id}`, contestItem);
      console.log(contestRes.data);
      if (contestRes.data) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the contest`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with img url", res.data);
  };

  return (
    <div>
      <Sectiontitle
        heading="Update Contest"
        subHeading="what's new"
      ></Sectiontitle>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex gap-4 ">
          <div className="form-control w-full my-6 col-span-8">
            <label className="label">
              <span className="label-text">Contest name*</span>
            </label>
            <input
              type="text"
              defaultValue={updateData.contestName}
              placeholder="Contest Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control my-6 col-span-4">
            <label className="label">
              <span className="label-text">Contest date*</span>
            </label>
            <input
              type="date"
              defaultValue={updateData.date}
             
              {...register("date", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          </div>
          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Contest Tags*</span>
              </label>
              <select
                defaultValue={updateData.tags}
                {...register("tags", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Tag
                </option>
                <option value="Business Contest">Business Contest</option>
                <option value="Medical Contest">Medical Contest</option>
                <option value="Article Writing">Article Writing</option>
                <option value="Gaming">Gaming</option>
              
              </select>
           
            </div>
          
            {/* Price */}

            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Contest Price*</span>
              </label>
              <input
                type="number"
                defaultValue={updateData.price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* Price Money */}

            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Price Money*</span>
              </label>
              <input
                type="number"
                defaultValue={updateData.prizeMoney}
                placeholder="Price money"
                {...register("pmoney", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task and Submission Instruction</span>
            </label>
            <textarea
            defaultValue={updateData.instruction}
              {...register("instruction", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Description"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              {...register("image")}
              type="file"
              
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className=" mt-4 btn">
           Update Contest
           <FaTrophy></FaTrophy>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContest;
