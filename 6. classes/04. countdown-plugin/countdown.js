export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  // retornando o dia atual
  get _today() {
    return new Date();
  }
  // retornando a futura data
  get _futureDate() {
    return new Date(this.futureDate);
  }
  //  diferença em ms do natal e a data atual
  get _timeDiff() {
    return this._futureDate.getTime() - this._today.getTime();
  }
  // dias/horas/minutos/segundos
  get days() {
    return Math.floor(this._timeDiff / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeDiff / 1000);
  }
  // Retornando o tempo restante
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
