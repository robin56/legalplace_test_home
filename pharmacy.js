const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  updateStandardDrug() {
    const degradation = this.expiresIn <= 0 ? 2 : 1;
    this.benefit = Math.max(MIN_BENEFIT, this.benefit - degradation);
    this.expiresIn -= 1;
  }
  updateHerbalTea() {
    const increase = this.expiresIn <= 0 ? 2 : 1;
    this.benefit = Math.min(MAX_BENEFIT, this.benefit + increase);
    this.expiresIn -= 1;
  }
  updateFervex() {
    if (this.expiresIn <= 0) {
      this.benefit = MIN_BENEFIT;
    } else if (this.expiresIn <= 5) {
      this.benefit = Math.min(MAX_BENEFIT, this.benefit + 3);
    } else if (this.expiresIn <= 10) {
      this.benefit = Math.min(MAX_BENEFIT, this.benefit + 2);
    } else {
      this.benefit = Math.min(MAX_BENEFIT, this.benefit + 1);
    }
    this.expiresIn -= 1;
  }
  updateMagicPill() {
    // Nothing to do
  }
  updateDafalgan() {
    const degradation = this.expiresIn <= 0 ? 4 : 2;
    this.benefit = Math.max(MIN_BENEFIT, this.benefit - degradation);
    this.expiresIn -= 1;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name === "Dafalgan") {
        this.drugs[i].updateDafalgan();
      } else if (this.drugs[i].name === "Magic Pill") {
        this.drugs[i].updateMagicPill();
      } else if (this.drugs[i].name === "Herbal Tea") {
        this.drugs[i].updateHerbalTea();
      } else if (this.drugs[i].name === "Fervex") {
        this.drugs[i].updateFervex();
      } else {
        this.drugs[i].updateStandardDrug();
      }
    }
    return this.drugs;
  }
}
