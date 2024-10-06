let step = 0; 
            let selectedClass = '';
            let selectedSubject = '';
          
           
            function sendMessage() {
                const userMessage = document.getElementById("userInput").value;
                document.getElementById("userInput").value = ''; 
                appendMessage("User", userMessage);
          
                setTimeout(() => {
                    processMessage(userMessage);
                }, 500); 
            }
          
            
            function processMessage(message) {
                if (step === 0) {
                    appendMessage("Bot", "Which class are you in? (Select from 1 to 10)");
                    step = 1;
                } else if (step === 1) {
                    selectedClass = message.trim();
                    if (isValidClass(selectedClass)) {
                        appendMessage("Bot", `Great! You selected Class ${selectedClass}. Please choose a subject: (Maths, Science, English, Hindi)`);
                        step = 2;
                    } else {
                        appendMessage("Bot", "Please enter a valid class between 1 and 10.");
                    }
                } else if (step === 2) {
                    selectedSubject = message.trim().toLowerCase();
                    let link = getSubjectLink(selectedClass, selectedSubject);
                    if (link) {
                        appendMessage("Bot", `Here is the study material for Class ${selectedClass} - ${selectedSubject}: <a href="${link}" target="_blank">Click Here</a>`);
                        step = 0; 
                    } else {
                        appendMessage("Bot", "Sorry, I don't have a link for that subject. Please choose from Maths, Science, English, or Hindi.");
                    }
                }
            }
          
            // Function to append messages to the chat window
            function appendMessage(sender, message) {
                const chatWindow = document.getElementById("chat-window");
                const messageElement = document.createElement("div");
                messageElement.classList.add(sender === "User" ? "user-message" : "bot-message");
                messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
                chatWindow.appendChild(messageElement);
                chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
            }
          
            // Function to validate class input
            function isValidClass(classInput) {
                const classNumber = parseInt(classInput);
                return classNumber >= 1 && classNumber <= 10;
            }
          
            
            function getSubjectLink(selectedClass, selectedSubject) {
                const links = {
                    "1": {
                        "maths": "https://ncert.nic.in/textbook.php?kemh1=0-16",
                        "science": "https://drive.google.com/example-science-class-1",
                        "english": "https://drive.google.com/example-english-class-1",
                        "hindi": "https://drive.google.com/example-hindi-class-1"
                    },
                    "2": {
                        "maths": "https://drive.google.com/example-maths-class-2",
                        "science": "https://drive.google.com/example-science-class-2",
                        "english": "https://drive.google.com/example-english-class-2",
                        "hindi": "https://drive.google.com/example-hindi-class-2"
                    },"3": {
                                "maths": "https://ncert.nic.in/textbook.php?kemh1=0-16",
                                "science": "https://drive.google.com/example-science-class-1",
                                "english": "https://drive.google.com/example-english-class-1",
                                "hindi": "https://drive.google.com/example-hindi-class-1"
                            },
                            "4": {
                                "maths": "https://drive.google.com/example-maths-class-2",
                                "science": "https://drive.google.com/example-science-class-2",
                                "english": "https://drive.google.com/example-english-class-2",
                                "hindi": "https://drive.google.com/example-hindi-class-2"
                            },"5": {
                                "maths": "https://ncert.nic.in/textbook.php?kemh1=0-16",
                                "science": "https://drive.google.com/example-science-class-1",
                                "english": "https://drive.google.com/example-english-class-1",
                                "hindi": "https://drive.google.com/example-hindi-class-1"
                            },
                            "6": {
                                "maths": "https://drive.google.com/example-maths-class-2",
                                "science": "https://drive.google.com/example-science-class-2",
                                "english": "https://drive.google.com/example-english-class-2",
                                "hindi": "https://drive.google.com/example-hindi-class-2"
                            },"7": {
                                "maths": "https://ncert.nic.in/textbook.php?kemh1=0-16",
                                "science": "https://drive.google.com/example-science-class-1",
                                "english": "https://drive.google.com/example-english-class-1",
                                "hindi": "https://drive.google.com/example-hindi-class-1"
                            },
                            "8": {
                                "maths": "https://drive.google.com/example-maths-class-2",
                                "science": "https://drive.google.com/example-science-class-2",
                                "english": "https://drive.google.com/example-english-class-2",
                                "hindi": "https://drive.google.com/example-hindi-class-2"
                            },"9": {
                                "maths": "https://ncert.nic.in/textbook.php?kemh1=0-16",
                                "science": "https://drive.google.com/example-science-class-1",
                                "english": "https://drive.google.com/example-english-class-1",
                                "hindi": "https://drive.google.com/example-hindi-class-1"
                            },
                            "10": {
                                "maths": "https://drive.google.com/example-maths-class-2",
                                "science": "https://drive.google.com/example-science-class-2",
                                "english": "https://drive.google.com/example-english-class-2",
                                "hindi": "https://drive.google.com/example-hindi-class-2"
                            
                        },
                    
                };
          
                return links[selectedClass] ? links[selectedClass][selectedSubject] : null;
            }
        
           
            function resetChat() {
                document.getElementById("chat-window").innerHTML = '';
                step = 0; 
                selectedClass = ''; 
                selectedSubject = ''; 
                appendMessage("Bot", "Chat has been reset. Which class are you in? (Select from 1 to 10)"); 
            }
        
          
 
      var navlinks = document.getElementById("navlinks");
      function showMenu() {
          navlinks.style.right = "0";
      }
      function hideMenu() {
          navlinks.style.right = "-200px";
      }

      function loadContent(page) {
        var content = document.getElementById('content');
          if (page === 'home') {
              content.innerHTML = `
               <center>
                      <h3>Welcome to JD Public School</h3>
                      </center>
                  <div class='slider-container'>
                  <div id ="home"class='slider'>
                      
                     <img  class src="IMG-20240722-WA0004.jpg"  alt="#">
                    <img src="IMG-20240722-WA0006.jpg"  alt="#">
                    <img src="IMG-20240722-WA0007.jpg"  alt="#">
                    <img src="IMG-20240722-WA0008.jpg"  alt="#">
                    <img src="IMG-20240722-WA0009.jpg"  alt="#">
                    <img src="IMG-20240722-WA0010.jpg"  alt="#">
                    <img src="IMG-20240722-WA0011.jpg"  alt="#">
                    <img src="IMG-20240722-WA0012.jpg"  alt="#">
                    <img src="IMG-20240722-WA0013.jpg"  alt="#">
                    <img src="IMG-20240722-WA0014.jpg"  alt="#">
                    <img src="IMG-20240722-WA0015.jpg" alt="#">
                      
                  </div>
                  
                  <h1>Welcome to JD Public School</h1>
                  <p>
                      Student Achievements: Share success stories of students who have excelled academically, socially, or in extracurricular activities.
                      <br>Supportive Teachers: Recognize educators who go above and beyond to support students both academically and personally.
                  </p>
                  <a href="#" class="j-btn" onclick="loadContent('home')">Visit Us to Know More</a>
              `;
              const slider = document.querySelector('.slider');
        let currentIndex = 0;
        
        function showNextImage() {
          currentIndex++;
          if (currentIndex >= slider.children.length) {
            currentIndex = 0;
          }
          slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        setInterval(showNextImage, 3000);

         

         
}
else if (page === 'contact') {
              content.innerHTML = `<div id="contact">
                  <h2>Contact Us</h2>
                  <p>If you have any questions or need further information, please feel free to contact us:</p>
                  <p><i class="fa fa-map-marker-alt"></i> Tyagi Nagar, Morar, Gwalior</p>
                  <p><i class="fa fa-phone-alt"></i> +91 9584696901, 7828873065</p>
                  <p><i class="fa fa-envelope"></i> jdpublicschoolgwl@gmail.com</p>
                  <p>We look forward to hearing from you!</p>
              </div>`;
          } else if (page === 'join') {
              content.innerHTML = `<div id="join">
                  <h2>Join Our School</h2>
                  <p>We are always looking for talented and dedicated individuals to join our team. If you are passionate about education and making a positive impact on students' lives, please contact us:</p>
                  <p><i class="fa fa-envelope"></i> careers@jdpublicschool.com</p>
                  <p>We look forward to welcoming you to the JD Public School family!</p>
              </div>`;
          }
      }
