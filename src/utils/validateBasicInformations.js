import validURL from "./validURL";

export default function validateBasicInformations(formData, errors) {
    let erro = false;
    if(formData.title.length < 20 || formData.title.length > 65) {
        errors.setTitleError(<h3>O título deve ter entre 20 e 65 caracteres</h3>)
        erro = true
    }else errors.setTitleError()

    if(!validURL(formData.image)) {
        errors.setImageError(<h3>O valor informado não é uma URL válida</h3>)
         erro = true
    }else errors.setImageError()

    if(formData.questions < 3 || isNaN(formData.questions)) {
        errors.setQuestionsError(<h3>O quizz deve ter no mínimo 3 perguntas</h3>)
        erro = true
    }else errors.setQuestionsError()

    if(formData.levels < 2 || isNaN(formData.levels)) {
        errors.setLevelsError(<h3>O quizz deve ter no mínimo 2 níveis</h3>)
        erro = true
    }else errors.setLevelsError()
    return erro
}