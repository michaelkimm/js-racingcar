export const randMoveForward = (range, standard) => {
    const randomNumber = Math.floor(Math.random() * range); // 0부터 9까지 랜덤 숫자 생성
    return randomNumber >= standard; // 4 이상이면 true, 아니면 false
}