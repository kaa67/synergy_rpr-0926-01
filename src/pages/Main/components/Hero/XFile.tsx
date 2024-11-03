import { fullName } from "utils/constants";

import imgKaa from "media/images/kaa67_520_520.jpeg";

const XFile = () => (
  <div className="relative img-wrapper">
    <img
      src={imgKaa}
      alt={fullName}
      style={{ transitionDuration: "500ms" }}
      className="max-w-sm rounded-lg shadow-2xl grayscale-0 hover:grayscale transition-all"
    />

    <div className="absolute left-0 top-0 bg-black text-gray-400 text-xs border border-gray-400 p-0.5">
      {fullName}
    </div>

    <div className="absolute right-0 top-0 bg-black text-gray-400 text-xs border border-gray-400 p-0.5">
      Инженер фронтенда
    </div>

    <div className="absolute left-0 bottom-0 bg-black text-gray-400 text-xs border border-gray-400 p-0.5">
      Опыт более 20 лет
    </div>

    <div className="absolute right-0 bottom-0 bg-black text-gray-400 text-xs border border-gray-400 p-0.5">
      Agile/Srum/Kanban
    </div>
  </div>
);

export default XFile;
