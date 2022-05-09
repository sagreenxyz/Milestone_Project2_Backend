import { Form, Button } from "react-bootstrap"
import axios from "axios"
import { useState } from "react";

export default function NewQuestion() {
  let [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("")
        const category_id = document.getElementById("category_id");
        const difficulty_id = document.getElementById("difficulty_id");
        const question_type_id = document.getElementById("question_type_id");
        const question_text = document.getElementById("question_text");
        const email = document.getElementById("email");
    
        await axios
          .post("http://localhost:5000/questions", {
            category_id: category_id.value,
            difficulty_id: difficulty_id.value,
            question_type_id: question_type_id.value,
            question_text: question_text.value,
            email: email.value,
          })
          .then((data) => {
            console.log(data);
            if (data.data.success) {
              console.log("posted question");
            }
          })
          .catch((error) => {
            console.log("question not posted");
          });
          event.target.reset();
          setMessage("Successfully added new question.")
      }

    return (
        <>
        <div><h1>Create a question!</h1></div>
        <div class="d-flex justify-content-center">
        <div class="col-sm-6">
            <form onSubmit={handleSubmit}>
                <label htmlFor="category_id">Choose a Category</label>
                <br/>
                <select class="form-select form-select-sm"  id="category_id" name="category_id">
                        <option value="1">Animals</option>
                        <option value="2">Art</option>
                        <option value="3">Celebrities</option>
                        <option value="4">Entertainment: Board Games</option>
                        <option value="5">Entertainment: Books</option>
                        <option value="6">Entertainment: Cartoon & Animations</option>
                        <option value="7">Entertainment: Comics</option>
                        <option value="8">Entertainment: Film</option>
                        <option value="9">Entertainment: Japanese Anime & Manga</option>
                        <option value="10">Entertainment: Music</option>
                        <option value="11">Entertainment: Musicals & Theatres</option>
                        <option value="12">Entertainment: Television</option>
                        <option value="13">Entertainment: Video Games</option>
                        <option value="14">General Knowledge</option>
                        <option value="15">Geography</option>
                        <option value="16">History</option>
                        <option value="17">Mythology</option>
                        <option value="18">Politics</option>
                        <option value="19">Science: Computers</option>
                        <option value="20">Science: Gadgets</option>
                        <option value="21">Science: Mathematics</option>
                        <option value="22">Science & Nature</option>
                        <option value="23">Sports</option>
                        <option value="24">Vehicles</option>
                </select>
                <label htmlFor="difficulty_id">Choose a Difficulty</label>
                <br/>
                <select class="form-select form-select-sm"  id="difficulty_id" name="difficulty_id">
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                </select>
                <label htmlFor="question_type_id">Choose a Question Type</label>
                <br/>
                <select class="form-select form-select-sm"  id="question_type_id" name="question_type_id">
                        <option value="1">True / False</option>
                        <option value="2">Multiple Choice</option>
                </select>
                <label htmlFor="question_text">Enter your question!</label>
                <br/>
                <input type="text" class="form-control" name="question_text" id="question_text"/>
                <label htmlFor="email">Enter your email</label>
                <br/>
                <input type="email" class="form-control" name="email" id="email" required/>
                <br/>
                <Button variant='dark' size='lg' type="submit">
                    Submit
                </Button>
            </form>
            <h5>We will review your question after it has been submitted. 
                Once the question is approved a member of our trivia team will reach out to you at the submitted email
                so you can provide answers for your question!</h5>
                <h6 style={{color:"red"}}>{message}</h6>
        </div>
        </div>
        </>
    )
}