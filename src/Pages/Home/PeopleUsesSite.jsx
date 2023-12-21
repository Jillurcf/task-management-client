import img1 from '../../assets/images/developers.jpg';
import img2 from '../../assets/images/corporate.jpg';
import img3 from '../../assets/images/bankers.jpg'
const PeopleUsesSite = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold my-24 border-b py-2'>People Who get Benifit</h1>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Developers</h2>
        </div>
        <figure>
          <img
            src={img1}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Corporate Professional</h2>
        
        </div>
        <figure>
          <img
            src={img2}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Bankers</h2>
         
        </div>
        <figure>
          <img
            src={img3}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default PeopleUsesSite;
