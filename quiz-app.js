const quizData = [
    {
        question : 'How old is Abhay ?',
        a : '10',
        b : '17',
        c : '20',
        d : '21',
        correct : 'c'
    },
    {
        question : 'What is yhe best programming language ?',
        a : 'JAVA',
        b : 'PYTHON',
        c : 'JS',
        d : 'CPP',
        correct : 'c'
    },
    {
        question : 'Who is the Prime minister of India ?',
        a : 'Rahul',
        b : 'Yogi',
        c : 'Arvind',
        d : 'Modi',
        correct : 'd'
    },
    {
        question : 'What is the full form of HTML?',
        a : 'Hypertext Markup Language',
        b : 'Cascading Style Sheet',
        c : 'Json Object Notation',
        d : 'Application Programming Interface',
        correct : 'a'
    },
    {
        question : 'What year javascript launched ?',
        a : '2020',
        b : 'None of these',
        c : '2019',
        d : '2018',
        correct : 'b'
    }
]

const answerELs = document.querySelectorAll(".answer")
const quiz = document.querySelector("#quiz")
const question = document.querySelector("#question")
const a_text = document.querySelector("#a_text")
const b_text = document.querySelector("#b_text")
const c_text = document.querySelector("#c_text")
const d_text = document.querySelector("#d_text")
const submitBtn = document.querySelector("#submit")



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswer()
    const currentQuestionData= quizData[currentQuiz]
    question.innerHTML = currentQuestionData.question

    a_text.innerHTML = currentQuestionData.a
    b_text.innerHTML = currentQuestionData.b
    c_text.innerHTML = currentQuestionData.c
    d_text.innerHTML = currentQuestionData.d

}


function getSelected(){

    let answer =  undefined
    answerELs.forEach((answerEl)=>{
        if(answerEl.checked){
             answer =  answerEl.id
        }
    })
    return answer
}



function deselectAnswer(){
    answerELs.forEach((answerEl)=>{
        answerEl.checked = false
    })
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected()
    console.log(answer)
    // check to see the answer
    if (answer && answer===quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    }
    else{
        // todo show result
        quiz.innerHTML = `<h2>you answered correctly at ${score} / ${quizData.length} questions</h2>
        <button onclick = "location.reload()">Reload</button>`
    }


})
