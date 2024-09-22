import apple from "../assets/apple.svg";
import searchImg from "../assets/images/search.svg";
import bagImg from "../assets/images/bag.svg";
const Navbar = () => {
  const MarqueData = ["Phones", "Macbooks", "iphone", "Tablets"];
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width ">
        <img src={apple} alt="Logo appel" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {MarqueData.map((item) => (
            <div
              key={item}
              className="px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all"
            >
              {item}
            </div> // Affiche chaque élément du tableau
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end  max-sm:flex-1">
          <img
            src={searchImg}
            alt="Image de Recherche"
            width={18}
            height={18}
          />

          <img src={bagImg} alt="Image de Sac" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
