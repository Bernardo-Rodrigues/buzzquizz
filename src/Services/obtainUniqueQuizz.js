import api from "./api"

export default class ObtainUniqueQuizz {
  getQuizz(id) {
    return api.get(`/quizzes/${id}`);
  }
}