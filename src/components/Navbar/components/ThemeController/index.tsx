import DropdownButton from "./components/DropdownButton";
import DropdownContent from "./components/DropdownContent";

const ThemeController = () => {  
  return (
    <div className="flex-none">
      <div className="dropdown">
        <DropdownButton />
        <DropdownContent />
      </div>
    </div>
  );
};

export default ThemeController;
