class Form2 {

    constructor() {
      
      this.back = createButton("BACK");
      this.submit = createButton("SUBMIT")
      this.questions = [];
      this.hero = createInput();
      this.qid = 1
      this.heroine = createInput();
      this.song = createInput();
      this.movie = createInput();
      this.getData ()
      this.localdb = []
    }
    
    async getData(){
      var localdb = []
      await db.collection('Questions')
              .onSnapshot((snapshot) => {
                var questions = snapshot.docs.map((document) => document.data());
        this.localdb = questions
      });  
    }
  
    display(){
      
      push()
      textSize(60);
      fill(197, 57, 125);
      textFont("Georgia")
      text("Hero - ",displayWidth/2 - 300 , displayHeight/2 - 200)
      this.hero.position(displayWidth/2 - 300 , displayHeight/2 - 150);
      this.hero.size(250,25)

      text("Heroine - ",displayWidth/2 + 50 , displayHeight/2 - 200)
      this.heroine.position(displayWidth/2 + 50 , displayHeight/2 - 150);
      this.heroine.size(250,25)

      text("Song - ",displayWidth/2 - 300 , displayHeight/2 - 20)
      this.song.position(displayWidth/2 - 300 , displayHeight/2 + 40);
      this.song.size(250,25)

      text("Movie - ",displayWidth/2 + 50 , displayHeight/2 - 20)
      this.movie.position(displayWidth/2 + 50 , displayHeight/2 + 40);
      this.movie.size(250,25)
      pop()

      this.back.position(displayWidth/2 - 660, displayHeight/2 - 360);
      this.back.style("color","purple")

      this.back.mousePressed(()=>{
        gameState = 0;
        this.back.hide();
        this.hero.hide();
        this.heroine.hide();
        this.song.hide();
        this.movie.hide();
        this.submit.hide()
        form.reappear()
          
      })

      text(mouseX + mouseY,mouseX,mouseY)
      textSize(30)
      fill(204, 36, 117)
      text("Trivia about the movie : ",displayWidth/2 - 660, displayHeight/2 + 200)
      line(displayWidth/2, displayHeight/2 - 250, displayWidth/2, displayHeight/2 + 110)
      line(displayWidth/2 - 340, displayHeight/2 - 80, displayWidth/2 + 365, displayHeight/2 - 80)
      
      for (var qid in this.localdb){
        if(this.qid === this.localdb[qid].q_id ){
          this.questions = this.localdb[qid]
        }
      }
      
     this.submit.mousePressed(async()=>{
       console.log("clicked")
       console.log(this.qid)
        var dbref = await db.collection('Answers').doc("this.qid");
        console.log(dbref)
        dbref.get().then((doc) => {
          if (doc.exists) {
                this.answers = doc.data();
            };
        })
        })
      
      /*if(answers.hero === this.hero.val){
        flag = 1
      }
      if(flag === 4){
        console.log("GO TO QUESTION 2")
        this.qid = this.qid + 1
      }
      else{
        console.log("try-again")
      }*/
    }
    displayQuestions(){
      push()
      textSize(60);
      fill(197, 57, 125);
      textFont("Georgia")
      text(this.questions.hero,(displayWidth/2 - 300)+170 , displayHeight/2 - 200)
      this.hero.position(displayWidth/2 - 300 , displayHeight/2 - 150);
      this.hero.size(250,25)

     /* text("Heroine - ",displayWidth/2 + 50 , displayHeight/2 - 200)
      this.heroine.position(displayWidth/2 + 50 , displayHeight/2 - 150);
      this.heroine.size(250,25)

      text("Song - ",displayWidth/2 - 300 , displayHeight/2 - 20)
      this.song.position(displayWidth/2 - 300 , displayHeight/2 + 40);
      this.song.size(250,25)

      text("Movie - ",displayWidth/2 + 50 , displayHeight/2 - 20)
      this.movie.position(displayWidth/2 + 50 , displayHeight/2 + 40);
      this.movie.size(250,25)*/
      pop()

    }
  }
  
  