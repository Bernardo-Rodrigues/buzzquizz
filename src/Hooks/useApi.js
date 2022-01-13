import ObtainQuizzes from "../Services/obtainQuizzes";
import ObtainUniqueQuizz from "../Services/obtainUniqueQuizz";

export default function useApi() {
  return {
    quizzes: new ObtainQuizzes(),
    quizz: new ObtainUniqueQuizz()
  };
}