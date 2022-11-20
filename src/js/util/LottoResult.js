import { LOTTO_PRIZE, NUMBER_DICTIONARY, PERCENTAGE } from './Constant.js';

/**
 * @typedef {Object} LottoResult
 * @property {number} three
 * @property {number} four
 * @property {number} five
 * @property {number} six
 * @property {number} bonus
 */

/**
 * @param {number[]} lotto
 * @param {number[]} winningNumbers
 * @param {number} bonusNumber
 * @returns {number[]}
 */
const getMyHit = (lotto, winningNumbers, bonusNumber) => {
  let hit = 0;
  let bonusHit = 0;
  for (const number of lotto) {
    if (winningNumbers.includes(number)) {
      hit += 1;
      continue;
    }
    if (number === bonusNumber) {
      bonusHit += 1;
    }
  }
  return [hit, bonusHit];
};

/**
 * @param {number[][]} lottos
 * @param {number[]} winningNumbers
 * @param {number} bonusNumber
 * @returns {LottoResult}
 */
export const getLottoResults = (lottos, winningNumbers, bonusNumber) => {
  const result = { three: 0, four: 0, five: 0, six: 0, bonus: 0 }; // bouns: 5+bonus
  const isBonusHit = (hit, bonusHit) => hit === 5 && bonusHit === 1;

  for (const lotto of lottos) {
    const [hitCount, bonusHitCount] = getMyHit(lotto, winningNumbers, bonusNumber);
    if (hitCount < 3) continue;
    if (isBonusHit(hitCount, bonusHitCount)) {
      result.bonus += 1;
      continue;
    }
    result[NUMBER_DICTIONARY[hitCount]] += 1;
  }

  lottos.reduce(
    (result, lotto) => {
      const [hitCount, bonusHitCount] = getMyHit(lotto, winningNumbers, bonusNumber);
      if (hitCount < 3) return result;
      if (isBonusHit(hitCount, bonusHitCount)) {
        result.bonus += 1;
        return result;
      }
      return (result[NUMBER_DICTIONARY[hitCount]] += 1);
    },
    { three: 0, four: 0, five: 0, six: 0, bonus: 0 }
  );

  return result;
};

/**
 * @param {LottoResult} lottoResult
 * @returns {number}
 */
export const getMyPrizeAmount = (lottoResult = { three: 0, four: 0, five: 0, six: 0, bonus: 0 }) => {
  return Object.keys(lottoResult).reduce((sum, key) => {
    const count = lottoResult[key];
    if (count) {
      return sum + LOTTO_PRIZE[key] * count;
    }
  }, 0);

  // let sum = 0;
  // for (const key of Object.keys(lottoResult)) {
  //   const value = lottoResult[key];
  //   if (value === 0) continue;
  //   sum += prize[key] * value;
  // }
  // return sum;
};

/**
 * @param {number} purchasingAmount
 * @param {number} pirzeMoney
 * @returns {number}
 */
export const getMyEarningRate = (purchasingAmount = 0, pirzeMoney = 0) => {
  if (pirzeMoney - purchasingAmount <= 0) {
    return -1 * PERCENTAGE;
  }
  return ((pirzeMoney - purchasingAmount) / purchasingAmount) * PERCENTAGE;
};
