import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CreatingQuizz } from "../../../../Context/creatingQuizz";
import { Container, Form, Input } from "./styles";
import validateBasicInformations from "../../../../utils/validateBasicInformations";


export default function QuizzBasicInformations() {
    let quizzEdit;
    const navigate = useNavigate()
    const { newQuizz, setNewQuizz } = useContext(CreatingQuizz)
    const [titleError, setTitleError] = useState()
    const [imageError, setImageError] = useState()
    const [questionsError, setQuestionsError] = useState()
    const [levelsError, setLevelsError] = useState()
    const errors = {
        setTitleError,
        setImageError,
        setQuestionsError,
        setLevelsError
    }
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        questions: '',
        levels: ''
    });

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function  handleSubmit(e) {
        e.preventDefault();
        if(validateBasicInformations(formData, errors)) return
        
        setNewQuizz(
            {...newQuizz, 
                title:formData.title, 
                image:formData.image, 
                questions:new Array(parseInt(formData.questions)),
                levels:new Array(parseInt(formData.levels))
            }
        )
        navigate("/create-quizz/questions")
    }

    return(
        <Container>
                <h2>Comece pelo começo</h2>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text" 
                        value={quizzEdit ? quizzEdit.title : formData.title}
                        onChange={handleInputChange}
                        name="title"
                        placeholder="Título do seu quizz" 
                        error={titleError ? true : false}
                    />
                    {titleError}
                    <Input 
                        type="text" 
                        value={quizzEdit ? quizzEdit.image : formData.image}
                        onChange={handleInputChange}
                        name="image"
                        placeholder="URL da imagem do seu quizz"
                        error={imageError ? true : false}
                    />
                    {imageError}
                    <Input 
                        type="text" 
                        value={quizzEdit ? quizzEdit.questions : formData.questions}
                        onChange={handleInputChange}
                        name="questions"
                        placeholder="Quantidade de perguntas do quizz"
                        error={questionsError ? true : false}
                    />
                    {questionsError}
                    <Input 
                        type="text" 
                        value={quizzEdit ? quizzEdit.levels : formData.levels}
                        onChange={handleInputChange}
                        name="levels"
                        placeholder="Quantidade de níveis do quizz"
                        error={levelsError ? true : false}
                    />
                    {levelsError}
                    <button>Prosseguir pra criar perguntas</button>
                </Form>
            
        </Container>
        
    ) 
}