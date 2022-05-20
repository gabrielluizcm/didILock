window.onload = () => {
  const lockButton = new LockButton();
  lockButton.button.addEventListener('click', lockButton.switchLock.bind(lockButton))
}

class LockButton {
  constructor() {
    this.button = document.querySelector('.unlocked');
    [this.icon, this.text] = this.button.children;
    this.lastLock = localStorage.getItem('lastLock');

    this.#checkInitialStorage();
  }

  switchLock() {
    if (this.lastLock)
      this.unlockButton();
    else
      this.lockButton();
  }

  lockButton() {
    const lastLock = typeof (this.lastLock) === 'string' ? this.lastLock : getCurrentIsoDateTime();
    this.icon.data = './assets/images/locked.svg';
    this.text.innerHTML = `Door locked at ${getLocaleDateFromString(lastLock)}`;
    this.button.classList.remove('unlocked');
    this.button.classList.add('locked');
    this.#setLock(lastLock);
  }

  unlockButton() {
    this.icon.data = './assets/images/unlocked.svg';
    this.text.innerHTML = "Nope, door's unlocked";
    this.button.classList.add('unlocked');
    this.button.classList.remove('locked');
    this.#removeLock();
  }

  #setLock(lastLock) {
    this.lastLock = lastLock;
    localStorage.setItem('lastLock', lastLock);
  }

  #removeLock() {
    this.lastLock = false;
    localStorage.removeItem('lastLock');
  }

  #checkInitialStorage() {
    if (this.lastLock)
      if (getIsoDateFromString(this.lastLock) < getIsoDate())
        this.#removeLock();
      else
        this.lockButton();
  }
}

function getIsoDate(date = new Date()) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function getCurrentIsoDateTime() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function getIsoDateFromString(dateString) {
  return dateString ? getIsoDate(new Date(dateString)) : false;
}

function getLocaleDateFromString(dateString) {
  return (new Date(dateString)).toLocaleString();
}