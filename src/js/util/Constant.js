// 참조 횟수가 중요한 게 아니라 숫자, string의 의미를 정의하는 것이 중요하다

export const MESSAGE = {
  INVALID_AMOUNT_MIN: '최소 금액은 1,000원부터 구매가 가능합니다',
  INVALID_AMOUNT_UNIT: '구매 금액은 1,000원 단위로만 입력이 가능합니다',
  INVALID_WINNING_MODAL: '당첨 번호와 보너스 번호 칸을 모두 입력하세요',
  INVALID_WINNING_NUMBER_RANGE: '당첨 번호와 보너스 번호는 1~45까지만 입력할 수 있습니다',
  INVALID_WINNING_NUMBER_DUPLICATED: '당첨 번호와 보너스 번호는 서로 중복될 수 없습니다',
};

export const LOTTO_ICON = '🎟️';
export const LOTTO_PRICE = 1000;
export const NUMBER_DICTIONARY = [null, null, null, 'three', 'four', 'five', 'six'];
export const CARDINAL_NUMBER = {
  three: 3,
  four: 4,
  five: 5,
  six: 6,
};
export const LOTTO_PRIZE = {
  three: 5_000,
  four: 50_000,
  five: 1_500_000,
  six: 2_000_000_000,
  bonus: 30_000_000,
};

export const PERCENTAGE = 100;
