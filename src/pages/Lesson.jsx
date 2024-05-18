import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

const lessons = [
  { id: 1, title: "Aula 1", content: "Conteúdo da Aula 1" },
  { id: 2, title: "Aula 2", content: "Conteúdo da Aula 2" },
  // Adicione mais aulas conforme necessário
];

const Lesson = () => {
  const { id } = useParams();
  const lesson = lessons.find((lesson) => lesson.id === parseInt(id));

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">{lesson.title}</h2>
      <p className="mb-4">{lesson.content}</p>
      <div className="w-full h-96">
        <Canvas>{/* Adicione seu conteúdo 3D aqui */}</Canvas>
      </div>
      <div className="flex mt-8 space-x-4">
        {lesson.id > 1 && (
          <Link to={`/lesson/${lesson.id - 1}`}>
            <button className="px-6 py-3 bg-blue-600 text-white rounded">
              Aula Anterior
            </button>
          </Link>
        )}
        {lesson.id < lessons.length && (
          <Link to={`/lesson/${lesson.id + 1}`}>
            <button className="px-6 py-3 bg-blue-600 text-white rounded">
              Próxima Aula
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Lesson;
