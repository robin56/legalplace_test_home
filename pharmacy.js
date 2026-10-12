export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  updateStandardDrug() {
    let degradation;
    if (this.expiresIn <= 0) {
      degradation = 2;
    } else {
      degradation = 1;
    }
    this.benefit = Math.max(0, this.benefit - degradation);
    this.expiresIn = this.expiresIn -1;
  }
  updateHerbalTea() {
    let increase;
    if (this.expiresIn <= 0) {
      increase = 2;
    } else {
      increase = 1;
    }
    this.benefit = Math.min(50, this.benefit + increase);
    this.expiresIn = this.expiresIn -1;
  }
  updateFervex() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
    } else if (this.expiresIn <= 5) {
      this.benefit = Math.min(50, this.benefit + 3);
    } else if (this.expiresIn <= 10) {
      this.benefit = Math.min(50, this.benefit + 2);
    } else {
      this.benefit = Math.min(50, this.benefit + 1);
    }
    this.expiresIn = this.expiresIn -1;
  }
  updateMagicPill() {
    // Nothing to do
  }
  updateDafalgan() {
    let degradation;
    if (this.expiresIn <= 0) {
      degradation = 4;
    } else {
      degradation = 2;
    }
    this.benefit = Math.max(0, this.benefit - degradation);
    this.expiresIn = this.expiresIn -1;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name == "Dafalgan") {
        this.drugs[i].updateDafalgan();
      } else if (this.drugs[i].name == "Magic Pill") {
        this.drugs[i].updateMagicPill();
      } else if (this.drugs[i].name == "Herbal Tea") {
        this.drugs[i].updateHerbalTea();
      } else if (this.drugs[i].name == "Fervex") {
        this.drugs[i].updateFervex();
      } else {
        this.drugs[i].updateStandardDrug();
      }
    }
    return this.drugs;
  }
}
