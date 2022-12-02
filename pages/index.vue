<template>
  <b-container>
    <div class="wrapper">
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
    </div>
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="12">
        <h1> <span class="title">BAP - Lord of the time</span><br>
          <img src='~/static/giphy.gif' style="margin-top: 5%;max-width: 70%;" ><br/>
          <p class="font-event">Đã đến lúc trật tự đó phải bị phá vỡ và chính con người sẽ làm chủ thời gian.</p>
         
          <b-row style="margin-top: 10%">
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
          </b-row>
          <b-row>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" src="~/static/lock.png" />
            </div>
            <div class="col-4 col-sm-2">
              <img class="lock" style="margin-top:14px; width: 94%;" src="~/static/notchal.png" />
            </div>
          </b-row>
          
        </h1>
      
         
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
      return {
        mountains: []
      }
    },
  async fetch() {
      this.mountains = await  fetch("https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh")
        .then(response => response.json())
    },
  computed: {
    listday() {
      const dates = new Date(this.mountains.datetime)
      const tt1 = new Date('Dec 2, 2022 12:09:00')
      if (dates.getTime() >= tt1.getTime()) {
        return 1
      }
      return 0 
    }
  }
}
</script>
<style>
h1 {
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  color: white;
  font-size: 4rem;
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}
.lock {
    max-width: 100%;
}
span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  margin-top: 5vh;
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(17) {
  animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(18) {
  animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
* {
  margin: 0;
  padding: 0;
}

.wrapper h1 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-family: sans-serif;
  letter-spacing: 1px;
  word-spacing: 2px;
  color: #fff;
  font-size: 40px;
  font-weight: 888;
  text-transform: uppercase;
}
.wrapper div {
  height: 60px;
  width: 60px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  position: absolute;
  top: 10%;
  left: 10%;
  animation: 4s linear infinite;
}
div .dot {
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 20%;
  right: 20%;
}
.wrapper div:nth-child(1) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(2) {
  top: 60%;
  left: 80%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(3) {
  top: 40%;
  left: 40%;
  animation: animate 3s linear infinite;
}
.wrapper div:nth-child(4) {
  top: 66%;
  left: 30%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(5) {
  top: 90%;
  left: 10%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(6) {
  top: 30%;
  left: 60%;
  animation: animate 5s linear infinite;
}
.wrapper div:nth-child(7) {
  top: 70%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(8) {
  top: 75%;
  left: 60%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(9) {
  top: 50%;
  left: 50%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(10) {
  top: 45%;
  left: 20%;
  animation: animate 10s linear infinite;
}
.wrapper div:nth-child(11) {
  top: 10%;
  left: 90%;
  animation: animate 9s linear infinite;
}
.wrapper div:nth-child(12) {
  top: 20%;
  left: 70%;
  animation: animate 7s linear infinite;
}
.wrapper div:nth-child(13) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper div:nth-child(14) {
  top: 60%;
  left: 5%;
  animation: animate 6s linear infinite;
}
.wrapper div:nth-child(15) {
  top: 90%;
  left: 80%;
  animation: animate 9s linear infinite;
}
@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
}

</style>
