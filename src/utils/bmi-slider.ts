import BMISLIDER from "./const";

const bmiSlideFrom = (score: number) => {
  const indicator_max_left = BMISLIDER.width-(BMISLIDER.indicator_width + BMISLIDER.indicator_border + 4);
  const max_bmi = BMISLIDER.max_bmi;
  return indicator_max_left*(score*100/max_bmi)/100;
}

export default bmiSlideFrom;