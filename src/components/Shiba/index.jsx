import shiba from "./assets/shiba.jpg";
import Model from "./Model";

const Shiba = () => {
  return (
    <div className="group cursor-none">
      <img src={shiba} alt="" />
      <div className="hidden group-hover:block">
        <Model />
      </div>
    </div>
  );
};

export default Shiba;
