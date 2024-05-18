import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Tutorial R3F</h1>
      <div className="w-full h-96">
        <Canvas>{/* Adicione seu conteúdo 3D aqui */}</Canvas>
      </div>
      <Link to="/lesson/1" className="mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded">
          Iniciar Tutorial
        </button>
      </Link>
    </div>
  );
};

export default Home;
