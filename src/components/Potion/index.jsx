import potion from "./assets/2dpotion.png";
import Model from "./Model";

const Potion = () => {
  return (
    <div className="group cursor-none">
      <img src={potion} alt="" />
      <div className="invisible group-hover:visible pointer-events-none">
        <Model />
      </div>
    </div>
  );
};

export default Potion;
