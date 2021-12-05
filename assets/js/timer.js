class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: document.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset")
    };
    this.day = new Date();
    this.options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'

    };
    this.interval = null;
    this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
    // this.tempHistory = []
    this.remainingSeconds = localStorage.getItem('previousTime') ? localStorage.getItem('previousTime') : 30 * 60;
    this.updateInterfaceTime();

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
        localStorage.setItem("previousTime", this.remainingSeconds);
        this.history.push({
          'time': this.remainingSeconds,
          'date': this.day.toLocaleDateString(undefined, this.options)
        });
        console.log(this.history);
        localStorage.setItem('history', JSON.stringify(this.history));
        this.getRecords();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    const time_limit = ((minutes * 60) * 1000);

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    this.getRecords();
  }


  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;
  }

  static getHTML() {
    return `
              <span class="mins timer__part timer__part--minutes">00</span>
              <span class="timer__part">mins</span>
              <span class="secs timer__part timer__part--seconds">00</span>
              <span class="timer__part">secs</span>`
  }

  getRecords() {
    let records = document.querySelector('#records')
    let content = ``;
    this.history.forEach(record => {
      const minutes = Math.floor(record.time / 60);
      const seconds = record.time % 60;
      content += `<div class="row border-bottom">
                  <div class="col"><p id="" class="small-text "> ${minutes} mins ${seconds} secs</p></div>
                  <div class="col "><p id="" class="small-text right"> ${record.date}</p></div>
                  </div>`
    })
    records.innerHTML = content;
  }
}

new Timer(
  document.querySelector(".timer")
);




