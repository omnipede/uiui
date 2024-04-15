
const myLogger = (store: any) => (next: any) => (action: any) => {
    console.log(action); // 먼저 action 출력
     // 다음 미들웨어에게 액션 전달.
    const result = next(action);
    // 업데이트 이후의 상태 조회
    console.log('\t', store.getState())
    return result;
}

export default myLogger;
