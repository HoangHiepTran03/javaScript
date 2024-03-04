
// Create the survey questions
const group1Questions = [
    { question: 'Câu hỏi 1:',name: 'question1', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 2:',name: 'question2', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 3:',name: 'question3', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 4:',name: 'question4', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 5:',name: 'question5', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 6:',name: 'question6', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 7:',name: 'question7', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 8:',name: 'question8', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 9:',name: 'question9', options: ['Đúng', 'Sai'] },
    { question: 'Câu hỏi 10:',name: 'question10',options: ['Đúng', 'Sai']}
  ];
  
  const group2Questions = [
    { question: 'Câu hỏi 11:',name: 'question11',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 12:',name: 'question12',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 13:',name: 'question13',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 14:',name: 'question14',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 15:',name: 'question15',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 16:',name: 'question16',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 17:',name: 'question17',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 18:',name: 'question18',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 19:',name: 'question19',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] },
    { question: 'Câu hỏi 20:',name: 'question20',options: ['Chọn đáp án','Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4'] }
  ];
  
  const group3Questions = [
    { question: 'Câu hỏi 21:',name: 'question21',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 22:',name: 'question22',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 23:',name: 'question23',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 24:',name: 'question24',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 25:',name: 'question25',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 26:',name: 'question26',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 27:',name: 'question27',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 28:',name: 'question28',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 29:',name: 'question29',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']},
    { question: 'Câu hỏi 30:',name: 'question30',options: ['Đáp án 1','Đáp án 2','Đáp án 3','Đáp án 4']}
  ];
  
  const group4Questions = [
    { question: 'Câu hỏi 31:',name: 'question31'},
    { question: 'Câu hỏi 32:',name: 'question32'},
    { question: 'Câu hỏi 33:',name: 'question33'},
    { question: 'Câu hỏi 34:',name: 'question34'},
    { question: 'Câu hỏi 35:',name: 'question35'},
    { question: 'Câu hỏi 36:',name: 'question36'},
    { question: 'Câu hỏi 37:',name: 'question37'},
    { question: 'Câu hỏi 38:',name: 'question38'},
    { question: 'Câu hỏi 39:',name: 'question39'},
    { question: 'Câu hỏi 40:',name: 'question40'}
  ];
  
  // Append the survey questions to the DOM
  const surveyQuestionsContainer = document.getElementById('surveyQuestions');
  
  // Group 1 questions
  const group1Container = document.createElement('div');
  group1Container.id = 'group1';
  
  const group1Heading = document.createElement('h3');
  group1Heading.textContent = 'Nhóm 1 - Lựa chọn đúng/sai:';
  group1Container.appendChild(group1Heading);
  
  group1Questions.forEach(question => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
  
    const questionLabel = document.createElement('label');
    questionLabel.setAttribute('for', question.name);
    questionLabel.textContent = question.question;
    questionContainer.appendChild(questionLabel);
  
    question.options.forEach(option => {
      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = question.name;
      optionInput.value = option;
      optionInput.required = true;
      questionContainer.appendChild(optionInput);
  
      const optionLabel = document.createElement('label');
      optionLabel.textContent = option;
      questionContainer.appendChild(optionLabel);
    });
  
    group1Container.appendChild(questionContainer);
  });
  
  surveyQuestionsContainer.appendChild(group1Container);
  
  // Group 2 questions
  const group2Container = document.createElement('div');
  group2Container.id = 'group2';
  
  const group2Heading = document.createElement('h3');
  group2Heading.textContent = 'Nhóm 2 - Chọn 1 trong 4 đáp án:';
  group2Container.appendChild(group2Heading);
  
  group2Questions.forEach(question => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
  
    const questionLabel = document.createElement('label');
    questionLabel.setAttribute('for', question.name);
    questionLabel.textContent = question.question;
    questionContainer.appendChild(questionLabel);
  
    const optionSelect = document.createElement('select');
    optionSelect.id = question.name;
    optionSelect.required = true;
  
    question.options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      optionSelect.appendChild(optionElement);
    });
  
    questionContainer.appendChild(optionSelect);
  
    group2Container.appendChild(questionContainer);
  });
  
  surveyQuestionsContainer.appendChild(group2Container);
  
  // Group 3 questions
  const group3Container = document.createElement('div');
  group3Container.id = 'group3';
  
  const group3Heading = document.createElement('h3');
  group3Heading.textContent = 'Nhóm 3 - Chọn nhiều đáp án:';
  group3Container.appendChild(group3Heading);
  
  group3Questions.forEach(question => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
  
    const questionLabel = document.createElement('label');
    questionLabel.setAttribute('for', question.name);
    questionLabel.textContent = question.question;
    questionContainer.appendChild(questionLabel);
  
    question.options.forEach(option => {
      const optionInput = document.createElement('input');
      optionInput.type = 'checkbox';
      optionInput.name = question.name;
      optionInput.value = option;
      questionContainer.appendChild(optionInput);
  
      const optionLabel = document.createElement('label');
      optionLabel.textContent = option;
      questionContainer.appendChild(optionLabel);
    });
  
    group3Container.appendChild(questionContainer);
  });
  
  surveyQuestionsContainer.appendChild(group3Container);
  
  // Group 4 questions
  const group4Container = document.createElement('div');
  group4Container.id = 'main.js';
  
  const group4Heading = document.createElement('h3');
  group4Heading.textContent = 'Nhóm 4 - Trả lời tự luận:';
  group4Container.appendChild(group4Heading);
  
  group4Questions.forEach(question => {
    
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
  
    const questionLabel = document.createElement('label');
    questionLabel.setAttribute('for', question.name);
    questionLabel.textContent = question.question;
    questionContainer.appendChild(questionLabel);
    
    const textArea = document.createElement('textarea');
    textArea.id = question.name;
    textArea.required = true;
    questionContainer.appendChild(textArea);
  
    group4Container.appendChild(questionContainer);
  });
  
  surveyQuestionsContainer.appendChild(group4Container);

//nút 
const form = document.getElementById('surveyForm');
const startSurveyButton = document.getElementById('startSurveyButton');
const surveyQuestions = document.getElementById('surveyQuestions');
const submitSurveyButton = document.getElementById('submitSurveyButton');

// Thêm sự kiện click cho button "Bắt đầu khảo sát"
startSurveyButton.addEventListener('click', function() {
    // Hiển thị câu hỏi khảo sát
    surveyQuestions.style.display = 'block';

    // Thay đổi button thành "Gửi khảo sát"
    startSurveyButton.style.display = 'none';
    submitSurveyButton.style.display = 'block';  
});


