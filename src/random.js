export const randMoveForward = () => {
    const randomNumber = Math.floor(Math.random() * 10); // 0부터 9까지 랜덤 숫자 생성
    return randomNumber >= 4; // 4 이상이면 true, 아니면 false
}