import { useLoaderData } from "react-router-dom";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => { 
  // const {name, category, recipe, price, _id} = useLoaderData();
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const axoiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {

    // image upload to imgbb and then get an url
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        cateogory: data.cateogory,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axoiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if(menuRes.data.modifiedCount > 0){
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:`${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500
        });

      }
    }
    console.log( "with img url",res.data);
  };
  return (
    <div>
      <Sectiontitle
        heading="Update Item"
        subHeading="Update an Item"
      ></Sectiontitle>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Receipe name*</span>
            </label>
            <input
              type="text"
              // defaultValue={name}
              placeholder="Receipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                // defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>
            {/* Price */}

            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                // defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
            // defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className=" mt-4 btn">
            Update Menu Item
          
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateItem;
