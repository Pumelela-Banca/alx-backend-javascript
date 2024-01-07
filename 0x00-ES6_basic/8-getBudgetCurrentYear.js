function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  let income = `income-${getCurrentYear()}`;
  let gdp = `gdp-${getCurrentYear()}`;
  let capita = `capita-${getCurrentYear()}`;
  const budget = {
    [income]: income,
    [gdp]: gdp,
    [capita]: capita
  };

  return budget;
}
