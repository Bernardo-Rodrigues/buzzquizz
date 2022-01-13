import api from "./api"

export default class ObtainQuizzes {
  getQuizzes() {
    return api.get("/quizzes");
  }
}